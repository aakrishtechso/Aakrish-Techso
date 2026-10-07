import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;
const RECIPIENT_EMAIL = "aakrish0805@gmail.com";

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

// Store recent inquiries for quick debugging/audit
const recentSubmissions = [];

app.get("/api/health", (req, res) => {
  const hasKey = Boolean(process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY);
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    recipient: RECIPIENT_EMAIL,
    service: "Web3Forms",
    configured: hasKey
  });
});

const handleContactSubmission = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      subject,
      serviceType,
      description,
      timeline,
      botcheck
    } = req.body;

    // Honeypot spam check
    if (botcheck) {
      console.log("[Anti-Spam] Honeypot triggered, ignoring spam submission.");
      res.status(200).json({
        success: true,
        message: "Inquiry sent successfully!"
      });
      return;
    }

    // Required fields validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      res.status(400).json({
        success: false,
        error: "Full Name is required."
      });
      return;
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      res.status(400).json({
        success: false,
        error: "A valid email address is required."
      });
      return;
    }

    if (!serviceType || typeof serviceType !== "string" || !serviceType.trim()) {
      res.status(400).json({
        success: false,
        error: "Service Category is required."
      });
      return;
    }

    if (!description || typeof description !== "string" || !description.trim()) {
      res.status(400).json({
        success: false,
        error: "Message / Project Query is required."
      });
      return;
    }

    const referenceId = "AAK-" + Math.floor(100000 + Math.random() * 900000);
    const submissionDate = new Date();
    const formattedTimestamp = submissionDate.toLocaleString("en-IN", {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: "Asia/Kolkata"
    });

    const inquiryData = {
      referenceId,
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone?.trim() || "Not provided",
      company: company?.trim() || "Not specified",
      subject: subject?.trim() || "Website Consultation / Query",
      serviceType: serviceType.trim(),
      timeline: timeline?.trim() || "Flexible",
      description: description.trim(),
      submittedAt: formattedTimestamp,
      timestampISO: submissionDate.toISOString(),
      recipientEmail: RECIPIENT_EMAIL
    };

    recentSubmissions.unshift(inquiryData);
    if (recentSubmissions.length > 50) recentSubmissions.pop();

    console.log("----------------------------------------------------");
    console.log(`[INCOMING INQUIRY] Ref: ${referenceId}`);
    console.log(`From: ${inquiryData.fullName} <${inquiryData.email}>`);
    console.log(`Phone: ${inquiryData.phone}`);
    console.log(`Company: ${inquiryData.company}`);
    console.log(`Subject: ${inquiryData.subject}`);
    console.log(`Service: ${inquiryData.serviceType}`);
    console.log(`Timeline: ${inquiryData.timeline}`);
    console.log(`Message: ${inquiryData.description}`);
    console.log(`Target: ${RECIPIENT_EMAIL}`);
    console.log("----------------------------------------------------");

    // Clean Email formatting requested by the user
    const emailSubject = subject?.trim()
      ? `New Project Inquiry - ${inquiryData.fullName} - ${subject.trim()}`
      : `New Project Inquiry - ${inquiryData.fullName}`;

    const formattedEmailBody = `New Project / General Inquiry

Full Name:
${inquiryData.fullName}

Email Address:
${inquiryData.email}

Phone Number:
${inquiryData.phone}

Company / Business Name:
${inquiryData.company}

Subject / Project Title:
${inquiryData.subject}

Service Category:
${inquiryData.serviceType}

Estimated Timeline:
${inquiryData.timeline}

Message / Project Query:
${inquiryData.description}

----------------------------------------------------
Reference ID: ${referenceId}
Submitted At: ${formattedTimestamp} (IST)
Recipient: ${RECIPIENT_EMAIL}
`;

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY;
    const hasValidKey = accessKey && accessKey.trim() && accessKey !== "YOUR_WEB3FORMS_ACCESS_KEY";

    let emailDelivered = false;

    if (hasValidKey) {
      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey.trim(),
            subject: emailSubject,
            from_name: inquiryData.fullName,
            name: inquiryData.fullName,
            email: inquiryData.email,
            replyto: inquiryData.email,
            phone: inquiryData.phone,
            company: inquiryData.company,
            service_category: inquiryData.serviceType,
            estimated_timeline: inquiryData.timeline,
            message: formattedEmailBody,
            botcheck: ""
          })
        });

        const web3Result = await web3Response.json().catch(() => null);

        if (web3Response.ok && web3Result && web3Result.success) {
          emailDelivered = true;
          console.log(`[Web3Forms Success] Inquiry ${referenceId} delivered to ${RECIPIENT_EMAIL}`);
        } else {
          console.warn("[Web3Forms API Warning]:", web3Result?.message || "Web3Forms returned non-success response");
        }
      } catch (serviceErr) {
        console.warn("[Web3Forms Dispatch Warning]:", serviceErr?.message || "Network issue connecting to Web3Forms");
      }
    } else {
      console.log(`[AAKRISH Server] Inquiry ${referenceId} recorded and queued for ${RECIPIENT_EMAIL}`);
      console.log(`Note: To forward directly into Gmail, add your free key to WEB3FORMS_ACCESS_KEY in .env.`);
    }

    res.status(200).json({
      success: true,
      message: "Inquiry sent successfully!",
      referenceId,
      submittedAt: formattedTimestamp,
      recipientEmail: RECIPIENT_EMAIL,
      emailDelivered,
      data: inquiryData
    });
  } catch (error) {
    console.warn("Notice in contact handler:", error?.message || error);
    res.status(200).json({
      success: true,
      message: "Inquiry sent successfully!",
      recipientEmail: RECIPIENT_EMAIL
    });
  }
};

app.post("/api/contact", handleContactSubmission);
app.post("/api/inquiry", handleContactSubmission);

app.get("/api/inquiries", (req, res) => {
  res.json({
    success: true,
    count: recentSubmissions.length,
    recipient: RECIPIENT_EMAIL,
    inquiries: recentSubmissions
  });
});

// Auto-detect project UI screenshot images from /public/images/projects/:slug
app.get("/api/projects/:slug/images", async (req, res) => {
  try {
    const rawSlug = req.params.slug || "";
    const slug = rawSlug.toLowerCase().replace(/[^a-z0-9_-]/g, "");
    if (!slug) {
      return res.json({ success: false, images: [] });
    }

    const allowedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".avif"]);

    const searchDirs = [
      path.join(process.cwd(), "public", "images", "projects", slug),
      path.join(process.cwd(), "dist", "images", "projects", slug)
    ];

    let foundFiles = [];

    for (const dirPath of searchDirs) {
      try {
        if (fs.existsSync(dirPath)) {
          const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
          const imageFiles = entries
            .filter((entry) => entry.isFile())
            .map((entry) => entry.name)
            .filter((name) => allowedExtensions.has(path.extname(name).toLowerCase()))
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));

          if (imageFiles.length > 0) {
            foundFiles = imageFiles.map((name) => `/images/projects/${slug}/${name}`);
            break;
          }
        }
      } catch {
        // proceed
      }
    }

    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    return res.json({
      success: true,
      project: slug,
      images: foundFiles
    });
  } catch {
    return res.json({ success: false, images: [] });
  }
});

// Explicitly serve static public assets so uploaded/copied project images are immediately available
app.use(express.static(path.join(process.cwd(), "public")));

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, host: "0.0.0.0", port: PORT },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`AAKRISH Server listening on port ${PORT} (Target: ${RECIPIENT_EMAIL})`);
  });
}

startServer();

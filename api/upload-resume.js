import { put, del } from "@vercel/blob";

export default async function handler(req, res) {
  // DELETE — remove old resume
  if (req.method === "DELETE") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      if (body?.url) await del(body.url, { token: process.env.BLOB_READ_WRITE_TOKEN });
      return res.status(200).json({ ok: true });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  // PUT — upload new resume
  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const filename = req.headers["x-filename"] || "resume.pdf";
    // Stream req body directly to Vercel Blob
    const blob = await put(`resume/${filename}`, req, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
      addRandomSuffix: false,
      contentType: req.headers["content-type"] || "application/pdf",
    });
    return res.status(200).json({ url: blob.url, name: filename });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

export const config = {
  api: {
    bodyParser: false,
    sizeLimit: "10mb",
  },
};

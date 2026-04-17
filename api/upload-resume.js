import { put, del } from "@vercel/blob";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      if (body?.url) await del(body.url, { token: process.env.BLOB_READ_WRITE_TOKEN });
      return res.status(200).json({ ok: true });
    } catch {
      return res.status(500).json({ error: "Delete failed" });
    }
  }

  if (req.method !== "PUT") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const filename = req.headers["x-filename"] || "resume.pdf";
    const blob = await put(`resume/${filename}`, req, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
      allowOverwrite: true,
    });
    return res.status(200).json({ url: blob.url, name: filename });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}

export const config = {
  api: { bodyParser: false },
};

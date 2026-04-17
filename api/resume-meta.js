import { list } from "@vercel/blob";

export default async function handler(req, res) {
  try {
    const { blobs } = await list({
      prefix: "resume/",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    if (!blobs.length) return res.status(200).json(null);

    const latest = blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt))[0];

    return res.status(200).json({
      url: latest.url,
      name: latest.pathname.replace("resume/", ""),
      uploadedAt: new Date(latest.uploadedAt).toLocaleDateString(),
      size: latest.size > 1024 * 1024
        ? (latest.size / (1024 * 1024)).toFixed(2) + " MB"
        : (latest.size / 1024).toFixed(1) + " KB",
    });
  } catch {
    return res.status(200).json(null);
  }
}

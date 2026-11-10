import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const itemId = formData.get("itemId") as string | null;
  if (!file || !itemId) return NextResponse.json({ error: "Missing file or itemId" }, { status: 400 });

  const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const filename = `${itemId}.${ext}`;
  const outputPath = path.join(process.cwd(), "public", "images", "merch", filename);
  fs.writeFileSync(outputPath, Buffer.from(await file.arrayBuffer()));

  return NextResponse.json({ ok: true, image: `/images/merch/${filename}` });
}

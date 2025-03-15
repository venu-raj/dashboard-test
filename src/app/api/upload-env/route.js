import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import formidable from "formidable";

export async function POST(req) {
  const form = formidable({ multiples: false });
  const [fields, files] = await form.parse(req);
  
  if (!files.envFile) return NextResponse.json({ error: "No file uploaded" }, { status: 400 });

  const tempPath = files.envFile[0].filepath;
  const destPath = path.join(process.cwd(), ".env");

  fs.copyFileSync(tempPath, destPath);

  return NextResponse.json({ success: true });
}

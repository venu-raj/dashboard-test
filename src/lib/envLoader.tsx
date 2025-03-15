import fs from "fs";
import dotenv from "dotenv";
import path from "path";

export function loadEnv() {
  const envPath = path.join(process.cwd(), ".env");

  if (!fs.existsSync(envPath)) {
    return { SITE_NAME: "GitHub Clone", PRODUCTS: "[]" };
  }

  const envConfig = dotenv.parse(fs.readFileSync(envPath));
  return {
    SITE_NAME: envConfig.SITE_NAME || "GitHub Clone",
    PRODUCTS: envConfig.PRODUCTS || "[]"
  };
}

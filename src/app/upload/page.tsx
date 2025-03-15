"use client";
import { useState } from "react";
import axios from "axios";

export default function UploadEnv() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleUpload = async () => {
    if (!file) return setStatus("Please select a file");

    const formData = new FormData();
    formData.append("envFile", file);

    setStatus("Uploading...");

    try {
      await axios.post("/api/upload-env", formData);
      setStatus("Uploaded! Refresh to see changes.");
    } catch (error) {
      setStatus("Upload failed.");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Upload Your `.env` File</h1>
      <input type="file" accept=".env" onChange={(e) => setFile(e.target.files[0])} className="mt-2 border p-2" />
      <button onClick={handleUpload} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Upload</button>
      <p className="mt-4 text-red-500">{status}</p>
    </div>
  );
}

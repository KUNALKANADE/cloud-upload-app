import { useState } from "react";
import { supabase } from "../supabaseClient";

export default function Upload({ setFiles }) {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event) => {
    try {
      setUploading(true);
      const file = event.target.files[0];
      if (!file) return;

      const fileName = Date.now() + "_" + file.name;

      const { error } = await supabase.storage
        .from("uploads")
        .upload(fileName, file);

      if (error) throw error;

      const { data } = supabase.storage
        .from("uploads")
        .getPublicUrl(fileName);

      setFiles((prev) => [...prev, data.publicUrl]);
    } catch (error) {
      alert("Upload failed: " + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-box">
      <input type="file" onChange={handleUpload} />
      {uploading && <p>Uploading... ⏳</p>}
    </div>
  );
}
export default function FileList({ files }) {
  return (
    <div className="file-list">
      <h3>📂 Uploaded Files</h3>

      {files.length === 0 && <p>No files uploaded yet</p>}

      {files.map((file, index) => (
        <div key={index} className="file-item">
          <span>File {index + 1}</span>
          <a href={file} target="_blank" rel="noreferrer">
            View
          </a>
        </div>
      ))}
    </div>
  );
}
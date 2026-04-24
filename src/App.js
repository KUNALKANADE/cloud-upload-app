import { useState } from "react";
import Upload from "./components/Upload";
import FileList from "./components/FileList";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);

  return (
    <div className="container">
      <h1>☁️ Cloud File Upload</h1>

      <Upload setFiles={setFiles} />
      <FileList files={files} />
    </div>
  );
}

export default App;
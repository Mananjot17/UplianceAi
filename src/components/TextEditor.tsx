import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [content, setContent] = useState(
    localStorage.getItem("userData") || ""
  );

  return <ReactQuill theme="snow" value={content} onChange={setContent} />;
};

export default RichTextEditor;

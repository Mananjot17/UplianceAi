import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ userData }: any) => {
  // Create content with user data formatted as HTML
  const initialContent = `
    <h2>User Profile</h2>
    <p><strong>Name:</strong> ${userData.name || "N/A"}</p>
    <p><strong>Email:</strong> ${userData.email || "N/A"}</p>
    <p><strong>Phone:</strong> ${userData.phone || "N/A"}</p>
    <p><strong>Address:</strong> ${userData.address || "N/A"}</p>
  `;

  const [content, setContent] = useState(initialContent);

  useEffect(() => {
    // Update the content when userData changes
    setContent(`
      <h2>User Profile</h2>
      <p><strong>Name:</strong> ${userData.name || "N/A"}</p>
      <p><strong>Email:</strong> ${userData.email || "N/A"}</p>
      <p><strong>Phone:</strong> ${userData.phone || "N/A"}</p>
      <p><strong>Address:</strong> ${userData.address || "N/A"}</p>
    `);
  }, [userData]);

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto p-4 overflow-hidden">
      <h2 className="text-xl sm:text-2xl font-semibold">Text Editor</h2>
      <div className="w-full h-full max-h-[500px] overflow-auto">
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          className="w-full h-full" // Full width and height
          modules={{
            toolbar: [
              [{ header: "1" }, { header: "2" }, { font: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline"],
              ["link"],
              ["blockquote"],
              ["image"],
              ["code-block"],
              [{ align: [] }],
              ["clean"],
            ],
          }}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;

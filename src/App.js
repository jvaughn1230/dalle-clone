import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [inputText, setInputText] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const api = process.env.REACT_APP_SERVER_API;
  const [isSaving, setIsSaving] = useState(false);

  // Generate Image
  const generateImage = async () => {
    try {
      const response = await axios.post(`${api}/generate-image`, {
        inputText: inputText,
      });

      setImageSrc(`data:image/png;base64,${response.data.imageBase64}`);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  // download image
  const downloadImage = () => {
    if (imageSrc) {
      const link = document.createElement("a");
      link.href = imageSrc;
      link.download = "generated-image.png";
      link.click();
    }
  };

  //save image
  const saveImage = async () => {
    if (!imageSrc) return;

    setIsSaving(true);
    try {
      const response = await axios.post(`${api}/upload`, {
        userId: "user123", // Replace with actual logged-in user ID
        image: imageSrc,
      });

      alert("Image saved successfully!");
    } catch (error) {
      console.error("Error saving image:", error);
      alert("Failed to save image.");
    }
    setIsSaving(false);
  };

  return (
    <div className="App">
      <h1>Generate Image from Text</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={generateImage}>Generate Image</button>

      {imageSrc && (
        <div>
          <img src={imageSrc} alt="Generated" style={{ width: "300px" }} />
          <button onClick={downloadImage}>Download Image</button>
          <button onCick={saveImage} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Image"}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;

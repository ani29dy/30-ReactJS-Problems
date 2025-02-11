import React, { useState } from "react";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <input
        type="file"
        name="image"
        id="image"
        accept="image/*"
        onChange={handleFileChange}
      />

      {file && <img src={URL.createObjectURL(file)} alt="Uploaded" />}
    </div>
  );
};

export default UploadImage;

"use client";
import { useState } from "react";

export default function Projects() {
  const [media, setMedia] = useState([]);

  const handleUpload = (event) => {
    const files = event.target.files;
    const newMedia = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setMedia([...media, ...newMedia]);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center text-white">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-image"
        style={{ backgroundImage: "url('/images/projects-bg.jpg')" }}
      ></div>

      {/* タイトル */}
      <h1 className="relative z-10 text-7xl font-bold mt-20 bg-black bg-opacity-50 p-5 rounded-lg shadow-lg">
        My Projects
      </h1>

      {/* アップロード UI */}
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleUpload}
        className="mt-10 p-3 bg-gray-800 rounded-lg shadow-lg cursor-pointer"
      />

      {/* プレビュー */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {media.map((src, index) => (
          <div key={index} className="p-2 bg-black bg-opacity-50 rounded-lg">
            {src.includes("video") ? (
              <video src={src} controls className="w-48 h-48 object-cover" />
            ) : (
              <img src={src} className="w-48 h-48 object-cover rounded-lg" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

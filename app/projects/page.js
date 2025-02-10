"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ title: "", description: "", videoUrl: "" });

  // 初回読み込み時に localStorage からデータを取得
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    setProjects(savedProjects);
  }, []);

  // プロジェクトを追加
  const addProject = () => {
    const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setNewProject({ title: "", description: "", videoUrl: "" });
  };

  // プロジェクトを削除
  const deleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  return (
    <div className="min-h-screen bg-black text-white p-20">
      <h1 className="text-6xl font-extrabold text-center text-blue-400">Projects</h1>

      {/* プロジェクト追加フォーム */}
      <div className="mt-8 flex flex-col items-center">
        <input
          type="text"
          placeholder="プロジェクトタイトル"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          className="mb-4 p-3 text-xl bg-gray-900 text-white border border-gray-700 rounded-lg w-1/2"
        />
        <input
          type="text"
          placeholder="プロジェクト概要"
          value={newProject.description}
          onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
          className="mb-4 p-3 text-xl bg-gray-900 text-white border border-gray-700 rounded-lg w-1/2"
        />
        <input
          type="text"
          placeholder="動画URL（YouTube, Vimeo など）"
          value={newProject.videoUrl}
          onChange={(e) => setNewProject({ ...newProject, videoUrl: e.target.value })}
          className="mb-4 p-3 text-xl bg-gray-900 text-white border border-gray-700 rounded-lg w-1/2"
        />
        <button 
          onClick={addProject} 
          className="mt-4 px-8 py-3 bg-blue-500 text-white text-2xl rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center space-x-3"
        >
          <FaPlus /> <span>プロジェクトを追加</span>
        </button>
      </div>

      {/* プロジェクト一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="p-6 bg-gray-800 rounded-lg shadow-xl transform hover:scale-105 transition-all border border-blue-500 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <button 
              onClick={() => deleteProject(index)} 
              className="absolute top-2 right-2 bg-red-500 p-2 rounded-full hover:bg-red-700"
            >
              <FaTrash />
            </button>
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="mt-2 text-gray-400">{project.description}</p>
            {project.videoUrl && (
              <iframe 
                src={project.videoUrl} 
                className="mt-4 w-full h-48 rounded-lg"
                allowFullScreen
              ></iframe>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

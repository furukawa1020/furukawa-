"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <motion.h1
        className="text-5xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to my portfolio!
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        真にユーザーフレンドリーなシステム、コミュニティ、プロダクトへの探求の道。
      </motion.p>

      <motion.a
        href="/projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        プロジェクトを見る
      </motion.a>
    </div>
  );
}

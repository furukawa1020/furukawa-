"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      {/* ロゴ風タイトル */}
      <motion.h1
        className="text-8xl font-extrabold tracking-wide text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        はたけ(furukawa)
      </motion.h1>

      {/* サブテキスト */}
      <motion.p
        className="mt-4 text-2xl text-gray-400 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        「技術と人の関係を再設計し、温かみのある未来をつくる。」
      </motion.p>

      {/* プロジェクトを見るボタン */}
      <motion.a
        href="/projects"
        className="mt-10 px-10 py-4 bg-blue-500 text-white text-2xl rounded-xl shadow-lg hover:bg-blue-700 transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        プロジェクトを見る
      </motion.a>

      {/* 画像・動画エリア */}
      <div className="mt-12 grid grid-cols-2 gap-8">
        <img src="/images/project1.jpg" alt="Project 1" className="w-96 rounded-lg shadow-lg" />
        <img src="/images/project2.jpg" alt="Project 2" className="w-96 rounded-lg shadow-lg" />
      </div>
    </div>
  );
}

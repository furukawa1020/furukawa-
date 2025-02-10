"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center text-8xl font-bold text-white">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-image"
        style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
      ></div>
      
      {/*   はじめまして！！　*/}
      <motion.h1 
        className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg shadow-lg text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Create. Connect. Inspire.
      </motion.h1>
    </div>
  );
}

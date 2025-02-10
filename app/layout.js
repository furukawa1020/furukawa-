import "../styles/globals.css"; // 正しいパスでインポート

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen font-['Space_Grotesk']">
      {/* ヘッダー */}
      <header className="fixed top-0 left-0 w-full bg-black shadow-md py-6 px-10 flex justify-center space-x-16 text-3xl font-bold tracking-wide uppercase">
        <a href="/" className="hover:text-blue-400 transition">Home</a>
        <a href="/projects" className="hover:text-blue-400 transition">Projects</a>
        <a href="/about" className="hover:text-blue-400 transition">About</a>
        <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
      </header>

      {/* メインコンテンツ */}
      <main className="pt-32 px-20">{children}</main>

      {/* フッター */}
      <footer className="text-center py-10 text-lg tracking-wide text-gray-500">
        &copy; 2025 はたけ(furukawa). All Rights Reserved.
      </footer>
    </div>
  );
}

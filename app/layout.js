import "../styles/globals.css"; // CSS をインポート

export default function Layout({ children }) {
  return (
    <div className="bg-black text-white min-h-screen font-['Orbitron'] flex flex-col items-center">
      {/* ヘッダー */}
      <header className="w-full bg-black py-12 flex justify-around text-7xl font-bold tracking-widest uppercase">
        <a href="/" className="hover:text-blue-400 transition duration-300">Home</a>
        <a href="/projects" className="hover:text-blue-400 transition duration-300">Projects</a>
        <a href="/about" className="hover:text-blue-400 transition duration-300">About</a>
        <a href="/contact" className="hover:text-blue-400 transition duration-300">Contact</a>
      </header>

      {/* メインコンテンツ */}
      <main className="pt-32 w-full max-w-7xl">{children}</main>

      {/* フッター */}
      <footer className="text-center py-10 text-2xl tracking-wide text-gray-500">
        &copy; 2025 はたけ(furukawa). All Rights Reserved.
      </footer>
    </div>
  );
}

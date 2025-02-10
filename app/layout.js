export default function Layout({ children }) {
    return (
      <div className="bg-gray-100 text-gray-900 min-h-screen">
        {/* ヘッダー */}
        <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">はたけ（furukawa）</h1>
          <nav className="space-x-6">
            <a href="/" className="hover:text-blue-600 transition">Home</a>
            <a href="/projects" className="hover:text-blue-600 transition">Projects</a>
            <a href="/about" className="hover:text-blue-600 transition">About</a>
            <a href="/contact" className="hover:text-blue-600 transition">Contact</a>
          </nav>
        </header>
  
        {/* メインコンテンツ */}
        <main className="pt-20">{children}</main>
  
        {/* フッター */}
        <footer className="text-center py-6 text-sm text-gray-500">
          © 2025 はたけ. All Rights Reserved.
        </footer>
      </div>
    );
  }
  
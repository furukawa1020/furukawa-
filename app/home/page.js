export default function Home() {
    return (
      <div className="relative h-screen flex items-center justify-center text-7xl font-bold text-white">
        {/* 背景画像 */}
        <div 
          className="absolute inset-0 bg-image"
          style={{ backgroundImage: "url('/images/home-bg.jpg')" }}
        ></div>
        
        {/* テキスト */}
        <h1 className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg shadow-lg">
          Welcome to my portfolio!
        </h1>
      </div>
    );
  }
  
export default function About() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-white">
        <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
          ものづくりを通じて「知を感じる」瞬間を生み出すことに情熱を持っています。<br />
          技術と社会の接点を探求し、温かみのあるデザインとテクノロジーを融合させることを目指しています。
        </p>
      </div>
    );
  }
  export default function About() {
    return (
      <div className="relative h-screen flex items-center justify-center text-7xl font-bold text-white">
        {/* 背景画像 */}
        <div 
          className="absolute inset-0 bg-image"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        ></div>
        
        {/* テキスト */}
        <h1 className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg shadow-lg">
          About Me
        </h1>
      </div>
    );
  }
  
export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-image"
        style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
      ></div>

      {/* テキスト */}
      <div className="relative z-10 max-w-3xl text-center bg-black bg-opacity-60 p-10 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold mb-6">About Me</h1>
        <p className="text-lg leading-relaxed">
          ものづくりを通じて「知を感じる」瞬間を生み出すことに情熱を持っています。<br />
          技術と社会の接点を探求し、温かみのあるデザインとテクノロジーを融合させることを目指しています。
        </p>
      </div>
    </div>
  );
}

  
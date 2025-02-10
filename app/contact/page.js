import { FaGithub, FaTwitter, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-white">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      ></div>

      {/* オーバーレイ */}
      <div className="relative z-10 flex flex-col items-center bg-black bg-opacity-70 p-16 rounded-lg shadow-2xl">
        <h1 className="text-6xl font-bold mb-6">Contact Me</h1>
        <p className="text-3xl mb-8">お気軽にお問い合わせください！</p>

        {/* SNS リンク */}
        <div className="flex space-x-8">
          <a href="https://github.com/furukawa1020" target="_blank" className="text-gray-300 hover:text-white transition">
            <FaGithub size={50} />
          </a>

          <a href="https://x.com/HATAKE55555" target="_blank" className="text-blue-400 hover:text-white transition">
            <FaTwitter size={50} />
          </a>

          <a href="https://www.instagram.com/ko102012?igsh=MWRndGV6dHhyMWRxMg==" target="_blank" className="text-pink-400 hover:text-white transition">
            <FaInstagram size={50} />
          </a>

          <a href="https://www.facebook.com/share/12EKCronSYw/" target="_blank" className="text-blue-600 hover:text-white transition">
            <FaFacebook size={50} />
          </a>

          <a href="mailto:f.kotaro.0530@gmail.com" className="text-red-400 hover:text-white transition">
            <FaEnvelope size={50} />
          </a>
        </div>
      </div>
    </div>
  );
}


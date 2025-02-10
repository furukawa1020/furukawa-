import { FaGithub, FaTwitter, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
      <p className="mt-4 text-lg text-gray-600">お気軽にお問い合わせください！</p>

      <div className="mt-6 flex space-x-6">
        {/* GitHub */}
        <a href="https://github.com/furukawa1020" target="_blank" className="text-gray-700 hover:text-black transition">
          <FaGithub size={30} />
        </a>
        
        {/* Twitter */}
        <a href="https://x.com/HATAKE55555" target="_blank" className="text-blue-500 hover:text-blue-700 transition">
          <FaTwitter size={30} />
        </a>
        
        {/* Instagram */}
        <a href="https://www.instagram.com/ko102012?igsh=MWRndGV6dHhyMWRxMg==" target="_blank" className="text-pink-500 hover:text-pink-700 transition">
          <FaInstagram size={30} />
        </a>
        
        {/* Facebook */}
        <a href="https://www.facebook.com/share/12EKCronSYw/" target="_blank" className="text-blue-700 hover:text-blue-900 transition">
          <FaFacebook size={30} />
        </a>
        
        {/* メール */}
        <a href="f.kotaro.0530@gmail.com" className="text-red-500 hover:text-red-700 transition">
          <FaEnvelope size={30} />
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="relative h-screen flex items-center justify-center text-7xl font-bold text-white">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-image"
        style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
      ></div>
      
      {/* テキスト */}
      <h1 className="relative z-10 bg-black bg-opacity-50 p-10 rounded-lg shadow-lg">
        Contact Me
      </h1>
    </div>
  );
}

export default function Projects() {
    const projects = [
      { title: "移動する目覚まし時計", description: "M5StickC Plus を活用した新しい体験型目覚まし" },
      { title: "フグ式膨張オブジェ", description: "ストレスリリーフを目的としたインタラクティブオブジェ" },
      { title: "スタックチャン AI", description: "対話型ロボットで生活を豊かにする試み" }
    ];
  
    return (
      <div className="min-h-screen p-10 bg-gray-100">
        <h1 className="text-4xl font-bold text-center text-gray-800">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <a href={`/projects/${index}`} key={index} className="block">
              <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  
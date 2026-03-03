import { User, Heart, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:pl-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Nama saya <span className="text-blue-400 font-semibold">Al Evan Diamantoro</span>, 
              seorang siswa di SMK Telkom Sidoarjo yang memiliki ketertarikan besar pada dunia UI/UX Design.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Bagi saya, desain bukan hanya tentang membuat tampilan yang indah—tetapi juga tentang 
              bagaimana menciptakan pengalaman pengguna yang mudah, intuitif, dan bermakna.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Saya senang mengeksplorasi tren desain terbaru, memahami perilaku pengguna, 
              serta menggabungkan estetika dengan fungsionalitas.
            </p>

            {/* Skills */}
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-white mb-4">What I Do</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">UI/UX Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Web Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Photography</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">2+</div>
              <div className="text-gray-400 text-sm">Years Learning</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
              <div className="text-gray-400 text-sm">Projects</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
              <div className="text-gray-400 text-sm">Tools</div>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-gray-400 text-sm">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

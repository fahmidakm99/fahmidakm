import profileImg from './profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-white px-4 sm:px-6 md:px-12 bg-gradient-to-br from-[#0f0c29] to-[#302b63]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto w-full py-12">
        
        {/* TEXT COLUMN */}
        <div className="relative space-y-6 text-center md:text-left">
          {/* Left vertical line on desktop only */}
          <div className="hidden md:block absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-400 via-purple-500 to-indigo-400"></div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold md:ml-4">
            Hi, I'm <span className="text-pink-400">Fahmida</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 md:ml-4">
            I am a Frontend and Java Full Stack Developer passionate about crafting seamless UI designs for web and mobile applications.
          </p>

          <a
            href="#contact"
            className="inline-block bg-white text-indigo-700 font-semibold py-2 px-6 rounded-full shadow hover:shadow-lg transition md:ml-4"
          >
            Contact Me
          </a>
        </div>

        {/* IMAGE COLUMN */}
        <div className="flex justify-center">
          <img
            src={profileImg}
            alt="Fahmida"
            className="w-48 sm:w-60 md:w-72 rounded-2xl border-4 border-purple-500 shadow-2xl grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

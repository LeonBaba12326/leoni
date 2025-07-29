import React from 'react';
import { Play, Award, Users, Camera } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #ef4444 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #dc2626 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        {/* Main Content */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">Premium Video Production</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-none">
            Cinematic Stories
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
              That Captivate
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
            We transform your vision into compelling visual narratives that engage, inspire, and drive results. 
            From concept to final cut, we deliver excellence in every frame.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="group bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105 flex items-center gap-3"
            >
              <Play className="w-5 h-5" fill="currentColor" />
              <span>View Our Work</span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="border-2 border-gray-600 text-white px-8 py-4 rounded-full font-semibold hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 flex items-center gap-3"
            >
              <Camera className="w-5 h-5" />
              <span>Our Services</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">50+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Play className="w-8 h-8 text-red-500" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">5M+</div>
            <div className="text-gray-400">Views Generated</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
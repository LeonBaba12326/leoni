import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

interface VideoData {
  id: string;
  url: string;
  title: string;
  category: string;
}

const Portfolio: React.FC = () => {
  const videos: VideoData[] = [
    {
      id: 'pCJ7mE1DbLc',
      url: 'https://youtu.be/pCJ7mE1DbLc',
      title: 'Brand Commercial Campaign',
      category: 'Commercial'
    },
    {
      id: 'P_pj_9tMW1o',
      url: 'https://youtu.be/P_pj_9tMW1o',
      title: 'Creative Documentary Series',
      category: 'Documentary'
    },
    {
      id: 'CR7UK2WOsew',
      url: 'https://youtu.be/CR7UK2WOsew',
      title: 'Corporate Brand Story',
      category: 'Corporate'
    },
    {
      id: 'HzLyionMoAw',
      url: 'https://youtu.be/HzLyionMoAw',
      title: 'Music Video Production',
      category: 'Music Video'
    },
    {
      id: 'dtD4rap7cCs',
      url: 'https://youtu.be/dtD4rap7cCs',
      title: 'Product Launch Video',
      category: 'Commercial'
    },
    {
      id: '3xE-2o_aIDo',
      url: 'https://youtu.be/3xE-2o_aIDo',
      title: 'Event Highlight Reel',
      category: 'Event'
    },
    {
      id: '8YXiwrIPByY',
      url: 'https://youtu.be/8YXiwrIPByY',
      title: 'Training Video Series',
      category: 'Corporate'
    },
    {
      id: 'zqlkNGfsJ_8',
      url: 'https://youtu.be/zqlkNGfsJ_8',
      title: 'Promotional Content',
      category: 'Promotional'
    },
    {
      id: 'QFvfSt-Dt8o',
      url: 'https://youtu.be/QFvfSt-Dt8o',
      title: 'Creative Showcase',
      category: 'Creative'
    }
  ];

  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  const handleVideoClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">Our Work</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Latest Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Showcasing our recent work across various industries and creative projects. 
            Each video tells a unique story crafted with precision and artistic vision.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              onClick={() => handleVideoClick(video.url)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700/50 shadow-2xl hover:shadow-red-500/10 transition-all duration-500 backdrop-blur-sm">
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={getThumbnailUrl(video.id)}
                    alt={video.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-red-500 shadow-lg hover:shadow-red-500/50">
                      <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600/90 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                      {video.category}
                    </span>
                  </div>

                  {/* Video Index */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-black/50 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-3 line-clamp-2 leading-tight group-hover:text-red-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-4 h-4 bg-red-600 rounded-sm flex items-center justify-center">
                        <span className="text-white text-xs font-bold">▶</span>
                      </div>
                      <span className="font-medium">Watch on YouTube</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500/30 transition-colors duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Impressed by Our Work?</h3>
            <p className="text-gray-400 mb-6">
              Ready to create something amazing together? Let's discuss your next video project.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
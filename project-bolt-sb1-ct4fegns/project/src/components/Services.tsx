import React from 'react';
import { Video, Camera, Edit, Mic, Palette, Globe } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Video,
      title: 'Commercial Production',
      description: 'High-impact commercials that drive brand awareness and conversions with cinematic quality.',
      features: ['Brand Commercials', 'Product Videos', 'TV Spots', 'Digital Ads']
    },
    {
      icon: Camera,
      title: 'Corporate Videos',
      description: 'Professional corporate content that communicates your message with clarity and impact.',
      features: ['Company Profiles', 'Training Videos', 'Internal Communications', 'Testimonials']
    },
    {
      icon: Edit,
      title: 'Documentary Films',
      description: 'Compelling documentary storytelling that captures authentic moments and real stories.',
      features: ['Feature Documentaries', 'Short Films', 'Interview Series', 'Event Documentation']
    },
    {
      icon: Mic,
      title: 'Music Videos',
      description: 'Creative music videos that bring artists\' vision to life with stunning visuals.',
      features: ['Performance Videos', 'Narrative Concepts', 'Live Sessions', 'Lyric Videos']
    },
    {
      icon: Palette,
      title: 'Post-Production',
      description: 'Complete post-production services from editing to color grading and sound design.',
      features: ['Video Editing', 'Color Grading', 'Sound Design', 'Motion Graphics']
    },
    {
      icon: Globe,
      title: 'Live Streaming',
      description: 'Professional live streaming solutions for events, conferences, and broadcasts.',
      features: ['Multi-Camera Setup', 'Live Switching', 'Streaming Platforms', 'Interactive Features']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">Our Services</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Full-Service Video Production
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From concept development to final delivery, we provide comprehensive video production services 
            that bring your vision to life with professional excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/30 transition-all duration-500 hover:transform hover:scale-105 backdrop-blur-sm"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how we can bring your vision to life with our professional video production services.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
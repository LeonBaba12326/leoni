import React from 'react';
import { Award, Users, Camera, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Award, number: '8+', label: 'Years Experience' },
    { icon: Users, number: '50+', label: 'Happy Clients' },
    { icon: Camera, number: '150+', label: 'Projects Completed' },
    { icon: Zap, number: '5M+', label: 'Views Generated' }
  ];

  const values = [
    {
      title: 'Creative Excellence',
      description: 'We push creative boundaries to deliver visually stunning content that stands out in today\'s competitive landscape.'
    },
    {
      title: 'Technical Mastery',
      description: 'Our team combines artistic vision with cutting-edge technology to produce professional-grade video content.'
    },
    {
      title: 'Client Partnership',
      description: 'We work closely with our clients as partners, ensuring their vision is realized while exceeding expectations.'
    },
    {
      title: 'Timely Delivery',
      description: 'We understand the importance of deadlines and consistently deliver high-quality work on time and within budget.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
            <span className="text-red-500 font-medium tracking-wider text-sm uppercase">About Us</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Crafting Visual Stories
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Where Creativity Meets <span className="text-red-500">Technical Excellence</span>
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Elsa Production is a premier video production agency dedicated to creating compelling visual narratives 
                that captivate audiences and drive results. Founded with a passion for storytelling and a commitment 
                to excellence, we've grown into a trusted partner for brands, businesses, and creators worldwide.
              </p>
              <p>
                Our team of experienced filmmakers, editors, and creative professionals brings together diverse 
                backgrounds and expertise to deliver exceptional video content across all genres and platforms. 
                From concept development to final delivery, we handle every aspect of the production process 
                with meticulous attention to detail.
              </p>
              <p>
                What sets us apart is our ability to understand each client's unique vision and translate it into 
                powerful visual stories that resonate with their target audience. We believe that great video 
                production is not just about technical proficiency—it's about creating emotional connections 
                that inspire action.
              </p>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-gray-700/50 text-center backdrop-blur-sm hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-6 rounded-2xl border border-gray-700/30 backdrop-blur-sm hover:border-red-500/30 transition-all duration-300 text-center"
              >
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Work with Our Team?</h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate to bring your vision to life with our expertise and creative passion.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full font-semibold hover:from-red-500 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/25 transform hover:scale-105"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
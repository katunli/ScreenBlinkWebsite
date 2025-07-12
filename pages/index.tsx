import React, { useState, useEffect } from 'react';
import { Download, Eye, Monitor, Shield, Clock, Zap, ChevronDown, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ScreenBlinkHomepage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Blink Tracking",
      description: "Real-time monitoring of your blinks to prevent dry eyes and digital eye strain"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightweight",
      description: "Runs efficiently in the background without slowing your system"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Smart Reminders",
      description: "Customizable blink reminders to reduce computer strain and prevent red eyes"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Eye Protection",
      description: "Reduce digital eye strain with timed screen break alerts and eye strain relief"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white font-sans">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-slate-700/20"></div>
        <nav className="relative z-10 container mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Eye className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">ScreenBlink</span>
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <Link href="#features" className="text-slate-300 hover:text-white transition-colors text-sm lg:text-base">Features</Link>
            <Link href="#about" className="text-slate-300 hover:text-white transition-colors text-sm lg:text-base">About</Link>
            <Link href="/eye-strain-guide" className="text-slate-300 hover:text-white transition-colors text-sm lg:text-base">Eye Strain Guide</Link>
            <Link href="/faq" className="text-slate-300 hover:text-white transition-colors text-sm lg:text-base">FAQ</Link>
            <Link href="/download/windows" className="text-slate-300 hover:text-white transition-colors text-sm lg:text-base">Windows</Link>
            <Link href="/download/mac" className="text-slate-300 hover:text-white transition-colors text-sm lg:text-base">Mac</Link>
          </div>
          <button className="md:hidden p-2 text-slate-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent px-2 tracking-tight">
              Stop Digital Eye Strain & Dry Eyes
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
              Combat computer vision syndrome, dry eyes, and red eyes with intelligent blink tracking. Your solution for <Link href="/eye-strain-guide" className="text-blue-300 hover:text-blue-200 underline">eye strain relief</Link> and computer strain prevention.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link href="/download/windows" className="w-full sm:w-auto group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download for Windows</span>
              </Link>
              <Link href="/download/mac" className="w-full sm:w-auto group bg-slate-700 hover:bg-slate-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download for Mac</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-slate-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 lg:py-20 bg-slate-800/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 tracking-tight">Your Solution for Eye Strain Relief</h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-xl sm:max-w-2xl mx-auto px-4">
              Advanced eye care technology designed to combat dry eyes, computer strain, and digital eye strain
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-sm sm:text-base text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 tracking-tight">Understanding Digital Eye Strain & Dry Eyes</h2>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300 flex items-center">
                  <Monitor className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="leading-tight">What is Digital Eye Strain?</span>
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Digital eye strain, also known as Computer Vision Syndrome, affects millions of people who spend extended periods looking at digital screens. Symptoms include dry eyes, blurred vision, headaches, neck pain, and red eyes. The average person blinks 15-20 times per minute, but this can drop to 5-7 when focused on screens, leading to computer strain and eye strain symptoms.
                </p>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300 flex items-center">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="leading-tight">The Importance of Blinking for Eye Health</span>
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Blinking is essential for eye health as it spreads tears across the eye surface, providing moisture and removing debris. Reduced blink rates during screen time lead to dry eye syndrome, causing discomfort, red eyes, and potentially long-term eye health issues. ScreenBlink helps restore natural blinking patterns and reminds you to take necessary breaks to prevent computer strain and provide eye strain relief.
                </p>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">How ScreenBlink Prevents Eye Strain & Dry Eyes</h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Our intelligent monitoring system tracks your blinks in real-time and provides gentle reminders when you need to blink more or take a break. By following the 20-20-20 rule and maintaining healthy blinking habits, you can significantly reduce eye strain, prevent dry eyes, and maintain better eye health throughout your workday. ScreenBlink is your comprehensive solution for computer vision syndrome and eye strain relief.
                </p>
              </div>

              <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-blue-300">Common Eye Strain Symptoms We Help With</h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  ScreenBlink addresses the most common symptoms of digital eye strain: dry eyes, red eyes, blurred vision, headaches, neck and shoulder pain, and difficulty focusing. Our software provides targeted eye strain relief by monitoring your blink rate and encouraging healthy screen habits to prevent computer strain and reduce the impact of prolonged screen time on your eye health. <Link href="/faq" className="text-blue-300 hover:text-blue-200 underline">Learn more in our FAQ</Link> or read our <Link href="/blog/eye-strain-prevention" className="text-blue-300 hover:text-blue-200 underline">comprehensive prevention guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white px-2 tracking-tight">Learn More About Eye Health</h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Get comprehensive information about digital eye strain, dry eyes, computer vision syndrome, and prevention methods in our detailed guide.
            </p>
            <div className="bg-gradient-to-r from-blue-900/60 to-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-700/30">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">Complete Guide to Digital Eye Strain & Dry Eyes</h3>
              <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                Discover everything you need to know about computer vision syndrome, eye strain symptoms, prevention methods, and how ScreenBlink provides effective eye strain relief and dry eye treatment.
              </p>
              <Link href="/eye-strain-guide" className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                <span>Read the Complete Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-slate-800/80 to-blue-900/80">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white px-2 tracking-tight">Ready to Protect Your Eyes from Digital Eye Strain?</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto px-4">
            Join thousands of users who have improved their eye health and found relief from dry eyes, computer strain, and red eyes with ScreenBlink
          </p>
          
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-stretch max-w-sm sm:max-w-2xl mx-auto">
            <div className="bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-slate-700/50 flex-1 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Windows</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6">Compatible with Windows 10 and 11</p>
              <Link href="/download/windows" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download .exe</span>
              </Link>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-slate-700/50 flex-1 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">macOS</h3>
              <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6">Compatible with macOS 11 and later</p>
              <Link href="/download/mac" className="w-full bg-slate-700 hover:bg-slate-600 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center space-x-2 hover:scale-105">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Download .dmg</span>
              </Link>
            </div>
          </div>
          
          <p className="text-slate-400 mt-6 sm:mt-8 text-sm sm:text-base px-4">Free download • No registration required • Lightweight & secure • Open source • Eye strain relief • Dry eye treatment</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900/80 border-t border-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">ScreenBlink</span>
          </div>
          <p className="text-slate-400">
            Take care of your eyes. They&apos;re the only pair you&apos;ve got. Protect against digital eye strain, dry eyes, and computer vision syndrome.
          </p>
        </div>
      </footer>
    </div>
  );
}
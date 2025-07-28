import React, { useState, useEffect } from 'react';
import { Download, Eye, Monitor, Shield, Zap, ArrowRight, Menu, Settings, HelpCircle, CheckCircle, CirclePlay, BellRing, CameraOff, Linkedin, Github, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function ScreenBlinkHomepage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    // Prevent body scroll when sidebar is open
    if (isSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSheetOpen]);

  const handleSectionClick = (sectionId: string) => {
    // Close the sidebar first
    setIsSheetOpen(false);
    
    // Then scroll to the section with a small delay to ensure sidebar is closed
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 150);
  };

  const handleSheetOpenChange = (open: boolean) => {
    setIsSheetOpen(open);
  };

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Blink Tracking",
      description: "Get popup reminders if you haven't blinked in a while — detected using your camera."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightweight",
      description: "Runs efficiently in the background without slowing your system"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customization",
      description: "Personalize how your reminders look — adjust their position, size, color, text, and transparency."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Eye Protection",
      description: "Boost your focus and protect your eyes with a Pomodoro timer that includes quick, gentle eye exercises."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Fullscreen Support",
      description: "Works seamlessly with fullscreen games, videos, and applications — never miss an eye care reminder."
    },
    {
      icon: <CirclePlay className="w-8 h-8" />,
      title: "Keyboard Shortcuts",
      description: "Use custom keyboard shortcuts to start and stop reminders instantly without touching the UI."
    },
    {
      icon: <BellRing className="w-8 h-8" />,
      title: "Sound Notifications",
      description: "Get audio alerts for reminders and eye exercises — perfect for when you're focused on other tasks."
    },
    {
      icon: <CameraOff className="w-8 h-8" />,
      title: "Simple Reminders",
      description: "Option for simple popup reminders without camera tracking"
    },
  ];

  const faqs = [
    {
      question: "How does ScreenBlink prevent dry eyes and eye strain?",
      answer: "ScreenBlink tracks your blink rate in real-time. When you're not blinking enough (which happens during screen focus), it gently reminds you to blink more frequently. This helps maintain proper eye moisture and prevents dry eye syndrome."
    },
    {
      question: "Is ScreenBlink free to use?",
      answer: "Yes, ScreenBlink is completely free to download and use. There are no hidden costs or premium features - it's our commitment to making eye strain relief accessible to everyone."
    },
    {
      question: "Will ScreenBlink slow down my computer?",
      answer: "No, ScreenBlink is designed to be lightweight and efficient. It runs in the background with minimal system resources, so you won't notice any performance impact while getting eye strain relief."
    },
    {
      question: "What operating systems does ScreenBlink support?",
      answer: "ScreenBlink is available for both Windows (Windows 10 and 11) and macOS (macOS 11 and later). Although it only runs on ARM Macs at the moment."
    },
    {
      question: "What is digital eye strain and how does ScreenBlink help?",
      answer: "Digital eye strain, also known as Computer Vision Syndrome, occurs when your eyes work hard to focus on screens for extended periods. ScreenBlink monitors your blink rate and provides reminders to prevent dry eyes and reduce eye strain symptoms."
    },
    {
      question: "How does the 20-20-20 rule work with ScreenBlink?",
      answer: "The 20-20-20 rule suggests looking at something 20 feet away for 20 seconds every 20 minutes. ScreenBlink implements this automatically by monitoring your screen time and providing gentle reminders to take breaks and do eye exercises, helping reduce computer strain."
    },
    {
      question: "How does ScreenBlink protect my privacy?",
      answer: "ScreenBlink processes all data locally on your device. No images or personal data are ever recorded or sent anywhere. The software only monitors blink patterns to provide eye strain relief and dry eye treatment. It can even be used without an internet connection."
    }
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
            <Link href="#about" className="text-slate-300 hover:text-white transition-colors text-sm lg:text-base">FAQ</Link>
            <Link href="/eye-strain-guide" className="text-slate-300 hover:text-white transition-colors text-sm lg:text-base">Eye Strain Guide</Link>
          </div>
          <Sheet open={isSheetOpen} onOpenChange={handleSheetOpenChange}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden p-2 text-slate-300 hover:text-white transition-colors">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[300px] sm:w-[400px] bg-slate-800 border-slate-700"
              onOpenAutoFocus={(e) => e.preventDefault()}
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <div className="flex flex-col space-y-6 pt-8">
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">ScreenBlink</span>
                </div>
                
                <div className="space-y-4">
                  <button 
                    onClick={() => handleSectionClick('features')}
                    className="block w-full text-left text-slate-300 hover:text-white transition-colors py-3 border-b border-slate-700/30 text-lg"
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => handleSectionClick('about')}
                    className="block w-full text-left text-slate-300 hover:text-white transition-colors py-3 border-b border-slate-700/30 text-lg"
                  >
                    FAQ
                  </button>
                  <Link 
                    href="/eye-strain-guide" 
                    className="block text-slate-300 hover:text-white transition-colors py-3 border-b border-slate-700/30 text-lg"
                  >
                    Eye Strain Guide
                  </Link>
                </div>
                
                <div className="pt-6 space-y-3">
                  <Link 
                    href="/download/windows" 
                    className="block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 text-center"
                  >
                    Download for Windows
                  </Link>
                  <Link 
                    href="/download/mac" 
                    className="block bg-slate-700 hover:bg-slate-600 px-4 py-3 rounded-lg font-semibold text-white transition-all duration-300 text-center"
                  >
                    Download for Mac
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent px-2 tracking-tight">
              Stop Digital Eye Strain & Dry Eyes
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-12 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
              Your solution for <Link href="/eye-strain-guide" className="text-blue-300 hover:text-blue-200 underline">eye strain relief</Link> and dry eye prevention.
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 tracking-tight">ScreenBlink Features</h2>
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
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white px-2 tracking-tight">Frequently Asked Questions</h2>
              </div>
              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
                Everything you need to know about ScreenBlink, digital eye strain, dry eyes, and computer vision syndrome
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white flex items-start">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed ml-8 sm:ml-9">
                    {faq.answer}
                  </p>
                </div>
              ))}
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

      {/* Founder Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white px-2 tracking-tight">Meet the Founder</h2>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              From a frustrated patient to a developer who built a solution
            </p>
            
            <div className="bg-gradient-to-r from-slate-800/80 to-blue-900/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/50">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                  {/* Profile Image */}
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0">
                    <Image 
                      src="/headshot.jpeg" 
                      alt="Katun Li - Founder of ScreenBlink" 
                      width={128} 
                      height={128} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">Katun Li</h3>
                  <p className="text-lg sm:text-xl text-blue-300 mb-4">Founder & Developer</p>
                  <p className="text-slate-300 mb-6 max-w-2xl mx-auto lg:mx-0">
                    After being diagnosed with dry eye and experiencing severe eye strain while working on computers, I could no longer tolerate the discomfort&mdash;so I sought a solution.  I tried many existing apps but found they were either expensive, lacked essential features, or weren&apos;t convenient to use. So I built ScreenBlink - a free, feature-rich solution that actually works for real people dealing with digital eye strain and dry eyes.
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
                    <a 
                      href="https://linkedin.com/in/katun-li-208193297" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a 
                      href="https://github.com/katunli" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a 
                      href="mailto:katunjieli@gmail.com" 
                      className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                    <a 
                      href="https://katunli.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Website</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-slate-800/80 to-blue-900/80">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-white px-2 tracking-tight">Ready to Protect Your Eyes from Digital Eye Strain?</h2>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 max-w-xl sm:max-w-2xl mx-auto px-4">
            Join many others who have improved their eye health and found relief from dry eyes, computer strain, and red eyes with ScreenBlink
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

      {/* Contact Section */}
      <section className="py-8 bg-slate-800/30">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <p className="text-slate-300 text-sm sm:text-base">
              Questions or concerns? Email us at{' '}
              <a 
                href="mailto:screenblinkteam@gmail.com" 
                className="text-blue-300 hover:text-blue-200 underline"
              >
                screenblinkteam@gmail.com
              </a>
            </p>
          </div>
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
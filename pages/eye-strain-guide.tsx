import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Eye, Monitor, Clock, AlertTriangle, CheckCircle, ArrowRight, Download } from 'lucide-react';

export default function EyeStrainGuide() {
  return (
    <>
      <Head>
        <title>Complete Guide to Digital Eye Strain & Dry Eyes - Prevention & Treatment</title>
        <meta name="description" content="Learn about digital eye strain, dry eyes, computer vision syndrome, and red eyes. Discover prevention methods, symptoms, and treatment options including ScreenBlink software." />
        <meta name="keywords" content="digital eye strain guide, dry eyes treatment, computer vision syndrome, red eyes causes, eye strain symptoms, computer strain prevention, dry eye syndrome, eye strain relief, computer eye strain, reduce eye strain, eye health tips, screen time eye damage" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Complete Guide to Digital Eye Strain & Dry Eyes - Prevention & Treatment" />
        <meta property="og:description" content="Learn about digital eye strain, dry eyes, computer vision syndrome, and red eyes. Discover prevention methods, symptoms, and treatment options including ScreenBlink software." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://screenblink.com/eye-strain-guide" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="Complete Guide to Digital Eye Strain & Dry Eyes - Prevention & Treatment" />
        <meta property="twitter:description" content="Learn about digital eye strain, dry eyes, computer vision syndrome, and red eyes. Discover prevention methods, symptoms, and treatment options including ScreenBlink software." />
        
        <link rel="canonical" href="https://screenblink.com/eye-strain-guide" />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://screenblink.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Eye Strain Guide",
                  "item": "https://screenblink.com/eye-strain-guide"
                }
              ]
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Breadcrumb Navigation */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li className="flex items-center space-x-2">
                <span>/</span>
                <span className="text-white">Eye Strain Guide</span>
              </li>
            </ol>
          </nav>

          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Complete Guide to Digital Eye Strain & Dry Eyes</h1>
            </div>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to know about computer vision syndrome, dry eyes, red eyes, and how to protect your eye health in the digital age
            </p>
          </div>

          {/* Table of Contents */}
          <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Understanding Eye Strain</h3>
                <ul className="text-sm space-y-1">
                  <li>• What is Digital Eye Strain?</li>
                  <li>• Computer Vision Syndrome Explained</li>
                  <li>• Common Symptoms</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-2">Prevention & Treatment</h3>
                <ul className="text-sm space-y-1">
                  <li>• The 20-20-20 Rule</li>
                  <li>• Blink Rate Importance</li>
                  <li>• ScreenBlink Solution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* What is Digital Eye Strain */}
          <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Monitor className="w-6 h-6 mr-3 text-blue-400" />
              What is Digital Eye Strain?
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                Digital eye strain, also known as Computer Vision Syndrome (CVS), is a group of eye and vision-related problems that result from prolonged computer, tablet, e-reader, and cell phone use. Many individuals experience eye discomfort and vision problems when viewing digital screens for extended periods.
              </p>
              <p>
                The level of discomfort appears to increase with the amount of digital screen use. The average American worker spends 7 hours a day on the computer either in the office or working from home. This extended screen time leads to various symptoms including dry eyes, red eyes, blurred vision, and headaches.
              </p>
            </div>
          </div>

          {/* Symptoms Section */}
          <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <AlertTriangle className="w-6 h-6 mr-3 text-blue-400" />
              Common Symptoms of Digital Eye Strain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-blue-300 mb-3">Eye Symptoms</h3>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dry eyes and red eyes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Blurred vision</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Eye fatigue and strain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Difficulty focusing</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-3">Other Symptoms</h3>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Headaches and migraines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Neck and shoulder pain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Back pain</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Difficulty concentrating</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Causes Section */}
          <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white">What Causes Digital Eye Strain?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h3 className="font-semibold text-blue-300 mb-3">Reduced Blink Rate</h3>
                <p className="text-sm">
                  When focusing on digital screens, people blink 66% less frequently than normal. The average person blinks 15-20 times per minute, but this drops to 5-7 times when using computers, leading to dry eyes and eye strain.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-3">Poor Screen Positioning</h3>
                <p className="text-sm">
                  Screens positioned too high, too low, or at the wrong distance can cause neck strain and force your eyes to work harder to focus, contributing to computer strain and eye fatigue.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-3">Blue Light Exposure</h3>
                <p className="text-sm">
                  Digital screens emit high-energy blue light that can cause eye strain and potentially damage retinal cells over time. This contributes to dry eyes and red eyes after prolonged exposure.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-300 mb-3">Poor Lighting</h3>
                <p className="text-sm">
                  Insufficient lighting or glare on screens forces your eyes to work harder to see clearly, leading to eye strain symptoms and computer vision syndrome.
                </p>
              </div>
            </div>
          </div>

          {/* Prevention Section */}
          <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Clock className="w-6 h-6 mr-3 text-blue-400" />
              Prevention Methods & Eye Strain Relief
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">The 20-20-20 Rule</h3>
                <p className="text-slate-300 mb-4">
                  Every 20 minutes, look at something 20 feet away for 20 seconds. This simple rule helps reduce eye strain by giving your eyes a break from close-up focus and encouraging natural blinking.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Maintain Proper Blink Rate</h3>
                <p className="text-slate-300 mb-4">
                  Consciously remind yourself to blink regularly. Blinking spreads tears across your eyes, providing moisture and preventing dry eyes. ScreenBlink software can help monitor and remind you to maintain healthy blinking habits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-300 mb-3">Optimize Your Workspace</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-300">
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Screen Position</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Position screen 20-28 inches from eyes</li>
                      <li>• Top of screen at or slightly below eye level</li>
                      <li>• Reduce glare with proper lighting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-2">Lighting</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Use ambient lighting</li>
                      <li>• Avoid fluorescent lighting</li>
                      <li>• Consider blue light filters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ScreenBlink Solution */}
          <div className="bg-gradient-to-r from-blue-900/60 to-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-blue-700/30 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
              <Eye className="w-6 h-6 mr-3 text-blue-400" />
              How ScreenBlink Provides Eye Strain Relief
            </h2>
            <div className="text-slate-300 space-y-4">
              <p>
                ScreenBlink is specifically designed to combat digital eye strain and computer vision syndrome by monitoring your blink rate and providing intelligent reminders. Our software addresses the root causes of dry eyes and eye strain symptoms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Real-time Blink Monitoring</h3>
                  <p className="text-sm">
                    Tracks your blink rate and alerts you when you're not blinking enough, helping prevent dry eyes and computer strain.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Smart Break Reminders</h3>
                  <p className="text-sm">
                    Implements the 20-20-20 rule automatically, providing eye strain relief through timely break reminders.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Customizable Alerts</h3>
                  <p className="text-sm">
                    Personalized notifications that fit your work style and help maintain healthy eye habits.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-300 mb-2">Free Treatment</h3>
                  <p className="text-sm">
                    No-cost solution for dry eye treatment and computer vision syndrome prevention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
            <h2 className="text-2xl font-bold mb-4 text-white">Ready to Protect Your Eyes?</h2>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Start combating digital eye strain, dry eyes, and computer vision syndrome today with ScreenBlink's intelligent eye strain relief system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/download/windows" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                <Download className="w-4 h-4" />
                <span>Download for Windows</span>
              </Link>
              <Link href="/download/mac" className="bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                <Download className="w-4 h-4" />
                <span>Download for Mac</span>
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <Link 
              href="/" 
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 
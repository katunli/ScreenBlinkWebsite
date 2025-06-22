import React, { useEffect } from 'react';
import { Download, CheckCircle, ArrowRight } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function WindowsDownloadPage() {
  useEffect(() => {
    // Auto-download the file
    const link = document.createElement('a');
    link.href = 'https://github.com/katunli/ScreenBlink/releases/download/v1.0.0/ScreenBlink.Setup.1.0.0.exe';
    link.download = 'ScreenBlink.Setup.1.0.0.exe';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      <Head>
        <title>Download ScreenBlink for Windows - Installation Guide</title>
        <meta name="description" content="Download and install ScreenBlink for Windows with step-by-step instructions" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Windows Installation Guide</h1>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Follow these simple steps to install ScreenBlink on your Windows computer
            </p>
          </div>

          {/* Download Status */}
          <div className="bg-green-900/30 border border-green-500/50 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-green-300">Download Started</h3>
                <p className="text-green-200">ScreenBlink.Setup.1.0.0.exe is downloading to your Downloads folder</p>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                Open the EXE
              </h2>
              <div className="text-slate-300">
                <p>Double-click <code className="bg-slate-700 px-2 py-1 rounded">ScreenBlink.Setup.1.0.0.exe</code> in Downloads, or open it from the top right of your browser</p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                Click "More Info" and "Run Anyway"
              </h2>
              <div className="text-slate-300">
                <p>If you see a security warning, click "More info" then "Run anyway"</p>
              </div>
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
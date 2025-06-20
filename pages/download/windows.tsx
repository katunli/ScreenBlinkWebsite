import React, { useEffect } from 'react';
import { Download, Shield, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import Head from 'next/head';

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
                Find the Downloaded File
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>Once the download is complete:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Open your <strong>Downloads folder</strong></li>
                  <li>Look for the file named <code className="bg-slate-700 px-2 py-1 rounded">ScreenBlink.Setup.1.0.0.exe</code></li>
                  <li>The file should have a blue icon with a shield</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                Run the Installer
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>Double-click the <code className="bg-slate-700 px-2 py-1 rounded">ScreenBlink.Setup.1.0.0.exe</code> file</p>
                
                <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-300 mb-2">Windows Security Warning</h4>
                      <p className="text-yellow-200 text-sm">You may see a security warning. This is normal for new applications.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">If you see a security warning:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-blue-200 text-sm">
                        <li>Click the <strong>"More info"</strong> link</li>
                        <li>Click <strong>"Run anyway"</strong> button</li>
                        <li>The installer will now start</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                Complete Installation
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>Follow the installation wizard:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Click <strong>"Next"</strong> to proceed through each step</li>
                  <li>Accept the default installation location</li>
                  <li>Click <strong>"Install"</strong> when ready</li>
                  <li>Wait for the installation to complete</li>
                  <li>Click <strong>"Finish"</strong> when done</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                Start Using ScreenBlink
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>After installation:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>ScreenBlink will start automatically</li>
                  <li>You'll see a small icon in your system tray (bottom-right corner)</li>
                  <li>The app will begin monitoring your blink rate</li>
                  <li>You can right-click the tray icon to access settings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h3 className="text-xl font-bold mb-4 text-white">Need Help?</h3>
              <div className="space-y-3 text-slate-300">
                <p>If you encounter any issues:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Make sure you're running Windows 10 or Windows 11</li>
                  <li>Try running the installer as administrator (right-click → "Run as administrator")</li>
                  <li>Check that your antivirus isn't blocking the installation</li>
                  <li>Visit our <a href="https://github.com/katunli/ScreenBlink" className="text-blue-400 hover:text-blue-300 underline">GitHub page</a> for support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-8">
            <a 
              href="/" 
              className="inline-flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 
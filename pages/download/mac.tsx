import React, { useEffect } from 'react';
import { Download, CheckCircle, ArrowRight, Copy, Check, Command } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function MacDownloadPage() {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('xattr -cr /Applications/ScreenBlink.app');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  useEffect(() => {
    // Auto-download the file
    const link = document.createElement('a');
    link.href = 'https://github.com/katunli/ScreenBlink/releases/download/v1.0.0/ScreenBlink-1.0.0-arm64.dmg';
    link.download = 'ScreenBlink-1.0.0-arm64.dmg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <>
      <Head>
        <title>Download ScreenBlink for Mac - Installation Guide</title>
        <meta name="description" content="Download and install ScreenBlink for Mac with step-by-step instructions" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Mac Installation Guide</h1>
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Follow these simple steps to install ScreenBlink on your Mac
            </p>
          </div>

          {/* Download Status */}
          <div className="bg-green-900/30 border border-green-500/50 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-green-300">Download Started</h3>
                <p className="text-green-200">ScreenBlink-1.0.0-arm64.dmg is downloading to your Downloads folder</p>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                Open the DMG
              </h2>
              <div className="text-slate-300">
                <p>Double-click <code className="bg-slate-700 px-2 py-1 rounded">ScreenBlink-1.0.0-arm64.dmg</code> in Downloads, or open it from the top right of your browser</p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                Drag to Applications
              </h2>
              <div className="text-slate-300">
                <p>In the DMG window, Drag ScreenBlink to the Applications folder</p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                Run Command
              </h2>
              <div className="text-slate-300">
                <p><strong>Open Terminal:</strong></p>
                <ul className="list-disc list-inside text-sm text-slate-400 mb-3 space-y-1">
                  <li>Press <code className="bg-slate-700 px-1 py-0.5 rounded inline-flex items-center gap-1"><Command className="w-3 h-3" /> + Space</code> to open Spotlight</li>
                  <li>Type &ldquo;Terminal&rdquo; and press Enter</li>
                </ul>
                <p>Copy and paste this command into Terminal, then press Enter: </p>
                <div className="bg-slate-900 border border-slate-600 rounded-lg p-3 mt-3 relative">
                  <code className="text-green-400 text-sm">
                    xattr -cr /Applications/ScreenBlink.app
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 p-1.5 rounded-md bg-slate-700 hover:bg-slate-600 transition-colors duration-200"
                    title="Copy command"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-slate-300" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-slate-400 mt-3">
                  This takes care of macOS restrictions that prevent apps from outside the App Store from running.
                </p>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                Open the App
              </h2>
              <div className="text-slate-300">
                <p>Open ScreenBlink from Applications folder</p>
                <p className="text-sm text-slate-400 italic mt-2">
                  <strong>Tip:</strong> You can also use Spotlight to quickly open ScreenBlink anytime! Press <code className="bg-slate-700 px-1 py-0.5 rounded inline-flex items-center gap-1"><Command className="w-3 h-3" /> + Space</code>, type &ldquo;ScreenBlink&rdquo;, and press Enter.
                </p>
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
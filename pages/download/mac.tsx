import React, { useEffect } from 'react';
import { Download, Shield, CheckCircle, AlertTriangle, ArrowRight, Terminal } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';

export default function MacDownloadPage() {
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
                Open the DMG File
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>Once the download is complete:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Go to your <strong>Downloads folder</strong></li>
                  <li>Double-click <code className="bg-slate-700 px-2 py-1 rounded">ScreenBlink-1.0.0-arm64.dmg</code></li>
                  <li>A new window will open showing the ScreenBlink app</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                Install ScreenBlink
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>In the DMG window:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Drag the <strong>ScreenBlink</strong> app to the <strong>Applications</strong> folder</li>
                  <li>Wait for the copy to complete</li>
                  <li>Close the DMG window</li>
                  <li>You can now delete the DMG file from Downloads</li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                Handle Gatekeeper Security
              </h2>
              <div className="space-y-4 text-slate-300">
                <p>When you try to open ScreenBlink for the first time:</p>
                
                <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-yellow-300 mb-2">You may see &ldquo;App is damaged&rdquo; error</h4>
                      <p className="text-yellow-200 text-sm">This is normal for apps not from the App Store. Follow the steps below to fix it.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-300 mb-2">To fix the &ldquo;App is damaged&rdquo; error:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-blue-200 text-sm mt-3" start={3}>
                        <li>Open <strong>Terminal</strong> (press <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">⌘</kbd> + <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Space</kbd>, type &ldquo;Terminal&rdquo;, press <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Enter</kbd>)</li>
                        <li>Copy and paste this command:</li>
                      </ol>
                      <div className="bg-slate-900 border border-slate-600 rounded-lg p-3 mt-3">
                        <code className="text-green-400 text-sm break-all">
                          xattr -cr /Applications/ScreenBlink.app
                        </code>
                      </div>
                      <ol className="list-decimal list-inside space-y-1 text-blue-200 text-sm mt-3" start={3}>
                        <li>Press <kbd className="bg-slate-700 px-2 py-1 rounded text-xs">Enter</kbd> to run the command</li>
                        <li>Close Terminal</li>
                        <li>Now try opening ScreenBlink again</li>
                      </ol>
                    </div>
                  </div>
                </div>
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
                  <li>Open <strong>Applications</strong> folder</li>
                  <li>Double-click <strong>ScreenBlink</strong> to launch</li>
                  <li>You may need to grant accessibility permissions (System Preferences → Security & Privacy → Privacy → Accessibility)</li>
                  <li>The app will appear in your menu bar (top-right corner)</li>
                  <li>Click the menu bar icon to access settings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alternative Method */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center">
                <Terminal className="w-5 h-5 mr-2" />
                Alternative: Install via Terminal
              </h3>
              <div className="space-y-3 text-slate-300">
                <p>If you prefer using Terminal, you can install with one command:</p>
                <div className="bg-slate-900 border border-slate-600 rounded-lg p-3">
                  <code className="text-green-400 text-sm break-all">
                    curl -L https://github.com/katunli/ScreenBlink/releases/download/v1.0.0/ScreenBlink-1.0.0-arm64.dmg -o ~/Downloads/ScreenBlink.dmg && hdiutil attach ~/Downloads/ScreenBlink.dmg && cp -R /Volumes/ScreenBlink/ScreenBlink.app /Applications/ && hdiutil detach /Volumes/ScreenBlink && xattr -cr /Applications/ScreenBlink.app
                  </code>
                </div>
                <p className="text-sm text-slate-400">This command downloads, mounts, installs, and fixes permissions automatically.</p>
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
                  <li>Make sure you&apos;re running macOS 11 (Big Sur) or later</li>
                  <li>Check that you have administrator privileges</li>
                  <li>Try restarting your Mac after installation</li>
                  <li>Make sure to grant accessibility permissions in System Preferences</li>
                  <li>Visit our <Link href="https://github.com/katunli/ScreenBlink" className="text-blue-400 hover:text-blue-300 underline">GitHub page</Link> for support</li>
                </ul>
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
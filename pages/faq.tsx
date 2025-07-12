import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Eye, Download, HelpCircle, ArrowRight, CheckCircle } from 'lucide-react';

export default function FAQPage() {
  const faqs = [
    {
      question: "What is digital eye strain and how does ScreenBlink help?",
      answer: "Digital eye strain, also known as Computer Vision Syndrome, occurs when your eyes work hard to focus on screens for extended periods. ScreenBlink monitors your blink rate and provides reminders to prevent dry eyes and reduce eye strain symptoms."
    },
    {
      question: "How does ScreenBlink prevent dry eyes?",
      answer: "ScreenBlink tracks your blink rate in real-time. When you're not blinking enough (which happens during screen focus), it gently reminds you to blink more frequently. This helps maintain proper eye moisture and prevents dry eye syndrome."
    },
    {
      question: "What are the symptoms of computer vision syndrome?",
      answer: "Common symptoms include dry eyes, red eyes, blurred vision, headaches, neck pain, and difficulty focusing. ScreenBlink helps address these by monitoring your eye habits and providing timely reminders for eye strain relief."
    },
    {
      question: "Is ScreenBlink free to use?",
      answer: "Yes, ScreenBlink is completely free to download and use. There are no hidden costs or premium features - it's our commitment to making eye strain relief accessible to everyone."
    },
    {
      question: "How does the 20-20-20 rule work with ScreenBlink?",
      answer: "The 20-20-20 rule suggests looking at something 20 feet away for 20 seconds every 20 minutes. ScreenBlink implements this automatically by monitoring your screen time and providing gentle reminders to take breaks, helping reduce computer strain."
    },
    {
      question: "Can ScreenBlink help with red eyes from screen time?",
      answer: "Yes! Red eyes are often caused by reduced blinking during screen use. ScreenBlink's blink tracking helps maintain proper eye moisture, which can significantly reduce red eyes and provide effective eye strain relief."
    },
    {
      question: "What operating systems does ScreenBlink support?",
      answer: "ScreenBlink is available for both Windows (Windows 10 and 11) and macOS (macOS 11 and later). The software works on both Intel and Apple Silicon Macs."
    },
    {
      question: "How does ScreenBlink protect my privacy?",
      answer: "ScreenBlink processes all data locally on your device. No images or personal data are ever sent to our servers. The software only monitors blink patterns to provide eye strain relief and dry eye treatment."
    },
    {
      question: "Will ScreenBlink slow down my computer?",
      answer: "No, ScreenBlink is designed to be lightweight and efficient. It runs in the background with minimal system resources, so you won't notice any performance impact while getting eye strain relief."
    },
    {
      question: "How long does it take to see results with ScreenBlink?",
      answer: "Many users report feeling relief from dry eyes and eye strain symptoms within the first few days of using ScreenBlink. Consistent use helps establish healthy blinking habits and provides ongoing computer strain prevention."
    }
  ];

  return (
    <>
      <Head>
        <title>FAQ - ScreenBlink Eye Strain Relief & Dry Eye Treatment</title>
        <meta name="description" content="Frequently asked questions about ScreenBlink, digital eye strain, dry eyes, and computer vision syndrome. Learn how our software provides eye strain relief and dry eye treatment." />
        <meta name="keywords" content="screenblink faq, digital eye strain faq, dry eyes questions, computer vision syndrome faq, eye strain relief questions, dry eye treatment faq, computer strain software questions" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FAQ - ScreenBlink Eye Strain Relief & Dry Eye Treatment" />
        <meta property="og:description" content="Frequently asked questions about ScreenBlink, digital eye strain, dry eyes, and computer vision syndrome. Learn how our software provides eye strain relief and dry eye treatment." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://screenblink.com/faq" />
        
        {/* Twitter */}
        <meta property="twitter:title" content="FAQ - ScreenBlink Eye Strain Relief & Dry Eye Treatment" />
        <meta property="twitter:description" content="Frequently asked questions about ScreenBlink, digital eye strain, dry eyes, and computer vision syndrome. Learn how our software provides eye strain relief and dry eye treatment." />
        
        <link rel="canonical" href="https://screenblink.com/faq" />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white font-sans">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Frequently Asked Questions</h1>
            </div>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to know about ScreenBlink, digital eye strain, dry eyes, and computer vision syndrome
            </p>
          </div>

          {/* FAQ Grid */}
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white flex items-start">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                  <span>{faq.question}</span>
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed ml-8 sm:ml-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Related Links */}
          <div className="mt-12 bg-slate-800/60 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-slate-700/30">
            <h2 className="text-2xl font-bold mb-6 text-white">Learn More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/eye-strain-guide" className="group bg-slate-700/60 hover:bg-slate-600/60 p-4 rounded-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3">
                  <Eye className="w-5 h-5 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-blue-300">Complete Eye Strain Guide</h3>
                    <p className="text-sm text-slate-300">Learn about digital eye strain, symptoms, and prevention</p>
                  </div>
                </div>
              </Link>
              <Link href="/download/windows" className="group bg-slate-700/60 hover:bg-slate-600/60 p-4 rounded-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center space-x-3">
                  <Download className="w-5 h-5 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-blue-300">Download ScreenBlink</h3>
                    <p className="text-sm text-slate-300">Get started with eye strain relief today</p>
                  </div>
                </div>
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
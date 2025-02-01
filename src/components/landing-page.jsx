import React, { useState } from 'react';
import { Brain, CheckCircle, FileText, Clock, Search, ShoppingCart } from 'lucide-react';
import { Alert } from '@/components/ui/alert';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Announcement Banner */}
      <div className="bg-yellow-400 text-black py-2 text-center text-sm font-medium">
        🎉 Limited Time Offer - First Month Free When You Join the Waitlist
      </div>

      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-black" />
              <span className="ml-2 text-xl text-black">
                <span className="font-normal">neura</span>
                <span className="font-bold">meet</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-900 hover:text-yellow-500">Features</a>
              <a href="#pricing" className="text-gray-900 hover:text-yellow-500">Pricing</a>
              <a href="#about" className="text-gray-900 hover:text-yellow-500">About</a>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="h-5 w-5 text-gray-900" />
              <ShoppingCart className="h-5 w-5 text-gray-900" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main>
        <div className="relative">
          <div className="bg-gradient-to-r from-black to-gray-900 py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8">
                  BE PRESENT IN<br />
                  <span className="text-yellow-400">YOUR MEETINGS</span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                  Stop taking notes and start leading meaningful discussions. Let AI handle your meeting minutes 
                  while answering your questions in real-time through your MIS. Focus on what matters most - engaging with your team.
                </p>
                <div className="mt-10">
                  <button className="bg-yellow-400 text-black px-8 py-4 text-lg font-bold rounded hover:bg-yellow-300 transition-colors">
                    JOIN THE WAITING LIST
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
              <div className="text-center">
                <div className="flex justify-center">
                  <Clock className="h-12 w-12 text-yellow-400" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">Full Engagement</h3>
                <p className="mt-2 text-gray-600">
                  Focus entirely on the discussion with intelligent real-time support
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <FileText className="h-12 w-12 text-yellow-400" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">Perfect Organisation</h3>
                <p className="mt-2 text-gray-600">
                  AI-powered minutes and instant answers through your MIS
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center">
                  <CheckCircle className="h-12 w-12 text-yellow-400" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-black">MIS Integration</h3>
                <p className="mt-2 text-gray-600">
                  Seamlessly connects with Arbor and other school systems
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Waitlist Signup */}
        <div className="bg-black py-24">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Transform Your Meetings</h2>
              {submitted ? (
                <Alert className="bg-gray-800 border-gray-700">
                  <CheckCircle className="h-4 w-4 text-yellow-400" />
                  <span className="ml-2 text-white">Thanks for joining! We'll be in touch soon.</span>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-800 bg-black text-white rounded-none placeholder-gray-400 focus:outline-none focus:border-yellow-400"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black py-3 font-bold hover:bg-yellow-300 transition-colors"
                  >
                    JOIN NOW
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            &copy; 2025 neurameet. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

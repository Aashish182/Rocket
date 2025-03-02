import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-white via-purple-100 to-purple-200 min-h-screen">


        <div className="bg-gradient-to-b from-deep-purple-600 to-purple-500 text-center py-20 text-white border-b border-gray-300">
          <h1 className="text-5xl font-bold mb-4">Welcome to Salary Predictor</h1>
          <p className="text-lg">Use our AI-powered tool to predict your salary based on experience and skills.</p>
        </div>

        {/* New Content Sections */}
        <div className="container mx-auto py-16 px-8">
          <div className="grid grid-cols-1 gap-16">
            {/* About Us Section */}
            <section className="bg-lavender p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:translate-y-[-5px]">
              <h2 className="text-3xl text-deep-purple-800 mb-4">About Us</h2>
              <p className="text-gray-700 leading-relaxed">ROC8 Salary Predictor is dedicated to helping individuals understand their worth in the job market. Our AI-powered tool analyzes various factors to provide accurate salary predictions.</p>
            </section>

            {/* How It Works Section (Updated with Box Format) */}
            <section className="bg-lavender p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:translate-y-[-5px]">
              <h2 className="text-3xl text-deep-purple-800 mb-4">How It Works</h2>
              <div className="mt-8 flex justify-between flex-wrap">
                <div className="bg-purple-100 p-10 rounded-xl w-full md:w-1/3 shadow-md hover:shadow-lg transition-transform hover:translate-y-[-5px] mb-4 md:mb-0">
                  <h3 className="text-xl text-deep-purple-600 mb-2">Step 1</h3>
                  <p className="text-gray-600">Input your experience and skills.</p>
                </div>
                <div className="bg-purple-100 p-10 rounded-xl w-full md:w-1/3 shadow-md hover:shadow-lg transition-transform hover:translate-y-[-5px] mb-4 md:mb-0">
                  <h3 className="text-xl text-deep-purple-600 mb-2">Step 2</h3>
                  <p className="text-gray-600">Our AI analyzes the data.</p>
                </div>
                <div className="bg-purple-100 p-10 rounded-xl w-full md:w-1/3 shadow-md hover:shadow-lg transition-transform hover:translate-y-[-5px] mb-4 md:mb-0">
                  <h3 className="text-xl text-deep-purple-600 mb-2">Step 3</h3>
                  <p className="text-gray-600">Receive your personalized salary prediction.</p>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-lavender p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:translate-y-[-5px]">
              <h2 className="text-3xl text-deep-purple-800 mb-4">What Our Users Say</h2>
              <blockquote className="text-gray-700 italic">"This tool helped me negotiate my salary effectively!" - Jane D.</blockquote>
              <blockquote className="text-gray-700 italic mt-4">"I was amazed at how accurate the predictions were!" - John S.</blockquote>
            </section>

            {/* FAQs Section */}
            <section className="bg-purple-50 p-8 rounded-xl shadow-xl">
              <h2 className="text-3xl text-deep-purple-800 mb-4">Frequently Asked Questions</h2>
              <div className="mb-4">
                <h3
                  onClick={() => toggleFAQ(0)}
                  className="text-lg font-semibold p-3 bg-purple-100 rounded-md hover:bg-purple-200 transition-colors cursor-pointer flex justify-between items-center"
                >
                  Is my data safe?
                  <span className="text-purple-600">{activeIndex === 0 ? '-' : '+'}</span>
                </h3>
                {activeIndex === 0 && (
                  <p className="text-gray-600 mt-2">Your privacy is our priority. We do not store personal data.</p>
                )}
              </div>
              <div>
                <h3
                  onClick={() => toggleFAQ(1)}
                  className="text-lg font-semibold p-3 bg-purple-100 rounded-md hover:bg-purple-200 transition-colors cursor-pointer flex justify-between items-center"
                >
                  How accurate are the predictions?
                  <span className="text-purple-600">{activeIndex === 1 ? '-' : '+'}</span>
                </h3>
                {activeIndex === 1 && (
                  <p className="text-gray-600 mt-2">Our predictions are based on extensive industry data and trends.</p>
                )}
              </div>
            </section>
          </div>

          {/* Call to Action Section */}
          <section className="bg-deep-purple-600 text-white text-center py-12 rounded-xl mt-12">
            <h2 className="text-4xl mb-6">Ready to Find Out Your Worth?</h2>
            <Link to="/PredictSalary" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block">
              Predict My Salary
            </Link>
          </section>
        </div>

        <Footer />
      
      

    </div>
  )
}

export default Home

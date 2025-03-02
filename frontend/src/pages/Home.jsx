import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import home1 from "../asset/Images/home2.jpg";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
const [animate, setAnimate] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setAnimate(false); 
    setTimeout(() => setAnimate(true), 100); 
  }, 5000); 

  return () => clearInterval(interval);
}, []);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-br from-white via-purple-100 to-purple-200 min-h-screen">
        <div className="relative h-[725px] w-[1520px] bg-gradient-to-b from-deep-purple-600 to-purple-500 text-center py-20 text-white border-b border-gray-300">
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover bg-center "
            style={{
              backgroundImage: `url(${home1})`,
              opacity:"0.5",
            }}
          ></div>
        </div>
          <div className="z-50 transform -translate-y-[500px] text-center">
          <h1 className={`text-7xl text-purple-500 mb-4 transition-transform duration-700 ${animate ? 'animate-train' : 'opacity-0'}`}>
            Welcome to ROC8
          </h1>
          <div className="w-40 h-1 bg-purple-400 -mt-2 mx-auto"></div>
          <h4 className='text-lg text-purple-400'>Boost your career by predicting salary and get more things.</h4>
          <h4 className="text-lg text-purple-400">Use our AI-powered tool to predict your salary based on experience and skills.</h4>
          </div>
        <div className="container mx-auto py-16 px-8">
          <div className="grid grid-cols-1 gap-16">
            <section className="bg-lavender p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:translate-y-[-5px]">
              <h2 className="text-3xl text-deep-purple-800 mb-4">About Us</h2>
              <p className="text-gray-700 leading-relaxed">ROC8 Salary Predictor is dedicated to helping individuals understand their worth in the job market. Our AI-powered tool analyzes various factors to provide accurate salary predictions.</p>
            </section>

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

            <section className="bg-lavender p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-transform hover:translate-y-[-5px]">
              <h2 className="text-3xl text-deep-purple-800 mb-4">What Our Users Say</h2>
              <blockquote className="text-gray-700 italic">"This tool helped me negotiate my salary effectively!" - Jane D.</blockquote>
              <blockquote className="text-gray-700 italic mt-4">"I was amazed at how accurate the predictions were!" - John S.</blockquote>
            </section>

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
                  <p className="text-gray-600 mt-2 ml-2"> Your privacy is our priority. We do not store personal data.</p>
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
                  <p className="text-gray-600 mt-2 ml-2"> Our predictions are based on extensive industry data and trends.</p>
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
        <style>
        {`
          @keyframes trainMove {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            50% {
              opacity: 1;
              transform: translateX(0);
            }
            100% {
              opacity: 0;
              transform: translateX(50px);
            }
          }
          .animate-train {
            animation: trainMove 3s ease-in-out infinite;
          }
        `}
      </style>
      

    </div>
  )
}

export default Home

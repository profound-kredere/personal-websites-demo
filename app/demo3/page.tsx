import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FinancialGrowthTemplate() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header/Navigation */}
      <header className="py-4 px-6 md:px-16 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                FinanceGrowth
              </h1>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-800 hover:text-lime-500 transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-lime-500 transition"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-lime-500 transition"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-lime-500 transition"
              >
                About Us
              </a>
            </nav>

            <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition">
              Schedule a Call
            </button>

            <button className="md:hidden text-gray-800">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
                Your Trusted Partner in Financial Growth
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Our goal is to empower clients with the knowledge, strategies,
                and tools they need to make informed decisions and achieve
                long-term financial success.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-lime-500 text-gray-800 font-medium px-8 py-3 rounded-full hover:bg-lime-600 transition flex items-center">
                  Contact Us
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
                <button className="border-2 border-gray-300 text-gray-800 font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition flex items-center">
                  Learn more
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="bg-white p-6 rounded-3xl shadow-lg relative z-10 md:ml-12">
                <div className="absolute top-0 right-0 bg-lime-400 text-gray-800 rounded-full p-2 transform translate-x-1/4 -translate-y-1/4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-semibold text-gray-800">
                        Revenue
                      </span>
                      <div className="flex items-center text-sm text-gray-600">
                        weekly
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-xl p-4">
                      <div className="h-32 flex items-end space-x-2">
                        <div
                          className="w-1/6 bg-lime-400 rounded-t-md"
                          style={{ height: "60%" }}
                        ></div>
                        <div
                          className="w-1/6 bg-lime-400 rounded-t-md"
                          style={{ height: "45%" }}
                        ></div>
                        <div
                          className="w-1/6 bg-lime-400 rounded-t-md"
                          style={{ height: "85%" }}
                        ></div>
                        <div
                          className="w-1/6 bg-lime-400 rounded-t-md"
                          style={{ height: "50%" }}
                        ></div>
                        <div
                          className="w-1/6 bg-lime-400 rounded-t-md"
                          style={{ height: "65%" }}
                        ></div>
                        <div
                          className="w-1/6 bg-lime-400 rounded-t-md"
                          style={{ height: "75%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 bg-lime-200 rounded-full -z-10 opacity-60 blur-xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-lime-300 rounded-full -z-10 opacity-70 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Analytics Cards Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Growth Analytics Card */}
            <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  Growth analytics
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-800">
                  $980.75
                </span>
              </div>

              <div className="grid grid-cols-6 gap-2 mb-2">
                <div className="flex flex-col items-center">
                  <div className="w-full h-28 bg-gray-200 rounded-md relative overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-gray-800 rounded-md"
                      style={{ height: "40%" }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">Mon</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-28 bg-gray-200 rounded-md relative overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-gray-800 rounded-md"
                      style={{ height: "32%" }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">Tue</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-28 bg-gray-200 rounded-md relative overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-lime-400 rounded-md"
                      style={{ height: "85%" }}
                    ></div>
                    <span className="absolute top-1 left-0 right-0 text-center text-xs font-medium">
                      85%
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">Wed</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-28 bg-gray-200 rounded-md relative overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-gray-800 rounded-md"
                      style={{ height: "45%" }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">Thu</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-28 bg-gray-200 rounded-md relative overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-gray-800 rounded-md"
                      style={{ height: "55%" }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">Fri</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-full h-28 bg-gray-200 rounded-md relative overflow-hidden">
                    <div
                      className="absolute bottom-0 w-full bg-gray-800 rounded-md"
                      style={{ height: "65%" }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-600 mt-1">Sat</span>
                </div>
              </div>
            </div>

            {/* Economy Card */}
            <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Economy</h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>

              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48">
                  {/* Circle chart background */}
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#f0f0f0"
                      strokeWidth="10"
                    />
                    {/* Blue segment - 20% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#4f7df3"
                      strokeWidth="10"
                      strokeDasharray="56.5 226"
                      strokeDashoffset="0"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Green segment - 55% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#a3e635"
                      strokeWidth="10"
                      strokeDasharray="155.5 226"
                      strokeDashoffset="-56.5"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Orange segment - 20% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="10"
                      strokeDasharray="70.5 226"
                      strokeDashoffset="-212"
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-800">
                      95%
                    </span>
                    <span className="text-sm text-gray-500">Total points</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-around">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-lime-400 mr-2"></div>
                  <span className="text-sm text-gray-600">High</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Low</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Mean</span>
                </div>
              </div>
            </div>

            {/* Profit Value Card */}
            <div className="bg-white rounded-3xl shadow-md p-6 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Profit value
                </h3>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className="bg-lime-400 rounded-full px-4 py-3 flex justify-between items-center">
                  <span className="font-semibold text-gray-800">75%</span>
                  <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="bg-gray-200 rounded-full px-4 py-3 flex justify-between items-center">
                  <span className="font-semibold text-gray-800">66%</span>
                  <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>

                <div className="bg-gray-200 rounded-full px-4 py-3 flex justify-between items-center">
                  <span className="font-semibold text-gray-800">55%</span>
                  <svg
                    className="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end financial services designed to maximize
              growth and ensure long-term stability for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Financial Analysis
              </h3>
              <p className="text-gray-600">
                In-depth assessment of your financial health with customized
                reports and actionable insights to improve performance.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Investment Strategy
              </h3>
              <p className="text-gray-600">
                Strategic investment planning tailored to your risk tolerance
                and growth objectives to maximize returns.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Growth Planning
              </h3>
              <p className="text-gray-600">
                Comprehensive growth strategies with realistic milestones and
                measurable objectives to scale your business.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Risk Management
              </h3>
              <p className="text-gray-600">
                Proactive risk assessment and mitigation strategies to protect
                your assets and ensure business continuity.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Tax Optimization
              </h3>
              <p className="text-gray-600">
                Strategic tax planning to minimize liabilities and maximize
                retention through compliant optimization methods.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-lime-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Financial Reporting
              </h3>
              <p className="text-gray-600">
                Clear, accurate, and timely financial reporting with meaningful
                visualizations to track performance and inform decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to accelerate your financial growth?
              </h2>
              <p className="text-gray-300 max-w-xl">
                Schedule a consultation with our financial experts and discover
                how we can help you achieve your financial goals with tailored
                solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-lime-500 text-gray-900 font-medium px-8 py-3 rounded-full hover:bg-lime-400 transition">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white font-medium px-8 py-3 rounded-full hover:bg-gray-800 transition">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-16 bg-gray-800 text-gray-300">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                FinanceGrowth
              </h3>
              <p className="mb-4">
                Your trusted partner in financial growth and business success.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 14-7.503 14-14 0-.21-.005-.42-.014-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Financial Analysis
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Investment Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Growth Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Risk Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Tax Optimization
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Contact Us
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 mr-2 mt-0.5 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>
                    123 Finance Street, Suite 400
                    <br />
                    New York, NY 10001
                  </span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>(212) 555-0123</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-lime-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@financegrowth.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FinanceGrowth. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-sm hover:text-lime-400 transition">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:text-lime-400 transition">
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:text-lime-400 transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

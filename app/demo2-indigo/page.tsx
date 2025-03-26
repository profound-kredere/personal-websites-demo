import FAQAccordion from "@/components/faq-d2";
import AnimatedTestimonials2 from "./components/animated-test-indigo";
import React from "react";

export default function MFDTemplate() {
  const testimonials = [
    {
      quote:
        "Aman guided me through my first mutual fund investments with patience and expertise. His personalized approach helped me create a balanced portfolio that's grown by 18% in just 14 months despite market volatility.",
      name: "Priya Sharma",
      designation: "IT Professional, Investing since 2021",
      gender: "female" as const,
    },
    {
      quote:
        "After trying to manage investments on my own for years, Aman's strategic SIP recommendations have been transformative. His in-depth knowledge helped me set up a tax-efficient portfolio that's consistently outperforming my previous investments.",
      name: "Vikram Malhotra",
      designation: "Business Owner, Investing since 2019",
      gender: "male" as const,
    },
    {
      quote:
        "What impressed me most about Aman is his honest approach to mutual fund selection. He recommended funds based on my risk profile and goals, not just the ones with highest commissions. My retirement corpus has grown steadily thanks to his guidance.",
      name: "Sunita Patel",
      designation: "School Principal, Investing since 2017",
      gender: "female" as const,
    },
    {
      quote:
        "I was hesitant about investing in mutual funds until I met Aman. He took the time to educate me about the market cycles and helped me set up SIPs that perfectly align with my children's education goals. The regular portfolio reviews keep me confident.",
      name: "Rahul Khanna",
      designation: "Healthcare Professional, Investing since 2020",
      gender: "male" as const,
    },
    {
      quote:
        "Aman helped me navigate through complex mutual fund categories and select the right mix for my financial goals. His goal-based approach and regular rebalancing suggestions have significantly improved my portfolio's performance.",
      name: "Anjali Mehta",
      designation: "Entrepreneur, Investing since 2018",
      gender: "female" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-400">Aman Gupta</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#investment-approach"
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  Investment Approach
                </a>
              </li>
              <li>
                <a
                  href="#performance"
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  Performance
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-indigo-400 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
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
      </header>

      {/* Hero Section with Professional Image - Dark Theme */}
      <section className="py-5 bg-gradient-to-r from-gray-900 to-indigo-900">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="mb-4">
              <span className="bg-indigo-900/60 text-indigo-300 text-sm font-medium px-4 py-1.5 rounded-full">
                AMFI Registered Mutual Fund Distributor | ARN-21328
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Building Wealth Through{" "}
              <span className="text-indigo-400">Disciplined Investing</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Personalized mutual fund investment strategies tailored to your
              financial goals. Let\&apos;s create a secure financial future
              together.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                Start Investing
              </button>
              <button className="px-6 py-3 border border-indigo-600 text-indigo-400 rounded-md hover:bg-indigo-900/50 transition">
                Free Consultation
              </button>
            </div>

            {/* Key benefits quick highlights */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-900/80 p-2 rounded-full shadow-sm">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-300">
                  Personalized strategy
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-900/80 p-2 rounded-full shadow-sm">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-300">
                  Zero additional fees
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-900/80 p-2 rounded-full shadow-sm">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-300">
                  Goal-based planning
                </p>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-900/80 p-2 rounded-full shadow-sm">
                  <svg
                    className="w-5 h-5 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="ml-3 text-sm text-gray-300">
                  Regular portfolio reviews
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            {/* Professional image in card with dark theme */}
            <div className="bg-gray-800 p-6 rounded-3xl shadow-xl relative md:ml-12 border border-gray-700">
              <div className="absolute top-0 right-0 bg-indigo-400 text-gray-800 rounded-full p-2 transform translate-x-1/4 -translate-y-1/4">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Professional image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&h=800&auto=format&fit=crop"
                  alt="Financial Advisor in a professional suit"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Professional credentials with dark theme */}
              <div className="mt-6 bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-600 p-2 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Aman Gupta</h3>
                    <p className="text-indigo-400">Mutual Fund Distributor</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-sm text-gray-300">
                      12+ Years Experience
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-400 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <p className="text-sm text-gray-300">300+ Happy Clients</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-400 mr-2"
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
                    <p className="text-sm text-gray-300">AMFI Certified</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-400 mr-2"
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
                    <p className="text-sm text-gray-300">₹75+ Cr. AUM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-64 h-64 bg-indigo-800/40 rounded-full -z-10 opacity-60 blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-700/40 rounded-full -z-10 opacity-70 blur-lg"></div>
            <div className="absolute top-0 right-1/4 w-20 h-20 bg-indigo-900/30 rounded-full -z-10 opacity-60 blur-md"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            About Aman Gupta
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-300 mb-6">
                With over 12 years of experience in the mutual fund industry,
                Aman Gupta has established himself as a trusted financial
                advisor helping individuals and families achieve their financial
                goals through disciplined investing and personalized financial
                planning.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                As an AMFI Registered Mutual Fund Distributor, Aman brings his
                expertise in portfolio construction, asset allocation, and risk
                management to provide clients with investment solutions that
                align with their financial objectives, risk tolerance, and time
                horizon.
              </p>
              <p className="text-lg text-gray-300">
                Aman&apos;s client-centric approach focuses on education and
                transparency, ensuring that investors understand their
                investment strategy and make informed decisions. He takes pride
                in building long-term relationships and seeing his clients
                achieve financial success.
              </p>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                  Credentials
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>
                      AMFI Registered Mutual Fund Distributor (ARN-21328)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Certified Financial Planner (CFP)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>Post Graduate Diploma in Financial Planning</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                  Experience Highlights
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>12+ years in mutual fund distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>₹75+ Crore assets under advisory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span>300+ families financially empowered</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with shadcn Card Style - Turquoise Color Scheme */}
      <section id="services" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Investment Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* SIP Card */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-900/20 text-indigo-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Systematic Investment Plans (SIPs)
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0 text-gray-300">
                <p>
                  Build wealth gradually through disciplined investing with SIPs
                  starting from just ₹1,000 per month. Perfect for long-term
                  financial goals like retirement planning.
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-700 text-gray-100 hover:bg-indigo-700/90 h-10 px-4 py-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Goal-Based Investing Card */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-900/20 text-indigo-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v4" />
                      <path d="M12 18v4" />
                      <path d="m4.93 4.93 2.83 2.83" />
                      <path d="m16.24 16.24 2.83 2.83" />
                      <path d="M2 12h4" />
                      <path d="M18 12h4" />
                      <path d="m4.93 19.07 2.83-2.83" />
                      <path d="m16.24 7.76 2.83-2.83" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Goal-Based Investing
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0 text-gray-300">
                <p>
                  Customized investment strategies designed specifically for
                  your life goals: children&apos;s education, home purchase,
                  retirement, or creating wealth.
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-700 text-gray-100 hover:bg-indigo-700/90 h-10 px-4 py-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Portfolio Management Card */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-900/20 text-indigo-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Portfolio Management
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0 text-gray-300">
                <p>
                  Regular portfolio monitoring, rebalancing, and performance
                  reviews to ensure your investments stay aligned with your
                  financial objectives.
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-700 text-gray-100 hover:bg-indigo-700/90 h-10 px-4 py-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tax Planning Card */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-900/20 text-indigo-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Tax Planning
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0 text-gray-300">
                <p>
                  Strategic investment planning to help you save taxes under
                  Section 80C and other provisions while building a robust
                  portfolio for long-term wealth creation.
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-700 text-gray-100 hover:bg-indigo-700/90 h-10 px-4 py-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Financial Education Card */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-900/20 text-indigo-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Financial Education
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0 text-gray-300">
                <p>
                  Regular workshops and personalized sessions to help you
                  understand market dynamics, investment fundamentals, and make
                  informed financial decisions.
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-700 text-gray-100 hover:bg-indigo-700/90 h-10 px-4 py-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Retirement Planning Card */}
            <div className="rounded-lg border border-gray-700 bg-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-900/20 text-indigo-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                      <path d="M13 5v2" />
                      <path d="M13 17v2" />
                      <path d="M13 11v2" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    Retirement Planning
                  </h3>
                </div>
              </div>
              <div className="p-6 pt-0 text-gray-300">
                <p>
                  Comprehensive retirement solutions to help you build a corpus
                  that ensures financial independence and maintains your
                  lifestyle after retirement.
                </p>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-700 text-gray-100 hover:bg-indigo-700/90 h-10 px-4 py-2">
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach - Horizontal Layout */}
      <section id="investment-approach" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            My Investment Philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Philosophy 1 */}
            <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-indigo-500 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3">
                Long-Term Focus
              </h3>
              <p className="text-gray-400">
                I believe wealth creation happens through patient, long-term
                investing, not through market timing or speculation.
              </p>
            </div>

            {/* Philosophy 2 */}
            <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-indigo-500 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3">
                Disciplined Approach
              </h3>
              <p className="text-gray-400">
                Consistent investing through SIPs to benefit from rupee-cost
                averaging and the power of compounding.
              </p>
            </div>

            {/* Philosophy 3 */}
            <div className="bg-gray-800 rounded-lg p-6 border-t-4 border-indigo-500 shadow-md">
              <h3 className="text-xl font-semibold text-white mb-3">
                Diversification
              </h3>
              <p className="text-gray-400">
                Spreading investments across asset classes and fund categories
                to manage risk and enhance returns.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="px-6 py-3 border border-indigo-600 text-indigo-400 rounded-md hover:bg-indigo-900/50 transition">
              Learn More About My Approach
            </button>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Performance Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">
                Equity Portfolio
              </h3>
              <p className="text-gray-300 mb-4">
                Recommended equity mutual funds have delivered 15.8% CAGR over
                the last 5 years, outperforming the benchmark indices by 3.2%.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-400">Large & Mid Cap</span>
                <span className="text-green-400">+15.8% CAGR (5Y)</span>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">
                Balanced Portfolio
              </h3>
              <p className="text-gray-300 mb-4">
                Balanced portfolio recommendations (60% equity, 40% debt) have
                achieved 12.5% CAGR over 5 years with significantly lower
                volatility.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-indigo-400">Balanced Allocation</span>
                <span className="text-green-400">+12.5% CAGR (5Y)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <AnimatedTestimonials2 testimonials={testimonials} autoplay={true} />

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Let&apos;s Connect
          </h2>
          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-indigo-400"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Office Location
                    </h3>
                    <p className="text-gray-300">
                      123 Financial District
                      <br />
                      Andheri East
                      <br />
                      Mumbai, Maharashtra 400069
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-indigo-400"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Phone
                    </h3>
                    <p className="text-gray-300">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-indigo-400"
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
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Email
                    </h3>
                    <p className="text-gray-300">aman@wealthcreators.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      Office Hours
                    </h3>
                    <p className="text-gray-300">
                      Monday - Friday: 10AM - 7PM
                      <br />
                      Saturday: 10AM - 2PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <form className="bg-gray-900 rounded-lg border border-gray-700 p-6">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="investmentGoal"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Your Investment Goal
                  </label>
                  <select
                    id="investmentGoal"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option>Retirement Planning</option>
                    <option>Children&apos;s Education</option>
                    <option>Wealth Creation</option>
                    <option>Tax Saving</option>
                    <option>Home Purchase</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-200 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Tell me more about your financial goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Take the first step towards financial freedom today. Schedule a free
            consultation to discuss your financial goals and create a
            personalized investment plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-lg font-semibold">
              Start Investing Now
            </button>
            <button className="px-8 py-4 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition text-lg font-semibold">
              Learn About SIPs
            </button>
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              <span className="font-semibold">SEBI Registration:</span>{" "}
              ARN-21328 | <span className="font-semibold">Valid until:</span>{" "}
              31/03/2026
            </p>
            <p>
              Mutual Fund investments are subject to market risks. Please read
              all scheme related documents carefully before investing.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-indigo-400">Aman Gupta</h2>
              <p className="mt-2 text-gray-300">
                AMFI Registered Mutual Fund Distributor | Your Financial Partner
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-indigo-400\ transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-indigo-400 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
            </div>
          </div>
          <hr className="my-6 border-gray-800" />
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Aman Gupta, AMFI Registered Mutual
            Fund Distributor. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

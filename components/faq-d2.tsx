"use client";

import React, { useState } from "react";

// Define TypeScript interfaces
export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
  title?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ 
  items, 
  title = "Frequently Asked Questions" 
}) => {
  // State to track which accordion items are open
  const [openItems, setOpenItems] = useState<number[]>([]);

  // Toggle accordion item
  const toggleItem = (index: number): void => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index) 
        : [...prev, index]
    );
  };

  // Default FAQ data if none provided
  const defaultFaqItems: FAQItem[] = [
    {
      question: "Is there any fee for your advisory services?",
      answer: "No, as an AMFI registered mutual fund distributor, I don't charge any fee from investors. I earn commissions directly from the fund houses for the investments made through me, so there's no additional cost to you compared to investing directly."
    },
    {
      question: "What is the minimum amount I need to start investing?",
      answer: "You can start with as little as ₹1,000 per month through SIPs (Systematic Investment Plans). For lump sum investments, most funds have a minimum requirement of ₹5,000."
    },
    {
      question: "How are mutual funds different from stocks?",
      answer: "When you invest in stocks, you're buying shares of individual companies. With mutual funds, your money is pooled with other investors' money and managed by professional fund managers who invest in a diversified portfolio of stocks, bonds, or other securities based on the fund's objective."
    },
    {
      question: "What returns can I expect from mutual funds?",
      answer: "Returns vary based on the type of fund, market conditions, and time horizon. Historically, equity funds have delivered around 12-15% CAGR over long periods (10+ years), while debt funds typically deliver 7-9%. However, past performance is not a guarantee of future results."
    }
  ];

  // Use provided items or fall back to defaults
  const faqItems = items || defaultFaqItems;

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <div className={`group ${openItems.includes(index) ? 'data-[state=open]' : 'data-[state=closed]'}`}>
                <button 
                  onClick={() => toggleItem(index)}
                  className="flex justify-between items-center p-6 w-full bg-gray-800 hover:bg-gray-800/90 text-left"
                  aria-expanded={openItems.includes(index)}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {item.question}
                  </h3>
                  <div className="shrink-0 rounded-full border border-gray-700 bg-gray-900 p-1.5 text-emerald-400">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform duration-200 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-800/50 ${
                    openItems.includes(index) 
                      ? 'max-h-96' 
                      : 'max-h-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
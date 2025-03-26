import React from "react";

export default function GreenProfessionalTemplate() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 bg-emerald-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">Dr. Alex Richardson</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#about"
                  className="text-white hover:text-emerald-200 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#specialties"
                  className="text-white hover:text-emerald-200 transition"
                >
                  Specialties
                </a>
              </li>
              <li>
                <a
                  href="#research"
                  className="text-white hover:text-emerald-200 transition"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white hover:text-emerald-200 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden text-white">
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-700 to-teal-700 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Excellence in Neurosurgery
            </h1>
            <p className="text-xl text-emerald-100 mb-8">
              Board-certified neurosurgeon specializing in minimally invasive
              procedures with over 15 years of clinical experience.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-white text-emerald-800 font-semibold rounded-md hover:bg-emerald-100 transition">
                Schedule Consultation
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-emerald-800 transition">
                View Credentials
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-md overflow-hidden border-4 border-white shadow-xl">
              <div className="w-full h-full bg-emerald-200 flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-emerald-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              About Dr. Richardson
            </h2>
            <div className="h-1 w-24 bg-emerald-600 rounded"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-6">
                Dr. Alex Richardson is a distinguished neurosurgeon who has
                dedicated his career to advancing the field of neurosurgery and
                improving patient outcomes. With a compassionate approach and
                commitment to innovative techniques, he provides exceptional
                surgical care tailored to each patient&apos;s unique condition.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                After graduating with distinction from Johns Hopkins School of
                Medicine, Dr. Richardson completed his residency at Mayo Clinic
                and fellowship in complex spine surgery at UCSF. He is
                board-certified in Neurological Surgery and a Fellow of the
                American Association of Neurological Surgeons.
              </p>
              <p className="text-lg text-gray-700">
                Beyond his clinical practice, Dr. Richardson is actively
                involved in research focused on minimally invasive techniques
                and neuro-oncology. He has published over 50 articles in
                peer-reviewed journals and is a frequent lecturer at
                international conferences.
              </p>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  Education & Training
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>M.D., Johns Hopkins School of Medicine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Residency, Neurological Surgery, Mayo Clinic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Fellowship, Complex Spine Surgery, UCSF</span>
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  Board Certifications
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>American Board of Neurological Surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>
                      Fellow, American Association of Neurological Surgeons
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Member, Congress of Neurological Surgeons</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              About Dr. Richardson
            </h2>
            <div className="h-1 w-24 bg-emerald-600 rounded"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-700 mb-6">
                Dr. Alex Richardson is a distinguished neurosurgeon who has
                dedicated his career to advancing the field of neurosurgery and
                improving patient outcomes. With a compassionate approach and
                commitment to innovative techniques, he provides exceptional
                surgical care tailored to each patient&apos;s unique condition.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                After graduating with distinction from Johns Hopkins School of
                Medicine, Dr. Richardson completed his residency at Mayo Clinic
                and fellowship in complex spine surgery at UCSF. He is
                board-certified in Neurological Surgery and a Fellow of the
                American Association of Neurological Surgeons.
              </p>
              <p className="text-lg text-gray-700">
                Beyond his clinical practice, Dr. Richardson is actively
                involved in research focused on minimally invasive techniques
                and neuro-oncology. He has published over 50 articles in
                peer-reviewed journals and is a frequent lecturer at
                international conferences.
              </p>
            </div>
            <div className="md:w-1/2 space-y-6">
              <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  Education & Training
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>M.D., Johns Hopkins School of Medicine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Residency, Neurological Surgery, Mayo Clinic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Fellowship, Complex Spine Surgery, UCSF</span>
                  </li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-lg p-6 border-l-4 border-emerald-600">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                  Board Certifications
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>American Board of Neurological Surgery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>
                      Fellow, American Association of Neurological Surgeons
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>Member, Congress of Neurological Surgeons</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Specialties Section */}
      <section id="specialties" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              Areas of Specialty
            </h2>
            <div className="h-1 w-24 bg-emerald-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-2 bg-emerald-600"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-800">
                  Brain Tumors
                </h3>
                <p className="text-gray-700">
                  Specialized in the surgical management of both benign and
                  malignant brain tumors using advanced imaging and minimally
                  invasive techniques.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-2 bg-emerald-600"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-800">
                  Spine Surgery
                </h3>
                <p className="text-gray-700">
                  Expert in complex spine procedures, focusing on minimally
                  invasive approaches to treat degenerative disorders, trauma,
                  and deformity.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-2 bg-emerald-600"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-emerald-800">
                  Functional Neurosurgery
                </h3>
                <p className="text-gray-700">
                  Treatment of movement disorders, epilepsy, and chronic pain
                  using deep brain stimulation and other advanced
                  neuromodulation techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Research Section */}
      <section id="research" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              Research & Publications
            </h2>
            <div className="h-1 w-24 bg-emerald-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                Key Research Areas
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-emerald-600 text-white p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-800">
                      Minimally Invasive Neurosurgery
                    </h4>
                    <p className="text-gray-700">
                      Developing novel techniques to reduce operative trauma and
                      improve patient recovery.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-600 text-white p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-800">
                      Neuro-oncology
                    </h4>
                    <p className="text-gray-700">
                      Investigating targeted therapies for aggressive brain
                      tumors and metastatic disease.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-600 text-white p-1 rounded-full mr-3 mt-1">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-emerald-800">
                      Neural Regeneration
                    </h4>
                    <p className="text-gray-700">
                      Studying novel approaches to promote recovery after
                      traumatic brain and spinal cord injuries.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                Recent Publications
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-2">
                    Advances in Minimally Invasive Techniques for Complex
                    Cranial Surgery
                  </h4>
                  <p className="text-gray-600 mb-3">
                    Journal of Neurosurgery, 2024
                  </p>
                  <p className="text-gray-700">
                    A comprehensive review of endoscopic and keyhole approaches
                    for treating complex intracranial pathologies.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-2">
                    Long-term Outcomes of Deep Brain Stimulation for Movement
                    Disorders
                  </h4>
                  <p className="text-gray-600 mb-3">Neurology, 2023</p>
                  <p className="text-gray-700">
                    Multi-center study evaluating the efficacy and safety of DBS
                    for Parkinson&apos;s disease and essential tremor.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-2">
                    Novel Biomarkers for Glioblastoma Treatment Response
                  </h4>
                  <p className="text-gray-600 mb-3">Neuro-Oncology, 2022</p>
                  <p className="text-gray-700">
                    Identification of molecular signatures that predict response
                    to combined chemoradiation therapy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button className="px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition">
              View Complete Publication List
            </button>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-16 bg-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Patient Testimonials</h2>
            <div className="h-1 w-24 bg-white rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-700 p-6 rounded-lg relative">
              <div className="absolute -top-4 left-6 text-emerald-300 text-5xl">
                &quot;
              </div>
              <p className="text-emerald-100 italic mt-4 mb-6">
                Dr. Richardson&apos;s expertise and calm demeanor gave me
                confidence during a very difficult time. His surgical skill and
                attention to detail resulted in an outcome far better than I had
                hoped for.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">JL</span>
                </div>
                <div>
                  <p className="font-semibold">James Lewis</p>
                  <p className="text-emerald-200 text-sm">
                    Brain Tumor Patient
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-700 p-6 rounded-lg relative">
              <div className="absolute -top-4 left-6 text-emerald-300 text-5xl">
                &quot;
              </div>
              <p className="text-emerald-100 italic mt-4 mb-6">
                After suffering from debilitating back pain for years, Dr.
                Richardson&apos;s minimally invasive procedure changed my life.
                His conservative approach and surgical precision resulted in
                minimal recovery time.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">MT</span>
                </div>
                <div>
                  <p className="font-semibold">Maria Thompson</p>
                  <p className="text-emerald-200 text-sm">
                    Spine Surgery Patient
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-700 p-6 rounded-lg relative">
              <div className="absolute -top-4 left-6 text-emerald-300 text-5xl">
                &quot;
              </div>
              <p className="text-emerald-100 italic mt-4 mb-6">
                The deep brain stimulation procedure Dr. Richardson performed
                has given me back control of my life. His thoroughness in
                explaining every step of the process made a complex procedure
                feel manageable.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">RJ</span>
                </div>
                <div>
                  <p className="font-semibold">Robert Johnson</p>
                  <p className="text-emerald-200 text-sm">
                    DBS for Parkinson&apos;s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-800 mb-4">
              Request a Consultation
            </h2>
            <div className="h-1 w-24 bg-emerald-600 rounded"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2">
              <div className="bg-emerald-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
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
                      <h4 className="text-lg font-semibold text-emerald-800 mb-1">
                        Office Location
                      </h4>
                      <p className="text-gray-700">
                        Neurosurgery Partners Medical Center
                        <br />
                        789 Brain Health Blvd, Suite 400
                        <br />
                        Seattle, WA 98101
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-800 mb-1">
                        Phone
                      </h4>
                      <p className="text-gray-700">(206) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
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
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-800 mb-1">
                        Email
                      </h4>
                      <p className="text-gray-700">
                        dr.richardson@neurosurgerypartners.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mr-4 shrink-0">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-800 mb-1">
                        Clinic Hours
                      </h4>
                      <p className="text-gray-700">
                        Monday - Thursday: 8AM - 5PM
                        <br />
                        Friday: 8AM - 3PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <form className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-emerald-800 mb-6">
                  Send a Message
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="reason"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Reason for Consultation
                  </label>
                  <select
                    id="reason"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  >
                    <option value="">Please select</option>
                    <option value="brain-tumor">Brain Tumor</option>
                    <option value="spine-condition">Spine Condition</option>
                    <option value="movement-disorder">Movement Disorder</option>
                    <option value="second-opinion">Second Opinion</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  ></textarea>
                </div>
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="consent"
                    className="mr-2 h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="text-gray-700">
                    I consent to having my information stored for contact
                    purposes
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

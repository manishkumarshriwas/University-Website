import React from "react"

export const StudentResources = () => {
    return (
            <div className="bg-white text-gray-800 min-h-screen font-serif">
                {/* Header */}
                <header className="bg-[#001f4d] text-white sticky top-0 z-50 shadow-md"></header>

                {/* Hero Section */}
                <section className="bg-[#001f4d] text-white py-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Student Resources</h1>
                        <p className="text-xl md:text-2xl max-w-2xl mb-8 font-sans">
                            Comprehensive support services designed to enhance your academic journey and campus
                            experience.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#housing"
                                className="bg-[#800000] hover:bg-[#6a0000] transition-colors duration-300 text-white py-3 px-6 rounded shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
                            >
                                Explore Housing Options
                            </a>
                            <a
                                href="#support"
                                className="bg-transparent border-2 border-[#bfa14a] hover:bg-[#bfa14a] hover:text-[#001f4d] transition-all duration-300 text-white py-3 px-6 rounded shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
                            >
                                Academic Support
                            </a>
                        </div>
                    </div>
                </section>

                <main className="container mx-auto px-4 py-12">
                    {/* Housing Section */}
                    <section id="housing" className="mb-16 scroll-mt-20">
                        <div className="flex items-center mb-6">
                            <span className="material-symbols-outlined text-3xl mr-3 text-[#800000]">home</span>
                            <h2 className="text-3xl font-bold border-b-2 border-[#bfa14a] pb-2">Housing</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Student dormitory"
                                    className="w-full h-48 object-cover"
                                    keywords="dormitory, student housing, campus living"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">On-Campus Housing</h3>
                                    <p className="font-sans mb-4">
                                        Discover your home away from home. Our university offers traditional dormitories
                                        and suite-style living options.
                                    </p>
                                    <ul className="font-sans space-y-2 mb-4">
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>On-campus dormitories with meal plans</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>24/7 Residential Life support services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Accessibility accommodations available</span>
                                        </li>
                                    </ul>
                                    <a
                                        href="#"
                                        className="inline-block bg-[#001f4d] text-white py-2 px-4 rounded hover:bg-[#00285f] transition-colors duration-300"
                                    >
                                        View Housing Options
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Off-campus apartment"
                                    className="w-full h-48 object-cover"
                                    keywords="off-campus housing, student apartment"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">Off-Campus Housing</h3>
                                    <p className="font-sans mb-4">
                                        Explore our partnerships with local properties and find the perfect off-campus
                                        living space that suits your lifestyle.
                                    </p>
                                    <ul className="font-sans space-y-2 mb-4">
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Off-campus housing listings and resources</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Roommate matching services</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Transportation options to campus</span>
                                        </li>
                                    </ul>
                                    <a
                                        href="#"
                                        className="inline-block bg-[#001f4d] text-white py-2 px-4 rounded hover:bg-[#00285f] transition-colors duration-300"
                                    >
                                        Browse Listings
                                    </a>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Housing application"
                                    className="w-full h-48 object-cover"
                                    keywords="housing application, student services"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">Housing Portal</h3>
                                    <p className="font-sans mb-4">
                                        Applications open each March for the upcoming academic year. Access forms,
                                        important dates, and FAQs through our portal.
                                    </p>
                                    <ul className="font-sans space-y-2 mb-4">
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Online application forms</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Housing deadlines and important dates</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Payment plans and financial information</span>
                                        </li>
                                    </ul>
                                    <a
                                        href="#"
                                        className="inline-block bg-[#001f4d] text-white py-2 px-4 rounded hover:bg-[#00285f] transition-colors duration-300"
                                    >
                                        Access Housing Portal
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Dining Section */}
                    <section id="dining" className="mb-16 scroll-mt-20">
                        <div className="flex items-center mb-6">
                            <span className="material-symbols-outlined text-3xl mr-3 text-[#800000]">restaurant</span>
                            <h2 className="text-3xl font-bold border-b-2 border-[#bfa14a] pb-2">Dining</h2>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
                            <p className="font-sans mb-6 text-lg">
                                Enjoy diverse and nutritious meals on campus. Explore our dining halls, cafes, and food
                                courts offering a wide variety of cuisines and accommodating dietary needs including
                                vegetarian, vegan, and allergy-friendly options.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                <div className="border border-gray-200 rounded-lg p-5 hover:border-[#bfa14a] transition-colors duration-300">
                                    <h3 className="text-xl font-bold mb-3">Meal Plans</h3>
                                    <p className="font-sans mb-4">
                                        Flexible meal plans designed to fit your schedule and dietary preferences.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-[#800000] hover:underline font-medium flex items-center"
                                    >
                                        View Plan Options
                                        <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                    </a>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-5 hover:border-[#bfa14a] transition-colors duration-300">
                                    <h3 className="text-xl font-bold mb-3">Hours & Locations</h3>
                                    <p className="font-sans mb-4">
                                        Find operating hours for all dining facilities across campus.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-[#800000] hover:underline font-medium flex items-center"
                                    >
                                        View Campus Map
                                        <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                    </a>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-5 hover:border-[#bfa14a] transition-colors duration-300">
                                    <h3 className="text-xl font-bold mb-3">Special Events</h3>
                                    <p className="font-sans mb-4">
                                        Seasonal menus and themed dining events throughout the academic year.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-[#800000] hover:underline font-medium flex items-center"
                                    >
                                        See Upcoming Events
                                        <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white p-5 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-bold mb-4">Dietary Accommodations</h3>
                                <div className="grid md:grid-cols-2 gap-4 font-sans">
                                    <div>
                                        <h4 className="font-bold mb-2">We accommodate:</h4>
                                        <ul className="space-y-2">
                                            <li className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>Vegetarian & Vegan Options</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>Gluten-Free Alternatives</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>Nut-Free Zones</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2">Contact Us:</h4>
                                        <p className="mb-2">
                                            For special dietary needs or questions, contact our Dining Services:
                                        </p>
                                        <p className="flex items-center mb-1">
                                            <span className="material-symbols-outlined mr-2">mail</span>
                                            dining@university.edu
                                        </p>
                                        <p className="flex items-center">
                                            <span className="material-symbols-outlined mr-2">call</span>
                                            (555) 123-4567
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Health Services Section */}
                    <section id="health" className="mb-16 scroll-mt-20">
                        <div className="flex items-center mb-6">
                            <span className="material-symbols-outlined text-3xl mr-3 text-[#800000]">
                                health_and_safety
                            </span>
                            <h2 className="text-3xl font-bold border-b-2 border-[#bfa14a] pb-2">Health Services</h2>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden">
                            <div className="md:flex">
                                <div className="md:w-1/2 p-8">
                                    <h3 className="text-2xl font-bold mb-4">Your Health is Our Priority</h3>
                                    <p className="font-sans mb-6">
                                        Our campus medical clinic offers comprehensive health care services to support
                                        your physical wellbeing during your academic journey.
                                    </p>

                                    <div className="space-y-4 font-sans mb-6">
                                        <h4 className="text-lg font-bold">Services Include:</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>General health care</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>Immunizations</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>Wellness checkups</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>Health education</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>Insurance guidance</span>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                    check_circle
                                                </span>
                                                <span>Confidential care</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href="#"
                                            className="bg-[#800000] hover:bg-[#6a0000] transition-colors duration-300 text-white py-2 px-5 rounded"
                                        >
                                            Schedule Appointment
                                        </a>
                                        <a
                                            href="#"
                                            className="border border-[#001f4d] text-[#001f4d] hover:bg-[#001f4d] hover:text-white transition-colors duration-300 py-2 px-5 rounded"
                                        >
                                            Health Portal
                                        </a>
                                    </div>
                                </div>

                                <div className="md:w-1/2 bg-[#001f4d] text-white p-8">
                                    <h3 className="text-2xl font-bold mb-4">Contact & Hours</h3>
                                    <div className="space-y-6 font-sans">
                                        <div>
                                            <h4 className="text-lg font-bold mb-2">Location</h4>
                                            <p className="flex items-start">
                                                <span className="material-symbols-outlined mr-2 mt-1">location_on</span>
                                                <span>
                                                    Student Health Center
                                                    <br />
                                                    123 University Avenue
                                                    <br />
                                                    Building 4, Ground Floor
                                                </span>
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold mb-2">Hours of Operation</h4>
                                            <ul className="space-y-1">
                                                <li className="flex justify-between">
                                                    <span>Monday - Friday</span>
                                                    <span>8:00 AM - 6:00 PM</span>
                                                </li>
                                                <li className="flex justify-between">
                                                    <span>Saturday</span>
                                                    <span>10:00 AM - 2:00 PM</span>
                                                </li>
                                                <li className="flex justify-between">
                                                    <span>Sunday</span>
                                                    <span>Closed</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-lg font-bold mb-2">Emergency Contact</h4>
                                            <p className="flex items-center mb-1">
                                                <span className="material-symbols-outlined mr-2">call</span>
                                                (555) 123-4567
                                            </p>
                                            <p className="flex items-center">
                                                <span className="material-symbols-outlined mr-2">mail</span>
                                                health@university.edu
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Counseling Services Section */}
                    <section id="counseling" className="mb-16 scroll-mt-20">
                        <div className="flex items-center mb-6">
                            <span className="material-symbols-outlined text-3xl mr-3 text-[#800000]">psychology</span>
                            <h2 className="text-3xl font-bold border-b-2 border-[#bfa14a] pb-2">
                                Counseling Services & Mental Health Support
                            </h2>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <p className="font-sans text-lg mb-8">
                                Supporting your mental wellness is essential for academic success. Our Counseling Center
                                provides confidential support including individual therapy, group workshops, crisis
                                intervention, and referrals.
                            </p>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="w-16 h-16 bg-[#001f4d] text-white rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-3xl">person</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Individual Counseling</h3>
                                    <p className="font-sans">
                                        One-on-one sessions with licensed therapists to address personal concerns in a
                                        confidential setting.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="w-16 h-16 bg-[#001f4d] text-white rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-3xl">groups</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Group Therapy</h3>
                                    <p className="font-sans">
                                        Supportive group environments to connect with peers experiencing similar
                                        challenges and learn coping strategies.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <div className="w-16 h-16 bg-[#001f4d] text-white rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-3xl">schedule</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Crisis Intervention</h3>
                                    <p className="font-sans">
                                        Immediate support for urgent mental health needs with 24/7 crisis counselors
                                        available by phone.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#800000] text-white p-6 rounded-lg mb-8">
                                <h3 className="text-xl font-bold mb-4">How to Access Services</h3>
                                <div className="grid md:grid-cols-3 gap-6 font-sans">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-white text-[#800000] rounded-full flex items-center justify-center mb-3">
                                            <span className="font-bold">1</span>
                                        </div>
                                        <h4 className="font-bold mb-2">Request Appointment</h4>
                                        <p>
                                            Complete our online intake form or call our office to schedule an initial
                                            consultation.
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-white text-[#800000] rounded-full flex items-center justify-center mb-3">
                                            <span className="font-bold">2</span>
                                        </div>
                                        <h4 className="font-bold mb-2">Initial Assessment</h4>
                                        <p>
                                            Meet with a counselor to discuss your needs and determine appropriate
                                            services.
                                        </p>
                                    </div>

                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-12 h-12 bg-white text-[#800000] rounded-full flex items-center justify-center mb-3">
                                            <span className="font-bold">3</span>
                                        </div>
                                        <h4 className="font-bold mb-2">Ongoing Support</h4>
                                        <p>
                                            Receive personalized care through individual sessions, group therapy, or
                                            referrals.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center justify-between bg-gray-100 p-6 rounded-lg">
                                <div className="mb-4 md:mb-0 md:mr-6">
                                    <h3 className="text-xl font-bold mb-2">Need to Talk?</h3>
                                    <p className="font-sans">
                                        Our counselors are here to support you through your academic journey.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="#"
                                        className="bg-[#001f4d] hover:bg-[#00285f] transition-colors duration-300 text-white py-2 px-5 rounded"
                                    >
                                        Schedule Appointment
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-[#800000] hover:underline">
                                        <span className="material-symbols-outlined">crisis_alert</span>
                                        Crisis Hotline: (555) 123-9999
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Career Services */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">💼</span>
            <h2 className="text-2xl font-serif font-semibold">Career Services</h2>
          </div>
          <p className="mb-4">
            Prepare for your professional future. Career Services offers personalized counseling,
            resume and interview workshops, internship placement assistance, and career fairs.
          </p>
          <p className="mb-6">
            Connect with alumni and explore job opportunities through our extensive network.
          </p>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium group"
            >
              Learn more
              <span className="material-symbols-outlined ml-1 group-hover:ml-2 transition-all">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Academic Advising */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">🎓</span>
            <h2 className="text-2xl font-serif font-semibold">Academic Advising</h2>
          </div>
          <p className="mb-4">
            Guidance for your academic journey. Our experienced academic advisors assist with course
            selection, degree planning, and overcoming academic challenges to ensure you stay on
            track toward graduation.
          </p>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium group"
            >
              Schedule appointment
              <span className="material-symbols-outlined ml-1 group-hover:ml-2 transition-all">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Student Life */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">🎉</span>
            <h2 className="text-2xl font-serif font-semibold">Student Life</h2>
          </div>
          <p className="mb-4">
            Engage beyond the classroom. Join a variety of student clubs, organizations, leadership
            programs, and volunteer opportunities.
          </p>
          <p className="mb-6">
            Participate in cultural events, sports, and community service projects to enrich your
            campus experience.
          </p>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium group"
            >
              Explore activities
              <span className="material-symbols-outlined ml-1 group-hover:ml-2 transition-all">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Academic Support */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">📚</span>
            <h2 className="text-2xl font-serif font-semibold">Academic Support</h2>
          </div>
          <p className="mb-4">
            Resources to help you succeed. Access tutoring centers, writing labs, study groups, and
            the campus library to strengthen your learning and research skills.
          </p>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium group"
            >
              Find resources
              <span className="material-symbols-outlined ml-1 group-hover:ml-2 transition-all">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Campus Safety */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">🛡️</span>
            <h2 className="text-2xl font-serif font-semibold">Campus Safety</h2>
          </div>
          <p className="mb-4">
            Safety is our commitment. Learn about emergency contacts, campus security services, safety
            escort programs, and procedures for reporting concerns.
          </p>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium group"
            >
              Safety information
              <span className="material-symbols-outlined ml-1 group-hover:ml-2 transition-all">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Transportation */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">🚌</span>
            <h2 className="text-2xl font-serif font-semibold">Transportation</h2>
          </div>
          <p className="mb-4">
            Getting around campus and beyond. Information on shuttle services, bike rentals, parking
            permits, and nearby public transportation options to ensure convenient mobility.
          </p>
          <div className="mt-auto">
            <a
              href="#"
              className="inline-flex items-center text-primary-700 hover:text-primary-800 font-medium group"
            >
              Transportation options
              <span className="material-symbols-outlined ml-1 group-hover:ml-2 transition-all">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Additional Assistance Section */}
      <div className="mt-16 bg-primary-50 rounded-lg p-8 border border-primary-100 col-span-full">
        <h2 className="text-2xl font-serif font-semibold mb-4 text-center">
          Need Additional Assistance?
        </h2>
        <p className="text-center mb-6">
          Our Student Services team is here to help you navigate any challenges you may encounter during
          your academic journey.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-primary-700 hover:bg-primary-800 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300 flex items-center">
            <span className="material-symbols-outlined mr-2">contact_support</span>
            Contact Us
          </button>
          <button className="bg-white border border-primary-700 hover:bg-primary-50 text-primary-700 font-medium py-2 px-6 rounded-md transition-colors duration-300 flex items-center">
            <span className="material-symbols-outlined mr-2">forum</span>
            FAQ
          </button>
        </div>
      </div>
    </div>
                
           
       
                                   
                               
                           
                       
                    
                </main>
            </div>
    )
}











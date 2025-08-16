import React from "react"

export const AdmissionPage = () => {
    const steps = [
        {
          title: "Step 1: Application Submission",
          description:
            "Complete and submit your application through our online portal along with the application fee.",
        },
        {
          title: "Step 2: Document Verification",
          description:
            "Submit required documents like transcripts, test scores, essays, and recommendations for review.",
        },
        {
          title: "Step 3: Interview",
          description:
            "Selected candidates may be invited for an interview (in-person or virtual) with our admissions committee.",
        },
        {
          title: "Step 4: Decision Notification",
          description:
            "Receive your admission decision via email and official letter within 4-6 weeks of completing your application.",
        },
        {
          title: "Step 5: Enrollment",
          description:
            "Accept your offer, pay the enrollment deposit, and complete the enrollment process.",
        },
      ];
    
      const deadlines = [
        {
          program: "Undergraduate",
          fall: "October 15",
          spring: "January 15",
          summer: "April 1",
        },
        {
          program: "Graduate",
          fall: "December 1",
          spring: "March 1",
          summer: "June 1",
        },
        {
          program: "International",
          fall: "November 15",
          spring: "February 15",
          summer: "May 1",
        },
        {
          program: "Continuing Education",
          fall: "Rolling Admissions",
          spring: "Rolling Admissions",
          summer: "Rolling Admissions",
        },
      ];
    return (
            <div className="bg-white min-h-screen">
                <header className="bg-primary-700 text-white py-8">
                                    {/* Hero Section */}
                <div className="relative h-[400px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=1200"
                        alt="University campus"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
                        keywords="university campus, education, academic buildings, university architecture"
                    />
                    <div className="absolute inset-0 bg-navy-900/60 flex flex-col justify-center items-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-center">
                            Admissions
                        </h1>
                        <p className="text-lg md:text-xl max-w-3xl text-center mb-6">
                            Begin your academic journey with us and discover your potential
                        </p>
                        <button className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                            Apply Now
                        </button>
                    </div>
                </div>


                </header>

                <nav className="bg-white shadow-md sticky top-0 z-10">
                    <div className="container mx-auto px-4">
                        <ul className="flex flex-wrap justify-center text-sm md:text-base">
                            <li className="mx-2 md:mx-4 py-4 border-b-2 border-primary-500 font-medium">
                                <a
                                    href="#undergraduate"
                                    className="px-2 py-1 hover:bg-primary-50 rounded transition duration-200"
                                >
                                    Undergraduate
                                </a>
                            </li>
                            <li className="mx-2 md:mx-4 py-4">
                                <a
                                    href="#graduate"
                                    className="px-2 py-1 hover:bg-primary-50 rounded transition duration-200"
                                >
                                    Graduate
                                </a>
                            </li>
                            <li className="mx-2 md:mx-4 py-4">
                                <a
                                    href="#international"
                                    className="px-2 py-1 hover:bg-primary-50 rounded transition duration-200"
                                >
                                    International
                                </a>
                            </li>
                            <li className="mx-2 md:mx-4 py-4">
                                <a
                                    href="#continuing"
                                    className="px-2 py-1 hover:bg-primary-50 rounded transition duration-200"
                                >
                                    Continuing Education
                                </a>
                            </li>
                            <li className="mx-2 md:mx-4 py-4">
                                <a
                                    href="#process"
                                    className="px-2 py-1 hover:bg-primary-50 rounded transition duration-200"
                                >
                                    Process
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="container mx-auto px-4 py-12">
                    <section id="undergraduate" className="mb-20">
                        <div className="bg-gradient-to-r from-primary-50 to-white p-6 rounded-lg shadow-sm mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Undergraduate Admissions</h2>
                            <p className="text-lg mb-6">
                                Join our vibrant undergraduate community where academic excellence meets innovation and
                                diversity. Our admissions process is designed to identify talented, motivated students
                                who are eager to make an impact.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl mr-3">
                                        calendar_today
                                    </span>
                                    <h3 className="text-xl font-semibold">Application Deadlines</h3>
                                </div>
                                <ul className="ml-10 space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>
                                            <strong>Fall Semester:</strong> October 15
                                        </span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>
                                            <strong>Spring Semester:</strong> January 15
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl mr-3">
                                        description
                                    </span>
                                    <h3 className="text-xl font-semibold">Requirements</h3>
                                </div>
                                <ul className="ml-10 space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>High school transcripts</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Standardized test scores (optional)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Essays and personal statements</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Letters of recommendation</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl mr-3">
                                        account_balance
                                    </span>
                                    <h3 className="text-xl font-semibold">Financial Aid</h3>
                                </div>
                                <p className="mb-4">
                                    We offer various scholarships and financial aid packages to eligible students.
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                >
                                    <span>Learn more about funding options</span>
                                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition duration-300 w-full md:w-auto"
                            >
                                <span className="material-symbols-outlined mr-2">edit_document</span>
                                Apply Now
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition duration-300 w-full md:w-auto"
                            >
                                <span className="material-symbols-outlined mr-2">mail</span>
                                Request Information
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition duration-300 w-full md:w-auto"
                            >
                                <span className="material-symbols-outlined mr-2">videocam</span>
                                Explore Our Campus Virtually
                            </a>
                        </div>
                    </section>

                    <section id="graduate" className="mb-20">
                        <div className="bg-gradient-to-r from-neutral-50 to-white p-6 rounded-lg shadow-sm mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Graduate Admissions</h2>
                            <p className="text-lg mb-6">
                                Our graduate programs foster rigorous scholarship, research, and professional
                                development across multiple disciplines. Discover how you can advance your academic and
                                career goals with us.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-neutral-600 text-3xl mr-3">
                                        school
                                    </span>
                                    <h3 className="text-xl font-semibold">Program Requirements</h3>
                                </div>
                                <ul className="ml-10 space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-neutral-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Undergraduate transcripts</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-neutral-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>GRE/GMAT scores (program-specific)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-neutral-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Curriculum Vitae or Resume</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-neutral-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Statement of Purpose</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-neutral-600 text-3xl mr-3">
                                        workspace_premium
                                    </span>
                                    <h3 className="text-xl font-semibold">Fellowships & Assistantships</h3>
                                </div>
                                <p className="mb-4">
                                    Graduate students may be eligible for teaching assistantships, research positions,
                                    and merit-based fellowships.
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                >
                                    <span>View funding opportunities</span>
                                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                </a>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-neutral-600 text-3xl mr-3">
                                        download
                                    </span>
                                    <h3 className="text-xl font-semibold">Downloadable Resources</h3>
                                </div>
                                <ul className="ml-10 space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                                        >
                                            <span className="material-symbols-outlined mr-2">file_present</span>
                                            <span>Application Checklist (PDF)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                                        >
                                            <span className="material-symbols-outlined mr-2">file_present</span>
                                            <span>Graduate Program Brochures</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                                        >
                                            <span className="material-symbols-outlined mr-2">help</span>
                                            <span>Graduate Admissions FAQ</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Contact Graduate Admissions</h3>
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div className="mb-4 md:mb-0">
                                    <p className="flex items-center">
                                        <span className="material-symbols-outlined mr-2">call</span> (555) 123-4567
                                    </p>
                                    <p className="flex items-center">
                                        <span className="material-symbols-outlined mr-2">mail</span>{" "}
                                        grad.admissions@university.edu
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-5 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition duration-300"
                                >
                                    <span className="material-symbols-outlined mr-2">event</span>
                                    Sign Up for Virtual Info Session
                                </a>
                            </div>
                        </div>
                    </section>

                    <section id="international" className="mb-20">
                        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg shadow-sm mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">International Admissions</h2>
                            <p className="text-lg mb-6">
                                We welcome students from around the world and offer comprehensive support for visa,
                                language proficiency, and cultural integration.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-blue-600 text-3xl mr-3">
                                        language
                                    </span>
                                    <h3 className="text-xl font-semibold">Language Requirements</h3>
                                </div>
                                <ul className="ml-10 space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>TOEFL: Minimum score of 90 (iBT)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>IELTS: Minimum score of 7.0</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Duolingo: Minimum score of 115</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-blue-600 text-3xl mr-3">
                                        flight
                                    </span>
                                    <h3 className="text-xl font-semibold">Visa & Immigration</h3>
                                </div>
                                <p className="mb-4">
                                    Our international student office provides guidance on student visas, immigration
                                    requirements, and maintaining status.
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                >
                                    <span>View visa information</span>
                                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                </a>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-blue-600 text-3xl mr-3">
                                        support_agent
                                    </span>
                                    <h3 className="text-xl font-semibold">International Student Services</h3>
                                </div>
                                <ul className="ml-10 space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Dedicated international advisors</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Orientation programs</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Cultural events and activities</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Housing assistance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300 w-full md:w-auto"
                            >
                                <span className="material-symbols-outlined mr-2">public</span>
                                Apply as an International Student
                            </a>
                            <a
                                href="#"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition duration-300 w-full md:w-auto"
                            >
                                <span className="material-symbols-outlined mr-2">event_available</span>
                                Schedule a Consultation
                            </a>
                        </div>
                    </section>

                    <section id="continuing" className="mb-20">
                        <div className="bg-gradient-to-r from-emerald-50 to-white p-6 rounded-lg shadow-sm mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">Continuing Education</h2>
                            <p className="text-lg mb-6">
                                Our Continuing Education programs provide flexible learning opportunities for working
                                professionals, lifelong learners, and certificate seekers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-emerald-600 text-3xl mr-3">
                                        menu_book
                                    </span>
                                    <h3 className="text-xl font-semibold">Programs Offered</h3>
                                </div>
                                <ul className="ml-10 space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-emerald-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Professional certificates</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-emerald-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Online courses</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-emerald-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Evening classes</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-emerald-500 mr-2 text-sm">
                                            arrow_right
                                        </span>
                                        <span>Workshops and seminars</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-emerald-600 text-3xl mr-3">
                                        calendar_month
                                    </span>
                                    <h3 className="text-xl font-semibold">Enrollment Process</h3>
                                </div>
                                <p className="mb-4">
                                    We offer rolling admissions for most continuing education programs, with courses
                                    starting throughout the year.
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                >
                                    <span>View course registration guide</span>
                                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                </a>
                            </div>

                            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-emerald-600 text-3xl mr-3">
                                        download
                                    </span>
                                    <h3 className="text-xl font-semibold">Resources</h3>
                                </div>
                                <ul className="ml-10 space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                                        >
                                            <span className="material-symbols-outlined mr-2">file_present</span>
                                            <span>Program Guide (PDF)</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                                        >
                                            <span className="material-symbols-outlined mr-2">help</span>
                                            <span>Continuing Education FAQs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="flex items-center text-primary-600 hover:text-primary-800 font-medium"
                                        >
                                            <span className="material-symbols-outlined mr-2">payments</span>
                                            <span>Tuition & Fees Information</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10 bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <h3 className="text-lg font-semibold mb-4">Ready to Advance Your Skills?</h3>
                            <div className="flex flex-col md:flex-row gap-4">
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-5 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition duration-300 w-full md:w-auto"
                                >
                                    <span className="material-symbols-outlined mr-2">how_to_reg</span>
                                    Browse Available Courses
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex items-center justify-center px-5 py-2 border-2 border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition duration-300 w-full md:w-auto"
                                >
                                    <span className="material-symbols-outlined mr-2">mail</span>
                                    Join Our Mailing List
                                </a>
                            </div>
                        </div>
                    </section>

                    <section id="process" className="mb-20 px-4 md:px-0 max-w-7xl mx-auto">
  {/* Header */}
  <div className="bg-gradient-to-r from-primary-50 to-white p-8 rounded-lg shadow-md mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-primary-800">
          Admission Process
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Our streamlined application process is designed to help you showcase
          your strengths and potential.
        </p>
      </div>

      {/* Steps Timeline */}
      <div className="relative">
        {/* Vertical Line for timeline */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-300 transform -translate-x-1/2 rounded"></div>

        {/* Steps container */}
        <div className="space-y-16 md:space-y-0 relative">
          {steps.map((step, index) => {
            const stepNum = index + 1;
            const isEven = stepNum % 2 === 0;
            return (
              <div
                key={stepNum}
                className="md:grid md:grid-cols-2 md:gap-16 relative items-center"
              >
                {/* Left or Right content based on odd/even step */}
                <div
                  className={`${
                    isEven ? "md:col-start-2" : "md:col-start-1 md:text-right"
                  } pb-8 md:pb-24`}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 inline-block max-w-md">
                    <div
                      className={`flex items-center mb-6 ${
                        isEven
                          ? "justify-start"
                          : "flex-row-reverse justify-end"
                      }`}
                    >
                      <h3 className="text-2xl font-semibold text-primary-900">
                        {step.title}
                      </h3>
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-extrabold mx-4"
                      >
                        {stepNum}
                      </div>
                    </div>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>

                {/* Empty side for timeline spacing */}
                <div className="hidden md:block"></div>

                {/* Circle connectors on timeline */}
                <div
                  className="hidden md:block absolute left-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary-600 transform -translate-x-1/2"
                  style={{ top: `calc(${stepNum * 6}rem)` }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Important Deadlines Table */}
      <div className="mt-20 px-4 md:px-0 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8 text-primary-800 text-center md:text-left">
          Important Deadlines
        </h3>
        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
          <table className="min-w-full bg-white divide-y divide-gray-200">
            <thead className="bg-primary-100">
              <tr>
                <th className="py-4 px-6 text-left font-semibold text-primary-900">
                  Program
                </th>
                <th className="py-4 px-6 text-left font-semibold text-primary-900">
                  Fall Semester
                </th>
                <th className="py-4 px-6 text-left font-semibold text-primary-900">
                  Spring Semester
                </th>
                <th className="py-4 px-6 text-left font-semibold text-primary-900">
                  Summer Term
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {deadlines.map((deadline, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-primary-50 transition-colors cursor-default"
                >
                  <td className="py-4 px-6 font-medium text-gray-800">
                    {deadline.program}
                  </td>
                  <td className="py-4 px-6">{deadline.fall}</td>
                  <td className="py-4 px-6">{deadline.spring}</td>
                  <td className="py-4 px-6">{deadline.summer}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

                    </section>
                </main>
            </div>
    )
}

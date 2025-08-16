import React from "react"

export const Business = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-white">
                {/* Header Section */}

                {/* Banner Section */}
                <section className="relative h-[500px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                        alt="Business students in modern classroom"
                        className="absolute inset-0 w-full h-full object-cover"
                        keywords="business school, students, classroom, education, learning"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Business School</h1>
                        <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
                            Our Business School provides rigorous training in management, finance, marketing, and
                            entrepreneurship.
                        </p>
                        <a
                            href="#programs"
                            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 w-fit"
                        >
                            Explore Programs
                        </a>
                    </div>
                </section>

                {/* Business School Overview */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">About Our Business School</h2>
                        <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center leading-relaxed">
                            At Metropolitan University, the Business School is dedicated to providing students with a
                            strong foundation in business principles, combining academic excellence with real-world
                            application. Our programs are designed to prepare students for successful careers in
                            management, finance, marketing, entrepreneurship, and beyond.
                        </p>
                    </div>
                </section>

                {/* Academic Programs */}
                <section id="programs" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Academic Programs</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Undergraduate Program */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-primary-600 py-4">
                                    <h3 className="text-xl font-bold text-white text-center">Undergraduate</h3>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold mb-4">
                                        Bachelor of Business Administration (BBA)
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        A four-year program providing a solid foundation in business concepts,
                                        management strategies, and leadership.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        Our BBA program is designed to equip students with essential business knowledge,
                                        leadership skills, and practical experience. Graduates are prepared to excel in
                                        diverse sectors such as finance, marketing, and human resources.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary-600 font-semibold hover:text-primary-800 transition-colors duration-300 flex items-center"
                                    >
                                        Learn more
                                        <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            {/* Postgraduate Program */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-primary-600 py-4">
                                    <h3 className="text-xl font-bold text-white text-center">Postgraduate</h3>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold mb-4">
                                        Master of Business Administration (MBA)
                                    </h4>
                                    <p className="text-gray-600 mb-4">
                                        A two-year program focusing on advanced management concepts, leadership, and
                                        business strategy.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        Our MBA program is tailored for ambitious professionals seeking to accelerate
                                        their careers. The program offers specializations in Marketing, Finance, and
                                        Entrepreneurship, and includes practical business consulting projects.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary-600 font-semibold hover:text-primary-800 transition-colors duration-300 flex items-center"
                                    >
                                        Learn more
                                        <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>

                            {/* Executive Program */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="bg-primary-600 py-4">
                                    <h3 className="text-xl font-bold text-white text-center">Executive</h3>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold mb-4">Executive MBA (EMBA)</h4>
                                    <p className="text-gray-600 mb-4">
                                        A program for mid-level professionals looking to advance into senior leadership
                                        positions.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        Our Executive MBA provides working professionals with the skills to lead
                                        high-performance teams, manage organizational change, and drive innovation in a
                                        competitive global market.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary-600 font-semibold hover:text-primary-800 transition-colors duration-300 flex items-center"
                                    >
                                        Learn more
                                        <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Curriculum and Specializations */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Curriculum and Specializations</h2>

                        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12 text-center">
                            Our curriculum is structured to deliver both theoretical knowledge and practical experience.
                            Students have the opportunity to participate in internships, capstone projects, and industry
                            case studies. The Business School also offers specializations in Finance, Marketing, and
                            Entrepreneurship.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">groups</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Management</h3>
                                <p className="text-gray-600 text-center">
                                    Courses focusing on organizational behavior, strategic management, leadership, and
                                    decision-making.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">
                                        landscape
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Finance</h3>
                                <p className="text-gray-600 text-center">
                                    Topics in corporate finance, financial analysis, investment management, and risk
                                    management.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">
                                        trending_up
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Marketing</h3>
                                <p className="text-gray-600 text-center">
                                    Courses covering digital marketing, consumer behavior, advertising, and brand
                                    management.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">
                                        lightbulb
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Entrepreneurship</h3>
                                <p className="text-gray-600 text-center">
                                    Fostering innovative thinking and providing students with the skills to launch and
                                    manage their businesses.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research and Thought Leadership */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Research and Thought Leadership</h2>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Research Areas</h3>
                                <p className="text-gray-600 mb-6">
                                    Our faculty are actively involved in cutting-edge research in areas like digital
                                    transformation, global business strategy, sustainable business practices, and
                                    financial innovation.
                                </p>

                                <h3 className="text-2xl font-bold mb-6">Faculty Research</h3>
                                <p className="text-gray-600 mb-6">
                                    Professor Sarah Johnson, a leader in the field of finance, has published extensively
                                    on topics such as financial markets, risk management, and the global economy.
                                </p>

                                <h3 className="text-2xl font-bold mb-6">Research Centers</h3>
                                <p className="text-gray-600">
                                    The Center for Entrepreneurship and Innovation at our Business School promotes
                                    research on startup ecosystems, venture funding, and entrepreneurship policy.
                                </p>
                            </div>

                            <div className="bg-gray-100 p-8 rounded-lg">
                                <h4 className="text-xl font-bold mb-6 text-center">Featured Research Publications</h4>

                                <div className="space-y-6">
                                    <div className="border-l-4 border-primary-600 pl-4">
                                        <h5 className="font-semibold mb-2">
                                            "Digital Transformation in Banking: A Global Perspective"
                                        </h5>
                                        <p className="text-gray-600 text-sm">
                                            Dr. Richard Evans, Journal of Financial Innovation, 2023
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-primary-600 pl-4">
                                        <h5 className="font-semibold mb-2">
                                            "Sustainable Business Models in the Renewable Energy Sector"
                                        </h5>
                                        <p className="text-gray-600 text-sm">
                                            Prof. Maria Rodriguez, Sustainability & Business Review, 2022
                                        </p>
                                    </div>

                                    <div className="border-l-4 border-primary-600 pl-4">
                                        <h5 className="font-semibold mb-2">
                                            "The Impact of AI on Strategic Decision Making"
                                        </h5>
                                        <p className="text-gray-600 text-sm">
                                            Dr. James Wilson, Strategic Management Quarterly, 2023
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Our Distinguished Faculty</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3J8ZW58MHx8fHwxNzU0OTkyODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Dr. Robert Thompson"
                                    className="w-full h-64 object-cover object-center"
                                    keywords="professor, finance, business school faculty"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. Robert Thompson</h3>
                                    <h4 className="text-primary-600 font-medium mb-4">Professor of Finance</h4>
                                    <p className="text-gray-600">
                                        Dr. Thompson has over 20 years of experience in financial markets and has
                                        contributed to research on investment strategies, corporate finance, and asset
                                        management.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxwcm9mZXNzb3J8ZW58MHx8fHwxNzU0OTkyODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Prof. Jennifer Lee"
                                    className="w-full h-64 object-cover object-center"
                                    keywords="professor, marketing, business school faculty"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Prof. Jennifer Lee</h3>
                                    <h4 className="text-primary-600 font-medium mb-4">
                                        Associate Professor of Marketing
                                    </h4>
                                    <p className="text-gray-600">
                                        With expertise in consumer behavior and digital marketing, Prof. Lee has
                                        consulted for major global brands and published in leading marketing journals.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-2">
                                <img
                                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzb3J8ZW58MHx8fHwxNzU0OTkyODMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Dr. Michael Chen"
                                    className="w-full h-64 object-cover object-center"
                                    keywords="professor, entrepreneurship, business school faculty"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. Michael Chen</h3>
                                    <h4 className="text-primary-600 font-medium mb-4">Professor of Entrepreneurship</h4>
                                    <p className="text-gray-600">
                                        Dr. Chen brings real-world experience as a former tech startup founder. His
                                        research focuses on innovation ecosystems and venture capital strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Student Life */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Student Life</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">
                                        diversity_3
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Student Clubs and Organizations</h3>
                                <p className="text-gray-600 text-center">
                                    Our Business School boasts several student-run clubs, including the Finance Club,
                                    Marketing Society, and the Entrepreneurship Group. These clubs organize events such
                                    as guest lectures, networking nights, and competitions.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">event</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Events and Conferences</h3>
                                <p className="text-gray-600 text-center">
                                    The Business School hosts an annual Global Business Summit, where students interact
                                    with business leaders, entrepreneurs, and alumni. We also organize industry-specific
                                    workshops and career fairs throughout the year.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">public</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Global Networking Opportunities</h3>
                                <p className="text-gray-600 text-center">
                                    Our global partnerships with leading business schools and corporations offer
                                    students international exposure through exchange programs, global internships, and
                                    collaborative projects with peers around the world.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <a
                                href="#"
                                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                            >
                                Explore Student Activities
                            </a>
                        </div>
                    </div>
                </section>

                {/* Career Services & Alumni Network */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Career Services & Alumni Network</h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Career Services</h3>
                                <p className="text-gray-600 mb-6">
                                    Our Career Services Office provides tailored guidance to students seeking
                                    internships, job placements, and career development. We offer workshops, resume
                                    clinics, and mock interviews to ensure that our graduates are ready to succeed.
                                </p>

                                <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                                    <h4 className="font-bold mb-3">Industry Partnerships</h4>
                                    <p className="text-gray-600">
                                        We maintain strong relationships with over 500 companies worldwide, including
                                        Fortune 500 corporations, leading consulting firms, and innovative startups.
                                    </p>
                                </div>

                                <div className="bg-white p-5 rounded-lg shadow-md">
                                    <h4 className="font-bold mb-3">Career Support</h4>
                                    <ul className="text-gray-600 list-disc pl-5 space-y-2">
                                        <li>One-on-one career coaching</li>
                                        <li>Industry-specific resume workshops</li>
                                        <li>Interview preparation sessions</li>
                                        <li>Networking events with potential employers</li>
                                    </ul>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-6">Alumni Success Stories</h3>

                                <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                                    <p className="text-gray-600 italic mb-4">
                                        "The MBA program at Metropolitan University equipped me with the strategic
                                        mindset and leadership skills that have been instrumental in my career growth."
                                    </p>
                                    <div className="flex items-center">
                                        <img
                                            src="https://images.unsplash.com/photo-1601397922721-4326ae07bbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhbHVtbml8ZW58MHx8fHwxNzU0OTkyODMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="John Doe"
                                            className="w-12 h-12 rounded-full mr-4"
                                            keywords="alumni, business graduate, CFO"
                                        />
                                        <div>
                                            <h5 className="font-bold">John Doe</h5>
                                            <p className="text-sm text-gray-600">
                                                MBA Graduate, 2015
                                                <br />
                                                Chief Financial Officer, Global Corporation
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-6">Alumni Network</h3>
                                <p className="text-gray-600 mb-4">
                                    With over 10,000 alumni in leadership positions worldwide, our alumni network
                                    provides valuable mentoring and career support. Our graduates form a powerful
                                    community that spans across industries and continents.
                                </p>

                                <a
                                    href="#"
                                    className="text-primary-600 font-semibold hover:text-primary-800 transition-colors duration-300 flex items-center"
                                >
                                    Connect with our Alumni Network
                                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Admissions Information */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Admissions Information</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">
                                        checklist
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Eligibility Criteria</h3>
                                <p className="text-gray-600 mb-4">
                                    To apply for the MBA program, candidates must have at least two years of
                                    professional work experience and a bachelor's degree from an accredited institution.
                                </p>
                                <p className="text-gray-600">
                                    For the BBA program, we look for strong academic performance in high school,
                                    leadership potential, and a passion for business.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">
                                        description
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Application Process</h3>
                                <p className="text-gray-600 mb-4">
                                    Applications are submitted through our online portal. Along with your application,
                                    you will need to provide transcripts, two recommendation letters, a personal
                                    statement, and a GMAT/GRE score (if required).
                                </p>
                                <p className="text-gray-600">
                                    We have three application rounds throughout the year with deadlines in October,
                                    January, and March.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex justify-center mb-4">
                                    <span className="material-symbols-outlined text-5xl text-primary-600">
                                        payments
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-center">Tuition and Financial Aid</h3>
                                <p className="text-gray-600 mb-4">
                                    Tuition fees for the MBA program are $50,000 per year. We offer several merit-based
                                    scholarships, as well as need-based financial aid options.
                                </p>
                                <p className="text-gray-600">
                                    Our financial aid team is available to help you explore funding options, including
                                    loans, scholarships, and work-study opportunities.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <a
                                href="#"
                                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg inline-block transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* Footer */}

                {/* Next: "Add a student testimonials carousel section" */}
                {/* Next: "Add a FAQ accordion section with common admissions questions" */}
                {/* Next: "Add a section highlighting international study opportunities" */}
            </div>
        </div>
    )
}

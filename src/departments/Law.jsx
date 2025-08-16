import React from "react"

export const Law = () => {
    return (
        <div id="webcrumbs">
            <div className="font-sans">
                {/* Header Section */}

                {/* Banner Section */}
                <section className="relative h-[500px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                        alt="Law School Banner"
                        className="w-full h-full object-cover"
                        keywords="law library, legal books, courtroom, justice, legal education"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center">
                        <div className="container mx-auto px-6">
                            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                                Department of Law
                            </h2>
                            <p className="text-white text-xl md:text-2xl max-w-2xl">
                                Preparing Tomorrow's Legal Professionals with Comprehensive Coursework and Real-World
                                Experience
                            </p>
                        </div>
                    </div>
                </section>

                {/* Department Overview */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Department Overview</h2>
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg leading-relaxed text-gray-700">
                                The Department of Law at Harvard University is dedicated to equipping students with the
                                skills and knowledge necessary to excel in the legal profession. With a rigorous
                                curriculum that combines theoretical foundations with practical legal experience, we
                                ensure that our graduates are prepared for success in a rapidly changing global legal
                                environment.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Academic Programs */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Academic Programs</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Undergraduate Programs */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                                <div className="bg-primary-700 p-4">
                                    <h3 className="text-xl font-bold text-white">Undergraduate Programs</h3>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold mb-2">Bachelor of Laws (LL.B.)</h4>
                                    <p className="text-gray-600">
                                        A comprehensive three-year program covering constitutional law, criminal law,
                                        civil law, and international law.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block mt-4 text-primary-600 hover:text-primary-800 font-semibold"
                                    >
                                        Learn more →
                                    </a>
                                </div>
                            </div>

                            {/* Postgraduate Programs */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                                <div className="bg-primary-700 p-4">
                                    <h3 className="text-xl font-bold text-white">Postgraduate Programs</h3>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold mb-2">Master of Laws (LL.M.)</h4>
                                    <p className="text-gray-600">
                                        A one-year advanced degree offering specialization in areas such as human
                                        rights, corporate law, and environmental law.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block mt-4 text-primary-600 hover:text-primary-800 font-semibold"
                                    >
                                        Learn more →
                                    </a>
                                </div>
                            </div>

                            {/* Doctoral Programs */}
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1">
                                <div className="bg-primary-700 p-4">
                                    <h3 className="text-xl font-bold text-white">Doctoral Programs</h3>
                                </div>
                                <div className="p-6">
                                    <h4 className="font-bold mb-2">Ph.D. in Law</h4>
                                    <p className="text-gray-600">
                                        A research-oriented program for students aiming to make significant
                                        contributions to legal scholarship in fields like legal theory, comparative law,
                                        and public policy.
                                    </p>
                                    <a
                                        href="#"
                                        className="inline-block mt-4 text-primary-600 hover:text-primary-800 font-semibold"
                                    >
                                        Learn more →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research and Facilities */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Research and Facilities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Research Focus</h3>
                                <p className="text-gray-700 mb-6">
                                    Our Law School is known for its impactful research in areas such as international
                                    law, human rights, environmental law, and constitutional reforms. Our faculty
                                    regularly publish in leading law journals and collaborate with top legal
                                    organizations worldwide.
                                </p>

                                <h3 className="text-2xl font-bold mb-4">Research Centers & Institutes</h3>
                                <div className="mb-6">
                                    <h4 className="font-bold text-primary-600">The Human Rights Research Center</h4>
                                    <p className="text-gray-700">
                                        Promotes global dialogue and interdisciplinary research on issues like refugee
                                        protection and social justice.
                                    </p>
                                </div>

                                <h3 className="text-2xl font-bold mb-4">Facilities</h3>
                                <p className="text-gray-700">
                                    Our law library is home to over 50,000 legal texts and resources, providing students
                                    with a wealth of information to support their academic and professional endeavors.
                                </p>
                            </div>

                            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                    alt="Law School Research Facility"
                                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                                    keywords="law library, legal research, academic facility, law school resource center"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Distinguished Faculty</h2>
                        <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-12">
                            Our faculty members are leading legal scholars and practitioners in their fields. They bring
                            a combination of academic excellence and real-world experience to the classroom, ensuring
                            that students are not only learning the law but are also prepared to practice it
                            effectively.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Faculty Member 1 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                                <div className="aspect-w-1 aspect-h-1 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                        alt="Professor"
                                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                        keywords="law professor, legal scholar, constitutional law expert"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">Professor John Smith</h3>
                                    <p className="text-primary-600 font-medium mb-3">Chair of Constitutional Law</p>
                                    <p className="text-gray-600">
                                        Has authored several books on constitutional reforms and is a frequent
                                        consultant for governmental legal advisory boards.
                                    </p>
                                </div>
                            </div>

                            {/* Faculty Member 2 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                                <div className="aspect-w-1 aspect-h-1 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
                                        alt="Professor"
                                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                        keywords="law professor, human rights expert, international law specialist"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">Dr. Sarah Johnson</h3>
                                    <p className="text-primary-600 font-medium mb-3">
                                        Director of the Human Rights Program
                                    </p>
                                    <p className="text-gray-600">
                                        Specializes in international human rights law and has been a legal advisor for
                                        UN missions in several conflict zones.
                                    </p>
                                </div>
                            </div>

                            {/* Faculty Member 3 */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                                <div className="aspect-w-1 aspect-h-1 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                        alt="Professor"
                                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                                        keywords="law professor, corporate law expert, legal practitioner"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">Professor Michael Chen</h3>
                                    <p className="text-primary-600 font-medium mb-3">Corporate Law Specialist</p>
                                    <p className="text-gray-600">
                                        Former partner at a top international law firm with extensive experience in
                                        mergers and acquisitions and corporate governance.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <a
                                href="#"
                                className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors"
                            >
                                Meet All Faculty
                            </a>
                        </div>
                    </div>
                </section>

                {/* Student Life */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Student Life</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Law Societies & Clubs */}
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                    alt="Law Society"
                                    className="w-full h-48 object-cover"
                                    keywords="law society, moot court, student club, legal debate"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">Law Societies & Clubs</h3>
                                    <p className="text-gray-600">
                                        Our Law Society organizes moot courts, debates, and social events, providing
                                        students with opportunities to develop essential advocacy and networking skills.
                                    </p>
                                </div>
                            </div>

                            {/* Legal Internships & Clinics */}
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                    alt="Legal Internship"
                                    className="w-full h-48 object-cover"
                                    keywords="legal internship, law clinic, pro bono work, legal aid"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">Legal Internships & Clinics</h3>
                                    <p className="text-gray-600">
                                        Students are encouraged to participate in legal internships through our strong
                                        partnerships with law firms, NGOs, and governmental agencies. The Legal Aid
                                        Clinic also allows students to offer pro bono legal services to underprivileged
                                        communities.
                                    </p>
                                </div>
                            </div>

                            {/* Events */}
                            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                                <img
                                    src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                    alt="Law Events"
                                    className="w-full h-48 object-cover"
                                    keywords="moot court competition, law school event, legal conference"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3">Events</h3>
                                    <p className="text-gray-600">
                                        The department hosts several annual events, including the prestigious Law Moot
                                        Court Competition, where students compete to argue real cases before judges from
                                        the country's top courts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Admissions Information */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Admissions Information</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Admission Requirements */}
                            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-primary-600 mb-4">
                                    <span className="material-symbols-outlined text-4xl">school</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Admission Requirements</h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li>
                                        <strong>LL.B. Program:</strong> Applicants must have completed their secondary
                                        education with a focus on social studies or humanities. A competitive entrance
                                        exam is required.
                                    </li>
                                    <li>
                                        <strong>LL.M. Program:</strong> Applicants should hold an undergraduate law
                                        degree (LL.B.) and demonstrate a strong academic record.
                                    </li>
                                </ul>
                            </div>

                            {/* Application Process */}
                            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-primary-600 mb-4">
                                    <span className="material-symbols-outlined text-4xl">description</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Application Process</h3>
                                <p className="text-gray-600 mb-4">
                                    Applications can be submitted online via our portal. Applicants must submit academic
                                    transcripts, recommendation letters, and a personal statement. The entrance exam
                                    will be conducted in September.
                                </p>
                                <a
                                    href="#"
                                    className="inline-block px-5 py-2 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors"
                                >
                                    Apply Now
                                </a>
                            </div>

                            {/* Tuition and Financial Aid */}
                            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                                <div className="text-primary-600 mb-4">
                                    <span className="material-symbols-outlined text-4xl">payments</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Tuition and Financial Aid</h3>
                                <p className="text-gray-600 mb-4">
                                    Tuition for the LL.B. program is $20,000 per year. Scholarships are available based
                                    on academic merit, financial need, and diversity factors.
                                </p>
                                <a href="#" className="text-primary-600 hover:text-primary-800 font-semibold">
                                    Financial Aid Options →
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Career Opportunities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">Career Services</h3>
                                <p className="text-gray-700 mb-6">
                                    Our dedicated Career Services office provides counseling, resume reviews, interview
                                    prep, and job search assistance, ensuring that students find meaningful legal
                                    employment after graduation.
                                </p>

                                <h3 className="text-2xl font-bold mb-4">Industry Partnerships</h3>
                                <p className="text-gray-700 mb-6">
                                    We have established partnerships with prestigious law firms, international
                                    organizations, and governmental bodies, ensuring that our students have unparalleled
                                    access to internships and job placements.
                                </p>

                                <div className="flex flex-wrap gap-4 mt-8">
                                    <img
                                        src="https://placehold.co/100x50?text=Law+Firm"
                                        alt="Partner Law Firm"
                                        className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                                        keywords="law firm partner, legal industry collaboration"
                                    />
                                    <img
                                        src="https://placehold.co/100x50?text=Legal+Org"
                                        alt="Partner Organization"
                                        className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                                        keywords="legal organization partner, industry collaboration"
                                    />
                                    <img
                                        src="https://placehold.co/100x50?text=Government"
                                        alt="Government Partner"
                                        className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                                        keywords="government legal department, public sector partnership"
                                    />
                                    <img
                                        src="https://placehold.co/100x50?text=NGO"
                                        alt="NGO Partner"
                                        className="h-12 opacity-70 hover:opacity-100 transition-opacity"
                                        keywords="non-governmental organization, human rights partnership"
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4">Alumni Success Stories</h3>
                                <p className="text-gray-700 mb-6">
                                    Our alumni network includes distinguished legal professionals, from judges and
                                    prosecutors to corporate lawyers and human rights activists.
                                </p>

                                <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-6">
                                    <div className="flex items-start mb-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                                            alt="Alumni"
                                            className="w-12 h-12 rounded-full object-cover mr-4"
                                            keywords="law school alumni, successful lawyer, legal professional"
                                        />
                                        <div>
                                            <h4 className="font-bold">James Wilson</h4>
                                            <p className="text-gray-600 text-sm">
                                                Senior Counsel at Gibson Dunn, Class of 2005
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 italic">
                                        "My education at Harvard Law School provided me with the skills and connections
                                        necessary to build a successful career in international corporate law. The
                                        rigorous curriculum and supportive faculty were instrumental in my professional
                                        development."
                                    </p>
                                </div>

                                <a
                                    href="#"
                                    className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors"
                                >
                                    Explore Alumni Network
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-16 bg-gray-900 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <span className="material-symbols-outlined text-4xl mb-4">location_on</span>
                                <h3 className="text-xl font-bold mb-2">Address</h3>
                                <p>Department of Law, Harvard University, Cambridge, MA 02138, USA</p>
                            </div>

                            <div className="text-center">
                                <span className="material-symbols-outlined text-4xl mb-4">email</span>
                                <h3 className="text-xl font-bold mb-2">Email</h3>
                                <a href="mailto:law@harvard.edu" className="hover:text-primary-300 transition-colors">
                                    law@harvard.edu
                                </a>
                            </div>

                            <div className="text-center">
                                <span className="material-symbols-outlined text-4xl mb-4">call</span>
                                <h3 className="text-xl font-bold mb-2">Phone</h3>
                                <a href="tel:+1234567890" className="hover:text-primary-300 transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </div>

                            <div className="text-center">
                                <span className="material-symbols-outlined text-4xl mb-4">schedule</span>
                                <h3 className="text-xl font-bold mb-2">Office Hours</h3>
                                <p>Monday - Friday: 9AM - 5PM</p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                >
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                >
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                >
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary-600 transition-colors"
                                >
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-950 text-gray-400 py-8"></footer>
                {/* Next: "Add a virtual tour section with interactive campus map" */}
            </div>
        </div>
    )
}

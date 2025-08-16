import React from "react"

export const Medicine = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-white min-h-screen font-sans">
                {/* Header Section */}
                <header className="bg-white shadow-md"></header>

                {/* Banner Section */}
                <section className="relative h-[500px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                        alt="Medical students in laboratory"
                        className="w-full h-full object-cover object-center"
                        keywords="medical students, laboratory, research, medicine department"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/50 flex flex-col justify-center px-8 md:px-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transform transition-transform duration-700 hover:translate-x-2">
                            Department of Medicine
                        </h1>
                        <p className="text-xl md:text-2xl text-white max-w-2xl">
                            Empowering the next generation of healthcare leaders with hands-on experience and advanced
                            medical education.
                        </p>
                        <button className="mt-8 bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300 shadow-lg w-fit flex items-center space-x-2">
                            <span>Explore Our Programs</span>
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </section>

                {/* Department Overview */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">Department Overview</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                The Department of Medicine at University of Medical Excellence provides a world-class
                                education focused on patient-centered care, medical research, and interdisciplinary
                                collaboration. With programs in medicine, nursing, and allied health professions, we
                                prepare students for leadership roles in healthcare settings worldwide.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-500">
                                    <div className="text-primary-500 mb-4">
                                        <span className="material-symbols-outlined text-4xl">school</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Commitment to Excellence in Education</h3>
                                    <p className="text-gray-600">
                                        We strive to provide the highest quality medical education to all our students.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-500">
                                    <div className="text-primary-500 mb-4">
                                        <span className="material-symbols-outlined text-4xl">favorite</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Focus on Patient Care</h3>
                                    <p className="text-gray-600">
                                        We emphasize patient-centered approaches in all our teaching and practice.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-500">
                                    <div className="text-primary-500 mb-4">
                                        <span className="material-symbols-outlined text-4xl">groups</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Interdisciplinary Learning</h3>
                                    <p className="text-gray-600">
                                        We promote collaboration across medicine and allied health fields.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary-500">
                                    <div className="text-primary-500 mb-4">
                                        <span className="material-symbols-outlined text-4xl">public</span>
                                    </div>
                                    <h3 className="font-bold text-lg mb-2">Global Health Perspectives</h3>
                                    <p className="text-gray-600">
                                        We prepare our students to address healthcare challenges worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Programs */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Academic Programs</h2>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-6 text-primary-700 border-b-2 border-primary-200 pb-2">
                                Undergraduate Programs
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="text-xl font-bold mb-4">B.Sc. in Nursing</h4>
                                    <p className="text-gray-600 mb-4">
                                        This program equips students with the knowledge and clinical skills required to
                                        excel as nursing professionals in diverse healthcare environments.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                    >
                                        Learn more
                                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </a>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="text-xl font-bold mb-4">MBBS</h4>
                                    <p className="text-gray-600 mb-4">
                                        A comprehensive 5-year program focused on providing foundational knowledge in
                                        clinical and theoretical aspects of medicine.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                    >
                                        Learn more
                                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-6 text-primary-700 border-b-2 border-primary-200 pb-2">
                                Postgraduate Programs
                            </h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="text-xl font-bold mb-4">M.D. in Internal Medicine</h4>
                                    <p className="text-gray-600 mb-4">
                                        A 3-year program that offers specialized training in diagnosing and treating
                                        adult diseases.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                    >
                                        Learn more
                                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </a>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="text-xl font-bold mb-4">M.Sc. in Clinical Research</h4>
                                    <p className="text-gray-600 mb-4">
                                        An advanced degree for those interested in medical research, clinical trials,
                                        and data analysis in healthcare.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                    >
                                        Learn more
                                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-primary-700 border-b-2 border-primary-200 pb-2">
                                Doctoral Programs
                            </h3>
                            <div className="grid grid-cols-1 gap-8">
                                <div className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                                    <h4 className="text-xl font-bold mb-4">Ph.D. in Medical Sciences</h4>
                                    <p className="text-gray-600 mb-4">
                                        A research-based program for those looking to contribute to innovative medical
                                        research in fields like immunology, genetics, or public health.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-primary-600 hover:text-primary-800 font-medium flex items-center"
                                    >
                                        Learn more
                                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research and Facilities */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Research and Facilities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-primary-700">Research Areas</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            science
                                        </span>
                                        <p className="text-gray-600">
                                            Our department's research spans key areas such as cancer biology, neurology,
                                            public health, and global healthcare initiatives.
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            medication
                                        </span>
                                        <p className="text-gray-600">
                                            We collaborate closely with hospitals and healthcare facilities to conduct
                                            clinical trials and contribute to life-saving discoveries.
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            biotech
                                        </span>
                                        <p className="text-gray-600">
                                            Our faculty leads cutting-edge research in genomics and personalized
                                            medicine applications.
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <img
                                src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                alt="Medical research laboratory"
                                className="rounded-lg shadow-md w-full h-80 object-cover hover:shadow-xl transition-shadow duration-300"
                                keywords="medical research, laboratory, equipment, science"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <img
                                src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                alt="Modern medical facility"
                                className="rounded-lg shadow-md w-full h-80 object-cover hover:shadow-xl transition-shadow duration-300 order-2 md:order-1"
                                keywords="medical facility, hospital, healthcare, equipment"
                            />

                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold mb-6 text-primary-700">Laboratories and Centers</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            landscape
                                        </span>
                                        <p className="text-gray-600">
                                            Our Clinical Research Center houses state-of-the-art equipment for
                                            conducting experiments in drug development and patient care techniques.
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            health_and_safety
                                        </span>
                                        <p className="text-gray-600">
                                            The Public Health Lab focuses on epidemiology, and our Immunology Lab is
                                            dedicated to advancing vaccine research.
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            landscape
                                        </span>
                                        <p className="text-gray-600">
                                            Our Neuroscience Center explores brain function and develops treatments for
                                            neurological disorders.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Distinguished Faculty</h2>
                        <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
                            Our faculty consists of internationally recognized doctors, researchers, and medical
                            practitioners, many of whom have published extensively in top medical journals.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <img
                                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt="Dr. Sarah Johnson"
                                    className="w-full h-64 object-cover object-center"
                                    keywords="doctor, professor, medical faculty, physician"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
                                    <p className="text-primary-600 font-medium mb-4">Professor of Internal Medicine</p>
                                    <p className="text-gray-600 mb-4">
                                        Specializes in advanced diagnostic methods for chronic diseases such as diabetes
                                        and hypertension.
                                    </p>
                                    <p className="text-gray-700 font-medium">Notable Achievements:</p>
                                    <p className="text-gray-600">
                                        Authored over 50 peer-reviewed papers and secured multiple NIH research grants.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <img
                                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                                    alt="Dr. Michael Chen"
                                    className="w-full h-64 object-cover object-center"
                                    keywords="doctor, professor, medical faculty, physician"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. Michael Chen</h3>
                                    <p className="text-primary-600 font-medium mb-4">Associate Professor of Surgery</p>
                                    <p className="text-gray-600 mb-4">
                                        Leading researcher in minimally invasive surgical techniques and robotic surgery
                                        innovations.
                                    </p>
                                    <p className="text-gray-700 font-medium">Notable Achievements:</p>
                                    <p className="text-gray-600">
                                        Pioneer in laparoscopic procedures with 3 patents for surgical instruments.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                <img
                                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
                                    alt="Dr. Elena Rodriguez"
                                    className="w-full h-64 object-cover object-center"
                                    keywords="doctor, professor, medical faculty, physician"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. Elena Rodriguez</h3>
                                    <p className="text-primary-600 font-medium mb-4">Professor of Immunology</p>
                                    <p className="text-gray-600 mb-4">
                                        Conducts groundbreaking research in immunotherapy and vaccine development for
                                        infectious diseases.
                                    </p>
                                    <p className="text-gray-700 font-medium">Notable Achievements:</p>
                                    <p className="text-gray-600">
                                        Led an international research team that developed a novel approach to targeting
                                        autoimmune disorders.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 flex items-center mx-auto">
                                <span>View All Faculty Members</span>
                                <span className="material-symbols-outlined ml-2">groups</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Student Life */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Student Life</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="text-primary-600 mb-4">
                                    <span className="material-symbols-outlined text-4xl">diversity_3</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Student Organizations</h3>
                                <p className="text-gray-600 mb-4">
                                    The Medical Student Association organizes workshops, medical conferences, and
                                    volunteering programs to enhance student engagement.
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                                >
                                    Join an organization
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="text-primary-600 mb-4">
                                    <span className="material-symbols-outlined text-4xl">medical_services</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Clinical Exposure</h3>
                                <p className="text-gray-600 mb-4">
                                    Medical students have access to our university hospital and partner clinics for
                                    hands-on patient care experience, where they work directly with healthcare
                                    professionals.
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                                >
                                    Explore clinical opportunities
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="text-primary-600 mb-4">
                                    <span className="material-symbols-outlined text-4xl">public</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">Global Health Initiatives</h3>
                                <p className="text-gray-600 mb-4">
                                    Our students actively participate in global health missions, working with
                                    underprivileged communities worldwide to improve access to healthcare.
                                </p>
                                <a
                                    href="#"
                                    className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
                                >
                                    Discover global programs
                                    <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-16 bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <img
                                    src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                                    alt="Students in campus"
                                    className="w-full h-full object-cover object-center max-h-96 md:max-h-full"
                                    keywords="medical students, campus life, university, education"
                                />
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-4">Life on Campus</h3>
                                    <p className="text-gray-600 mb-6">
                                        Beyond academics, our campus offers a vibrant environment for students to grow
                                        personally and professionally. With state-of-the-art facilities, recreation
                                        areas, and a variety of extracurricular activities, students can balance their
                                        rigorous medical studies with fulfilling social experiences.
                                    </p>
                                    <p className="text-gray-600 mb-6">
                                        Our campus community fosters collaboration, wellness, and professional
                                        development through various events, workshops, and social gatherings throughout
                                        the academic year.
                                    </p>
                                    <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300">
                                        Take a Virtual Tour
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Admissions Information */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Admissions Information</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary-600 mr-4">
                                        assignment
                                    </span>
                                    <h3 className="text-xl font-bold">Admission Requirements</h3>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-bold text-lg mb-2">Undergraduate</h4>
                                    <p className="text-gray-600 mb-4">
                                        To apply for the MBBS program, students must have completed secondary school
                                        with a focus on biology, chemistry, and physics.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-bold text-lg mb-2">Postgraduate</h4>
                                    <p className="text-gray-600">
                                        Applicants to the M.D. program must have completed their undergraduate medical
                                        degree and have clinical experience.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary-600 mr-4">
                                        description
                                    </span>
                                    <h3 className="text-xl font-bold">Application Process</h3>
                                </div>

                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            check_circle
                                        </span>
                                        <p className="text-gray-600">Complete the online application form</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            check_circle
                                        </span>
                                        <p className="text-gray-600">Submit high school or undergraduate transcripts</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            check_circle
                                        </span>
                                        <p className="text-gray-600">Prepare for and attend a personal interview</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            check_circle
                                        </span>
                                        <p className="text-gray-600">Submit letters of recommendation</p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                            check_circle
                                        </span>
                                        <p className="text-gray-600">Complete any required entrance examinations</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary-600 mr-4">
                                        payments
                                    </span>
                                    <h3 className="text-xl font-bold">Tuition Fees</h3>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">MBBS Program</h4>
                                        <p className="text-gray-600">
                                            Tuition fees for the undergraduate MBBS program are $20,000 annually, with
                                            scholarships available based on merit and financial need.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Postgraduate Programs</h4>
                                        <p className="text-gray-600">
                                            M.D. programs range from $22,000 to $28,000 annually depending on
                                            specialization.
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg mb-2">Financial Aid</h4>
                                        <p className="text-gray-600">
                                            Various scholarships, grants, and loan programs are available to qualified
                                            students.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                href="#"
                                className="inline-block px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300 shadow-md"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Career Opportunities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <div className="text-primary-600 mb-4">
                                    <span className="material-symbols-outlined text-4xl"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

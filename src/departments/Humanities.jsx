import React from "react"

export const Humanities = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-white min-h-screen font-sans">
                {/* Header Section */}
                <header
                    className="relative bg-cover bg-center h-64 md:h-80"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex justify-between items-center py-4">
                            <div className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1738464024478-2a60ac914513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3NTQ5OTM2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="University Logo"
                                    className="h-12 w-auto mr-3 transition-transform duration-300 hover:scale-105"
                                    keywords="university logo, education logo, academic institution"
                                />
                                <span className="text-white text-xl font-semibold">Westbridge University</span>
                            </div>

                            <nav className="hidden md:block"></nav>

                            <button className="md:hidden text-white">
                                <span className="material-symbols-outlined">menu</span>
                            </button>
                        </div>

                        <div className="mt-16 md:mt-20 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                                Department of Humanities
                            </h1>
                            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                        </div>
                    </div>
                </header>

                {/* Banner Section */}
                <section className="bg-neutral-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <img
                                    src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="Books in library representing humanities studies"
                                    className="rounded-lg shadow-xl transition-transform duration-500 hover:scale-[1.02]"
                                    keywords="humanities, books, library, academia, philosophy, literature"
                                />
                            </div>
                            <div className="md:w-1/2 md:pl-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-800">
                                    Department of Humanities
                                </h2>
                                <p className="text-lg text-neutral-600 mb-6">
                                    Explore literature, philosophy, history, and languages with our distinguished
                                    humanities faculty.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="#programs"
                                        className="px-6 py-3 bg-primary-600 text-white rounded-md shadow-md hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        View Programs
                                    </a>
                                    <a
                                        href="#contact"
                                        className="px-6 py-3 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Department Overview */}
                <section className="py-16 bg-white" id="overview">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold mb-6">About Our Department</h2>
                            <div className="w-16 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                The Department of Humanities at Westbridge University offers a comprehensive approach to
                                the study of literature, philosophy, history, and languages. We believe in fostering
                                intellectual curiosity and critical thinking while providing students with the tools to
                                understand and engage with the world through humanistic perspectives. Our
                                interdisciplinary curriculum combines traditional scholarship with innovative approaches
                                to address contemporary challenges.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Academic Programs */}
                <section className="py-16 bg-neutral-50" id="programs">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Academic Programs</h2>

                        <div className="mb-16">
                            <h3 className="text-2xl font-semibold mb-6 flex items-center">
                                <span className="material-symbols-outlined text-primary-500 mr-2">school</span>
                                Undergraduate Programs
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        title: "B.A. in Literature",
                                        description:
                                            "A four-year program focusing on the exploration of literary genres, critical theory, and cultural studies.",
                                        icon: "menu_book"
                                    },
                                    {
                                        title: "B.A. in Philosophy",
                                        description:
                                            "A comprehensive study of Western and Eastern philosophy, ethics, logic, and the history of philosophical thought.",
                                        icon: "psychology"
                                    },
                                    {
                                        title: "B.A. in History",
                                        description:
                                            "A program that offers deep insights into world history, historical methods, and the study of social and cultural change.",
                                        icon: "history_edu"
                                    },
                                    {
                                        title: "B.A. in Languages",
                                        description:
                                            "This program offers a study of ancient and modern languages, linguistics, and the relationship between language and culture.",
                                        icon: "translate"
                                    }
                                ].map((program, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                            <span className="material-symbols-outlined text-primary-600">
                                                landscape
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-semibold mb-2">{program.title}</h4>
                                        <p className="text-neutral-600">{program.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mb-16">
                            <h3 className="text-2xl font-semibold mb-6 flex items-center">
                                <span className="material-symbols-outlined text-primary-500 mr-2">
                                    workspace_premium
                                </span>
                                Postgraduate Programs
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        title: "M.A. in Comparative Literature",
                                        description:
                                            "A graduate program that examines literature from different cultures and languages through a comparative approach.",
                                        icon: "auto_stories"
                                    },
                                    {
                                        title: "M.A. in Philosophy",
                                        description:
                                            "A two-year program that delves deeper into complex philosophical questions, ethics, and theoretical debates.",
                                        icon: "psychology_alt"
                                    }
                                ].map((program, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                                    >
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                            <span className="material-symbols-outlined text-primary-600">
                                                landscape
                                            </span>
                                        </div>
                                        <h4 className="text-xl font-semibold mb-2">{program.title}</h4>
                                        <p className="text-neutral-600">{program.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-6 flex items-center">
                                <span className="material-symbols-outlined text-primary-500 mr-2">military_tech</span>
                                Doctoral Programs
                            </h3>

                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 max-w-2xl mx-auto">
                                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600">landscape</span>
                                </div>
                                <h4 className="text-xl font-semibold mb-2">Ph.D. in Humanities</h4>
                                <p className="text-neutral-600">
                                    A research-focused program that allows students to specialize in an area of the
                                    Humanities, with opportunities to engage in significant research projects and
                                    contribute to scholarly debates.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research and Facilities */}
                <section className="py-16 bg-white" id="research">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Research & Facilities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-neutral-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-2xl">search</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Research Focus</h3>
                                <p className="text-neutral-600">
                                    Our department's research focuses on comparative literature, cultural history,
                                    philosophy of mind, and the evolution of language and identity. We encourage
                                    interdisciplinary approaches that blend these areas to tackle global humanistic
                                    issues.
                                </p>
                            </div>

                            <div className="bg-neutral-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-2xl">hub</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Research Centers</h3>
                                <p className="text-neutral-600">
                                    The Center for Cultural Studies explores how literature and philosophy shape
                                    societal values and norms. The History of Ideas Project allows students and faculty
                                    to collaborate on examining intellectual movements over time.
                                </p>
                            </div>

                            <div className="bg-neutral-50 rounded-lg p-8 hover:shadow-md transition-shadow duration-300">
                                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-2xl">
                                        menu_book
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Library & Archives</h3>
                                <p className="text-neutral-600">
                                    The Humanities department has exclusive access to a vast collection of rare books,
                                    manuscripts, and historical documents, allowing students to engage directly with
                                    primary sources from various eras.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section className="py-16 bg-neutral-50" id="faculty">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Our Distinguished Faculty</h2>
                            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                                Our faculty is composed of leading scholars in literature, philosophy, history, and
                                languages, many of whom have published groundbreaking works in their respective fields.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Dr. Sarah Williams",
                                    title: "Professor of Philosophy",
                                    description:
                                        "Specializing in ethics and the philosophy of mind. Dr. Williams has authored several influential books on existentialism and is a frequent contributor to international conferences.",
                                    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                },
                                {
                                    name: "Dr. Michael Chen",
                                    title: "Professor of History",
                                    description:
                                        "An expert in ancient civilizations, Dr. Chen has led various archaeological excavations and published extensive research on the Greek and Roman eras.",
                                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                },
                                {
                                    name: "Dr. Emily Rodriguez",
                                    title: "Professor of Literature",
                                    description:
                                        "A specialist in comparative literature with a focus on Latin American authors. Dr. Rodriguez has received multiple awards for her translations and critical analyses.",
                                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                }
                            ].map((faculty, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            keywords={`${faculty.name}, ${faculty.title}, humanities professor, faculty`}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-1">{faculty.name}</h3>
                                        <p className="text-primary-600 font-medium mb-3">{faculty.title}</p>
                                        <p className="text-neutral-600">{faculty.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <a
                                href="#"
                                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                            >
                                <span>View All Faculty Members</span>
                                <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Student Life */}
                <section className="py-16 bg-white" id="student-life">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Student Life</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="relative group overflow-hidden rounded-lg shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="Students in a humanities club meeting"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    keywords="student organization, humanities club, student group, university club"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Student Organizations</h3>
                                    <p className="text-white text-sm">
                                        The Humanities Society organizes book discussions, philosophy debate nights, and
                                        cultural events that engage students with the wider community.
                                    </p>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-lg shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1614793319738-bde496bbe85e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxndWVzdCUyMGxlY3R1cmV8ZW58MHx8fHwxNzU0OTkzNjE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Guest lecture in the humanities department"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    keywords="guest lecture, academic event, speaker, humanities lecture"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">Guest Lectures & Events</h3>
                                    <p className="text-white text-sm">
                                        The department regularly hosts guest speakers, including award-winning authors,
                                        philosophers, and historians, who share their insights on a wide range of
                                        topics.
                                    </p>
                                </div>
                            </div>

                            <div className="relative group overflow-hidden rounded-lg shadow-md">
                                <img
                                    src="https://images.unsplash.com/photo-1519677584237-752f8853252e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                    alt="Students on a cultural field trip"
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    keywords="field trip, cultural immersion, study abroad, archaeological dig"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                <div className="absolute bottom-0 left-0 p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        Field Trips & Cultural Immersions
                                    </h3>
                                    <p className="text-white text-sm">
                                        Students in the History program have the opportunity to participate in
                                        archaeological digs or study historical landmarks across Europe and Asia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Admissions Information */}
                <section className="py-16 bg-neutral-50" id="admissions">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold text-center mb-12">Admissions Information</h2>

                            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-primary-500 mr-2">checklist</span>
                                    Admission Requirements
                                </h3>
                                <p className="text-neutral-600 mb-4">
                                    For the B.A. in Literature, applicants should have completed secondary school with a
                                    strong background in English, history, or social studies.
                                </p>

                                <h4 className="font-medium text-lg mb-2">Undergraduate Programs</h4>
                                <ul className="list-disc pl-5 mb-4 text-neutral-600">
                                    <li>High school diploma or equivalent</li>
                                    <li>Minimum GPA of 3.0</li>
                                    <li>Personal statement</li>
                                    <li>Two letters of recommendation</li>
                                </ul>

                                <h4 className="font-medium text-lg mb-2">Graduate Programs</h4>
                                <ul className="list-disc pl-5 text-neutral-600">
                                    <li>Bachelor's degree in related field</li>
                                    <li>Minimum GPA of 3.2</li>
                                    <li>Statement of purpose</li>
                                    <li>Three letters of recommendation</li>
                                    <li>Writing sample</li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-primary-500 mr-2">note_add</span>
                                    Application Process
                                </h3>
                                <p className="text-neutral-600 mb-4">
                                    To apply for the undergraduate programs, submit your application through our online
                                    portal, including your high school transcripts, personal statement, and letters of
                                    recommendation.
                                </p>

                                <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
                                    <div className="bg-neutral-50 p-4 rounded-lg mb-4 md:mb-0 md:w-1/3 flex flex-col items-center text-center">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                                            <span className="material-symbols-outlined text-primary-600">
                                                description
                                            </span>
                                        </div>
                                        <h4 className="font-medium mb-1">Step 1</h4>
                                        <p className="text-sm text-neutral-600">Complete online application form</p>
                                    </div>

                                    <div className="bg-neutral-50 p-4 rounded-lg mb-4 md:mb-0 md:w-1/3 flex flex-col items-center text-center">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                                            <span className="material-symbols-outlined text-primary-600">
                                                upload_file
                                            </span>
                                        </div>
                                        <h4 className="font-medium mb-1">Step 2</h4>
                                        <p className="text-sm text-neutral-600">Submit required documents</p>
                                    </div>

                                    <div className="bg-neutral-50 p-4 rounded-lg md:w-1/3 flex flex-col items-center text-center">
                                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                                            <span className="material-symbols-outlined text-primary-600">schedule</span>
                                        </div>
                                        <h4 className="font-medium mb-1">Step 3</h4>
                                        <p className="text-sm text-neutral-600">Interview (if required)</p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <a
                                        href="#"
                                        className="inline-block px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-300"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-primary-500 mr-2">payments</span>
                                    Tuition Fees & Scholarships
                                </h3>
                                <p className="text-neutral-600 mb-6">
                                    The tuition fee for the undergraduate programs is $14,000 annually. We offer
                                    merit-based scholarships and financial aid for qualifying students.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border border-neutral-200 rounded-lg p-4">
                                        <h4 className="font-medium mb-2">Merit Scholarships</h4>
                                        <p className="text-sm text-neutral-600">
                                            Up to 50% tuition reduction based on academic excellence
                                        </p>
                                    </div>

                                    <div className="border border-neutral-200 rounded-lg p-4">
                                        <h4 className="font-medium mb-2">Need-Based Financial Aid</h4>
                                        <p className="text-sm text-neutral-600">
                                            Available based on family income and financial circumstances
                                        </p>
                                    </div>

                                    <div className="border border-neutral-200 rounded-lg p-4">
                                        <h4 className="font-medium mb-2">Work-Study Programs</h4>
                                        <p className="text-sm text-neutral-600">
                                            Opportunities to work on campus while studying
                                        </p>
                                    </div>

                                    <div className="border border-neutral-200 rounded-lg p-4">
                                        <h4 className="font-medium mb-2">Research Grants</h4>
                                        <p className="text-sm text-neutral-600">
                                            Available for graduate students pursuing original research
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="py-16 bg-white" id="careers">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Career Opportunities</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Career Support</h3>
                                <p className="text-neutral-600 mb-4">
                                    Our Career Services team offers workshops, one-on-one counseling, and networking
                                    opportunities to help students pursue careers in education, publishing, research,
                                    and more.
                                </p>

                                <h4 className="font-medium mb-2">Common Career Paths</h4>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {[
                                        "Education & Academia",
                                        "Publishing & Editing",
                                        "Museums & Cultural Institutions",
                                        "Government & Public Policy",
                                        "Media & Journalism",
                                        "Law & Legal Services",
                                        "Non-profit Organizations",
                                        "Research & Think Tanks"
                                    ].map((career, index) => (
                                        <li key={index} className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2 text-sm">
                                                check_circle
                                            </span>
                                            <span className="text-neutral-600">{career}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4">Alumni Success Stories</h3>
                                <p className="text-neutral-600 mb-4">
                                    Our alumni have gone on to work in leading cultural institutions, publishing houses,
                                    and universities worldwide.
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-neutral-50 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <img
                                                src="https://images.unsplash.com/photo-1601397922721-4326ae07bbc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhbHVtbml8ZW58MHx8fHwxNzU0OTkyODMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                                alt="Alumni"
                                                className="w-10 h-10 rounded-full mr-3 border-2 border-primary-100"
                                                keywords="alumni, graduate, success story"
                                            />
                                            <div>
                                                <h4 className="font-medium">Dr. Lisa Thompson</h4>
                                                <p className="text-sm text-neutral-500">Class of 2010</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                            Currently a professor of Comparative Literature at Oxford University and
                                            published author of award-winning books on literary theory.
                                        </p>
                                    </div>

                                    <div className="bg-neutral-50 p-4 rounded-lg">
                                        <div className="flex items-center mb-2">
                                            <img
                                                src="https://images.unsplash.com/photo-1692776691970-39dc4edfd870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxhbHVtbml8ZW58MHx8fHwxNzU0OTkyODMzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                                alt="Alumni"
                                                className="w-10 h-10 rounded-full mr-3 border-2 border-primary-100"
                                                keywords="alumni, graduate, success story"
                                            />
                                            <div>
                                                <h4 className="font-medium">James Wilson</h4>
                                                <p className="text-sm text-neutral-500">Class of 2015</p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-neutral-600">
                                            Editor-in-chief at a major publishing house specializing in historical
                                            non-fiction and cultural studies.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <a
                                href="#"
                                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                            >
                                <span>Read More Alumni Stories</span>
                                <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </section>

                {/* Contact Information */}
                <section className="py-16 bg-neutral-800 text-white" id="contact">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            <div className="bg-neutral-700 p-6 rounded-lg text-center hover:bg-neutral-600 transition-colors duration-300">
                                <div className="w-12 h-12 bg-primary-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-primary-300">location_on</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Address</h3>
                                <p className="text-neutral-300">
                                    Department of Humanities
                                    <br />
                                    Westbridge University
                                    <br />
                                    123 Academic Avenue
                                    <br />
                                    Cambridge, MA 02138
                                </p>
                            </div>

                            <div className="bg-neutral-700 p-6 rounded-lg text-center hover:bg-neutral-600 transition-colors duration-300">
                                <div className="w-12 h-12 bg-primary-500 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="material-symbols-outlined text-primary-300">email</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Email</h3>
                                <p className="text-neutral-300 mb-1">
                                    General Inquiries:
                                    <br />
                                    humanities@westbridge.edu
                                </p>
                                <p className="text-neutral-300">
                                    Admissions:
                                    <br />
                                    admissions@westbridge.edu
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

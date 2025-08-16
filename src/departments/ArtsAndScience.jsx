import React from "react"

export const ArtsAndScience = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-white min-h-screen">
                {/* Hero Section */}
                <div className="relative h-96 bg-gradient-to-r from-blue-900 to-indigo-800 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
                    <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                                Faculty of Arts & Sciences
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-white font-light mb-6 drop-shadow-md">
                                [University Name]
                            </h2>
                            <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
                                An academic home for curious minds and critical thinkers exploring the world's most
                                pressing questions.
                            </p>
                            <button className="bg-white text-indigo-800 hover:bg-indigo-100 transition-colors duration-300 font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Explore Our Programs
                            </button>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent"></div>
                </div>

                {/* Welcome Section */}
                <section className="py-16 container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                            Welcome to the Faculty of Arts & Sciences
                        </h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg leading-relaxed mb-6">
                            At [University Name], we believe that the arts and sciences are the foundation of human
                            understanding. We cultivate an environment where rigorous scholarship meets creativity and
                            social responsibility, preparing our students to make meaningful contributions to society.
                        </p>
                        <p className="text-lg leading-relaxed">
                            With a diverse array of disciplines across the humanities, social sciences, and natural
                            sciences, our students are empowered to explore the world's most pressing questions, both
                            past and present, through a multi-faceted lens.
                        </p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-1">
                                <div className="text-5xl font-bold text-primary-600 mb-2">28</div>
                                <div className="text-xl font-semibold">Academic Departments</div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-1">
                                <div className="text-5xl font-bold text-primary-600 mb-2">75+</div>
                                <div className="text-xl font-semibold">Programs Offered</div>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center transform hover:-translate-y-1">
                                <div className="text-5xl font-bold text-primary-600 mb-2">350+</div>
                                <div className="text-xl font-semibold">Expert Faculty Members</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Academic Focus Areas */}
                <section className="py-16 container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Academic Focus Areas</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Humanities */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 bg-indigo-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-8xl text-indigo-500">menu_book</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4 text-indigo-800">Humanities</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-indigo-600">
                                            arrow_right
                                        </span>
                                        Literature and Philosophy
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-indigo-600">
                                            arrow_right
                                        </span>
                                        History and Art History
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-indigo-600">
                                            arrow_right
                                        </span>
                                        Linguistics and Languages
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-indigo-600">
                                            arrow_right
                                        </span>
                                        Religious Studies
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-indigo-600">
                                            arrow_right
                                        </span>
                                        Cultural and Gender Studies
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Sciences */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 bg-blue-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-8xl text-blue-500">groups</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4 text-blue-800">Social Sciences</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-blue-600">
                                            arrow_right
                                        </span>
                                        Psychology and Sociology
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-blue-600">
                                            arrow_right
                                        </span>
                                        Economics and Political Science
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-blue-600">
                                            arrow_right
                                        </span>
                                        Anthropology and Archaeology
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-blue-600">
                                            arrow_right
                                        </span>
                                        Geography and International Relations
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-blue-600">
                                            arrow_right
                                        </span>
                                        Communication and Media Studies
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Natural Sciences */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <div className="h-48 bg-green-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-8xl text-green-500">science</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4 text-green-800">Natural Sciences</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-green-600">
                                            arrow_right
                                        </span>
                                        Biology and Environmental Science
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-green-600">
                                            arrow_right
                                        </span>
                                        Physics and Astronomy
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-green-600">
                                            arrow_right
                                        </span>
                                        Chemistry and Biochemistry
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-green-600">
                                            arrow_right
                                        </span>
                                        Mathematics and Statistics
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-2 text-green-600">
                                            arrow_right
                                        </span>
                                        Earth and Planetary Sciences
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Programs Offered */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Programs Offered</h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Undergraduate Programs */}
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <div className="flex items-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary-600 mr-4">
                                        school
                                    </span>
                                    <h3 className="text-2xl font-bold">Undergraduate Programs</h3>
                                </div>
                                <p className="mb-6">
                                    Our Bachelor of Arts (B.A.) and Bachelor of Science (B.S.) programs provide a
                                    rigorous academic foundation in a broad range of disciplines. Choose from multiple
                                    majors and minors to create personalized academic pathways.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        B.A. in English Literature
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        B.A. in Psychology
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        B.S. in Physics
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        B.A. in Political Science
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        B.S. in Biology
                                    </div>
                                </div>
                            </div>

                            {/* Graduate Programs */}
                            <div className="bg-white p-8 rounded-xl shadow-md">
                                <div className="flex items-center mb-6">
                                    <span className="material-symbols-outlined text-4xl text-primary-600 mr-4">
                                        psychology
                                    </span>
                                    <h3 className="text-2xl font-bold">Graduate Programs</h3>
                                </div>
                                <p className="mb-6">
                                    For those looking to advance their academic careers, our Master and Doctoral
                                    programs offer in-depth study of specialized areas. Engage in independent research
                                    and contribute to new knowledge in your field.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        M.A. in Sociology
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        M.S. in Chemistry
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        M.A. in History
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        Ph.D. in Political Science
                                    </div>
                                    <div className="flex items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            check_circle
                                        </span>
                                        Ph.D. in Environmental Science
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research Excellence */}
                <section className="py-16 container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                        Research Excellence & Critical Thinking
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="order-2 lg:order-1">
                            <p className="text-lg leading-relaxed mb-6">
                                We emphasize critical thinking, problem-solving, and interdisciplinary research. Our
                                faculty members are leaders in their fields, publishing groundbreaking research and
                                guiding students through a transformative learning experience.
                            </p>
                            <p className="text-lg leading-relaxed mb-8">
                                Whether your interests lie in studying ancient civilizations, exploring cutting-edge
                                environmental science, or researching the latest advancements in neurobiology, our
                                research community is at the forefront of intellectual discovery.
                            </p>

                            <h3 className="text-xl font-bold mb-4">Research Institutes and Centers:</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-600 mr-2 mt-1">
                                        analytics
                                    </span>
                                    <span>Center for Social Research</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-600 mr-2 mt-1">
                                        analytics
                                    </span>
                                    <span>Institute of Advanced Studies in the Humanities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-600 mr-2 mt-1">
                                        analytics
                                    </span>
                                    <span>Center for Environmental Science and Sustainability</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2 mb-8 lg:mb-0">
                            <img
                                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                alt="Students engaged in research"
                                className="rounded-xl shadow-lg w-full h-auto max-h-[500px] object-cover"
                                keywords="university research, academic laboratory, student researchers, science lab"
                            />
                        </div>
                    </div>
                </section>

                {/* Faculty */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                            Our Faculty: 350+ Experts Leading the Way
                        </h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-3">diversity_3</span>
                                    Diverse Expertise
                                </h3>
                                <p className="leading-relaxed">
                                    Our faculty members come from a variety of fields, providing a global perspective
                                    and a multidisciplinary approach to education. Many are internationally recognized
                                    experts with years of experience in academia, industry, and research.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-3">hub</span>
                                    Interdisciplinary Collaboration
                                </h3>
                                <p className="leading-relaxed">
                                    We encourage interdisciplinary collaboration across departments, allowing students
                                    to approach problems from multiple perspectives. Whether it's linking economics with
                                    political science or combining biology with environmental studies, our faculty's
                                    broad expertise fosters innovation and creative solutions.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <p className="text-lg max-w-3xl mx-auto">
                                Our professors are more than just teachers—they are mentors who guide students through
                                the complexities of their academic pursuits, inspire critical thought, and support their
                                intellectual growth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Student Experience */}
                <section className="py-16 container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Student Experience</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                                    alt="Hands-on learning experience"
                                    className="w-full h-full object-cover"
                                    keywords="hands-on learning, university lab, student research, practical education"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-2">
                                        psychology_alt
                                    </span>
                                    Hands-On Learning
                                </h3>
                                <p>
                                    Our programs emphasize real-world applications through internships, research
                                    projects, and community engagement. Connect theory with practice through fieldwork
                                    opportunities and research assistantships.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                                    alt="Student organizations and activities"
                                    className="w-full h-full object-cover"
                                    keywords="student organizations, university clubs, campus activities, student life"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-2">groups</span>
                                    Student Organizations
                                </h3>
                                <p>
                                    With a wide range of student organizations, clubs, and societies, you can join
                                    like-minded peers to share ideas, pursue shared interests, and develop leadership
                                    skills.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFicm9hZHxlbnwwfHx8fDE3NTUwMTc5NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Global education opportunities"
                                    className="w-full h-full object-cover"
                                    keywords="study abroad, international education, global learning, exchange program"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-2">public</span>
                                    Global Opportunities
                                </h3>
                                <p>
                                    Our international exchange programs and collaborative projects provide you with the
                                    opportunity to study abroad and gain global perspectives on various fields of study.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="py-16 bg-gradient-to-br from-primary-700 to-primary-900 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                            Why Choose the Faculty of Arts & Sciences?
                        </h2>
                        <div className="w-20 h-1 bg-white mx-auto mb-12 rounded-full"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300">
                                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl">workspace_premium</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
                                <p>
                                    World-class faculty and rigorous programs that provide a strong foundation for your
                                    academic and professional career.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300">
                                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl">hub</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Interdisciplinary Approach</h3>
                                <p>
                                    A commitment to integrating multiple fields of study, fostering innovative solutions
                                    to global challenges.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300">
                                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl">diversity_3</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Diverse Community</h3>
                                <p>
                                    A welcoming, intellectually stimulating environment with a diverse student body and
                                    faculty.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300">
                                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl">search</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Research Opportunities</h3>
                                <p>Access to cutting-edge research facilities, centers, and collaborative projects.</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300">
                                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl">public</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Global Impact</h3>
                                <p>
                                    Our programs are designed to prepare you for a future in which you can contribute
                                    meaningfully to society.
                                </p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-colors duration-300">
                                <div className="rounded-full bg-white/20 w-16 h-16 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl">school</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Career Preparation</h3>
                                <p>
                                    Comprehensive career services and networking opportunities to help you achieve your
                                    professional goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Admissions */}
                <section className="py-16 container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Admissions and How to Apply</h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto mb-12 rounded-full"></div>

                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
                        <p className="text-lg mb-6">
                            Ready to join the Faculty of Arts & Sciences at [University Name]? The application process
                            is simple and straightforward. We offer undergraduate, graduate, and doctoral admissions
                            with clear guidelines on what to submit and how to apply.
                        </p>

                        <div className="flex justify-center mb-8">
                            <button className="bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-300 font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                Visit Our Admissions Page
                            </button>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                        <p className="mb-6">
                            If you have any questions or need more information about our programs, faculty, or
                            admissions, please don't hesitate to get in touch:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start">
                                <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">mail</span>
                                <div>
                                    <h4 className="font-semibold">Faculty of Arts & Sciences Admissions:</h4>
                                    <a
                                        href="mailto:admissions@universityname.edu"
                                        className="text-primary-600 hover:text-primary-800 transition-colors"
                                    >
                                        admissions@universityname.edu
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">call</span>
                                <div>
                                    <h4 className="font-semibold">Phone:</h4>
                                    <a
                                        href="tel:123-456-7890"
                                        className="text-primary-600 hover:text-primary-800 transition-colors"
                                    >
                                        123-456-7890
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start md:col-span-2">
                                <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                    location_on
                                </span>
                                <div>
                                    <h4 className="font-semibold">Office Location:</h4>
                                    <address className="not-italic">
                                        [Building Name], [University Name], [University Address]
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div></div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

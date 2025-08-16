import React from "react"

export const Engineering = () => {
    return (
        <div id="webcrumbs">
            <div className="font-sans">
                {/* Header Section */}
               
                {/* Banner Section */}
                <section className="relative h-[500px] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Engineering disciplines"
                        className="absolute w-full h-full object-cover"
                        keywords="engineering, technology, innovation, laboratory, computer engineering"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
                    <div className="relative container mx-auto px-6 h-full flex flex-col justify-center text-white">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl">
                            Department of Engineering
                        </h1>
                        <p className="text-xl md:text-2xl font-light mb-6 max-w-2xl">
                            Blending Theoretical Knowledge with Practical Application – From Civil to Computer
                            Engineering
                        </p>
                        <p className="max-w-2xl text-lg">
                            Shaping the future with innovation, design, and technology across a variety of engineering
                            disciplines.
                        </p>
                        <button className="mt-8 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors transform hover:scale-105 inline-flex items-center group w-fit">
                            Explore Our Programs
                            <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </section>

                {/* Department Overview */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-3 text-center">Department Overview</h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto mb-10 rounded-full"></div>

                        <div className="max-w-4xl mx-auto text-center">
                            <p className="text-lg mb-8 leading-relaxed">
                                At the University Department of Engineering, we are committed to providing an
                                innovative, high-quality education that blends rigorous theoretical knowledge with
                                practical experience. Our diverse range of engineering programs prepares students for
                                leadership roles in a variety of fields, from infrastructure design in Civil Engineering
                                to cutting-edge technology in Computer Engineering.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="material-symbols-outlined text-5xl text-primary-500 mb-4">
                                        foundation
                                    </span>
                                    <h3 className="font-bold mb-2">Excellence</h3>
                                    <p className="text-sm">Committed to highest standards in education and research</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="material-symbols-outlined text-5xl text-primary-500 mb-4">
                                        psychology
                                    </span>
                                    <h3 className="font-bold mb-2">Innovation</h3>
                                    <p className="text-sm">Pioneering solutions to complex engineering challenges</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="material-symbols-outlined text-5xl text-primary-500 mb-4">
                                        diversity_3
                                    </span>
                                    <h3 className="font-bold mb-2">Collaboration</h3>
                                    <p className="text-sm">Working across disciplines to solve global problems</p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <span className="material-symbols-outlined text-5xl text-primary-500 mb-4">
                                        school
                                    </span>
                                    <h3 className="font-bold mb-2">Leadership</h3>
                                    <p className="text-sm">Developing the next generation of engineering leaders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Engineering Programs */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-3 text-center">Engineering Programs</h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto mb-10 rounded-full"></div>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary-500 pl-4">
                                Undergraduate Programs
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Civil Engineering */}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            alt="Civil Engineering"
                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                            keywords="civil engineering, construction, infrastructure, buildings"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold mb-2">B.Tech in Civil Engineering</h4>
                                        <p className="text-sm mb-4">
                                            Our undergraduate Civil Engineering program combines classroom learning with
                                            practical experience in design, construction, and sustainability.
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                schedule
                                            </span>
                                            <p className="text-sm">Duration: 4 years</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                menu_book
                                            </span>
                                            <p className="text-sm">
                                                Core Subjects: Structural analysis, geotechnical engineering,
                                                transportation engineering
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                work
                                            </span>
                                            <p className="text-sm">
                                                Career Paths: Civil engineer, project manager, structural consultant
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mechanical Engineering */}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            alt="Mechanical Engineering"
                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                            keywords="mechanical engineering, robotics, machinery, automation"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold mb-2">B.Tech in Mechanical Engineering</h4>
                                        <p className="text-sm mb-4">
                                            Mechanical Engineering focuses on the design, analysis, and manufacturing of
                                            mechanical systems.
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                schedule
                                            </span>
                                            <p className="text-sm">Duration: 4 years</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                menu_book
                                            </span>
                                            <p className="text-sm">
                                                Core Subjects: Thermodynamics, material science, fluid mechanics,
                                                robotics
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                work
                                            </span>
                                            <p className="text-sm">
                                                Career Paths: Mechanical engineer, design engineer, manufacturing
                                                consultant
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Electrical Engineering */}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2FsJTIwZW5naW5lZXJpbmd8ZW58MHx8fHwxNzU0OTkyMDg5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="Electrical Engineering"
                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                            keywords="electrical engineering, circuits, power systems, electronics"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold mb-2">B.Tech in Electrical Engineering</h4>
                                        <p className="text-sm mb-4">
                                            Electrical Engineering involves the study of systems that generate,
                                            distribute, and use electrical power.
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                schedule
                                            </span>
                                            <p className="text-sm">Duration: 4 years</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                menu_book
                                            </span>
                                            <p className="text-sm">
                                                Core Subjects: Power systems, control systems, electronics, digital
                                                circuits
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                work
                                            </span>
                                            <p className="text-sm">
                                                Career Paths: Electrical engineer, power systems engineer, network
                                                consultant
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Computer Engineering */}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                            alt="Computer Engineering"
                                            className="w-full h-full object-cover transition-transform hover:scale-105"
                                            keywords="computer engineering, programming, hardware, software"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold mb-2">B.Tech in Computer Engineering</h4>
                                        <p className="text-sm mb-4">
                                            Our Computer Engineering program focuses on both hardware and software,
                                            blending computer science with electrical engineering.
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                schedule
                                            </span>
                                            <p className="text-sm">Duration: 4 years</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                menu_book
                                            </span>
                                            <p className="text-sm">
                                                Core Subjects: Programming languages, computer architecture, data
                                                structures
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                work
                                            </span>
                                            <p className="text-sm">
                                                Career Paths: Software engineer, hardware engineer, system architect
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary-500 pl-4">
                                Postgraduate Programs
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* M.Tech Civil Engineering */}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold mb-2">M.Tech in Civil Engineering</h4>
                                        <p className="text-sm mb-4">
                                            This program offers advanced knowledge in structural engineering,
                                            environmental engineering, and construction management.
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                schedule
                                            </span>
                                            <p className="text-sm">Duration: 2 years</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                category
                                            </span>
                                            <p className="text-sm">
                                                Specializations: Structural engineering, transportation systems
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                work
                                            </span>
                                            <p className="text-sm">
                                                Career Paths: Senior project manager, structural analyst
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* M.Tech Mechanical Engineering */}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold mb-2">M.Tech in Mechanical Engineering</h4>
                                        <p className="text-sm mb-4">
                                            Our master's program delves deeper into thermal systems, robotics, and
                                            materials science.
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                schedule
                                            </span>
                                            <p className="text-sm">Duration: 2 years</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                category
                                            </span>
                                            <p className="text-sm">
                                                Specializations: Robotics, energy systems, computational mechanics
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                work
                                            </span>
                                            <p className="text-sm">
                                                Career Paths: Senior mechanical engineer, R&D specialist
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* M.Tech Electrical Engineering */}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold mb-2">M.Tech in Electrical Engineering</h4>
                                        <p className="text-sm mb-4">
                                            This program emphasizes advanced topics like signal processing,
                                            telecommunications, and renewable energy systems.
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                schedule
                                            </span>
                                            <p className="text-sm">Duration: 2 years</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                category
                                            </span>
                                            <p className="text-sm">
                                                Specializations: Smart grids, power electronics, digital signal
                                                processing
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                work
                                            </span>
                                            <p className="text-sm">
                                                Career Paths: Power systems engineer, telecommunications specialist
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* M.Tech Computer Engineering */}
                                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="p-6">
                                        <h4 className="text-lg font-bold mb-2">M.Tech in Computer Engineering</h4>
                                        <p className="text-sm mb-4">
                                            Our Computer Engineering M.Tech. program combines hardware and software
                                            knowledge, with an emphasis on systems design.
                                        </p>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                schedule
                                            </span>
                                            <p className="text-sm">Duration: 2 years</p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                category
                                            </span>
                                            <p className="text-sm">
                                                Specializations: Machine learning, embedded systems, computer vision
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-500 mr-2">
                                                work
                                            </span>
                                            <p className="text-sm">
                                                Career Paths: Machine learning engineer, embedded systems developer
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 border-l-4 border-primary-500 pl-4">
                                Doctoral Programs
                            </h3>
                            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
                                <h4 className="text-xl font-bold mb-4">Ph.D. in Engineering</h4>
                                <p className="mb-6">
                                    A research-focused program designed for those wishing to pursue cutting-edge
                                    research and contribute to technological advancements in their specific engineering
                                    field.
                                </p>
                                <p className="mb-6">
                                    Ph.D. candidates will engage in interdisciplinary research, with access to
                                    state-of-the-art labs and collaborations with top industry professionals and
                                    government organizations.
                                </p>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                                        <h5 className="font-bold mb-2">Civil Engineering</h5>
                                        <p className="text-sm">
                                            Advanced research in sustainable construction, structural dynamics, and
                                            urban systems.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                                        <h5 className="font-bold mb-2">Mechanical Engineering</h5>
                                        <p className="text-sm">
                                            Research in robotics, energy systems, advanced materials, and computational
                                            mechanics.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                                        <h5 className="font-bold mb-2">Electrical Engineering</h5>
                                        <p className="text-sm">
                                            Focus on power systems, telecommunications, control systems, and signal
                                            processing.
                                        </p>
                                    </div>
                                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
                                        <h5 className="font-bold mb-2">Computer Engineering</h5>
                                        <p className="text-sm">
                                            Research in AI, machine learning, cybersecurity, and advanced computing
                                            systems.
                                        </p>
                                    </div>
                                </div>

                                <button className="mt-8 bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-2 rounded-lg transition-colors inline-flex items-center group">
                                    Learn More About Ph.D. Programs
                                    <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research and Innovation */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-3 text-center">Research and Innovation</h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto mb-10 rounded-full"></div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div>
                                <h3 className="text-2xl font-bold mb-6">Research Focus Areas</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-500 mr-3 mt-1">
                                            architecture
                                        </span>
                                        <div>
                                            <h4 className="font-bold">Civil Engineering</h4>
                                            <p>
                                                Sustainable urban development, smart cities, infrastructure resilience.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-500 mr-3 mt-1">
                                            precision_manufacturing
                                        </span>
                                        <div>
                                            <h4 className="font-bold">Mechanical Engineering</h4>
                                            <p>Robotics, energy conversion systems, manufacturing automation.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-500 mr-3 mt-1">
                                            electric_bolt
                                        </span>
                                        <div>
                                            <h4 className="font-bold">Electrical Engineering</h4>
                                            <p>Smart grids, renewable energy, IoT applications.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-primary-500 mr-3 mt-1">
                                            memory
                                        </span>
                                        <div>
                                            <h4 className="font-bold">Computer Engineering</h4>
                                            <p>AI and machine learning, cybersecurity, embedded systems.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-6">Research Centers</h3>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold">Smart Infrastructure Lab</h4>
                                        <p className="text-sm">
                                            Dedicated to developing sustainable building materials and intelligent
                                            infrastructure.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold">Robotics and Automation Lab</h4>
                                        <p className="text-sm">
                                            Focused on automation systems and robotics innovations for manufacturing and
                                            industry.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold">Power Systems Research Center</h4>
                                        <p className="text-sm">
                                            Research in renewable energy and power systems efficiency.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold">Cybersecurity and Systems Lab</h4>
                                        <p className="text-sm">
                                            Exploring cutting-edge techniques to secure modern networks and computing
                                            systems.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg transition-colors transform hover:scale-105 inline-flex items-center group">
                                Explore Our Research Projects
                                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
                                    arrow_forward
                                </span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Faculty and Leadership */}
                <section className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold mb-3 text-center">Faculty and Leadership</h2>
                        <div className="w-20 h-1 bg-primary-500 mx-auto mb-10 rounded-full"></div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Professor of Civil Engineering"
                                        className="w-full h-full object-cover"
                                        keywords="professor, civil engineering, academic, faculty"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-1">Dr. James Wilson</h3>
                                    <p className="text-primary-600 mb-3">Professor of Civil Engineering</p>
                                    <p className="mb-4">
                                        Specializes in structural materials and construction technology. His work in
                                        sustainable infrastructure has led to innovations in urban planning.
                                    </p>
                                    <div className="flex space-x-3">
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            <i className="fa-brands fa-linkedin-in text-gray-600"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            <i className="fa-brands fa-twitter text-gray-600"></i>
                                        </a>
                                        <a
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-gray-600 text-sm">
                                                mail
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                                <div className="h-64 overflow-hidden"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

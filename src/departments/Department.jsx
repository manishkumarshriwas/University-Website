import React from "react"

export const Department = () => {
    return (
        <div id="webcrumbs">
            <div className="bg-white font-sans">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Department of Engineering</h1>
                            <h2 className="text-2xl md:text-3xl font-light mb-6">University Name</h2>
                            <p className="text-lg md:text-xl leading-relaxed">
                                Welcome to the Department of Engineering at University Name, where cutting-edge research
                                meets real-world application. Our department is committed to shaping the future of
                                technology, innovation, and sustainable development through comprehensive education and
                                hands-on learning experiences.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button className="bg-primary-600 hover:bg-primary-700 transition-all duration-300 text-white font-bold py-3 px-6 rounded-lg transform hover:-translate-y-1">
                                    Apply Now
                                </button>
                                <button className="bg-white text-blue-900 hover:bg-gray-100 transition-all duration-300 font-bold py-3 px-6 rounded-lg transform hover:-translate-y-1">
                                    Explore Programs
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block">
                        {/* Next: "Add engineering-themed illustration or pattern overlay" */}
                    </div>
                </div>

                {/* Introduction */}
                <div className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                                    Excellence in Engineering Education
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    At University Name, we offer a rigorous academic environment, world-class faculty,
                                    and state-of-the-art facilities, enabling students to excel in various engineering
                                    disciplines. Whether you are interested in tackling complex global challenges,
                                    advancing technological frontiers, or leading in industries of tomorrow, our
                                    programs are designed to equip you with the knowledge and skills to succeed.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-8">
                                    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                            <span className="material-symbols-outlined text-primary-600">school</span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">Academic Excellence</h3>
                                        <p className="text-gray-600">Rigorous programs backed by industry standards</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                            <span className="material-symbols-outlined text-primary-600">science</span>
                                        </div>
                                        <h3 className="font-bold text-lg mb-2">Research Focus</h3>
                                        <p className="text-gray-600">Cutting-edge research opportunities</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://images.unsplash.com/photo-1581091013158-5c7184f43b62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMGxhYnxlbnwwfHx8fDE3NTUwMTcwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Engineering students working in lab"
                                    className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                                    keywords="engineering lab, students, technology, university lab"
                                />
                                <div className="absolute -bottom-5 -left-5 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                                    <p className="font-bold">Top-Ranked Engineering Programs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Undergraduate Programs */}
                <div className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Undergraduate Programs</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Our undergraduate programs are designed to provide a robust foundation in engineering
                                principles, along with the flexibility to specialize in one of our diverse fields. With
                                a focus on both theoretical understanding and practical skills, our students are
                                prepared to tackle the challenges of tomorrow's engineering landscape.
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                    Bachelor of Technology (B.Tech)
                                </h3>
                                <div className="flex items-center gap-4 mb-4 text-gray-600">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined mr-1">schedule</span>
                                        <span>Duration: 4 years</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined mr-1">school</span>
                                        <span>Degree: B.Tech</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4">
                                    A comprehensive, research-driven curriculum with practical lab sessions,
                                    internships, and projects.
                                </p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Specializations Offered</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Computer Science Card */}
                            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                                <summary className="p-6 flex justify-between items-center focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mr-4">
                                            computer
                                        </span>
                                        <h4 className="font-bold text-lg text-gray-800">
                                            Computer Science and Engineering
                                        </h4>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-gray-600">
                                    <p className="mb-4">
                                        Focus on software development, systems design, artificial intelligence, and
                                        cybersecurity.
                                    </p>
                                    <h5 className="font-semibold mb-2 text-gray-700">Core Courses:</h5>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Programming</li>
                                        <li>Algorithms</li>
                                        <li>Data Structures</li>
                                        <li>Machine Learning</li>
                                        <li>Computer Networks</li>
                                    </ul>
                                </div>
                            </details>

                            {/* Electrical Engineering Card */}
                            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                                <summary className="p-6 flex justify-between items-center focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mr-4">
                                            electrical_services
                                        </span>
                                        <h4 className="font-bold text-lg text-gray-800">Electrical Engineering</h4>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-gray-600">
                                    <p className="mb-4">
                                        Explore power systems, circuit design, microelectronics, and communication
                                        technologies.
                                    </p>
                                    <h5 className="font-semibold mb-2 text-gray-700">Core Courses:</h5>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Circuit Theory</li>
                                        <li>Digital Electronics</li>
                                        <li>Power Systems</li>
                                        <li>Control Systems</li>
                                    </ul>
                                </div>
                            </details>

                            {/* Mechanical Engineering Card */}
                            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                                <summary className="p-6 flex justify-between items-center focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mr-4">
                                            precision_manufacturing
                                        </span>
                                        <h4 className="font-bold text-lg text-gray-800">Mechanical Engineering</h4>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-gray-600">
                                    <p className="mb-4">
                                        Dive into thermodynamics, material science, robotics, and fluid mechanics.
                                    </p>
                                    <h5 className="font-semibold mb-2 text-gray-700">Core Courses:</h5>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Mechanics of Materials</li>
                                        <li>Thermodynamics</li>
                                        <li>Fluid Mechanics</li>
                                        <li>CAD/CAE</li>
                                    </ul>
                                </div>
                            </details>

                            {/* Civil Engineering Card */}
                            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                                <summary className="p-6 flex justify-between items-center focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mr-4">
                                            apartment
                                        </span>
                                        <h4 className="font-bold text-lg text-gray-800">Civil Engineering</h4>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-gray-600">
                                    <p className="mb-4">
                                        Study infrastructure development, structural analysis, geotechnical engineering,
                                        and environmental systems.
                                    </p>
                                    <h5 className="font-semibold mb-2 text-gray-700">Core Courses:</h5>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Structural Analysis</li>
                                        <li>Concrete Technology</li>
                                        <li>Geotechnical Engineering</li>
                                        <li>Environmental Engineering</li>
                                    </ul>
                                </div>
                            </details>

                            {/* Chemical Engineering Card */}
                            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                                <summary className="p-6 flex justify-between items-center focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mr-4">
                                            science
                                        </span>
                                        <h4 className="font-bold text-lg text-gray-800">Chemical Engineering</h4>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-gray-600">
                                    <p className="mb-4">
                                        A focus on process design, materials science, and sustainable energy solutions.
                                    </p>
                                    <h5 className="font-semibold mb-2 text-gray-700">Core Courses:</h5>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Process Control</li>
                                        <li>Chemical Reaction Engineering</li>
                                        <li>Thermodynamics</li>
                                        <li>Biochemical Engineering</li>
                                    </ul>
                                </div>
                            </details>

                            {/* Aerospace Engineering Card */}
                            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer">
                                <summary className="p-6 flex justify-between items-center focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mr-4">
                                            flight_takeoff
                                        </span>
                                        <h4 className="font-bold text-lg text-gray-800">Aerospace Engineering</h4>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-gray-600">
                                    <p className="mb-4">
                                        Learn about aircraft design, propulsion systems, space exploration, and flight
                                        dynamics.
                                    </p>
                                    <h5 className="font-semibold mb-2 text-gray-700">Core Courses:</h5>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Aerodynamics</li>
                                        <li>Propulsion</li>
                                        <li>Aircraft Structures</li>
                                        <li>Spacecraft Systems</li>
                                    </ul>
                                </div>
                            </details>

                            {/* Biomedical Engineering Card */}
                            <details className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer md:col-span-2 lg:col-span-1">
                                <summary className="p-6 flex justify-between items-center focus:outline-none">
                                    <div className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mr-4">
                                            healing
                                        </span>
                                        <h4 className="font-bold text-lg text-gray-800">Biomedical Engineering</h4>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="px-6 pb-6 pt-2 text-gray-600">
                                    <p className="mb-4">
                                        Bridging engineering with biology to improve healthcare technologies, including
                                        medical devices and bioinformatics.
                                    </p>
                                    <h5 className="font-semibold mb-2 text-gray-700">Core Courses:</h5>
                                    <ul className="list-disc list-inside space-y-1">
                                        <li>Medical Imaging</li>
                                        <li>Biomechanics</li>
                                        <li>Biomaterials</li>
                                        <li>Bioelectronics</li>
                                    </ul>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                {/* Graduate Programs */}
                <div className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Graduate Programs</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Our graduate programs are designed for those looking to deepen their knowledge, conduct
                                high-impact research, and innovate in specialized engineering fields. At University
                                Name, we encourage an interdisciplinary approach to problem-solving, equipping students
                                with the skills needed to tackle some of the world's most complex challenges.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10 mb-16">
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-3xl text-primary-600">
                                            school
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">
                                            Master of Technology (M.Tech)
                                        </h3>
                                        <p className="text-gray-500">Duration: 2 years</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    In-depth specialization in a specific field of engineering with a strong emphasis on
                                    research, innovation, and advanced engineering design.
                                </p>

                                <h4 className="text-lg font-semibold mb-3 text-gray-700">Specializations Offered:</h4>
                                <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            check_circle
                                        </span>
                                        Software Engineering
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            check_circle
                                        </span>
                                        Power Systems
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            check_circle
                                        </span>
                                        Mechanical Systems Design
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            check_circle
                                        </span>
                                        Structural Engineering
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            check_circle
                                        </span>
                                        Chemical Process Engineering
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            check_circle
                                        </span>
                                        Aerospace Systems
                                    </li>
                                    <li className="flex items-center md:col-span-2">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            check_circle
                                        </span>
                                        Biomedical Engineering
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-3xl text-primary-600">
                                            psychology
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">Doctoral Programs (Ph.D.)</h3>
                                        <p className="text-gray-500">Duration: 3-5 years</p>
                                    </div>
                                </div>

                                <p className="text-gray-700 mb-6">
                                    For those aiming to push the boundaries of engineering knowledge, our Ph.D. programs
                                    provide a platform for high-level research in cutting-edge engineering fields.
                                </p>

                                <h4 className="text-lg font-semibold mb-3 text-gray-700">Research Areas Include:</h4>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 mt-1">
                                            smart_toy
                                        </span>
                                        <div>
                                            <span className="font-medium block">
                                                Artificial Intelligence and Machine Learning
                                            </span>
                                            <span className="text-sm">
                                                Research on neural networks, autonomous systems, and intelligent
                                                robotics.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 mt-1">
                                            emoji_objects
                                        </span>
                                        <div>
                                            <span className="font-medium block">Energy Systems and Sustainability</span>
                                            <span className="text-sm">
                                                Explore sustainable energy sources, smart grids, and environmental
                                                impact solutions.
                                            </span>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <span className="material-symbols-outlined text-primary-500 mr-2 mt-1">
                                            construction
                                        </span>
                                        <div>
                                            <span className="font-medium block">
                                                Structural and Materials Engineering
                                            </span>
                                            <span className="text-sm">
                                                Work on advanced materials, nanotechnology, and structural integrity.
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Faculty and Research */}
                <div className="py-16 px-4 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Faculty and Research</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                Our department boasts a diverse group of expert faculty members who are pioneers in
                                their respective fields. They are not only deeply involved in academic teaching but also
                                lead groundbreaking research projects that push the boundaries of engineering.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl text-primary-600">
                                        smart_toy
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">
                                    Center for Artificial Intelligence & Robotics
                                </h3>
                                <p className="text-gray-600">
                                    Cutting-edge research in machine learning, computer vision, and autonomous systems.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl text-primary-600">bolt</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Energy Research Institute</h3>
                                <p className="text-gray-600">
                                    Pioneering solutions in renewable energy, power systems, and energy efficiency.
                                </p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-3xl text-primary-600">biotech</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Biomedical Engineering Lab</h3>
                                <p className="text-gray-600">
                                    Developing innovative healthcare technologies and medical devices.
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?auto=format&fit=crop&q=80"
                                alt="Engineering research lab with students and faculty"
                                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                                keywords="engineering research, laboratory, technology research, university"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8 rounded-lg">
                                <div className="text-white">
                                    <h3 className="text-2xl font-bold mb-2">State-of-the-Art Facilities</h3>
                                    <p className="max-w-2xl">
                                        Our students have access to cutting-edge laboratories and research centers,
                                        where they can engage in hands-on research, internships, and collaborative
                                        projects with industry leaders.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Courses Overview */}
                <div className="py-16 px-4 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-800">Courses Overview</h2>
                            <p className="text-gray-600 max-w-3xl mx-auto">
                                All of our engineering programs come with a well-structured curriculum designed to
                                foster both theoretical learning and practical experience. Students will engage in a
                                variety of courses that equip them with the skills necessary for solving real-world
                                problems.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
                                    Core Engineering Courses
                                </h3>
                                <p className="text-gray-600 mb-4">Applicable to most engineering disciplines:</p>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">Mathematics for Engineers</h4>
                                        <p className="text-gray-600 text-sm">
                                            Calculus, Differential Equations, Linear Algebra
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">Physics for Engineers</h4>
                                        <p className="text-gray-600 text-sm">
                                            Mechanics, Electromagnetism, Thermodynamics
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">Engineering Mechanics</h4>
                                        <p className="text-gray-600 text-sm">
                                            Statics, Dynamics, Strength of Materials
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">Materials Science</h4>
                                        <p className="text-gray-600 text-sm">
                                            Structure, Properties, Processing of Materials
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">Systems Engineering and Design</h4>
                                        <p className="text-gray-600 text-sm">
                                            System Analysis, Design Methodology, Project Management
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6 text-gray-800 border-b border-gray-200 pb-2">
                                    Specialized Courses (Mechanical Engineering)
                                </h3>
                                <p className="text-gray-600 mb-4">Example curriculum for Mechanical Engineering:</p>

                                <div className="space-y-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">
                                            Thermodynamics and Heat Transfer
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Energy conversion, thermal systems, heat exchange
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">Fluid Mechanics and Hydraulics</h4>
                                        <p className="text-gray-600 text-sm">
                                            Fluid properties, flow analysis, hydraulic systems
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">
                                            Manufacturing and Automation Technologies
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Production processes, automation systems, quality control
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <h4 className="font-semibold text-gray-800">Machine Design and Analysis</h4>
                                        <p className="text-gray-600 text-sm">
                                            Mechanical component design, stress analysis, optimization
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-8 bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500">
                                    <h4 className="font-bold text-gray-800 mb-2">
                                        Capstone Projects & Industry Internship
                                    </h4>
                                    <p className="text-gray-700">
                                        Every undergraduate program includes a capstone project or industry internship,
                                        where students apply their learning to real-world challenges.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why Study Engineering */}
            </div>
        </div>
    )
}

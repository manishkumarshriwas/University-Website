import React from "react"

export const Research = () => {
    return (
            <div className="font-sans bg-white min-h-screen">
                {/* Header Section */}

                {/* Hero Section */}
                <section className="relative h-[500px]">
                    <img
                        src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=1740&auto=format&fit=crop"
                        alt="University Research Lab"
                        className="w-full h-full object-cover"
                        keywords="research lab, scientists, university laboratory, academic research"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center px-4 text-center">
                        <h1 className="text-white font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transform transition-transform duration-700 translate-y-0">
                            Pioneering Research for a Better Tomorrow
                        </h1>
                        <p className="text-white text-lg md:text-xl max-w-3xl mb-8">
                            Explore groundbreaking discoveries, innovative projects, and world-class research centers
                            shaping the future.
                        </p>
                        <a
                            href="#centers"
                            className="bg-[#FFD700] hover:bg-[#e6c200] text-[#001F54] font-bold py-3 px-6 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-1"
                        >
                            Discover Our Research
                        </a>
                    </div>
                </section>

                {/* Key Research Centers Section */}
                <section id="centers" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#001F54] font-serif text-3xl font-bold mb-12 text-center flex items-center justify-center">
                            <span className="material-symbols-outlined mr-2">hub</span>
                            Key Research Centers and Institutes
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Center 1 */}
                            <div
                                id="quantum"
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1740&auto=format&fit=crop"
                                        alt="Quantum Computing Research"
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        keywords="quantum computing, quantum research, technology research"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-[#001F54] mb-3">
                                        Center for Advanced Quantum Studies
                                    </h3>
                                    <p className="text-gray-700">
                                        Leading innovative research in quantum computing, quantum materials, and
                                        information theory to unlock new technological frontiers.
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                    >
                                        Learn more{" "}
                                        <span className="material-symbols-outlined align-text-bottom text-sm">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Center 2 */}
                            <div
                                id="sustainable-energy"
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1740&auto=format&fit=crop"
                                        alt="Sustainable Energy Research"
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        keywords="sustainable energy, renewable energy, green technology"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-[#001F54] mb-3">
                                        Center for Sustainable Energy Research
                                    </h3>
                                    <p className="text-gray-700">
                                        Pioneering solutions for renewable energy generation, storage, and distribution
                                        to address global energy challenges and climate change.
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                    >
                                        Learn more{" "}
                                        <span className="material-symbols-outlined align-text-bottom text-sm">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Center 3 */}
                            <div
                                id="social-science"
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1932&auto=format&fit=crop"
                                        alt="Social Science Research"
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        keywords="social science, humanities research, sociology"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-[#001F54] mb-3">
                                        Institute of Social Science Innovations
                                    </h3>
                                    <p className="text-gray-700">
                                        Examining complex social challenges through interdisciplinary approaches to
                                        develop evidence-based policies and interventions for societal improvement.
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                    >
                                        Learn more{" "}
                                        <span className="material-symbols-outlined align-text-bottom text-sm">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Center 4 */}
                            <div
                                id="biomedical"
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=1887&auto=format&fit=crop"
                                        alt="Biomedical Engineering Lab"
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                                        keywords="biomedical engineering, medical research, healthcare technology"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-serif font-bold text-[#001F54] mb-3">
                                        Biomedical Engineering Lab
                                    </h3>
                                    <p className="text-gray-700">
                                        Advancing medical technologies through innovative engineering solutions to
                                        improve diagnostics, treatments, and healthcare delivery systems worldwide.
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-4 inline-block text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                    >
                                        Learn more{" "}
                                        <span className="material-symbols-outlined align-text-bottom text-sm">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Breakthrough Projects Section */}
                <section id="projects" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#001F54] font-serif text-3xl font-bold mb-12 text-center flex items-center justify-center">
                            <span className="material-symbols-outlined mr-2">science</span>
                            Breakthrough Projects
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Project 1 */}
                            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-serif font-bold text-[#001F54] mb-3">
                                    Project Aurora: AI for Climate Modeling
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Developing cutting-edge AI algorithms to enhance climate prediction accuracy and
                                    support global sustainability efforts.
                                </p>
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                    <span className="material-symbols-outlined mr-1 text-[#800000]">person</span>
                                    <span>Lead: Dr. Michael Chen, Dr. Sarah Johnson</span>
                                </div>
                                <a
                                    href="#"
                                    className="inline-block text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                >
                                    View project details{" "}
                                    <span className="material-symbols-outlined align-text-bottom text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>

                            {/* Project 2 */}
                            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-serif font-bold text-[#001F54] mb-3">
                                    Neural Networks for Early Disease Detection
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Leveraging deep learning to identify biomarkers for early detection of
                                    neurodegenerative diseases, improving treatment outcomes.
                                </p>
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                    <span className="material-symbols-outlined mr-1 text-[#800000]">person</span>
                                    <span>Lead: Dr. Emily Rodriguez, Prof. James Wong</span>
                                </div>
                                <a
                                    href="#"
                                    className="inline-block text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                >
                                    View project details{" "}
                                    <span className="material-symbols-outlined align-text-bottom text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>

                            {/* Project 3 */}
                            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-serif font-bold text-[#001F54] mb-3">
                                    Renewable Energy Storage Solutions
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Engineering novel materials and systems for efficient, sustainable energy storage to
                                    enable wider adoption of renewable energy sources.
                                </p>
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                    <span className="material-symbols-outlined mr-1 text-[#800000]">person</span>
                                    <span>Lead: Prof. Thomas Green, Dr. Lisa Park</span>
                                </div>
                                <a
                                    href="#"
                                    className="inline-block text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                >
                                    View project details{" "}
                                    <span className="material-symbols-outlined align-text-bottom text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>

                            {/* Project 4 */}
                            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-xl font-serif font-bold text-[#001F54] mb-3">
                                    Digital Humanities: Preserving Cultural Heritage
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    Using advanced digital technologies to document, preserve, and provide access to
                                    cultural artifacts and historical knowledge.
                                </p>
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                    <span className="material-symbols-outlined mr-1 text-[#800000]">person</span>
                                    <span>Lead: Dr. Amara Patel, Prof. Robert Kim</span>
                                </div>
                                <a
                                    href="#"
                                    className="inline-block text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                >
                                    View project details{" "}
                                    <span className="material-symbols-outlined align-text-bottom text-sm">
                                        arrow_forward
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Publications Section */}
                <section id="publications" className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#001F54] font-serif text-3xl font-bold mb-12 text-center flex items-center justify-center">
                            <span className="material-symbols-outlined mr-2">menu_book</span>
                            Recent Publications & Media
                        </h2>

                        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                            <ul className="divide-y divide-gray-200">
                                <li className="py-4 hover:bg-gray-50 transition-colors rounded-md px-2">
                                    <a href="#" className="block">
                                        <h3 className="text-lg font-medium text-[#001F54] hover:text-[#800000] transition-colors">
                                            "Harnessing Nanotechnology in Cancer Treatment"
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            Dr. Jane Doe, Dr. Robert Smith, Dr. Maria Garcia
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1">Science Advances, July 2025</p>
                                    </a>
                                </li>

                                <li className="py-4 hover:bg-gray-50 transition-colors rounded-md px-2">
                                    <a href="#" className="block">
                                        <h3 className="text-lg font-medium text-[#001F54] hover:text-[#800000] transition-colors">
                                            "Advances in CRISPR Gene Editing for Rare Genetic Disorders"
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            Prof. Thomas Lee, Dr. Susan Wilson, Dr. James Chen
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1">Nature Genetics, April 2025</p>
                                    </a>
                                </li>

                                <li className="py-4 hover:bg-gray-50 transition-colors rounded-md px-2">
                                    <a href="#" className="block">
                                        <h3 className="text-lg font-medium text-[#001F54] hover:text-[#800000] transition-colors">
                                            "Machine Learning Models in Epidemiology: Predicting Disease Outbreaks"
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            Dr. Michael Brown, Dr. Emily Johnson, Prof. David Kim
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Journal of Health Informatics, June 2025
                                        </p>
                                    </a>
                                </li>

                                <li className="py-4 hover:bg-gray-50 transition-colors rounded-md px-2">
                                    <a href="#" className="block">
                                        <h3 className="text-lg font-medium text-[#001F54] hover:text-[#800000] transition-colors">
                                            "Quantum Computing Applications in Cryptography and Data Security"
                                        </h3>
                                        <p className="text-gray-600 mt-1">
                                            Prof. Sarah Martinez, Dr. Alex Wong, Dr. Lisa Park
                                        </p>
                                        <p className="text-gray-500 text-sm mt-1">
                                            Journal of Quantum Information, May 2025
                                        </p>
                                    </a>
                                </li>
                            </ul>

                            <div className="mt-6 text-center">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-[#800000] hover:text-[#5c0000] font-medium transition-colors"
                                >
                                    View all publications
                                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Funding Section */}
                <section id="funding" className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-[#001F54] font-serif text-3xl font-bold mb-12 text-center flex items-center justify-center">
                            <span className="material-symbols-outlined mr-2">payments</span>
                            Funding & Collaboration Opportunities
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column - Funding Programs */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-[#001F54] mb-6">
                                    Research Funding Programs
                                </h3>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-5 rounded-md shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-lg mb-2">University Research Fellowship</h4>
                                        <p className="text-gray-700 mb-3">
                                            Offers up to $50,000 for innovative projects in STEM fields. Applications
                                            open annually in January.
                                        </p>
                                        <a
                                            href="#"
                                            className="text-[#800000] hover:text-[#5c0000] font-medium transition-colors inline-flex items-center"
                                        >
                                            Application details
                                            <span className="material-symbols-outlined ml-1 text-sm">
                                                arrow_forward
                                            </span>
                                        </a>
                                    </div>

                                    <div className="bg-gray-50 p-5 rounded-md shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-lg mb-2">Graduate Research Grants</h4>
                                        <p className="text-gray-700 mb-3">
                                            Supporting graduate students with research funding up to $15,000 for thesis
                                            and dissertation projects.
                                        </p>
                                        <p className="text-[#800000] font-medium mb-1">Apply by: September 1</p>
                                        <a
                                            href="#"
                                            className="text-[#800000] hover:text-[#5c0000] font-medium transition-colors inline-flex items-center"
                                        >
                                            Learn more
                                            <span className="material-symbols-outlined ml-1 text-sm">
                                                arrow_forward
                                            </span>
                                        </a>
                                    </div>

                                    <div className="bg-gray-50 p-5 rounded-md shadow-sm hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-lg mb-2">Interdisciplinary Collaboration Fund</h4>
                                        <p className="text-gray-700 mb-3">
                                            Promoting cross-disciplinary research initiatives with funding between
                                            $25,000-$100,000 per project.
                                        </p>
                                        <a
                                            href="#"
                                            className="text-[#800000] hover:text-[#5c0000] font-medium transition-colors inline-flex items-center"
                                        >
                                            Contact research office
                                            <span className="material-symbols-outlined ml-1 text-sm">
                                                arrow_forward
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Partnership Opportunities */}
                            <div>
                                <h3 className="text-xl font-serif font-bold text-[#001F54] mb-6">
                                    Partnership Opportunities
                                </h3>

                                <div className="bg-gray-50 p-6 rounded-md shadow-sm mb-6">
                                    <h4 className="font-bold text-lg mb-3">Industry Collaboration</h4>
                                    <p className="text-gray-700 mb-4">
                                        Our research centers welcome partnerships with industry leaders to translate
                                        academic discoveries into practical applications with real-world impact.
                                    </p>
                                    <ul className="space-y-2 mb-4">
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Joint research initiatives</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Technology transfer opportunities</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="material-symbols-outlined text-[#800000] mr-2 mt-0.5">
                                                check_circle
                                            </span>
                                            <span>Sponsored research programs</span>
                                        </li>
                                    </ul>
                                    <a
                                        href="#"
                                        className="inline-block bg-[#001F54] text-white py-2 px-4 rounded hover:bg-[#00132e] transition-colors"
                                    >
                                        Partner with us
                                    </a>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-md shadow-sm">
                                    <h4 className="font-bold text-lg mb-3">International Research Collaborations</h4>
                                    <p className="text-gray-700 mb-4">
                                        We actively seek international partners for collaborative research that
                                        addresses global challenges and creates opportunities for faculty and student
                                        exchanges.
                                    </p>
                                    <a
                                        href="#"
                                        className="text-[#800000] hover:text-[#5c0000] font-medium transition-colors inline-flex items-center"
                                    >
                                        Explore international opportunities
                                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
            </div>
    )
}

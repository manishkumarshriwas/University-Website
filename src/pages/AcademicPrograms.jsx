import React from "react"
import { MainNavBar } from "../components/MainNavBar";
import { Footer } from "../components/Footer";


export const AcademicPrograms = () => {
    return (
            <div className="bg-white min-h-screen font-serif">
                {/* University Header */}
                <header className="bg-[#0a3d62] text-white py-4 border-b border-[#ffc13b]">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://placehold.co/80x80?text=Logo"
                                alt="University Logo"
                                className="h-16 w-auto"
                            />
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold">University Name</h1>
                                <p className="text-sm md:text-base text-[#ffc13b]">
                                    Excellence in Education Since 1850
                                </p>
                            </div>
                        </div>
                        {/* Remove old nav/menu button */}
                    </div>
                </header>

               
                {/* Main content */}
                <main className="container mx-auto py-8 px-4">
                    <div className="mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0a3d62] mb-2">Academic Programs</h2>
                        <div className="h-1 w-24 bg-[#ffc13b] mb-6"></div>
                        <p className="text-lg max-w-3xl">
                            Discover our comprehensive range of undergraduate and graduate programs designed to prepare
                            you for leadership and service in a diverse and interconnected world.
                        </p>
                    </div>

                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-[#0a3d62] mb-8 flex items-center">
                            <span className="material-symbols-outlined mr-2 text-[#8c1515]">school</span> Our Faculties
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Faculty of Arts & Sciences */}
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                <div className="h-40 bg-[#0a3d62] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Arts & Sciences"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        keywords="university, library, students, education, learning"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/80 to-transparent"></div>
                                    <h4 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                                        Faculty of Arts & Sciences
                                    </h4>
                                </div>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Offering a wide range of disciplines spanning humanities, social sciences, and
                                        natural sciences with emphasis on critical thinking and research.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                                            28 Departments
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">75+ Programs</span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">350+ Faculty</span>
                                    </div>
                                    <a
                                        href="/departments/artsandscience"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Explore Programs</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Faculty of Engineering */}
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                <div className="h-40 bg-[#0a3d62] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZ3xlbnwwfHx8fDE3NTQ5MzMwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Engineering Faculty"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        keywords="engineering, technology, lab, innovation, research"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/80 to-transparent"></div>
                                    <h4 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                                        Faculty of Engineering
                                    </h4>
                                </div>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Preparing students to address complex engineering challenges through innovative
                                        curricula that blend theory, practice, and research.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                                            12 Departments
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">40+ Programs</span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">180+ Faculty</span>
                                    </div>
                                    <a
                                        href="/departments/engineering"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Explore Programs</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Faculty of Medicine */}
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                <div className="h-40 bg-[#0a3d62] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxtZWRpY2luZXxlbnwwfHx8fDE3NTQ5MzMwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Medical Faculty"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        keywords="medicine, healthcare, medical education, hospital, research"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/80 to-transparent"></div>
                                    <h4 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                                        Faculty of Medicine
                                    </h4>
                                </div>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Educating future healthcare professionals with a focus on clinical excellence,
                                        research innovation, and compassionate patient care.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                                            15 Departments
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">25+ Programs</span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">200+ Faculty</span>
                                    </div>
                                    <a
                                        href="/departments/medicine"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Explore Programs</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Faculty of Business */}
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                <div className="h-40 bg-[#0a3d62] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Business Faculty"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        keywords="business, management, economics, finance, entrepreneurship"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/80 to-transparent"></div>
                                    <h4 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                                        Faculty of Business
                                    </h4>
                                </div>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Developing business leaders with global perspectives, ethical foundations, and
                                        innovative approaches to addressing complex market challenges.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                                            8 Departments
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">30+ Programs</span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">120+ Faculty</span>
                                    </div>
                                    <a
                                        href="/departments/business"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Explore Programs</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Faculty of Law */}
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                <div className="h-40 bg-[#0a3d62] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Law Faculty"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        keywords="law, legal, justice, courtroom, books"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/80 to-transparent"></div>
                                    <h4 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                                        Faculty of Law
                                    </h4>
                                </div>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Educating legal professionals committed to justice, ethical practice, and
                                        addressing complex legal challenges in a diverse global context.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                                            6 Departments
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">15+ Programs</span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">80+ Faculty</span>
                                    </div>
                                    <a
                                        href="/departments/law"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Explore Programs</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>

                            {/* Faculty of Fine Arts */}
                            <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                                <div className="h-40 bg-[#0a3d62] relative overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                        alt="Fine Arts Faculty"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        keywords="art, design, creative, studio, gallery, performance"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a3d62]/80 to-transparent"></div>
                                    <h4 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                                        Faculty of Fine Arts
                                    </h4>
                                </div>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Nurturing creative expression, artistic excellence, and cultural engagement
                                        through programs spanning visual arts, music, theater, and design.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">
                                            10 Departments
                                        </span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">20+ Programs</span>
                                        <span className="px-3 py-1 bg-gray-100 text-sm rounded-full">90+ Faculty</span>
                                    </div>
                                    <a
                                        href="/departments/humanities"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Explore Programs</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="#"
                                className="inline-block bg-[#0a3d62] hover:bg-[#0a3d62]/90 text-white px-6 py-3 rounded transition-colors duration-200 font-medium"
                            >
                                View All Faculties
                            </a>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-[#0a3d62] mb-8 flex items-center">
                            <span className="material-symbols-outlined mr-2 text-[#8c1515]">menu_book</span> Featured
                            Departments
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <details className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer group">
                                <summary className="flex items-center p-5 bg-gray-50 border-b hover:bg-[#ffc13b]/10 transition-colors">
                                    <span className="material-symbols-outlined text-[#8c1515] mr-3">biotech</span>
                                    <div className="flex-1">
                                        <h4 className="font-bold">Department of Physics</h4>
                                        <p className="text-sm text-gray-500">Faculty of Science</p>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Exploring the fundamental laws of the universe through theoretical and
                                        experimental research in quantum mechanics, astrophysics, and particle physics.
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                groups
                                            </span>
                                            <span>42 Faculty Members</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                school
                                            </span>
                                            <span>4 Undergraduate Programs</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                workspace_premium
                                            </span>
                                            <span>6 Graduate Programs</span>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Department Website</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </details>

                            <details className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer group">
                                <summary className="flex items-center p-5 bg-gray-50 border-b hover:bg-[#ffc13b]/10 transition-colors">
                                    <span className="material-symbols-outlined text-[#8c1515] mr-3">psychology</span>
                                    <div className="flex-1">
                                        <h4 className="font-bold">Department of Psychology</h4>
                                        <p className="text-sm text-gray-500">Faculty of Social Sciences</p>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Understanding human behavior through rigorous scientific inquiry, with
                                        specializations in clinical, cognitive, developmental, and social psychology.
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                groups
                                            </span>
                                            <span>38 Faculty Members</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                school
                                            </span>
                                            <span>3 Undergraduate Programs</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                workspace_premium
                                            </span>
                                            <span>5 Graduate Programs</span>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Department Website</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </details>

                            <details className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer group">
                                <summary className="flex items-center p-5 bg-gray-50 border-b hover:bg-[#ffc13b]/10 transition-colors">
                                    <span className="material-symbols-outlined text-[#8c1515] mr-3">history_edu</span>
                                    <div className="flex-1">
                                        <h4 className="font-bold">Department of History</h4>
                                        <p className="text-sm text-gray-500">Faculty of Humanities</p>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Examining the past to understand the present through research and teaching on
                                        global civilizations, social movements, and cultural transformations.
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                groups
                                            </span>
                                            <span>35 Faculty Members</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                school
                                            </span>
                                            <span>2 Undergraduate Programs</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                workspace_premium
                                            </span>
                                            <span>4 Graduate Programs</span>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Department Website</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </details>

                            <details className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer group">
                                <summary className="flex items-center p-5 bg-gray-50 border-b hover:bg-[#ffc13b]/10 transition-colors">
                                    <span className="material-symbols-outlined text-[#8c1515] mr-3">computer</span>
                                    <div className="flex-1">
                                        <h4 className="font-bold">Department of Computer Science</h4>
                                        <p className="text-sm text-gray-500">Faculty of Engineering</p>
                                    </div>
                                    <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                        expand_more
                                    </span>
                                </summary>
                                <div className="p-5">
                                    <p className="mb-4">
                                        Advancing computing technologies through innovative research in artificial
                                        intelligence, data science, cybersecurity, and human-computer interaction.
                                    </p>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                groups
                                            </span>
                                            <span>45 Faculty Members</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                school
                                            </span>
                                            <span>5 Undergraduate Programs</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                                workspace_premium
                                            </span>
                                            <span>7 Graduate Programs</span>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-[#8c1515] hover:text-[#a61c1c] font-medium flex items-center group"
                                    >
                                        <span>Department Website</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-1 ml-1">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </details>
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="#"
                                className="inline-block bg-[#0a3d62] hover:bg-[#0a3d62]/90 text-white px-6 py-3 rounded transition-colors duration-200 font-medium"
                            >
                                View All Departments
                            </a>
                        </div>
                    </section>

                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-[#0a3d62] mb-8 flex items-center">
                            <span className="material-symbols-outlined mr-2 text-[#8c1515]">collections_bookmark</span>{" "}
                            Academic Resources
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-3xl text-[#8c1515] p-3 bg-[#ffc13b]/20 rounded-full">
                                        menu_book
                                    </span>
                                    <h4 className="text-xl font-bold ml-4">Course Catalogs</h4>
                                </div>
                                <p className="mb-4">
                                    Browse comprehensive listings of all courses offered across our faculties and
                                    departments, including prerequisites, credit hours, and instructors.
                                </p>
                                <ul className="mb-6 space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                            check_circle
                                        </span>
                                        <span>Undergraduate Catalog</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                            check_circle
                                        </span>
                                        <span>Graduate Catalog</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-[#0a3d62] mr-2">
                                            check_circle
                                        </span>
                                        <span>Professional Programs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>

               
            </div>
  )
}

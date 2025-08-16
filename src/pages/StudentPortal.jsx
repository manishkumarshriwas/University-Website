import React from "react"

export const Component = () => {
    return (
            <div className="flex h-screen bg-gray-100 overflow-hidden">
                {/* Sidebar Navigation */}
                <div className="w-64 bg-white shadow-lg border-r border-gray-200 overflow-y-auto hidden md:block transition-all duration-300 ease-in-out">
                    <div className="p-5 border-b border-gray-200">
                        <h2 className="text-xl font-serif font-bold text-primary-700">Student Portal</h2>
                        <p className="text-sm text-gray-600 mt-1">Resources & Support</p>
                    </div>

                    <nav className="mt-4">
                        <ul>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">menu_book</span>
                                    <span>Study Materials</span>
                                </a>
                            </li>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">event_note</span>
                                    <span>Syllabus & Curriculum</span>
                                </a>
                            </li>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">local_library</span>
                                    <span>eLibrary Access</span>
                                </a>
                            </li>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">work</span>
                                    <span>Career Services</span>
                                </a>
                            </li>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">favorite</span>
                                    <span>Mental Health Support</span>
                                </a>
                            </li>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">help</span>
                                    <span>Student Help Desk</span>
                                </a>
                            </li>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">science</span>
                                    <span>Research & Innovation</span>
                                </a>
                            </li>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">event</span>
                                    <span>Campus Events</span>
                                </a>
                            </li>
                            <li className="px-5 py-3 hover:bg-primary-50 transition-colors duration-200 cursor-pointer group">
                                <a className="flex items-center gap-3 text-gray-700 group-hover:text-primary-700">
                                    <span className="material-symbols-outlined">public</span>
                                    <span>International Students</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* Next: "Add language selector dropdown" */}
                </div>

                {/* Mobile sidebar toggle */}
                <div className="absolute left-4 top-4 md:hidden z-20">
                    <button className="p-2 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    {/* Next: "Add mobile sidebar overlay" */}
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto">
                    {/* Header */}
                    <header className="bg-white shadow-md py-8 px-6 md:px-10">
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">Student Resources</h1>
                        <p className="text-gray-600 mt-2 text-lg italic">
                            Explore the resources available to support your learning journey.
                        </p>
                    </header>

                    {/* Content sections */}
                    <main className="p-4 md:p-8">
                        {/* Search Bar */}
                        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search for resources, materials, events..."
                                    className="w-full p-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                                />
                                <span className="material-symbols-outlined absolute left-3 top-3 text-gray-500">
                                    search
                                </span>
                                <button className="absolute right-2 top-2 bg-primary-600 text-white py-1 px-4 rounded-lg hover:bg-primary-700 transition-all duration-200">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Study Materials */}
                        <section className="mb-8">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary-600 mr-2">
                                    menu_book
                                </span>
                                <h2 className="text-2xl font-bold text-gray-800">Study Materials</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 border-t-4 border-primary-500 transform hover:-translate-y-1 transition-transform duration-200">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-semibold text-gray-800">Mathematics</h3>
                                        <span className="material-symbols-outlined text-primary-600">calculate</span>
                                    </div>
                                    <p className="text-gray-600 mt-2">
                                        Access lecture notes, practice problems, and solutions for all mathematics
                                        courses.
                                    </p>
                                    <div className="mt-4 flex space-x-2">
                                        <button className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors">
                                            View Notes
                                        </button>
                                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                                            Download PDF
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 border-t-4 border-blue-500 transform hover:-translate-y-1 transition-transform duration-200">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-semibold text-gray-800">Computer Science</h3>
                                        <span className="material-symbols-outlined text-blue-600">computer</span>
                                    </div>
                                    <p className="text-gray-600 mt-2">
                                        Programming tutorials, algorithm examples, and project resources.
                                    </p>
                                    <div className="mt-4 flex space-x-2">
                                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm hover:bg-blue-200 transition-colors">
                                            View Tutorials
                                        </button>
                                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                                            Project Resources
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 border-t-4 border-green-500 transform hover:-translate-y-1 transition-transform duration-200">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-semibold text-gray-800">Biology</h3>
                                        <span className="material-symbols-outlined text-green-600">biotech</span>
                                    </div>
                                    <p className="text-gray-600 mt-2">
                                        Lab manuals, specimen guides, and lecture slides for all biology courses.
                                    </p>
                                    <div className="mt-4 flex space-x-2">
                                        <button className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm hover:bg-green-200 transition-colors">
                                            Lab Resources
                                        </button>
                                        <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                                            View Slides
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 text-right">
                                <button className="text-primary-600 hover:text-primary-800 transition-colors flex items-center ml-auto">
                                    <span>View all study materials</span>
                                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                </button>
                            </div>
                        </section>

                        {/* Syllabus & Curriculum */}
                        <section className="mb-8">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary-600 mr-2">
                                    event_note
                                </span>
                                <h2 className="text-2xl font-bold text-gray-800">Syllabus & Curriculum</h2>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-5">
                                <div className="mb-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="material-symbols-outlined text-gray-600">filter_list</span>
                                        <select className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400 w-full md:w-64">
                                            <option>All Departments</option>
                                            <option>Computer Science</option>
                                            <option>Business Administration</option>
                                            <option>Engineering</option>
                                            <option>Arts & Humanities</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <details className="border rounded-md overflow-hidden">
                                        <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined text-primary-600 mr-3">
                                                    computer
                                                </span>
                                                <span className="font-medium">Computer Science</span>
                                            </div>
                                            <span className="material-symbols-outlined text-gray-600">expand_more</span>
                                        </summary>
                                        <div className="p-4 border-t">
                                            <ul className="space-y-2">
                                                <li className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                                                    <span>Introduction to Programming (CS101)</span>
                                                    <button className="text-primary-600 hover:text-primary-800 flex items-center">
                                                        <span className="material-symbols-outlined mr-1 text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm">Download</span>
                                                    </button>
                                                </li>
                                                <li className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                                                    <span>Data Structures and Algorithms (CS201)</span>
                                                    <button className="text-primary-600 hover:text-primary-800 flex items-center">
                                                        <span className="material-symbols-outlined mr-1 text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm">Download</span>
                                                    </button>
                                                </li>
                                                <li className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                                                    <span>Database Management Systems (CS301)</span>
                                                    <button className="text-primary-600 hover:text-primary-800 flex items-center">
                                                        <span className="material-symbols-outlined mr-1 text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm">Download</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>

                                    <details className="border rounded-md overflow-hidden">
                                        <summary className="flex justify-between items-center p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined text-blue-600 mr-3">
                                                    business
                                                </span>
                                                <span className="font-medium">Business Administration</span>
                                            </div>
                                            <span className="material-symbols-outlined text-gray-600">expand_more</span>
                                        </summary>
                                        <div className="p-4 border-t">
                                            <ul className="space-y-2">
                                                <li className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                                                    <span>Principles of Management (BA101)</span>
                                                    <button className="text-primary-600 hover:text-primary-800 flex items-center">
                                                        <span className="material-symbols-outlined mr-1 text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm">Download</span>
                                                    </button>
                                                </li>
                                                <li className="flex justify-between items-center p-2 hover:bg-gray-50 rounded-md">
                                                    <span>Marketing Management (BA201)</span>
                                                    <button className="text-primary-600 hover:text-primary-800 flex items-center">
                                                        <span className="material-symbols-outlined mr-1 text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm">Download</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </section>

                        {/* eLibrary Access */}
                        <section className="mb-8">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary-600 mr-2">
                                    local_library
                                </span>
                                <h2 className="text-2xl font-bold text-gray-800">eLibrary Access</h2>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="relative mb-6">
                                    <input
                                        type="text"
                                        placeholder="Search journals, books, and articles..."
                                        className="w-full p-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                                    />
                                    <span className="material-symbols-outlined absolute left-3 top-3 text-gray-500">
                                        search
                                    </span>
                                    <button className="absolute right-2 top-2 bg-primary-600 text-white py-1 px-4 rounded-lg hover:bg-primary-700 transition-all duration-200">
                                        Search
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <a className="block bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
                                        <div className="flex items-center mb-3">
                                            <img
                                                src="https://images.unsplash.com/photo-1590308272905-e1a8b1555915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxqc3RvcnxlbnwwfHx8fDE3NTQ5ODg5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                                alt="JSTOR"
                                                className="h-8 w-8 mr-2"
                                                keywords="jstor, academic database, journals"
                                            />
                                            <h3 className="font-semibold">JSTOR</h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Access to academic journals, books, and primary sources.
                                        </p>
                                    </a>

                                    <a className="block bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
                                        <div className="flex items-center mb-3">
                                            <img
                                                src="https://images.unsplash.com/photo-1650333826677-57c32c9a228c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwZGlyZWN0fGVufDB8fHx8MTc1NDk4ODk5NXww&ixlib=rb-4.1.0&q=80&w=1080"
                                                alt="ScienceDirect"
                                                className="h-8 w-8 mr-2"
                                                keywords="science direct, elsevier, research papers"
                                            />
                                            <h3 className="font-semibold">ScienceDirect</h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Scientific and medical research journals and articles.
                                        </p>
                                    </a>

                                    <a className="block bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-all duration-200 transform hover:-translate-y-1">
                                        <div className="flex items-center mb-3">
                                            <img
                                                src="https://img.icons8.com/color/48/000000/google-scholar.png"
                                                alt="Google Scholar"
                                                className="h-8 w-8 mr-2"
                                                keywords="google scholar, academic search, citations"
                                            />
                                            <h3 className="font-semibold">Google Scholar</h3>
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Search across a wide range of scholarly literature.
                                        </p>
                                    </a>
                                </div>

                                <div className="mt-4 bg-primary-50 p-3 rounded-lg border border-primary-100">
                                    <h3 className="font-medium text-primary-800 mb-1">New User?</h3>
                                    <p className="text-sm text-gray-700">
                                        Learn how to access our digital resources with our{" "}
                                        <a className="text-primary-600 hover:underline">eLibrary Access Guide</a>.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Quick Access Widgets */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Career Services */}
                            <section className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-2xl text-primary-600 mr-2">
                                        work
                                    </span>
                                    <h2 className="text-xl font-bold text-gray-800">Career Services</h2>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <a className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined text-blue-600 text-2xl mb-2">
                                            description
                                        </span>
                                        <span className="text-sm text-center">Job Board</span>
                                    </a>
                                    <a className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined text-green-600 text-2xl mb-2">
                                            school
                                        </span>
                                        <span className="text-sm text-center">Internships</span>
                                    </a>
                                    <a className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined text-amber-600 text-2xl mb-2">
                                            edit_document
                                        </span>
                                        <span className="text-sm text-center">Resume Building</span>
                                    </a>
                                    <a className="flex flex-col items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined text-purple-600 text-2xl mb-2">
                                            groups
                                        </span>
                                        <span className="text-sm text-center">Mock Interviews</span>
                                    </a>
                                </div>

                                <button className="w-full mt-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                                    Schedule Career Counseling
                                </button>
                            </section>

                            {/* Mental Health Support */}
                            <section className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-2xl text-primary-600 mr-2">
                                        favorite
                                    </span>
                                    <h2 className="text-xl font-bold text-gray-800">Mental Health Support</h2>
                                </div>

                                <div className="space-y-3">
                                    <a className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                                        <span className="material-symbols-outlined text-green-600 mr-3">
                                            contact_support
                                        </span>
                                        <div>
                                            <h3 className="font-medium">Contact a Counselor</h3>
                                            <p className="text-sm text-gray-600">Schedule a confidential session</p>
                                        </div>
                                    </a>

                                    <a className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                                        <span className="material-symbols-outlined text-blue-600 mr-3">group</span>
                                        <div>
                                            <h3 className="font-medium">Wellness Workshops</h3>
                                            <p className="text-sm text-gray-600">Join group sessions and activities</p>
                                        </div>
                                    </a>

                                    <a className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                        <span className="material-symbols-outlined text-purple-600 mr-3">
                                            menu_book
                                        </span>
                                        <div>
                                            <h3 className="font-medium">Self-Help Resources</h3>
                                            <p className="text-sm text-gray-600">Articles, guides, and videos</p>
                                        </div>
                                    </a>
                                </div>

                                <div className="mt-4 bg-red-50 p-3 rounded-lg border border-red-100">
                                    <h3 className="font-medium text-red-800 flex items-center">
                                        <span className="material-symbols-outlined mr-1">emergency</span>
                                        Emergency Support
                                    </h3>
                                    <p className="text-sm text-gray-700 mt-1">
                                        24/7 Crisis Helpline: <strong>1-800-123-4567</strong>
                                    </p>
                                </div>
                            </section>
                        </div>

                        {/* Help & Support */}
                        <section className="mb-8">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary-600 mr-2">help</span>
                                <h2 className="text-2xl font-bold text-gray-800">Student Help Desk</h2>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-all duration-200">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mb-2">
                                            computer
                                        </span>
                                        <h3 className="font-medium mb-1">IT Support</h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Password resets, email issues, and software access.
                                        </p>
                                        <div className="flex items-center text-sm text-primary-600">
                                            <span className="material-symbols-outlined text-sm mr-1">call</span>
                                            <span>Ext. 1234</span>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-all duration-200">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mb-2">
                                            school
                                        </span>
                                        <h3 className="font-medium mb-1">Academic Advisors</h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Course selection, degree planning, and academic guidance.
                                        </p>
                                        <div className="flex items-center text-sm text-primary-600">
                                            <span className="material-symbols-outlined text-sm mr-1">call</span>
                                            <span>Ext. 5678</span>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-4 rounded-lg border hover:shadow-md transition-all duration-200">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl mb-2">
                                            payments
                                        </span>
                                        <h3 className="font-medium mb-1">Financial Services</h3>
                                        <p className="text-sm text-gray-600 mb-3">
                                            Tuition payments, scholarships, and financial aid.
                                        </p>
                                        <div className="flex items-center text-sm text-primary-600">
                                            <span className="material-symbols-outlined text-sm mr-1">call</span>
                                            <span>Ext. 9101</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-medium mb-3">Submit a Help Ticket</h3>
                                    <form>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                            />
                                        </div>
                                        <select className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-primary-400">
                                            <option>Select Issue Category</option>
                                            <option>IT Support</option>
                                            <option>Academic Services</option>
                                            <option>Financial Services</option>
                                            <option>Housing</option>
                                            <option>Other</option>
                                        </select>
                                        <textarea
                                            placeholder="Describe your issue..."
                                            rows="3"
                                            className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-primary-400"
                                        ></textarea>
                                        <button className="bg-primary-600 text-white py-2 px-6 rounded-md hover:bg-primary-700 transition-colors">
                                            Submit Ticket
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </section>

                        {/* Campus Events */}
                        <section className="mb-8">
                            <div className="flex items-center mb-4">
                                <span className="material-symbols-outlined text-3xl text-primary-600 mr-2">event</span>
                                <h2 className="text-2xl font-bold text-gray-800">Campus Events</h2>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <button className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">
                                        All Events
                                    </button>
                                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm transition-colors">
                                        Academic
                                    </button>
                                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm transition-colors">
                                        Social
                                    </button>
                                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm transition-colors">
                                        Career
                                    </button>
                                    <button className="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full text-sm transition-colors">
                                        Workshops
                                    </button>
                                </div>

                                <div className="space-y-4">
                                    <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
                                        <div className="flex items-start">
                                            <div className="bg-primary-100 text-primary-800 p-2 rounded-lg text-center min-w-[60px] mr-4">
                                                <div className="text-sm font-medium">APR</div>
                                                <div className="text-xl font-bold">15</div>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-medium text-gray-800">Spring Career Fair 2023</h3>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    <span className="flex items-center">
                                                        <span className="material-symbols-outlined text-sm mr-1">
                                                            schedule
                                                        </span>
                                                        10:00 AM - 4:00 PM
                                                    </span>
                                                </p>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    <span className="flex items-center">
                                                        <span className="material-symbols-outlined text-sm mr-1">
                                                            location_on
                                                        </span>
                                                        Student Union Hall
                                                    </span>
                                                </p>
                                                <div className="mt-3">
                                                    <button className="px-3 py-1 bg-primary-600 text-white rounded-md text-sm hover:bg-primary-700 transition-colors">
                                                        RSVP
                                                    </button>
                                                    <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm ml-2 hover:bg-gray-200 transition-colors">
                                                        More Info
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 text-blue-800 p-2 rounded-lg text-center min-w-[60px] mr-4"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
    )
}

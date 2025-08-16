import React from "react"

export const StudentResource = () => {
    return (
            <div className="bg-gray-50 min-h-screen">
                {/* Header Section */}
                <header className="bg-white shadow-md py-8 px-6">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-4xl font-serif font-bold text-center">Course Syllabi</h1>
                        <p className="text-center text-gray-600 italic mt-2">
                            Access the detailed syllabi for all courses offered across departments.
                        </p>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
                    {/* Sidebar Navigation */}
                    <aside className="w-full md:w-64 shrink-0">
                        <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
                            <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Academic Categories</h2>
                            <nav>
                                <ul className="space-y-1">
                                    {[
                                        {icon: "engineering", name: "Engineering Courses"},
                                        {icon: "medical_services", name: "Medical Courses"},
                                        {icon: "business_center", name: "Business Courses"},
                                        {icon: "psychology", name: "Humanities & Social Sciences"},
                                        {icon: "gavel", name: "Law Courses"},
                                        {icon: "palette", name: "Arts and Design"},
                                        {icon: "science", name: "Science Courses"},
                                        {icon: "school", name: "Interdisciplinary Programs"},
                                        {icon: "category", name: "Other Departments"}
                                    ].map((category, index) => (
                                        <li key={index}>
                                            <a
                                                href={`#${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                                                className="flex items-center py-2 px-3 rounded-md hover:bg-primary-50 transition-colors group"
                                            >
                                                <span className="material-symbols-outlined mr-2 text-gray-500 group-hover:text-primary-600">
                                                    landscape
                                                </span>
                                                <span className="group-hover:text-primary-600">{category.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1">
                        {/* Search and Filters */}
                        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                                        <span className="material-symbols-outlined">search</span>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search by course code, name, or department"
                                        className="pl-10 pr-4 py-2 border rounded-md w-full focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                    />
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    <select className="border rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                                        <option>All Semesters</option>
                                        <option>Fall</option>
                                        <option>Spring</option>
                                        <option>Summer</option>
                                    </select>
                                    <select className="border rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                                        <option>All Years</option>
                                        <option>First Year</option>
                                        <option>Second Year</option>
                                        <option>Third Year</option>
                                        <option>Fourth Year</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Engineering Courses Section */}
                        <section id="engineering-courses" className="mb-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary-700 text-white p-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">engineering</span>
                                    <h2 className="text-xl font-semibold">Engineering Courses</h2>
                                </div>
                                <div className="p-4">
                                    <p className="mb-4 text-gray-600">
                                        This section contains the syllabi for all engineering branches, including
                                        Computer Science, Mechanical, Electrical, Civil, Chemical, Aerospace, and
                                        Electronics and Communication Engineering.
                                    </p>

                                    <details className="mb-3 border rounded-md overflow-hidden group" open>
                                        <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    computer
                                                </span>
                                                <h3 className="font-medium">Computer Science & Engineering (CSE)</h3>
                                            </div>
                                            <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="p-4 space-y-3">
                                            {/* Course cards */}
                                            <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-semibold">
                                                            CSE101: Introduction to Programming
                                                        </h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            Fundamentals of programming concepts, algorithms, and
                                                            problem-solving techniques using a high-level programming
                                                            language.
                                                        </p>
                                                    </div>
                                                    <button className="flex items-center space-x-1 bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1 rounded-md transition-colors">
                                                        <span className="material-symbols-outlined text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm font-medium">Download PDF</span>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-semibold">
                                                            CSE102: Data Structures and Algorithms
                                                        </h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            Study of fundamental data structures and algorithms,
                                                            including lists, stacks, queues, trees, and graphs, with
                                                            emphasis on implementation and analysis.
                                                        </p>
                                                    </div>
                                                    <button className="flex items-center space-x-1 bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1 rounded-md transition-colors">
                                                        <span className="material-symbols-outlined text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm font-medium">Download PDF</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <details className="mb-3 border rounded-md overflow-hidden group">
                                        <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    precision_manufacturing
                                                </span>
                                                <h3 className="font-medium">Mechanical Engineering (ME)</h3>
                                            </div>
                                            <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="p-4 space-y-3">
                                            <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-semibold">ME101: Engineering Mechanics</h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            Study of forces and their effects on engineering systems in
                                                            static equilibrium. Analysis of force systems, centroids,
                                                            and moments of inertia.
                                                        </p>
                                                    </div>
                                                    <button className="flex items-center space-x-1 bg-primary-50 hover:bg-primary-100 text-primary-700 px-3 py-1 rounded-md transition-colors">
                                                        <span className="material-symbols-outlined text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm font-medium">Download PDF</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <div className="mt-4 flex justify-end">
                                        <button className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors">
                                            <span className="material-symbols-outlined mr-1">folder_zip</span>
                                            <span>Download All Engineering Syllabi</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Medical Courses Section */}
                        <section id="medical-courses" className="mb-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-red-600 text-white p-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">medical_services</span>
                                    <h2 className="text-xl font-semibold">Medical Courses</h2>
                                </div>
                                <div className="p-4">
                                    <p className="mb-4 text-gray-600">
                                        This section contains the syllabi for all medical branches, including MBBS, BDS,
                                        Nursing, Pharmacy, and Physiotherapy.
                                    </p>

                                    <details className="mb-3 border rounded-md overflow-hidden group">
                                        <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-red-600">
                                                    medication
                                                </span>
                                                <h3 className="font-medium">MBBS</h3>
                                            </div>
                                            <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="p-4 space-y-3">
                                            <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-semibold">MBBS101: Anatomy</h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            Study of the structure of the human body, including gross
                                                            anatomy, histology, embryology, and neuroanatomy.
                                                        </p>
                                                    </div>
                                                    <button className="flex items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-700 px-3 py-1 rounded-md transition-colors">
                                                        <span className="material-symbols-outlined text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm font-medium">Download PDF</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-semibold">MBBS102: Physiology</h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            Study of the normal functions of living organisms and their
                                                            parts, including the physical and chemical processes
                                                            involved.
                                                        </p>
                                                    </div>
                                                    <button className="flex items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-700 px-3 py-1 rounded-md transition-colors">
                                                        <span className="material-symbols-outlined text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm font-medium">Download PDF</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <details className="mb-3 border rounded-md overflow-hidden group">
                                        <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                            <div className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-red-600">
                                                    landscape
                                                </span>
                                                <h3 className="font-medium">BDS (Bachelor of Dental Surgery)</h3>
                                            </div>
                                            <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="p-4 space-y-3">
                                            <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-semibold">BDS101: Dental Anatomy</h4>
                                                        <p className="text-sm text-gray-600 mt-1">
                                                            Study of the morphology and structure of teeth and
                                                            surrounding oral tissues.
                                                        </p>
                                                    </div>
                                                    <button className="flex items-center space-x-1 bg-red-50 hover:bg-red-100 text-red-700 px-3 py-1 rounded-md transition-colors">
                                                        <span className="material-symbols-outlined text-sm">
                                                            download
                                                        </span>
                                                        <span className="text-sm font-medium">Download PDF</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <div className="mt-4 flex justify-end">
                                        <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors">
                                            <span className="material-symbols-outlined mr-1">folder_zip</span>
                                            <span>Download All Medical Syllabi</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Business Courses */}
                        <section id="business-courses" className="mb-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-amber-600 text-white p-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">business_center</span>
                                    <h2 className="text-xl font-semibold">Business Courses</h2>
                                </div>
                                <div className="p-4">
                                    <p className="mb-4 text-gray-600">
                                        This section contains the syllabi for business-related courses, including
                                        Bachelor of Business Administration (BBA), Master of Business Administration
                                        (MBA), Accounting and Finance, and Marketing.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <details className="border rounded-md overflow-hidden group">
                                            <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                                <div className="flex items-center">
                                                    <span className="material-symbols-outlined mr-2 text-amber-600">
                                                        school
                                                    </span>
                                                    <h3 className="font-medium">MBA</h3>
                                                </div>
                                                <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                    expand_more
                                                </span>
                                            </summary>
                                            <div className="p-4 space-y-3">
                                                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-semibold">
                                                                MBA101: Strategic Management
                                                            </h4>
                                                            <p className="text-sm text-gray-600 mt-1">
                                                                Analysis of the firm's external and internal environment
                                                                to identify long-term opportunities and threats.
                                                            </p>
                                                        </div>
                                                        <button className="flex items-center space-x-1 bg-amber-50 hover:bg-amber-100 text-amber-700 px-3 py-1 rounded-md transition-colors">
                                                            <span className="material-symbols-outlined text-sm">
                                                                download
                                                            </span>
                                                            <span className="text-sm font-medium">Download PDF</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </details>

                                        <details className="border rounded-md overflow-hidden group">
                                            <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                                <div className="flex items-center">
                                                    <span className="material-symbols-outlined mr-2 text-amber-600">
                                                        account_balance
                                                    </span>
                                                    <h3 className="font-medium">BBA</h3>
                                                </div>
                                                <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                    expand_more
                                                </span>
                                            </summary>
                                            <div className="p-4 space-y-3">
                                                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-semibold">
                                                                BBA101: Organizational Behavior
                                                            </h4>
                                                            <p className="text-sm text-gray-600 mt-1">
                                                                Study of human behavior in organizational settings,
                                                                including individual and group dynamics.
                                                            </p>
                                                        </div>
                                                        <button className="flex items-center space-x-1 bg-amber-50 hover:bg-amber-100 text-amber-700 px-3 py-1 rounded-md transition-colors">
                                                            <span className="material-symbols-outlined text-sm">
                                                                download
                                                            </span>
                                                            <span className="text-sm font-medium">Download PDF</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </details>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button className="flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors">
                                            <span className="material-symbols-outlined mr-1">folder_zip</span>
                                            <span>Download All Business Syllabi</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Humanities & Social Sciences */}
                        <section id="humanities-&-social-sciences" className="mb-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-purple-600 text-white p-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">psychology</span>
                                    <h2 className="text-xl font-semibold">Humanities & Social Sciences</h2>
                                </div>
                                <div className="p-4">
                                    <p className="mb-4 text-gray-600">
                                        This section provides syllabi for subjects like Psychology, Sociology, Political
                                        Science, and Philosophy.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <details className="border rounded-md overflow-hidden group">
                                            <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                                <div className="flex items-center">
                                                    <span className="material-symbols-outlined mr-2 text-purple-600">
                                                        psychology_alt
                                                    </span>
                                                    <h3 className="font-medium">Psychology</h3>
                                                </div>
                                                <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                    expand_more
                                                </span>
                                            </summary>
                                            <div className="p-4 space-y-3">
                                                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-semibold">
                                                                PSY101: Introduction to Psychology
                                                            </h4>
                                                            <p className="text-sm text-gray-600 mt-1">
                                                                Overview of the major areas of psychology, including
                                                                biological, cognitive, developmental, social, and
                                                                clinical perspectives.
                                                            </p>
                                                        </div>
                                                        <button className="flex items-center space-x-1 bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1 rounded-md transition-colors">
                                                            <span className="material-symbols-outlined text-sm">
                                                                download
                                                            </span>
                                                            <span className="text-sm font-medium">Download PDF</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </details>

                                        <details className="border rounded-md overflow-hidden group">
                                            <summary className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                                                <div className="flex items-center">
                                                    <span className="material-symbols-outlined mr-2 text-purple-600">
                                                        groups
                                                    </span>
                                                    <h3 className="font-medium">Sociology</h3>
                                                </div>
                                                <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                    expand_more
                                                </span>
                                            </summary>
                                            <div className="p-4 space-y-3">
                                                <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-semibold">
                                                                SOC101: Sociological Theories
                                                            </h4>
                                                            <p className="text-sm text-gray-600 mt-1">
                                                                Examination of classical and contemporary sociological
                                                                theories and their applications to social issues.
                                                            </p>
                                                        </div>
                                                        <button className="flex items-center space-x-1 bg-purple-50 hover:bg-purple-100 text-purple-700 px-3 py-1 rounded-md transition-colors">
                                                            <span className="material-symbols-outlined text-sm">
                                                                download
                                                            </span>
                                                            <span className="text-sm font-medium">Download PDF</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </details>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button className="flex items-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
                                            <span className="material-symbols-outlined mr-1">folder_zip</span>
                                            <span>Download All Humanities Syllabi</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Law Courses */}
                        <section id="law-courses" className="mb-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-gray-700 text-white p-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2">gavel</span>
                                    <h2 className="text-xl font-semibold">Law Courses</h2>
                                </div>
                                <div className="p-4">
                                    <p className="mb-4 text-gray-600">
                                        This section contains the syllabi for law courses.
                                    </p>

                                    <div className="space-y-3">
                                        <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold">LAW101: Introduction to Law</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Overview of legal systems, legal reasoning, and the structure of
                                                        the legal profession.
                                                    </p>
                                                </div>
                                                <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md transition-colors">
                                                    <span className="material-symbols-outlined text-sm">download</span>
                                                    <span className="text-sm font-medium">Download PDF</span>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="border rounded-md p-4 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h4 className="font-semibold">LAW102: Constitutional Law</h4>
                                                    <p className="text-sm text-gray-600 mt-1">
                                                        Study of constitutional principles, powers of government, and
                                                        individual rights and liberties.
                                                    </p>
                                                </div>
                                                <button className="flex items-center space-x-1 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-md transition-colors">
                                                    <span className="material-symbols-outlined text-sm">download</span>
                                                    <span className="text-sm font-medium">Download PDF</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button className="flex items-center bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors">
                                            <span className="material-symbols-outlined mr-1">folder_zip</span>
                                            <span>Download All Law Syllabi</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>

                {/* Next: "Add a floating help button that opens a support chat" */}
                {/* Next: "Add a 'Recently Updated Syllabi' section highlighting new or modified course syllabi" */}
                {/* Next: "Add a feature to compare syllabi between different courses or semesters" */}
            </div>
    )
}

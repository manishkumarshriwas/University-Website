import React from "react"

export const VirtualTour = () => {
    return (
            <div className="relative w-full h-screen bg-gray-100 text-gray-800 font-sans overflow-y-auto overflow-x-hidden">
                {/* Hero Section */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc1NDkzNjA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                        alt="University Campus Aerial View"
                        className="w-full h-full object-cover opacity-30"
                        keywords="university campus, aerial view, college buildings, education"
                    />
                </div>

                {/* Header */}
                <header className="relative z-10 pt-8 px-6 md:px-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-700 text-center mb-2 animate-fade-in">
                        Virtual Tour
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 text-center italic mb-8 animate-fade-in-delayed">
                        Explore our campus from anywhere.
                    </p>
                </header>

                {/* Main Content */}
                <main className="relative z-10 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
                    {/* 3D Tour Container */}
                    <div className="relative bg-white rounded-xl shadow-xl h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mt-4">
                        {/* Simulated 3D Tour Map */}
                        <div className="relative w-full h-full bg-gray-200 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Campus 3D Map"
                                className="w-full h-full object-cover"
                                keywords="university campus, 3d map, college tour, virtual reality"
                            />

                            {/* Hotspots */}
                            <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 group">
                                <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center cursor-pointer relative hover:scale-110 transition-transform duration-300 animate-pulse">
                                    <span className="material-symbols-outlined text-white">school</span>
                                    <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-3 rounded-lg shadow-lg w-64 transition-opacity duration-300 z-30">
                                        <h3 className="text-primary-700 font-bold mb-1">Main Library</h3>
                                        <p className="text-sm text-gray-600">
                                            Home to over 100,000 books and digital resources, offering quiet study areas
                                            and collaborative workspaces.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute top-1/2 right-1/3 transform -translate-x-1/2 -translate-y-1/2 group z-10">
                                <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center cursor-pointer relative hover:scale-110 transition-transform duration-300 animate-pulse">
                                    <span className="material-symbols-outlined text-white">apartment</span>
                                    <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-3 rounded-lg shadow-lg w-64 transition-opacity duration-300 z-20">
                                        <h3 className="text-primary-700 font-bold mb-1">Student Center</h3>
                                        <p className="text-sm text-gray-600">
                                            The Student Center is a hub for campus life, offering dining options,
                                            recreational activities, and student club spaces.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group z-10">
                                <div className="h-8 w-8 bg-primary-500 rounded-full flex items-center justify-center cursor-pointer relative hover:scale-110 transition-transform duration-300 animate-pulse">
                                    <span className="material-symbols-outlined text-white">fitness_center</span>
                                    <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-3 rounded-lg shadow-lg w-64 transition-opacity duration-300 z-30">
                                        <h3 className="text-primary-700 font-bold mb-1">Sports Complex</h3>
                                        <p className="text-sm text-gray-600">
                                            Home to our Olympic-sized swimming pool and state-of-the-art gymnasium!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Start Tour Button */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                                <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse">
                                    <span className="flex items-center">
                                        <span className="material-symbols-outlined mr-2">play_circle</span>
                                        Start Tour
                                    </span>
                                </button>
                            </div>

                            {/* Tour Controls */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 rounded-full px-4 py-2 flex items-center space-x-4 z-10">
                                <button className="h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300">
                                    <span className="material-symbols-outlined">skip_previous</span>
                                </button>
                                <button className="h-10 w-10 rounded-full bg-primary-500 hover:bg-primary-600 text-white flex items-center justify-center transition-colors duration-300">
                                    <span className="material-symbols-outlined">play_arrow</span>
                                </button>
                                <button className="h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-300">
                                    <span className="material-symbols-outlined">skip_next</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Menu */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <details className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg">
                            <summary className="p-4 cursor-pointer flex items-center justify-between bg-primary-50 hover:bg-primary-100 transition-colors duration-300">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-2">map</span>
                                    <h3 className="font-semibold">Campus Overview</h3>
                                </div>
                                <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                    expand_more
                                </span>
                            </summary>
                            <div className="p-4 bg-white">
                                <p className="text-gray-600 mb-2">
                                    Our campus spans over 200 acres with modern facilities and beautiful green spaces.
                                </p>
                                <p className="text-gray-600">
                                    Founded in 1920, our university has grown to become a leading institution for
                                    research and education.
                                </p>
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg">
                            <summary className="p-4 cursor-pointer flex items-center justify-between bg-primary-50 hover:bg-primary-100 transition-colors duration-300">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-2">apartment</span>
                                    <h3 className="font-semibold">Facilities</h3>
                                </div>
                                <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                    expand_more
                                </span>
                            </summary>
                            <div className="p-4 bg-white">
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-600">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">school</span>
                                        Libraries
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">science</span>
                                        Laboratories
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            fitness_center
                                        </span>
                                        Sports Facilities
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">hotel</span>
                                        Dormitories
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg">
                            <summary className="p-4 cursor-pointer flex items-center justify-between bg-primary-50 hover:bg-primary-100 transition-colors duration-300">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-2">groups</span>
                                    <h3 className="font-semibold">Student Life</h3>
                                </div>
                                <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                    expand_more
                                </span>
                            </summary>
                            <div className="p-4 bg-white">
                                <ul className="space-y-2">
                                    <li className="flex items-center text-gray-600">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            diversity_3
                                        </span>
                                        Student Organizations
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">event</span>
                                        Events
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            psychology
                                        </span>
                                        Counseling Services
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="material-symbols-outlined mr-2 text-primary-500">
                                            restaurant
                                        </span>
                                        Dining Options
                                    </li>
                                </ul>
                            </div>
                        </details>

                        <details className="bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg">
                            <summary className="p-4 cursor-pointer flex items-center justify-between bg-primary-50 hover:bg-primary-100 transition-colors duration-300">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-primary-600 mr-2">forum</span>
                                    <h3 className="font-semibold">Virtual Assistant</h3>
                                </div>
                                <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                    expand_more
                                </span>
                            </summary>
                            <div className="p-4 bg-white">
                                <p className="text-gray-600 mb-3">
                                    Have questions about our campus? Our virtual assistant is here to help!
                                </p>
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Ask a question..."
                                        className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                    />
                                    <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-r-lg transition-colors duration-300">
                                        <span className="material-symbols-outlined">send</span>
                                    </button>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 mb-16 bg-primary-100 rounded-xl p-6 shadow-md text-center">
                        <h2 className="text-2xl font-bold text-primary-800 mb-3">Ready to Visit In Person?</h2>
                        <p className="text-gray-600 mb-4">
                            Experience our campus firsthand and see what makes our university special.
                        </p>
                        <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                            Schedule an In-Person Tour
                        </button>
                    </div>
                </main>

                {/* Floating Feedback Button */}
                <div className="absolute bottom-4 right-4 z-30">
                    <button className="bg-white hover:bg-gray-100 text-primary-600 font-semibold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center">
                        <span className="material-symbols-outlined mr-1">rate_review</span>
                        Rate Your Tour
                    </button>
                </div>

                {/* Next: "Add audio controls for tour narration" */}
                {/* Next: "Add a campus map legend to explain hotspot icons" */}
                {/* Next: "Add 360-degree panorama views for key locations" */}
            </div>
    )
}

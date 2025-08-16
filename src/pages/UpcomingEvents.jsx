import React from "react"

export const UpcomingEvents = () => {
    return (
            <div className="bg-gray-50 min-h-screen p-4 md:p-8">
                {/* Header Section */}
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 font-serif tracking-tight">
                        Upcoming Events
                    </h1>
                    <p className="text-xl text-gray-600 italic font-light">Join us for events and conferences!</p>
                </header>

                {/* Filter Section */}
                <div className="mb-8 overflow-x-auto">
                    <div className="flex space-x-2 pb-2 md:justify-center">
                        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full font-medium transition transform hover:scale-105 shadow-md">
                            <span className="material-symbols-outlined mr-2 text-sm">school</span>
                            All
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full font-medium transition transform hover:scale-105 hover:bg-gray-100 shadow-sm">
                            <span className="material-symbols-outlined mr-2 text-sm">menu_book</span>
                            Academic
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full font-medium transition transform hover:scale-105 hover:bg-gray-100 shadow-sm">
                            <span className="material-symbols-outlined mr-2 text-sm">biotech</span>
                            Research
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full font-medium transition transform hover:scale-105 hover:bg-gray-100 shadow-sm">
                            <span className="material-symbols-outlined mr-2 text-sm">diversity_3</span>
                            Campus Life
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full font-medium transition transform hover:scale-105 hover:bg-gray-100 shadow-sm">
                            <span className="material-symbols-outlined mr-2 text-sm">groups</span>
                            Student Orgs
                        </button>
                        <button className="flex items-center px-4 py-2 bg-white text-gray-700 rounded-full font-medium transition transform hover:scale-105 hover:bg-gray-100 shadow-sm">
                            <span className="material-symbols-outlined mr-2 text-sm">handshake</span>
                            Networking
                        </button>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {/* Event 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02] group">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/20/cambridge.JPG?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5fGVufDB8fHx8MTc1NDkzMTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Spring Open House"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                keywords="university, campus tour, spring event"
                            />
                            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                Academic
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Spring Open House</h3>
                            <p className="text-gray-700 text-sm mb-3">March 15th, 2023 | 10:00 AM</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Join us for a tour of our beautiful campus and meet with faculty members, staff, and
                                current students.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                                Register Now
                            </button>
                        </div>
                    </div>

                    {/* Event 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02] group">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87"
                                alt="Research Symposium"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                keywords="university, research, symposium, academics"
                            />
                            <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                                Research
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Research Symposium</h3>
                            <p className="text-gray-700 text-sm mb-3">April 5th, 2023 | 9:00 AM - 4:00 PM</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Present your research findings and network with fellow researchers and industry
                                professionals.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02] group">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678"
                                alt="Cultural Festival"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                keywords="university, cultural, festival, student life"
                            />
                            <div className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                                Campus Life
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">International Cultural Festival</h3>
                            <p className="text-gray-700 text-sm mb-3">May 10th, 2023 | 12:00 PM - 8:00 PM</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Celebrate diversity through music, dance, art, and cuisine from around the world.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                                Register Now
                            </button>
                        </div>
                    </div>

                    {/* Event 4 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02] group">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHx1bml2ZXJzaXR5fGVufDB8fHx8MTc1NDkzMTQ2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Career Fair"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                keywords="university, career fair, networking, jobs"
                            />
                            <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                                Networking
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Summer Career Fair</h3>
                            <p className="text-gray-700 text-sm mb-3">June 2nd, 2023 | 10:00 AM - 3:00 PM</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Meet with over 50 potential employers and discover internship and job opportunities.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                                Register Now
                            </button>
                        </div>
                    </div>

                    {/* Event 5 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02] group">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                                alt="Leadership Workshop"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                keywords="university, leadership, workshop, training"
                            />
                            <div className="absolute top-2 left-2 bg-teal-600 text-white text-xs px-2 py-1 rounded-full">
                                Workshops
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Student Leadership Workshop</h3>
                            <p className="text-gray-700 text-sm mb-3">June 15th, 2023 | 1:00 PM - 5:00 PM</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Develop essential leadership skills through interactive sessions and team-building
                                activities.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Event 6 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02] group">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df"
                                alt="Alumni Reunion"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                keywords="university, alumni, reunion, networking"
                            />
                            <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                                Networking
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Annual Alumni Reunion</h3>
                            <p className="text-gray-700 text-sm mb-3">July 8th, 2023 | 6:00 PM - 10:00 PM</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Reconnect with former classmates and professors while enjoying a night of celebration.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                                Register Now
                            </button>
                        </div>
                    </div>

                    {/* Event 7 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02] group">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46"
                                alt="Student Club Fair"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                keywords="university, student clubs, organizations, campus life"
                            />
                            <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded-full">
                                Student Orgs
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Student Club Fair</h3>
                            <p className="text-gray-700 text-sm mb-3">August 28th, 2023 | 11:00 AM - 3:00 PM</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Explore the diverse range of student clubs and organizations available on campus.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Event 8 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md border-2 border-gray-100 transform transition duration-300 hover:shadow-lg hover:scale-[1.02] group">
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                                alt="Technology Conference"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                keywords="university, technology, conference, academic"
                            />
                            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                                Academic
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Emerging Technology Conference</h3>
                            <p className="text-gray-700 text-sm mb-3">September 12th, 2023 | 9:00 AM - 5:00 PM</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Learn about the latest advancements in technology from industry experts and researchers.
                            </p>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                                Register Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mb-12">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 mr-2 text-gray-500 hover:bg-gray-100 transition">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white mr-2 hover:bg-blue-700 transition">
                        1
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 mr-2 text-gray-700 hover:bg-gray-100 transition">
                        2
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 mr-2 text-gray-700 hover:bg-gray-100 transition">
                        3
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>

                {/* CTA Section */}
                <div className="text-center mb-12">
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium mx-2 transform transition hover:scale-105 hover:bg-blue-700 shadow-md">
                        View All Events
                    </button>
                    <button className="bg-white text-blue-600 border border-blue-600 px-8 py-3 rounded-md font-medium mx-2 transform transition hover:scale-105 hover:bg-blue-50 shadow-sm">
                        Submit an Event
                    </button>
                </div>

                {/* Footer */}
                <footer className="text-center text-gray-600 text-sm mt-12 border-t border-gray-200 pt-6">
                    <p className="mb-2">
                        For event inquiries:{" "}
                        <a href="mailto:events@university.edu" className="text-blue-600 hover:underline">
                            events@university.edu
                        </a>{" "}
                        | (555) 123-4567
                    </p>
                    <div className="flex justify-center space-x-4 mt-3">
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                            <i className="fa-brands fa-facebook text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                            <i className="fa-brands fa-twitter text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                            <i className="fa-brands fa-instagram text-xl"></i>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                            <i className="fa-brands fa-linkedin text-xl"></i>
                        </a>
                    </div>
                    
                </footer>

                {/* Next: "Add event countdown timer components" */}
                {/* Next: "Add a search bar at the top to find events by keyword" */}
                {/* Next: "Add a calendar view toggle option alongside the grid view" */}
            </div>
    )
}

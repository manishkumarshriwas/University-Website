import React from "react"

export const NewsAndEvents = () => {
    return (
            <div className="font-sans bg-white">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white shadow-md"></header>

                <main>
                    {/* Hero Section */}
                    <section className="relative h-[500px] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                            alt="University Campus"
                            className="w-full h-full object-cover"
                            keywords="university campus, education, architecture, academic building"
                        />
                        <div className="absolute inset-0 bg-[#001F4D]/60 flex flex-col justify-center items-center px-4 animate-fade-in">
                            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-serif text-center mb-2">
                                University News & Events
                            </h1>
                            <div className="h-1 w-20 bg-[#FFD700] mb-6"></div>
                            <p className="text-white text-xl md:text-2xl text-center max-w-2xl mb-8">
                                Stay informed about the latest happenings and upcoming activities at Prestigious
                                University
                            </p>
                            <button className="bg-[#800000] hover:bg-[#600000] text-white px-6 py-3 rounded transition-all duration-300 transform hover:scale-105 flex items-center">
                                <span>Subscribe for Updates</span>
                                <span className="material-symbols-outlined ml-2">arrow_forward</span>
                            </button>
                        </div>
                    </section>

                    {/* Latest News */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center mb-10">
                                <span className="material-symbols-outlined text-[#800000] mr-2">newspaper</span>
                                <h2 className="text-3xl font-serif text-[#001F4D]">Latest News</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* News Card 1 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80"
                                        alt="AI Research Center"
                                        className="w-full h-48 object-cover"
                                        keywords="artificial intelligence, research center, technology, innovation"
                                    />
                                    <div className="p-6">
                                        <span className="text-sm text-gray-500">August 10, 2025</span>
                                        <h3 className="mt-2 text-xl font-bold text-[#001F4D]">
                                            University launches new AI research center
                                        </h3>
                                        <p className="mt-3 text-gray-600">
                                            The new center will focus on ethical AI development and applications in
                                            healthcare, bringing together experts from computer science, medicine, and
                                            philosophy departments.
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center mt-4 text-[#800000] hover:text-[#600000] transition-colors duration-300"
                                        >
                                            Read More
                                            <span className="material-symbols-outlined ml-1 text-sm">east</span>
                                        </a>
                                    </div>
                                </div>

                                {/* News Card 2 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80"
                                        alt="Nobel Prize Winner"
                                        className="w-full h-48 object-cover"
                                        keywords="scientist, research, award, academic achievement"
                                    />
                                    <div className="p-6">
                                        <span className="text-sm text-gray-500">July 28, 2025</span>
                                        <h3 className="mt-2 text-xl font-bold text-[#001F4D]">
                                            Alumni spotlight: Dr. Jane Doe wins Nobel Prize
                                        </h3>
                                        <p className="mt-3 text-gray-600">
                                            Dr. Jane Doe ('05) has been awarded the Nobel Prize in Chemistry for her
                                            groundbreaking work on sustainable energy catalysts, making her our third
                                            Nobel laureate.
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center mt-4 text-[#800000] hover:text-[#600000] transition-colors duration-300"
                                        >
                                            Read More
                                            <span className="material-symbols-outlined ml-1 text-sm">east</span>
                                        </a>
                                    </div>
                                </div>

                                {/* News Card 3 */}
                                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=250&q=80"
                                        alt="Hybrid Learning"
                                        className="w-full h-48 object-cover"
                                        keywords="education, classroom, student, learning, technology"
                                    />
                                    <div className="p-6">
                                        <span className="text-sm text-gray-500">July 15, 2025</span>
                                        <h3 className="mt-2 text-xl font-bold text-[#001F4D]">
                                            Fall semester to begin with hybrid learning options
                                        </h3>
                                        <p className="mt-3 text-gray-600">
                                            The university will continue to offer flexible learning arrangements with
                                            both in-person and virtual options available for most courses to accommodate
                                            diverse student needs.
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center mt-4 text-[#800000] hover:text-[#600000] transition-colors duration-300"
                                        >
                                            Read More
                                            <span className="material-symbols-outlined ml-1 text-sm">east</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Upcoming Events */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center mb-10">
                                <span className="material-symbols-outlined text-[#800000] mr-2">event</span>
                                <h2 className="text-3xl font-serif text-[#001F4D]">Upcoming Events</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {/* Event Card 1 */}
                                <div className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-[#FFD700]">
                                    <div className="flex items-start">
                                        <div className="bg-[#001F4D] text-white rounded p-3 text-center mr-4 w-16">
                                            <span className="block text-xl font-bold">15</span>
                                            <span className="block text-sm">SEP</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-[#800000]">
                                                Annual Convocation Ceremony
                                            </h3>
                                            <p className="text-gray-600 mt-2">
                                                A ceremony to celebrate the academic achievements of our graduating
                                                students.
                                            </p>
                                            <div className="mt-4 flex items-center text-gray-600">
                                                <span className="material-symbols-outlined mr-1 text-sm">schedule</span>
                                                <span>10:00 AM - 1:00 PM</span>
                                            </div>
                                            <div className="mt-2 flex items-center text-gray-600">
                                                <span className="material-symbols-outlined mr-1 text-sm">
                                                    location_on
                                                </span>
                                                <span>Main Auditorium</span>
                                            </div>
                                            <button className="mt-4 bg-[#001F4D] hover:bg-[#00132e] text-white px-4 py-2 rounded-md transition-colors duration-300">
                                                RSVP
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Card 2 */}
                                <div className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-[#FFD700]">
                                    <div className="flex items-start">
                                        <div className="bg-[#001F4D] text-white rounded p-3 text-center mr-4 w-16">
                                            <span className="block text-xl font-bold">22</span>
                                            <span className="block text-sm">SEP</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-[#800000]">
                                                Guest Lecture: Climate Change and Policy
                                            </h3>
                                            <p className="text-gray-600 mt-2">
                                                Distinguished speaker Dr. Robert Smith will discuss climate policy
                                                implications.
                                            </p>
                                            <div className="mt-4 flex items-center text-gray-600">
                                                <span className="material-symbols-outlined mr-1 text-sm">schedule</span>
                                                <span>3:00 PM - 5:00 PM</span>
                                            </div>
                                            <div className="mt-2 flex items-center text-gray-600">
                                                <span className="material-symbols-outlined mr-1 text-sm">
                                                    location_on
                                                </span>
                                                <span>Science Building, Room 105</span>
                                            </div>
                                            <button className="mt-4 bg-[#001F4D] hover:bg-[#00132e] text-white px-4 py-2 rounded-md transition-colors duration-300">
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Card 3 */}
                                <div className="bg-gray-50 rounded-lg p-6 shadow-md transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-[#FFD700]">
                                    <div className="flex items-start">
                                        <div className="bg-[#001F4D] text-white rounded p-3 text-center mr-4 w-16">
                                            <span className="block text-xl font-bold">10-12</span>
                                            <span className="block text-sm">OCT</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-[#800000]">
                                                Alumni Reunion Weekend
                                            </h3>
                                            <p className="text-gray-600 mt-2">
                                                Join fellow alumni for a weekend of networking, reminiscing, and
                                                celebrating our alma mater.
                                            </p>
                                            <div className="mt-4 flex items-center text-gray-600">
                                                <span className="material-symbols-outlined mr-1 text-sm">schedule</span>
                                                <span>All Day</span>
                                            </div>
                                            <div className="mt-2 flex items-center text-gray-600">
                                                <span className="material-symbols-outlined mr-1 text-sm">
                                                    location_on
                                                </span>
                                                <span>Various Campus Locations</span>
                                            </div>
                                            <button className="mt-4 bg-[#001F4D] hover:bg-[#00132e] text-white px-4 py-2 rounded-md transition-colors duration-300">
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 text-center">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-[#800000] hover:text-[#600000] font-medium transition-colors duration-300"
                                >
                                    View All Events
                                    <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Press Releases & Media Contacts */}
                    <section className="py-16 bg-gray-50">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                                {/* Press Releases */}
                                <div>
                                    <div className="flex items-center mb-6">
                                        <span className="material-symbols-outlined text-[#800000] mr-2">feed</span>
                                        <h2 className="text-3xl font-serif text-[#001F4D]">Press Releases</h2>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="border-b border-gray-200 pb-4">
                                            <a
                                                href="#"
                                                className="block text-lg font-medium text-[#001F4D] hover:text-[#800000] transition-colors duration-300"
                                            >
                                                University Receives $25M Grant for Clean Energy Research
                                            </a>
                                            <span className="text-sm text-gray-500">August 5, 2025</span>
                                        </div>
                                        <div className="border-b border-gray-200 pb-4">
                                            <a
                                                href="#"
                                                className="block text-lg font-medium text-[#001F4D] hover:text-[#800000] transition-colors duration-300"
                                            >
                                                Prestigious University Rises in Global Rankings
                                            </a>
                                            <span className="text-sm text-gray-500">July 30, 2025</span>
                                        </div>
                                        <div className="border-b border-gray-200 pb-4">
                                            <a
                                                href="#"
                                                className="block text-lg font-medium text-[#001F4D] hover:text-[#800000] transition-colors duration-300"
                                            >
                                                New Partnership Established with Industry Leader
                                            </a>
                                            <span className="text-sm text-gray-500">July 22, 2025</span>
                                        </div>
                                        <div className="border-b border-gray-200 pb-4">
                                            <a
                                                href="#"
                                                className="block text-lg font-medium text-[#001F4D] hover:text-[#800000] transition-colors duration-300"
                                            >
                                                University Breaks Ground on Sustainable Student Housing
                                            </a>
                                            <span className="text-sm text-gray-500">July 15, 2025</span>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-flex items-center text-[#800000] hover:text-[#600000] font-medium transition-colors duration-300"
                                        >
                                            View All Press Releases
                                            <span className="material-symbols-outlined ml-1">arrow_forward</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Media Contacts */}
                                <div>
                                    <div className="flex items-center mb-6">
                                        <span className="material-symbols-outlined text-[#800000] mr-2">
                                            contact_support
                                        </span>
                                        <h2 className="text-3xl font-serif text-[#001F4D]">Media Contacts</h2>
                                    </div>
                                    <div className="bg-white p-6 rounded-lg shadow-md">
                                        <h3 className="text-xl font-serif text-[#800000] mb-4">
                                            Office of Media Relations
                                        </h3>

                                        <div className="space-y-4">
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#001F4D] mr-3">
                                                    person
                                                </span>
                                                <div>
                                                    <p className="font-medium">Sarah Johnson</p>
                                                    <p className="text-gray-600">Director of Media Relations</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#001F4D] mr-3">
                                                    mail
                                                </span>
                                                <div>
                                                    <p>media@university.edu</p>
                                                </div>
                                            </div>

                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-[#001F4D] mr-3">
                                                    call
                                                </span>
                                                <div>
                                                    <p>(555) 123-4567</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex items-center space-x-4">
                                            <a
                                                href="#"
                                                className="bg-[#001F4D] text-white rounded-full p-2 transition-transform hover:scale-110"
                                            >
                                                <i className="fa-brands fa-twitter"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="bg-[#001F4D] text-white rounded-full p-2 transition-transform hover:scale-110"
                                            >
                                                <i className="fa-brands fa-linkedin"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="bg-[#001F4D] text-white rounded-full p-2 transition-transform hover:scale-110"
                                            >
                                                <i className="fa-brands fa-facebook"></i>
                                            </a>
                                        </div>

                                        <button className="mt-6 w-full bg-[#800000] hover:bg-[#600000] text-white px-4 py-3 rounded-md transition-colors duration-300 flex items-center justify-center">
                                            <span className="material-symbols-outlined mr-2">download</span>
                                            Download Press Kit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Social Media Feed */}
                    <section className="py-16 bg-white">
                        <div className="container mx-auto px-4">
                            <div className="flex items-center mb-10">
                                <span className="material-symbols-outlined text-[#800000] mr-2">tag</span>
                                <h2 className="text-3xl font-serif text-[#001F4D]">Connect With Us</h2>
                            </div>

                            <div className="overflow-x-auto pb-4">
                                <div className="flex space-x-6 min-w-max">
                                    {/* Social post 1 */}
                                    <div className="bg-gray-50 rounded-lg shadow-md w-80 overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                        <div className="p-4 border-b border-gray-200 flex items-center">
                                            <img
                                                src="https://placehold.co/40x40?text=Uni"
                                                alt="University Logo"
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                            <div>
                                                <p className="font-medium">@UniversityOfficial</p>
                                                <p className="text-sm text-gray-500">2 hours ago</p>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="mb-4">
                                                Excited to announce our new partnership with @TechCompany to advance
                                                research in quantum computing! #Innovation #Research
                                            </p>
                                            <img
                                                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                                alt="Partnership announcement"
                                                className="w-full h-40 object-cover rounded"
                                                keywords="partnership, innovation, technology, quantum computing"
                                            />
                                        </div>
                                        <div className="p-4 flex items-center justify-between text-gray-500">
                                            <div className="flex items-center space-x-4">
                                                <button className="flex items-center hover:text-[#800000] transition-colors duration-300">
                                                    <span className="material-symbols-outlined mr-1">
                                                        favorite_border
                                                    </span>
                                                    <span>24</span>
                                                </button>
                                                <button className="flex items-center hover:text-[#800000] transition-colors duration-300">
                                                    <span className="material-symbols-outlined mr-1">comment</span>
                                                    <span>3</span>
                                                </button>
                                            </div>
                                            <button className="hover:text-[#800000] transition-colors duration-300">
                                                <span className="material-symbols-outlined">share</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Social post 2 */}
                                    <div className="bg-gray-50 rounded-lg shadow-md w-80 overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                        <div className="p-4 border-b border-gray-200 flex items-center">
                                            <img
                                                src="https://placehold.co/40x40?text=Uni"
                                                alt="University Logo"
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                            <div>
                                                <p className="font-medium">@UniversityOfficial</p>
                                                <p className="text-sm text-gray-500">1 day ago</p>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="mb-4">
                                                Our campus is looking beautiful as we prepare for the fall semester! We
                                                can't wait to welcome students back. #CampusLife
                                            </p>
                                            <img
                                                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
                                                alt="Campus in autumn"
                                                className="w-full h-40 object-cover rounded"
                                                keywords="campus, university, autumn, fall, education"
                                            />
                                        </div>
                                        <div className="p-4 flex items-center justify-between text-gray-500">
                                            <div className="flex items-center space-x-4">
                                                <button className="flex items-center hover:text-[#800000] transition-colors duration-300">
                                                    <span className="material-symbols-outlined mr-1">
                                                        favorite_border
                                                    </span>
                                                    <span>56</span>
                                                </button>
                                                <button className="flex items-center hover:text-[#800000] transition-colors duration-300">
                                                    <span className="material-symbols-outlined mr-1">comment</span>
                                                    <span>12</span>
                                                </button>
                                            </div>
                                            <button className="hover:text-[#800000] transition-colors duration-300">
                                                <span className="material-symbols-outlined">share</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Social post 3 */}
                                    <div className="bg-gray-50 rounded-lg shadow-md w-80 overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                                        <div className="p-4 border-b border-gray-200 flex items-center">
                                            <img
                                                src="https://placehold.co/40x40?text=Uni"
                                                alt="University Logo"
                                                className="w-10 h-10 rounded-full mr-3"
                                            />
                                            <div>
                                                <p className="font-medium">@UniversityOfficial</p>
                                                <p className="text-sm text-gray-500">3 days ago</p>
                                            </div>
                                        </div>
                                        <div className="p-4">
                                            <p className="mb-4">
                                                Congratulations to our women's soccer team for winning the national
                                                championship! #GoUniversity #Champions
                                            </p>
                                            <img
                                                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzb2NjZXJ8ZW58MHx8fHwxNzU0OTQzNjc2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                                                alt="Women's soccer team celebration"
                                                className="w-full h-40 object-cover rounded"
                                                keywords="soccer, championship, celebration, sports, team"
                                            />
                                        </div>
                                        <div className="p-4 flex items-center justify-between text-gray-500">
                                            <div className="flex items-center space-x-4">
                                                <button className="flex items-center hover:text-[#800000] transition-colors duration-300">
                                                    <span className="material-symbols-outlined mr-1">
                                                        favorite_border
                                                    </span>
                                                    <span>128</span>
                                                </button>
                                                <button className="flex items-center hover:text-[#800000] transition-colors duration-300">
                                                    <span className="material-symbols-outlined mr-1">comment</span>
                                                    <span>37</span>
                                                </button>
                                            </div>
                                            <button className="hover:text-[#800000] transition-colors duration-300">
                                                <span className="material-symbols-outlined">share</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <div className="flex justify-center space-x-6">
                                    <a
                                        href="#"
                                        className="bg-[#001F4D] hover:bg-[#00132e] text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
                                    >
                                        <i className="fa-brands fa-twitter mr-2"></i>
                                        <span>Twitter</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-[#001F4D] hover:bg-[#00132e] text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
                                    >
                                        <i className="fa-brands fa-instagram mr-2"></i>
                                        <span>Instagram</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="bg-[#001F4D] hover:bg-[#00132e] text-white px-4 py-2 rounded-md transition-colors duration-300 flex items-center"
                                    >
                                        <i className="fa-brands fa-linkedin mr-2"></i>
                                        <span>LinkedIn</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
            </div>
    )
}

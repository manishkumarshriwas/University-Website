import React from "react"

export const AboutUniversity = () => {
    return (
            <div className="bg-white min-h-screen">
                {/* Header Section */}
                <header className="bg-primary-800 text-white py-16" style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Our University</h1>
                        <p className="text-xl opacity-90 max-w-3xl">
                            Excellence in education, research, and community engagement since 1890
                        </p>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-12">
                    {/* University History */}
                    <section id="history" className="mb-16">
                        <div className="border-l-4 border-primary-600 pl-4">
                            <h2 className="text-3xl font-bold mb-2">Our History</h2>
                            <p className="text-neutral-500">A legacy of excellence spanning over a century</p>
                        </div>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <p className="text-lg">
                                    Founded in 1890, our university has a long-standing tradition of academic excellence
                                    and innovation. From humble beginnings as a small liberal arts college, it has grown
                                    into a world-renowned research institution committed to advancing knowledge and
                                    serving the community.
                                </p>
                                <p className="text-lg">
                                    Our campus has witnessed countless milestones — pioneering research breakthroughs,
                                    inspiring alumni achievements, and transformative educational programs shaping
                                    future leaders.
                                </p>
                            </div>
                            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
                                <img
                                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Historical university building"
                                    className="w-full h-auto"
                                    keywords="historic university, old campus building, university architecture, college history"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex overflow-x-auto space-x-4 py-4">
                            <div className="flex-none w-64 bg-neutral-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                                <p className="font-bold">1890</p>
                                <p>University founding</p>
                            </div>
                            <div className="flex-none w-64 bg-neutral-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                                <p className="font-bold">1925</p>
                                <p>First research center established</p>
                            </div>
                            <div className="flex-none w-64 bg-neutral-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                                <p className="font-bold">1967</p>
                                <p>Campus expansion</p>
                            </div>
                            <div className="flex-none w-64 bg-neutral-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                                <p className="font-bold">2005</p>
                                <p>International recognition award</p>
                            </div>
                            <div className="flex-none w-64 bg-neutral-50 p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                                <p className="font-bold">2020</p>
                                <p>Modern research complex completed</p>
                            </div>
                        </div>
                    </section>

                    {/* Mission and Vision */}
                    <section id="mission-vision" className="mb-16 bg-neutral-50 p-8 rounded-xl">
                        <div className="border-l-4 border-primary-600 pl-4 mb-8">
                            <h2 className="text-3xl font-bold mb-2">Mission & Vision</h2>
                            <p className="text-neutral-500">Guiding principles that inspire our journey</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2 text-primary-600">
                                        location_searching
                                    </span>
                                    Mission
                                </h3>
                                <p className="text-lg">
                                    To foster a diverse and inclusive academic community dedicated to discovery,
                                    creativity, and critical thinking. We aim to empower students and faculty to make
                                    meaningful contributions to society through interdisciplinary scholarship and public
                                    engagement.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold mb-4 flex items-center">
                                    <span className="material-symbols-outlined mr-2 text-primary-600">visibility</span>
                                    Vision
                                </h3>
                                <p className="text-lg">
                                    To be a global leader in higher education recognized for innovative teaching,
                                    cutting-edge research, and community impact, nurturing lifelong learners and
                                    responsible global citizens.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Leadership Team */}
                    <section id="leadership" className="mb-16">
                        <div className="border-l-4 border-primary-600 pl-4 mb-8">
                            <h2 className="text-3xl font-bold mb-2">Leadership Team</h2>
                            <p className="text-neutral-500">
                                Meet the visionary leaders guiding our university's journey
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                                    alt="Dr. Jane Smith"
                                    className="w-full h-64 object-cover"
                                    keywords="female university president, academic leader, professional woman"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Dr. Jane Smith</h3>
                                    <p className="text-primary-600 font-medium">President</p>
                                    <p className="mt-2">
                                        With over 25 years of academic leadership experience, Dr. Smith is committed to
                                        advancing excellence, equity, and sustainability across all university
                                        operations.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                    alt="Prof. Rahul Sen"
                                    className="w-full h-64 object-cover"
                                    keywords="university chancellor, academic leader, professor"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Prof. Rahul Sen</h3>
                                    <p className="text-primary-600 font-medium">Chancellor</p>
                                    <p className="mt-2">
                                        A renowned scholar and advocate for interdisciplinary research, Prof. Sen
                                        champions collaborative innovation and global partnerships.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
                                <img
                                    src="https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                                    alt="Dean Maria Lopez"
                                    className="w-full h-64 object-cover"
                                    keywords="university dean, arts and sciences, academic leader"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Dean Maria Lopez</h3>
                                    <p className="text-primary-600 font-medium">Dean of Arts & Sciences</p>
                                    <p className="mt-2">
                                        Under Dean Lopez's guidance, the faculty and students thrive in an
                                        intellectually stimulating environment that balances tradition and modernity.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                    alt="Dean Ahmed Khan"
                                    className="w-full h-64 object-cover"
                                    keywords="engineering dean, academic leader, university administrator"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-bold">Dean Ahmed Khan</h3>
                                    <p className="text-primary-600 font-medium">Dean of Engineering</p>
                                    <p className="mt-2">
                                        Focused on pioneering technological advancements, Dean Khan fosters a culture of
                                        creativity and entrepreneurship.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Campus Gallery */}
                    <section id="campus" className="mb-16">
                        <div className="border-l-4 border-primary-600 pl-4 mb-8">
                            <h2 className="text-3xl font-bold mb-2">Campus Gallery & Maps</h2>
                            <p className="text-neutral-500">Explore our beautiful campus</p>
                        </div>

                        <p className="text-lg mb-6">
                            Explore our beautiful campus through the gallery showcasing historic buildings, modern
                            research facilities, vibrant student life, and scenic green spaces. Interactive maps provide
                            detailed information about academic buildings, residence halls, libraries, and recreational
                            areas to help visitors and new students navigate our grounds with ease.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="relative overflow-hidden rounded-lg shadow-md group h-64">
                                <img
                                    src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                                    alt="Campus main building"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="university campus, main building, campus architecture"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <p className="text-white p-4 font-medium">Main Administration Building</p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group h-64">
                                <img
                                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80"
                                    alt="University library"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="university library, campus library, academic resources"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <p className="text-white p-4 font-medium">Central Library</p>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md group h-64">
                                <img
                                    src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                    alt="Research center"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    keywords="university research center, campus facilities, science building"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <p className="text-white p-4 font-medium">Research Complex</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">Interactive Campus Map</h3>
                                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                                    <span className="material-symbols-outlined mr-1">open_in_new</span>
                                    View Full Map
                                </button>
                            </div>
                            <div className="aspect-video bg-neutral-100 rounded-lg relative overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                                    alt="Campus map"
                                    className="w-full h-full object-cover"
                                    keywords="university campus map, campus layout, navigation"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                                    <p className="font-medium">Map Legend</p>
                                    <div className="mt-2 space-y-1 text-sm">
                                        <div className="flex items-center">
                                            <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                                            <p>Academic Buildings</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                                            <p>Green Spaces</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                                            <p>Residence Halls</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
                                            <p>Facilities & Services</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Accreditation and Rankings */}
                    <section id="accreditation" className="mb-16">
                        <div className="border-l-4 border-primary-600 pl-4 mb-8">
                            <h2 className="text-3xl font-bold mb-2">Accreditation & Rankings</h2>
                            <p className="text-neutral-500">Recognition of our commitment to excellence</p>
                        </div>

                        <p className="text-lg mb-6">
                            Our university is fully accredited by the National Higher Education Commission and holds
                            memberships with prestigious academic organizations worldwide. Our commitment to quality
                            education and research excellence is reflected in numerous recognitions:
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-4xl mr-3">
                                        analytics
                                    </span>
                                    <h3 className="text-xl font-bold">Top 50 Nationally</h3>
                                </div>
                                <p>
                                    Ranked among the top 50 universities nationally for research output and academic
                                    excellence.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-4xl mr-3">
                                        military_tech
                                    </span>
                                    <h3 className="text-xl font-bold">Leading Programs</h3>
                                </div>
                                <p>
                                    Recognized as a leader in social sciences, engineering, and health sciences
                                    programs.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg border border-neutral-200 p-6 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <span className="material-symbols-outlined text-primary-600 text-4xl mr-3">
                                        park
                                    </span>
                                    <h3 className="text-xl font-bold">Campus Environment</h3>
                                </div>
                                <p>
                                    Awarded "Best Campus Environment" for three consecutive years for our facilities and
                                    atmosphere.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 bg-neutral-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4">Accrediting Bodies</h3>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center bg-white px-4 py-3 rounded border border-neutral-200">
                                    <span className="material-symbols-outlined mr-2">verified</span>
                                    <span>National Higher Education Commission</span>
                                </div>
                                <div className="flex items-center bg-white px-4 py-3 rounded border border-neutral-200">
                                    <span className="material-symbols-outlined mr-2">verified</span>
                                    <span>International Academic Council</span>
                                </div>
                                <div className="flex items-center bg-white px-4 py-3 rounded border border-neutral-200">
                                    <span className="material-symbols-outlined mr-2">verified</span>
                                    <span>Global Education Standards Board</span>
                                </div>
                                <div className="flex items-center bg-white px-4 py-3 rounded border border-neutral-200">
                                    <span className="material-symbols-outlined mr-2">verified</span>
                                    <span>Professional Engineering Consortium</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Call to Action */}
                <section className="bg-primary-700 text-white py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-6">Join Our Academic Community</h2>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Discover how our university can help you achieve your academic and professional goals
                            through excellence in education, research, and innovation.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="bg-white text-primary-700 hover:bg-neutral-100 px-6 py-3 rounded-lg font-bold transition-colors">
                                Apply Now
                            </button>
                            <button className="bg-primary-600 hover:bg-primary-800 border border-white px-6 py-3 rounded-lg font-bold transition-colors">
                                Schedule a Visit
                            </button>
                        </div>
                    </div>
                </section>

                {/* Footer */}

                {/* Next: "Add virtual tour section with 360° campus views" */}
            </div>
    )
}

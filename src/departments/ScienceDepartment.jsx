import React from "react"

export const ScienceDepartment = () => {
    return (
        <div id="webcrumbs">
            <div className="min-h-screen bg-gray-50">
                {/* Header Section */}
                <header className="bg-white shadow-md"></header>

                {/* Banner Section */}
                <section className="relative h-[60vh] overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                        alt="Modern Science Laboratory"
                        className="w-full h-full object-cover brightness-75"
                        keywords="science laboratory, research facility, microscope, scientific equipment"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-8 md:px-16">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            Department of Science
                        </h1>
                        <p className="text-xl md:text-2xl text-white max-w-2xl">
                            Pioneering discovery in the natural world through innovative research and teaching.
                        </p>
                    </div>
                </section>

                {/* Department Overview */}
                <section className="py-16 px-4 md:px-8 container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Department Overview</h2>
                        <p className="text-lg mb-6 leading-relaxed">
                            The Department of Science at Northridge University offers an integrated approach to
                            understanding the natural world through the disciplines of Physics, Chemistry, Biology, and
                            Environmental Science. Our programs provide students with rigorous academic training,
                            exposure to cutting-edge research, and access to state-of-the-art laboratories and
                            facilities.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Our faculty members are leading experts in their fields, and our department is home to
                            advanced research projects that push the boundaries of scientific knowledge. With a
                            combination of theoretical learning and hands-on experience, we prepare students to tackle
                            global challenges in science, technology, and the environment.
                        </p>
                    </div>
                </section>

                {/* Academic Programs */}
                <section className="py-16 px-4 md:px-8 bg-gray-100">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Academic Programs</h2>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-8 border-b border-primary-300 pb-2">
                                Undergraduate Programs
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-primary-700 py-4 px-6">
                                        <h4 className="text-xl font-bold text-white">B.Sc. in Physics</h4>
                                        <p className="text-white/80">Duration: 3 Years</p>
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-4">
                                            Our Bachelor of Science in Physics program is designed to offer a
                                            comprehensive understanding of classical and modern physics, from mechanics
                                            to quantum theory. Students will gain a deep knowledge of theoretical
                                            principles and experimental techniques.
                                        </p>
                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            <h5 className="font-semibold mb-2">Eligibility:</h5>
                                            <p>
                                                Applicants should have completed their higher secondary education with
                                                Physics, Chemistry, and Mathematics.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-primary-700 py-4 px-6">
                                        <h4 className="text-xl font-bold text-white">B.Sc. in Chemistry</h4>
                                        <p className="text-white/80">Duration: 3 Years</p>
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-4">
                                            This program emphasizes the study of organic, inorganic, and physical
                                            chemistry, preparing students for careers in research, industrial chemistry,
                                            and beyond.
                                        </p>
                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            <h5 className="font-semibold mb-2">Eligibility:</h5>
                                            <p>
                                                Applicants should have a strong background in Chemistry, Physics, and
                                                Mathematics.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-primary-700 py-4 px-6">
                                        <h4 className="text-xl font-bold text-white">B.Sc. in Biology</h4>
                                        <p className="text-white/80">Duration: 3 Years</p>
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-4">
                                            The B.Sc. in Biology offers a comprehensive curriculum focused on cellular
                                            biology, genetics, and ecological systems. Students gain hands-on experience
                                            in biological labs and fieldwork.
                                        </p>
                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            <h5 className="font-semibold mb-2">Eligibility:</h5>
                                            <p>
                                                Applicants must have completed secondary education with a focus on
                                                Biology and related subjects.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-primary-700 py-4 px-6">
                                        <h4 className="text-xl font-bold text-white">B.Sc. in Environmental Science</h4>
                                        <p className="text-white/80">Duration: 3 Years</p>
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-4">
                                            This program combines natural sciences with practical environmental studies.
                                            Students learn about environmental issues, sustainability, and ecological
                                            research, preparing them for careers in conservation and environmental
                                            policy.
                                        </p>
                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            <h5 className="font-semibold mb-2">Eligibility:</h5>
                                            <p>
                                                Applicants should have completed high school with Biology or related
                                                sciences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-16">
                            <h3 className="text-2xl font-bold mb-8 border-b border-primary-300 pb-2">
                                Postgraduate Programs
                            </h3>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-primary-600 py-4 px-6">
                                        <h4 className="text-xl font-bold text-white">M.Sc. in Physics</h4>
                                        <p className="text-white/80">Duration: 2 Years</p>
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-4">
                                            The Master of Science in Physics focuses on advanced topics in theoretical
                                            and experimental physics. The program prepares students for careers in
                                            academia, industry, and research.
                                        </p>
                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            <h5 className="font-semibold mb-2">Eligibility:</h5>
                                            <p>
                                                A B.Sc. in Physics or an equivalent degree with a solid foundation in
                                                advanced physics concepts.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-primary-600 py-4 px-6">
                                        <h4 className="text-xl font-bold text-white">M.Sc. in Chemistry</h4>
                                        <p className="text-white/80">Duration: 2 Years</p>
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-4">
                                            Our M.Sc. program in Chemistry allows students to specialize in areas such
                                            as organic, inorganic, and materials chemistry, preparing them for
                                            high-level research positions.
                                        </p>
                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            <h5 className="font-semibold mb-2">Eligibility:</h5>
                                            <p>A B.Sc. in Chemistry or a related field.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-primary-600 py-4 px-6">
                                        <h4 className="text-xl font-bold text-white">M.Sc. in Environmental Science</h4>
                                        <p className="text-white/80">Duration: 2 Years</p>
                                    </div>
                                    <div className="p-6">
                                        <p className="mb-4">
                                            This program equips students with the skills to address environmental
                                            challenges, with courses on climate change, pollution, and sustainability
                                            practices.
                                        </p>
                                        <div className="border-t border-gray-200 pt-4 mt-4">
                                            <h5 className="font-semibold mb-2">Eligibility:</h5>
                                            <p>A B.Sc. in Environmental Science or equivalent.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-8 border-b border-primary-300 pb-2">
                                Doctoral Programs
                            </h3>
                            <div className="bg-white rounded-lg shadow-md p-8">
                                <h4 className="text-xl font-bold mb-4">
                                    Ph.D. in Physics, Chemistry, Biology, Environmental Science
                                </h4>
                                <div className="mb-6">
                                    <h5 className="font-semibold mb-2">Research Focus:</h5>
                                    <p>
                                        Students pursuing a Ph.D. in Science are encouraged to engage in cutting-edge
                                        research in their chosen field, working alongside faculty on projects that
                                        explore new frontiers of knowledge.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-semibold mb-2">Eligibility:</h5>
                                    <p>Master's degree in the relevant discipline with a strong research background.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research and Facilities */}
                <section className="py-16 px-4 md:px-8 container mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Research and Facilities</h2>

                    <div className="mb-12">
                        <p className="text-lg mb-8 max-w-4xl mx-auto">
                            The Department of Science is committed to groundbreaking research in various areas,
                            including quantum mechanics, chemical synthesis, molecular biology, and climate change. Our
                            faculty members are actively involved in collaborative projects with leading research
                            institutions and industries.
                        </p>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 text-center">Key Research Areas</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary-500">
                                <h4 className="text-xl font-bold mb-3">Physics</h4>
                                <p>Research in astrophysics, nanotechnology, and condensed matter physics.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary-500">
                                <h4 className="text-xl font-bold mb-3">Chemistry</h4>
                                <p>Focusing on green chemistry, materials science, and pharmaceutical research.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary-500">
                                <h4 className="text-xl font-bold mb-3">Biology</h4>
                                <p>Genetic engineering, microbiology, and conservation biology.</p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-primary-500">
                                <h4 className="text-xl font-bold mb-3">Environmental Science</h4>
                                <p>Studies on sustainability, environmental policy, and ecological preservation.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-center">Labs and Facilities</h3>
                        <div className="bg-gray-100 rounded-lg p-8">
                            <p className="text-lg mb-8">
                                Our department is equipped with world-class laboratories, including the Nanotechnology
                                Lab, the Biochemistry Research Lab, and the Environmental Monitoring Lab. These spaces
                                provide students with the tools they need for advanced scientific exploration.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="overflow-hidden rounded-lg group">
                                    <img
                                        src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                        alt="Nanotechnology Lab"
                                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        keywords="nanotechnology lab, microscope, scientific research, advanced equipment"
                                    />
                                    <div className="p-4 bg-white">
                                        <h4 className="font-bold text-lg">Nanotechnology Lab</h4>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-lg group">
                                    <img
                                        src="https://images.unsplash.com/photo-1673845514907-5258ad7c66f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxiaW9jaGVtaXN0cnklMjBsYWJ8ZW58MHx8fHwxNzU0OTkwNzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Biochemistry Research Lab"
                                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        keywords="biochemistry lab, chemical research, test tubes, scientific equipment"
                                    />
                                    <div className="p-4 bg-white">
                                        <h4 className="font-bold text-lg">Biochemistry Research Lab</h4>
                                    </div>
                                </div>

                                <div className="overflow-hidden rounded-lg group">
                                    <img
                                        src="https://images.unsplash.com/photo-1564069114553-7215e1ff1890?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                        alt="Environmental Monitoring Lab"
                                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        keywords="environmental monitoring, water testing, ecology research, field equipment"
                                    />
                                    <div className="p-4 bg-white">
                                        <h4 className="font-bold text-lg">Environmental Monitoring Lab</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Faculty Section */}
                <section className="py-16 px-4 md:px-8 bg-gray-100">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center">Our Faculty</h2>

                        <p className="text-lg mb-12 max-w-4xl mx-auto">
                            Our department prides itself on its distinguished faculty, who are not only excellent
                            educators but also pioneering researchers in their fields. Many of our faculty members hold
                            prestigious awards and have published widely in top-tier journals.
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                                        alt="Professor of Physics"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        keywords="professor, physics professor, male scientist, academic"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. James Wilson</h3>
                                    <h4 className="text-primary-600 mb-4">Professor of Physics</h4>
                                    <p>
                                        Dr. Wilson specializes in quantum mechanics and has published over 100 papers on
                                        theoretical physics.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
                                        alt="Professor of Chemistry"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        keywords="professor, chemistry professor, female scientist, academic"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. Sarah Chen</h3>
                                    <h4 className="text-primary-600 mb-4">Professor of Chemistry</h4>
                                    <p>
                                        Dr. Chen focuses on green chemistry and sustainable materials science, having
                                        developed several eco-friendly chemical processes.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80"
                                        alt="Associate Professor of Biology"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        keywords="associate professor, biology professor, female scientist, academic"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. Maria Rodriguez</h3>
                                    <h4 className="text-primary-600 mb-4">Associate Professor of Biology</h4>
                                    <p>
                                        Her research on environmental microbiology has led to breakthrough discoveries
                                        in ecosystem restoration.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                                        alt="Professor of Environmental Science"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        keywords="professor, environmental science professor, male scientist, academic"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Dr. Michael Thompson</h3>
                                    <h4 className="text-primary-600 mb-4">Professor of Environmental Science</h4>
                                    <p>
                                        An expert in climate change, Dr. Thompson has led international research
                                        projects on global warming mitigation strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Student Life */}
                <section className="py-16 px-4 md:px-8 container mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Student Life</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 border-b border-primary-300 pb-2">
                                Student Organizations
                            </h3>
                            <p className="mb-6">
                                The Department of Science has several active student-run organizations, including the
                                Science Society, which organizes lectures, debates, and field trips, and the Chemistry
                                Club, which hosts hands-on experiments and workshops.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                    <h4 className="font-bold mb-2">Science Society</h4>
                                    <p>Organizing lectures, debates, and scientific field trips</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                    <h4 className="font-bold mb-2">Chemistry Club</h4>
                                    <p>Hosting hands-on experiments and chemistry workshops</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                    <h4 className="font-bold mb-2">Biology Forum</h4>
                                    <p>Discussions on latest biological research and conservation</p>
                                </div>
                                <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                                    <h4 className="font-bold mb-2">Environmental Club</h4>
                                    <p>Promoting sustainability and environmental awareness</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 border-b border-primary-300 pb-2">
                                Internships & Fieldwork
                            </h3>
                            <p className="mb-6">
                                Students are encouraged to participate in internships at leading research institutions
                                and environmental agencies. Our fieldwork programs offer hands-on experience in
                                real-world scientific applications.
                            </p>
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                    alt="Students doing fieldwork"
                                    className="w-full h-64 object-cover"
                                    keywords="fieldwork, student research, environmental study, outdoor learning"
                                />
                                <div className="p-6">
                                    <h4 className="font-bold text-lg mb-2">Recent Fieldwork Opportunities</h4>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Environmental monitoring at Clearwater Lake</li>
                                        <li>Geological surveys in Highland Mountains</li>
                                        <li>Biodiversity assessment in Northridge Forest Reserve</li>
                                        <li>Atmospheric data collection at Weather Station Alpha</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Admissions Information */}
                <section className="py-16 px-4 md:px-8 bg-gray-100">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Admissions Information</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center justify-center h-16 w-16 bg-primary-100 rounded-full mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">school</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-center">Admission Requirements</h3>
                                <p>
                                    To apply for the undergraduate programs, applicants should have completed their high
                                    school education with a focus on science subjects (Physics, Chemistry, Biology,
                                    etc.). Postgraduate applicants must hold a relevant Bachelor's degree.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center justify-center h-16 w-16 bg-primary-100 rounded-full mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">
                                        description
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-center">Application Process</h3>
                                <p>
                                    Applications are submitted online, with deadlines for undergraduate and postgraduate
                                    programs falling in May. Ensure you submit transcripts, a personal statement, and
                                    reference letters as part of the application.
                                </p>
                            </div>

                            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center justify-center h-16 w-16 bg-primary-100 rounded-full mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-primary-600 text-3xl">
                                        payments
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-center">Tuition Fees</h3>
                                <p>
                                    The annual tuition fee for undergraduate programs is $9,500, while postgraduate
                                    programs are $12,000. Financial aid and scholarships are available for eligible
                                    students.
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 text-center">
                            <a
                                href="#"
                                className="inline-block bg-primary-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-700 transition duration-300 shadow-md hover:shadow-lg"
                            >
                                Apply Now
                            </a>
                        </div>
                    </div>
                </section>

                {/* Career Opportunities */}
                <section className="py-16 px-4 md:px-8 container mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Career Opportunities</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h3 className="text-2xl font-bold mb-6">Career Services</h3>
                            <p className="mb-6">
                                The Department of Science offers comprehensive career support, including resume
                                workshops, job fairs, and networking events with industry professionals.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-600 mr-3 mt-1">
                                        assignment
                                    </span>
                                    <div>
                                        <h4 className="font-bold">Resume Workshops</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

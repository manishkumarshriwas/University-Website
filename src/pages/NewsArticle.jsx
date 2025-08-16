import React from "react"

export const Component = () => {
    return (
            <div className="bg-gray-50 min-h-screen font-sans">
                {/* Header Section */}
                <header className="bg-white shadow-md py-8 px-4">
                    <div className="container mx-auto max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-3 transition-all duration-300 hover:text-primary-600">
                            Breaking New Discovery in Quantum Computing Shows Promise for Future Applications
                        </h1>
                        <p className="text-gray-600 italic mb-4">
                            August 12, 2025 | By Dr. Jane Smith, Research Correspondent
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                                <span className="material-symbols-outlined text-primary-500 mr-1 text-base">
                                    visibility
                                </span>
                                3.2K views
                            </span>
                            <span className="flex items-center">
                                <span className="material-symbols-outlined text-primary-500 mr-1 text-base">
                                    schedule
                                </span>
                                8 min read
                            </span>
                            <div className="flex items-center ml-auto space-x-2">
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110">
                                    <i className="fa-brands fa-facebook text-blue-600"></i>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110">
                                    <i className="fa-brands fa-twitter text-blue-400"></i>
                                </button>
                                <button className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-110">
                                    <i className="fa-brands fa-linkedin text-blue-700"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto max-w-6xl px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Article Content */}
                    <article className="lg:col-span-2 bg-white p-6 md:p-8 rounded-lg shadow-sm">
                        <img
                            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Quantum computer in laboratory"
                            className="w-full h-auto rounded-lg mb-6 object-cover hover:opacity-95 transition-opacity duration-300"
                            keywords="quantum computing, laboratory, research, technology"
                        />

                        <p className="text-lg mb-5 leading-relaxed">
                            Researchers at the University's Quantum Computing Laboratory have announced a breakthrough
                            in quantum algorithm development that could revolutionize how we process complex datasets.
                            The team, led by Professor Robert Chen, has successfully demonstrated a new quantum
                            computing technique that solves certain optimization problems exponentially faster than
                            current methods.
                        </p>

                        <h2 className="text-2xl font-serif font-bold mt-8 mb-4">The Breakthrough Explained</h2>
                        <p className="mb-5 leading-relaxed">
                            The new approach, dubbed "Quantum Variational Eigensolving" (QVE), represents a significant
                            advance in how quantum computers can be programmed to solve real-world problems. Unlike
                            previous quantum algorithms that required massive quantum resources, QVE can work
                            effectively even on today's noisy intermediate-scale quantum (NISQ) devices.
                        </p>
                        <p className="mb-5 leading-relaxed">
                            "What makes this discovery particularly exciting is that it bridges the gap between
                            theoretical quantum advantage and practical applications," explained Professor Chen. "We're
                            now able to tackle certain classes of problems that were previously considered intractable,
                            even for the most powerful classical supercomputers."
                        </p>

                        <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6 rounded-r-lg">
                            <p className="italic text-primary-800">
                                "This breakthrough puts us at least two years ahead of our projected research timeline
                                and opens up possibilities we hadn't even considered in our initial proposals."
                            </p>
                            <p className="mt-2 font-medium">— Dr. Michelle Zhang, Quantum Research Team</p>
                        </div>

                        <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Potential Applications</h2>
                        <p className="mb-5 leading-relaxed">
                            The potential applications of this breakthrough span multiple industries, including:
                        </p>
                        <ul className="list-disc pl-8 mb-6 space-y-2">
                            <li>Pharmaceutical research and drug discovery</li>
                            <li>Financial modeling and risk assessment</li>
                            <li>Climate simulation and weather prediction</li>
                            <li>Advanced materials science</li>
                            <li>Artificial intelligence training optimization</li>
                        </ul>

                        <div className="aspect-w-16 aspect-h-9 my-8 rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                className="w-full h-full"
                                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdHxlbnwwfHx8fDE3NTQ5NzkwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                allowFullScreen
                                title="Quantum Computing Explained"
                            ></iframe>
                        </div>

                        <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Funding and Next Steps</h2>
                        <p className="mb-5 leading-relaxed">
                            The research was funded by a $3.2 million grant from the National Science Foundation and
                            additional support from the University's Advanced Computing Initiative. The team is now
                            focusing on scaling their approach to handle larger datasets and more complex problem
                            domains.
                        </p>
                        <p className="mb-5 leading-relaxed">
                            The university has already filed three patent applications related to the discovery and is
                            in early discussions with industry partners about potential commercialization pathways.
                        </p>

                        <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Looking Ahead</h2>
                        <p className="mb-5 leading-relaxed">
                            Professor Chen and his team will present their findings at the International Quantum
                            Technologies Conference next month in Zurich, Switzerland. They are also preparing a
                            comprehensive paper for publication in Nature Quantum Information.
                        </p>

                        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row sm:justify-between items-center gap-4">
                            <div className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1631203883080-9e5338ebcf2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjByZXNlYXJjaGVyfGVufDB8fHx8MTc1NDk4NjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Dr. Jane Smith"
                                    className="w-12 h-12 rounded-full border-2 border-primary-100"
                                    keywords="female researcher, author, academic, portrait"
                                />
                                <div className="ml-4">
                                    <p className="font-medium">Dr. Jane Smith</p>
                                    <p className="text-sm text-gray-600">Research Correspondent</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 sm:mt-0">
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
                                    #QuantumComputing
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
                                    #Research
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
                                    #Technology
                                </span>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href="#"
                                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined mr-2">article</span>
                                Read More Articles
                            </a>
                            <a
                                href="#"
                                className="bg-white hover:bg-gray-100 text-primary-600 border border-primary-600 font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                            >
                                <span className="material-symbols-outlined mr-2">science</span>
                                Explore Research
                            </a>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-1">
                        {/* Author Profile */}
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">About the Author</h3>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1631816290138-9f0f79cada3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjByZXNlYXJjaGVyfGVufDB8fHx8MTc1NDk4NjA2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
                                    alt="Dr. Jane Smith"
                                    className="w-24 h-24 rounded-full border-4 border-primary-100 mb-4"
                                    keywords="female researcher, author, academic, portrait"
                                />
                                <h4 className="font-bold text-lg">Dr. Jane Smith</h4>
                                <p className="text-primary-600 mb-2">Research Correspondent</p>
                                <p className="text-sm text-gray-600 mb-4">
                                    Dr. Smith specializes in quantum physics and has published over 40 articles on
                                    emerging technologies.
                                </p>
                                <div className="flex space-x-3">
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        <i className="fa-brands fa-twitter text-lg"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        <i className="fa-brands fa-linkedin text-lg"></i>
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-500 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined">mail</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Related Articles */}
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Related Articles</h3>
                            <div className="space-y-4">
                                <a href="#" className="group block">
                                    <div className="flex gap-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDB8fHx8MTc1NDk4NjA2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="AI research"
                                            className="w-20 h-16 object-cover rounded group-hover:opacity-90 transition-opacity"
                                            keywords="artificial intelligence, AI, machine learning, technology"
                                        />
                                        <div>
                                            <h4 className="font-medium group-hover:text-primary-600 transition-colors duration-200">
                                                AI Researchers Develop New Neural Network Architecture
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">July 28, 2025</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="group block">
                                    <div className="flex gap-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1656331797721-b593b8f00297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxuYW5vdGVjaG5vbG9neXxlbnwwfHx8fDE3NTQ5ODYwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                            alt="Nanotechnology"
                                            className="w-20 h-16 object-cover rounded group-hover:opacity-90 transition-opacity"
                                            keywords="nanotechnology, nanotech, research, science"
                                        />
                                        <div>
                                            <h4 className="font-medium group-hover:text-primary-600 transition-colors duration-200">
                                                Nanotechnology Breakthrough Could Lead to Improved Medical Devices
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">August 2, 2025</p>
                                        </div>
                                    </div>
                                </a>
                                <a href="#" className="group block">
                                    <div className="flex gap-3">
                                        <img
                                            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                            alt="Climate research"
                                            className="w-20 h-16 object-cover rounded group-hover:opacity-90 transition-opacity"
                                            keywords="climate change, environmental science, research"
                                        />
                                        <div>
                                            <h4 className="font-medium group-hover:text-primary-600 transition-colors duration-200">
                                                New Climate Model Provides More Accurate Regional Predictions
                                            </h4>
                                            <p className="text-sm text-gray-500 mt-1">August 10, 2025</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <a
                                href="#"
                                className="text-primary-600 font-medium flex items-center mt-4 hover:text-primary-700 transition-colors duration-200"
                            >
                                View all related articles
                                <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                            </a>
                        </div>

                        {/* Popular Articles */}
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="text-xl font-bold mb-4 border-b border-gray-200 pb-2">Popular This Week</h3>
                            <ol className="list-decimal list-inside space-y-3 pl-1">
                                <li className="text-gray-600">
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        University Receives $25M Grant for Clean Energy Research
                                    </a>
                                </li>
                                <li className="text-gray-600">
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        Nobel Laureate Joins Faculty as Distinguished Professor
                                    </a>
                                </li>
                                <li className="text-gray-600">
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        Study Finds New Link Between Diet and Cognitive Health
                                    </a>
                                </li>
                                <li className="text-gray-600">
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        International Conference on Sustainable Development to be Hosted Next Spring
                                    </a>
                                </li>
                                <li className="text-gray-600">
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:text-primary-600 transition-colors duration-200"
                                    >
                                        Student Team Wins National Robotics Competition
                                    </a>
                                </li>
                            </ol>
                        </div>
                    </aside>
                </main>

                {/* Newsletter */}
                <section className="bg-primary-50 py-12 px-4">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Latest Research</h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Subscribe to our newsletter and receive the latest news, research papers, and event
                            invitations directly to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all duration-200"
                            />
                            <button
                                type="submit"
                                className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </section>

                {/* Footer */}

                {/* Next: "Add a floating 'Back to top' button" */}
                {/* Next: "Add a 'Recommended for you' section with AI-powered article suggestions" */}
                {/* Next: "Add a dynamic reading progress bar at the top of the article" */}
            </div>
    )
}

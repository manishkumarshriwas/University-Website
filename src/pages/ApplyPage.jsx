import React from "react"
import { Link } from "react-router-dom";


export const ApplyPage = () => {
    return (
            <div className="bg-white min-h-screen font-sans">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
                    <div className="container mx-auto px-4 py-16 md:py-24">
                        <div className="max-w-3xl mx-auto text-center">
                            <h1 className="text-3xl md:text-5xl font-bold mb-6 transition-all duration-300 hover:scale-105">
                                Apply Now - Join the Legacy of Excellence at{" "}
                                <span className="text-yellow-300">[University Name]</span>
                            </h1>
                            <p className="text-lg md:text-xl mb-8">
                                Welcome to the next step in your academic journey! We're excited to invite you to apply
                                to [University Name], where innovation, diversity, and academic excellence converge.
                                Whether you're seeking to explore the wonders of knowledge, challenge your intellect, or
                                build lasting connections, you'll find a supportive community and world-class
                                opportunities waiting for you here.
                            </p>
                            <Link
  to="/applyform"
  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
>
  Start Your Application
</Link>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                        <svg
                            className="relative block w-full h-12 md:h-24"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                                className="fill-white"
                            ></path>
                        </svg>
                    </div>
                </div>

                {/* Deadlines Section */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 relative">
                            <span className="relative inline-block after:content-[''] after:absolute after:w-full after:h-1 after:bg-primary-500 after:bottom-0 after:left-0 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100">
                                Application Deadlines
                            </span>
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-bold mb-4 text-blue-800">Undergraduate Programs</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-3 text-primary-600">event</span>
                                        <span className="font-medium">Early Decision:</span>
                                        <span className="ml-2">November 15</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-3 text-primary-600">event</span>
                                        <span className="font-medium">Regular Decision:</span>
                                        <span className="ml-2">January 15</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                                <h3 className="text-xl font-bold mb-4 text-blue-800">Graduate Programs</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-3 text-primary-600">event</span>
                                        <span className="font-medium">Fall Semester:</span>
                                        <span className="ml-2">March 1</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined mr-3 text-primary-600">event</span>
                                        <span className="font-medium">Spring Semester:</span>
                                        <span className="ml-2">October 15</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How to Apply Section */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">How to Apply</h2>
                            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                                Applying to [University Name] is simple, and we're here to guide you every step of the
                                way. Our application process is designed to help us learn more about who you are and
                                what you bring to our diverse community.
                            </p>

                            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl">
                                            person_add
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">1. Create an Account</h3>
                                    <p className="text-gray-600">
                                        Start by creating your personalized account. This allows you to track your
                                        progress and save your work as you go. If you already have an account, simply
                                        log in to continue.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl">
                                            edit_document
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">2. Complete Your Application Form</h3>
                                    <p className="text-gray-600">
                                        You'll need to provide basic personal information and your academic history.
                                        Here are a few things you'll need:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                                        <li>Full name, address, and contact details</li>
                                        <li>Educational background</li>
                                        <li>Family background (optional)</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl">
                                            upload_file
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">3. Submit Your Supporting Documents</h3>
                                    <p className="text-gray-600">
                                        Make sure your application stands out with the following documents:
                                    </p>
                                    <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                                        <li>Academic Transcripts</li>
                                        <li>Letters of Recommendation</li>
                                        <li>Standardized Test Scores (Optional)</li>
                                        <li>Personal Statement/Statement of Purpose</li>
                                        <li>Portfolio/Other Supporting Materials (if applicable)</li>
                                    </ul>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl">
                                            payments
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">4. Pay the Application Fee</h3>
                                    <p className="text-gray-600">
                                        The standard application fee is $75 (USD) for undergraduate programs and $100
                                        (USD) for graduate programs. Fee waivers are available for eligible applicants.
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                                        <span className="material-symbols-outlined text-primary-600 text-2xl">
                                            groups
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">5. Interview (Optional)</h3>
                                    <p className="text-gray-600">
                                        Some programs may require or offer an optional interview. This is an excellent
                                        opportunity for us to get to know you better and for you to ask any questions
                                        you might have about the program.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Why University Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                            Why <span className="text-primary-600">[University Name]</span>?
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-500 hover:shadow-xl transition-all duration-300">
                                <div className="text-primary-600 text-4xl mb-4">
                                    <span className="material-symbols-outlined">school</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">World-Class Faculty</h3>
                                <p className="text-gray-600">
                                    Learn from top experts in your field, many of whom are leaders in research,
                                    innovation, and teaching.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-500 hover:shadow-xl transition-all duration-300">
                                <div className="text-primary-600 text-4xl mb-4">
                                    <span className="material-symbols-outlined">diversity_3</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Diverse Community</h3>
                                <p className="text-gray-600">
                                    Join a vibrant community of students from around the globe, fostering an environment
                                    of inclusivity, collaboration, and intellectual growth.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-500 hover:shadow-xl transition-all duration-300">
                                <div className="text-primary-600 text-4xl mb-4">
                                    <span className="material-symbols-outlined">biotech</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Research Excellence</h3>
                                <p className="text-gray-600">
                                    Whether you are an undergraduate or graduate student, you'll have access to
                                    cutting-edge research facilities and opportunities.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-primary-500 hover:shadow-xl transition-all duration-300">
                                <div className="text-primary-600 text-4xl mb-4">
                                    <span className="material-symbols-outlined">public</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Global Recognition</h3>
                                <p className="text-gray-600">
                                    Our degrees are respected worldwide, opening doors to careers in academia, industry,
                                    government, and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Programs Section */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Programs Offered</h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="h-40 bg-blue-800 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-5xl">menu_book</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-4">Undergraduate Programs</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Arts & Sciences
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Engineering
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Business
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Law
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Social Sciences
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                And more...
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="h-40 bg-indigo-800 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-5xl">
                                            psychology
                                        </span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-4">Graduate Programs</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Master's Degrees
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                PhD Programs
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Professional Degrees
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Diverse Fields of Study
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <div className="h-40 bg-purple-800 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-5xl">badge</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold mb-4">Executive Education</h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Short-term Courses
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Certifications
                                            </li>
                                            <li className="flex items-center">
                                                <span className="material-symbols-outlined mr-2 text-primary-600">
                                                    arrow_right
                                                </span>
                                                Professional Development
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Financial Aid Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                            Financial Aid & Scholarships
                        </h2>
                        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                            We believe in making education accessible. [University Name] offers a range of financial aid
                            options to help ease the burden of tuition costs:
                        </p>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-green-600 text-3xl">savings</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-center">Need-Based Financial Aid</h3>
                                <p className="text-gray-600 text-center">
                                    Apply for need-based financial assistance based on your family's financial
                                    situation.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-yellow-600 text-3xl">
                                        emoji_events
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-center">Merit Scholarships</h3>
                                <p className="text-gray-600 text-center">
                                    For high-achieving students, we offer merit-based scholarships that recognize
                                    excellence in academics, leadership, and extracurricular activities.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                                    <span className="material-symbols-outlined text-blue-600 text-3xl">language</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-center">External Scholarships & Grants</h3>
                                <p className="text-gray-600 text-center">
                                    Learn more about additional scholarships available through external organizations,
                                    foundations, and government programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Campus Life Section */}
                <div className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Campus Life</h2>
                            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                                At [University Name], your experience will extend beyond the classroom. Take part in
                                student-run organizations, attend thought-provoking lectures and events, or enjoy the
                                beauty of our campus as you engage in recreational and cultural activities.
                            </p>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="relative overflow-hidden rounded-xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzfGVufDB8fHx8MTc1NDkzNjA3NHww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Campus"
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                        keywords="university campus, college, education"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Beautiful Campus</h3>
                                            <p className="text-white/90">
                                                Explore our stunning grounds and state-of-the-art facilities.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden rounded-xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1607586501844-9a7f11af251c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYWN0aXZpdGllc3xlbnwwfHx8fDE3NTUwMTM4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Student Activities"
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                        keywords="student activities, clubs, university life"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Student Organizations</h3>
                                            <p className="text-white/90">
                                                Join one of our many clubs and organizations to pursue your interests.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative overflow-hidden rounded-xl group">
                                    <img
                                        src="https://images.unsplash.com/photo-1695172606947-43fcbcfbe8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzkyNDZ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZXZlbnRzfGVufDB8fHx8MTc1NTAxMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                        alt="Events"
                                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                        keywords="university events, campus activities, college events"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-white mb-2">Events & Activities</h3>
                                            <p className="text-white/90">
                                                Participate in a wide range of cultural, academic, and social events.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center mt-12">
                                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                                    Join us on our journey. We encourage you to explore all that we have to offer and
                                    become part of a long-standing tradition of excellence. Our community is waiting to
                                    welcome you!
                                </p>
                                <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg">
                                    Start Your Application
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQs Section */}
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                        <div className="space-y-4">
                            <details className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer">
                                    <h3 className="text-lg font-bold">Do I need to submit standardized test scores?</h3>
                                    <span className="material-symbols-outlined transition-transform">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600">
                                    <p>
                                        No, we have a test-optional policy. You can choose to submit scores if you feel
                                        they represent your academic abilities well.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer">
                                    <h3 className="text-lg font-bold">Can I apply for multiple programs?</h3>
                                    <span className="material-symbols-outlined transition-transform">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600">
                                    <p>
                                        Yes, you can apply to more than one program, but you will need to submit
                                        separate applications for each.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer">
                                    <h3 className="text-lg font-bold">What if I miss the application deadline?</h3>
                                    <span className="material-symbols-outlined transition-transform">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600">
                                    <p>
                                        Late applications are only considered under special circumstances. Please reach
                                        out to our Admissions office if you are unable to meet the deadline.
                                    </p>
                                </div>
                            </details>

                            <details className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer">
                                    <h3 className="text-lg font-bold">
                                        How long will it take to hear back about my application?
                                    </h3>
                                    <span className="material-symbols-outlined transition-transform">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600">
                                    <p>You can expect to hear back within 4–6 weeks after the application deadline.</p>
                                </div>
                            </details>

                            <details className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                                <summary className="flex justify-between items-center p-6 cursor-pointer">
                                    <h3 className="text-lg font-bold">
                                        Is there an international student application process?
                                    </h3>
                                    <span className="material-symbols-outlined transition-transform">expand_more</span>
                                </summary>
                                <div className="p-6 pt-0 text-gray-600">
                                    <p>
                                        Yes, we have dedicated resources for international applicants. Visit our
                                        International Students page for more information.
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-16">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Apply?</h2>
                            <p className="text-lg mb-8">
                                Click the button below to begin your application process. Should you need any
                                assistance, our Admissions Team is here to help—feel free to reach out to us at [contact
                                info].
                            </p>
                            <Link
  to="/applyform"
  className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
>
  Start Your Application
</Link>
                        </div>
                    </div>
                </div>
                {/* Next: "Add a footer section with university contact information and social media links" */}
            </div>
    )
}

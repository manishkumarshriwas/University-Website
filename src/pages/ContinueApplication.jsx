import React from "react"

export const ContinueApplication = () => {
    return (
            <div className="bg-gray-50 min-h-screen p-4 md:p-6 lg:p-8">
                <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-primary-600 p-6 text-white">
                        <h1 className="text-2xl md:text-3xl font-bold">Complete Your Application</h1>
                        <p className="mt-2 text-primary-100">
                            Welcome back, <span className="font-semibold">[Applicant Name]</span>! You're now one step
                            closer to submitting your application to{" "}
                            <span className="font-semibold">[University Name]</span>.
                        </p>
                        <p className="mt-1 text-primary-100">
                            Don't worry, you can save your progress and return to finish later.
                        </p>
                    </div>

                    <div className="p-6 md:p-8">
                        <div className="space-y-8">
                            {/* Section 1: Program-Specific Questions */}
                            <section>
                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold">
                                        1
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-bold">Program-Specific Questions</h2>
                                </div>
                                <p className="mb-6 text-gray-600">
                                    Please provide more details about your academic interests so we can process your
                                    application efficiently.
                                </p>

                                <div className="space-y-6">
                                    {/* Program of Interest */}
                                    <div className="bg-gray-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">A. Program of Interest</h3>
                                        <p className="text-gray-600 mb-4">
                                            Select the program you are applying to. Make sure to choose the correct
                                            option based on your academic goals.
                                        </p>

                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <input
                                                    id="undergraduate"
                                                    name="program"
                                                    type="radio"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="undergraduate"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Undergraduate Program (e.g., Bachelor's degree)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="graduate"
                                                    name="program"
                                                    type="radio"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="graduate"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Graduate Program (e.g., Master's, Doctoral degrees)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="professional"
                                                    name="program"
                                                    type="radio"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="professional"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Professional Program (e.g., Medical, Law, Business)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="non-degree"
                                                    name="program"
                                                    type="radio"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="non-degree"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Non-Degree Program (e.g., Certificate, Summer School, Study Abroad)
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Degree Level */}
                                    <div className="bg-gray-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">B. Degree Level</h3>
                                        <p className="text-gray-600 mb-4">
                                            Please specify the degree level for which you are applying.
                                        </p>

                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <input
                                                    id="bachelor"
                                                    name="degree"
                                                    type="radio"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="bachelor"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Bachelor's Degree (Undergraduate)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="master"
                                                    name="degree"
                                                    type="radio"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="master"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Master's Degree (Graduate)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="doctoral"
                                                    name="degree"
                                                    type="radio"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="doctoral"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Doctoral Degree (PhD)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="other-degree"
                                                    name="degree"
                                                    type="radio"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="other-degree"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Other (Please Specify)
                                                </label>
                                                <input
                                                    type="text"
                                                    className="ml-3 flex-1 border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                                    placeholder="Specify other degree"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Department/Concentration */}
                                    <div className="bg-gray-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">
                                            C. Department or Program Concentration
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Some programs have specific departments or concentrations. Please select one
                                            or more options that best match your interests.
                                        </p>

                                        <div className="space-y-2">
                                            <div className="flex items-center">
                                                <input
                                                    id="arts"
                                                    name="department"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="arts"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Arts and Humanities (e.g., History, Philosophy, Literature)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="social"
                                                    name="department"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="social"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Social Sciences (e.g., Psychology, Sociology, Political Science)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="stem"
                                                    name="department"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="stem"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    STEM (e.g., Computer Science, Engineering, Physics)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="business"
                                                    name="department"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="business"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Business & Economics (e.g., MBA, Finance, Economics)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="health"
                                                    name="department"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="health"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Health and Medicine (e.g., Medical Sciences, Nursing)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="education"
                                                    name="department"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="education"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Education (e.g., Teaching, Educational Leadership)
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    id="other-dept"
                                                    name="department"
                                                    type="checkbox"
                                                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500 cursor-pointer"
                                                />
                                                <label
                                                    htmlFor="other-dept"
                                                    className="ml-2 block text-sm font-medium text-gray-700 cursor-pointer hover:text-primary-600 transition-colors"
                                                >
                                                    Other (Please Specify)
                                                </label>
                                            </div>
                                            <div className="mt-2">
                                                <input
                                                    type="text"
                                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                                    placeholder="Specify other department"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Additional Information */}
                                    <div className="bg-gray-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">
                                            D. Additional Information (Optional)
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            Please provide any additional information about your program preferences,
                                            specializations, or research interests. This will help us tailor your
                                            application experience.
                                        </p>
                                        <textarea
                                            rows="4"
                                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                                            placeholder="Enter additional information here..."
                                        ></textarea>
                                    </div>
                                </div>
                            </section>

                            {/* Section 2: Upload Required Documents */}
                            <section>
                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold">
                                        2
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-bold">Upload Required Documents</h2>
                                </div>
                                <p className="mb-6 text-gray-600">
                                    The following documents are required to complete your application. Please upload
                                    them directly below.
                                </p>

                                <div className="space-y-6">
                                    <details className="bg-gray-50 p-5 rounded-lg group">
                                        <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between hover:text-primary-600 transition-colors">
                                            Required Documents for Undergraduate Applicants
                                            <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="mt-4 space-y-4">
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">High School Transcripts</h4>
                                                        <p className="text-sm text-gray-500">
                                                            Upload official or unofficial transcripts.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Letters of Recommendation</h4>
                                                        <p className="text-sm text-gray-500">
                                                            Upload two letters from teachers or mentors.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Standardized Test Scores</h4>
                                                        <p className="text-sm text-gray-500">
                                                            Upload your official test scores or mark as optional.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Personal Statement</h4>
                                                        <p className="text-sm text-gray-500">
                                                            A 500–800 word essay detailing your personal journey.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Extracurriculars List</h4>
                                                        <p className="text-sm text-gray-500">
                                                            Optional, but can include activities such as volunteering,
                                                            sports, or leadership roles.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <details className="bg-gray-50 p-5 rounded-lg group">
                                        <summary className="font-semibold text-lg cursor-pointer flex items-center justify-between hover:text-primary-600 transition-colors">
                                            Required Documents for Graduate Applicants
                                            <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="mt-4 space-y-4">
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">University Transcripts</h4>
                                                        <p className="text-sm text-gray-500">
                                                            Upload transcripts from all universities or colleges
                                                            attended.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Letters of Recommendation</h4>
                                                        <p className="text-sm text-gray-500">
                                                            Three academic or professional references.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Standardized Test Scores</h4>
                                                        <p className="text-sm text-gray-500">
                                                            Upload your official test scores (if applicable).
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Statement of Purpose</h4>
                                                        <p className="text-sm text-gray-500">
                                                            1-2 page document outlining your academic interests.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Research Proposal</h4>
                                                        <p className="text-sm text-gray-500">
                                                            For research-intensive programs or specific fields.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">CV/Resume</h4>
                                                        <p className="text-sm text-gray-500">
                                                            An up-to-date resume or curriculum vitae.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded border border-gray-200 hover:border-primary-300 transition-colors">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <h4 className="font-medium">Portfolio</h4>
                                                        <p className="text-sm text-gray-500">
                                                            For programs in design, arts, or architecture.
                                                        </p>
                                                    </div>
                                                    <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-primary-700 transition-colors shadow-sm">
                                                        Upload
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <div className="bg-gray-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">Document Upload Guidelines</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            <li>Please upload each document as a PDF, Word, or JPEG file.</li>
                                            <li>
                                                Ensure that your documents are clear, legible, and properly labeled.
                                            </li>
                                            <li>
                                                If any document is missing or unclear, your application may be delayed.
                                            </li>
                                        </ul>
                                        <div className="mt-5">
                                            <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-md w-full sm:w-auto">
                                                <span className="material-symbols-outlined mr-2">upload_file</span>
                                                Upload Document
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 3: Application Fee Payment */}
                            <section>
                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold">
                                        3
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-bold">Application Fee Payment</h2>
                                </div>
                                <p className="mb-6 text-gray-600">
                                    To finalize your application, you must submit the application fee.
                                </p>

                                <div className="space-y-6">
                                    <div className="bg-gray-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">Application Fees</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-white p-3 rounded border border-gray-200 flex justify-between items-center">
                                                <span>Undergraduate Program</span>
                                                <span className="font-semibold">$75 USD</span>
                                            </div>
                                            <div className="bg-white p-3 rounded border border-gray-200 flex justify-between items-center">
                                                <span>Graduate Program</span>
                                                <span className="font-semibold">$100 USD</span>
                                            </div>
                                            <div className="bg-white p-3 rounded border border-gray-200 flex justify-between items-center">
                                                <span>Professional Program</span>
                                                <span className="font-semibold">$150 USD</span>
                                            </div>
                                            <div className="bg-white p-3 rounded border border-gray-200 flex justify-between items-center">
                                                <span>International Applicants</span>
                                                <span className="font-semibold">$100 USD</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <p className="text-gray-600 text-sm">
                                                Fee waivers may be available for eligible students. Please check the fee
                                                waiver guidelines or contact our admissions office for assistance.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-5 rounded-lg">
                                        <h3 className="font-semibold text-lg mb-3">How to Pay</h3>
                                        <div className="space-y-3">
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-primary-600 mr-2">
                                                    credit_card
                                                </span>
                                                <div>
                                                    <h4 className="font-medium">Credit/Debit Card</h4>
                                                    <p className="text-sm text-gray-600">
                                                        Securely pay online using Visa, MasterCard, or American Express.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-primary-600 mr-2">
                                                    account_balance
                                                </span>
                                                <div>
                                                    <h4 className="font-medium">
                                                        Bank Transfer (International Applicants)
                                                    </h4>
                                                    <p className="text-sm text-gray-600">
                                                        Pay via wire transfer from your bank. (Details will be provided
                                                        at checkout.)
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <span className="material-symbols-outlined text-primary-600 mr-2">
                                                    payments
                                                </span>
                                                <div>
                                                    <h4 className="font-medium">Check (U.S. Applicants)</h4>
                                                    <p className="text-sm text-gray-600">
                                                        If you prefer to pay by check or money order, you can mail it to
                                                        [University Name] Admissions Office. (Instructions will be
                                                        provided at checkout.)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5">
                                            <p className="text-gray-600 mb-4">
                                                After submitting your payment: Once your payment is processed, you'll
                                                receive a confirmation email with details of your transaction, and your
                                                application will officially be submitted for review.
                                            </p>
                                            <button className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-primary-700 transition-colors shadow-md w-full sm:w-auto">
                                                <span className="material-symbols-outlined mr-2">payment</span>
                                                Proceed to Payment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Section 4: Review & Final Submission */}
                            <section>
                                <div className="flex items-center space-x-3 mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 font-bold">
                                        4
                                    </span>
                                    <h2 className="text-xl md:text-2xl font-bold">Review & Final Submission</h2>
                                </div>
                                <p className="mb-6 text-gray-600">
                                    Please take a moment to review all the information you've entered before submitting
                                    your application.
                                </p>

                                <div className="bg-gray-50 p-5 rounded-lg">
                                    <div className="space-y-3">
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-600 mr-2">
                                                check_circle
                                            </span>
                                            <p>Have you selected the correct program and degree level?</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-600 mr-2">
                                                check_circle
                                            </span>
                                            <p>Are all required documents uploaded?</p>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-primary-600 mr-2">
                                                check_circle
                                            </span>
                                            <p>Have you completed the payment?</p>
                                        </div>
                                    </div>
                                    <p className="mt-4 text-gray-600">
                                        Once you confirm everything is accurate, click the Submit Application button
                                        below to officially submit your application.
                                    </p>
                                    <div className="mt-5 flex justify-center">
                                        <button className="flex items-center justify-center px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-primary-800 transition-colors shadow-md text-lg font-semibold">
                                            <span className="material-symbols-outlined mr-2">send</span>
                                            Submit Application
                                        </button>
                                    </div>
                                </div>
                            </section>

                            {/* Need Assistance */}
                            <section className="bg-gray-50 p-6 rounded-lg">
                                <h2 className="text-xl font-bold mb-4">Need Assistance?</h2>
                                <p className="mb-4 text-gray-600">
                                    If you encounter any issues or have questions, our admissions team is here to help.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center text-primary-600 mb-2">
                                            <span className="material-symbols-outlined mr-2">email</span>
                                            <h3 className="font-semibold">Email</h3>
                                        </div>
                                        <p className="text-gray-600">[admissions@universityname.edu]</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center text-primary-600 mb-2">
                                            <span className="material-symbols-outlined mr-2">call</span>
                                            <h3 className="font-semibold">Phone</h3>
                                        </div>
                                        <p className="text-gray-600">[123-456-7890]</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex items-center text-primary-600 mb-2">
                                            <span className="material-symbols-outlined mr-2">chat</span>
                                            <h3 className="font-semibold">Live Chat</h3>
                                        </div>
                                        <p className="text-gray-600">
                                            Available from 9:00 AM to 5:00 PM (Monday–Friday)
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-4 text-center text-gray-600">
                                    We're here to support you through every step of the application process!
                                </p>
                            </section>

                            {/* Thank You */}
                            <section className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                                <h2 className="text-xl font-bold text-primary-700 mb-3">
                                    Thank You for Applying to [University Name]!
                                </h2>
                                <p className="text-gray-600">
                                    We're excited to review your application and look forward to potentially welcoming
                                    you to our vibrant academic community. Good luck with the rest of your application,
                                    and feel free to reach out with any questions or concerns.
                                </p>
                            </section>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6 px-2">
                        <button className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
                            <span className="material-symbols-outlined mr-1">arrow_back</span>
                            Save and exit
                        </button>
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                                Save progress
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

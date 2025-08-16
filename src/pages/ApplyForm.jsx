import React from "react"
import { Link } from "react-router-dom";


export const ApplyForm = () => {
    return (
            <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-4 md:p-8 lg:p-12">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
                    <div className="bg-primary-600 p-6 text-white">
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">Create Your Account</h1>
                        <p className="text-primary-100">Begin Your Journey with University Name</p>
                    </div>

                    <div className="p-6">
                        <div className="mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                Welcome to University Name! We're thrilled that you're considering applying to join our
                                distinguished academic community. Creating an account with us is your first step toward
                                an exciting academic future. This account will allow you to track your application,
                                submit supporting documents, and receive important updates about your application
                                status.
                            </p>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-primary-700 border-b border-primary-100 pb-2">
                                Why Create an Account?
                            </h2>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-500 mr-2 mt-0.5">
                                        task_alt
                                    </span>
                                    <span>
                                        <strong>Seamless Application Process:</strong> Save your progress and complete
                                        your application at your own pace.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-500 mr-2 mt-0.5">
                                        trending_up
                                    </span>
                                    <span>
                                        <strong>Track Your Status:</strong> Monitor your application's status in
                                        real-time, ensuring that all components are submitted on time.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-500 mr-2 mt-0.5">
                                        person_pin_circle
                                    </span>
                                    <span>
                                        <strong>Access Personalized Resources:</strong> Receive tailored updates,
                                        deadlines, and tips for a smooth application process.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-primary-700 border-b border-primary-100 pb-2">
                                How to Create Your Account:
                            </h2>

                            <div className="mb-6">
                                <details className="group bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                                    <summary className="flex items-center justify-between font-medium list-none">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white mr-3">
                                                1
                                            </span>
                                            <h3 className="text-lg font-semibold">Provide Your Basic Information</h3>
                                        </div>
                                        <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                            expand_more
                                        </span>
                                    </summary>
                                    <div className="mt-4 ml-11 text-gray-700">
                                        <p className="mb-4">
                                            Fill in the following details to begin. Make sure to use a valid email
                                            address, as this will be our primary method of communication with you
                                            throughout the application process.
                                        </p>

                                        <form className="space-y-4">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label
                                                        className="block text-sm font-medium mb-1"
                                                        htmlFor="fullName"
                                                    >
                                                        Full Name (First, Middle, Last){" "}
                                                        <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        className="block text-sm font-medium mb-1"
                                                        htmlFor="preferredName"
                                                    >
                                                        Preferred Name (Optional)
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="preferredName"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                                                        Email Address <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1" htmlFor="phone">
                                                        Phone Number (Optional)
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium mb-1" htmlFor="dob">
                                                        Date of Birth (MM/DD/YYYY){" "}
                                                        <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="date"
                                                        id="dob"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </details>
                            </div>

                            <div className="mb-6">
                                <details className="group bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                                    <summary className="flex items-center justify-between font-medium list-none">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white mr-3">
                                                2
                                            </span>
                                            <h3 className="text-lg font-semibold">Choose Your Program of Interest</h3>
                                        </div>
                                        <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                            expand_more
                                        </span>
                                    </summary>
                                    <div className="mt-4 ml-11 text-gray-700">
                                        <p className="mb-4">
                                            Tell us which program(s) you're interested in applying for, so we can
                                            personalize your application experience.
                                        </p>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="program"
                                                        className="w-5 h-5 text-primary-500 focus:ring-primary-400"
                                                    />
                                                    <span className="ml-2">Undergraduate Programs</span>
                                                </label>
                                            </div>

                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="program"
                                                        className="w-5 h-5 text-primary-500 focus:ring-primary-400"
                                                    />
                                                    <span className="ml-2">Graduate Programs</span>
                                                </label>

                                                <div className="ml-7 mt-2 space-y-2">
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-primary-500 focus:ring-primary-400"
                                                        />
                                                        <span className="ml-2">Master's</span>
                                                    </label>
                                                    <br />
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-primary-500 focus:ring-primary-400"
                                                        />
                                                        <span className="ml-2">Doctoral</span>
                                                    </label>
                                                    <br />
                                                    <label className="inline-flex items-center">
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 text-primary-500 focus:ring-primary-400"
                                                        />
                                                        <span className="ml-2">Professional Studies</span>
                                                    </label>
                                                </div>
                                            </div>

                                            <div>
                                                <label className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="program"
                                                        className="w-5 h-5 text-primary-500 focus:ring-primary-400"
                                                    />
                                                    <span className="ml-2">
                                                        Other (e.g., Summer School, Non-degree Courses)
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </details>
                            </div>

                            <div className="mb-6">
                                <details className="group bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                                    <summary className="flex items-center justify-between font-medium list-none">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white mr-3">
                                                3
                                            </span>
                                            <h3 className="text-lg font-semibold">Create Your Login Credentials</h3>
                                        </div>
                                        <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                            expand_more
                                        </span>
                                    </summary>
                                    <div className="mt-4 ml-11 text-gray-700">
                                        <p className="mb-4">
                                            To ensure your application's security, please create a strong password.
                                            You'll use this password along with your email to access your application
                                            and track your progress.
                                        </p>

                                        <form className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1" htmlFor="password">
                                                    Create a Password <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300"
                                                        required
                                                    />
                                                    <span className="absolute right-3 top-2.5 material-symbols-outlined cursor-pointer text-gray-500 hover:text-gray-700">
                                                        visibility_off
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Must be at least 8 characters long and contain at least one number
                                                    and one special character
                                                </p>
                                            </div>

                                            <div>
                                                <label
                                                    className="block text-sm font-medium mb-1"
                                                    htmlFor="confirmPassword"
                                                >
                                                    Confirm Password <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="confirmPassword"
                                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-all duration-300"
                                                        required
                                                    />
                                                    <span className="absolute right-3 top-2.5 material-symbols-outlined cursor-pointer text-gray-500 hover:text-gray-700">
                                                        visibility_off
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </details>
                            </div>

                            <div className="mb-6">
                                <details className="group bg-gray-50 p-4 rounded-lg transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                                    <summary className="flex items-center justify-between font-medium list-none">
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500 text-white mr-3">
                                                4
                                            </span>
                                            <h3 className="text-lg font-semibold">Review & Submit</h3>
                                        </div>
                                        <span className="material-symbols-outlined transform group-open:rotate-180 transition-transform duration-300">
                                            expand_more
                                        </span>
                                    </summary>
                                    <div className="mt-4 ml-11 text-gray-700">
                                        <p className="mb-4">
                                            Please review the details you've entered. If everything looks good, click
                                            the button below to submit your information and create your account. You
                                            will receive a confirmation email to verify your account and activate your
                                            profile.
                                        </p>

                                        <div className="space-y-3">
                                            <label className="inline-flex items-start">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 mt-0.5 text-primary-500 focus:ring-primary-400"
                                                    required
                                                />
                                                <span className="ml-2">
                                                    I agree to the{" "}
                                                    <a href="#" className="text-primary-600 hover:underline">
                                                        Terms and Conditions
                                                    </a>
                                                </span>
                                            </label>

                                            <label className="inline-flex items-start">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 mt-0.5 text-primary-500 focus:ring-primary-400"
                                                />
                                                <span className="ml-2">
                                                    I agree to receive updates and communications related to my
                                                    application (Optional: You can unsubscribe at any time)
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </details>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-primary-700 border-b border-primary-100 pb-2">
                                Next Steps After Account Creation
                            </h2>
                            <p className="mb-4 text-gray-700">
                                Once you've successfully created your account, you will be directed to the application
                                dashboard where you can:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02]">
                                    <div className="flex items-center mb-2">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            edit_document
                                        </span>
                                        <h3 className="font-semibold">Complete Your Application</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 ml-8">
                                        Start filling out your personal information, academic background, and
                                        program-specific questions.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02]">
                                    <div className="flex items-center mb-2">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            upload_file
                                        </span>
                                        <h3 className="font-semibold">Upload Required Documents</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 ml-8">
                                        Submit your academic transcripts, recommendation letters, standardized test
                                        scores, personal statement, and any other required documents.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02]">
                                    <div className="flex items-center mb-2">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            analytics
                                        </span>
                                        <h3 className="font-semibold">Track Application Status</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 ml-8">
                                        See where you are in the application process and receive notifications about
                                        next steps.
                                    </p>
                                </div>

                                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02]">
                                    <div className="flex items-center mb-2">
                                        <span className="material-symbols-outlined text-primary-500 mr-2">
                                            payments
                                        </span>
                                        <h3 className="font-semibold">Submit Payment</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 ml-8">
                                        Pay the application fee (if applicable) and finalize your submission.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-8 bg-blue-50 border-l-4 border-primary-400 p-4 rounded">
                            <h3 className="font-semibold text-lg mb-2">Important Notes:</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-500 mr-2 mt-0.5">
                                        security
                                    </span>
                                    <span>
                                        <strong>Privacy & Security:</strong> We take your privacy seriously. All
                                        information submitted through our application portal is protected by encryption
                                        and handled in compliance with data protection regulations.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-500 mr-2 mt-0.5">
                                        mark_email_read
                                    </span>
                                    <span>
                                        <strong>Email Confirmation:</strong> After submitting your details, you will
                                        receive an email with instructions to verify your account. Check your inbox (and
                                        spam folder) to ensure you don't miss it.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="material-symbols-outlined text-primary-500 mr-2 mt-0.5">
                                        support_agent
                                    </span>
                                    <span>
                                        <strong>Technical Support:</strong> If you experience any issues while creating
                                        your account or completing your application, our admissions team is here to
                                        help. Contact us at [email address] or call [phone number].
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h2 className="text-xl font-semibold mb-4 text-primary-700 border-b border-primary-100 pb-2">
                                Need Help?
                            </h2>
                            <p className="mb-4 text-gray-700">
                                We know the application process can seem daunting. If you need any assistance, our team
                                is here to guide you:
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <a
                                    href="mailto:[email address]"
                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-primary-500 mr-2">email</span>
                                    <span>Application Support: [email address]</span>
                                </a>

                                <a
                                    href="tel:[phone number]"
                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-primary-500 mr-2">call</span>
                                    <span>Admissions Office: [phone number]</span>
                                </a>

                                <a
                                    href="#"
                                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300"
                                >
                                    <span className="material-symbols-outlined text-primary-500 mr-2">chat</span>
                                    <span>Live Chat: 9:00 AM – 5:00 PM (Mon-Fri)</span>
                                </a>
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-4">Ready to Begin?</h3>
                            <p className="mb-6 text-gray-700">
                                Click the button below to create your account and start your journey toward a
                                world-class education at University Name.
                            </p>

                        
                            <Link
  to="/continueapplication"
  className="bg-blue-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
>
Create Account & Apply Now</Link>
                        </div>
                    </div>
                </div>
                {/* Next: "Add a footer with university logo and social media links" */}
            </div>
    )
}

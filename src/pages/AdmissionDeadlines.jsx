import React from "react"

export const AdmissionDeadlines = () => {
    return (
            <div className="bg-white min-h-screen font-sans">


            <header
  className="relative text-white py-20 px-4 md:px-8 lg:px-16 text-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1470&q=80')",
  }}
>
  {/* Overlay for better text readability */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content container to be above overlay */}
  <div className="relative z-10 max-w-4xl mx-auto">
    {/* University Logo */}
    <img
      src="https://upload.wikimedia.org/wikipedia/en/7/7b/Harvard_shield_wreath.svg"
      alt="University Logo"
      className="mx-auto mb-8 h-24 w-auto object-contain"
    />

    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
      Admissions Deadlines
    </h1>
    <p className="text-xl italic font-light max-w-xl mx-auto text-primary-100">
      Stay up-to-date with all our admissions deadlines.
    </p>
  </div>
</header>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col md:flex-row justify-center gap-4 my-8 px-4">
                    <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                        Apply Now
                    </button>
                    <button className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg">
                        View Program Deadlines
                    </button>
                    {/* Next: "Add dropdown selector for different programs" */}
                </div>

                {/* Calendar Widget */}
                <div className="mx-4 md:mx-8 lg:mx-16 mb-12 p-6 bg-white rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-primary-700">Upcoming Deadlines Calendar</h2>
                    <div className="grid grid-cols-7 gap-1 text-center">
                        <div className="font-bold p-2 bg-neutral-100">Sun</div>
                        <div className="font-bold p-2 bg-neutral-100">Mon</div>
                        <div className="font-bold p-2 bg-neutral-100">Tue</div>
                        <div className="font-bold p-2 bg-neutral-100">Wed</div>
                        <div className="font-bold p-2 bg-neutral-100">Thu</div>
                        <div className="font-bold p-2 bg-neutral-100">Fri</div>
                        <div className="font-bold p-2 bg-neutral-100">Sat</div>

                        {Array.from({length: 31}).map((_, i) => (
                            <div
                                key={i}
                                className={`p-2 border hover:bg-neutral-50 transition-colors cursor-pointer ${
                                    [1, 15].includes(i + 1) ? "relative" : ""
                                }`}
                            >
                                {i + 1}
                                {i + 1 === 1 && (
                                    <div
                                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500"
                                        title="Early Decision (Sciences, Engineering, Business)"
                                    ></div>
                                )}
                                {i + 1 === 15 && (
                                    <div
                                        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-green-500"
                                        title="Fall Applications (Sciences, Engineering, Business)"
                                    ></div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                            <span className="text-sm">Early Decision</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">Fall Applications</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                            <span className="text-sm">Spring Applications</span>
                        </div>
                    </div>
                    {/* Next: "Add interactive calendar with date selection" */}
                </div>

                {/* Programs Deadlines Sections */}
                <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Sciences Program */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-blue-100 p-6">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-blue-700 mr-3 text-3xl">
                                        science
                                    </span>
                                    <h2 className="text-2xl font-bold text-primary-800">Sciences Program Deadlines</h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-3">Application Deadlines:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-blue-600 mr-2 mt-0.5">
                                            calendar_month
                                        </span>
                                        <div>
                                            <p className="font-medium">Fall 2023 Applications</p>
                                            <p className="text-neutral-600">Due by April 15th</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-blue-600 mr-2 mt-0.5">
                                            priority_high
                                        </span>
                                        <div>
                                            <p className="font-medium">Early Decision</p>
                                            <p className="text-neutral-600">Due by January 1st</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-blue-600 mr-2 mt-0.5">
                                            calendar_month
                                        </span>
                                        <div>
                                            <p className="font-medium">Spring 2024 Applications</p>
                                            <p className="text-neutral-600">Due by October 1st</p>
                                        </div>
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-lg mt-6 mb-3">Required Documents:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-600 mr-2">
                                            description
                                        </span>
                                        <span>Transcripts</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-600 mr-2">quiz</span>
                                        <span>SAT/ACT scores</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-600 mr-2">edit_note</span>
                                        <span>Personal Statement</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-blue-600 mr-2">
                                            contact_mail
                                        </span>
                                        <span>Letters of Recommendation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Engineering Program */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-green-100 p-6">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-green-700 mr-3 text-3xl">
                                        construction
                                    </span>
                                    <h2 className="text-2xl font-bold text-primary-800">
                                        Engineering Program Deadlines
                                    </h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-3">Application Deadlines:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-green-600 mr-2 mt-0.5">
                                            calendar_month
                                        </span>
                                        <div>
                                            <p className="font-medium">Fall 2023 Applications</p>
                                            <p className="text-neutral-600">Due by April 15th</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-green-600 mr-2 mt-0.5">
                                            priority_high
                                        </span>
                                        <div>
                                            <p className="font-medium">Early Decision</p>
                                            <p className="text-neutral-600">Due by January 1st</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-green-600 mr-2 mt-0.5">
                                            calendar_month
                                        </span>
                                        <div>
                                            <p className="font-medium">Spring 2024 Applications</p>
                                            <p className="text-neutral-600">Due by October 1st</p>
                                        </div>
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-lg mt-6 mb-3">Required Documents:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-green-600 mr-2">
                                            description
                                        </span>
                                        <span>Transcripts</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-green-600 mr-2">quiz</span>
                                        <span>SAT/ACT scores (if applicable)</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-green-600 mr-2">edit_note</span>
                                        <span>Personal Statement</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-green-600 mr-2">
                                            contact_mail
                                        </span>
                                        <span>Letters of Recommendation</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-green-600 mr-2">folder</span>
                                        <span>Portfolio (if applicable)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Business Program */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-amber-100 p-6">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-amber-700 mr-3 text-3xl">
                                        business_center
                                    </span>
                                    <h2 className="text-2xl font-bold text-primary-800">Business Program Deadlines</h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-3">Application Deadlines:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-amber-600 mr-2 mt-0.5">
                                            calendar_month
                                        </span>
                                        <div>
                                            <p className="font-medium">Fall 2023 Applications</p>
                                            <p className="text-neutral-600">Due by April 15th</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-amber-600 mr-2 mt-0.5">
                                            priority_high
                                        </span>
                                        <div>
                                            <p className="font-medium">Early Decision</p>
                                            <p className="text-neutral-600">Due by January 1st</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-amber-600 mr-2 mt-0.5">
                                            calendar_month
                                        </span>
                                        <div>
                                            <p className="font-medium">Spring 2024 Applications</p>
                                            <p className="text-neutral-600">Due by October 1st</p>
                                        </div>
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-lg mt-6 mb-3">Required Documents:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-amber-600 mr-2">
                                            description
                                        </span>
                                        <span>Transcripts</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-amber-600 mr-2">quiz</span>
                                        <span>GMAT/GRE Scores</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-amber-600 mr-2">edit_note</span>
                                        <span>Personal Statement</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-amber-600 mr-2">
                                            contact_mail
                                        </span>
                                        <span>Letters of Recommendation</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Medicine Program */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-red-100 p-6">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-red-700 mr-3 text-3xl">
                                        medical_services
                                    </span>
                                    <h2 className="text-2xl font-bold text-primary-800">Medicine Program Deadlines</h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-3">Application Deadlines:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-red-600 mr-2 mt-0.5">
                                            calendar_month
                                        </span>
                                        <div>
                                            <p className="font-medium">Fall 2023 Applications</p>
                                            <p className="text-neutral-600">Due by November 1st</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-red-600 mr-2 mt-0.5">
                                            priority_high
                                        </span>
                                        <div>
                                            <p className="font-medium">Early Decision</p>
                                            <p className="text-neutral-600">Due by August 1st</p>
                                        </div>
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-lg mt-6 mb-3">Required Documents:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-red-600 mr-2">description</span>
                                        <span>Transcripts</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-red-600 mr-2">quiz</span>
                                        <span>MCAT Scores</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-red-600 mr-2">edit_note</span>
                                        <span>Personal Statement</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-red-600 mr-2">
                                            contact_mail
                                        </span>
                                        <span>Letters of Recommendation</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-red-600 mr-2">
                                            work_history
                                        </span>
                                        <span>Medical Experience</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Law Program */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="bg-purple-100 p-6">
                                <div className="flex items-center">
                                    <span className="material-symbols-outlined text-purple-700 mr-3 text-3xl">
                                        gavel
                                    </span>
                                    <h2 className="text-2xl font-bold text-primary-800">Law Program Deadlines</h2>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="font-semibold text-lg mb-3">Application Deadlines:</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-purple-600 mr-2 mt-0.5">
                                            calendar_month
                                        </span>
                                        <div>
                                            <p className="font-medium">Fall 2023 Applications</p>
                                            <p className="text-neutral-600">Due by June 15th</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="material-symbols-outlined text-purple-600 mr-2 mt-0.5">
                                            priority_high
                                        </span>
                                        <div>
                                            <p className="font-medium">Early Decision</p>
                                            <p className="text-neutral-600">Due by April 1st</p>
                                        </div>
                                    </li>
                                </ul>

                                <h3 className="font-semibold text-lg mt-6 mb-3">Required Documents:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-purple-600 mr-2">
                                            description
                                        </span>
                                        <span>Transcripts</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-purple-600 mr-2">quiz</span>
                                        <span>LSAT Scores</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-purple-600 mr-2">
                                            edit_note
                                        </span>
                                        <span>Personal Statement</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-purple-600 mr-2">
                                            contact_mail
                                        </span>
                                        <span>Letters of Recommendation</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="material-symbols-outlined text-purple-600 mr-2">work</span>
                                        <span>Resume</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Placeholder for potential additional program */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-2 border-dashed border-neutral-300 flex flex-col items-center justify-center p-10 text-center">
                            <span className="material-symbols-outlined text-neutral-400 text-5xl mb-4">add_circle</span>
                            <h3 className="text-xl font-bold text-neutral-500 mb-2">More Programs Coming Soon</h3>
                            <p className="text-neutral-400">Check back for additional programs and deadlines</p>
                        </div>
                        {/* Next: "Add filter buttons to view specific program deadlines" */}
                    </div>
                </div>

                {/* Footer */}
            </div>
    )
}

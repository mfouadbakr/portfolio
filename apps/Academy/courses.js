const coursesData =[
    {
        "id": "course_1",
        "name": "Digital Marketing Masterclass",
        "description": "Learn SEO, Social Media Marketing, PPC, and Email Marketing from industry experts. Boost your brand's online presence and drive real results.",
        "instructor": "Dr. Ahmed Hassan",
        "mode": "Hybrid",
        "isCustom": false,
        "predeterminedDays": ["Saturday", "Tuesday"],
        "predeterminedTimes": ["Evening"],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-100 relative overflow-hidden min-h-[220px]">
                <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Digital Marketing" class="w-full h-full object-cover absolute inset-0">
                <span class="absolute top-4 left-4 bg-gray-900 px-3 py-1 text-xs font-bold text-white rounded shadow-sm">Hybrid</span>
            </div>
            <div class="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2 font-poppins">Digital Marketing Masterclass</h3>
                    <p class="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">Learn SEO, Social Media Marketing, PPC, and Email Marketing from industry experts. Boost your brand's online presence and drive real results.</p>
                    
                    <!-- NEW PREMIUM BADGES -->
                    <div class="flex flex-wrap gap-3 mb-6">
                        <div class="flex items-center gap-1.5 bg-red-50 text-[#e70000] px-3 py-1.5 rounded-lg text-xs font-bold border border-red-100 uppercase tracking-wide">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            Dr. Ahmed Hassan
                        </div>
                        <div class="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 uppercase tracking-wide">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                            Sat, Tue (Evenings)
                        </div>
                    </div>

                </div>
                <div class="mt-2 text-right md:text-left">
                    <button onclick="openModal('course_1')" class="btn-custom w-full sm:w-auto shadow-sm">Register for Course</button>
                </div>
            </div>
        </div>`
    },
    {
        "id": "course_2",
        "name": "",
        "description": "",
        "instructor": "Assigned upon request",
        "mode": "Flexible",
        "isCustom": true,
        "predeterminedDays": [],
        "predeterminedTimes":[],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-900 relative overflow-hidden flex items-center justify-center min-h-[220px]">
                <svg class="w-20 h-20 text-[#e70000] opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span class="absolute top-4 left-4 bg-[#e70000] px-3 py-1 text-xs font-bold text-white rounded shadow-sm tracking-wide">Custom Tailored</span>
            </div>
            <div class="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-2 font-poppins">Request a Custom Course</h3>
                    <p class="text-sm md:text-base text-gray-600 mb-5 leading-relaxed">Don't see what you're looking for? Let us know what you want to learn, and our experts will tailor a learning path specifically for you.</p>
                    
                    <!-- NEW PREMIUM BADGES -->
                    <div class="flex flex-wrap gap-3 mb-6">
                        <div class="flex items-center gap-1.5 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 uppercase tracking-wide">
                            <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            Expert Assigned on Request
                        </div>
                        <div class="flex items-center gap-1.5 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 uppercase tracking-wide">
                            <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            Flexible Schedule
                        </div>
                    </div>

                </div>
                <div class="mt-2 text-right md:text-left">
                    <button onclick="openModal('course_2')" class="btn-custom btn-dark w-full sm:w-auto shadow-sm">Propose Custom Course</button>
                </div>
            </div>
        </div>`
    }
];
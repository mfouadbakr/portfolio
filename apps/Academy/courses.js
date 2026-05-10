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
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Digital Marketing Masterclass</h3>
                    <p class="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">Learn SEO, Social Media Marketing, PPC, and Email Marketing from industry experts. Boost your brand's online presence and drive real results.</p>
                    <div class="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-800 mb-6 border-l-4 border-[#e70000] pl-4 py-2 bg-gray-50 rounded-r-md">
                        <p><span class="font-semibold text-gray-900">Instructor:</span> Dr. Ahmed Hassan</p>
                        <p><span class="font-semibold text-gray-900">Schedule:</span> Sat, Tue (Evenings)</p>
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
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Request a Custom Course</h3>
                    <p class="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">Don't see what you're looking for? Let us know what you want to learn, and our experts will tailor a learning path specifically for you.</p>
                    <div class="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-800 mb-6 border-l-4 border-gray-800 pl-4 py-2 bg-gray-50 rounded-r-md">
                        <p><span class="font-semibold text-gray-900">Instructor:</span> Assigned upon request</p>
                        <p><span class="font-semibold text-gray-900">Schedule:</span> Flexible</p>
                    </div>
                </div>
                <div class="mt-2 text-right md:text-left">
                    <button onclick="openModal('course_2')" class="btn-custom btn-dark w-full sm:w-auto shadow-sm">Propose Custom Course</button>
                </div>
            </div>
        </div>`
    }
];
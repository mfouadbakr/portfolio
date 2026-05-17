const coursesData = [
    {
        "id": "course_cpp",
        "name": "C++ Programming Course",
        "description": "Learn C++ programming from scratch to advanced concepts, including memory management and high-performance applications.",
        "longDescription": `
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Foundations:</strong> Master variables, control structures, and functional programming in C++.</li>
                <li><strong class="text-gray-800">Memory Management:</strong> Understand deep memory concepts and dynamic memory allocation.</li>
                <li><strong class="text-gray-800">Pointers:</strong> A deep dive into pointers, references, and how they interact directly with hardware.</li>
                <li><strong class="text-gray-800">Object-Oriented Programming:</strong> Build scalable software using C++ OOP features.</li>
                <li><strong class="text-gray-800">Advanced Features:</strong> Utilize the Standard Template Library (STL) and handle file operations for high-performance apps.</li>
            </ul>
        `,
        "instructor": "Mohamed Bakr",
        "instructorBio": "Mohamed Bakr is an experienced software engineer and educator with a passion for teaching low-level concepts, system design, and high-performance coding. He brings practical, hands-on examples to help students deeply understand how code interacts with hardware.",
        "instructorPortfolio": "https://mfouadbakr.github.io/portfolio/index.html",
        "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "mode": "Online",
        "isCustom": false,
        "predeterminedDays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "predeterminedTimes": ["Evening"],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-100 relative overflow-hidden min-h-[240px]">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="C++ Programming" class="w-full h-full object-cover absolute inset-0">
                <span class="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded shadow-sm">Online</span>
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins">C++ Programming Course</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Learn C++ programming from scratch to advanced concepts, including memory management, pointers, and high-performance applications.</p>
                    
                    <div class="flex flex-wrap gap-3 mb-6">
                        <div class="flex items-center gap-1.5 bg-red-50 text-[#e70000] px-3 py-1.5 rounded-lg text-xs font-bold border border-red-100 uppercase tracking-wide">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            Mohamed Bakr
                        </div>
                        <div class="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 uppercase tracking-wide">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                            Sun - Thu (Evenings)
                        </div>
                    </div>
                </div>
                <div class="mt-2 flex sm:justify-end">
                    <button onclick="showCourseDetail('course_cpp')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    },
    {
        "id": "course_java",
        "name": "Java Programming Course",
        "description": "Master Java to build robust, scalable applications with a strong focus on object-oriented programming concepts.",
        "longDescription": `
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Core Java:</strong> Go from basic syntax to robust software development using best practices.</li>
                <li><strong class="text-gray-800">OOP Concepts Mastery:</strong> A massive focus on Inheritance, Polymorphism, Encapsulation, and Abstraction.</li>
                <li><strong class="text-gray-800">Data Handling:</strong> Explore exception handling and utilize the powerful Java Collections framework.</li>
                <li><strong class="text-gray-800">Concurrency:</strong> Learn multi-threading and concurrent programming to optimize application performance.</li>
                <li><strong class="text-gray-800">Architecture:</strong> Build modern, scalable enterprise applications from the ground up.</li>
            </ul>
        `,
        "instructor": "Mohamed Bakr",
        "instructorBio": "Mohamed Bakr is a seasoned software developer with extensive experience building scalable backends and enterprise software using Java and modern frameworks. He specializes in breaking down complex architectural patterns into easy-to-understand concepts.",
        "instructorPortfolio": "https://mfouadbakr.github.io/portfolio/index.html",
        "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "mode": "Online",
        "isCustom": false,
        "predeterminedDays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "predeterminedTimes": ["Evening"],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-100 relative overflow-hidden min-h-[240px]">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Java Programming" class="w-full h-full object-cover absolute inset-0">
                <span class="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded shadow-sm">Online</span>
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins">Java Programming Course</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Master Java to build robust, scalable applications with a strong focus on object-oriented programming concepts (OOP).</p>
                    
                    <div class="flex flex-wrap gap-3 mb-6">
                        <div class="flex items-center gap-1.5 bg-red-50 text-[#e70000] px-3 py-1.5 rounded-lg text-xs font-bold border border-red-100 uppercase tracking-wide">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            Mohamed Bakr
                        </div>
                        <div class="flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200 uppercase tracking-wide">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
                            Sun - Thu (Evenings)
                        </div>
                    </div>
                </div>
                <div class="mt-2 flex sm:justify-end">
                    <button onclick="showCourseDetail('course_java')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    },
    {
        "id": "course_custom",
        "name": "",
        "description": "Don't see what you're looking for? Let us know what you want to learn, and our experts will tailor a learning path specifically for you.",
        "longDescription": `
            <p class="text-gray-600 leading-relaxed text-lg mb-4">Our Custom Tailored Courses allow you to design a curriculum that directly aligns with your career goals and current skill level.</p>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Personalized Curriculum:</strong> Target the exact software skills, programming languages, or leadership tools you need.</li>
                <li><strong class="text-gray-800">Expert Matching:</strong> We source the perfect expert to guide you based on your unique goals.</li>
                <li><strong class="text-gray-800">Flexible Scheduling:</strong> Build a timeline and schedule that fits perfectly into your busy life.</li>
            </ul>
        `,
        "instructor": "Assigned upon request",
        "instructorBio": "We partner with a wide network of industry experts, university professors, and corporate leaders. Once you propose a topic and your goals, we will carefully match you with a vetted instructor who holds a proven track record in your requested field.",
        "instructorPortfolio": "", 
        "image": "",
        "mode": "Flexible",
        "isCustom": true,
        "predeterminedDays": [],
        "predeterminedTimes":[],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-900 relative overflow-hidden flex items-center justify-center min-h-[240px]">
                <svg class="w-24 h-24 text-[#e70000] opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span class="absolute top-4 left-4 bg-[#e70000] px-3 py-1 text-xs font-bold text-white rounded shadow-sm tracking-wide">Custom Tailored</span>
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins">Request a Custom Course</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Don't see what you're looking for? Let us know what you want to learn, and our experts will tailor a learning path specifically for you.</p>
                    
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
                <div class="mt-2 flex sm:justify-end">
                    <button onclick="showCourseDetail('course_custom')" class="btn-custom btn-dark w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    }
];
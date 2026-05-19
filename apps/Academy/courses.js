const coursesData = [
    {
        "id": "course_cpp",
        "name": "C++ Programming Course",
        "description": "Learn C++ programming from scratch to advanced concepts, including pointers, OOP, and memory management.",
        "longDescription": `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">C++ Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Basics:</strong> Syntax, variables, data types, input/output</li>
                <li><strong class="text-gray-800">Control Flow:</strong> Conditions (if, switch) and loops (for, while)</li>
                <li><strong class="text-gray-800">Functions:</strong> Creating and using functions, recursion</li>
                <li><strong class="text-gray-800">Arrays & Strings:</strong> Storing and manipulating data</li>
                <li><strong class="text-gray-800">Pointers:</strong> Memory handling and dynamic allocation</li>
                <li><strong class="text-gray-800">OOP (Core of C++):</strong> Classes, objects, inheritance, polymorphism</li>
                <li><strong class="text-gray-800">File Handling:</strong> Reading and writing files</li>
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
                    <p class="text-gray-600 mb-6 leading-relaxed">Learn C++ programming from scratch to advanced concepts, including pointers, OOP, and memory management.</p>
                    
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
                <div class="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                    <button onclick="copyCourseLink('course_cpp', this)" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        Share
                    </button>
                    <button onclick="showCourseDetail('course_cpp')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    },
    {
        "id": "course_java",
        "name": "Java Programming Course",
        "description": "Master Java to build robust applications with a strong focus on object-oriented programming and exception handling.",
        "longDescription": `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Java Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Basics:</strong> Syntax, variables, data types, input/output</li>
                <li><strong class="text-gray-800">Control Flow:</strong> Conditions (if, switch) and loops (for, while)</li>
                <li><strong class="text-gray-800">Functions (Methods):</strong> Defining and calling methods</li>
                <li><strong class="text-gray-800">Arrays & Strings:</strong> Working with arrays and String class</li>
                <li><strong class="text-gray-800">OOP (Core of Java):</strong> Classes, objects, inheritance, polymorphism, encapsulation</li>
                <li><strong class="text-gray-800">Exception Handling:</strong> try, catch, finally</li>
                <li><strong class="text-gray-800">File Handling:</strong> Reading and writing files</li>
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
                    <p class="text-gray-600 mb-6 leading-relaxed">Master Java to build robust applications with a strong focus on object-oriented programming and exception handling.</p>
                    
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
                <div class="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                    <button onclick="copyCourseLink('course_java', this)" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        Share
                    </button>
                    <button onclick="showCourseDetail('course_java')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    },
    {
        "id": "course_web",
        "name": "Web Programming",
        "description": "Learn to build interactive, responsive, and data-driven websites using modern front-end tools and powerful backend technologies.",
        "longDescription": `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Core Essentials:</strong> HTML, CSS, JS</li>
                <li><strong class="text-gray-800">Styling & UI:</strong> Bootstrap, Tailwind, Animate.CSS</li>
                <li><strong class="text-gray-800">Interactivity:</strong> JQuery</li>
                <li><strong class="text-gray-800">Backend Development:</strong> PHP</li>
                <li><strong class="text-gray-800">Databases:</strong> MySQL, MongoDB</li>
            </ul>
        `,
        "instructor": "Mohamed Bakr",
        "instructorBio": "Mohamed Bakr is a full-stack developer and instructor who specializes in turning complex web concepts into easy, digestible lessons, guiding students from static pages to dynamic web applications.",
        "instructorPortfolio": "https://mfouadbakr.github.io/portfolio/index.html",
        "image": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "mode": "Online",
        "isCustom": false,
        "predeterminedDays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "predeterminedTimes": ["Evening"],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-100 relative overflow-hidden min-h-[240px]">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Web Programming" class="w-full h-full object-cover absolute inset-0">
                <span class="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded shadow-sm">Online</span>
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins">Web Programming</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Learn to build interactive, responsive, and data-driven websites using modern front-end tools and powerful backend technologies.</p>
                    
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
                <div class="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                    <button onclick="copyCourseLink('course_web', this)" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        Share
                    </button>
                    <button onclick="showCourseDetail('course_web')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    },
    {
        "id": "course_vibecoding",
        "name": "Vibe Coding using Google AI Studio",
        "description": "Unlock the power of AI tools to rapidly build applications, chatbots, and generate code through advanced prompt engineering.",
        "longDescription": `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Vibe Coding Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Setup:</strong> Use Google AI Studio + Gemini (Pro & Flash)</li>
                <li><strong class="text-gray-800">Models:</strong> Pro → complex thinking | Flash → fast app building</li>
                <li><strong class="text-gray-800">Prompt Engineering:</strong> Write clear prompts and refine them to improve results</li>
                <li><strong class="text-gray-800">Playground:</strong> Test and experiment inside AI Studio</li>
                <li><strong class="text-gray-800">Build Apps:</strong> Create working apps using prompts (chatbots, tools, etc.)</li>
                <li><strong class="text-gray-800">Projects:</strong> Build a Chatbot, AI tools, create HTML pages, and generate LaTeX materials</li>
            </ul>
        `,
        "instructor": "Mohamed Bakr",
        "instructorBio": "Mohamed Bakr is on the cutting-edge of AI integrations, teaching developers and creatives how to leverage large language models to build rapid prototypes and automate tedious workflows.",
        "instructorPortfolio": "https://mfouadbakr.github.io/portfolio/index.html",
        "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "mode": "Online",
        "isCustom": false,
        "predeterminedDays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "predeterminedTimes": ["Evening"],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-100 relative overflow-hidden min-h-[240px]">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Vibe Coding Google AI" class="w-full h-full object-cover absolute inset-0">
                <span class="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded shadow-sm">Online</span>
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins">Vibe Coding using Google AI Studio</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Unlock the power of AI tools to rapidly build applications, chatbots, and generate code through advanced prompt engineering.</p>
                    
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
                <div class="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                    <button onclick="copyCourseLink('course_vibecoding', this)" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        Share
                    </button>
                    <button onclick="showCourseDetail('course_vibecoding')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    },
    {
        "id": "course_datamining",
        "name": "Data Mining & Analytics with Python",
        "description": "Master Python for data mining, statistics, and machine learning, featuring NumPy, Pandas, NLP, and text embeddings.",
        "longDescription": `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Python Fundamentals:</strong> Syntax, control structures, loops, and functions.</li>
                <li><strong class="text-gray-800">Data Structures:</strong> Deep dive into Lists, Tuples, Dictionaries, and list slicing/comprehensions.</li>
                <li><strong class="text-gray-800">Essential Data Libraries:</strong> NumPy (Arrays, matrices, math) and Pandas (DataFrames, Series, cleaning).</li>
                <li><strong class="text-gray-800">Statistical Foundations:</strong> Mean, Median, Mode, Max, Min, Range, Variance, and Standard Deviation.</li>
                <li><strong class="text-gray-800">Distance & Similarity Measures:</strong> Euclidean distance, Manhattan distance, and Cosine Similarity.</li>
                <li><strong class="text-gray-800">Data Mining Techniques:</strong> Regression, Classification (Decision Trees), Clustering (K-Means), and Association.</li>
                <li><strong class="text-gray-800">Advanced Mining (NLP & Embeddings):</strong> Natural Language Processing, Sentiment Analysis, Text Embeddings, and Graph Embeddings.</li>
                <li><strong class="text-gray-800">Evaluation & Use Cases:</strong> Accuracy, Precision, Recall, error metrics, and solving real-world business problems.</li>
            </ul>
        `,
        "instructor": "Mohamed Bakr",
        "instructorBio": "Mohamed Bakr brings years of data science expertise, teaching students how to move beyond basic analytics to extract deep, actionable insights and predictive patterns from complex data.",
        "instructorPortfolio": "https://mfouadbakr.github.io/portfolio/index.html",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "mode": "Online",
        "isCustom": false,
        "predeterminedDays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "predeterminedTimes": ["Evening"],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-100 relative overflow-hidden min-h-[240px]">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Data Mining with Python" class="w-full h-full object-cover absolute inset-0">
                <span class="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded shadow-sm">Online</span>
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins">Data Mining & Analytics with Python</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Master Python for data mining, statistics, and machine learning, featuring NumPy, Pandas, NLP, and text embeddings.</p>
                    
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
                <div class="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                    <button onclick="copyCourseLink('course_datamining', this)" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        Share
                    </button>
                    <button onclick="showCourseDetail('course_datamining')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    },
    {
        "id": "course_genai_analytics",
        "name": "Data Analytics using Generative AI",
        "description": "Bridge the gap between traditional data analytics and modern Generative AI, utilizing both cloud-based and local LLMs.",
        "longDescription": `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Introduction to GenAI:</strong> What it is, how it works, and core capabilities (summarization, generation, transformation).</li>
                <li><strong class="text-gray-800">Capabilities & Limitations:</strong> AI strengths, hallucinations, context limits, bias, and data privacy.</li>
                <li><strong class="text-gray-800">Cloud-based vs. Local LLMs:</strong> Commercial APIs (Gemini/ChatGPT) vs. local open-source LLMs (Llama/Mistral) for sensitive data.</li>
                <li><strong class="text-gray-800">AI-Assisted Data Prep:</strong> Using prompt engineering to clean, format, and structure messy datasets quickly.</li>
                <li><strong class="text-gray-800">Semantic Analytics & Embeddings:</strong> Text Embeddings and similarity distance measures for semantic search and NLP workflows.</li>
                <li><strong class="text-gray-800">Hybrid Solutions & Use Cases:</strong> Integrating Python/SQL with AI, Text-to-SQL, and hybrid Sentiment Analysis.</li>
                <li><strong class="text-gray-800">Automated Visualization & Reporting:</strong> Generating charts and narrative business reports directly from raw data.</li>
            </ul>
        `,
        "instructor": "Mohamed Bakr",
        "instructorBio": "Mohamed Bakr is on the cutting-edge of AI integrations, teaching developers and analysts how to leverage large language models to build rapid prototypes, automate complex reporting, and write hybrid logic pipelines.",
        "instructorPortfolio": "https://mfouadbakr.github.io/portfolio/index.html",
        "image": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        "mode": "Online",
        "isCustom": false,
        "predeterminedDays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "predeterminedTimes": ["Evening"],
        "html": `
        <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="w-full md:w-1/3 bg-gray-100 relative overflow-hidden min-h-[240px]">
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Generative AI Data Analytics" class="w-full h-full object-cover absolute inset-0">
                <span class="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded shadow-sm">Online</span>
            </div>
            <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <div>
                    <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins">Data Analytics using Generative AI</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Bridge the gap between traditional data analytics and modern Generative AI, utilizing both cloud-based and local LLMs.</p>
                    
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
                <div class="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                    <button onclick="copyCourseLink('course_genai_analytics', this)" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        Share
                    </button>
                    <button onclick="showCourseDetail('course_genai_analytics')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
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
                <div class="mt-4 flex flex-col sm:flex-row justify-end gap-3">
                    <button onclick="copyCourseLink('course_custom', this)" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                        Share
                    </button>
                    <button onclick="showCourseDetail('course_custom')" class="btn-custom btn-dark w-full sm:w-auto shadow-sm">View Details</button>
                </div>
            </div>
        </div>`
    }
];
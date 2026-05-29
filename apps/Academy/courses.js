const coursesData = [
    {
        id: "course_digitalmarketing",
        name: "Digital Marketing Course",
        description: "Start from zero to your first client! Learn the best strategies through practical applications and interactive offline training.",
        longDescription: `
            <div class="bg-red-50 border-l-4 border-[#e70000] p-4 mb-6">
                <p class="text-[#e70000] font-bold">🔥 Special Offer: 50% Discount for the first 5 people who register! Limited seats available.</p>
            </div>
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Highlights (من الصفر لأول عميل)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Best Strategies (افضل الاستراتيجيات):</strong> Master modern marketing funnels, audience targeting, and ad campaign structures.</li>
                <li><strong class="text-gray-800">Practical Applications (تطبيقات عملية):</strong> Hands-on experience creating, running, and managing real ad campaigns.</li>
                <li><strong class="text-gray-800">Interactive Training (تدريب تفاعلي):</strong> Learn in a fully offline, engaging environment with real-time feedback.</li>
                <li><strong class="text-gray-800">Securing Your First Client:</strong> Step-by-step guidance on how to package your skills and land your very first paying client.</li>
                <li><strong class="text-gray-800">Course Certificate (شهادة اتمام الكورس):</strong> Receive a certified document upon successful completion of the course.</li>
            </ul>
        `,
        instructorId: "inst_kamal",
        image: "images/digital_marketing.png", 
        mode: "Face to Face",
        priceType: "Paid",
        badge: "50% OFF (First 5)",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Morning","Afternoon", "Evening"]
    },
    {
        id: "course_cpp",
        name: "C++ Programming",
        description: "Learn C++ programming from scratch to advanced concepts, including pointers, and memory management.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (6 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1: Basics -</strong> Syntax, variables, data types, and input/output.</li>
                <li><strong class="text-gray-800">Session 2: Conditions -</strong> Control flow using If statements, else-if, and switch cases.</li>
                <li><strong class="text-gray-800">Session 3: Loops -</strong> Iteration using For, While, Do-While loops, break, and continue.</li>
                <li><strong class="text-gray-800">Session 4: Functions -</strong> Creating and using functions, scope, and recursion.</li>
                <li><strong class="text-gray-800">Session 5: Arrays & Strings -</strong> Storing, accessing, and manipulating sequence data.</li>
                <li><strong class="text-gray-800">Session 6: Pointers -</strong> Memory handling, references, and dynamic memory allocation.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/cpp.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_java",
        name: "Java Programming (OOP)",
        description: "Master Java to build robust applications with a strong focus on object-oriented programming and exception handling.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (6 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1: Basics -</strong> Syntax, variables, data types, and input/output.</li>
                <li><strong class="text-gray-800">Session 2: Control Flow -</strong> If statements, switch cases, and loops (for, while).</li>
                <li><strong class="text-gray-800">Session 3: OOP Basics -</strong> Introduction to classes, objects, constructors, and methods.</li>
                <li><strong class="text-gray-800">Session 4: Encapsulation & Inheritance -</strong> Access modifiers, getters/setters, and code reusability.</li>
                <li><strong class="text-gray-800">Session 5: Polymorphism & Abstraction -</strong> Method overriding, Method overloading, abstract classes, and interfaces.</li>
                <li><strong class="text-gray-800">Session 6: Exception Handling -</strong> Handling errors using try, catch, and finally blocks.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/java.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_python_prog",
        name: "Python Programming",
        description: "Master the core building blocks of programming, from basic variables to advanced multi-dimensional arrays and functions.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (6 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1:</strong> Variables, Math Operations, Concatenation</li>
                <li><strong class="text-gray-800">Session 2:</strong> If statements and logical conditions</li>
                <li><strong class="text-gray-800">Session 3:</strong> Loop statements (including break, continue)</li>
                <li><strong class="text-gray-800">Session 4:</strong> Array/List (1D, 2D, Multi-Dimensions)</li>
                <li><strong class="text-gray-800">Session 5:</strong> Functions and code reusability</li>
                <li><strong class="text-gray-800">Session 6:</strong> Student Practical Exam</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/data_mining.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_data_mining",
        name: "Data Mining",
        description: "Transition from basic Python to data science. Learn how to process data and build classification and clustering models.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (8 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 7:</strong> Introduction to Data Mining and Generative AI</li>
                <li><strong class="text-gray-800">Session 8:</strong> Introduction to Python for Data Science Part 1</li>
                <li><strong class="text-gray-800">Session 9:</strong> Introduction to Python for Data Science Part 2</li>
                <li><strong class="text-gray-800">Session 10:</strong> Introduction to Python for Data Science Part 3</li>
                <li><strong class="text-gray-800">Session 11:</strong> Classification Algorithms</li>
                <li><strong class="text-gray-800">Session 12:</strong> Clustering Algorithms</li>
                <li><strong class="text-gray-800">Session 13:</strong> Association Rules</li>
                <li><strong class="text-gray-800">Session 14:</strong> Hands-on Data Mining Project</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/data_mining.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_gen_ai",
        name: "Generative AI",
        description: "Dive into cutting-edge AI. Learn Natural Language Processing, text embeddings, prompt engineering, and RAG using local and cloud LLMs.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (5 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 15:</strong> Introduction to Generative AI and NLP</li>
                <li><strong class="text-gray-800">Session 16:</strong> Project - NLP with Embeddings (Text Similarity, Summarization, Sentiment Analysis)</li>
                <li><strong class="text-gray-800">Session 17:</strong> Project - Prompt Engineering via Cloud-Based LLM</li>
                <li><strong class="text-gray-800">Session 18:</strong> Project - Prompt Engineering with RAG via Local LLM</li>
                <li><strong class="text-gray-800">Session 19:</strong> Student Project - Hybrid Solution & Final Delivery</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/vibe_coding.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_web_basics",
        name: "Web Basics: HTML, CSS, & JavaScript",
        description: "Learn the foundational languages of the web. Build static websites, structure layouts, and add core interactivity.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (8 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1: HTML Basics -</strong> Page structure, headings, paragraphs, and attributes.</li>
                <li><strong class="text-gray-800">Session 2: HTML Forms & Media -</strong> Creating inputs, forms, tables, and integrating media.</li>
                <li><strong class="text-gray-800">Session 3: CSS Styling -</strong> Selectors, colors, fonts, margins, and the Box Model.</li>
                <li><strong class="text-gray-800">Session 4: CSS Layouts -</strong> Master alignment and structure using Flexbox and Grid.</li>
                <li><strong class="text-gray-800">Session 5: JS Fundamentals -</strong> Variables, basic operations, and condition structures.</li>
                <li><strong class="text-gray-800">Session 6: JS Control Flow -</strong> Loop statements, basic functions, and array handling.</li>
                <li><strong class="text-gray-800">Session 7: DOM Manipulation -</strong> Dynamically accessing and editing elements in HTML using JavaScript.</li>
                <li><strong class="text-gray-800">Session 8: Project Session -</strong> Build a responsive static landing page from scratch.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/web_programming.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_frontend_enhancement",
        name: "Interactive UIs: jQuery, Bootstrap, & Animate.CSS",
        description: "Speed up your styling using Bootstrap, simplify scripts using jQuery, and add modern entrance/hover animations.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (6 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1: Bootstrap Basics -</strong> Layout grid systems, containers, and building responsive structures.</li>
                <li><strong class="text-gray-800">Session 2: Bootstrap Components -</strong> Integrating navbars, cards, alerts, modals, and carousel items.</li>
                <li><strong class="text-gray-800">Session 3: jQuery Essentials -</strong> Query selectors, events, and dynamic classes.</li>
                <li><strong class="text-gray-800">Session 4: jQuery Animations -</strong> Fading, sliding, custom animate loops, and element manipulation.</li>
                <li><strong class="text-gray-800">Session 5: Animate.CSS -</strong> Adding eye-catching entrance animations and UI micro-interactions.</li>
                <li><strong class="text-gray-800">Session 6: Enhancement Project -</strong> Take your static landing page and rebuild it with custom responsive components and animations.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/web_programming.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_backend_php_mysql",
        name: "Backend Applications: PHP & MySQL",
        description: "Transform static templates into dynamic data-driven websites. Build server logic and handle database transactions.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (8 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1: PHP Basics -</strong> Syntax, loops, conditional backend checks, and functional scopes.</li>
                <li><strong class="text-gray-800">Session 2: PHP Superglobals -</strong> Managing data transfers via HTML using GET, POST, and Request headers.</li>
                <li><strong class="text-gray-800">Session 3: SQL Foundations -</strong> Designing database tables, relational schemas, primary keys, and data types.</li>
                <li><strong class="text-gray-800">Session 4: SQL Operations -</strong> Querying databases using SELECT, INSERT, UPDATE, and DELETE.</li>
                <li><strong class="text-gray-800">Session 5: Connection & Queries -</strong> Interfacing PHP with MySQL databases using PDO connections.</li>
                <li><strong class="text-gray-800">Session 6: CRUD Operations -</strong> Building a functional, secure web dashboard interface to manage database entries.</li>
                <li><strong class="text-gray-800">Session 7: Session Control & Security -</strong> Formulating login screens, hashing passwords, managing user cookies, and restricting pages.</li>
                <li><strong class="text-gray-800">Session 8: Capstone Project -</strong> Build a complete, functional database-driven CRUD Web Application.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/web_programming.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_microsoft_office",
        name: "Microsoft Office Mastery: Word, Excel, & PowerPoint",
        description: "Build essential workplace and academic skills. Master professional document formatting, advanced data analysis, and high-impact presentations.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (8 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1: MS Word -</strong> Document structure, layout grids, typography configurations, and style templates.</li>
                <li><strong class="text-gray-800">Session 2: MS Word -</strong> Auto-generating Tables of Contents, mail merging, and implementing references.</li>
                <li><strong class="text-gray-800">Session 3: MS Excel -</strong> Spreadsheet concepts, absolute vs. relative cell references, and fundamental math functions.</li>
                <li><strong class="text-gray-800">Session 4: MS Excel -</strong> Formatting tables, dynamic visual charts, conditional sorting, and data filtering.</li>
                <li><strong class="text-gray-800">Session 5: MS Excel -</strong> Deep-dive into lookups (VLOOKUP/XLOOKUP), nesting conditions, and interactive Pivot Tables.</li>
                <li><strong class="text-gray-800">Session 6: MS PowerPoint -</strong> Slide layouts, designing visual paths, outlining presentations, and keeping audience attention.</li>
                <li><strong class="text-gray-800">Session 7: MS PowerPoint -</strong> Timing controls, setting transitions, interactive micro-animations, and slide setups.</li>
                <li><strong class="text-gray-800">Session 8: Practical Application -</strong> Final capstone combining a written word report, dynamic Excel sheet analysis, and visual slide deck presentation.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/office.png",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_educational_tools",
        name: "Educational Tools for Educators",
        description: "Equip yourself with the essential digital tools to organize course materials, compress video lessons, record streams, and manage students effectively.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (6 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1: Google Classroom -</strong> Advanced organization, creating assignments, structuring classes, and managing students.</li>
                <li><strong class="text-gray-800">Session 2: Google Drive -</strong> Cloud storage layouts, sharing course materials safely, and dynamic asset management.</li>
                <li><strong class="text-gray-800">Session 3: Google Sheets -</strong> Organizing student rosters, grading tracking templates, and calculating performance trends.</li>
                <li><strong class="text-gray-800">Session 4: Google Meet -</strong> Running online sessions smoothly, screen sharing best practices, and interactive breakout controls.</li>
                <li><strong class="text-gray-800">Session 5: OBS Studio -</strong> Configuring screen and webcam recording, creating scenes, overlays, and lecture capture setups.</li>
                <li><strong class="text-gray-800">Session 6: Handbrake -</strong> Best practices for video compression, reducing file sizes without losing quality, and optimization for uploads.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/online_teaching.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_presentationskills",
        name: "Presentation Skills",
        description: "Learn the art of public speaking, discover best practices, avoid common mistakes, and practice delivering impactful presentations.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline (3 Sessions)</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Session 1: Visual Aids Design -</strong> Designing clear, impactful slides, choosing proper layouts, and utilizing visual aids effectively.</li>
                <li><strong class="text-gray-800">Session 2: Delivery & Anxiety -</strong> Vocal and physical delivery best practices (body language, eye contact) and techniques to overcome barriers and stage fright.</li>
                <li><strong class="text-gray-800">Session 3: Live Practice & Feedback -</strong> An interactive practical session where students deliver live presentations and receive constructive critique.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/presentation_skills.jpg",
        mode: "Online",
        priceType: "Paid",
        predeterminedDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    }
];
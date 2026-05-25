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
        predeterminedDays: ["Saturday", "Monday", "Wednesday"],
        predeterminedTimes: ["Afternoon", "Evening"]
    },
    {
        id: "course_teaching_online",
        name: "How to Teach Online Effectively",
        description: "Master the ultimate toolkit for online educators: Google Meet, Classroom, Drive, Sheets, and OBS Studio for professional streaming.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline</h4>
            <p class="text-gray-600 mb-4">Transitioning to online teaching can be overwhelming. This course equips you with the exact tools and workflows needed to run smooth, interactive, and highly professional online classes.</p>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Google Workspace Mastery:</strong> Deep dive into Google Classroom for assignments, Google Drive for file management, and Google Sheets for grading and tracking.</li>
                <li><strong class="text-gray-800">Google Meet:</strong> Advanced features, breakout rooms, screen sharing best practices, and managing student engagement.</li>
                <li><strong class="text-gray-800">OBS Studio:</strong> Learn how to use Open Broadcaster Software to create professional overlays, switch between multiple cameras/screens, and record high-quality lectures.</li>
                <li><strong class="text-gray-800">Hardware Setup:</strong> Recommendations and configuration for microphones, lighting, and cameras on a budget.</li>
            </ul>
        `,
        instructorId: "inst_mohamed",
        image: "images/online_teaching.jpg",
        mode: "Online",
        priceType: "Free",
        badge: "Free Course",
        predeterminedDays: ["Sunday", "Tuesday", "Thursday"],
        predeterminedTimes: ["Evening"]
    },
    {
        id: "course_cpp",
        name: "C++ Programming Course",
        description: "Learn C++ programming from scratch to advanced concepts, including pointers, OOP, and memory management.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">C++ Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Basics:</strong> Syntax, variables, data types, input/output</li>
                <li><strong class="text-gray-800">Control Flow:</strong> Conditions (if, switch) and loops (for, while)</li>
                <li><strong class="text-gray-800">Functions:</strong> Creating and using functions, recursion</li>
                <li><strong class="text-gray-800">Arrays & Strings:</strong> Storing and manipulating data</li>
                <li><strong class="text-gray-800">Pointers:</strong> Memory handling and dynamic allocation</li>
                <li><strong class="text-gray-800">OOP (Core of C++):</strong> Classes, objects, inheritance, polymorphism</li>
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
        name: "Java Programming Course",
        description: "Master Java to build robust applications with a strong focus on object-oriented programming and exception handling.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Java Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Basics:</strong> Syntax, variables, data types, input/output</li>
                <li><strong class="text-gray-800">OOP (Core of Java):</strong> Classes, objects, inheritance, polymorphism, encapsulation</li>
                <li><strong class="text-gray-800">Exception Handling:</strong> try, catch, finally</li>
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
        id: "course_web",
        name: "Web Programming",
        description: "Learn to build interactive, responsive, and data-driven websites using modern front-end tools and backend technologies.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Core Essentials:</strong> HTML, CSS, JS</li>
                <li><strong class="text-gray-800">Styling & UI:</strong> Bootstrap, Tailwind, Animate.CSS</li>
                <li><strong class="text-gray-800">Backend Development:</strong> PHP</li>
                <li><strong class="text-gray-800">Databases:</strong> MySQL, MongoDB</li>
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
        id: "course_vibecoding",
        name: "Vibe Coding using Google AI Studio",
        description: "Unlock the power of AI tools to rapidly build applications, chatbots, and generate code through advanced prompt engineering.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Vibe Coding Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Setup:</strong> Use Google AI Studio + Gemini (Pro & Flash)</li>
                <li><strong class="text-gray-800">Prompt Engineering:</strong> Write clear prompts and refine them to improve results</li>
                <li><strong class="text-gray-800">Projects:</strong> Build a Chatbot, AI tools, create HTML pages, and generate LaTeX materials</li>
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
        id: "course_datamining",
        name: "Data Mining & Analytics with Python",
        description: "Master Python for data mining, statistics, and machine learning, featuring NumPy, Pandas, NLP, and text embeddings.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Essential Data Libraries:</strong> NumPy and Pandas.</li>
                <li><strong class="text-gray-800">Data Mining Techniques:</strong> Regression, Classification (Decision Trees), Clustering (K-Means).</li>
                <li><strong class="text-gray-800">Advanced Mining:</strong> Natural Language Processing, Sentiment Analysis, Text Embeddings.</li>
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
        id: "course_presentationskills",
        name: "Mastering Presentation Skills",
        description: "Learn the art of public speaking, discover best practices, avoid common mistakes, and practice delivering impactful presentations.",
        longDescription: `
            <h4 class="font-bold text-gray-800 mb-3 text-xl">Course Outline</h4>
            <ul class="list-disc pl-5 space-y-3 text-gray-600">
                <li><strong class="text-gray-800">Best Practices:</strong> Body language, tone of voice, eye contact.</li>
                <li><strong class="text-gray-800">Common Mistakes:</strong> Overcoming stage fright, avoiding "death by PowerPoint".</li>
                <li><strong class="text-gray-800">Live Practicing:</strong> Interactive sessions where students deliver mock presentations.</li>
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
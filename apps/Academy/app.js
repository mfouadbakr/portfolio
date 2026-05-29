// app.js
let submittedFormType = null;
let currentActiveItem = null; // Can hold a course, track, or custom object
let currentConsultationInstructor = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    handleSearch();
    
    document.getElementById('search-input').addEventListener('input', handleSearch);
    document.getElementById('filter-price').addEventListener('change', handleSearch);
    document.getElementById('search-type').addEventListener('change', handleSearch);

    handleUrlRouting(false);
});

window.addEventListener('popstate', () => handleUrlRouting(false));

// View & Routing Handlers
function handleUrlRouting(pushState = true) {
    const urlParams = new URLSearchParams(window.location.search);
    const courseParam = urlParams.get('course');
    const instParam = urlParams.get('instructor');
    const trackParam = urlParams.get('track');

    if (courseParam) {
        showCourseDetail(courseParam, pushState);
    } else if (instParam) {
        showInstructorProfile(instParam, pushState);
    } else if (trackParam) {
        showTrackDetail(trackParam, pushState);
    } else {
        showHome(pushState);
    }
}

function updateMetaTags(title) { 
    document.title = title; 
}

function showHome(pushState = true) {
    if (pushState) {
        const url = new URL(window.location);
        url.searchParams.delete('course');
        url.searchParams.delete('instructor');
        url.searchParams.delete('track');
        window.history.pushState({}, '', url);
    }
    updateMetaTags('Classless Academy | Master Your Craft');
    document.getElementById('course-detail-view').classList.add('hidden');
    document.getElementById('instructor-profile-view').classList.add('hidden');
    document.getElementById('track-detail-view').classList.add('hidden');
    document.getElementById('home-view').classList.remove('hidden');
    window.scrollTo(0, 0);
    handleSearch();
}

// HTML Generators
function generateCourseCardHTML(course) {
    const instructor = instructorsData.find(i => i.id === course.instructorId);
    const instName = instructor ? instructor.name : "Unknown Instructor";

    const badgeHTML = course.badge 
        ? `<div class="absolute top-0 right-0 bg-[#e70000] text-white px-4 py-1 text-xs font-bold rounded-bl-lg shadow-sm z-10 animate-pulse">${course.badge}</div>` 
        : '';

    const priceColor = course.priceType === 'Free' ? 'text-green-600 bg-green-50 border-green-200' : 'text-gray-700 bg-gray-100 border-gray-200';
    const priceIcon = course.priceType === 'Free' 
        ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>`
        : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>`;

    return `
    <div class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative">
        ${badgeHTML}
        <div class="w-full md:w-1/3 bg-gray-100 relative overflow-hidden min-h-[240px]">
            <img src="${course.image}" alt="${course.name}" class="w-full h-full object-cover absolute inset-0">
            <span class="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white rounded shadow-sm">${course.mode}</span>
        </div>
        <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
            <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins">${course.name}</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">${course.description}</p>
                
                <div class="flex flex-wrap gap-3 mb-6">
                    <button onclick="event.stopPropagation(); showInstructorProfile('${course.instructorId}')" class="flex items-center gap-1.5 bg-red-50 text-[#e70000] hover:bg-red-100 px-3 py-1.5 rounded-lg text-xs font-bold border border-red-100 uppercase tracking-wide transition-colors z-10 relative">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                        ${instName}
                    </button>
                    <div class="flex items-center gap-1.5 ${priceColor} px-3 py-1.5 rounded-lg text-xs font-bold border uppercase tracking-wide">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">${priceIcon}</svg>
                        ${course.priceType}
                    </div>
                </div>
            </div>
            <div class="mt-4 flex flex-col sm:flex-row justify-end gap-3 relative z-10">
                <button onclick="event.stopPropagation(); copyLink('${course.id}', this, 'course')" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> Share
                </button>
                <button onclick="showCourseDetail('${course.id}')" class="btn-custom w-full sm:w-auto shadow-sm">View Details</button>
            </div>
        </div>
    </div>`;
}

function generateInstructorCardHTML(instructor) {
    return `
    <div onclick="showInstructorProfile('${instructor.id}')" class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center md:items-start gap-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
        <img src="${instructor.image}" alt="${instructor.name}" class="w-32 h-32 rounded-full shadow-md object-cover border-4 border-gray-50 group-hover:border-red-50 transition-colors">
        <div class="flex-1 text-center md:text-left flex flex-col justify-between h-full">
            <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-[#e70000] transition-colors">${instructor.name}</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">${instructor.bio}</p>
            </div>
            <div class="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 relative z-10">
                <button onclick="event.stopPropagation(); copyLink('${instructor.id}', this, 'instructor')" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> Share
                </button>
                <span class="text-sm font-bold text-[#e70000] uppercase tracking-wide flex items-center gap-1">
                    View Profile <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
            </div>
        </div>
    </div>`;
}

function generateTrackCardHTML(track) {
    const courseCount = track.courseIds.length;
    return `
    <div onclick="showTrackDetail('${track.id}')" class="flex flex-col md:flex-row bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group">
        <div class="w-full md:w-1/3 bg-gray-900 relative overflow-hidden min-h-[200px]">
            <img src="${track.image}" alt="${track.name}" class="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500">
            <span class="absolute top-4 left-4 bg-[#e70000] px-3 py-1 text-xs font-bold text-white rounded shadow-sm uppercase tracking-wider">Track</span>
        </div>
        <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
            <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-3 font-poppins group-hover:text-[#e70000] transition-colors">${track.name}</h3>
                <p class="text-gray-600 mb-4 leading-relaxed">${track.description}</p>
                <span class="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-gray-200">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    ${courseCount} Courses included
                </span>
            </div>
            <div class="mt-6 flex flex-col sm:flex-row items-center justify-end gap-4 relative z-10">
                <button onclick="event.stopPropagation(); copyLink('${track.id}', this, 'track')" class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 border border-gray-200 rounded-lg transition-colors w-full sm:w-auto">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> Share
                </button>
                <span class="text-sm font-bold text-[#e70000] uppercase tracking-wide flex items-center gap-1">
                    Explore Track <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
            </div>
        </div>
    </div>`;
}

// Search and Utilities
function handleSearch() {
    const searchType = document.getElementById('search-type').value;
    const query = document.getElementById('search-input').value.toLowerCase();
    const container = document.getElementById('main-list-container');
    const title = document.getElementById('list-title');
    
    container.innerHTML = '';

    if (searchType === 'courses') {
        title.innerText = "Available Programs";
        document.getElementById('filters-container').classList.remove('hidden');
        
        const priceFilter = document.getElementById('filter-price').value;
        const filtered = coursesData.filter(c => {
            const matchesQuery = `${c.name} ${c.description}`.toLowerCase().includes(query);
            const matchesPrice = priceFilter === 'All' || c.priceType === priceFilter;
            return matchesQuery && matchesPrice;
        });

        if (filtered.length === 0) {
            container.innerHTML = `<p class="text-gray-500 text-center py-10 text-lg">No courses found.</p>`;
        } else {
            filtered.forEach(c => container.innerHTML += generateCourseCardHTML(c));
        }
    } else if (searchType === 'instructors') {
        title.innerText = "Our Expert Instructors";
        document.getElementById('filters-container').classList.add('hidden'); 
        
        const filtered = instructorsData.filter(i => {
            return `${i.name} ${i.bio}`.toLowerCase().includes(query);
        });

        if (filtered.length === 0) {
            container.innerHTML = `<p class="text-gray-500 text-center py-10 text-lg">No instructors found.</p>`;
        } else {
            container.innerHTML = `<div class="grid grid-cols-1 gap-6">${filtered.map(i => generateInstructorCardHTML(i)).join('')}</div>`;
        }
    } else if (searchType === 'tracks') {
        title.innerText = "Learning Tracks";
        document.getElementById('filters-container').classList.add('hidden');
        
        const filtered = tracksData.filter(t => {
            return `${t.name} ${t.description}`.toLowerCase().includes(query);
        });

        if (filtered.length === 0) {
            container.innerHTML = `<p class="text-gray-500 text-center py-10 text-lg">No tracks found.</p>`;
        } else {
            container.innerHTML = `<div class="flex flex-col gap-8">${filtered.map(t => generateTrackCardHTML(t)).join('')}</div>`;
        }
    }
}

function copyLink(id, btnElement, type="course") {
    const baseUrl = window.location.origin + window.location.pathname;
    const linkToCopy = `${baseUrl}?${type}=${id}`;
    navigator.clipboard.writeText(linkToCopy).then(() => {
        const originalHTML = btnElement.innerHTML;
        btnElement.innerHTML = `<span class="text-green-600 font-bold">Copied!</span>`;
        setTimeout(() => btnElement.innerHTML = originalHTML, 2000);
    });
}

// Detail Views Setup
function showTrackDetail(trackId, pushState = true) {
    const track = tracksData.find(t => t.id === trackId);
    if (!track) return showHome(true);

    if (pushState) {
        const url = new URL(window.location);
        url.searchParams.set('track', trackId);
        url.searchParams.delete('course');
        url.searchParams.delete('instructor');
        window.history.pushState({trackId}, '', url);
    }

    updateMetaTags(`${track.name} | Classless Academy`);

    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('course-detail-view').classList.add('hidden');
    document.getElementById('instructor-profile-view').classList.add('hidden');
    
    const trackView = document.getElementById('track-detail-view');
    trackView.classList.remove('hidden');
    window.scrollTo(0, 0);

    const trackCourses = track.courseIds.map(id => coursesData.find(c => c.id === id)).filter(Boolean);
    let coursesHTML = trackCourses.map(c => generateCourseCardHTML(c)).join('');

    const container = document.getElementById('track-content-container');
    container.innerHTML = `
        <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-8">
            <div class="h-48 bg-gray-900 relative">
                <img src="${track.image}" class="w-full h-full object-cover opacity-40 mix-blend-overlay">
            </div>
            <div class="p-8 relative">
                <div class="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <div class="bg-[#e70000] text-white text-xs font-bold px-3 py-1 rounded inline-block mb-3 uppercase tracking-wider">Learning Track</div>
                        <h2 class="text-3xl font-bold font-poppins text-gray-900 mb-2">${track.name}</h2>
                        <p class="text-gray-600 leading-relaxed max-w-3xl">${track.description}</p>
                    </div>
                    <div class="flex flex-col gap-3 w-full md:w-auto shrink-0">
                        <button onclick="openCourseModal('${track.id}', 'track')" class="btn-custom text-lg px-8 py-4 shadow-xl hover:shadow-2xl w-full">Register Track</button>
                        <button onclick="copyLink('${track.id}', this, 'track')" class="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors shadow-sm w-full">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> Share
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-6 font-poppins pl-2">Courses in this Track (${trackCourses.length})</h3>
        <div class="flex flex-col gap-6">
            ${coursesHTML || '<p class="text-gray-500 pl-2">No courses added to this track yet.</p>'}
        </div>
    `;
}

function showCourseDetail(courseId, pushState = true) {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return showHome(true);

    if (pushState) {
        const url = new URL(window.location);
        url.searchParams.set('course', courseId);
        url.searchParams.delete('instructor');
        url.searchParams.delete('track');
        window.history.pushState({courseId}, '', url);
    }

    const instructor = instructorsData.find(i => i.id === course.instructorId);
    updateMetaTags(`${course.name} | Classless Academy`);

    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('instructor-profile-view').classList.add('hidden');
    document.getElementById('track-detail-view').classList.add('hidden');
    
    const detailView = document.getElementById('course-detail-view');
    detailView.classList.remove('hidden');
    window.scrollTo(0, 0);

    const container = document.getElementById('detail-content-container');
    container.innerHTML = `
        <div class="h-64 md:h-[400px] w-full bg-gray-200 relative">
            <img src="${course.image}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        <div class="p-8 md:p-12">
            <div class="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
                <div class="flex-1">
                    <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-poppins">${course.name}</h2>
                    <div class="flex flex-wrap gap-3">
                        <button onclick="showInstructorProfile('${course.instructorId}')" class="bg-red-50 text-[#e70000] hover:bg-red-100 px-4 py-2 rounded-lg text-sm font-bold border border-red-100 flex items-center gap-2 transition-colors">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            Instructor: ${instructor.name}
                        </button>
                        <span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-bold border border-gray-200">
                            Format: ${course.mode}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-3 w-full md:w-auto shrink-0">
                    <button onclick="openCourseModal('${course.id}', 'course')" class="btn-custom text-lg px-8 py-4 shadow-xl hover:shadow-2xl w-full">Enroll Now</button>
                    <button onclick="copyLink('${course.id}', this, 'course')" class="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors shadow-sm w-full">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> Share
                    </button>
                </div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div class="md:col-span-2 space-y-6">
                    <h3 class="text-2xl font-bold font-poppins border-b pb-2 border-gray-200">Course Overview</h3>
                    <div class="text-lg leading-relaxed">${course.longDescription}</div>
                </div>
                <div class="space-y-6">
                    <h3 class="text-2xl font-bold font-poppins border-b pb-2 border-gray-200">Instructor</h3>
                    <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center md:text-left">
                        <img src="${instructor.image}" class="w-20 h-20 rounded-full mx-auto md:mx-0 mb-4 shadow-md">
                        <h4 class="font-bold text-lg mb-2 text-gray-900">${instructor.name}</h4>
                        <p class="text-gray-600 text-sm leading-relaxed">${instructor.bio}</p>
                        <button onclick="showInstructorProfile('${instructor.id}')" class="mt-4 w-full bg-white border border-gray-200 text-gray-700 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors">
                            View Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showInstructorProfile(instructorId, pushState = true) {
    const instructor = instructorsData.find(i => i.id === instructorId);
    if (!instructor) return showHome(true);

    if (pushState) {
        const url = new URL(window.location);
        url.searchParams.set('instructor', instructorId);
        url.searchParams.delete('course');
        url.searchParams.delete('track');
        window.history.pushState({instructorId}, '', url);
    }

    updateMetaTags(`${instructor.name} | Classless Academy`);

    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('course-detail-view').classList.add('hidden');
    document.getElementById('track-detail-view').classList.add('hidden');
    
    const instView = document.getElementById('instructor-profile-view');
    instView.classList.remove('hidden');
    window.scrollTo(0, 0);

    const instCourses = coursesData.filter(c => c.instructorId === instructorId);
    let coursesHTML = instCourses.map(c => generateCourseCardHTML(c)).join('');

    const portfolioBtnHtml = instructor.portfolio 
        ? `<a href="${instructor.portfolio}" target="_blank" class="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gray-900 hover:bg-black rounded-xl transition-colors shadow-sm w-full sm:w-auto">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                View Website
           </a>` 
        : '';

    const container = document.getElementById('instructor-content-container');
    container.innerHTML = `
        <div class="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden mb-8">
            <div class="h-32 bg-gray-900"></div>
            <div class="px-8 pb-8 relative">
                <img src="${instructor.image}" class="w-32 h-32 rounded-full border-4 border-white shadow-xl absolute -top-16 bg-white object-cover">
                
                <div class="pt-20 flex flex-col items-start gap-6">
                    <div class="w-full">
                        <h2 class="text-3xl font-bold font-poppins text-gray-900 mb-2">${instructor.name}</h2>
                        <p class="text-gray-600 leading-relaxed max-w-3xl">${instructor.bio}</p>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row flex-wrap gap-3 w-full mt-2">
                        <button onclick="openConsultationModal('${instructor.id}')" class="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#e70000] hover:bg-[#cc0000] rounded-xl transition-colors shadow-sm w-full sm:w-auto">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            Book Consultation
                        </button>
                        ${portfolioBtnHtml}
                        <button onclick="copyLink('${instructor.id}', this, 'instructor')" class="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-gray-700 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-xl transition-colors w-full sm:w-auto">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg> Share
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-6 font-poppins pl-2">Courses by ${instructor.name}</h3>
        <div class="flex flex-col gap-6">
            ${coursesHTML || '<p class="text-gray-500 pl-2">No active courses right now.</p>'}
        </div>
    `;
}

// Modals Handling
function generateCheckboxesHtml(items, namePrefix) {
    return items.map(item => `
        <label class="flex-1 min-w-[120px] flex items-center gap-2 cursor-pointer p-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-red-50 focus-within:ring-2 focus-within:ring-[#e70000]">
            <input type="checkbox" name="${namePrefix}" value="${item}" class="w-4 h-4 rounded text-[#e70000] border-gray-300">
            <span class="text-sm font-bold text-gray-700">${item}</span>
        </label>`).join('');
}

function openCourseModal(itemId, itemType = 'course') {
    const nameInput = document.getElementById('ui-course-name');
    const descInput = document.getElementById('form-course-desc');
    const instructorInput = document.getElementById('ui-course-instructor');
    
    const instructorGroup = document.getElementById('instructor-field-group');
    const modeGroup = document.getElementById('mode-field-group');
    const scheduleSection = document.getElementById('schedule-section');
    
    const modeSelectContainer = document.getElementById('mode-select-container');
    const modeReadonlyContainer = document.getElementById('mode-readonly-container');
    const modeSelect = document.getElementById('ui-course-mode-select');
    
    const customPrefix = document.getElementById('custom-prefix');

    const genericDays = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const genericTimes = ['Morning', 'Afternoon', 'Evening'];

    // Reset visibility logic for groups
    instructorGroup.classList.remove('hidden');
    modeGroup.classList.remove('hidden');
    scheduleSection.classList.remove('hidden');
    modeSelect.removeAttribute('required');

    if (itemType === 'custom') {
        currentActiveItem = { id: 'custom', type: 'custom' };
        
        customPrefix.innerText = "Custom:";
        customPrefix.classList.remove('hidden');
        
        nameInput.value = ""; nameInput.disabled = false; nameInput.removeAttribute('readonly');
        descInput.value = ""; descInput.disabled = false; descInput.removeAttribute('readonly'); descInput.setAttribute('required', 'true');
        instructorInput.value = "Expert Assigned on Request";
        
        modeReadonlyContainer.classList.add('hidden');
        modeSelectContainer.classList.remove('hidden');
        modeSelect.setAttribute('required', 'true');

        document.getElementById('interactive-days').innerHTML = generateCheckboxesHtml(genericDays, 'pref-day');
        document.getElementById('interactive-times').innerHTML = generateCheckboxesHtml(genericTimes, 'pref-time');
        
    } else if (itemType === 'track') {
        const track = tracksData.find(t => t.id === itemId);
        currentActiveItem = { id: track.id, type: 'track', ...track };
        
        customPrefix.innerText = "Track:";
        customPrefix.classList.remove('hidden');
        
        nameInput.value = track.name; 
        nameInput.setAttribute('readonly', 'true');
        
        descInput.value = track.description; 
        descInput.setAttribute('readonly', 'true'); 
        descInput.removeAttribute('required');
        
        // Hide these specific groups from user view
        instructorGroup.classList.add('hidden');
        modeGroup.classList.add('hidden');
        scheduleSection.classList.add('hidden');
        
        // Clear checkboxes and input logic so we don't accidentally enforce required
        instructorInput.value = "Multiple Instructors (Track)";
        document.getElementById('interactive-days').innerHTML = '';
        document.getElementById('interactive-times').innerHTML = '';

    } else {
        const course = coursesData.find(c => c.id === itemId);
        currentActiveItem = { id: course.id, type: 'course', ...course };
        const instructor = instructorsData.find(i => i.id === course.instructorId);

        customPrefix.classList.add('hidden');
        
        nameInput.value = course.name; 
        nameInput.setAttribute('readonly', 'true');
        
        descInput.value = course.description; 
        descInput.setAttribute('readonly', 'true'); 
        descInput.removeAttribute('required');
        
        instructorInput.value = instructor ? instructor.name : "N/A";

        modeReadonlyContainer.classList.remove('hidden');
        modeSelectContainer.classList.add('hidden');
        document.getElementById('ui-course-mode-readonly').value = course.mode;

        document.getElementById('interactive-days').innerHTML = generateCheckboxesHtml(course.predeterminedDays || [], 'pref-day');
        document.getElementById('interactive-times').innerHTML = generateCheckboxesHtml(course.predeterminedTimes || [], 'pref-time');
    }

    document.querySelector('#course-modal .overflow-y-auto').scrollTop = 0;
    document.getElementById('course-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function openConsultationModal(instructorId) {
    currentConsultationInstructor = instructorsData.find(i => i.id === instructorId);
    if(!currentConsultationInstructor) return;

    document.getElementById('ui-consult-inst-name').innerText = currentConsultationInstructor.name;
    
    document.getElementById('consult-interactive-days').innerHTML = generateCheckboxesHtml(['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'consult-pref-day');
    document.getElementById('consult-interactive-times').innerHTML = generateCheckboxesHtml(['Morning', 'Afternoon', 'Evening'], 'consult-pref-time');

    document.querySelector('#consultation-modal .overflow-y-auto').scrollTop = 0;
    document.getElementById('consultation-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
    document.body.style.overflow = 'auto';
    
    if(modalId === 'course-modal') {
        document.getElementById('course-form').reset();
        document.getElementById('course-form').classList.remove('hidden');
        document.getElementById('course-success-message').classList.add('hidden');
    } else {
        document.getElementById('consultation-form').reset();
        document.getElementById('consultation-form').classList.remove('hidden');
        document.getElementById('consultation-success-message').classList.add('hidden');
    }
    submittedFormType = null;
}

function prepareCourseSubmit() {
    submittedFormType = 'course';
    
    const uiName = document.getElementById('ui-course-name').value.trim();
    let finalName = uiName;
    if (currentActiveItem.type === 'custom') finalName = "Custom: " + uiName;
    if (currentActiveItem.type === 'track') finalName = "Track: " + uiName;

    document.getElementById('real-course-name').value = finalName;
    
    // Address handling
    const fullAddress = [
        document.getElementById('addr-country').value,
        document.getElementById('addr-state').value,
        document.getElementById('addr-area').value
    ].filter(Boolean).join(' - ');
    document.getElementById('real-address').value = fullAddress;

    // Track specific vs normal logic
    if (currentActiveItem.type === 'track') {
        document.getElementById('form-course-instructor').value = "Multiple Instructors (Track)";
        document.getElementById('form-course-mode').value = "Track (Various Modes)";
        document.getElementById('real-days').value = "N/A (Track Setup)";
        document.getElementById('real-times').value = "N/A (Track Setup)";
    } else {
        document.getElementById('form-course-instructor').value = document.getElementById('ui-course-instructor').value;
        document.getElementById('form-course-mode').value = (currentActiveItem.type === 'custom') 
            ? document.getElementById('ui-course-mode-select').value 
            : currentActiveItem.mode;
        document.getElementById('real-days').value = Array.from(document.querySelectorAll('input[name="pref-day"]:checked')).map(cb => cb.value).join(', ') || "Not specified";
        document.getElementById('real-times').value = Array.from(document.querySelectorAll('input[name="pref-time"]:checked')).map(cb => cb.value).join(', ') || "Not specified";
    }

    const spec = document.getElementById('ui-specialization').value.trim();
    const comments = document.getElementById('ui-comments').value.trim();
    let combinedNotes = "";
    if(spec) combinedNotes += `Specialization: ${spec}\n`;
    if(comments) combinedNotes += `Comments: ${comments}`;
    
    document.getElementById('real-comments').value = combinedNotes || "No additional comments.";
    return true;
}

function prepareConsultationSubmit() {
    submittedFormType = 'consultation';
    
    document.getElementById('real-consult-instructor').value = currentConsultationInstructor.name;
    document.getElementById('real-consult-days').value = Array.from(document.querySelectorAll('input[name="consult-pref-day"]:checked')).map(cb => cb.value).join(', ') || "Not specified";
    document.getElementById('real-consult-times').value = Array.from(document.querySelectorAll('input[name="consult-pref-time"]:checked')).map(cb => cb.value).join(', ') || "Not specified";

    return true;
}

function handleIframeLoad() {
    if (submittedFormType === 'course') {
        document.getElementById('course-form').classList.add('hidden');
        document.getElementById('course-success-message').classList.remove('hidden');
        setTimeout(() => closeModal('course-modal'), 4000);
    } else if (submittedFormType === 'consultation') {
        document.getElementById('consultation-form').classList.add('hidden');
        document.getElementById('consultation-success-message').classList.remove('hidden');
        setTimeout(() => closeModal('consultation-modal'), 4000);
    }
}
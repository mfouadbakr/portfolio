const state = {
    screen: 'SPLASH',
    history:[],
    maleName: 'Player 1',
    femaleName: 'Player 2',
    currentArcId: null,
    currentEpisodeId: null,
    currentSceneIndex: 0,
    dialogueIndex: 0,
    realTalkIndex: 0,
    currentPlayer: 'Male',
    turnStep: 'SELF',
    p1Self: null, p1Guess: null,
    p2Self: null, p2Guess: null,
    randomFate: null,
    chosenJudgement: null,
    selectedMusic: 'theme1' // <-- ADD THIS LINE
};

function setScreen(newScreen, save = true) {
    if (save) state.history.push(state.screen);
    state.screen = newScreen;
    render();
}

function goBack() {
    const current = state.screen;
    if (['DIALOGUE', 'TURN', 'PASS', 'REVEAL', 'REALTALK', 'JUDGEMENT_FATE', 'JUDGEMENT_CHOICES', 'SEALED'].includes(current)) {
        setScreen('EPISODES', false);
    } else if (current === 'EPISODES') {
        setScreen('ARCS', false);
    } else if (current === 'ARCS') {
        setScreen('SETUP', false);
    } else if (current === 'SETUP') {
        stopMusic(); // <--- Add this line here
        setScreen('SPLASH', false);
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        // Only exit if this function is called specifically to toggle.
        // We'll create a separate check for the Start button.
    }
}

// Add this helper for the Start button
function ensureFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(e => {});
    }
}

function startEpisode(id) {
    state.currentEpisodeId = id;
    state.currentSceneIndex = 0;
    state.dialogueIndex = 0;
    state.realTalkIndex = 0;
    state.currentPlayer = 'Male';
    state.turnStep = 'SELF';
    state.randomFate = null;
    state.chosenJudgement = null;
    setScreen('DIALOGUE');
}

function handleChoice(idx, btnElement) {
    // Disable all buttons to prevent multiple clicks during animation
    document.querySelectorAll('.choice-btn').forEach(b => b.style.pointerEvents = 'none');
    
    // Add animation class
    btnElement.classList.add('choice-selected');

    // Wait 500ms before changing screen
    setTimeout(() => {
        if (state.currentPlayer === 'Male') {
            if (state.turnStep === 'SELF') { state.p1Self = idx; state.turnStep = 'GUESS'; render(); }
            else { state.p1Guess = idx; setScreen('PASS'); }
        } else {
            if (state.turnStep === 'SELF') { state.p2Self = idx; state.turnStep = 'GUESS'; render(); }
            else { state.p2Guess = idx; setScreen('REVEAL'); }
        }
    }, 500);
}

function handleJudgement(judgementText, btnElement) {
    document.querySelectorAll('.game-card').forEach(b => b.style.pointerEvents = 'none');
    btnElement.classList.add('choice-selected', 'border-[#e82a50]');
    state.chosenJudgement = judgementText;
    
    setTimeout(() => {
        setScreen('SEALED');
    }, 600);
}

function render() {
    const app = document.getElementById('app');
    const nav = document.getElementById('nav-header');
    
    if (state.screen === 'SPLASH') {
        nav.classList.replace('opacity-100', 'opacity-0');
        nav.classList.add('pointer-events-none');
    } else {
        nav.classList.replace('opacity-0', 'opacity-100');
        nav.classList.remove('pointer-events-none');
    }

    let content = '';
    const btnClass = `${THEME_CONFIG.rounding.mainButtons} bg-white text-black font-bold py-5 uppercase tracking-widest text-xs active:scale-95 transition-all`;

    switch(state.screen) {
        case 'SPLASH':
            // Modify the easter egg heart here if you haven't already!
            content = `
                <div class="flex flex-col items-center justify-center h-full px-8 text-center anim-fade-in">
                    <div class="relative mb-10 cursor-pointer transition-transform active:scale-90" onclick="handleHeartClick()">
                        <i data-lucide="heart" class="w-20 h-20 text-[#e82a50] fill-current"></i>
                        <span id="easter-counter" class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-[#e82a50] tracking-widest font-bold opacity-0 transition-opacity duration-300 whitespace-nowrap"></span>
                    </div>

                    <h2 class="font-ui text-zinc-600 tracking-[0.4em] uppercase text-[10px] font-bold mb-4">
                        Beyond Love and Time
                    </h2>

                    <h1 class="font-cinematic text-6xl text-white mb-12">
                        THE PACT INFINITY
                    </h1>

                    <!-- MUSIC SELECTOR -->
                    <div class="w-full max-w-xs mb-8">
                        <label class="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block mb-3">Background Music</label>
                        <div class="flex bg-[#1a1a1a] p-1 rounded-full border border-zinc-800 shadow-inner">
                            <button onclick="setMusicSelection('theme1')" class="flex-1 text-[9px] uppercase tracking-widest py-2.5 rounded-full transition-all duration-300 ${state.selectedMusic === 'theme1' ? 'bg-[#e82a50] text-white shadow-lg' : 'text-zinc-500 hover:text-white'}">Theme 1</button>
                            <button onclick="setMusicSelection('theme2')" class="flex-1 text-[9px] uppercase tracking-widest py-2.5 rounded-full transition-all duration-300 ${state.selectedMusic === 'theme2' ? 'bg-[#e82a50] text-white shadow-lg' : 'text-zinc-500 hover:text-white'}">Theme 2</button>
                            <button onclick="setMusicSelection('none')" class="flex-1 text-[9px] uppercase tracking-widest py-2.5 rounded-full transition-all duration-300 ${state.selectedMusic === 'none' ? 'bg-zinc-700 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}">None</button>
                        </div>
                    </div>

                    <!-- UPDATED START BUTTON -->
                    <button onclick="startJourneyWithMusic()" class="w-full max-w-xs ${btnClass}">
                        Start Journey
                    </button>

                    <p class="mt-10 text-sm text-zinc-400">
                        Developed by 
                        <a href="https://mfouadbakr.github.io/portfolio/index.html" target="_blank" class="text-[#e82a50] hover:underline">
                            Mohamed Bakr
                        </a>
                    </p>
                </div>`;
            break;

        case 'SETUP':
            content = `
                <div class="flex flex-col h-full pt-24 px-8 max-w-md mx-auto w-full anim-fade-in">
                    <h1 class="font-cinematic text-3xl text-white text-center mb-12">The Protagonists</h1>
                    <div class="space-y-6 flex-1">
                        <div class="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800 focus-within:border-white transition-colors">
                            <label class="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block mb-2">Male</label>
                            <input type="text" value="${state.maleName}" oninput="state.maleName = this.value" class="w-full bg-transparent border-b border-zinc-700 text-white text-xl py-2 font-cinematic focus:outline-none focus:border-white transition-colors">
                        </div>
                        <div class="bg-zinc-900/40 p-6 rounded-xl border border-zinc-800 focus-within:border-white transition-colors">
                            <label class="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block mb-2">Female</label>
                            <input type="text" value="${state.femaleName}" oninput="state.femaleName = this.value" class="w-full bg-transparent border-b border-zinc-700 text-white text-xl py-2 font-cinematic focus:outline-none focus:border-white transition-colors">
                        </div>
                    </div>
                    <button onclick="setScreen('ARCS')" class="w-full ${btnClass} mb-12">Continue</button>
                </div>`;
            break;

        case 'ARCS':
        content = `
            <div class="flex flex-col h-full pt-24 px-8 max-w-md mx-auto w-full anim-fade-in">
                <h1 class="font-cinematic text-4xl text-white text-center mb-12">Arcs</h1>
                <div class="flex-1 space-y-4 overflow-y-auto no-scrollbar pb-10">
                    ${ARCS.map(arc => {
                        // Determine classes based on type
                        const arcClass = arc.type === 'special' 
                            ? 'bg-[#1a1200] p-7 rounded-xl border border-yellow-400 relative cursor-pointer hover:bg-[#2a1a00] active:scale-[0.98] transition-all overflow-hidden shadow-lg ring-2 ring-yellow-400'
                            : 'bg-[#181818] p-7 rounded-xl border border-zinc-800 relative cursor-pointer hover:bg-[#202020] active:scale-[0.98] transition-all overflow-hidden';
                        
                        const titleColor = arc.type === 'special' ? 'text-yellow-400' : 'text-white';
                        const subtitleColor = arc.type === 'special' ? 'text-yellow-200' : 'text-zinc-500';
                        const arcNumberColor = arc.type === 'special' ? '#FFD700' : THEME_CONFIG.colors.arcNumber;

                        return `
                            <div onclick="state.currentArcId = ${arc.id}; setScreen('EPISODES')" class="${arcClass}">
                                <h3 class="font-cinematic text-2xl ${titleColor}">${arc.title}</h3>
                                <p class="text-[9px] ${subtitleColor} uppercase tracking-widest mt-1">${arc.subtitle}</p>
                                <div class="absolute -bottom-2 -right-2 text-7xl font-bold font-cinematic" style="color: ${arcNumberColor}">${arc.id}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>`;
        break;

        case 'EPISODES':
    const eps = EPISODES.filter(e => e.arcId === state.currentArcId);
    content = `
        <div class="flex flex-col h-full pt-24 px-8 max-w-md mx-auto w-full anim-fade-in">
            <h1 class="font-cinematic text-4xl text-white text-center mb-12">Chapters</h1>
            <div class="flex-1 space-y-4 overflow-y-auto no-scrollbar pb-10">
                ${eps.map((ep, index) => `
                    <div onclick="startEpisode(${ep.id})" class="bg-[#181818] p-6 rounded-xl border border-zinc-800 flex justify-between items-center cursor-pointer hover:bg-[#202020] active:scale-[0.98] transition-all">
                        <div>
                            <!-- هنا قمنا بإضافة رقم الحلقة -->
                            <h3 class="font-cinematic text-xl text-white">
                                ${String(index + 1).padStart(2, '0')}. ${ep.title}
                            </h3>
                            <p class="text-[9px] text-zinc-500 uppercase tracking-widest">Story Chapter</p>
                        </div>
                        <i data-lucide="play" class="w-4 h-4 text-white"></i>
                    </div>
                `).join('')}
            </div>
        </div>`;
    break;

        case 'DIALOGUE':
            const scene = EPISODES.find(e => e.id === state.currentEpisodeId).scenes[state.currentSceneIndex];
            const d = scene.dialogue[state.dialogueIndex];
            content = `
                <div class="flex flex-col h-full justify-center px-8 max-w-md mx-auto w-full">
                    <div onclick="const s = EPISODES.find(e => e.id === state.currentEpisodeId).scenes[state.currentSceneIndex]; if(state.dialogueIndex < s.dialogue.length-1) { state.dialogueIndex++; render(); } else { setScreen('TURN'); }" 
                         class="game-card ${THEME_CONFIG.rounding.cards} p-12 min-h-[250px] flex flex-col justify-center items-center text-center cursor-pointer anim-flip">
                        <div class="inner-dashed-border" style="border-radius: ${THEME_CONFIG.rounding.innerBorder}"></div>
                        <span class="text-[#e82a50] text-[10px] uppercase font-bold tracking-widest mb-6">${d.speaker}</span>
                        <p class="font-arabic text-2xl text-white leading-loose" dir="rtl">"${d.text}"</p>
                        <div class="absolute bottom-6 text-zinc-600 text-[8px] uppercase tracking-widest animate-pulse">Tap to Continue</div>
                    </div>
                </div>`;
            break;

        case 'TURN':
            const s = EPISODES.find(e => e.id === state.currentEpisodeId).scenes[state.currentSceneIndex];
            const prompt = state.currentPlayer === 'Male' ? 
                (state.turnStep === 'SELF' ? `ماذا ستفعل <span class="text-[#e82a50]">أنتَ</span>؟` : `توقع اختيارها <span class="text-[#e82a50]">هي</span>؟`) :
                (state.turnStep === 'SELF' ? `ماذا ستفعلين <span class="text-[#e82a50]">أنتِ</span>؟` : `توقعي اختياره <span class="text-[#e82a50]">هو</span>؟`);
            content = `
                <div class="flex flex-col h-full pt-20 pb-10 px-6 max-w-md mx-auto w-full anim-fade-in">
                    <div class="text-center mb-6">
                        <h2 class="font-arabic text-3xl text-white font-bold leading-snug mb-4" dir="rtl">${prompt}</h2>
                        <div class="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 shadow-inner">
                            <p class="font-arabic text-md text-zinc-300" dir="rtl">${s.question}</p>
                        </div>
                        <p class="text-zinc-600 text-[9px] uppercase tracking-widest mt-4">${state.currentPlayer === 'Male' ? state.maleName : state.femaleName}'s Decision</p>
                    </div>
                    <div class="flex-1 space-y-3 overflow-y-auto no-scrollbar pb-4">
                        ${s.choices.map((choice, i) => `<button onclick="handleChoice(${i}, this)" class="w-full p-5 text-right choice-btn ${THEME_CONFIG.rounding.choices} hover:bg-zinc-800"><span class="font-arabic text-lg text-white" dir="rtl">${choice}</span></button>`).join('')}
                    </div>
                </div>`;
            break;

        case 'PASS':
            content = `
                <div class="flex flex-col items-center justify-center h-full px-10 text-center anim-fade-in">
                    <i data-lucide="smartphone" class="w-14 h-14 text-zinc-500 mb-8 animate-bounce"></i>
                    <h1 class="font-cinematic text-3xl text-white mb-4">Pass the Device</h1>
                    <p class="text-zinc-600 text-[10px] uppercase tracking-widest mb-12">Pass to ${state.femaleName}</p>
                    <button onclick="state.currentPlayer='Female'; state.turnStep='SELF'; setScreen('TURN')" class="w-full ${btnClass}">I am ${state.femaleName}</button>
                </div>`;
            break;

        case 'REVEAL':
            const rs = EPISODES.find(e => e.id === state.currentEpisodeId).scenes[state.currentSceneIndex];
            content = `
                <div class="flex flex-col h-full pt-24 px-8 max-w-md mx-auto w-full anim-fade-in">
                    <h1 class="font-cinematic text-4xl text-white text-center mb-10">The Reveal</h1>
                    <div class="flex-1 space-y-6 overflow-y-auto no-scrollbar pb-8">
                        
                        <div class="bg-[#1a1a1a] border border-[#333333] p-6 ${THEME_CONFIG.rounding.cards} text-center shadow-lg">
                            <h3 class="text-[#e82a50] text-[12px] uppercase font-bold tracking-widest mb-5">${state.maleName}</h3>
                            <div class="mb-5">
                                <span class="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">His Choice</span>
                                <p class="font-arabic text-white text-lg leading-snug" dir="rtl">${rs.choices[state.p1Self]}</p>
                            </div>
                            <div>
                                <span class="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">His Guess</span>
                                <p class="font-arabic text-zinc-400 text-[15px] leading-snug" dir="rtl">${rs.choices[state.p1Guess]}</p>
                            </div>
                        </div>

                        <div class="bg-[#1a1a1a] border border-[#333333] p-6 ${THEME_CONFIG.rounding.cards} text-center shadow-lg">
                            <h3 class="text-[#e82a50] text-[12px] uppercase font-bold tracking-widest mb-5">${state.femaleName}</h3>
                            <div class="mb-5">
                                <span class="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Her Choice</span>
                                <p class="font-arabic text-white text-lg leading-snug" dir="rtl">${rs.choices[state.p2Self]}</p>
                            </div>
                            <div>
                                <span class="text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">Her Guess</span>
                                <p class="font-arabic text-zinc-400 text-[15px] leading-snug" dir="rtl">${rs.choices[state.p2Guess]}</p>
                            </div>
                        </div>

                    </div>
                    <button onclick="
                        const ep = EPISODES.find(e => e.id === state.currentEpisodeId); 
                        if(state.currentSceneIndex < ep.scenes.length-1) { 
                            state.currentSceneIndex++; 
                            state.dialogueIndex=0; 
                            state.currentPlayer='Male'; 
                            state.turnStep='SELF'; 
                            setScreen('DIALOGUE'); 
                        } else { 
                            state.realTalkIndex = 0;
                            setScreen('REALTALK'); 
                        }" class="w-full ${btnClass} mb-12 shrink-0">Continue</button>
                </div>`;
            break;

        case 'REALTALK':
            const epD = EPISODES.find(e => e.id === state.currentEpisodeId);
            content = `
                <div class="flex flex-col h-full pt-20 px-8 max-w-md mx-auto w-full anim-fade-in">
                    <div class="text-center mb-8">
                        <h1 class="font-cinematic text-3xl text-white uppercase tracking-widest">Real Talk</h1>
                        <p class="text-zinc-600 text-[10px] uppercase mt-2">Topic ${state.realTalkIndex + 1} of ${epD.discussionTopics.length}</p>
                    </div>
                    <div class="flex-1 flex flex-col justify-center">
                        <div onclick="
                            const ep = EPISODES.find(e => e.id === state.currentEpisodeId); 
                            if(state.realTalkIndex < ep.discussionTopics.length-1) { 
                                state.realTalkIndex++; 
                                render(); 
                            } else { 
                                state.randomFate = Math.random() > 0.5 ? 'Man' : 'Woman';
                                setScreen('JUDGEMENT_FATE'); 
                            }" 
                             class="game-card ${THEME_CONFIG.rounding.cards} p-12 min-h-[250px] flex flex-col justify-center items-center text-center cursor-pointer anim-flip shadow-2xl">
                            <div class="inner-dashed-border" style="border-radius: ${THEME_CONFIG.rounding.innerBorder}"></div>
                            <p class="font-arabic text-2xl text-white leading-loose" dir="rtl">"${epD.discussionTopics[state.realTalkIndex]}"</p>
                            <div class="absolute bottom-8 text-zinc-600 text-[8px] uppercase tracking-widest animate-pulse">Tap to Finish</div>
                        </div>
                    </div>
                </div>`;
            break;

        case 'JUDGEMENT_FATE':
            const fateName = state.randomFate === 'Man' ? state.maleName : state.femaleName;
            content = `
                <div class="flex flex-col items-center justify-center h-full px-8 text-center anim-fade-in">
                    <h2 class="font-cinematic text-3xl text-zinc-500 mb-2">Fate Decides</h2>
                    <p class="text-[10px] uppercase tracking-widest text-zinc-600 mb-12">Who shall bear the judgement?</p>
                    
                    <div class="w-48 h-48 flex items-center justify-center mb-10 anim-flip">
                        <span class="font-cinematic text-4xl text-white tracking-widest uppercase">${state.randomFate}</span>
                    </div>
                    
                    <p class="font-arabic text-xl text-zinc-300 mb-12" dir="rtl">${fateName}، الخيار لك!</p>
                    <button onclick="setScreen('JUDGEMENT_CHOICES')" class="w-full max-w-xs ${btnClass}">Accept Fate</button>
                </div>`;
            break;

        case 'JUDGEMENT_CHOICES':
            const jEp = EPISODES.find(e => e.id === state.currentEpisodeId);
            content = `
                <div class="flex flex-col h-full pt-20 pb-10 px-8 max-w-md mx-auto w-full anim-fade-in">
                    <div class="text-center mb-10">
                        <h1 class="font-cinematic text-4xl text-white mb-2">The Judgement</h1>
                        <p class="text-[10px] uppercase tracking-widest text-zinc-500">Choose your path</p>
                    </div>
                    <div class="flex-1 flex flex-col justify-center space-y-4">
                        ${jEp.judgements.map((j) => `
                            <button onclick="handleJudgement('${j}', this)" class="w-full p-6 text-center game-card ${THEME_CONFIG.rounding.cards} hover:bg-[#202020] transition-all duration-300">
                                <span class="font-arabic text-lg text-white leading-relaxed" dir="rtl">${j}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>`;
            break;

        case 'SEALED':
            content = `
                <div class="flex flex-col items-center justify-center h-full px-8 text-center anim-fade-in">
                    <div class="bg-[#1a1a1a] p-5 rounded-full mb-8 shadow-[0_0_30px_rgba(232,42,80,0.15)]">
                        <i data-lucide="lock" class="w-10 h-10 text-[#e82a50]"></i>
                    </div>
                    <h1 class="font-cinematic text-4xl text-white mb-4">The Pact has been sealed</h1>
                    
                    <div class="game-card w-full ${THEME_CONFIG.rounding.cards} p-8 mt-8 mb-12 shadow-2xl relative overflow-hidden">
                        <div class="inner-dashed-border" style="border-radius: ${THEME_CONFIG.rounding.innerBorder}"></div>
                        <p class="font-arabic text-xl text-white leading-loose relative z-10" dir="rtl">${state.chosenJudgement}</p>
                    </div>
                    
                    <button onclick="setScreen('EPISODES')" class="w-full max-w-xs ${btnClass}">Complete Chapter</button>
                </div>`;
            break;
    }
    app.innerHTML = content;
    lucide.createIcons();
}

// Background Animation
function initFloating() {
    const canvas = document.getElementById('floatCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    });

    const items = [];

    class Particle {
        constructor() { 
            this.reset(); 
            this.y = Math.random() * h; 
        }
        reset() {
            this.x = Math.random() * w; 
            this.y = h + 50;
            this.size = Math.random() * THEME_CONFIG.floating.maxSize + 15;
            this.speed = Math.random() * THEME_CONFIG.floating.speed + 0.3;
            this.opacity = Math.random() * 0.15 + 0.05;
            this.type = THEME_CONFIG.floating.type === 'both' ? (Math.random() > 0.5 ? 'heart' : 'card') : THEME_CONFIG.floating.type;
        }
        update() { 
            this.y -= this.speed; 
            if (this.y < -50) this.reset(); 
        }
        draw() {
            ctx.globalAlpha = this.opacity;
            if (this.type === 'heart') {
                ctx.fillStyle = THEME_CONFIG.colors.primary;
                const s = this.size / 10;
                ctx.beginPath(); 
                ctx.moveTo(this.x, this.y);
                ctx.bezierCurveTo(this.x, this.y - (3*s), this.x - (5*s), this.y - (3*s), this.x - (5*s), this.y);
                ctx.bezierCurveTo(this.x - (5*s), this.y + (3*s), this.x, this.y + (5*s), this.x, this.y + (7*s));
                ctx.bezierCurveTo(this.x, this.y + (5*s), this.x + (5*s), this.y + (3*s), this.x + (5*s), this.y);
                ctx.bezierCurveTo(this.x + (5*s), this.y - (3*s), this.x, this.y - (3*s), this.x, this.y); 
                ctx.fill();
            } else { 
                ctx.fillStyle = '#1a1a1a';
                ctx.strokeStyle = '#444444';
                ctx.lineWidth = 1;
                const width = this.size;
                const height = this.size * 1.4;
                const radius = 6;

                ctx.beginPath();
                ctx.moveTo(this.x + radius, this.y);
                ctx.lineTo(this.x + width - radius, this.y);
                ctx.quadraticCurveTo(this.x + width, this.y, this.x + width, this.y + radius);
                ctx.lineTo(this.x + width, this.y + height - radius);
                ctx.quadraticCurveTo(this.x + width, this.y + height, this.x + width - radius, this.y + height);
                ctx.lineTo(this.x + radius, this.y + height);
                ctx.quadraticCurveTo(this.x, this.y + height, this.x, this.y + height - radius);
                ctx.lineTo(this.x, this.y + radius);
                ctx.quadraticCurveTo(this.x, this.y, this.x + radius, this.y);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        }
    }

    for(let i=0; i < THEME_CONFIG.floating.count; i++) {
        items.push(new Particle());
    }

    function loop() { 
        ctx.clearRect(0,0,w,h); 
        items.forEach(i => { i.update(); i.draw(); }); 
        requestAnimationFrame(loop); 
    }
    loop();
}

function initTapRipple(){

    const style = document.createElement("style");
    style.innerHTML = `
    .tap-ripple{
        position:fixed;
        width:20px;
        height:20px;
        border-radius:50%;
        background:rgba(232,42,80,0.35);
        border:2px solid #e82a50;
        transform:translate(-50%,-50%) scale(0);
        pointer-events:none;
        z-index:9999;
        animation:tapRippleAnim 0.6s ease-out forwards;
    }

    @keyframes tapRippleAnim{
        to{
            transform:translate(-50%,-50%) scale(6);
            opacity:0;
        }
    }`;

    document.head.appendChild(style);

    function createRipple(x,y){
        const r=document.createElement("div");
        r.className="tap-ripple";
        r.style.left=x+"px";
        r.style.top=y+"px";
        document.body.appendChild(r);

        setTimeout(()=>r.remove(),600);
    }

    document.addEventListener("click",e=>{
        createRipple(e.clientX,e.clientY);
    });

    document.addEventListener("touchstart",e=>{
        const t=e.touches[0];
        createRipple(t.clientX,t.clientY);
    });

}

// --- EASTER EGG LOGIC ---
let heartClickCount = 0;

function handleHeartClick() {
    heartClickCount++;
    const counterEl = document.getElementById('easter-counter');
    
    // Show countdown after the 5th click
    if (heartClickCount > 5 && heartClickCount < 15) {
        const remaining = 15 - heartClickCount;
        if (counterEl) {
            counterEl.innerText = `${remaining} clicks left...`;
            counterEl.classList.remove('opacity-0');
        }
    } 
    // Trigger on the 15th click
    else if (heartClickCount === 15) {
        if (counterEl) counterEl.classList.add('opacity-0');
        heartClickCount = 0; // Reset for future
        showEasterEggPopup();
    }
}

function showEasterEggPopup() {
    // 1. Create a dark overlay background
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[200] bg-black/95 flex items-center justify-center opacity-0 transition-opacity duration-500';
    
    // 2. Create the image element
    const img = document.createElement('img');
    img.src = 'images/easter_01.png'; // First Image
    // Make it square, rounded, with a cool red glow
    img.className = 'w-3/4 max-w-xs aspect-square object-cover rounded-2xl cursor-pointer transition-all duration-300 active:scale-95';
    
    let clickStage = 0;
    
    // 3. Handle clicking the image
    img.onclick = () => {
        clickStage++;
        if (clickStage === 1) {
            // Fade out, swap image, fade in
            img.style.opacity = '0';
            setTimeout(() => {
                // Change this to whatever your second image is named
                img.src = 'images/easter_02.png'; 
                img.style.opacity = '1';
            }, 300);
        } else if (clickStage === 2) {
            // Fade out and remove the entire popup
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.remove(), 500);
        }
    };
    
    overlay.appendChild(img);
    document.body.appendChild(overlay);
    
    // Trigger animation frame to fade it in smoothly
    requestAnimationFrame(() => {
        overlay.classList.remove('opacity-0');
    });
}
// --- END EASTER EGG LOGIC ---

// --- AUDIO LOGIC ---
let bgMusic = null;
let isMuted = false;

function toggleMute() {
    isMuted = !isMuted;
    
    // Mute or unmute the audio if it's currently initialized
    if (bgMusic) {
        bgMusic.muted = isMuted;
    }
    
    // Switch the icons in the navigation bar
    const iconUnmuted = document.getElementById('icon-unmuted');
    const iconMuted = document.getElementById('icon-muted');
    
    if (iconUnmuted && iconMuted) {
        if (isMuted) {
            iconUnmuted.classList.add('hidden');
            iconMuted.classList.remove('hidden');
        } else {
            iconUnmuted.classList.remove('hidden');
            iconMuted.classList.add('hidden');
        }
    }
}

function setMusicSelection(option) {
    state.selectedMusic = option;
    render(); // Re-render to show the active button
}

function startJourneyWithMusic() {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
    }

    if (state.selectedMusic !== 'none') {
        const musicFile = state.selectedMusic === 'theme1' ? 'music/theme1.mp3' : 'music/theme2.mp3';
        bgMusic = new Audio(musicFile);
        bgMusic.loop = true;
        bgMusic.volume = 0.4;
        bgMusic.muted = isMuted; 
        bgMusic.play().catch(err => {});
    }

    setScreen('SETUP');
    ensureFullScreen(); // Use the new helper here!
}

function stopMusic() {
    if (bgMusic) {
        bgMusic.pause();
        bgMusic.currentTime = 0;
        bgMusic = null; // Clear the object
    }
}
// --- END AUDIO LOGIC ---

// START THE APPLICATION
window.onload = () => { 
    initFloating();
    initTapRipple();
    render(); 
};
const state = {
    screen: 'SPLASH',
    history: [],
    numPlayers: 2,
    players: [],
    currentDeckId: null,
    deckQuestions: [],   // Now stores arrays of pairs: [['q1', 'q2'], ['q3', 'q4']]
    currentTurn: 1,      // From 1 to 10
    currentPlayerIndex: 0,
    questionOptions: [], 
    chosenQuestion: null
};

// Pure state snapshotting for bulletproof "Back" functionality
function setScreen(newScreen, save = true) {
    if (save) {
        // Create a shallow copy and delete history to prevent Out of Memory error
        const stateCopy = { ...state };
        delete stateCopy.history; 
        state.history.push(JSON.stringify(stateCopy));
    }
    state.screen = newScreen;
    render();
}

function goBack() {
    if (state.history.length > 0) {
        const snapshot = state.history.pop();
        const parsedState = JSON.parse(snapshot);
        const histBackup = state.history; // Preserve the remaining history array
        Object.assign(state, parsedState);
        state.history = histBackup;
        render();
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Error attempting to enable full-screen mode: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

function ensureFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(e => {});
    }
}

// Utility: Shuffle an array (Only used for the Infinity Mix deck now)
function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function startGameSession(deckId) {
    state.currentDeckId = deckId;
    let pool = [];
    
    if (deckId === 'random') {
        // For Infinity Mix: Gather ALL sets from ALL decks
        DECKS.forEach(deck => {
            if (deck.id !== 'random') {
                pool = pool.concat(deck.questionSets);
            }
        });
        
        // Shuffle the SETS and pick exactly 10 sets
        pool = shuffleArray(pool);
        state.deckQuestions = pool.slice(0, 10);
        
    } else {
        // For standard decks: Load the exact sets in the exact order you defined in data.js
        const selectedDeck = DECKS.find(d => d.id === deckId);
        state.deckQuestions = [...selectedDeck.questionSets].slice(0, 10);
    }

    state.currentTurn = 1;
    state.currentPlayerIndex = 0;
    
    setScreen('PASS');
}

function drawQuestionOptions() {
    // We no longer need math to calculate indexes.
    // Turn 1 gets the set at index 0, Turn 2 gets the set at index 1, etc.
    state.questionOptions = state.deckQuestions[state.currentTurn - 1];
    
    setScreen('CHOOSE_QUESTION');
}

function handleQuestionSelection(idx, btnElement) {
    document.querySelectorAll('.choice-btn').forEach(b => b.style.pointerEvents = 'none');
    btnElement.classList.add('choice-selected');

    setTimeout(() => {
        state.chosenQuestion = state.questionOptions[idx];
        setScreen('DISCUSS');
    }, 500);
}

function nextTurn() {
    if (state.currentTurn >= 10) {
        setScreen('END');
    } else {
        state.currentTurn++;
        state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.numPlayers;
        setScreen('PASS');
    }
}

function render() {
    const app = document.getElementById('app');
    const nav = document.getElementById('nav-header');
    
    // Hide nav on splash screen
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
            content = `
                <div class="flex flex-col items-center justify-center h-full px-8 text-center anim-fade-in">
                    <div class="relative mb-10 cursor-pointer transition-transform active:scale-90" onclick="handleSecretClick()">
                        <i data-lucide="infinity" class="w-20 h-20 text-[#0078FF]"></i>
                    </div>

                    <h2 class="font-ui text-zinc-600 tracking-[0.4em] uppercase text-[10px] font-bold mb-4">
                        Family & Friends Edition
                    </h2>

                    <h1 class="font-cinematic text-6xl text-white mb-16">
                        KAROOT INFINITY
                    </h1>

                    <button onclick="ensureFullScreen(); setScreen('PLAYER_COUNT');" class="w-full max-w-xs ${btnClass}">
                        Start Playing
                    </button>

                    <p class="mt-12 text-sm text-zinc-400">
                        Developed by 
                        <a href="https://mfouadbakr.github.io/portfolio/index.html" target="_blank" class="text-[#0078FF] hover:underline transition-colors">
                            Mohamed Bakr
                        </a>
                    </p>
                </div>`;
            break;

        case 'PLAYER_COUNT':
            content = `
                <div class="flex flex-col items-center justify-center h-full px-8 max-w-md mx-auto w-full anim-fade-in">
                    <h1 class="font-cinematic text-4xl text-white text-center mb-6">How many players?</h1>
                    <p class="text-[10px] text-zinc-500 uppercase tracking-widest mb-12 text-center">Select number of participants</p>
                    
                    <div class="grid grid-cols-2 gap-4 w-full mb-12">
                        ${[2, 3, 4, 5].map(num => `
                            <button onclick="state.numPlayers = ${num}; state.players = new Array(${num}).fill(''); setScreen('PLAYER_NAMES');" 
                                class="bg-[#1a1a1a] border border-[#333333] hover:border-[#0078FF] text-white font-cinematic text-3xl py-8 rounded-2xl active:scale-95 transition-all">
                                ${num}
                            </button>
                        `).join('')}
                    </div>
                </div>`;
            break;

        case 'PLAYER_NAMES':
            content = `
                <div class="flex flex-col h-full pt-24 px-8 max-w-md mx-auto w-full anim-fade-in">
                    <h1 class="font-cinematic text-3xl text-white text-center mb-12">Who is Playing?</h1>
                    <div class="space-y-4 flex-1 overflow-y-auto no-scrollbar pb-6">
                        ${Array.from({length: state.numPlayers}).map((_, i) => `
                            <div class="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800 focus-within:border-[#0078FF] transition-colors">
                                <label class="text-[9px] text-zinc-500 uppercase font-bold tracking-widest block mb-2">Player ${i + 1}</label>
                                <input type="text" value="${state.players[i] || ''}" oninput="state.players[${i}] = this.value" placeholder="Enter name" class="w-full bg-transparent border-b border-zinc-700 text-white text-xl py-2 font-cinematic focus:outline-none focus:border-[#0078FF] transition-colors">
                            </div>
                        `).join('')}
                    </div>
                    <button onclick="
                        // Fill empty names automatically
                        state.players = state.players.map((p, i) => p.trim() === '' ? 'Player ' + (i+1) : p.trim());
                        setScreen('DECKS');
                    " class="w-full ${btnClass} mb-12 shrink-0">Continue</button>
                </div>`;
            break;

        case 'DECKS':
            content = `
                <div class="flex flex-col h-full pt-24 px-8 max-w-md mx-auto w-full anim-fade-in">
                    <h1 class="font-cinematic text-4xl text-white text-center mb-4">Select Deck</h1>
                    <p class="text-[10px] text-zinc-500 uppercase tracking-widest mb-10 text-center">Choose the topic for this game</p>
                    
                    <div class="flex-1 space-y-4 overflow-y-auto no-scrollbar pb-10">
                        ${DECKS.map(deck => {
                            const arcClass = deck.type === 'special' 
                                ? 'bg-[#001a33] p-7 rounded-xl border border-[#0078FF] relative cursor-pointer hover:bg-[#002a4d] active:scale-[0.98] transition-all overflow-hidden shadow-[0_0_15px_rgba(0,120,255,0.2)] ring-1 ring-[#0078FF]'
                                : 'bg-[#181818] p-7 rounded-xl border border-zinc-800 relative cursor-pointer hover:bg-[#202020] active:scale-[0.98] transition-all overflow-hidden';
                            
                            const titleColor = deck.type === 'special' ? `text-[#0078FF]` : 'text-white';
                            const subtitleColor = deck.type === 'special' ? 'text-blue-200' : 'text-zinc-500';

                            return `
                                <div onclick="startGameSession('${deck.id}')" class="${arcClass}">
                                    <h3 class="font-cinematic text-2xl ${titleColor}">${deck.title}</h3>
                                    <p class="text-[12px] font-arabic ${subtitleColor} mt-2" dir="rtl">${deck.subtitle}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>`;
            break;

        case 'PASS':
            const currentPlayerName = state.players[state.currentPlayerIndex];
            content = `
                <div class="flex flex-col items-center justify-center h-full px-10 text-center anim-fade-in">
                    <div class="text-[10px] text-[#0078FF] font-bold tracking-widest uppercase mb-10 border border-[#0078FF] px-3 py-1 rounded-full shadow-[0_0_10px_rgba(0,120,255,0.3)]">Round ${state.currentTurn} / 10</div>
                    
                    <i data-lucide="smartphone" class="w-16 h-16 text-zinc-500 mb-8 animate-bounce"></i>
                    <h1 class="font-cinematic text-4xl text-white mb-4">Pass the Device</h1>
                    <p class="text-zinc-500 text-[12px] uppercase tracking-widest mb-12">Pass it to <br><span class="text-white text-2xl font-cinematic font-bold mt-2 block">${currentPlayerName}</span></p>
                    
                    <button onclick="drawQuestionOptions()" class="w-full ${btnClass}">I am ${currentPlayerName}</button>
                </div>`;
            break;

        case 'CHOOSE_QUESTION':
            content = `
                <div class="flex flex-col h-full pt-20 pb-10 px-6 max-w-md mx-auto w-full anim-fade-in">
                    <div class="text-center mb-6">
                        <h2 class="font-arabic text-3xl text-white font-bold leading-snug mb-2" dir="rtl">اختر سؤالاً!</h2>
                        <p class="text-zinc-500 font-arabic text-sm mt-2" dir="rtl">اختر سؤالاً واحداً لتطرحه على الجميع</p>
                        <p class="text-[#0078FF] text-[9px] uppercase tracking-widest mt-4 font-bold">${state.players[state.currentPlayerIndex]}'s Turn</p>
                    </div>
                    <div class="flex-1 space-y-4 overflow-y-auto no-scrollbar pb-4 flex flex-col justify-center">
                        ${state.questionOptions.map((choice, i) => `
                            <button onclick="handleQuestionSelection(${i}, this)" class="w-full p-8 text-center choice-btn ${THEME_CONFIG.rounding.choices} hover:bg-zinc-800 shadow-lg">
                                <span class="font-arabic text-xl text-white leading-relaxed" dir="rtl">${choice}</span>
                            </button>
                        `).join('')}
                    </div>
                </div>`;
            break;

        case 'DISCUSS':
            content = `
                <div class="flex flex-col h-full pt-20 px-8 max-w-md mx-auto w-full anim-fade-in">
                    <div class="text-center mb-8">
                        <h1 class="font-cinematic text-3xl text-white uppercase tracking-widest">Question Time</h1>
                        <p class="text-[#0078FF] font-arabic font-bold text-lg mt-2" dir="rtl">سؤال من: ${state.players[state.currentPlayerIndex]}</p>
                    </div>
                    
                    <div class="flex-1 flex flex-col justify-center mb-10">
                        <div class="game-card ${THEME_CONFIG.rounding.cards} p-10 min-h-[300px] flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(0,120,255,0.1)]">
                            <div class="inner-dashed-border" style="border-radius: ${THEME_CONFIG.rounding.innerBorder}"></div>
                            <p class="text-zinc-500 font-arabic text-sm mb-6" dir="rtl">يجب على الجميع الإجابة أو المناقشة!</p>
                            <p class="font-arabic text-2xl text-white leading-loose z-10 relative" dir="rtl">"${state.chosenQuestion}"</p>
                        </div>
                    </div>
                    
                    <button onclick="nextTurn()" class="w-full ${btnClass} mb-12 shrink-0">${state.currentTurn >= 10 ? 'Finish Game' : 'Next Turn'}</button>
                </div>`;
            break;

        case 'END':
            content = `
                <div class="flex flex-col items-center justify-center h-full px-8 text-center anim-fade-in">
                    <div class="bg-[#1a1a1a] p-5 rounded-full mb-8 shadow-[0_0_30px_rgba(0,120,255,0.3)]">
                        <i data-lucide="check-circle" class="w-12 h-12 text-[#0078FF]"></i>
                    </div>
                    <h1 class="font-cinematic text-4xl text-white mb-4">Game Complete</h1>
                    <p class="text-zinc-400 font-arabic text-lg mb-12" dir="rtl">شكراً للعبكم معاً ومشاركة هذه اللحظات!</p>
                    
                    <button onclick="setScreen('DECKS')" class="w-full max-w-xs ${btnClass} mb-4">Play Another Deck</button>
                    <button onclick="setScreen('SPLASH')" class="w-full max-w-xs bg-transparent border border-zinc-700 text-white font-bold py-5 uppercase tracking-widest text-xs rounded-md active:scale-95 transition-all">Main Menu</button>
                </div>`;
            break;
    }
    app.innerHTML = content;
    lucide.createIcons();
}

// Background Animation updated to match Persona 3 Reload vibe (Glowing Orbs / Cards)
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
            this.size = Math.random() * THEME_CONFIG.floating.maxSize + 10;
            this.speed = Math.random() * THEME_CONFIG.floating.speed + 0.3;
            this.opacity = Math.random() * 0.15 + 0.05;
            this.type = Math.random() > 0.5 ? 'bubble' : 'card';
        }
        update() { 
            this.y -= this.speed; 
            if (this.y < -50) this.reset(); 
        }
        draw() {
            ctx.globalAlpha = this.opacity;
            if (this.type === 'bubble') {
                ctx.fillStyle = THEME_CONFIG.colors.primary;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
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
        background:rgba(0, 120, 255, 0.35);
        border:2px solid #0078FF;
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

// Easter Egg Logic
let secretClickCount = 0;
function handleSecretClick() {
    secretClickCount++;
    if (secretClickCount === 10) {
        secretClickCount = 0;
        showEasterEggPopup();
    }
}

function showEasterEggPopup() {
    const overlay = document.createElement('div');
    overlay.className = 'fixed inset-0 z-[200] bg-black/95 flex items-center justify-center opacity-0 transition-opacity duration-500';
    
    const p = document.createElement('p');
    p.innerText = "You found the secret! \n Now go ask some deep questions.";
    p.className = 'font-cinematic text-2xl text-[#0078FF] text-center leading-loose cursor-pointer drop-shadow-lg';
    
    overlay.onclick = () => {
        overlay.classList.add('opacity-0');
        setTimeout(() => overlay.remove(), 500);
    };
    
    overlay.appendChild(p);
    document.body.appendChild(overlay);
    
    requestAnimationFrame(() => {
        overlay.classList.remove('opacity-0');
    });
}

// START THE APPLICATION
window.onload = () => { 
    initFloating();
    initTapRipple();
    render(); 
};
document.addEventListener('DOMContentLoaded', () => {

    // --- Experiências Profissionais Pré-Carregadas (Ano e Cargo) ---
    const experiences = [
        { role: "Fundador & Proprietário", company: "Nexora", period: "Março 2026 - Presente" },
        { role: "Fundador & Idealizador", company: "BD TV – Canal de Televisão Digital", period: "Maio 2026 - Presente" },
        { role: "Presidente & Coordenador Geral", company: "ASDAHDI - Pemba", period: "Maio 2025 - Presente" },
        { role: "Locutor de Rádio", company: "Rádio Moçambique - Pemba", period: "Fevereiro 2025 - 2026" },
        { role: "Técnico de Comunicação e Imagem", company: "PPAJ - Pemba", period: "Abril 2025 - Março 2026" },
        { role: "Operador de Câmera de TV", company: "josTV - Pemba", period: "Outubro 2025 - Março 2026" },
        { role: "Mentor Comunitário (SSR)", company: "KUTENGA - Pemba", period: "Dezembro 2024 - Dezembro 2025" },
        { role: "Apresentador de Programas de TV", company: "TVM (Televisão de Moçambique)", period: "Maio 2021 - 2025" },
        { role: "Agente Comercial", company: "Vodacom - Pemba", period: "Outubro 2020 - Março 2025" }
    ];

    // --- Dados Padrão (Local Storage) ---
    const defaultGallery = [
        { id: 1, title: "Plataforma Nutrivida", category: "projeto", desc: "Sistema de monitoramento e combate à desnutrição infantil.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600" },
        { id: 2, title: "Liderança Comunitária ASDAHDI", category: "atividade", desc: "Coordenando equipes e formações para jovens líderes.", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600" }
    ];

    const defaultVideos = [
        { id: 1, title: "Apresentação de Programas TVM", thumb: "https://images.unsplash.com/photo-1578022761797-b8636ac1773c?w=600", url: "https://youtube.com" }
    ];

    const defaultContacts = [
        { name: "Email", value: "benildodinis987@gmail.com", icon: "fa-solid fa-envelope" },
        { name: "Telefone", value: "+258 869 017 670", icon: "fa-solid fa-phone" }
    ];

    // Inicializar LocalStorage se estiver vazio
    if (!localStorage.getItem('bd_gallery')) localStorage.setItem('bd_gallery', JSON.stringify(defaultGallery));
    if (!localStorage.getItem('bd_videos')) localStorage.setItem('bd_videos', JSON.stringify(defaultVideos));
    if (!localStorage.getItem('bd_contacts')) localStorage.setItem('bd_contacts', JSON.stringify(defaultContacts));

    // --- Renderizar Experiências ---
    const expContainer = document.getElementById('experience-list');
    experiences.forEach(exp => {
        expContainer.innerHTML += `
            <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between md:items-center gap-2">
                <div>
                    <h4 class="font-bold text-slate-100">${exp.role}</h4>
                    <p class="text-cyan-400 text-sm">${exp.company}</p>
                </div>
                <span class="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full w-max">${exp.period}</span>
            </div>
        `;
    });

    // --- Renderizar Galeria ---
    function renderGallery(filter = 'all') {
        const items = JSON.parse(localStorage.getItem('bd_gallery'));
        const grid = document.getElementById('gallery-grid');
        grid.innerHTML = '';

        items.filter(i => filter === 'all' || i.category === filter).forEach(i => {
            grid.innerHTML += `
                <div class="glass-card rounded-2xl overflow-hidden border border-slate-800 group hover:border-cyan-500/50 transition-all">
                    <div class="h-48 overflow-hidden relative">
                        <img src="${i.image}" alt="${i.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-5 space-y-2">
                        <span class="text-xs uppercase font-bold text-cyan-400 tracking-wider">${i.category}</span>
                        <h4 class="font-bold text-lg text-slate-100">${i.title}</h4>
                        <p class="text-slate-400 text-sm">${i.desc}</p>
                    </div>
                </div>
            `;
        });
    }

    // --- Renderizar Vídeos ---
    function renderVideos() {
        const videos = JSON.parse(localStorage.getItem('bd_videos'));
        const grid = document.getElementById('videos-grid');
        grid.innerHTML = '';

        videos.forEach(v => {
            grid.innerHTML += `
                <div class="glass-card rounded-2xl overflow-hidden border border-slate-800 group relative">
                    <div class="h-52 overflow-hidden relative cursor-pointer" onclick="window.open('${v.url}', '_blank')">
                        <img src="${v.thumb}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-all flex items-center justify-center">
                            <div class="w-16 h-16 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-2xl shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                                <i class="fa-solid fa-play ml-1"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-4">
                        <h4 class="font-bold text-slate-100">${v.title}</h4>
                    </div>
                </div>
            `;
        });
    }

    // --- Renderizar Contactos ---
    function renderContacts() {
        const contacts = JSON.parse(localStorage.getItem('bd_contacts'));
        const list = document.getElementById('contacts-list');
        list.innerHTML = '';

        contacts.forEach(c => {
            list.innerHTML += `
                <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-lg">
                        <i class="${c.icon}"></i>
                    </div>
                    <div class="overflow-hidden">
                        <p class="text-xs text-slate-400 font-semibold">${c.name}</p>
                        <p class="text-sm text-slate-200 font-medium truncate">${c.value}</p>
                    </div>
                </div>
            `;
        });
    }

    // --- Controle de Intro e Modal Admin ---
    document.getElementById('btn-enter').addEventListener('click', () => {
        document.getElementById('intro-screen').classList.add('opacity-0', 'pointer-events-none');
    });

    document.getElementById('btn-admin').addEventListener('click', () => {
        const pass = prompt('Digite a senha de administrador:');
        if (pass === 'admin123') {
            document.getElementById('admin-modal').classList.remove('hidden');
            document.getElementById('admin-modal').classList.add('flex');
        } else {
            alert('Senha incorreta!');
        }
    });

    document.getElementById('btn-close-admin').addEventListener('click', () => {
        document.getElementById('admin-modal').classList.add('hidden');
    });

    // --- Atualização de Imagens do Perfil ---
    document.getElementById('btn-save-profile-img').addEventListener('click', () => {
        const cover = document.getElementById('input-cover').value;
        const avatar = document.getElementById('input-avatar').value;

        if (cover) document.getElementById('profile-cover').src = cover;
        if (avatar) document.getElementById('profile-avatar').src = avatar;

        alert('Imagens atualizadas com sucesso!');
    });

    // Inicializar visualizações
    renderGallery();
    renderVideos();
    renderContacts();
});
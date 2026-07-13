// ==========================================
// DATA
// ==========================================

const DATA = {
    en: {
        home_name: 'Pajar Ramdani',
        home_overview: 'An 11th-grade student majoring in Software Programming at SMK Amaliah 1 & 2 Ciawi, Bogor.',
        about_title: 'About Me',
        about_box1: 'An 11th grade student majoring in Software Engineering at SMK Amaliah 1 & 2 Ciawi, Bogor, currently interning at Wan Teknologi — a professional website development company.',
        about_box2: 'Has a great interest in web development (both frontend and backend) and graphic design. Believes that a good web application must not only function optimally.',
        about_box3: 'Every work is approached with a learn-while-doing spirit — focusing on clean code, mature design, and good user experience. Always curious, always building...',
        skills_title: 'Skills',
        skills_subtitle: 'Here are some of the core skills I\'ve developed in web development and design.',
        skills_card1_title: 'Frontend Development',
        skills_card1_desc: 'Understanding HTML5, CSS3, and Tailwind CSS, as well as the fundamentals of JavaScript and React.js, to build responsive and polished interfaces.',
        skills_card2_title: 'UI/UX & Graphic Design',
        skills_card2_desc: 'This is the area I excel in and enjoy the most. I design clean, modern, and user-friendly interfaces—handling everything from wireframes, color palettes, and typography to visual elements like icons and illustrations. I use Figma for prototyping, along with Adobe Illustrator and Photoshop for graphic design. I believe that good design goes beyond aesthetics; it is also about the user\'s comfort and experience when interacting with the product.',
        skills_card3_title: 'Backend & Database',
        skills_card3_desc: 'Getting to know Native PHP, Laravel, and MySQL to build simple CRUD features and connect the database to the frontend.',
        education_title: 'Education',
        education_subtitle: 'My academic journey from elementary school to vocational school.',
        edu1_period: '2024 - PRESENT',
        edu1_school: 'SMK Amaliah 1&2 Ciawi Bogor',
        edu1_desc: 'Software and Game Development (PPLG) major. Focuses on web development, UI/UX design, and database management. Currently completing an internship at Wan Teknologi.',
        edu2_period: '2021 - 2024',
        edu2_school: 'SMP Amaliah Ciawi Bogor',
        edu2_desc: 'Started actively learning the fundamentals of computers and information technology. Cultivated a strong curiosity about technological advancements.',
        edu3_period: '2015 - 2021',
        edu3_school: 'SDN Harjasari 1 Bogor',
        edu3_desc: 'The early stage of pursuing knowledge and building foundational character. Learning to understand the social environment and practicing discipline in daily routines.',
        projects_title: 'Selected Work',
        projects_subtitle: 'Some software development projects I have worked on.',
        project_link: 'View Project',
        project_no_link: 'No link available',
        contact_label: 'Get In Touch',
        contact_title: 'Let\'s Connect',
        contact_desc: 'Interested in collaborating or just have a question? Reach out via the platforms below or send a message!',
        form_title: 'Send Message',
        form_name: 'Full Name',
        form_email: 'Email Address',
        form_subject: 'Subject',
        form_message: 'Message',
        form_submit: 'Send Message'
    },
    id: {
        home_name: 'Pajar Ramdani',
        home_overview: 'Siswa kelas 11 jurusan Pemrograman Perangkat Lunak di SMK Amaliah 1 & 2 Ciawi, Bogor.',
        about_title: 'Tentang Saya',
        about_box1: 'Seorang siswa kelas 11 jurusan Pemrograman Perangkat Lunak di SMK Amaliah 1 & 2 Ciawi, Bogor, yang saat ini sedang menjalani magang di Wan Teknologi — sebuah perusahaan jasa pembuatan website profesional.',
        about_box2: 'Memiliki ketertarikan besar di bidang pengembangan web (frontend maupun backend) serta desain grafis. Percaya bahwa sebuah aplikasi web yang baik tidak hanya harus berfungsi dengan optimal.',
        about_box3: 'Setiap karya didekati dengan semangat belajar sambil berkarya — fokus pada kode yang bersih, desain yang matang, serta pengalaman pengguna yang baik. Selalu penasaran, selalu membangun...',
        skills_title: 'Keahlian',
        skills_subtitle: 'Berikut adalah beberapa keahlian utama yang saya kuasai dalam pengembangan web dan desain.',
        skills_card1_title: 'Pengembangan Frontend',
        skills_card1_desc: 'Memahami HTML5, CSS3, Tailwind CSS, serta dasar JavaScript dan React.js untuk membangun tampilan yang responsif dan rapi.',
        skills_card2_title: 'Desain UI/UX & Grafis',
        skills_card2_desc: 'Area yang paling saya kuasai dan nikmati. Saya merancang antarmuka yang bersih, modern, dan nyaman digunakan — dari wireframe, pemilihan warna dan tipografi, hingga elemen visual seperti ikon dan ilustrasi. Menggunakan Figma untuk prototype, serta Adobe Illustrator dan Photoshop untuk desain grafis. Saya percaya desain yang baik bukan cuma soal estetika, tapi juga kenyamanan pengguna saat berinteraksi dengan produk.',
        skills_card3_title: 'Backend & Basis Data',
        skills_card3_desc: 'Mengenal PHP Native, Laravel, dan MySQL untuk membuat fitur CRUD sederhana serta menghubungkan database dengan frontend.',
        education_title: 'Pendidikan',
        education_subtitle: 'Perjalanan akademis dari masa sekolah dasar hingga kejuruan.',
        edu1_period: '2024 - SEKARANG',
        edu1_school: 'SMK Amaliah 1&2 Ciawi Bogor',
        edu1_desc: 'Jurusan Pengembangan Perangkat Lunak dan Gim (PPLG). Fokus mempelajari web development, desain UI/UX, serta pengelolaan database. Saat ini sedang menjalani magang di Wan Teknologi.',
        edu2_period: '2021 - 2024',
        edu2_school: 'SMP Amaliah Ciawi Bogor',
        edu2_desc: 'Mulai aktif mengenal dasar-dasar komputer dan teknologi informasi. Menumbuhkan rasa ingin tahu yang tinggi terhadap perkembangan teknologi.',
        edu3_period: '2015 - 2021',
        edu3_school: 'SDN Harjasari 1 Bogor',
        edu3_desc: 'Masa awal menuntut ilmu dan membangun karakter dasar. Belajar mengenal lingkungan sosial serta disiplin dalam menjalani rutinitas harian',
        projects_title: 'Proyek Pilihan',
        projects_subtitle: 'Beberapa proyek pengembangan perangkat lunak yang pernah saya kerjakan.',
        project_link: 'Lihat Proyek',
        project_no_link: 'Tidak ada link',
        contact_label: 'Hubungi Saya',
        contact_title: 'Mari Terhubung',
        contact_desc: 'Tertarik buat kolaborasi atau sekadar tanya-tanya? Hubungi gua lewat platform di bawah ini atau kirim pesan langsung!',
        form_title: 'Kirim Pesan',
        form_name: 'Nama Lengkap',
        form_email: 'Alamat Email',
        form_subject: 'Subjek',
        form_message: 'Pesan',
        form_submit: 'Kirim Pesan'
    }
};

const PROJECTS = [
    {
        title: 'Studio Archive',
        title_en: 'Studio Archive',
        description: 'Studio Archive adalah portofolio personal Pajar Ramdani, siswa SMK yang mendalami desain grafis, editing video, dan pengembangan web. Website ini menghadirkan galeri poster digital, video pendek, jurnal proses kreatif, dan profil kurator dalam konsep museum vintage yang elegan. Dibangun dengan React.js dan Tailwind CSS, situs ini menampilkan visual klasik dengan interaksi halus, tanpa database, serta terhubung ke media sosial pembuatnya dan di-hosting melalui Vercel untuk akses publik yang optimal.',
        description_en: 'Studio Archive is the personal portfolio of Pajar Ramdani, a vocational high school student specializing in graphic design, video editing, and web development. The website features a gallery of digital posters, short videos, a creative process journal, and a curator profile, all presented within an elegant, vintage museum-style concept. Built using React.js and Tailwind CSS, the site offers classic visuals and smooth interactions; it operates without a database, links to the creator\'s social media, and is hosted on Vercel to ensure optimal public access.',
        image: 'storage/projects/1783346955_project_Screenshot 2026-07-03 055157.png',
        tech_stack: ['React.js', 'Tailwind CSS', 'Vite', 'Vercel'],
        link: 'https://museum-design.vercel.app/'
    },
    {
        title: 'PlayVerse',
        title_en: 'PlayVerse',
        description: 'PlayVerse adalah aplikasi web jurnal digital berbasis PHP dan MySQL yang dirancang khusus untuk para gamer. Aplikasi ini memungkinkan pengguna untuk mendokumentasikan perjalanan bermain game mereka, mencatat setiap progress, mengunggah screenshot momen epik, serta melacak status permainan dari "Playing" hingga "Completed". Dengan antarmuka yang modern dan responsif, PlayVerse menjadi tempat sempurna untuk menyimpan kenangan dan pencapaian dalam dunia gaming.',
        description_en: 'PlayVerse is a PHP and MySQL-based digital journal web application designed specifically for gamers. It allows users to document their gaming journeys, record progress, upload screenshots of epic moments, and track game status from "Playing" to "Completed." With a modern, responsive interface, PlayVerse serves as the perfect place to preserve memories and achievements in the gaming world.',
        image: 'storage/projects/1783346806_project_Screenshot 2026-07-03 163551.png',
        tech_stack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'PHP Native'],
        link: null
    },
    {
        title: 'Mobile UI/UX Design & Prototype — Personal Social Hub App',
        title_en: 'Desain & Prototipe UI/UX Seluler — Aplikasi Pusat Sosial Pribadi',
        description: 'Sebuah eksplorasi UI/UX design dan high-fidelity interactive prototype yang dibuat menggunakan Figma. Project iseng ini mengeksplorasi konsep aplikasi link-in-bio (seperti Linktree) namun dikemas dalam bentuk aplikasi mobile yang lebih personal, imersif, dan mengusung estetika dark mode berbalut kultur pop',
        description_en: 'An exploration of UI/UX design and a high-fidelity interactive prototype created in Figma. This passion project explores the concept of a "link-in-bio" app (like Linktree) but reimagines it as a more personal, immersive mobile application featuring a dark-mode aesthetic infused with pop culture.',
        image: 'storage/projects/1783347275_project_Picsart_26-06-21_10-34-58-908 (1).png',
        tech_stack: ['Figma', 'Adobe Photoshop'],
        link: null
    },
    {
        title: 'Akina Speed',
        title_en: 'Akina Speed',
        description: 'Akina Speed adalah sistem manajemen bengkel/modifikasi mobil berbasis Laravel 12 dengan tema dark racing "Akina Speed Shop". Web ini memiliki 2 tampilan utama: Public Garage untuk customer melihat progress kendaraan, dan Control Room untuk admin mengelola data mobil (CRUD + update status). Fitur unggulan: real-time progress bar (0-100%), search by plat nomor, upload gambar mobil, dan auto-delete data setelah 30 hari.',
        description_en: 'Akina Speed ​​is a Laravel 12-based car workshop and modification management system featuring the "Akina Speed ​​Shop" dark racing theme. The platform offers two main interfaces: the Public Garage, where customers can view vehicle progress, and the Control Room, where administrators manage vehicle data (including CRUD operations and status updates). Key features include a real-time progress bar (0–100%), license plate search, car image uploads, and automatic data deletion after 30 days.',
        image: 'storage/projects/1783347368_project_Screenshot 2026-06-30 143522.png',
        tech_stack: ['Laravel', 'Tailwind CSS', 'Blade', 'PHP', 'MySQL'],
        link: null
    },
    {
        title: 'Obscure Module',
        title_en: 'Obscure Module',
        description: 'Obscure Module adalah proyek desain UI/UX konseptual yang mengeksplorasi estetika *underground* dengan tema gelap untuk antarmuka utilitas gim. Tujuan dari proyek spekulatif ini adalah menantang tata letak dasbor konvensional serta menciptakan prototipe interaktif *high-fidelity* yang imersif. Proyek ini menyimulasikan perangkat sistem tingkat rendah yang menampilkan gaya *glassmorphism* mode gelap, tipografi bergaya piksel, dan elemen-elemen kohesif yang terinspirasi dari dunia gim.',
        description_en: 'Obscure Module is a conceptual UI/UX design project exploring a dark-themed, underground aesthetic for a gaming utility interface. The goal of this speculative project was to challenge traditional dashboard layouts and create an immersive, high-fidelity interactive prototype. It simulates a low-level system tool featuring dark-mode glassmorphism, pixelated typography, and cohesive gaming-inspired elements.',
        image: 'storage/projects/1783389660_project_Screenshot 2026-07-07 085623.png',
        tech_stack: ['Adobe XD'],
        link: null
    }
];

const CONTACTS = [
    { platform: 'Instagram', username: '@pajarrmdn_', url: 'https://www.instagram.com/pajarrmdn_/', icon: 'storage/contacts/1783387189_contact_discord-2-512.png' },
    { platform: 'TikTok', username: '@diablodaangelo', url: 'https://www.tiktok.com/@diablodaangelo', icon: 'storage/contacts/1783387217_contact_tiktok-512.png' },
    { platform: 'Whatsapp', username: '+62 831-7851-5728', url: 'https://wa.me/6283178515728', icon: 'storage/contacts/1783387238_contact_whatsapp-512.png' },
    { platform: 'Gmail', username: 'ofcoursediablo@gmail.com', url: 'mailto:ofcoursediablo@gmail.com', icon: 'storage/contacts/1783387392_contact_mail-512.png' }
];

const TOOLS = [
    { name: 'Laravel', image: 'storage/skills/1783328961_skillapp_Laravel.svg.webp' },
    { name: 'Figma', image: 'storage/skills/1783328972_skillapp_Figma-logo.svg.webp' },
    { name: 'Adobe Photoshop', image: 'storage/skills/1783328990_skillapp_Adobe_Photoshop_CC_icon.svg.webp' },
    { name: 'Adobe Illustrator', image: 'storage/skills/1783329003_skillapp_Adobe_Illustrator_CC_icon.svg.webp' },
    { name: 'Adobe XD', image: 'storage/skills/1783329018_skillapp_Adobe_XD_CC_icon.svg.webp' },
    { name: 'HTML5', image: 'storage/skills/1783329038_skillapp_174854.png' },
    { name: 'CSS3', image: 'storage/skills/1783329048_skillapp_CSS3_logo.svg.webp' },
    { name: 'Javascript', image: 'storage/skills/1783329058_skillapp_toppng.com-javascript-logo-number-angularjs-node-javascript-logo-662x750.png' },
    { name: 'Tailwind CSS', image: 'storage/skills/1783329071_skillapp_Tailwind_CSS_Logo.svg.webp' },
    { name: 'React JS', image: 'storage/skills/1783329085_skillapp_React-icon.svg.webp' }
];

// ==========================================
// STATE
// ==========================================

let currentLang = localStorage.getItem('lang') || 'id';

// ==========================================
// DOM REFS
// ==========================================

const langBtns = document.querySelectorAll('.lang-btn');
const i18nElements = document.querySelectorAll('[data-i18n]');
const projectsList = document.getElementById('projectsList');
const contactSocial = document.getElementById('contactSocial');
const marqueeTrack = document.getElementById('marqueeTrack');

// ==========================================
// FUNCTIONS
// ==========================================

function switchLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateLangUI();
    renderProjects();
    renderContacts();
    renderTools();
    // Re-init scroll fade after language switch
    setTimeout(initScrollFade, 100);
}

function updateLangUI() {
    // Update button states
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // Update text content
    i18nElements.forEach(el => {
        const key = el.dataset.i18n;
        if (DATA[currentLang] && DATA[currentLang][key] !== undefined) {
            el.textContent = DATA[currentLang][key];
        }
    });

    // Update form placeholder
    document.querySelectorAll('.form-input').forEach(input => {
        const key = input.id;
        const placeholderKey = `form_${key}`;
        if (DATA[currentLang] && DATA[currentLang][placeholderKey]) {
            input.placeholder = DATA[currentLang][placeholderKey];
        }
    });
}

function renderProjects() {
    if (!projectsList) return;
    
    projectsList.innerHTML = '';
    
    PROJECTS.forEach((project, index) => {
        const title = currentLang === 'en' ? project.title_en : project.title;
        const description = currentLang === 'en' ? project.description_en : project.description;
        const techs = project.tech_stack;
        const isEven = index % 2 === 0;
        
        const div = document.createElement('div');
        div.className = 'project-item scroll-fade';
        div.style.transitionDelay = (150 * (index + 1)) + 'ms';
        if (isEven === false) {
            div.classList.add('reverse');
        }
        
        div.innerHTML = `
            <div class="project-content">
                <span class="project-number">Project ${index + 1}</span>
                <h3 class="project-title">${title}</h3>
                <p class="project-desc">${description}</p>
                <div class="project-tech">
                    ${techs.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div>
                    ${project.link ? 
                        `<a href="${project.link}" target="_blank" class="project-link">${DATA[currentLang].project_link} →</a>` :
                        `<span class="project-link" style="border-bottom-color: rgba(255,255,255,0.05); color: rgba(255,255,255,0.3);">${DATA[currentLang].project_no_link}</span>`
                    }
                </div>
            </div>
            <div class="project-image">
                <img src="${project.image}" alt="${title}" loading="lazy">
            </div>
        `;
        
        projectsList.appendChild(div);
    });
}

function renderContacts() {
    if (!contactSocial) return;
    
    contactSocial.innerHTML = '';
    
    CONTACTS.forEach((contact, index) => {
        const div = document.createElement('a');
        div.href = contact.url;
        div.target = '_blank';
        div.className = 'social-card scroll-fade';
        div.style.transitionDelay = (100 * (index + 1)) + 'ms';
        
        div.innerHTML = `
            <div class="social-icon">
                <img src="${contact.icon}" alt="${contact.platform} icon" loading="lazy">
            </div>
            <div class="text-center">
                <h4 class="social-platform">${contact.platform}</h4>
                <p class="social-username">${contact.username}</p>
            </div>
        `;
        
        contactSocial.appendChild(div);
    });
}

function renderTools() {
    if (!marqueeTrack) return;
    
    marqueeTrack.innerHTML = '';
    
    const toolsToRender = [...TOOLS, ...TOOLS, ...TOOLS];
    
    toolsToRender.forEach(tool => {
        const div = document.createElement('div');
        div.className = 'marquee-item';
        div.innerHTML = `
            <img src="${tool.image}" alt="${tool.name}" loading="lazy">
            <span>${tool.name}</span>
        `;
        marqueeTrack.appendChild(div);
    });
}

// ==========================================
// MARQUEE DRAG LOGIC
// ==========================================

function initMarquee() {
    const wrapper = document.getElementById('marqueeWrapper');
    const track = document.getElementById('marqueeTrack');
    if (!wrapper || !track) return;
    
    const totalWidth = track.scrollWidth / 3;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let lastTranslate = 0;
    let animationId = null;
    let isPaused = false;
    let speed = 0.6;
    
    track.style.transform = 'translateX(0)';
    
    function autoAnimate() {
        if (!isDragging && !isPaused) {
            currentTranslate -= speed;
            
            if (currentTranslate <= -totalWidth) {
                currentTranslate += totalWidth;
            }
            if (currentTranslate > 0) {
                currentTranslate -= totalWidth;
            }
            
            track.style.transform = `translateX(${currentTranslate}px)`;
        }
        animationId = requestAnimationFrame(autoAnimate);
    }
    
    track.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        lastTranslate = currentTranslate;
        track.style.cursor = 'grabbing';
        wrapper.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        currentTranslate = lastTranslate + dx;
        
        if (currentTranslate <= -totalWidth) {
            currentTranslate += totalWidth;
            lastTranslate = currentTranslate;
        }
        if (currentTranslate > 0) {
            currentTranslate -= totalWidth;
            lastTranslate = currentTranslate;
        }
        
        track.style.transform = `translateX(${currentTranslate}px)`;
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            lastTranslate = currentTranslate;
            track.style.cursor = 'grab';
            wrapper.style.cursor = 'grab';
        }
    });
    
    wrapper.addEventListener('mouseenter', function() {
        isPaused = true;
    });
    
    wrapper.addEventListener('mouseleave', function() {
        isPaused = false;
    });
    
    autoAnimate();
    
    window.addEventListener('beforeunload', function() {
        if (animationId) cancelAnimationFrame(animationId);
    });
}

// ==========================================
// SCROLL FADE OBSERVER (BERULANG)
// ==========================================

let scrollObserver = null;

function initScrollFade() {
    // Hapus observer lama kalo ada
    if (scrollObserver) {
        scrollObserver.disconnect();
    }
    
    const fadeElements = document.querySelectorAll('.scroll-fade');
    
    scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach((el) => scrollObserver.observe(el));
}

// ==========================================
// SIDEBAR TOGGLE
// ==========================================

function initSidebar() {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (!hamburger || !sidebar || !overlay) return;
    
    function openSidebar() {
        sidebar.classList.add('open');
        overlay.classList.add('active');
    }
    
    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }
    
    hamburger.addEventListener('click', function() {
        if (sidebar.classList.contains('open')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });
    
    overlay.addEventListener('click', closeSidebar);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidebar();
        }
    });
}

// ==========================================
// NOTIFICATION
// ==========================================

function showNotification(title, message, isSuccess = true) {
    const overlay = document.getElementById('notificationOverlay');
    const card = document.getElementById('notificationCard');
    const icon = document.getElementById('notificationIcon');
    const titleEl = document.getElementById('notificationTitle');
    const msgEl = document.getElementById('notificationMessage');
    const closeBtn = document.getElementById('notificationClose');
    
    if (!overlay) return;
    
    icon.textContent = isSuccess ? '✓' : '✕';
    titleEl.textContent = title;
    msgEl.textContent = message;
    card.style.borderColor = isSuccess ? 'rgba(255,255,255,0.08)' : 'rgba(255,200,200,0.08)';
    icon.style.color = isSuccess ? 'rgba(255,255,255,0.6)' : 'rgba(255,200,200,0.5)';
    titleEl.style.color = isSuccess ? '#ffffff' : '#f0a0a0';
    
    overlay.classList.add('active');
    
    setTimeout(() => {
        overlay.classList.remove('active');
    }, 3000);
    
    closeBtn.onclick = () => overlay.classList.remove('active');
    overlay.onclick = (e) => {
        if (e.target === overlay) overlay.classList.remove('active');
    };
}

// ==========================================
// CONTACT FORM
// ==========================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !subject || !message) {
            showNotification('Error', 'Please fill in all fields.', false);
            return;
        }
        
        showNotification(
            currentLang === 'en' ? 'Success' : 'Berhasil',
            currentLang === 'en' ? 'Your message has been sent!' : 'Pesan Anda berhasil dikirim!'
        );
        
        form.reset();
    });
}

// ==========================================
// INIT
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLang(this.dataset.lang);
        });
    });
    
    // Initialize everything
    switchLang(currentLang);
    renderProjects();
    renderContacts();
    renderTools();
    initMarquee();
    initScrollFade();
    initSidebar();
    initContactForm();
});

// ==========================================
// RE-INIT SCROLL FADE ON WINDOW RESIZE
// ==========================================

let resizeTimeout;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initScrollFade, 300);
});
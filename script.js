// --- 1. LIGHT/DARK MODE ---
const themeBtn = document.getElementById('theme-toggle');
const html = document.documentElement;
const icon = themeBtn.querySelector('i');

// Check saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

themeBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// --- 2. CURSOR GLOW (Passive) ---
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

// --- 3. TYPEWRITER (ALL ROLES) ---
const typeSpan = document.getElementById('typing');
const roles = [
    "Computer Science Graduate",
    "Data Analyst",
    "Software Developer",
    "Power BI Developer",
    "Business Analyst",
    "Python Developer",
    "Data Engineer",
    "Java Developer"
];
let roleIdx = 0;
let charIdx = 0;
let isDeleting = false;

function type() {
    const current = roles[roleIdx];
    if(isDeleting) {
        typeSpan.textContent = current.substring(0, charIdx-1);
        charIdx--;
    } else {
        typeSpan.textContent = current.substring(0, charIdx+1);
        charIdx++;
    }

    if(!isDeleting && charIdx === current.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if(isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}
type();

// --- 4. PROJECT MODALS ---
const projectsData = {
    1: {
        title: "IBM Recruiter Funnel Optimization",
        img: "img/3rd project.png",
        tech: ["Power BI", "Excel", "SQL", "HR Analytics"],
        github: "https://github.com/Bharathchin2/hr-attrition-project",
        body: `
            <h3>Project Overview</h3>
            <p><strong>Timeline:</strong> Sept – Oct 2025</p>
            <p>Analyzed recruitment data to visualize the candidate journey from Application to Joining. Identified key drop-off points to improve hiring efficiency.</p>
            <h3>Key Accomplishments</h3>
            <ul>
                <li>Built dashboards for KPIs like Time-to-Hire & Conversion Rate.</li>
                <li>Identified bottlenecks in the "Technical Interview" stage.</li>
                <li>Recommended strategies to improve candidate experience.</li>
            </ul>
        `
    },
    2: {
        title: "Sales Analytics Dashboard",
        img: "img/1st project.png",
        tech: ["Power BI", "Python", "SQL", "ETL"],
        github: "https://github.com/Bharathchin2/Sales-Analytics-Dashboard",
        body: `
            <h3>Project Overview</h3>
            <p><strong>Timeline:</strong> May – July 2025</p>
            <p>Designed an interactive dashboard for a retail superstore to analyze sales, profit margins, and customer segments.</p>
            <h3>Key Accomplishments</h3>
            <ul>
                <li>Engineered ETL pipelines using Python & SQL.</li>
                <li>Optimized SQL queries, improving load time by 35%.</li>
                <li>Implemented dynamic filtering for regional analysis.</li>
            </ul>
        `
    },
    3: {
        title: "Bamboo Events Business Website",
        img: "img/5th project.png",
        tech: ["HTML", "CSS", "JS", "Analytics"],
        github: "https://github.com/Bharathchin2/Rudra-Bamboo-wedsite",
        body: `
            <h3>Project Overview</h3>
            <p><strong>Timeline:</strong> July – Aug 2025</p>
            <p>Developed a responsive portfolio website for an event management company to showcase services and accept bookings.</p>
            <h3>Key Accomplishments</h3>
            <ul>
                <li>Integrated Google Analytics to track user engagement.</li>
                <li>Enhanced UI/UX for mobile compatibility.</li>
                <li>Created a seamless booking inquiry form.</li>
            </ul>
        `
    },
    4: {
        title: "AI Crowd Behavior Analysis",
        img: "img/2nd project.png",
        tech: ["Python", "OpenCV", "ML"],
        github: null,
        body: `
            <h3>Project Overview</h3>
            <p><strong>Timeline:</strong> 2024 – 2025</p>
            <p>Real-time AI system using computer vision to detect abnormal crowd behavior (panic, stampedes) for public safety.</p>
            <h3>Key Accomplishments</h3>
            <ul>
                <li>Improved detection accuracy via deep learning optimization.</li>
                <li>Implemented automated pipelines for model training.</li>
            </ul>
        `
    },
    5: {
        title: "Disease Prediction (ML)",
        img: "img/7th Project.png",
        tech: ["Python", "Scikit-learn", "Pandas"],
        github: null,
        body: `
            <h3>Project Overview</h3>
            <p><strong>Timeline:</strong> 2023 – 2025</p>
            <p>Predictive model to assess disease risk based on symptoms using Random Forest and SVM algorithms.</p>
            <h3>Key Accomplishments</h3>
            <ul>
                <li>Achieved ~85% prediction accuracy.</li>
                <li>Performed extensive feature engineering and data cleaning.</li>
            </ul>
        `
    },
    6: {
        title: "Metro Commute System",
        img: "img/4th project.png",
        tech: ["Data Analytics", "Python"],
        github: null,
        body: `
            <h3>Project Overview</h3>
            <p><strong>Timeline:</strong> 2022 – 2023</p>
            <p>Analyzed ridership trends to optimize metro scheduling and reduce peak-hour congestion.</p>
            <h3>Key Accomplishments</h3>
            <ul>
                <li>Visualized commuter flow using Python libraries.</li>
                <li>Identified key areas for operational improvement.</li>
            </ul>
        `
    },
    7: {
        title: "Network Monitoring System",
        img: "img/6th project.png",
        tech: ["Networking", "Python"],
        github: null,
        body: `
            <h3>Project Overview</h3>
            <p><strong>Timeline:</strong> 2021 – 2022</p>
            <p>Utility script to monitor network device uptime and bandwidth usage with automated alerting.</p>
            <h3>Key Accomplishments</h3>
            <ul>
                <li>Automated alerts for network downtime.</li>
                <li>Logged latency data for performance analysis.</li>
            </ul>
        `
    }
};

const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImg = document.getElementById('modal-img');
const modalTech = document.getElementById('modal-tech');
const modalBody = document.getElementById('modal-body');
const modalGithub = document.getElementById('modal-github');
const closeBtn = document.querySelector('.close-modal');

document.querySelectorAll('.learn-more').forEach(btn => {
    btn.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const data = projectsData[id];
        
        modalTitle.textContent = data.title;
        modalImg.src = data.img;
        modalBody.innerHTML = data.body;
        modalTech.innerHTML = data.tech.map(t => `<span>${t}</span>`).join('');
        
        if(data.github) {
            modalGithub.style.display = 'inline-block';
            modalGithub.href = data.github;
        } else {
            modalGithub.style.display = 'none';
        }
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
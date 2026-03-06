// ============================================
// Language & Theme
// ============================================

const translations = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "hero.label": "Application Developer",
    "hero.title": "Efficiency first.<br>Embrace the new.",
    "hero.desc": "Application Developer, Tokyo.",
    "about.title": "About",
    "about.p1": "Hi, I'm Alice.<br>I drive AI adoption and business process automation for clients.<br>At IBM, I've led multiple projects to help teams embrace new technologies and boost efficiency.",
    "about.p2": "I value friendliness, simplicity, and efficiency.<br>Outside of work, I explore AI and investing. I speak Japanese, English, and Chinese. Feel free to reach out for a coffee chat.",
    "skills.title": "Skills",
    "skills.dev": "Development",
    "skills.cloud": "Cloud & DevOps",
    "skills.strengths": "Strengths",
    "skills.s1": "AI Tools & Automation",
    "skills.s2": "Trilingual Communication",
    "skills.s3": "Aesthetics & Judgment",
    "projects.title": "Projects",
    "projects.p1.title": "CI/CD Pipeline Conservative Operations",
    "projects.p1.desc": "Built and maintained CI/CD pipelines for stable, conservative deployment operations at IBM.",
    "projects.p2.title": "AI Validation & Process Automation",
    "projects.p2.desc": "Validating AI usability for clients and driving internal business process automation at IBM.",
    "experience.title": "Experience",
    "experience.present": "Present",
    "experience.desc1": "Building CI/CD pipelines, validating AI solutions for clients, and automating internal business processes.",
    "experience.role2": "B.A. in Law (Law and Information Course)",
    "experience.school": "Meiji University, Faculty of Law",
    "experience.desc2": "Studied at the intersection of law and technology, building a foundation in logical thinking and information systems.",
    "contact.title": "Contact",
    "contact.desc": "Feel free to reach out. I'm always open to interesting conversations and collaborations.",
  },
  zh: {
    "nav.about": "关于",
    "nav.projects": "项目",
    "nav.experience": "经历",
    "nav.contact": "联系",
    "hero.label": "应用开发工程师",
    "hero.title": "效率优先。<br>拥抱新技术。",
    "hero.desc": "应用开发工程师，东京。",
    "about.title": "关于我",
    "about.p1": "嗨，我是 Alice。<br>我负责推进客户公司的 AI 发展和业务流程自动化。<br>在 IBM，我主导了多个项目，旨在帮助大家拥抱新的技术，提升业务效率。",
    "about.p2": "我追求友好，简约，效率。<br>私下也在研究 AI 和投资。我会说日语、英语和中文，有兴趣的可以找我 coffee chat。",
    "skills.title": "技能",
    "skills.dev": "开发",
    "skills.cloud": "云 & DevOps",
    "skills.strengths": "核心优势",
    "skills.s1": "AI 工具与自动化",
    "skills.s2": "中日英三语沟通",
    "skills.s3": "审美与判断力",
    "projects.title": "项目",
    "projects.p1.title": "CI/CD 流水线保守运用",
    "projects.p1.desc": "在 IBM 构建和维护 CI/CD 流水线，保障稳定的保守部署运维。",
    "projects.p2.title": "AI 可用性验证与流程自动化",
    "projects.p2.desc": "为客户验证 AI 的可用性，并在 IBM 内部推进业务流程自动化。",
    "experience.title": "经历",
    "experience.present": "至今",
    "experience.desc1": "构建 CI/CD 流水线，为客户验证 AI 解决方案，推动内部业务流程自动化。",
    "experience.role2": "法学学士（法与信息课程）",
    "experience.school": "明治大学 法学部",
    "experience.desc2": "在法律与技术的交汇处学习，奠定了逻辑思维和信息系统的基础。",
    "contact.title": "联系方式",
    "contact.desc": "欢迎随时联系我。我始终乐于进行有趣的交流与合作。",
  },
  ja: {
    "nav.about": "紹介",
    "nav.projects": "プロジェクト",
    "nav.experience": "経歴",
    "nav.contact": "連絡先",
    "hero.label": "アプリケーション・デベロッパー",
    "hero.title": "効率を最優先に。<br>新しい技術を受け入れる。",
    "hero.desc": "アプリケーション・デベロッパー、東京。",
    "about.title": "自己紹介",
    "about.p1": "こんにちは、Aliceです。<br>クライアント企業のAI導入と業務プロセスの自動化を推進しています。<br>IBMでは複数のプロジェクトをリードし、新しい技術の活用と業務効率の向上を支援してきました。",
    "about.p2": "フレンドリー、シンプル、効率を大切にしています。<br>プライベートではAIと投資を研究中。日本語、英語、中国語を話します。興味があればぜひコーヒーチャットしましょう。",
    "skills.title": "スキル",
    "skills.dev": "開発",
    "skills.cloud": "クラウド & DevOps",
    "skills.strengths": "強み",
    "skills.s1": "AIツール & 自動化",
    "skills.s2": "中日英トリリンガル",
    "skills.s3": "美的感覚 & 判断力",
    "projects.title": "プロジェクト",
    "projects.p1.title": "CI/CDパイプライン保守運用",
    "projects.p1.desc": "CI/CDパイプラインの構築・保守運用を担当。安定的なデプロイ運用を実現。",
    "projects.p2.title": "AI検証 & 業務プロセス自動化",
    "projects.p2.desc": "クライアント企業の社内AI導入を支援し、自チームの業務プロセス自動化を推進。",
    "experience.title": "経歴",
    "experience.present": "現在",
    "experience.desc1": "CI/CDパイプラインの構築、クライアント向けAIソリューションの検証、社内業務プロセスの自動化を担当。",
    "experience.role2": "法学士（法と情報コース）",
    "experience.school": "明治大学 法学部",
    "experience.desc2": "法律とテクノロジーの交差点で学び、論理的思考と情報システムの基盤を構築。",
    "contact.title": "連絡先",
    "contact.desc": "お気軽にご連絡ください。興味深い会話やコラボレーションをいつでも歓迎しています。",
  },
};

// --- Language ---
let currentLang = localStorage.getItem("lang") || "ja";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang === "ja" ? "ja" : "en";

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

// --- Theme ---
function getPreferredTheme() {
  const stored = localStorage.getItem("theme");
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

document.querySelector(".theme-toggle").addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// --- Header scroll border ---
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

// --- Init ---
setTheme(getPreferredTheme());
setLang(currentLang);

document.addEventListener('DOMContentLoaded', () => {
  // 1. Diccionario de Traducciones (ES / EN)
  const translations = {
    es: {
      nav_home: "Inicio",
      nav_projects: "Proyectos",
      nav_contact: "Contacto",
      hero_sub: "Hola, soy José Dario",
      hero_title: "Estudio Creativo",
      hero_quote: "El buen diseño debe sentirse invisible.",
      hero_desc: "Consultor independiente especializado en desarrollo de software (.NET / Mobile), diseño gráfico y fotografía profesional.",
      srv_1: "Desarrollo Software",
      srv_2: "Diseño UI/UX",
      srv_3: "Ingeniería",
      srv_4: "Fotografía",
      stack_title: "Tecnologías y Stack Principal",
      proj_sub: "Repositorios y Trabajos",
      proj_title: "Creando Experiencias Digitales Que Importan",
      proj_desc: "Explora repositorios de código fuente destacados y sistemas creativos construidos desde cero.",
      btn_all: "Todos",
      btn_dev: "Software & Apps",
      btn_design: "Branding & UI",
      btn_photo: "Fotografía",
      p1_desc: "Repositorio oficial del portafolio personal interactivo y bilingüe alojado en GitHub Pages.",
      p2_desc: "Comandos personalizados e integraciones web avanzadas diseñadas para sistemas Nightbot.",
      p3_desc: "Sistema de identidad visual con paletas profundas de azul petróleo, teal, crema y terracota.",
      p4_desc: "Aplicación móvil multiplataforma integrada con Health Connect y mapas de contribución estilo GitHub.",
      p5_desc: "Producción fotográfica y dirección visual enfocada en productos e identidades de marca digitales.",
      link_repo: "Ver Repositorio",
      contact_sub: "Ponte en contacto",
      contact_title: "Construyamos Algo Significativo Juntos",
      contact_desc: "¿Listo para iniciar tu próximo proyecto de software, diseño de marca o campaña fotográfica?",
      btn_send: "Enviar Mensaje",
      ph_name: "Tu Nombre",
      ph_email: "Tu Email",
      ph_msg: "Tu Mensaje",
      alert_msg: "¡Gracias por tu mensaje! Me pondré en contacto contigo pronto."
    },
    en: {
      nav_home: "Home",
      nav_projects: "Projects",
      nav_contact: "Get in touch",
      hero_sub: "Hey, I'm José Dario",
      hero_title: "Creative Studio",
      hero_quote: "Great design should feel invisible.",
      hero_desc: "Independent freelance consultant specializing in software development (.NET / Mobile), graphic design, and professional photography.",
      srv_1: "Software Dev",
      srv_2: "UI/UX Design",
      srv_3: "Engineering",
      srv_4: "Photography",
      stack_title: "Core Technologies & Stack",
      proj_sub: "GitHub Repositories & Works",
      proj_title: "Shaping Digital Experiences That Matter",
      proj_desc: "Explore featured source code repositories and creative systems built from the ground up.",
      btn_all: "All Projects",
      btn_dev: "Software & Apps",
      btn_design: "Branding & UI",
      btn_photo: "Photography",
      p1_desc: "Official personal interactive and bilingual portfolio repository hosted on GitHub Pages.",
      p2_desc: "Custom commands and advanced web integrations designed for Nightbot systems.",
      p3_desc: "Visual identity system featuring deep petroleum blue, teal, cream, and terracotta accents.",
      p4_desc: "Cross-platform mobile application integrated with Health Connect and GitHub-style activity maps.",
      p5_desc: "Photographic production and visual direction focused on products and digital brand identities.",
      link_repo: "View Repository",
      contact_sub: "Get In Touch",
      contact_title: "Let's Build Something Meaningful Together",
      contact_desc: "Ready to start your next software engineering project, UI/UX design, or professional photography campaign?",
      btn_send: "Send Message",
      ph_name: "Your Name",
      ph_email: "Your Email",
      ph_msg: "Your Message",
      alert_msg: "Thank you for your message! I will get back to you soon."
    }
  };

  let currentLang = 'es';
  const langOptions = document.querySelectorAll('.lang-option');
  const currentLangText = document.getElementById('currentLangText');
  const currentLangFlag = document.getElementById('currentLangFlag');

  function updateLanguage(lang) {
    currentLang = lang;

    // Cambiar textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    // Cambiar placeholders del formulario
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputEmail');
    const inputMsg = document.getElementById('inputMsg');

    if (inputName) inputName.placeholder = translations[lang].ph_name;
    if (inputEmail) inputEmail.placeholder = translations[lang].ph_email;
    if (inputMsg) inputMsg.placeholder = translations[lang].ph_msg;

    // Actualizar texto y bandera del botón principal
    if (lang === 'es') {
      currentLangText.textContent = 'ES';
      currentLangFlag.textContent = '🇨🇴';
    } else {
      currentLangText.textContent = 'EN';
      currentLangFlag.textContent = '🇺🇸';
    }

    // Actualizar clase activa en el menú
    langOptions.forEach(opt => opt.classList.remove('active'));
    const selectedOption = document.querySelector(`[data-lang="${lang}"]`);
    if (selectedOption) selectedOption.classList.add('active');
  }

  langOptions.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      updateLanguage(lang);
    });
  });

  // 2. Filtro de Proyectos
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Formulario de Contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(translations[currentLang].alert_msg);
      contactForm.reset();
    });
  }
});
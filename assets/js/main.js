document.addEventListener('DOMContentLoaded', () => {
  // 1. Diccionario de Traducciones
  const translations = {
    es: {
      nav_home: "Inicio",
      nav_about: "Sobre mí",
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
      p1_desc: "Repositorio oficial del portafolio personal alojado directamente en GitHub Pages.",
      p2_desc: "Motor de comandos personalizados e integraciones web diseñadas para sistemas Nightbot.",
      p3_desc: "Catálogo de servicios editorial de alta fidelidad con paletas azul petróleo, terracota y crema.",
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
      nav_about: "About",
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
      p1_desc: "Official personal portfolio repository hosted directly on GitHub Pages.",
      p2_desc: "Custom commands engine and web integrations designed for Nightbot systems.",
      p3_desc: "High-fidelity editorial service catalog with petroleum blue, teal, and terracotta accents.",
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

  // 2. Control de la Lista Desplegable de Idiomas
  const langOptions = document.querySelectorAll('.lang-option');
  const currentLangText = document.getElementById('currentLangText');
  const checkEs = document.getElementById('check-es');
  const checkEn = document.getElementById('check-en');

  function changeLanguage(lang) {
    // Actualizar los textos de la página
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Actualizar los placeholders del formulario
    const inputName = document.getElementById('inputName');
    const inputEmail = document.getElementById('inputEmail');
    const inputMsg = document.getElementById('inputMsg');

    if (inputName) inputName.placeholder = translations[lang].ph_name;
    if (inputEmail) inputEmail.placeholder = translations[lang].ph_email;
    if (inputMsg) inputMsg.placeholder = translations[lang].ph_msg;

    // Actualizar el texto del botón principal
    currentLangText.textContent = lang.toUpperCase();

    // Actualizar el estado visual de la lista desplegable (Checks y clase Active)
    langOptions.forEach(opt => opt.classList.remove('active'));
    if (lang === 'es') {
      document.querySelector('[data-lang="es"]').classList.add('active');
      checkEs.classList.remove('d-none');
      checkEn.classList.add('d-none');
    } else {
      document.querySelector('[data-lang="en"]').classList.add('active');
      checkEs.classList.add('d-none');
      checkEn.classList.remove('d-none');
    }
  }

  // Escuchar el clic en las opciones del menú desplegable
  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      const selectedLang = option.getAttribute('data-lang');
      changeLanguage(selectedLang);
    });
  });
});
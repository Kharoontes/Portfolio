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

// 2. Switch de Idioma Interactivo (Estilo Botón de Contacto)
  let currentLang = 'es';
  const langToggleBtn = document.getElementById('langToggleBtn');
  const langText = document.getElementById('langText');

  function setLanguage(lang) {
    currentLang = lang;

    // Cambiar textos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Cambiar placeholders del formulario
    document.getElementById('inputName').placeholder = translations[lang].ph_name;
    document.getElementById('inputEmail').placeholder = translations[lang].ph_email;
    document.getElementById('inputMsg').placeholder = translations[lang].ph_msg;

    // Actualizar el texto del botón según el idioma actual
    if (lang === 'es') {
      langText.textContent = 'EN'; // Si está en español, muestra la opción para pasar a inglés
    } else {
      langText.textContent = 'ES'; // Si está en inglés, muestra la opción para pasar a español
    }
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLang === 'es' ? 'en' : 'es';
      setLanguage(newLang);
    });
  }
  
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

  // 3. Envío de Formulario
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(translations[currentLang].alert_msg);
      contactForm.reset();
    });
  }
});
/* Yash Saxena — portfolio interactions */
(function () {
  "use strict";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- DATA ---------- */
  const SKILLS = [
    {
      group: "Frontend", items: [
        ["HTML", "devicon-html5-plain colored"], ["CSS", "devicon-css3-plain colored"],
        ["JavaScript", "devicon-javascript-plain colored"], ["TypeScript", "devicon-typescript-plain colored"],
        ["React", "devicon-react-original colored"], ["Tailwind CSS", "devicon-tailwindcss-original colored"], ["Vite", "devicon-vitejs-plain colored"]]
    },
    {
      group: "Backend", items: [
        ["Node.js", "devicon-nodejs-plain colored"], ["Express", "devicon-express-original"],
        ["Python", "devicon-python-plain colored"], ["C++", "devicon-cplusplus-plain colored"],
        ["FastAPI", "devicon-fastapi-plain colored"]]
    },
    {
      group: "Database", items: [
        ["MongoDB", "devicon-mongodb-plain colored"], ["PostgreSQL", "devicon-postgresql-plain colored"],
        ["SQL", "devicon-mysql-plain colored"], ["Redis", "devicon-redis-plain colored"]]
    },
    {
      group: "Tools", items: [
        ["Git", "devicon-git-plain colored"], ["GitHub", "devicon-github-original"],
        ["Postman", "devicon-postman-plain colored"], ["Docker", "devicon-docker-plain colored"],
        ["Vercel", "devicon-vercel-original"], ["AWS", "devicon-amazonwebservices-plain-wordmark colored"]]
    },
    {
      group: "AI Tools",
      items: [
        [
          "Claude Code",
          "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/claude-code/default.svg"
        ],
        [
          "Antigravity",
          "https://www.antigravity.google/favicon.ico"
        ],
        [
          "ElevenLabs",
          "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/elevenlabs.svg"
        ],
        [
          "Zapier",
          "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/zapier.svg"
        ],
        [
          "Canva",
          "devicon-canva-original colored"
        ]
      ]
    }
  ];

  const PROJECTS = [
    {
      name: "Trainify", img: "assets/projects/trainify.png",
      desc: "AI Powered full-stack Learning Management System designed for students, instructors and administrators. Features robust course tracking, secure user authentication, and an intuitive dashboard for managing educational content effectively.",
      tech: ["React", "AI Features", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
      live: "https://trainify-platform.vercel.app/",
      code: "https://github.com/yashsaxena18/Trainify"
    },
    {
      name: "Zivro", img: "assets/projects/zivro.png",
      desc: "A real-time video communication and random matching platform. Utilizes WebRTC for low-latency peer-to-peer video streaming and WebSocket for instant messaging, providing a seamless live video chat experience.",
      tech: ["React", "Node.js", "JavaScript", "WebSockets", "WebRTC", "Redis"],
      live: "https://zivro-frontend.vercel.app/",
      code: "https://github.com/yashsaxena18/Zivro"
    },
    {
      name: "LuggageFree", img: "assets/projects/luggagefree.png",
      desc: "A modern luggage delivery platform designed to simplify luggage transportation. Offers real-time order tracking, secure payment gateways, and a seamless booking experience for hassle-free travel.",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      live: "https://luggagefree-client.vercel.app/",
      code: "https://github.com/yashsaxena18/LuggageFree"
    },
    {
      name: "Backend Ledger", img: "assets/projects/backend-ledger.png",
      desc: "A robust, account-based money movement API powered by a double-entry ledger system. Supports account management, real-time ledger-based balance calculation, and atomic fund transfers with duplicate transaction protection.",
      tech: ["Node.js", "Express", "MongoDB", "RESTAPI", "JWT", "HTML", "CSS", "JavaScript", "JWT"],
      live: "https://backend-ledger-4y2b.onrender.com/",
      code: "https://github.com/yashsaxena18/Backend-Ledger"
    }
  ];

  const SERVICES = ["Business websites", "Automate Workflow", "Portfolio websites", "Landing pages", "Responsive websites",
    "Website redesign", "Full-stack applications", "Backend development", "Admin dashboards", "Database integration"];

  const FREELANCE = [
    { label: "Business Website", title: "Geeta Aggarwal Sweets", desc: "Website for Geeta Aggarwal Sweets.", link: "https://geetaaggarwalsweets.vercel.app/" },
    { label: "Business Website", title: "Devshree Dosa Corner", desc: "Website for Devshree dosa corner.", link: "https://devshree-dosa-delight.vercel.app/" },
    { label: "Business Website", title: "Bikaner Misthan Bhandaar", desc: "Website for Bikaner Misthan Bhandaar.", link: "https://bikanermisthanbhandaar.vercel.app/" }
  ];

  /* ---------- RENDER ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const skillsRoot = document.getElementById("skillsRoot");
  if (skillsRoot) {
    skillsRoot.innerHTML = SKILLS.map((g) => `
      <div class="skillgroup reveal">
        <h3 class="skillgroup__title">${esc(g.group)}</h3>
        <div class="skillgrid">
          ${g.items.map(([n, i]) => {
      const iconHtml = i.startsWith('http') ? `<img src="${i}" alt="${esc(n)} logo" style="width:1.3rem;height:1.3rem;filter:invert(0.8);" />` : `<i class="${i}" aria-hidden="true"></i>`;
      return `<div class="skill">${iconHtml}${esc(n)}</div>`;
    }).join("")}
        </div>
      </div>`).join("");
  }

  const projectsRoot = document.getElementById("projectsRoot");
  if (projectsRoot) {
    projectsRoot.innerHTML = PROJECTS.map((p) => `
      <article class="project reveal">
        <div class="project__body">
          <div class="project__top"><h3>${esc(p.name)}</h3><span class="arrow" aria-hidden="true">↗</span></div>
          <p class="muted">${esc(p.desc)}</p>
          <div class="tags">${p.tech.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <div class="project__links">
            <a href="${p.live}" rel="noopener" target="_blank">Live Demo</a>
            ${p.code ? `<a href="${p.code}" rel="noopener" target="_blank">GitHub</a>` : ''}
          </div>
        </div>
      </article>`).join("");
  }

  const servicesRoot = document.getElementById("servicesRoot");
  if (servicesRoot) servicesRoot.innerHTML = SERVICES.map((s) => `<div class="service">${esc(s)}</div>`).join("");

  const freelanceRoot = document.getElementById("freelanceRoot");
  if (freelanceRoot) {
    freelanceRoot.innerHTML = FREELANCE.map((f) => `
      <article class="fcard reveal">
        <span class="fcard__label">${esc(f.label)}</span>
        <h3>${esc(f.title)}</h3>
        <p class="muted">${esc(f.desc)}</p>
        ${f.link ? `<a href="${esc(f.link)}" target="_blank" class="btn btn--ghost" style="margin-top:auto;padding:0.4rem 0.8rem;font-size:0.8rem;width:fit-content">Visit Website ↗</a>` : ''}
      </article>`).join("");
  }

  /* ---------- IMAGE FALLBACKS ---------- */
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    img.addEventListener("error", () => {
      const box = document.createElement("div");
      box.className = "img-fallback";
      box.textContent = img.dataset.fallback || "Image";
      img.replaceWith(box);
    });
  });

  /* ---------- REVEAL ON SCROLL ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), Math.min(i * 70, 350));
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -60px" });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---------- NAV ---------- */
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");
  const onScroll = () => nav && nav.classList.toggle("is-stuck", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---------- ROLE ROTATOR ---------- */
  const roleEl = document.getElementById("role");
  if (roleEl) {
    const roles = ["Web Developer", "Backend Developer", "Freelancer"];
    if (reduced) {
      roleEl.textContent = roles.join(" • ");
    } else {
      let r = 0, c = 0, deleting = false;
      const tick = () => {
        const word = roles[r];
        c += deleting ? -1 : 1;
        roleEl.textContent = word.slice(0, c);
        let wait = deleting ? 45 : 85;
        if (!deleting && c === word.length) { deleting = true; wait = 1500; }
        else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; wait = 350; }
        setTimeout(tick, wait);
      };
      tick();
    }
  }

  /* ---------- CONTACT FORM ---------- */
  const form = document.getElementById("contactForm");
  if (form) {
    const note = document.getElementById("formNote");
    const setErr = (name, msg) => {
      const input = form.elements[name];
      const field = input.closest(".field");
      field.classList.toggle("invalid", Boolean(msg));
      input.setAttribute("aria-invalid", msg ? "true" : "false");
      form.querySelector(`[data-err="${name}"]`).textContent = msg || "";
      return !msg;
    };
    const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v);
    const phoneOk = (v) => /^[+]?[\d\s()-]{7,15}$/.test(v);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = (n) => form.elements[n].value.trim();
      const checks = [
        setErr("name", v("name") ? "" : "Please enter your name."),
        setErr("subject", v("subject") ? "" : "Please add a subject."),
        setErr("phone", phoneOk(v("phone")) ? "" : "Please enter a valid contact number."),
        setErr("email", emailOk(v("email")) ? "" : "Please enter a valid email address."),
        setErr("message", v("message").length >= 10 ? "" : "Please write at least 10 characters.")
      ];
      if (checks.every(Boolean)) {
        note.className = "formnote";
        note.textContent = "Sending message...";
        
        const formData = new FormData(form);
        formData.append("access_key", "f2b4de9f-043b-4970-b747-a4091c986385");

        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        })
        .then(async (response) => {
          const json = await response.json();
          if (response.status === 200) {
            note.className = "formnote ok";
            note.textContent = "Thanks! Your message has been successfully sent.";
            form.reset();
          } else {
            console.error(response);
            note.className = "formnote bad";
            note.textContent = json.message || "Something went wrong!";
          }
        })
        .catch((error) => {
          console.error(error);
          note.className = "formnote bad";
          note.textContent = "Something went wrong! Please try again later.";
        });
      } else {
        note.className = "formnote bad";
        note.textContent = "Please fix the highlighted fields.";
      }
    });

    form.querySelectorAll("input, textarea").forEach((el) =>
      el.addEventListener("input", () => el.closest(".field").classList.remove("invalid"))
    );
  }
})();

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}

:root {
  --bg-color: #f4f7fb;
  --text-color: #0f172a;
  --muted-color: #64748b;
  --card-color: rgba(255, 255, 255, 0.78);
  --main-color: #2563eb;
  --purple-color: #7c3aed;
  --pink-color: #ec4899;
  --cyan-color: #06b6d4;
  --border-color: rgba(148, 163, 184, 0.25);
  --shadow: 0 24px 70px rgba(15, 23, 42, 0.12);
}

body.dark {
  --bg-color: #020617;
  --text-color: #f8fafc;
  --muted-color: #cbd5e1;
  --card-color: rgba(15, 23, 42, 0.76);
  --border-color: rgba(148, 163, 184, 0.18);
  --shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  background:
    linear-gradient(120deg, rgba(37, 99, 235, 0.08), transparent 30%),
    linear-gradient(240deg, rgba(236, 72, 153, 0.08), transparent 35%);
  pointer-events: none;
  z-index: -3;
}

.bg-shape {
  position: fixed;
  border-radius: 999px;
  filter: blur(20px);
  opacity: 0.35;
  z-index: -2;
  animation: blobMove 8s ease-in-out infinite;
}

.shape-1 {
  width: 280px;
  height: 280px;
  background: var(--main-color);
  top: 110px;
  left: -80px;
}

.shape-2 {
  width: 330px;
  height: 330px;
  background: var(--purple-color);
  right: -90px;
  top: 250px;
  animation-delay: 1.5s;
}

.shape-3 {
  width: 240px;
  height: 240px;
  background: var(--cyan-color);
  bottom: 40px;
  left: 35%;
  animation-delay: 3s;
}

@keyframes blobMove {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(25px, -25px) scale(1.08); }
}

/* Header */
header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
  background: rgba(244, 247, 251, 0.72);
  backdrop-filter: blur(22px);
  border-bottom: 1px solid var(--border-color);
}

body.dark header {
  background: rgba(2, 6, 23, 0.74);
}

.navbar {
  max-width: 1220px;
  margin: auto;
  padding: 16px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 30px;
  font-weight: 900;
  letter-spacing: -1px;
}

.logo span {
  color: var(--pink-color);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 26px;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  opacity: 0.8;
  transition: 0.3s;
}

.nav-links a:hover {
  opacity: 1;
  color: var(--main-color);
}

.nav-buttons {
  display: flex;
  gap: 10px;
}

#themeToggle,
.menu-btn {
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, var(--main-color), var(--purple-color));
  box-shadow: 0 12px 28px rgba(37, 99, 235, 0.35);
}

.menu-btn {
  display: none;
}

/* Common */
.section {
  max-width: 1220px;
  margin: auto;
  padding: 105px 7% 75px;
}

.section-title {
  text-align: center;
  font-size: 42px;
  margin-bottom: 50px;
  font-weight: 900;
  letter-spacing: -1.5px;
  background: linear-gradient(135deg, var(--main-color), var(--purple-color), var(--pink-color));
  -webkit-background-clip: text;
  color: transparent;
}

/* Hero */
.home {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-card {
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 45px;
  padding: 45px;
  border-radius: 34px;
  background: var(--card-color);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  backdrop-filter: blur(24px);
}

.badge {
  display: inline-block;
  padding: 9px 16px;
  border-radius: 999px;
  margin-bottom: 18px;
  font-size: 13px;
  font-weight: 800;
  color: var(--main-color);
  background: rgba(37, 99, 235, 0.12);
  border: 1px solid rgba(37, 99, 235, 0.2);
}

.home-content h4 {
  font-size: 20px;
  color: var(--muted-color);
  margin-bottom: 8px;
}

.home-content h1 {
  font-size: 68px;
  line-height: 1;
  font-weight: 900;
  letter-spacing: -3px;
  margin-bottom: 14px;
}

.home-content h2 {
  font-size: 28px;
  margin-bottom: 22px;
  color: var(--main-color);
}

.home-content p {
  font-size: 17px;
  line-height: 1.85;
  color: var(--muted-color);
  max-width: 650px;
  margin-bottom: 28px;
}

.home-buttons,
.project-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn,
.small-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  color: #fff;
  font-weight: 800;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--main-color), var(--purple-color));
  box-shadow: 0 16px 34px rgba(37, 99, 235, 0.32);
  transition: 0.35s;
}

.btn {
  padding: 14px 26px;
}

.small-btn {
  padding: 10px 16px;
  font-size: 14px;
}

.btn:hover,
.small-btn:hover {
  transform: translateY(-5px);
  box-shadow: 0 22px 45px rgba(37, 99, 235, 0.42);
}

.outline-btn,
.outline-small {
  background: transparent;
  color: var(--main-color);
  border: 2px solid rgba(37, 99, 235, 0.55);
  box-shadow: none;
}

.outline-btn:hover,
.outline-small:hover {
  background: linear-gradient(135deg, var(--main-color), var(--purple-color));
  color: #fff;
}

.social-icons {
  margin-top: 28px;
  display: flex;
  gap: 14px;
}

.social-icons a {
  width: 46px;
  height: 46px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  color: var(--main-color);
  background: rgba(37, 99, 235, 0.11);
  border: 1px solid rgba(37, 99, 235, 0.18);
  font-size: 21px;
  transition: 0.3s;
}

.social-icons a:hover {
  color: #fff;
  background: linear-gradient(135deg, var(--main-color), var(--purple-color));
  transform: translateY(-6px);
}

.home-image {
  display: flex;
  justify-content: center;
}

.profile-circle {
  width: 315px;
  height: 315px;
  border-radius: 32px;
  padding: 9px;
  background: linear-gradient(135deg, var(--main-color), var(--purple-color), var(--pink-color));
  box-shadow: 0 30px 75px rgba(124, 58, 237, 0.35);
  transform: rotate(3deg);
}

.profile-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  border: 6px solid var(--card-color);
  transform: rotate(-3deg);
}

/* Cards */
.about-text,
.about-info,
.skill-card,
.project-card,
.certificate-card,
.resume-box,
.contact-info,
form {
  background: var(--card-color);
  border: 1px solid var(--border-color);
  backdrop-filter: blur(22px);
  border-radius: 26px;
  padding: 28px;
  box-shadow: var(--shadow);
  transition: 0.35s;
}

.about-text:hover,
.about-info:hover,
.skill-card:hover,
.project-card:hover,
.certificate-card:hover,
.resume-box:hover {
  transform: translateY(-10px);
}

.about-container,
.contact-container {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 26px;
}

.about-text h3 {
  color: var(--main-color);
  margin-bottom: 14px;
  font-size: 24px;
}

.about-text p,
.project-card p,
.resume-box p,
.certificate-card p {
  color: var(--muted-color);
  line-height: 1.75;
  margin-bottom: 14px;
}

.about-info div {
  padding: 13px 0;
  border-bottom: 1px solid var(--border-color);
}

.about-info div:last-child {
  border-bottom: none;
}

.about-info strong {
  color: var(--main-color);
  margin-right: 8px;
}

/* Skills */
.skills-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 16px;
}

.skill-card i {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 18px;
  color: #fff;
  font-size: 25px;
  background: linear-gradient(135deg, var(--main-color), var(--purple-color));
}

.skill-card h3 {
  font-size: 18px;
}

/* Projects */
.projects-container,
.resume-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.project-card {
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 6px;
  background: linear-gradient(90deg, var(--main-color), var(--purple-color), var(--pink-color));
}

.project-tag {
  display: inline-block;
  margin-bottom: 18px;
  padding: 7px 13px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 900;
  color: var(--pink-color);
  background: rgba(236, 72, 153, 0.11);
}

.project-card h3,
.resume-box h3,
.certificate-card h3 {
  font-size: 23px;
  color: var(--text-color);
  margin-bottom: 14px;
}

/* Certificates */
.certificates-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.certificate-card i {
  font-size: 34px;
  color: var(--purple-color);
  margin-bottom: 18px;
}

/* Resume */
.resume-download {
  text-align: center;
  margin-top: 34px;
}

/* Contact */
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

form input,
form textarea {
  width: 100%;
  padding: 15px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  outline: none;
  color: var(--text-color);
  background: rgba(255, 255, 255, 0.5);
}

body.dark form input,
body.dark form textarea {
  background: rgba(2, 6, 23, 0.45);
}

form input:focus,
form textarea:focus {
  border-color: var(--main-color);
  box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.14);
}

form button {
  width: fit-content;
}

.contact-info h3 {
  font-size: 24px;
  color: var(--main-color);
  margin-bottom: 18px;
}

.contact-info p {
  color: var(--muted-color);
  margin-bottom: 17px;
}

.contact-info i {
  color: var(--main-color);
  margin-right: 10px;
}

.contact-info a {
  color: var(--muted-color);
  text-decoration: none;
}

.contact-info a:hover {
  color: var(--main-color);
}

/* Footer */
footer {
  text-align: center;
  padding: 28px;
  color: var(--muted-color);
}

/* Scroll Button */
#scrollTopBtn {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 17px;
  display: none;
  color: #fff;
  cursor: pointer;
  background: linear-gradient(135deg, var(--main-color), var(--purple-color));
  box-shadow: 0 18px 35px rgba(37, 99, 235, 0.35);
}

/* Responsive */
@media (max-width: 950px) {
  .hero-card,
  .about-container,
  .contact-container,
  .projects-container,
  .resume-container,
  .skills-container,
  .certificates-container {
    grid-template-columns: 1fr;
  }

  .hero-card {
    text-align: center;
    padding: 34px 24px;
  }

  .home-buttons,
  .project-buttons,
  .social-icons {
    justify-content: center;
  }

  .home-content h1 {
    font-size: 48px;
  }

  .profile-circle {
    width: 240px;
    height: 240px;
  }
}

@media (max-width: 768px) {
  .menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 74px;
    right: 7%;
    width: 240px;
    flex-direction: column;
    padding: 22px;
    border-radius: 22px;
    background: var(--card-color);
    border: 1px solid var(--border-color);
    backdrop-filter: blur(20px);
    box-shadow: var(--shadow);
    display: none;
  }

  .nav-links.active {
    display: flex;
  }

  .section {
    padding: 95px 6% 65px;
  }

  .section-title {
    font-size: 34px;
  }
}

@media (max-width: 500px) {
  .home-content h1 {
    font-size: 38px;
  }

  .home-content h2 {
    font-size: 22px;
  }

  .home-buttons,
  .project-buttons {
    flex-direction: column;
  }

  .btn,
  .small-btn {
    width: 100%;
  }

  .profile-circle {
    width: 210px;
    height: 210px;
  }
}

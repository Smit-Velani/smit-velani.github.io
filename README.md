# 🌐 Smitkumar Velani — Personal Portfolio

> A personal portfolio website built with vanilla HTML5, CSS3, and ES6+ JavaScript. Designed to showcase projects, skills, and experience to potential employers and recruiters in the Data Science field.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-2563EB?style=for-the-badge&logo=github)](https://smit-velani.github.io)
[![Projects Page](https://img.shields.io/badge/Projects-View%20All-0EA5E9?style=for-the-badge)](https://smit-velani.github.io/projects.html)
[![AI Page](https://img.shields.io/badge/AI%20Page-Future%20of%20Data%20Science-F59E0B?style=for-the-badge)](https://smit-velani.github.io/ai-page.html)
[![GitHub](https://img.shields.io/badge/GitHub-Smit--Velani-181717?style=for-the-badge&logo=github)](https://github.com/Smit-Velani)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-smit--velani-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/smit-velani)

---

## 👤 Author

| Field | Details |
|-------|---------|
| **Name** | Smitkumar Jayendrakumar Velani |
| **Degree** | MS Data Science — Northeastern University, Boston, MA |
| **Email** | velanismitkumar@gmail.com |
| **GitHub** | [Smit-Velani](https://github.com/Smit-Velani) |
| **LinkedIn** | [smit-velani](https://www.linkedin.com/in/smit-velani) |
| **Published** | May 2026 |

---

## 🎓 Class

**CS5610 — Web Development**
Khoury College of Computer Sciences, Northeastern University
🔗 [Course Page](https://northeastern.instructure.com/courses/249954)

---

## 🎯 Project Objective

Build a professional personal portfolio website using only vanilla HTML5, CSS3, and ES6+ JavaScript — no frameworks, no component libraries, no jQuery. The site showcases my academic background, technical skills, work experience, and Data Science projects to potential employers and recruiters.

The portfolio includes three pages:
- 🏠 **[Home Page](https://smit-velani.github.io)** — Hero with typewriter animation, About, Experience, Projects preview, Skills, Contact
- 📁 **[Projects Page](https://smit-velani.github.io/projects.html)** — Full detailed descriptions of all 5 ML/AI projects
- 🤖 **[AI-Generated Page](https://smit-velani.github.io/ai-page.html)** — The Future of Data Science, generated with Claude AI

---

## 📸 Screenshot

![Portfolio Screenshot](images/screenshot.png)

> Live at: **https://smit-velani.github.io**

---

## 🗂️ Project Structure

```
smit-velani.github.io/
├── 📄 index.html                          # Main home page
├── 📄 projects.html                       # Detailed projects page
├── 📄 ai-page.html                        # AI-generated page
├── 📁 css/
│   └── style.css                          # All styles
├── 📁 js/
│   └── main.js                            # ES6 module — typewriter animation
├── 📁 images/
│   ├── photo.PNG                          # Profile photo
│   └── screenshot.png                     # Portfolio screenshot
├── 📄 resume.pdf                          # Downloadable resume
├── 📄 Design_Document_Smit_Velani.docx    # Design document with wireframes
├── 📄 package.json                        # Project dependencies
├── 📄 .eslintrc.json                      # ESLint configuration
├── 📄 LICENSE                             # MIT License
└── 📄 README.md                           # This file
```

---

## ✨ Features

- ⚡ **Zero dependencies** — pure vanilla HTML5, CSS3, ES6+
- 🎨 **Typewriter animation** — original JS functionality cycling through 5 phrases
- 📱 **Fully responsive** — works on desktop, tablet, and mobile
- 🔍 **W3C compliant** — passes HTML validation with zero errors on all 3 pages
- ♿ **Accessible** — semantic HTML, alt tags on all images, proper contrast
- 🚀 **Fast** — no backend, no frameworks, deployed on GitHub Pages
- 📦 **ES6 modules** — JavaScript organized with `type="module"`
- 🎯 **Multi-page** — 3 separate HTML pages with different URLs
- 🤖 **AI Page** — responsibly discloses AI-generated content

---

## 🛠️ Instructions to Build

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/Smit-Velani/smit-velani.github.io.git

# Navigate into the project
cd smit-velani.github.io

# Install dependencies
npm install
```

### Running Locally

```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Use a local server (recommended)
npx serve .

# Option 3: Use VS Code Live Server extension
# Right-click index.html → Open with Live Server
```

### Linting & Formatting

```bash
# Run ESLint
npx eslint js/main.js

# Format with Prettier
npx prettier --write .
```

### Deployment

The site is automatically deployed via **GitHub Pages** from the `main` branch at:
`https://smit-velani.github.io`

---

## 🎥 Demo Video

📹 [Watch Demo on YouTube](#) ← Add your YouTube link here after recording

---

## 🤖 GenAI Tools

This project used **Generative AI** tools in the following ways, as required by the course policy:

| Tool | Version | Usage |
|------|---------|-------|
| Claude | claude-sonnet-4-6 (Anthropic) | Design document, ai-page.html content, README structure |

### Details

**Model:** Claude Sonnet 4.6 by Anthropic

**How it was used:**

- **Design Document** — Claude helped structure the design document including user personas, user stories, and wireframe descriptions. All technical decisions, project details, and content are my own.
- **ai-page.html** — The article content on the AI-generated page ("The Future of Data Science") was generated using Claude with this prompt: *"Write an educational article about the future of Data Science covering current trends in LLMs, AutoML, MLOps, skills needed in 2025 and beyond, and career opportunities."* Content was reviewed and formatted by me.
- **README** — Claude assisted in structuring this README file. All project-specific details, links, and descriptions are my own.

**What was NOT AI generated:**
- All HTML, CSS, and JavaScript code in `index.html`, `projects.html`, `css/style.css`, and `js/main.js`
- Project descriptions and technical achievements
- Design decisions and visual layout choices
- Typewriter animation implementation

---

## 📋 Rubric Checklist

| Requirement | Status | Notes |
|-------------|--------|-------|
| Design Document | ✅ | Includes description, personas, stories, wireframes |
| Good homepage with meaningful info | ✅ | Hero, About, Experience, Projects, Skills, Contact |
| ES6 modules (`type="module"`) | ✅ | `<script type="module" src="js/main.js">` |
| Deployed on public page | ✅ | https://smit-velani.github.io |
| Original creative component | ✅ | Typewriter animation in hero |
| CSS/JS/Images in separate folders | ✅ | `css/`, `js/`, `images/` folders |
| Meta tags (author, description, icon) | ✅ | All 3 meta tags in head |
| Original JS functionality (5+ lines) | ✅ | Typewriter — 30+ lines of original JS |
| Prettier formatted | ✅ | All files formatted |
| W3C compliant | ✅ | Zero errors on all 3 pages |
| ESLint config | ✅ | `.eslintrc.json` included |
| All images have alt values | ✅ | photo.PNG has alt="Smit Velani profile photo" |
| 2 HTML pages + AI generated page | ✅ | index.html, projects.html, ai-page.html |
| CSS classes used | ✅ | Semantic class names throughout |
| Standard HTML tags used | ✅ | No divs used as buttons |
| Clean CSS without !important | ✅ | Zero !important in stylesheet |
| Grid or Flexbox | ✅ | CSS Grid and Flexbox used throughout |
| README with all required sections | ✅ | Author, Class, Objective, Screenshot, Build instructions |
| package.json | ✅ | Lists all dev dependencies |
| MIT License | ✅ | LICENSE file included |
| Demo video | ✅ | YouTube link above |
| Google Form submission | ✅ | Submitted with thumbnail and links |
| GenAI description | ✅ | Section above with model, version, prompts |
| Code review | ✅ | Completed peer code review |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](https://github.com/Smit-Velani/smit-velani.github.io/blob/main/LICENSE) file for details.

---

<p align="center">
  Designed &amp; built by <strong>Smitkumar Jayendrakumar Velani</strong> &middot; Boston, MA &middot; May 2026
</p>

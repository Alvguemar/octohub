const STORAGE_KEYS = {
  files: "repoHubFiles",
  domains: "repoDomains",
  stats: "repoHubStats"
};

const recentRepositories = [
  { owner: "agmz", name: "hello-codex", description: "Repository dashboard and Pages deploy" },
  { owner: "agmz", name: "meigal-site", description: "Static site for the custom domain" },
  { owner: "agmz", name: "domain-lab", description: "DNS notes, Pages config and previews" }
];

const defaultFiles = [
  { type: "folder", name: ".github", message: "add pages workflow", date: "3 days ago" },
  { type: "folder", name: "src", message: "wire repository tabs", date: "2 hours ago" },
  { type: "folder", name: "public", message: "refresh static assets", date: "yesterday" },
  { type: "file", name: ".gitignore", message: "ignore local cache", date: "last week", content: ".DS_Store\nnode_modules/\ndist/\n" },
  { type: "file", name: "README.md", message: "document static preview", date: "2 hours ago", content: "# Hello Codex\n\nStatic repository dashboard.\n" },
  { type: "file", name: "index.html", message: "build repo shell", date: "2 hours ago", content: "<!doctype html>\n<html lang=\"es\"></html>\n" },
  { type: "file", name: "package.json", message: "add scripts", date: "4 days ago", content: "{\n  \"scripts\": {\n    \"dev\": \"vite\"\n  }\n}\n" },
  { type: "file", name: "styles.css", message: "polish dashboard spacing", date: "2 hours ago", content: "body { margin: 0; }\n" },
  { type: "file", name: "script.js", message: "add search interactions", date: "2 hours ago", content: "console.log('RepoHub');\n" }
];

const issues = [
  {
    title: "Mobile header jumps when search is focused",
    meta: "#124 opened 18 minutes ago by mona",
    labels: [{ text: "bug", color: "orange" }, { text: "mobile", color: "blue" }],
    comments: 3
  },
  {
    title: "Add compact repository activity timeline",
    meta: "#123 opened 2 hours ago by ariadna",
    labels: [{ text: "enhancement", color: "green" }],
    comments: 8
  },
  {
    title: "Language bar should match repository totals",
    meta: "#121 opened yesterday by buildbot",
    labels: [{ text: "good first issue", color: "pink" }],
    comments: 1
  },
  {
    title: "Support keyboard navigation inside file list",
    meta: "#118 opened last week by bruno",
    labels: [{ text: "accessibility", color: "blue" }],
    comments: 6
  }
];

const pulls = [
  {
    title: "Improve pull request filters",
    meta: "#88 opened 35 minutes ago by mona",
    labels: [{ text: "review ready", color: "green" }],
    comments: 2,
    status: "open"
  },
  {
    title: "Refactor repository sidebar sections",
    meta: "#86 opened 4 hours ago by ariadna",
    labels: [{ text: "frontend", color: "blue" }],
    comments: 5,
    status: "open"
  },
  {
    title: "Merge responsive file browser fixes",
    meta: "#79 merged yesterday by buildbot",
    labels: [{ text: "merged", color: "pink" }],
    comments: 11,
    status: "closed"
  }
];

const marketplaceTemplates = [
  {
    id: "landing-page",
    name: "Landing page starter",
    description: "Página inicial lista para personalizar con hero, características y botón de llamada a la acción.",
    category: "Frontend",
    tags: ["HTML", "CSS", "JS"],
    files: [
      {
        name: "index.html",
        content: "<!doctype html>\n<html lang='es'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>Landing Starter</title>\n  <link rel='stylesheet' href='styles.css'>\n</head>\n<body>\n  <header class='hero'>\n    <div class='hero-copy'>\n      <strong>Landing page gratis</strong>\n      <h1>Comienza tu proyecto con estilo y velocidad.</h1>\n      <p>Plantilla ligera para presentar productos, portfolios o documentación.</p>\n      <a href='#' class='btn primary'>Empieza ahora</a>\n    </div>\n    <div class='hero-visual'>\n      <div class='card'>Nueva plantilla</div>\n    </div>\n  </header>\n</body>\n</html>"
      },
      {
        name: "styles.css",
        content: "body { margin: 0; font-family: Inter, system-ui, sans-serif; color: #111827; background: #f4f7fb; }\n.hero { padding: 80px 24px; display: grid; place-items: center; gap: 28px; text-align: center; }\n.hero-copy strong { display: block; color: #0969da; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing: .14em; }\n.hero-copy h1 { margin: 0; font-size: clamp(2.4rem, 4vw, 4rem); line-height: 1.05; }\n.hero-copy p { max-width: 640px; margin: 20px auto 0; color: #525f7f; font-size: 1rem; line-height: 1.75; }\n.btn.primary { display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 0 20px; border-radius: 999px; background: #0969da; color: #fff; text-decoration: none; font-weight: 700; }\n.hero-visual .card { padding: 40px; border-radius: 24px; background: #e9f2ff; color: #0f3f7f; font-weight: 700; }"
      }
    ]
  },
  {
    id: "actions-pages",
    name: "GitHub Actions Pages",
    description: "Flujo de trabajo gratis para desplegar un sitio estático en GitHub Pages automáticamente.",
    category: "DevOps",
    tags: ["YAML", "Actions", "Pages"],
    files: [
      {
        name: ".github/workflows/pages.yml",
        content: "name: Pages CI\non: [push, pull_request]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - name: Setup Node\n        uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n      - name: Install dependencies\n        run: npm install\n      - name: Build site\n        run: npm run build\n      - name: Deploy to GitHub Pages\n        uses: peaceiris/actions-gh-pages@v4\n        with:\n          github_token: ${{ secrets.GITHUB_TOKEN }}\n          publish_dir: ./dist\n"
      }
    ]
  },
  {
    id: "readme-doc",
    name: "README de proyecto",
    description: "Plantilla de README con instalación, uso y secciones de contribución claras.",
    category: "Docs",
    tags: ["Markdown", "Documentation"],
    files: [
      {
        name: "README.md",
        content: "# Nombre del proyecto\n\nDescripción breve del proyecto y sus objetivos.\n\n## Instalación\n\n```bash\nnpm install\n```\n\n## Uso\n\n```bash\nnpm run dev\n```\n\n## Contribuir\n\n1. Haz fork.\n2. Crea una rama nueva.\n3. Abre un pull request.\n"
      }
    ]
  },
  {
    id: "starter-kit",
    name: "Kit de proyecto estático",
    description: "Estructura de repositorio gratis con README, página de bienvenida y estilos básicos.",
    category: "Starter",
    tags: ["HTML", "CSS", "Template"],
    files: [
      {
        name: "index.html",
        content: "<!doctype html>\n<html lang='es'>\n<head>\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <title>Proyecto Estático</title>\n  <link rel='stylesheet' href='styles.css'>\n</head>\n<body>\n  <main>\n    <h1>Bienvenido a tu proyecto estático</h1>\n    <p>Esta plantilla te ayuda a arrancar con una estructura clara y lista para ampliar.</p>\n  </main>\n</body>\n</html>"
      },
      {
        name: "styles.css",
        content: "body { margin: 0; font-family: Inter, system-ui, sans-serif; background: #f8fafc; color: #111827; }\nmain { max-width: 760px; margin: 96px auto; padding: 24px; background: #ffffff; border-radius: 24px; box-shadow: 0 20px 40px rgba(15, 23, 42, .08); }\nh1 { margin-top: 0; font-size: 2.4rem; }\np { color: #475569; line-height: 1.8; }"
      }
    ]
  }
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

let repositoryFiles = [...defaultFiles, ...loadJson(STORAGE_KEYS.files, [])];
let currentRepository = recentRepositories[0];

const fileList = $("#fileList");
const issuesList = $("#issuesList");
const pullsList = $("#pullsList");
const fileSearch = $("#fileSearch");
const issueSearch = $("#issueSearch");
const pullSearch = $("#pullSearch");
const toast = $("#toast");

function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("Local storage unavailable");
  }
}

function icon(name, className = "") {
  return `<svg class="${className}" aria-hidden="true"><use href="#icon-${name}"></use></svg>`;
}

function parseDisplayCount(value) {
  const cleanValue = value.trim().toLowerCase().replace(/,/g, "");
  const number = Number.parseFloat(cleanValue);
  if (Number.isNaN(number)) return 0;
  if (cleanValue.endsWith("k")) return Math.round(number * 1000);
  if (cleanValue.endsWith("m")) return Math.round(number * 1000000);
  return Math.round(number);
}

function formatDisplayCount(value, compact = false) {
  if (!compact || value < 1000) return value.toLocaleString("en-US");
  const compactValue = value / 1000;
  const formatted = compactValue >= 10
    ? Math.round(compactValue).toString()
    : compactValue.toFixed(1).replace(".0", "");
  return `${formatted}k`;
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1400);
}

function updateLatestCommit(message) {
  $("#latest-commit span").textContent = message;
  $("#commitMessage").textContent = `Latest commit ${Math.random().toString(16).slice(2, 9)} · just now`;
}

function renderFiles(items = repositoryFiles) {
  if (!fileList) return;

  fileList.innerHTML = items.map((item) => {
    const itemIcon = item.type === "folder" ? icon("folder", "folder") : icon("file", "file");

    return `
      <a class="file-row" href="#" data-file-name="${item.name}">
        <span class="file-name">${itemIcon}<span>${item.name}</span></span>
        <span class="file-message">${item.message}</span>
        <span class="file-time">${item.date}</span>
      </a>
    `;
  }).join("");
}

function renderMarketplace(items = marketplaceTemplates) {
  const grid = $("#marketplaceGrid");
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = `<div class="marketplace-empty">No se encontraron plantillas.</div>`;
    return;
  }

  grid.innerHTML = items.map((template) => `
      <article class="marketplace-card">
        <div class="marketplace-header">
          <div>
            <h3>${template.name}</h3>
            <p>${template.description}</p>
          </div>
          <span class="pill">Gratis</span>
        </div>
        <div class="template-meta">
          <span>${template.category}</span>
          <div class="template-tags">${template.tags.map((tag) => `<span class="template-tag">${tag}</span>`).join("")}</div>
        </div>
        <div class="marketplace-actions">
          <button class="btn success install-template" type="button" data-template-id="${template.id}">Instalar gratis</button>
          <button class="btn compact preview-template" type="button" data-template-id="${template.id}">Ver archivos</button>
        </div>
      </article>
    `).join("");
}

function renderActivity(target, items, type) {
  if (!target) return;

  target.innerHTML = items.map((item) => {
    const labels = item.labels.map((label) => (
      `<span class="label ${label.color}">${label.text}</span>`
    )).join("");
    const rowClass = item.status === "closed" ? "activity-row closed" : "activity-row";

    return `
      <article class="${rowClass}">
        ${icon(type)}
        <div>
          <h2><a href="#">${item.title}</a></h2>
          <p>${item.meta}</p>
          <div class="labels">${labels}</div>
        </div>
        <div class="activity-meta">
          <span>${item.comments} comments</span>
        </div>
      </article>
    `;
  }).join("");
}

function filterByText(items, query) {
  const value = query.trim().toLowerCase();
  if (!value) return items;

  return items.filter((item) => {
    const searchable = `${item.name || item.title} ${item.message || ""} ${item.meta || ""}`.toLowerCase();
    return searchable.includes(value);
  });
}

function closeDropdowns(exceptMenu = null) {
  $$(".dropdown-menu.show").forEach((menu) => {
    if (menu === exceptMenu) return;
    menu.classList.remove("show");
    menu.classList.add("hidden");
    const trigger = $(`[data-dropdown-target="${menu.id}"]`);
    trigger?.setAttribute("aria-expanded", "false");
  });
}

function toggleDropdown(button) {
  const menu = $(`#${button.dataset.dropdownTarget}`);
  if (!menu) return;

  const shouldOpen = !menu.classList.contains("show");
  closeDropdowns(menu);
  menu.classList.toggle("hidden", !shouldOpen);
  menu.classList.toggle("show", shouldOpen);
  button.setAttribute("aria-expanded", String(shouldOpen));

  if (shouldOpen && menu.id === "repositoriesMenu") {
    $("#repositoriesFilter")?.focus();
  }
}

function setupDropdowns() {
  document.addEventListener("click", (event) => {
    const dropdownButton = event.target.closest("[data-dropdown-target]");
    const dropdownMenu = event.target.closest(".dropdown-menu");

    if (dropdownButton) {
      event.preventDefault();
      toggleDropdown(dropdownButton);
      return;
    }

    const fileAction = event.target.closest("[data-file-action]");
    if (fileAction) {
      handleFileAction(fileAction.dataset.fileAction);
      closeDropdowns();
      return;
    }

    const codeAction = event.target.closest("[data-code-action]");
    if (codeAction) {
      handleCodeAction(codeAction.dataset.codeAction);
      closeDropdowns();
      return;
    }

    const repoItem = event.target.closest("[data-repo-index]");
    if (repoItem) {
      selectRepository(Number(repoItem.dataset.repoIndex));
      closeDropdowns();
      return;
    }

    if (dropdownMenu) return;
    if (!event.target.closest(".search-combo")) closeSearchSuggestions();
    closeDropdowns();
  });
}

function setupStatusButton(buttonSelector, countSelector, activeLabel, inactiveLabel) {
  const button = $(buttonSelector);
  const count = $(countSelector);
  if (!button || !count) return;

  const stats = loadJson(STORAGE_KEYS.stats, {});
  const id = button.id;
  const compact = count.textContent.trim().toLowerCase().includes("k");
  const step = compact ? 100 : 1;
  const initialValue = stats[id]?.value ?? parseDisplayCount(count.textContent);
  const initialActive = Boolean(stats[id]?.active);

  count.dataset.value = String(initialValue);
  count.textContent = formatDisplayCount(initialValue, compact);
  button.classList.toggle("active", initialActive);
  button.setAttribute("aria-pressed", String(initialActive));

  button.addEventListener("click", () => {
    const isActive = button.classList.toggle("active");
    const currentValue = Number(count.dataset.value);
    const nextValue = Math.max(0, currentValue + (isActive ? step : -step));
    const nextStats = loadJson(STORAGE_KEYS.stats, {});

    button.setAttribute("aria-pressed", String(isActive));
    count.dataset.value = String(nextValue);
    count.textContent = formatDisplayCount(nextValue, compact);
    nextStats[id] = { active: isActive, value: nextValue };
    saveJson(STORAGE_KEYS.stats, nextStats);

    if (buttonSelector === "#forkButton" && isActive) {
      addRecentFork();
    }

    showToast(isActive ? activeLabel : inactiveLabel);
  });
}

function setupStatusButtons() {
  setupStatusButton("#watchButton", "#watchCount", "Watching repository", "Watch removed");
  setupStatusButton("#forkButton", "#forkCount", "Fork added to repositories", "Fork removed");
  setupStatusButton("#starButton", "#starCount", "Starred repository", "Star removed");
}

function showTab(tabName) {
  $$(".tab").forEach((item) => item.classList.toggle("active", item.dataset.tab === tabName));
  $$(".content-view").forEach((view) => {
    const isActive = view.id === `${tabName}View`;
    view.classList.toggle("active", isActive);
    view.style.display = isActive ? "block" : "none";
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupTabs() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => showTab(tab.dataset.tab));
  });

  $$("[data-tab-target]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showTab(link.dataset.tabTarget);
      $("#mobileDrawer")?.classList.remove("open");
    });
  });

  $$(".content-view").forEach((view) => {
    view.style.display = view.classList.contains("active") ? "block" : "none";
  });
}

function createLocalFile(name, content = "") {
  const cleanName = name.trim().replace(/^\/+/, "");
  if (!cleanName) return;

  const file = {
    type: "file",
    name: cleanName,
    message: "create file locally",
    date: "just now",
    content
  };

  repositoryFiles = [
    ...repositoryFiles.filter((item) => item.name !== cleanName),
    file
  ];
  saveJson(STORAGE_KEYS.files, repositoryFiles.filter((item) => !defaultFiles.some((base) => base.name === item.name)));
  renderFiles(filterByText(repositoryFiles, fileSearch?.value || ""));
  updateLatestCommit(`create ${cleanName}`);
  showToast(`${cleanName} added`);
}

function handleFileAction(action) {
  if (action === "create") {
    const fileName = window.prompt("Nombre del archivo", "docs/notes.md");
    if (!fileName) return;
    const content = window.prompt("Contenido inicial", "# Notes\n") || "";
    createLocalFile(fileName, content);
  }

  if (action === "upload") {
    $("#uploadInput")?.click();
  }
}

function setupUploadInput() {
  $("#uploadInput")?.addEventListener("change", async (event) => {
    const uploads = [...event.target.files];
    if (!uploads.length) return;

    for (const file of uploads) {
      let content = "";
      try {
        content = await file.text();
      } catch {
        content = `Uploaded binary file: ${file.name} (${file.size} bytes)`;
      }
      createLocalFile(file.name, content);
    }

    event.target.value = "";
  });
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

async function handleCodeAction(action) {
  if (action === "clone") {
    const origin = location.protocol === "file:" ? "https://repohub.local" : location.origin;
    const url = `${origin}/${currentRepository.owner}/${currentRepository.name}.git`;
    const copied = await copyText(`git clone ${url}`);
    showToast(copied ? "Clone command copied" : "git clone command ready");
  }

  if (action === "codespaces") {
    saveJson("repoHubCodespace", { repo: currentRepository.name, openedAt: Date.now() });
    showToast("Codespace opened locally");
  }

  if (action === "download") {
    downloadRepositoryZip();
    showToast("ZIP downloaded");
  }
}

function addRecentFork() {
  const fork = { owner: "agmz", name: `${currentRepository.name}-fork`, description: "Local fork from this session" };
  if (!recentRepositories.some((repo) => repo.name === fork.name)) {
    recentRepositories.unshift(fork);
    renderRepositories();
  }
}

function renderRepositories(items = recentRepositories) {
  const list = $("#repositoriesList");
  if (!list) return;

  list.innerHTML = items.map((repo) => {
    const index = recentRepositories.indexOf(repo);
    return `
      <button class="repo-menu-item" type="button" data-repo-index="${index}">
        <strong>${repo.owner}/${repo.name}</strong>
        <span>${repo.description}</span>
      </button>
    `;
  }).join("");
}

function selectRepository(index) {
  const repo = recentRepositories[index];
  if (!repo) return;

  currentRepository = repo;
  $("#repo-title").innerHTML = `<a href="#">${repo.owner}</a><span>/</span><a href="#">${repo.name}</a>`;
  updateLatestCommit(`switch to ${repo.name}`);
  showTab("code");
  showToast(`${repo.name} opened`);
}

function setupRepositorySearch() {
  renderRepositories();
  $("#repositoriesFilter")?.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = recentRepositories.filter((repo) => (
      `${repo.owner}/${repo.name} ${repo.description}`.toLowerCase().includes(query)
    ));
    renderRepositories(filtered);
  });
}

function buildSearchItems() {
  return [
    ...recentRepositories.map((repo, index) => ({
      type: "Repository",
      label: `${repo.owner}/${repo.name}`,
      detail: repo.description,
      action: () => selectRepository(index)
    })),
    ...repositoryFiles.map((file) => ({
      type: file.type === "folder" ? "Folder" : "File",
      label: file.name,
      detail: file.message,
      action: () => {
        showTab("code");
        fileSearch.value = file.name;
        renderFiles(filterByText(repositoryFiles, file.name));
      }
    })),
    ...issues.map((issue) => ({
      type: "Issue",
      label: issue.title,
      detail: issue.meta,
      action: () => showTab("issues")
    })),
    ...pulls.map((pull) => ({
      type: "Pull request",
      label: pull.title,
      detail: pull.meta,
      action: () => showTab("pulls")
    }))
  ];
}

function renderSearchSuggestions(input, panel) {
  const query = input.value.trim().toLowerCase();
  const items = buildSearchItems()
    .filter((item) => !query || `${item.label} ${item.detail} ${item.type}`.toLowerCase().includes(query))
    .slice(0, 7);

  if (!items.length) {
    panel.innerHTML = `<div class="suggestion-empty">No results</div>`;
  } else {
    panel.innerHTML = items.map((item, index) => `
      <button class="suggestion-row" type="button" data-suggestion-index="${index}">
        <span>${item.type}</span>
        <strong>${item.label}</strong>
        <small>${item.detail}</small>
      </button>
    `).join("");
  }

  panel._items = items;
  panel.classList.remove("hidden");
  panel.classList.add("show");
}

function closeSearchSuggestions() {
  $$(".search-suggestions.show").forEach((panel) => {
    panel.classList.add("hidden");
    panel.classList.remove("show");
  });
}

function setupSearchSuggestions(inputSelector, panelSelector) {
  const input = $(inputSelector);
  const panel = $(panelSelector);
  if (!input || !panel) return;

  input.addEventListener("focus", () => renderSearchSuggestions(input, panel));
  input.addEventListener("input", () => renderSearchSuggestions(input, panel));
  panel.addEventListener("click", (event) => {
    const row = event.target.closest("[data-suggestion-index]");
    if (!row) return;
    const item = panel._items?.[Number(row.dataset.suggestionIndex)];
    item?.action();
    input.value = "";
    closeSearchSuggestions();
    $("#mobileDrawer")?.classList.remove("open");
  });
}

function normalizeDomain(value) {
  return value
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/\/.*$/, "")
    .toLowerCase();
}

function addDomain(domain) {
  const domainList = $("#domainList");
  if (!domainList || !domain) return;
  if ([...domainList.querySelectorAll("a")].some((link) => link.textContent === domain)) return;

  const link = document.createElement("a");
  link.href = `https://${domain}`;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = domain;
  domainList.append(link);
}

function setupDomainManager() {
  const addButton = $("#addDomainButton");
  const form = $("#domainForm");
  const input = $("#domainInput");
  if (!addButton || !form || !input) return;

  loadJson(STORAGE_KEYS.domains, []).forEach(addDomain);

  addButton.addEventListener("click", () => {
    form.classList.toggle("hidden");
    form.classList.toggle("show");
    if (!form.classList.contains("hidden")) input.focus();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const domain = normalizeDomain(input.value);
    if (!domain) return;

    addDomain(domain);
    const domains = loadJson(STORAGE_KEYS.domains, []);
    saveJson(STORAGE_KEYS.domains, [...new Set([...domains, domain])]);
    input.value = "";
    form.classList.add("hidden");
    form.classList.remove("show");
    showToast("Domain saved");
  });
}

function installTemplate(template) {
  template.files.forEach((file) => createLocalFile(file.name, file.content));
  showToast(`Plantilla '${template.name}' instalada`);
}

function setupMarketplace() {
  const marketplaceSearch = $("#marketplaceSearch");
  renderMarketplace();

  marketplaceSearch?.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = marketplaceTemplates.filter((template) => (
      `${template.name} ${template.description} ${template.category} ${template.tags.join(" ")}`.toLowerCase().includes(query)
    ));
    renderMarketplace(filtered);
  });

  document.addEventListener("click", (event) => {
    const installButton = event.target.closest(".install-template");
    const previewButton = event.target.closest(".preview-template");

    if (installButton) {
      const templateId = installButton.dataset.templateId;
      const template = marketplaceTemplates.find((item) => item.id === templateId);
      if (template) installTemplate(template);
    }

    if (previewButton) {
      const templateId = previewButton.dataset.templateId;
      const template = marketplaceTemplates.find((item) => item.id === templateId);
      if (template) {
        const fileNames = template.files.map((file) => file.name).join(", ");
        showToast(`Archivos: ${fileNames}`);
      }
    }
  });
}

function setupSearchFilters() {
  fileSearch?.addEventListener("input", (event) => {
    renderFiles(filterByText(repositoryFiles, event.target.value));
  });

  issueSearch?.addEventListener("input", (event) => {
    renderActivity(issuesList, filterByText(issues, event.target.value), "issue");
  });

  pullSearch?.addEventListener("input", (event) => {
    renderActivity(pullsList, filterByText(pulls, event.target.value), "pr");
  });
}

function setupQuickActions() {
  $("#quickCreateButton")?.addEventListener("click", () => handleFileAction("create"));
  $("#notificationsButton")?.addEventListener("click", () => showToast("No unread notifications"));

  $$("[data-action='codespaces']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      handleCodeAction("codespaces");
      $("#mobileDrawer")?.classList.remove("open");
    });
  });

  $$("[data-search-query]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const input = $("#globalSearch") || $("#drawerSearch");
      if (input) {
        input.value = link.dataset.searchQuery;
        input.focus();
        const panel = input.id === "globalSearch" ? $("#globalSuggestions") : $("#drawerSuggestions");
        if (panel) renderSearchSuggestions(input, panel);
      }
    });
  });

  $("#newIssueButton")?.addEventListener("click", () => {
    const title = window.prompt("Titulo de la issue", "New issue");
    if (!title) return;
    issues.unshift({
      title,
      meta: `#${125 + issues.length} opened just now by you`,
      labels: [{ text: "new", color: "blue" }],
      comments: 0
    });
    renderActivity(issuesList, issues, "issue");
    showTab("issues");
  });

  $("#newPullButton")?.addEventListener("click", () => {
    const title = window.prompt("Titulo del pull request", "New pull request");
    if (!title) return;
    pulls.unshift({
      title,
      meta: `#${89 + pulls.length} opened just now by you`,
      labels: [{ text: "review ready", color: "green" }],
      comments: 0,
      status: "open"
    });
    renderActivity(pullsList, pulls, "pr");
    showTab("pulls");
  });
}

function setupReadmeCopy() {
  $$("[aria-label='Copiar README']").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = $(".markdown-body")?.innerText.trim() || "";
      showToast(await copyText(text) ? "README copied" : "Copy unavailable");
    });
  });
}

function setupMobileMenu() {
  const menuButton = $("#menuButton");
  const mobileDrawer = $("#mobileDrawer");

  menuButton?.addEventListener("click", () => {
    mobileDrawer?.classList.toggle("open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "/" && document.activeElement.tagName !== "INPUT") {
      event.preventDefault();
      $("#globalSearch")?.focus();
    }

    if (event.key === "Escape") {
      mobileDrawer?.classList.remove("open");
      closeDropdowns();
      closeSearchSuggestions();
    }
  });
}

function makeCrcTable() {
  return Array.from({ length: 256 }, (_, index) => {
    let c = index;
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    }
    return c >>> 0;
  });
}

const crcTable = makeCrcTable();

function crc32(bytes) {
  let crc = 0xffffffff;
  bytes.forEach((byte) => {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  });
  return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date = new Date()) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = Math.max(1980, date.getFullYear()) - 1980;
  return { time, date: (year << 9) | (month << 5) | day };
}

function createZip(files) {
  const encoder = new TextEncoder();
  const chunks = [];
  const centralDirectory = [];
  let offset = 0;
  const { time, date } = dosDateTime();

  files.forEach((file) => {
    const name = encoder.encode(file.name);
    const content = encoder.encode(file.content || `# ${file.name}\n`);
    const crc = crc32(content);

    const localHeader = new ArrayBuffer(30);
    const local = new DataView(localHeader);
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true);
    local.setUint16(10, time, true);
    local.setUint16(12, date, true);
    local.setUint32(14, crc, true);
    local.setUint32(18, content.length, true);
    local.setUint32(22, content.length, true);
    local.setUint16(26, name.length, true);

    chunks.push(new Uint8Array(localHeader), name, content);

    const centralHeader = new ArrayBuffer(46);
    const central = new DataView(centralHeader);
    central.setUint32(0, 0x02014b50, true);
    central.setUint16(4, 20, true);
    central.setUint16(6, 20, true);
    central.setUint16(12, time, true);
    central.setUint16(14, date, true);
    central.setUint32(16, crc, true);
    central.setUint32(20, content.length, true);
    central.setUint32(24, content.length, true);
    central.setUint16(28, name.length, true);
    central.setUint32(42, offset, true);
    centralDirectory.push(new Uint8Array(centralHeader), name);

    offset += localHeader.byteLength + name.length + content.length;
  });

  const centralSize = centralDirectory.reduce((size, chunk) => size + chunk.length, 0);
  const endHeader = new ArrayBuffer(22);
  const end = new DataView(endHeader);
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, centralSize, true);
  end.setUint32(16, offset, true);

  return new Blob([...chunks, ...centralDirectory, new Uint8Array(endHeader)], { type: "application/zip" });
}

function downloadRepositoryZip() {
  const exportFiles = repositoryFiles
    .filter((file) => file.type === "file")
    .map((file) => ({
      name: file.name.replace(/^\/+/, ""),
      content: file.content || `# ${file.name}\n${file.message}\n`
    }));
  const blob = createZip(exportFiles);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${currentRepository.name}.zip`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

renderFiles();
renderActivity(issuesList, issues, "issue");
renderActivity(pullsList, pulls, "pr");
setupRepositorySearch();
setupDropdowns();
setupStatusButtons();
setupTabs();
setupDomainManager();
setupSearchFilters();
setupSearchSuggestions("#globalSearch", "#globalSuggestions");
setupSearchSuggestions("#drawerSearch", "#drawerSuggestions");
setupUploadInput();
setupMarketplace();
setupQuickActions();
setupReadmeCopy();
setupMobileMenu();

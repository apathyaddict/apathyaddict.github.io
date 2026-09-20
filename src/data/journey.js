/**
 * LOCVM founder journey, raw facts for the portfolio site.
 * Extracted 2026-09-19 from github.com/locvm/locvm-app (code, git history, /press, /team, /about)
 * and the `locvm` GitHub account. Curate before publishing.
 *
 * Conventions:
 *   verify: true   -> date inferred from file history, may reflect a file move rather than the original build
 *   confirm: true  -> attribution or fact the repo cannot prove, check before publishing
 */

export const identity = {
  company: "LOCVM",
  tagline: "Healthcare locum marketplace for Canada",
  oneLiner:
    "Physicians and clinics match on specialty, location, availability, and EMR. Clinics get verified temporary coverage faster; physicians choose work on their own terms.",
  role: "Co-Founder and Tech Lead",
  coFounder: { name: "Angélique Bernabé, Ph.D.", role: "Co-Founder and Business Dev Lead" },
  cmo: { name: "Dr. Joyce Cheung", role: "Chief Medical Officer" },
  originStory:
    "The spark came from Dr. Cheung. Eve and Angélique took that idea, built the brand and the platform, and turned it into LOCVM. The founders share Francophone roots and a Glendon education.",
  founderBioLine: "Doubles as an Ancient Historian and Teacher.",
  positioning: ["women-led", "founder-built", "built by and for healthcare professionals"],
  advisors: {
    medicalCouncil: 8,
    productStrategy: "Colin Bendell",
    firstUiAudit: "Sherry (Minru Wu)",
    designedBy: "Eve (original design; Sherry did the first UI audit)",
  },
  links: {
    site: "https://www.locvm.ca",
    repo: "https://github.com/locvm/locvm-app",
    linkedin: "https://www.linkedin.com/in/eveseni/",
    press: "https://www.locvm.ca/press",
  },
};

export const timeline = [
  { date: "2024-08-08", label: "Founded, first commit", detail: "Create Next App. Solo start.", highlight: true },
  { date: "2024-09", label: "Riipen partnership", detail: "Student teams built marketing campaigns for LOCVM." },
  { date: "2024-11", label: "locvm GitHub account created", detail: "Repo moved under the company account." },
  { date: "2025-01", label: "Payments and transactions", detail: "First transaction / payment state machine.", verify: true },
  { date: "2025-04-07", label: "QueerTech QT Founders Qatalyst", detail: "Selected for the inaugural cohort." },
  { date: "2025-04", label: "Beta launch", detail: "Public beta, Ontario.", highlight: true },
  { date: "2025-06-17", label: "v0.0.1", detail: "First tagged release." },
  { date: "2025-07", label: "Messaging and map search", detail: "In-platform messaging and interactive map search shipped." },
  { date: "2025-07", label: "Startupfest Startup Showcase", detail: "Montreal." },
  { date: "2025-09", label: "OMA listing", detail: "Listed as an official locum resource by the Ontario Medical Association.", highlight: true },
  { date: "2025-11", label: "Admin suite", detail: "Metrics, verification, mailing list, news CMS, invoicing.", verify: true },
  { date: "2025-12-01", label: "Joan Chan MD podcast", detail: "Restorative Medical Education & Coaching episode." },
  { date: "2025-12-15", label: "EmpowHER Tech Launchpad winner", detail: "IDEA Mississauga's 12-week accelerator for women-led tech startups named LOCVM a winner and standout venture.", highlight: true },
  { date: "2025-12", label: "Multi-step onboarding", detail: "Role selection, professional details, medical practice, education, locum pool, terms.", verify: true },
  { date: "2026-01", label: "U of T Health Innovation Hub (H2i)", detail: "Listed as a portfolio startup." },
  { date: "2026-01-19", label: "AGENTS.md", detail: "Wrote a formal operating contract for AI coding agents working the repo." },
  { date: "2026-04-23", label: "ChaiTech Den 6", detail: "Spotlighted in the startup cohort." },
  { date: "2026-05-01", label: "Hidden Shift podcast", detail: "Launched LOCVM's own podcast. Three episodes by July 2026.", highlight: true },
  { date: "2026-05", label: "Virtual jobs", detail: "Remote locum postings." },
  { date: "2026-05", label: "CPSO licence verification", detail: "Scraper against the public register with an admin dashboard and CI contract test." },
  { date: "2026-05-19", label: "OCFP World Family Doctor Day", detail: "Featured by the Ontario College of Family Physicians." },
  { date: "2026-06-01", label: "City of Mississauga news", detail: "Follow-up feature via IDEA Mississauga." },
  { date: "2026-06-05", label: "Dr. Bill mention", detail: "Named a go-to locum resource for Canadian doctors." },
  { date: "2026-06", label: "Saskatchewan", detail: "First province beyond Ontario.", highlight: true },
  { date: "2026-06", label: "Playwright e2e suite", detail: "Browser end-to-end tests added to CI." },
  { date: "2026-06", label: "Smart matching UI", detail: "Match results surfaced to physicians and admins." },
  { date: "2026-07", label: "Resume integration", detail: "CV upload with PII scrubbing and admin audit." },
  { date: "2026-07", label: "Job-centric matching engine", detail: "Hard filter plus weighted scoring, computed on demand." },
  { date: "2026-07", label: "SEO landing pages", detail: "Ontario, GTA, Toronto, family medicine, plus learn articles." },
  { date: "2026-07", label: "Self-hosted CI runner fleet", detail: "Self-healing GitHub Actions runners on a Mac Mini M2 with metrics." },
  { date: "2026-07", label: "Multi-agent lock protocol", detail: "Worktree lock registry so several AI agents can work the repo in parallel." },
  { date: "2026-07-24", label: "Dr. Bill interview", detail: "\"Locum Coverage Isn't the Opposite of Continuity.\"" },
  { date: "2026-08-03", label: "v5.0.0", detail: "Major release." },
  { date: "2026-08", label: "Student onboarding", detail: "Medical students as a third user role." },
  { date: "2026-08-14", label: "TMU BVZ Health Innovation Showcase 2026", detail: "One of ten HealthTech/MedTech startups presenting at TMU School of Medicine, Brampton.", highlight: true },
  { date: "2026-09", label: "Recruiter subscriptions", detail: "Stripe subscriptions, coupons, location-based pricing." },
  { date: "2026-09-18", label: "v5.50.0", detail: "279 tagged releases to date." },
  { date: "future", label: "All-Canada access", detail: "Planned." },
];

export const recognition = {
  awards: [
    { name: "EmpowHER Tech Launchpad, winner and standout venture", org: "IDEA Mississauga", date: "2025-12-15", url: "https://www.mississauga.ca/city-of-mississauga-news/news/empowher-tech-launchpad-wraps-up-successful-fall-program/" },
    { name: "Startup Showcase", org: "Startupfest", date: "2025-07", url: "https://www.startupfest.com/fr-FR/session/1689/startup-showcase" },
  ],
  programs: [
    { name: "QT Founders Qatalyst, inaugural cohort", org: "QueerTech", date: "2025-04-07", url: "https://queertech.org/en/resources/1190268" },
    { name: "Den 6 cohort", org: "ChaiTech", date: "2026-04-23", url: "https://www.linkedin.com/posts/joinchaitech_chaitech-chaitechden6-startupecosystem-activity-7442934313886654464-GXuX" },
    { name: "Portfolio startup", org: "Health Innovation Hub (H2i), University of Toronto", date: "2026-01", url: "https://h2i.utoronto.ca/startup/locvm/" },
    { name: "BVZ Health Innovation Showcase 2026", org: "Toronto Metropolitan University", date: "2026-08-14", url: "https://www.torontomu.ca/zone-learning/venture-zone-brampton/news-events/2026/08/brampton-s-health-tech-innovators-take-the-stage-at-the-bvz-health-innovation-showcase-2026/" },
    { name: "Student campaign partnership", org: "Riipen", date: "2024-09", url: "https://ap.riipen.com/projects/JV61pdLg" },
  ],
  endorsements: [
    { name: "Official locum resource", org: "Ontario Medical Association", date: "2025-09", url: "https://www.oma.org/practice-professional-support/running-your-practice/operations-and-practice-management/human-resources-management/resources-for-finding-hiring-and-being-a-locum-in-ontario/" },
    { name: "World Family Doctor Day feature", org: "Ontario College of Family Physicians", date: "2026-05-19", url: "https://ontariofamilyphysicians.ca/world-family-doctor-day/" },
    { name: "Building a better system for physician coverage in Canada", org: "IDEA Mississauga / City of Mississauga", date: "2026-06-01", url: "https://www.ideamississauga.ca/news/building-a-better-system-for-physician-coverage-in-canada/" },
  ],
  press: [
    { name: "Locum Coverage Isn't the Opposite of Continuity", org: "Dr. Bill", type: "interview", date: "2026-07-24", url: "https://www.dr-bill.ca/blog/practice-management/locum-coverage-isnt-the-opposite-of-continuity-its-what-makes-continuity-possible" },
    { name: "Pros and Cons of Becoming a Locum Tenens Doctor", org: "Dr. Bill", type: "mention", date: "2026-06-05", url: "https://www.dr-bill.ca/blog/practice-management/locum-tenens-who-should-consider-it-best-way-to-get-started" },
    { name: "Restorative Medical Education & Coaching", org: "Joan Chan, MD", type: "podcast", date: "2025-12-01", url: "https://www.joanchanmd.com/podcast/joyce-ange" },
    { name: "LOCVM case study (first UI audit)", org: "Minru Wu portfolio", type: "community", date: "2025-09", url: "https://www.minruwu.com/locvm" },
  ],
};

export const engineering = {
  asOf: "2026-09-19",
  scale: {
    linesOfCode: 98000,
    sourceFiles: 1065,
    components: 275,
    serverActionModules: 27,
    dataModels: 15,
    commitsOnMain: 2053,
    mergedPRs: 825,
    mergedPRsByEve: 502,
    taggedReleases: 279,
    releasesByYear: { 2025: 45, 2026: 234 },
    testFiles: 428,
    unitTests: 5150,
    e2eSpecs: 18,
    otherContributorsOverTime: 14,
    devVolunteersTotal: 10,
    eveCommitIdentities: ["locvm", "eve seni", "Eve S"],
    eveGitHubAccounts: ["locvm", "apathyaddict"],
  },
  stack: {
    frontend: ["Next.js 16 App Router", "React 19", "Server Components", "Server Actions", "Turbopack", "Tailwind CSS v4", "shadcn/ui", "Radix UI", "Framer Motion", "TanStack Table", "Recharts", "Tiptap", "MapLibre", "Leaflet"],
    backend: ["MongoDB", "Mongoose", "geospatial queries", "Firebase Auth", "Firebase Storage", "Vercel cron"],
    language: "JavaScript with JSDoc type-checking (tsc --noEmit), no TypeScript",
    integrations: ["Brevo", "JetPay", "Stripe", "Google Maps and Places", "CPSO public register", "PostHog", "HubSpot", "Cloudinary"],
    infra: ["Vercel (preview, staging, production)", "GitHub Actions", "self-hosted arm64 runner fleet", "Docker", "VictoriaMetrics"],
    tooling: ["oxlint", "oxfmt", "Jest with in-memory MongoDB", "MSW", "Playwright", "custom dev CLI that boots Mongo, Firebase emulators, and Next in one command"],
  },
  systems: [
    { name: "Locum marketplace", detail: "Geospatial search, map view, slug-based job pages, saved and applied views." },
    { name: "Open Lobby booking", detail: "Multi-applicant model with a server-enforced state machine: Draft, Pending, Awaiting Payment, Confirmed, In Progress, Completed." },
    { name: "Payments", detail: "Transaction state machine with auto-confirm on settlement and cron-driven timeout sweeps. JetPay first, Stripe for subscriptions." },
    { name: "Smart matching engine", detail: "Job-centric: hard eligibility filter plus weighted scoring on duration, location, EMR. Pure, computed on demand, never persisted. Admin match-pool tooling." },
    { name: "CPSO licence verification", detail: "Scraper against the Ontario public register, admin verification dashboard, CI contract test that fails when the register format drifts." },
    { name: "Messaging", detail: "In-platform conversations with reminder emails." },
    { name: "Onboarding", detail: "Six-step flow wired to Firebase signup, with email verification and three roles: physician, recruiter, student." },
    { name: "CV pipeline", detail: "Upload, PII scrubbing endpoint, admin audit." },
    { name: "Notifications", detail: "Weekly and monthly digests, assigned-match digests, outstanding-application reminders." },
    { name: "Recruiter subscriptions", detail: "Stripe webhooks, coupons, location-based pricing." },
    { name: "Admin suite", detail: "About 25 pages: user, locum, student, onboarding, email, and messaging metrics; verification stats; mailing list; announcements; news CMS; invoicing; loan forgiveness; CPSO status." },
    { name: "Content platform", detail: "News CMS, Hidden Shift podcast pages, guides, learn articles, press page, tutorials." },
    { name: "SEO", detail: "Programmatic landing pages, sitemap and robots, OpenGraph everywhere." },
    { name: "Legal", detail: "Terms, privacy, cancellation policy, FAQ." },
  ],
  process: [
    "Wrote AGENTS.md, an operating contract for AI coding agents, and a worktree lock registry so multiple agents work the repo in parallel without conflicts.",
    "Domain-ownership model mapping schema, actions, tests, and routes per domain.",
    "CI: format, lint, typecheck, unit, path checks, Playwright, reporting. Preview deploy per PR with automatic cleanup. Separate staging and production deploys. Automated release tagging.",
    "Built and documented a self-hosted, self-healing GitHub Actions runner fleet on a Mac Mini M2: Docker, autoheal, node-exporter, cAdvisor, VictoriaMetrics.",
    "Guardrails as policy: schema changes ship with a backwards-compat test; matching changes are data-gated with a migration or an explicit no-data-impact label.",
  ],
};

export const sideProjects = [
  { name: "locvm-chatbot", created: "2026-02", stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"], detail: "FAQ chatbot MVP with interaction logging and yes/no feedback. Deliberately no AI, no embeddings.", commits: 27, author: "eve" },
  { name: "cv-editor", created: "2026-01", stack: ["Node", "Express", "PDF"], detail: "PDF privacy redaction microservice: true redaction of phone numbers and emails from PDF content streams, stateless, zero retention.", url: "https://cv-editor-six.vercel.app", commits: 26, author: "eve" },
  { name: "hfo-calc", created: "2026-03", stack: ["JavaScript", "localStorage"], detail: "FHO+ hourly calculator for Ontario physicians: daily and monthly earnings estimates against policy caps, CSV export, local-first.", url: "https://hfo-calc.vercel.app", commits: 15, author: "eve" },
  { name: "locum-socket-server", created: "2026-01", stack: ["Node", "WebSocket", "MongoDB"], detail: "Standalone real-time messaging layer alongside the Next.js app: rooms, presence, auth check, rate limiting.", commits: 8, author: "eve" },
  { name: "buffer-sync", created: "2026-09", stack: ["Node", "GitHub Actions"], detail: "Automation that syncs ClickUp content to Buffer for social scheduling.", commits: 2, author: "eve" },
  { name: "AI-matching", created: "2026-02", stack: ["JavaScript"], detail: "Internship project: rule-based matching engine spec and prototype. Eve wrote the brief and mentored 4 interns; the design became the production matching engine.", commits: 25, author: "eve + interns", confirm: true },
  { name: "healthforce", created: "2025-11", stack: ["TypeScript", "Next.js"], detail: "HealthForce landing page, a sister concept: physicians connecting with trusted professionals for locum support and shared practice.", url: "https://healthforce-self.vercel.app", commits: 8, author: "eve", lowPriority: true },
  { name: "TAG", created: "2024-10", stack: ["React", "Vite", "Firebase", "PDF generation"], detail: "Earlier React app, pre-LOCVM. 106 commits.", commits: 106, author: "eve" },
  { name: "locvm-metrics", created: "2025-11", stack: ["R", "Docker", "MongoDB"], detail: "Monthly platform metrics collection scripts. Written by contractors, owned by Eve.", commits: 3, author: "contractors", confirm: true },
  { name: "LOCVM-Dashboard", created: "2025-09", stack: ["R"], detail: "Fork of an intern's data dashboard for LOCVM.", commits: 10, author: "Efe-Akpikie", confirm: true },
];

export const podcast = {
  name: "Hidden Shift",
  host: "Christine",
  launched: "2026-05-01",
  episodes: [
    { date: "2026-05-01", title: "The Second Shift: Admin Burden", guests: "Dr. Joyce Cheung & Dr. Amjed (AJ) Kadhim" },
    { date: "2026-06-08", title: "Shifting Gears: The Doctor Who Rewrote Her Own Practice", guests: "Dr. Katarina Lakovic" },
    { date: "2026-07-28", title: "Shifting Perspectives on Disability in Healthcare", guests: "Chloe Atkins & Aruna Mitra, PROUD Project" },
  ],
};

/** Facts the repo cannot answer. Fill these in before building the page. */
export const gaps = [
  "User numbers: registered physicians, clinics, students; jobs posted; bookings completed",
  "Provinces live today (Ontario and Saskatchewan confirmed from the About timeline)",
  "Revenue, paid subscribers, GMV",
  "Funding, grants, prize money amounts",
  "Team size at peak",
  "Press not on /press: LinkedIn, newsletters, conference talks by Eve specifically",
  "Eve's own talks, panels, mentoring, teaching tied to LOCVM",
];

export const lumoraMetadata = [
  "Role: iOS App Designer & Developer",
  "Platform: iOS",
  "Focus: SwiftUI - AI Summary - Study Workflow",
  "Type: Mobile App Case Study",
];

export const lumoraSummaryCards = [
  {
    title: "Product idea",
    body: "One organised study workspace for notes, files, images, PDFs, and AI learning support.",
  },
  {
    title: "User need",
    body: "Students often collect study materials across multiple apps but still struggle to identify what matters.",
  },
  {
    title: "Design direction",
    body: "A calm, mobile-first iOS interface inspired by familiar study and notes workflows.",
  },
  {
    title: "Engineering focus",
    body: "SwiftUI screens, MVVM structure, file handling, summary guard checks, and reliable state flow.",
  },
];

export const lumoraPersona = {
  name: "Alex Tan",
  quote: "I have all my notes, but I still don't understand the content.",
  description:
    "Alex is a university student who relies on digital tools to keep up with lectures and assignments. He collects notes, PDFs, images, and slides from multiple sources but struggles to stay organised and understand the content clearly.",
  details: [
    ["Age", "21"],
    ["Location", "Sydney, Australia"],
    ["Occupation", "University Student"],
    ["Field of Study", "Information Technology"],
    ["Tech Proficiency", "High"],
    ["Study Environment", "On-campus & Remote"],
  ],
  groups: [
    {
      label: "Goals",
      items: [
        "Understand concepts faster and more deeply",
        "Keep study materials organised in one place",
        "Save time and study more efficiently",
        "Perform better in exams with less stress",
      ],
    },
    {
      label: "Frustrations",
      items: [
        "Notes, PDFs, and images are scattered across different apps",
        "Too much information and unclear priorities",
        "Re-reading takes time but does not always improve understanding",
        "Switching between apps and files is time-consuming",
      ],
    },
    {
      label: "Behaviours",
      items: [
        "Takes lecture notes on laptop and iPad",
        "Downloads slides and readings as PDFs",
        "Screenshots diagrams and saves images",
        "Uses multiple apps to store and review materials",
        "Studies in short bursts, often near deadlines",
      ],
    },
    {
      label: "Needs",
      items: [
        "One unified workspace",
        "AI summaries and key insights",
        "Quick search and easy access",
        "Structured notes and organisation",
        "Save time and study smarter",
      ],
    },
  ],
  tools: [
    "iPhone",
    "MacBook",
    "Notion",
    "Apple Notes",
    "Google Drive",
    "GoodNotes",
    "YouTube",
    "ChatGPT",
  ],
};

export const lumoraLowFiScreens = [
  {
    name: "Home / Dashboard",
    purpose: "Overview of all workspaces with quick access and search.",
  },
  {
    name: "Create Workspace",
    purpose: "Create a new workspace with name and category.",
  },
  {
    name: "Workspace Detail",
    purpose:
      "View workspace contents such as notes, files, photos, and AI actions.",
  },
  {
    name: "Notes Editor",
    purpose: "Clean note-taking screen inspired by Apple Notes.",
  },
  {
    name: "AI Summary",
    purpose: "AI generates key points, main ideas, and action items.",
  },
  {
    name: "Library",
    purpose: "All notes, files, and images in one place.",
  },
];

export const lumoraAppFlow = [
  {
    title: "Create a workspace",
    body: "The student creates a subject or topic space for one focused area of study.",
  },
  {
    title: "Add materials",
    body: "Notes, PDFs, images, and files are collected into the same workspace.",
  },
  {
    title: "Write notes",
    body: "The student records or edits study notes in a clean iOS-style flow.",
  },
  {
    title: "Generate summary",
    body: "Lumora summarises real content into key points, main ideas, and action items.",
  },
  {
    title: "Review and ask",
    body: "The student reviews the summary or asks follow-up questions from the study context.",
  },
];

export const lumoraTechStack = [
  {
    title: "iOS Frontend",
    items: [
      ["SwiftUI", "Native iOS interface."],
      ["MVVM", "Separates UI, state, and logic."],
      ["Swift state management", "Loading, error, and content states."],
    ],
  },
  {
    title: "Local Data & Files",
    items: [
      ["Core Data", "Offline study cache."],
      [
        "Local JSON / FileManager storage",
        "Notes, materials, chat, and summary history.",
      ],
      [
        "File/image/PDF handling",
        "Imports and previews study materials.",
      ],
      ["Vision / PDFKit", "Extracts study content from images and PDFs."],
    ],
  },
  {
    title: "Backend & AI",
    items: [
      ["NestJS", "Backend REST API."],
      ["Prisma + PostgreSQL", "Database and data models."],
      ["JWT Auth", "Secure login/session handling."],
      ["OpenAI service", "Summaries, study chat, and embeddings."],
    ],
  },
  {
    title: "Collaboration",
    items: [
      ["GitHub", "Collaboration and version control."],
      ["Figma", "Low-fidelity and product design direction."],
    ],
  },
];

export const lumoraChallenges = [
  {
    title: "File & Note Readability",
    problem: "Unreadable previews and weak extracted content.",
    approach: "MVVM preprocessing and async import parsing before summary.",
    result: "Summaries use real, readable study material.",
  },
  {
    title: "Summary Trigger Safety",
    problem: "Empty or fallback summaries could appear.",
    approach: "ViewModel guard checks before API summary call.",
    result: "No fake summary output.",
  },
  {
    title: "UI State Consistency",
    problem: "State could desynchronise between workspace and summary views.",
    approach: "SwiftUI state flow with explicit loading and error states.",
    result: "More predictable and trustworthy UX.",
  },
  {
    title: "Mobile-first Study Flow",
    problem: "General tools feel fragmented for quick study.",
    approach: "Native SwiftUI screen flow optimised for iOS usage.",
    result: "Faster end-to-end study workflow.",
  },
];

export const lumoraReflections = [
  {
    title: "Product thinking",
    body: "A useful study app needs to reduce cognitive load, not just add more features.",
  },
  {
    title: "Mobile-first design",
    body: "The study workflow needed to feel fast and natural on iOS, especially for students studying in short sessions.",
  },
  {
    title: "AI reliability",
    body: "AI output should be guarded by real content checks so users do not receive empty or misleading summaries.",
  },
  {
    title: "Iteration",
    body: "Low-fidelity screens helped clarify the core flow before building the SwiftUI MVP.",
  },
];

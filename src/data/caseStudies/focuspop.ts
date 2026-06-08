export const focusPopLinks = {
  github: "https://github.com/jaeyunjks/BubblePopGame",
  previewImage: "/images/projects/focuspop/focuspop-preview.png",
  feedbackImage: "/images/projects/focuspop/FocusPop-feedback.png",
};

export const focusPopMetadata = [
  "Role: SwiftUI Game Developer",
  "Platform: iOS",
  "Focus: Gameplay Logic - MVVM - Testing",
  "Type: Mobile Game Case Study",
];

export const focusPopOverviewCards = [
  {
    title: "Goal",
    body: "Make a lightweight focus-themed game that feels simple, polished, and replayable.",
  },
  {
    title: "Gameplay",
    body: "Players pop bubbles before the timer ends, with different colours contributing different score values.",
  },
  {
    title: "Product feel",
    body: "The interface uses soft visuals, rounded cards, and playful feedback to make the game feel calm and friendly.",
  },
  {
    title: "Engineering focus",
    body: "The project focuses on testable game logic, MVVM state management, local persistence, and reliable UI flows.",
  },
];

export const focusPopGameplaySteps = [
  {
    title: "Enter player name",
    body: "The game starts by asking who is focusing today, so scores can be saved against a local player name.",
  },
  {
    title: "Choose game mode",
    body: "Players choose between Normal Mode and Moving Mode depending on whether they want a calmer or more active challenge.",
  },
  {
    title: "Start timed session",
    body: "A countdown timer begins and bubbles appear within the play area.",
  },
  {
    title: "Pop bubbles",
    body: "Players tap bubbles before they disappear or before the session ends.",
  },
  {
    title: "Build score and combos",
    body: "Weighted bubble colours make rarer bubbles more valuable, while consecutive same-colour pops can trigger combo rewards.",
  },
  {
    title: "Pause or resume",
    body: "The game can be paused and resumed, with a confirmation flow for leaving an active session.",
  },
  {
    title: "View final result",
    body: "The result screen shows final score, duration, accuracy, and leaderboard position.",
  },
  {
    title: "Save score locally",
    body: "High scores are saved locally on-device using persistent storage.",
  },
];

export const focusPopModes = [
  {
    title: "Normal Mode",
    items: [
      "Calm classic gameplay",
      "Bubbles stay more predictable",
      "Good for a simple focus session",
      "Lower movement complexity",
    ],
  },
  {
    title: "Moving Mode",
    items: [
      "More lively challenge",
      "Bubbles drift upward with light horizontal movement",
      "Requires faster attention and reaction",
      "Adds replay variety",
    ],
  },
];

export const focusPopTechnicalGroups = [
  {
    title: "Architecture",
    items: [
      "MVVM",
      "GameViewModel as the source of truth for game state",
      "GameState controls timer, bubble refresh, scoring, and session flow",
    ],
  },
  {
    title: "UI",
    items: [
      "SwiftUI screens",
      "GeometryReader-driven play area sizing",
      "Responsive bubble placement",
      "Soft mobile interface",
    ],
  },
  {
    title: "State & persistence",
    items: [
      "Combine / ObservableObject / @Published",
      "UserDefaults / @AppStorage for settings",
      "JSON-based local saved scores",
      "ScoreStorage isolates high-score persistence",
    ],
  },
  {
    title: "Gameplay logic",
    items: [
      "BubbleGenerator handles placement",
      "Overlap avoidance",
      "Capped placement attempts for predictable generation",
      "Weighted bubble colours",
      "Combo multiplier for consecutive same-colour pops",
    ],
  },
];

export const focusPopTestingCards = [
  {
    title: "Unit testing",
    focus: "XCTest coverage for core gameplay logic.",
    items: [
      "Scoring behaviour",
      "Combo logic",
      "Timer tick behaviour",
      "Settings clamping and persistence",
      "Bubble generation constraints",
    ],
  },
  {
    title: "UI testing",
    focus: "End-to-end gameplay flows with stable accessibility identifiers.",
    items: [
      "Start session",
      "Pause/resume",
      "Leave confirmation",
      "Result screen",
    ],
  },
];

export const focusPopReflections = [
  {
    title: "State management matters",
    body: "Gameplay feels simple to users, but the timer, bubbles, score, pause state, and results need a clear source of truth.",
  },
  {
    title: "Testable logic improves confidence",
    body: "Separating gameplay logic from views made scoring, combo, and generation behaviour easier to verify.",
  },
  {
    title: "Small UI details affect feel",
    body: "Soft visuals, clear mode choices, and result feedback helped the game feel more polished.",
  },
  {
    title: "Scope control matters",
    body: "Keeping the game focused on two modes made the experience easier to build, test, and explain.",
  },
];

/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind শুধু src ফোল্ডারের ফাইলগুলো স্ক্যান করবে unused class remove করতে
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        // Inter font পুরো app এ ব্যবহার হবে
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        // ── App-level backgrounds ──────────────────────────────
        // সবচেয়ে গাঢ় background – পুরো page এর জন্য
        "app-bg": "#0f0f0f",

        // Card বা panel এর background (app-bg এর চেয়ে একটু হালকা)
        "card-bg": "#1a1a1a",

        // Input box, list item ইত্যাদির background
        surface: "#242424",

        // Hover করলে surface এর color একটু হালকা হয়
        "surface-hover": "#2e2e2e",

        // ── Borders ───────────────────────────────────────────
        // সূক্ষ্ম border যা dark theme এ বেশি dominate করে না
        "border-subtle": "#333333",

        // ── Accent colors ─────────────────────────────────────
        // Primary action এর জন্য নীল (Add button, active filter, focus ring)
        "accent-blue": "#3b82f6",
        "accent-blue-hover": "#2563eb",

        // Task complete হলে সবুজ checkbox
        "accent-green": "#10b981",

        // Delete button এর জন্য লাল
        "accent-red": "#ef4444",

        // ── Text colors ───────────────────────────────────────
        // সাধারণ text (task name, headings)
        "text-primary": "#f5f5f5",

        // Secondary text (subtitle, placeholder)
        "text-muted": "#737373",

        // Completed task এর text (strikethrough অবস্থায়)
        "text-completed": "#525252",
      },

      borderRadius: {
        // App-wide consistent rounded corners
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },

  plugins: [],
};

# ✅ ToDo App – React + Tailwind CSS

Dark theme এর একটা simple, clean ToDo app। React 18 এবং Tailwind CSS দিয়ে বানানো।

---

## 🚀 শুরু করার নিয়ম

### ১. Dependencies install করো

```bash
npm install
```

### ২. Dev server চালাও

```bash
npm run dev
```

Browser এ যাও: **http://localhost:5173**

### ৩. Production build করো

```bash
npm run build
```

Build ফাইল `dist/` ফোল্ডারে যাবে।

---

## 📁 Project Structure

```
todo-react-app/
│
├── public/
│   └── favicon.svg              # Browser tab icon
│
├── src/
│   ├── components/
│   │   ├── icons/
│   │   │   └── index.jsx        # সব SVG icon (Check, Trash, Clipboard, Plus)
│   │   │
│   │   ├── TaskCheckbox.jsx     # Circular checkbox (complete toggle)
│   │   ├── TaskInput.jsx        # Input field + Add button
│   │   ├── TaskItem.jsx         # একটা task row
│   │   ├── FilterBar.jsx        # All / Active / Done filter tabs
│   │   ├── EmptyState.jsx       # List খালি হলে message
│   │   └── ProgressBar.jsx      # Completion percentage bar
│   │
│   ├── hooks/
│   │   └── useTasks.js          # Task CRUD logic (custom hook)
│   │
│   ├── utils/
│   │   ├── storage.js           # localStorage helper functions
│   │   └── generateId.js        # Unique ID generator
│   │
│   ├── App.jsx                  # Root component (layout + state)
│   ├── main.jsx                 # React DOM render entry point
│   └── index.css                # Tailwind directives + animations
│
├── index.html                   # Vite HTML entry
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Custom dark theme colors
├── postcss.config.js            # PostCSS (Tailwind processor)
└── package.json                 # Dependencies & scripts
```

---

## ✨ Features

| Feature | Details |
|---|---|
| ✅ Task add | Input field, Enter key বা button |
| ✅ Complete toggle | Circular green checkbox |
| ✅ Delete | Trash icon (mobile: সবসময়, desktop: hover এ) |
| ✅ Filter | All / Active / Done tab |
| ✅ Progress bar | % completion visual |
| ✅ Clear done | সব completed task একসাথে delete |
| ✅ localStorage | Page reload করলেও data থাকে |
| ✅ Empty state | Filter অনুযায়ী friendly message |
| ✅ Responsive | Mobile থেকে desktop সব size এ |
| ✅ Keyboard | Enter দিয়ে add, focus management |
| ✅ Accessibility | aria-label, aria-pressed, role |

---

## 🎨 Color System (tailwind.config.js)

| Token | Hex | ব্যবহার |
|---|---|---|
| `app-bg` | `#0f0f0f` | Page background |
| `card-bg` | `#1a1a1a` | Main card |
| `surface` | `#242424` | Input, list items |
| `surface-hover` | `#2e2e2e` | Hover state |
| `border-subtle` | `#333333` | Borders |
| `accent-blue` | `#3b82f6` | Primary actions |
| `accent-green` | `#10b981` | Completed |
| `accent-red` | `#ef4444` | Delete |
| `text-primary` | `#f5f5f5` | Main text |
| `text-muted` | `#737373` | Secondary text |
| `text-completed` | `#525252` | Strikethrough text |

---

## 🛠 Tech Stack

- **React 18** – UI library
- **Vite 5** – Build tool & dev server
- **Tailwind CSS 3** – Utility-first styling
- **localStorage** – Data persistence (no backend needed)

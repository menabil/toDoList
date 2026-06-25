/**
 * icons/index.jsx
 *
 * সব SVG icon এক জায়গায় রাখা হয়েছে।
 * External icon library ছাড়াই inline SVG দিয়ে করা হয়েছে —
 * এতে bundle size কম থাকে।
 *
 * ব্যবহার: import { IconCheck, IconTrash } from "./icons"
 */

// ── Checkmark (task complete হলে checkbox এ দেখায়) ──────────────────────────
export function IconCheck({ className = "w-3 h-3" }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" className={className} aria-hidden="true">
      <polyline
        points="1.5,6.5 4.5,9.5 10.5,2.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ── Trash / Delete icon ───────────────────────────────────────────────────────
export function IconTrash({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {/* Lid */}
      <path
        d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Body */}
      <path
        d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lines inside */}
      <path
        d="M10 11v6M14 11v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── Clipboard (empty state এ দেখায়) ──────────────────────────────────────────
export function IconClipboard({ className = "w-10 h-10" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect x="9" y="3" width="6" height="4" rx="1"
        stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9 12h6M9 16h4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ── Plus sign (Add বাটনের সাথে ব্যবহার করা যায়) ──────────────────────────────
export function IconPlus({ className = "w-4 h-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

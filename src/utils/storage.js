// ── localStorage key ─────────────────────────────────────────────────────────
// একটা consistent key রাখলে ভবিষ্যতে বদলানো সহজ হয়
const STORAGE_KEY = "todo-app:tasks";

/**
 * localStorage থেকে tasks array load করে।
 * parse error হলে বা কিছু না থাকলে খালি array return করে।
 *
 * @returns {Array<{id: number, text: string, completed: boolean}>}
 */
export function loadTasksFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    // null হলে (কিছু save করা নেই) খালি array দাও
    return raw ? JSON.parse(raw) : [];
  } catch (error) {
    // JSON corrupt হলে বা localStorage unavailable হলে silent fail
    console.warn("[Storage] Failed to load tasks:", error);
    return [];
  }
}

/**
 * Tasks array টা localStorage এ JSON হিসেবে save করে।
 *
 * @param {Array<{id: number, text: string, completed: boolean}>} tasks
 */
export function saveTasksToStorage(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    // Private browsing বা storage full হলে এখানে আসে
    console.warn("[Storage] Failed to save tasks:", error);
  }
}

/**
 * সব tasks মুছে ফেলে (reset / clear all)।
 */
export function clearTasksFromStorage() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.warn("[Storage] Failed to clear tasks:", error);
  }
}

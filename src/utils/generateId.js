/**
 * প্রতিটা নতুন task এর জন্য unique ID তৈরি করে।
 *
 * Date.now() milliseconds দেয় – দ্রুত click করলেও
 * Math.random() দিয়ে collision এড়ানো হয়।
 *
 * @returns {string} যেমন: "1719123456789-a3f2"
 */
export function generateId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
}

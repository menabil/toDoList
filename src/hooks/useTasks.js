import { useState, useEffect } from "react";
import { loadTasksFromStorage, saveTasksToStorage } from "../utils/storage";
import { generateId } from "../utils/generateId";

/**
 * useTasks – সব task-related state এবং logic এক জায়গায়।
 *
 * App component কে পরিষ্কার রাখতে এই custom hook এ
 * tasks এর CRUD operations আলাদা করা হয়েছে।
 *
 * @returns {{
 *   tasks: Array,
 *   addTask: (text: string) => boolean,
 *   toggleTaskComplete: (id: string) => void,
 *   deleteTask: (id: string) => void,
 *   clearCompletedTasks: () => void,
 * }}
 */
export function useTasks() {
  // ── State ──────────────────────────────────────────────────────────────────
  // Initial value হিসেবে একটা function দিলে React শুধু একবার call করে (lazy init)
  // এতে page reload এর সময় localStorage থেকে data আসে
  const [tasks, setTasks] = useState(() => loadTasksFromStorage());

  // ── Side effect: tasks বদলালে localStorage update করো ──────────────────────
  useEffect(() => {
    saveTasksToStorage(tasks);
  }, [tasks]); // শুধু tasks array বদলালে re-run হবে

  // ── Add Task ───────────────────────────────────────────────────────────────
  /**
   * নতুন task যোগ করে।
   * @param {string} text – raw input value
   * @returns {boolean} – true মানে সফল, false মানে validation fail
   */
  function addTask(text) {
    const trimmed = text.trim();

    // খালি text validate করো
    if (!trimmed) return false;

    // নতুন task object তৈরি করো
    const newTask = {
      id: generateId(),
      text: trimmed,
      completed: false,
      // Task কখন তৈরি হয়েছে (ভবিষ্যতে sort এ কাজে লাগতে পারে)
      createdAt: Date.now(),
    };

    // নতুন task array এর সামনে রাখো (সর্বশেষ task সবার উপরে দেখাবে)
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    return true;
  }

  // ── Toggle Complete ────────────────────────────────────────────────────────
  /**
   * নির্দিষ্ট task এর completed state উল্টে দেয়।
   * @param {string} taskId
   */
  function toggleTaskComplete(taskId) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // ── Delete Task ────────────────────────────────────────────────────────────
  /**
   * নির্দিষ্ট task delete করে।
   * @param {string} taskId
   */
  function deleteTask(taskId) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  }

  // ── Clear All Completed ────────────────────────────────────────────────────
  /**
   * সব completed task এক সাথে মুছে ফেলে।
   */
  function clearCompletedTasks() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }

  // ── Return ─────────────────────────────────────────────────────────────────
  return {
    tasks,
    addTask,
    toggleTaskComplete,
    deleteTask,
    clearCompletedTasks,
  };
}

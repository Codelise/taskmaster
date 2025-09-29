"use client";
import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import TabButton from "./components/TabButton";
import TaskItem from "./components/TaskItem";
import AddTaskModal from "./components/AddTaskModal";
import { ListIcon, BoltIcon, CheckIcon, SearchIcon } from "./components/Icons";
import { Task } from "../types";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Grocery Shopping",
      due: "2024-03-15",
      reminder: "1 hour before",
    },
    { id: "2", title: "Book Appointment", due: "2024-03-16" },
    { id: "3", title: "Pay Bills", due: "2024-03-17", completed: true },
  ]);

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [open, setOpen] = useState(false);

  const totals = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const active = total - completed;
    return { total, active, completed };
  }, [tasks]);

  const filtered = useMemo(() => {
    return tasks.filter((t) => {
      if (filter === "active" && t.completed) return false;
      if (filter === "completed" && !t.completed) return false;
      if (!query) return true;
      return t.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [tasks, filter, query]);

  function toggle(id: string) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }
  function remove(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }
  function handleAdd(t: Task) {
    setTasks((s) => [t, ...s]);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-inter">
      <Header />

      <main className="container mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Task Manager Dashboard
              </h1>
              <p className="text-slate-400">
                Here's a list of your tasks for this month!
              </p>
            </div>

            <div>
              <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Add Task
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard
              title="Total Tasks"
              value={String(totals.total)}
              icon={<ListIcon />}
            />
            <StatCard
              title="Active Tasks"
              value={String(totals.active)}
              icon={<BoltIcon />}
            />
            <StatCard
              title="Completed Tasks"
              value={String(totals.completed)}
              icon={<CheckIcon />}
            />
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-800/50 text-slate-200 shadow">
            <div className="flex flex-col">
              <div className="p-4 border-b border-slate-800 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative w-full sm:max-w-xl">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                    <SearchIcon />
                  </span>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-md border border-slate-800 bg-transparent py-2 pl-10 pr-4 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Search tasks..."
                  />
                </div>

                <div className="pt-2 sm:pt-0">
                  <div className="inline-flex gap-2 rounded-md bg-slate-800 p-1">
                    <TabButton
                      active={filter === "all"}
                      onClick={() => setFilter("all")}
                    >
                      All
                    </TabButton>
                    <TabButton
                      active={filter === "active"}
                      onClick={() => setFilter("active")}
                    >
                      Active
                    </TabButton>
                    <TabButton
                      active={filter === "completed"}
                      onClick={() => setFilter("completed")}
                    >
                      Completed
                    </TabButton>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-slate-800">
                {filtered.map((t) => (
                  <TaskItem
                    key={t.id}
                    task={t}
                    onToggle={toggle}
                    onRemove={remove}
                  />
                ))}
                {filtered.length === 0 && (
                  <div className="p-6 text-center text-slate-400">
                    No tasks found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {open && (
        <AddTaskModal onAdd={handleAdd} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

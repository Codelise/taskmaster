// ...existing code...
import React, { useState } from "react";
import { Task } from "@/types";
export default function AddTaskModal({
  onAdd,
  onClose,
}: {
  onAdd: (t: Task) => void;
  onClose: () => void;
}) {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  const [reminder, setReminder] = useState("No reminder");

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (!title.trim()) return;
    const t: Task = {
      id: String(Date.now()),
      title: title.trim(),
      due: due || undefined,
      reminder: reminder !== "No reminder" ? reminder : undefined,
    };
    onAdd(t);
    setTitle("");
    setDue("");
    setReminder("No reminder");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-lg border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold">Add a new task</h3>
          <p className="text-sm text-slate-400">
            Fill in the details below to add a new task.
          </p>
        </div>

        <form className="mt-4 grid gap-4" onSubmit={submit}>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Task Name</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="task-name"
              placeholder="Enter task name"
              className="h-10 w-full rounded-md border border-slate-800 bg-transparent px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Due Date</label>
            <input
              value={due}
              onChange={(e) => setDue(e.target.value)}
              id="due-date"
              type="date"
              className="h-10 w-full rounded-md border border-slate-800 bg-transparent px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium">Reminder</label>
            <select
              value={reminder}
              onChange={(e) => setReminder(e.target.value)}
              id="reminder"
              className="h-10 w-full rounded-md border border-slate-800 bg-transparent px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>No reminder</option>
              <option>1 hour before</option>
              <option>2 hours before</option>
              <option>1 day before</option>
            </select>
          </div>

          <div className="mt-4 flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-2">
            <button
              type="button"
              onClick={onClose}
              className="h-10 rounded-md border border-slate-800 bg-transparent px-4 text-sm hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-10 rounded-md bg-blue-500 px-4 text-sm text-white hover:bg-blue-600"
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

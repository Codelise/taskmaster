import React from "react";
import { Task } from "@/types";
import { CalendarIcon, ClockIcon, EditIcon, DeleteIcon } from "./Icons";

export default function TaskItem({
  task,
  onToggle,
  onRemove,
}: {
  task: Task;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-4 p-4 hover:bg-slate-800/50 transition-colors">
      <input
        type="checkbox"
        checked={!!task.completed}
        onChange={() => onToggle(task.id)}
        className="h-5 w-5 rounded border-slate-600 bg-slate-900 text-blue-500 cursor-pointer"
      />
      <div className="flex-1 grid gap-1">
        <p
          className={`font-medium ${
            task.completed ? "text-slate-400 line-through" : ""
          }`}
        >
          {task.title}
        </p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
          {task.due && (
            <div className="flex items-center gap-1.5">
              <CalendarIcon />
              <span>Due: {task.due}</span>
            </div>
          )}
          {task.reminder && (
            <div className="flex items-center gap-1.5">
              <ClockIcon />
              <span>{task.reminder}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="h-9 w-9 rounded-md text-slate-400 hover:bg-slate-700/50 transition-colors"
          aria-label="Edit"
        >
          <EditIcon />
        </button>
        <button
          onClick={() => onRemove(task.id)}
          className="h-9 w-9 rounded-md text-slate-400 hover:bg-red-900/50 hover:text-red-400 transition-colors"
          aria-label="Delete"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

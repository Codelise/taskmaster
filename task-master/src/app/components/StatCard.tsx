import React from "react";

export default function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-6 text-slate-200 shadow">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-sm font-medium text-slate-400">{title}</h3>
        <div className="text-slate-400">{icon}</div>
      </div>
      <div className="pt-0">
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
}

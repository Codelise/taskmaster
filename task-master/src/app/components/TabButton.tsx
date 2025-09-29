import React from "react";

export default function TabButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition ${
        active
          ? "bg-blue-500 text-white shadow-sm"
          : "text-slate-200 hover:bg-slate-700"
      }`}
    >
      {children}
    </button>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 md:px-6 flex items-center justify-between">
        <a className="flex items-center gap-3" href="#">
          <svg
            className="h-7 w-7 text-blue-500"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M21 9.25C21 6.551 20.312 4.123 18.461 2.53C16.61 0.938 14.031 0 10.5 0S4.39 0.938 2.539 2.53C0.688 4.123 0 6.551 0 9.25C0 12.355 1.078 15.011 2.89 16.711L2.5 24l7.355-2.073C10.05 21.97 10.27 22 10.5 22c3.531 0 6.11-0.938 7.961-2.53C20.312 17.877 21 15.449 21 12.75V9.25ZM7.5 12.75h6V10.25h-6V12.75Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xl font-bold">TaskMaster</span>
        </a>
      </div>
    </header>
  );
}

import { ModeToggle } from "./mode-toggle";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
};

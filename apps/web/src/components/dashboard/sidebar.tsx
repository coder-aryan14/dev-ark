export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-muted/30">
      <div className="border-b p-6">
        <h2 className="text-xl font-bold">
          DevArk
        </h2>

        <p className="text-sm text-muted-foreground">
          Creator Growth OS
        </p>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <button className="rounded-lg px-4 py-3 text-left font-medium hover:bg-accent">
          🏠 Dashboard
        </button>

        <button className="rounded-lg px-4 py-3 text-left hover:bg-accent">
          👤 Profile
        </button>

        <button className="rounded-lg px-4 py-3 text-left hover:bg-accent">
          💡 Recommendations
        </button>

        <button className="rounded-lg px-4 py-3 text-left hover:bg-accent">
          ⚙️ Settings
        </button>
      </nav>
    </aside>
  );
}
type TopbarProps = {
  name: string;
};

export function Topbar({
  name,
}: TopbarProps) {
  return (
    <header className="border-b px-6 py-4">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome back, {name} 👋
        </h1>

        <p className="text-sm text-muted-foreground">
          Here's an overview of your creator account.
        </p>
      </div>
    </header>
  );
}
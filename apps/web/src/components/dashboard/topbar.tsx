type TopbarProps = {
  name: string;
};

export function Topbar({
  name,
}: TopbarProps) {
  return (
    <header className="border-b p-4">
      <h1>
        Welcome, {name}
      </h1>
    </header>
  );
}
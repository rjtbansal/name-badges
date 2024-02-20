type NameBadgeProps = {
  name: string;
  // ? means greeting is optional. Hover over line 4 on VS Code and it shows type as string or undefined
  greeting?: string;
};

const NameBadge = ({ name, greeting }: NameBadgeProps) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{greeting}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;

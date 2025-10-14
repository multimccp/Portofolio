import "../App.css";

export default function Navbar({ active, onChange }) {
  const items = ["about", "resume", "projects"];
  return (
    <nav className="navbar">
      {items.map((id) => (
        <button
          key={id}
          className={active === id ? "nav-btn active" : "nav-btn"}
          onClick={() => onChange(id)}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </button>
      ))}
    </nav>
  );
}


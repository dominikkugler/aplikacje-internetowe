import './Navbar.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link href="/about">O mnie</Link></li>
        <li><Link href="/interests">Zainteresowania</Link></li>
        <li><Link href="/favorite">Ulubiony film</Link></li>
        <li><Link href="/contact">Kontakt</Link></li>
      </ul>
    </nav>
  );
}

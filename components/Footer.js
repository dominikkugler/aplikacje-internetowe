import Link from 'next/link';
import '../app/globals.css';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>&copy; 2024 Moja Strona. Wszystkie prawa zastrzeżone.</p>
        <div className="footer-links">
          <Link href="/contact">Kontakt</Link>
        </div>
      </footer>
    </>
  );
}

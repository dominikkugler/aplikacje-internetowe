import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li><Link href="/">O mnie</Link></li>
          <li><Link href="/interests">Zainteresowania</Link></li>
          <li><Link href="/favorite">Ulubiony film</Link></li>
          <li><Link href="/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        .navbar {
          padding: 10px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .navbar ul {
          display: flex;
          justify-content: space-between;
          flex-grow: 1;
          list-style: none;
          margin: 0;
          padding: 0;
          max-width: 1200px;
        }

        .navbar li {
          flex: 1;
        }

        .navbar a {
          display: block;
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-family: 'Roboto', sans-serif;
          text-align: center;
          padding: 10px 0;
          background-color: #444;
          border-radius: 8px;
          margin: 0 5px;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .navbar a:hover {
          background-color: #555;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}

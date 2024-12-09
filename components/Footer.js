"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <p>&copy; 2024 Moja Strona. Wszystkie prawa zastrzeżone.</p>
        <div className="footer-links">
          <Link href="/contact">Kontakt</Link>
        </div>
      </footer>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        .footer {
          background-color: #333;
          color: white;
          padding: 20px;
          text-align: center;
          font-family: 'Roboto', sans-serif;
          border-top: 3px solid #444;
        }

        .footer p {
          margin: 0;
          font-size: 14px;
          color: #ddd;
        }

        .footer-links {
          margin-top: 10px;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          padding: 5px 10px;
          background-color: #444;
          border-radius: 8px;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .footer-links a:hover {
          background-color: #555;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1>Moja Strona Next.js</h1>
        </div>
      </header>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

        .header {
          background-color: #333;
          color: white;
          padding: 20px 10px;
          text-align: center;
          border-bottom: 3px solid #444;
          font-family: 'Roboto', sans-serif;
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
        }

        .header h1 {
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        }

        .header p {
          font-size: 16px;
          margin: 10px 0 0;
          color: #ddd;
        }

        .header img {
          border-radius: 50%;
        }

        .header-content img:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>
    </>
  );
}

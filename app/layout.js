import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Next.js',
  description: 'Dominik Kugler',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>
        <div className='layout'>
          <Header />
          <Navbar />
            <div className='main-content'>
              {children}
            </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: "St. Xavier's Jr./Sr. School",
  description: "Official School Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
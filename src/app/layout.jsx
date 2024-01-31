import "./globals.css";

export const metadata = {
  title: "JE Portfolio",
  description: "Jose Carlos Enriquez Dominguez Porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

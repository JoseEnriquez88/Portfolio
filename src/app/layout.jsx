import "./globals.css";

export const metadata = {
  title: "Jose Enriquez - Portfolio",
  description: "Jose Carlos Enriquez Dominguez Portfolio",
  keywords: [
    "React Developer",
    "Web Developer",
    "Full Stack",
    "NodeJS",
    "NextJS",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      <body>{children}</body>
    </html>
  );
}

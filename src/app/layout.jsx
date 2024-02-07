import "./globals.css";

export const metadata = {
  title: "Jose Enriquez - Portfolio",
  description: "Jose Carlos Enriquez Dominguez Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/fonts/Prototype.ttf" rel="stylesheet" />
      </head>
      <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      <body>{children}</body>
    </html>
  );
}

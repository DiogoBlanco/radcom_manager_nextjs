import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="container">
        <main>{children}</main>
      </body>
    </html>
  );
}

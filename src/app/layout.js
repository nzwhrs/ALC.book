import "./globals.css";

export const metadata = {
  title: "Al-Lathifu Learning Center",
  description: "Digital Library Al-Lathifu Learning Center"
};

export default function RootLayout({children}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
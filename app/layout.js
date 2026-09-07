export const metadata = {
  title: "Mauritius Hotel Deals",
  description: "Discover luxury hotel deals in Mauritius",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

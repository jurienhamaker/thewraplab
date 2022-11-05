import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>The wrap lab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="text-sm md:text-base">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}

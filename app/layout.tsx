import "@/tailwind.css";
import Nav from "./nav-link";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <nav>
            <Nav link="">Home</Nav>
            <Nav link="/movies">Movies</Nav>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

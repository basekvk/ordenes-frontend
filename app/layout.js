import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navigation from "../components/navigation/Navigation";


export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
      
        <Navigation />
        {children}
      </body>
    </html>
  );
}

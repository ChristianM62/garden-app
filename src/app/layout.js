import { Inter } from "next/font/google";
import "./globals.css";
import backgroundImage from "../../public/Gemini_Generated_Image.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Garden Harvest Tracker",
  description: "Track your garden's harvest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundImage: {backgroundImage} }}
      >
        {children}
      </body>
    </html>
  );
}


import "./globals.css";

import { Poppins } from 'next/font/google'


const poppins = Poppins({
  display: "block",
  variable: '--font-poopins',
  weight: ["100", "200", "400", "600", "800", "900"],
  subsets: ['latin']

})

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className={poppins.className}>
       
        {children}

      </body>
    </html>
  );
}

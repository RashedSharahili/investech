import Navbar from './components/Navbar/Navbar';
import './globals.css'
import Footer from './components/Home/Footer/Footer';
import { Inter, Roboto, Tajawal, Cairo } from 'next/font/google'
// import "tw-elements/dist/css/tw-elements.min.css";

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const tajawal = Tajawal({
  variable: '--font-tajawal',
  weight: "400", 
  subsets: ["arabic"]
});

const cairo = Cairo({
  variable: '--font-cairo',
  weight: "700",
  subsets: ["arabic"]
});

export const metadata = {
  title: 'إنفيستك | investech',
  description: 'منصة لدعم واستثمار المشاريع',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>

    </html>
  )
}

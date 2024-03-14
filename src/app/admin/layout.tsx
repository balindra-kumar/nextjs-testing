
import { Metadata } from 'next'




import { Inter } from "next/font/google";
import FooterLink from './components/footer.link';

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: 'Next.js',
  }
export default function DashboardLayout({children,}:{children:React.ReactNode}){
  
    return (
        <html lang="en">
        
           
            <body className={inter.className}>
                {children}
               <FooterLink />
            </body>
        </html>
    )
}


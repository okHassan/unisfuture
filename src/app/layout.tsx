import './globals.css'

import { Inter } from 'next/font/google'

import Navber from "@/components/Shared/Navber";
import Topber from "@/components/Shared/Topber";
import Footer from '@/components/Shared/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({ children }: any) {


    return (
        <html lang="en">
            <body className={inter.className}>
                <Topber />
                <Navber />
                {children}
                <Footer />
            </body>
        </html>
    )
}

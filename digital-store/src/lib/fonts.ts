import { Inter, Poppins } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const poppins = Poppins({ 
    subsets: ['latin'], 
    display: 'swap',
    variable: '--font-poppins',
    weight:  ['400', '700']
})
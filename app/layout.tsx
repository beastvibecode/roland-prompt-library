import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Roland Prompt Library', description:'Personal context-aware prompt library for picture, video, logo and graphic design creation.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }

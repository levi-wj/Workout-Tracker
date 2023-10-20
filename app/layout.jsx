import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import cn from 'classnames';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Workout Tracker',
  description: 'Track your workouts and get stronger',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn({[inter.className]: true, 'bg-slate-800': true, 'text-slate-300': true})}>
        <Header selectedTab setSelectedTab/>
        {children}
      </body>
    </html>
  );
}

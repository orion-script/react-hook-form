import Image from 'next/image'
import { Inter } from 'next/font/google'
import SignIn from '@/components/Sign-in'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-slate-400 w-full h-screen">
      <SignIn />
    </main>
  )
}

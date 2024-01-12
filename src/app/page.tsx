import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <MaxWidthWrapper >
      <div className='py-20  justify-center flex flex-col h-screen items-center max-w-3xl'>
        <h1 className=' font-bold text-6xl tracking-tight'>The Branding Agency you deserve {''}
          <span className='text-blue-600'>to tell your</span> <span className=' text-orange-700'>Stories</span>
        </h1>
        <div className='flex flex-col sm:flex-row gap-4 mt-7'>
          <Link href="./Checkout" className={buttonVariants()}>Checkers</Link>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}

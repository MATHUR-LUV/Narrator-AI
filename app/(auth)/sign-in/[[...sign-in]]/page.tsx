import { SignIn } from '@clerk/nextjs'
// import Link from 'next/link'

const Page = () => {
  return (
    <div className="flex-center glassmorphism-auth h-screen w-full">
      <SignIn />
      {/* <Link href={'/discover'}/> */}
    </div>
  )
}

export default Page
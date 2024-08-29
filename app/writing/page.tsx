import Posts from '@/app/components/Posts'
import Link from 'next/link'

export default function Page() {
  return (
  <h1 className="text-4xl font-bold mx-10 my-20 lg:mx-48 lg:my-36 mb-5 font-title">
    <Link href="/" className="font-light italic text-gray-800 font-title">Jonah Bard //  </Link>
    &nbsp;Writing
    < Posts />
  </h1>

  )
}

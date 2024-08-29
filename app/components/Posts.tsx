
import Link from 'next/link'
import { getBlogPosts } from '@/app/writing/utils'

export default function BlogPosts() {
  let allBlogs = getBlogPosts()

  return (
    <div className="mt-5">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/writing/${post.slug}`}
          >
            <div className="w-full flex flex-row space-x-0">
              <p className="text-neutral-600 font-light text-base font-body dark:text-neutral-400 w-[50px] tabular-nums">
                { post.metadata.publishedAt }
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 text-base font-medium font-body tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { getBlogPosts } from '@/app/writing/utils'
import { baseUrl } from '@/app/sitemap'
import { Metadata } from '@/app/writing/utils'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.map((post: {metadata: Metadata, slug: string, content: string}): { slug: string } => ({
    slug: post.slug,
  }))
}

export function generateMetadata({ params }: { params: any }) {
  let post = getBlogPosts().find((post: { slug: string }) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    // summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    // description,
    openGraph: {
      title,
      // description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      // description,
      images: [ogImage],
    },
  }
}

export default function Blog({ params }: { params: any }) {
  let post = getBlogPosts().find((post: { slug: string }) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/writing/${post.slug}`,
            author: {
              '@type': 'Jonah Bard',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      {/* <h1 className="title font-semibold mt-20 ml-20 text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {post.metadata.publishedAt}
        </p>
      </div> */}
      <article className="prose mx-10 md:mx-36 lg:mx-72 mb-24">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
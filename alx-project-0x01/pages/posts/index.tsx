import { GetStaticProps } from "next"
import { PostProps } from "@/types"
import PostCard from "@/components/PostCard"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

interface PostsPageProps {
  posts: PostProps[]
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
    <Footer />
  </div>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
  const posts: PostProps[] = await res.json()

  return {
    props: {
      posts,
    },
  }
}

export default PostsPage

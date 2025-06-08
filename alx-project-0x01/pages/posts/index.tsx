import { useState } from "react"
import Header from "@/components/layout/Header"
import PostCard from "@/components/common/PostCard"
import PostModal from "@/components/common/PostModal"
import { PostProps, PostData } from "@/interfaces"

export default function PostsPage({ posts }: { posts: PostProps[] }) {
  const [isModalOpen, setModalOpen] = useState(false)
  const [newPost, setNewPost] = useState<PostData | null>(null)

  const handleAdd = (p: PostData) => setNewPost(p)

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 text-white px-4 rounded-full">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {newPost && <PostCard {...newPost} userId={newPost.userId} id={posts.length + 1} />}
          {posts.map(p => <PostCard key={p.id} {...p} />)}
        </div>
      </main>
      {isModalOpen && <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAdd} />}
    </div>
  )
}

export async function getStaticProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(r => r.json())
  return { props: { posts } }
}

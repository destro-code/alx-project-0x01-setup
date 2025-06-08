import { useState } from "react";
import { PostProps, PostData } from "@/interfaces";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";

const PostsPage: React.FC<{ posts: PostProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<PostData | null>(null);

  const handleAdd = (post: PostData) => setNewPost(post);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-6 space-y-4 flex-grow container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-700 text-white px-4 py-2 rounded-full">Add Post</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {newPost && <PostCard {...newPost} userId={newPost.userId} id={posts.length + 1} />}
          {posts.map(p => <PostCard key={p.id} {...p} />)}
        </div>
      </main>
      <Footer />
      {isModalOpen && <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAdd} />}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
  return { props: { posts } };
}

export default PostsPage;

import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState<PostData | null>(null);

  const handleAddPost = (postData: PostData) => {
    // assign a new id = length + 1 (or you can push into array)
    setNewPost({ ...postData, id: posts.length + 1 });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4 flex-1 overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add Post
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {posts.map((postItem) => (
            <PostCard
              key={postItem.id}
              title={postItem.title}
              body={postItem.body}
              userId={postItem.userId}
              id={postItem.id}
            />
          ))}
          {newPost && (
            <PostCard
              key={newPost.id}
              title={newPost.title}
              body={newPost.body}
              userId={newPost.userId}
              id={newPost.id!}
            />
          )}
        </div>
      </main>

      {isModalOpen && (
        <PostModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddPost}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: PostProps[] = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;

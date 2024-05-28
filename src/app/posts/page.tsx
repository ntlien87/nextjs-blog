import LoadingComponent from "@/components/LoadingComponent";
import PostList from "@/components/PostList";
import { Suspense } from "react";

export default function PostsPage() {


  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
        All Posts
      </h1>
      <Suspense fallback={<LoadingComponent />}>
        <PostList />
      </Suspense>
    </main>
  );
}

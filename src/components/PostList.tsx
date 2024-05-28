import prisma from "@/lib/db";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
};

export default async function PostList() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const posts = await prisma.post.findMany();
  // console.log(posts);

  return (
    <ul className="flex flex-col gap-4">
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}

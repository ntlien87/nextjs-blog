import prisma from "@/lib/db";
import { notFound } from "next/navigation";

type Post = {
  title: string;
  body: string;
};

export default async function Post({ params }: { params: { post: string } }) {
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(params.post),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="text-center pt-24 px-4">
      <h1 className="text-xl font-bold mb-4">{post.title}</h1>
      <p className="max-w-2xl mx-auto">{post.content}</p>
    </div>
  );
}

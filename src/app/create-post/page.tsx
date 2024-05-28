import Form from "@/components/Form";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function CreatePostPage() {
  return (
    <main className="flex flex-col justify-center items-center mt-20">
      <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-8">
        Create Post
      </h1>
     <Form/>
      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}

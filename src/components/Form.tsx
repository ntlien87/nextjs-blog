import { createPost } from "@/lib/actions";

export default function Form() {
  return (
    <form
    action={createPost}
    className="flex flex-col items-center gap-4 w-96"
  >
    <input
      type="text"
      name="title"
      className="bg-zinc-50 py-2 px-4  w-full border border-zinc-200 rounded-md "
      placeholder="Title for new post"
      required
    />
    <textarea
      name="content"
      rows={6}
      className="border border-zinc-200 w-full px-4 py-2 rounded-md"
      placeholder="Content for new post"
      required
    />
    <button
      type="submit"
      className="bg-teal-600 text-white py-2 px-3 rounded-md shadow-md hover:bg-teal-700 transition-colors w-full"
    >
      Submit
    </button>
  </form>
  )
}
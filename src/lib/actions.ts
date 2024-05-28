"use server";

import { redirect } from "next/navigation";
import prisma from "./db";
import { revalidatePath } from "next/cache";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const createPost = async (formData: FormData) => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login");
  }

  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  redirect("/posts");
  // revalidatePath("/posts");
};

"use server";

import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function handleSubmit(formData: FormData) {
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  console.log("Server Action received:", { title, body });
  if (!title || !body) {
    throw new Error("Missing title or body");
  }

  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  redirect("/blog");
}

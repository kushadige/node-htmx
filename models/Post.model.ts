import prisma from "@/prisma/prisma-client";

import { type Post } from "@prisma/client";

async function getPostById(id: number) {
  return prisma.post.findUnique({
    where: { id },
  });
}

async function createPost(data: Post) {
  return prisma.post.create({
    data,
  });
}

async function updatePost(id: number, data: Post) {
  return prisma.post.update({
    where: { id },
    data,
  });
}

async function deletePost(id: number) {
  return prisma.post.delete({
    where: { id },
  });
}

async function getAllPosts() {
  return prisma.post.findMany();
}

async function getPostsByAuthorId(authorId: number) {
  return prisma.post.findMany({
    where: { authorId },
  });
}

export const PostModel = {
  getPostById,
  createPost,
  updatePost,
  deletePost,
  getAllPosts,
  getPostsByAuthorId,
};

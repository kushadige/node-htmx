import prisma from "@/prisma/prisma-client";

import { type User } from "@prisma/client";

async function getUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

async function createUser(data: User) {
  return prisma.user.create({
    data,
  });
}

async function updateUser(id: number, data: User) {
  return prisma.user.update({
    where: { id },
    data,
  });
}

async function deleteUser(id: number) {
  return prisma.user.delete({
    where: { id },
  });
}

async function getAllUsers() {
  return prisma.user.findMany();
}

export const UserModel = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAllUsers,
};

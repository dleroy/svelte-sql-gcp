// src/routes/posts/+page.server.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function load() {
  const posts = await prisma.post.findMany();
  return { posts };
}

export const actions = {
    default: async ({ request }) => {
      const formData = await request.formData();
      const title = formData.get('title');
      const content = formData.get('content');
  
      await prisma.post.create({
        data: { title, content }
      });
  
      return { success: true };
    }
  };
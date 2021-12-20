import { Request, Response} from "express";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default {
  index: async (req: Request, res: Response) => {
    const posts = await prisma.post.findMany();
    return res.json(posts);
  },
  create: async (req: Request, res: Response) => {
    const { title, content, author } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        authorId: author
      }
    });
    return res.json(post);
  },
}
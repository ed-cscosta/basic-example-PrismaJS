import { PrismaClient } from "@prisma/client";
import { Request, Response} from "express";

const prisma = new PrismaClient();

export default {
  index: async (req: Request, res: Response) => {
    const user = await prisma.user.findMany({
      include: { posts: true }
    });
    return res.json(user);
  },
  create: async (req: Request, res: Response) => {
    const { email, name, password} = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      }
    });
    return res.json(user);
  },
  edit: async (req: Request, res: Response) => {
    const {name} = req.body;
    const id = req.params.id;
    const user = await prisma.user.update({
      where: { id: Number(id) },
      data: { name }
    });
    return res.json(user);
  },
  delete: async (req: Request, res: Response) => {
    const id = req.params.id;
    const deletedUser = await prisma.user.delete({
      where: { id: Number(id) }
    });
    return res.json(deletedUser);
  }
}
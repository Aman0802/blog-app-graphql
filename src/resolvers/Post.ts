import { Context } from "../index";
import { userLoader } from "../loaders/userLoader";

interface PostParentType {
  authorId: number;
  bio: string;
  userId: number;
}

export const Post = {
  user: (parent: PostParentType, __: any, { prisma }: Context) => {
    return userLoader.load(parent.authorId);
  },
};

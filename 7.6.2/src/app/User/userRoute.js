import express from "express"
import { getRecipe,postComment,getComment,likeRecipe } from './userController.js';

const userRouter = express.Router();

userRouter.get('/recipe',getRecipe);
userRouter.get('/recipe/comment',getComment);
userRouter.post('/like/:RecipeId',likeRecipe);

userRouter.post('/recipe/:RecipeId',postComment);

export default userRouter;
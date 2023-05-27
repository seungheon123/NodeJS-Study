import { insertComment, checkLike, insertLikeRecipe,increaseLike, decreaseLike, deleteLikeRecipe, increaseComment } from "./userDao.js";
import pool from "../../../config/database.js";
import baseResponse from "../../../config/baseResponseStatus.js";
import {response, errResponse} from "../../../config/response.js";

export const createComment = async(RecipeId,UserId,Contents) =>{
    try{
        const insertCommentInfoParams = [RecipeId,UserId,Contents];
        const connection = await pool.getConnection(async conn=>conn);
        const commentcreationResult = await insertComment(connection,insertCommentInfoParams);
        connection.release();
        return response(baseResponse.SUCCESS);
    }catch(err){
         return errResponse(baseResponse.DB_ERROR);
    }
}

export const increaseRecipeComment = async(RecipeId) =>{
    try{
        const connection = await pool.getConnection(async conn => conn);
        await increaseComment(connection,RecipeId);
        connection.release();
        return response(baseResponse.SUCCESS);
    }catch(err){
        return errResponse(baseResponse.DB_ERROR);
    }
}

export const decreaseRecipeLike = async(RecipeId, UserId) =>{
    try{
        const likeParams = [RecipeId,UserId];
        const connection = await pool.getConnection(async conn => conn);
        const unlikeRecipeResult = await decreaseLike(connection,likeParams);
        connection.release();
        return unlikeRecipeResult;
    }catch(err){
        console.error(err);
    }
}

export const increaseRecipeLike = async(RecipeId) =>{
    try{
        const connection = await pool.getConnection(async conn => conn);
        const increaseRecipeLikeResult = await increaseLike(connection,RecipeId);
        connection.release();
        return increaseRecipeLikeResult;
    }catch(err){
        console.error(err);
    }
}

export const createLike = async(RecipeId,UserId) =>{
    const likeParams = [UserId,RecipeId];
    const connection = await pool.getConnection(async conn=> conn);
    const createLikeResult = await insertLikeRecipe(connection,likeParams);
    connection.release();
    return createLikeResult;
}

export const deleteLike = async(RecipeId, UserID) =>{
    const likeParams = [UserID, RecipeId];
    const connection = await pool.getConnection(async conn=>conn);
    const deleteLikeResult = await deleteLikeRecipe(connection,likeParams);
    connection.release();
    return deleteLikeResult;

}
import pool from "../../../config/database.js";
import { selectRecipe, selectComment, checkRecipe, checkLike } from "./userDao.js";

export const retrieveRecipeList = async()=>{
    const connection = await pool.getConnection(async conn => conn);
    const RecipeListResult = await selectRecipe(connection);
    connection.release();
    return RecipeListResult;
}

export const retrieveCommentList = async()=>{
    const connection = await pool.getConnection(async conn => conn);
    const CommentListResult = await selectComment(connection);
    connection.release();
    return CommentListResult;
}

export const checkIfLikedRecipe = async(RecipeId, UserId) =>{
    try{
        const likeParams = [RecipeId,UserId];
        const connection = await pool.getConnection(async conn => conn);
        const checkIfLikedCommentResult = await checkLike(connection,likeParams);
        connection.release();
        return checkIfLikedCommentResult[0];
    }catch(err){
        console.error(err);
    }
}

export const checkRecipeExist = async(RecipeId) =>{
    try{
        const connection = await pool.getConnection(async conn => conn);
        const checkRecipeExistResult = await checkRecipe(connection, RecipeId);
        console.log(checkRecipeExistResult);
        connection.release();
        return checkRecipeExistResult;
    }catch(err){
        console.error(err);
    }
}
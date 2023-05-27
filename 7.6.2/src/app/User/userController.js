import { retrieveRecipeList, retrieveCommentList, checkIfLikedRecipe, checkRecipeExist } from "./userProvier.js";
import { createComment, increaseRecipeLike, createLike, decreaseRecipeLike, deleteLike, increaseRecipeComment } from "./userService.js";
import baseResponse from "../../../config/baseResponseStatus.js";
import { errResponse, response } from "../../../config/response.js";

export const getRecipe = async(req,res)=>{
    try{
        const recipeListResult = await  retrieveRecipeList();
        return res.send(response(baseResponse.SUCCESS,recipeListResult));
    }catch(err){
        return res.status(500).send(err);
    }
}

export const getComment = async(req,res)=>{
    try{
        const {RecipeId} = req.body;
        const checkRecipeExistResult = await checkRecipeExist(RecipeId);
        console.log(checkRecipeExistResult[0]);
        if(checkRecipeExistResult[0].count === 0){
            return res.send(errResponse(baseResponse.DB_ERROR));
        }
        else{
            const commentListResult = await retrieveCommentList();
            return res.status(200).json(response(baseResponse.SUCCESS,commentListResult));
        }
    }catch(err){
        return res.status(500).send(err);
    }
}

export const postComment = async(req,res) =>{
    try{
        const {RecipeId} = req.params;
        const{UserId, Contents} = req.body;
        const postCommentResult = await createComment(RecipeId,UserId,Contents);
        console.log(postCommentResult.isSuccess);
        if(postCommentResult.isSuccess === true){
            await increaseRecipeComment(RecipeId);
            return res.status(200).json(response(baseResponse.SUCCESS));
        }
    }catch(err){
        return res.status(500).send(err);
    }
}

export const likeRecipe = async(req,res) =>{
    try{
        const {RecipeId} = req.params;
        const{ UserId} = req.body;
        const isLiked = await checkIfLikedRecipe(RecipeId,UserId);
        console.log(isLiked.count);
        if(isLiked.count === 1){
            await decreaseRecipeLike(RecipeId);
            await deleteLike(RecipeId,UserId);
            res.status(200).json(response(baseResponse.SUCCESS,'좋아요를 취소했습니다'));
        }else{
            await increaseRecipeLike(RecipeId);
            await createLike(RecipeId, UserId);
            res.status(200).json(response(baseResponse.SUCCESS, '좋아요를 추가했습니다'));
        }
    }catch(err){
        res.status(500).send(err);
    }
}


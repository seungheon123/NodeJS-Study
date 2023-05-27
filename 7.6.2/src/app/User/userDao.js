export const selectRecipe = async (connection) =>{
    const selectRecipeQuery = `
    SELECT Published, RecipeName, UserID, Likes
    FROM recipe;
    `
    const selectRecipeRow = await connection.query(selectRecipeQuery);
    return selectRecipeRow[0];
}

export const insertComment = async(connection, commentInfoParams) =>{
    const insertCommentInfoQuery = `
    INSERT INTO comments(RecipeID, UserID, Contents)
    VALUES(?,?,?);
    `
    const insertCommentInfoRow = await connection.query(insertCommentInfoQuery,commentInfoParams);
    return insertCommentInfoRow[0];
}

export const increaseComment = async(connection, RecipeID) =>{
    const increaseCommentQuery = `
    UPDATE recipe
    SET Comments = Comments + 1
    WHERE RecipeID = ?;
    `
    const increaseCommentRow = await connection.query(increaseCommentQuery,RecipeID);
    return increaseCommentRow[0];
}

export const selectUser = async(connection, userID) =>{
    const selectUserQuery = `
    SELECT userID
    FROM user
    WHERE userID = ?;
    `
    const [UserRows] = await connection.query(selectUserQuery,userID);
    return UserRows; 
}

export const selecRecipe = async(connection, RecipeID) =>{
    const selectRecipeQuery = `
    SELECT RecipeID
    FROM recipe
    WHERE RecipeID = ?;
    `
    const [RecipeRows] = await connection.query(selectRecipeQuery,RecipeID);
    return RecipeRows; 
}

export const selectComment = async(connection) =>{
    const selectCommentQuery = `
    SELECT Contents, UserID, PublishedDate
    FROM comments;
    `
    const selectCommentRow = await connection.query(selectCommentQuery);
    return selectCommentRow[0];
}


export const checkLike = async(connection,LikeParams) =>{
    const checkLikeQuery = `
    SELECT COUNT(*) as count
    FROM recipelike
    WHERE RecipeID = ? AND UserID = ?; 
    `
    const checkLikeRow = await connection.query(checkLikeQuery,LikeParams);
    return checkLikeRow[0];
}

export const deleteLikeRecipe = async(connection,LikeParams) =>{
    const unlikeRecipeQuery = `
    DELETE FROM recipelike
    WHERE UserID = ? AND RecipeID = ?;
    `
    const unlikeRecipeRow = await connection.query(unlikeRecipeQuery,LikeParams);
    return unlikeRecipeRow[0];
}

export const insertLikeRecipe = async(connection, LikeParams)=>{
    const insertLikeQuery = `
    INSERT INTO recipelike(UserID, RecipeID)
    VALUES(?,?);
    `
    const insertLikeQueryRow = await connection.query(insertLikeQuery,LikeParams);
    return insertLikeQueryRow[0];
}

export const increaseLike = async(connection, RecipeId) =>{
    const increaselikeRecipeQuery = `
    UPDATE recipe
    SET Likes = Likes + 1
    WHERE RecipeID = ?;
    `
    const increaseLikeRow = await connection.query(increaselikeRecipeQuery,RecipeId);
    return increaseLikeRow[0];
}
export const decreaseLike = async(connection, RecipeID) =>{
    const decreaseLikeQuery = `
    UPDATE recipe
    SET Likes = Likes - 1
    WHERE RecipeID = ?;
    `
    const decreaseLikeRow = await connection.query(decreaseLikeQuery, RecipeID);
    return decreaseLikeRow[0];
}

export const checkRecipe = async(connection, RecipeId) =>{
    const checkReicpeQuery = `
    SELECT COUNT(*) as count
    FROM recipe
    WHERE RecipeID = ?;
    `
    const checkReicpeRow = await connection.query(checkReicpeQuery,RecipeId);
    return checkReicpeRow[0];
}
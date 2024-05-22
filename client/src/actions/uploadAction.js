import * as UploadApi from '../api/UploadRequest'


export const uploadImage = (data)=> async(dispatch)=>{
    try {
        await UploadApi.uploadImage(data)
    } catch (error) {
        console.log(error)
    }
}

export const uploadPost = (data)=> async(dispatch)=>{
    dispatch({type: "UPLOAD_START"})
    try {
        const newPost = await UploadApi.uploadPost(data)
        dispatch({type: "UPLOAD_SUCCESS", data: newPost.data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPLOAD_FAIL"})
    }
}


export const commentPost = (data, id) => async (dispatch) => {
    try {
      const value = await UploadApi.commentPost(data, id);
      console.log(value);
      dispatch({ type: "COMMENT", data: value.data });
      return value.comments;
    } catch (error) {
      console.log(error);
    }
  };
import {toast} from "react-toastify"
import { category, featuredCategory } from "../Axios/category";




export const getCategories = () => async dispatch =>{

    category.get("/")
    .then(response =>{
        dispatch(getAllCategories(response.data))
    })

}

const getAllCategories = (categories)=>{
    return{
        type: "GET_ALL_CATS",
        payload: categories
    }
}


const getFeatured = (categories)=>{
    return {
        type: "GET_FEATURED",
        payload: categories
    }
}


export const getFeaturedCat = () => async dispatch =>{

    featuredCategory.get("/")
    .then(response =>{
        dispatch(getFeatured(response.data))
    })

}
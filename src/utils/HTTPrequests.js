import axios from "axios"

export const userRegister = async (typeUser,values)=>{
    try{
        const userToken = await axios ({
            baseURL: "http://127.0.0.1:4000/",
            url: typeUser,
            method: "POST",
            data: values,
        }) 
        return userToken
    }
     catch(error){
        throw error
    }
}

export const loginUser = async(values,typeUser) => {    
    try{
        const response = await axios({
            method:"POST",
            url: `http://127.0.0.1:4000/${typeUser}/login`,
            data:values
        })
        return response.data
    }
    catch(err){
        throw err
    }
}

export const getDataUser = async (typeUser)=>{
    const user = typeUser === "tenant" ? `"${typeUser}"`:``
    try{
        const dataUser = await axios({
            method:"GET",
            baseURL: "http://127.0.0.1:4000/",
            url: typeUser,
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token'),
                'x-UserType' : user
            }
        })
        return dataUser
    }catch(error){
        throw error
    }
}

export const updateDatauser = async (typeUser,values) => {
    const user = (typeUser === "tenant" ? `"${typeUser}"`:``)
    try{
        const updateData = await axios({
            method:'PUT',
            baseURL:"http://127.0.0.1:4000/",
            url: typeUser,
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : user
            },
            data:values
        })
        return updateData 
    }
    catch(error){
        throw error
    }
}

export const getSuggestions = async () => {
    try{
        const tags = await axios({
            method: "GET",
            url: "http://127.0.0.1:4000/spaceTags/all"
        })
        return tags.data
    }catch(error){
        return error
    }
}

export const postSpace =async (state)=>{
    const {textAreaDesc,width,length,height,city,address,price,title,area} = state
    
    try{
        const respose = await axios({
            method:"POST",
            url:"http://127.0.0.1:4000/space",
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
            data:{
                title,width,length,height,textAreaDesc,city,address,pricePerDay:price,area
            }
        })
        return(respose.data._id)
    }catch(err){
        throw err
    }
}

export const updateSpaceTag = async (spaceId, name) => {
    try{
        const response = await axios({
            method:"PUT",
            url:"http://127.0.0.1:4000/spaceTags",
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
            data: {
                name,
                spaceId
            }
        })
        return response.data
    }catch(err) {
        return err
    }
}

export const postTag = async (spaceId, name)=>{
    try {
        const respose = await axios({
            method:"POST",
            url:"http://127.0.0.1:4000/spaceTags",
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
            data:{
                name,
                spaces:spaceId
            }
        })
        return(respose.data)
    }
    catch(err){
        console.dir(err)
    }
}

export const getUserSpaces = async () => {
    try{
        const response = await axios({
            method: "GET",
            url: "http://127.0.0.1:4000/space",
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
        })
        return response.data
    }catch(err) {
        throw err
    }
}

export const postScore = async(values) => {
    const {rating} = values
    try{
        const response = await axios({
            method:"POST",
            url:"http://127.0.0.1:4000/score",
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
            data:{
                score: rating
            }
        })
        return(response.data._id)
    }catch(err){
        return err
    }    
}

export const postComment = async(values) => {
    const {comment} = values
    try{
        const response = await axios({
            method:"POST",
            url:"http://127.0.0.1:4000/score",
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
            data:{
                comment
            }
        })
        return(response.data._id)
    }catch(err){
        return err
    }    
}

export const postPhotosFiles = async (data) => {
    try {
        const response = await axios({
            method: "POST",
            url:"http://127.0.0.1:4000/space/photos",
            data,
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        return (response.data)
    }
    catch(err){
        throw err
    }
}

export const updateSpace = async (spaceId, values) =>{
    try{
        const response = await axios ({
            method: "PUT",
            baseURL: "http://127.0.0.1:4000/",
            url:"/space",
            data:{
                spaceId,
                fields: {...values},
            },
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
        })
        return response 
    }catch(error){
        throw error
    }
}

export const deletePhoto = async (photo, spaceId) => {
    try {
        const response = await axios({
            method: "DELETE",
            url: "http://127.0.0.1:4000/space/photos",
            data: {
                photo,
                spaceId
            }
        })
        return response.data
    }
    catch(err){
        throw err
    }
}

export const getFilterSpaces = async (queryString) => {
    try {
        const response = await axios({
            method: "GET",
            baseURL:`http://localhost:4000/space/tenant`,
            url: queryString
          })
          return response.data
    }
    catch(err){
        throw err
    }
} 

export const deleteTenant = async(tenantId, typeUser) => {
    const user = (typeUser === "tenant" ? `"${typeUser}"`:``)
    try{
        const response = await axios({
            method: "DELETE",
            url: "http://127.0.0.1:4000/tenant",
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : user
            },
            data: {
                tenantId
            }
        })
        return response
    } catch(err){
        throw(err)
    }
}
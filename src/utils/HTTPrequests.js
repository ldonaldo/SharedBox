import axios from "axios"

export const userRegister = async (typeUser,values)=>{
    try{
        const response = await axios ({
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: typeUser,
            method: "POST",
            data: values,
        }) 
        return response.data
    }
     catch(error){
        throw error
    }
}

export const postUserPhotosFiles = async (typeUser,data) => {
    try {
        const response = await axios({
            method: "POST",
            url:`${process.env.REACT_APP_SERVER_URL}/${typeUser}/photos`,
            data,
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        })
        return response
    }
    catch(err){
        throw err
    }
}

export const loginUser = async(values,typeUser) => {    
    try{
        const response = await axios({
            method:"POST",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: `/${typeUser}/login`,
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
            baseURL: process.env.REACT_APP_SERVER_URL,
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
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: typeUser,
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : user
            },
            data:values
        })
        return updateData.data 
    }
    catch(error){
        throw error
    }
}

export const updateUserReservedSpaces = async (typeUser,values) => {
    const user = (typeUser === "tenant" ? `"${typeUser}"`:``)
    try{
        const updateData = await axios({
            method:'PUT',
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: `${typeUser}/reservedSpaces`,
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : user
            },
            data:values
        })
        return updateData.data 
    }
    catch(error){
        throw error
    }
}

export const getSuggestions = async () => {
    try{
        const tags = await axios({
            method: "GET",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: "/spaceTags/all"
        })
        return tags.data
    }catch(error){
        return error
    }
}

export const postSpace=async (state)=>{
    const {additionalInfo,width,length,height,city,address,price,title,area} = state
    
    try{
        const response = await axios({
            method:"POST",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/space",
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
            data:{
                title,width,length,height,additionalInfo,city,address,pricePerDay:price,area
            }
        })
        return(response.data._id)
    }catch(err){
        throw err
    }
}

export const updateSpaceTag = async (spaceId, name) => {
    try{
        const response = await axios({
            method:"PUT",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/spaceTags",
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
        throw err
    }
}

export const postTag = async (spaceId, name)=>{
    try {
        const respose = await axios({
            method:"POST",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/spaceTags",
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
        throw err
    }
}

export const getUserSpaces = async () => {
    try{
        const response = await axios({
            method: "GET",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: "/space",
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token')
            },
        })
        return response.data
    }catch(err) {
        throw err
    }
}

export const getTenantRegisteredSpaces = async (queryString) => {
    try {
        const response = await axios({
            method: "GET",
            baseURL:`${process.env.REACT_APP_SERVER_URL}/space/tenantRegistered`,
            url: queryString,
            headers:{
                Authorization: "Bearer "+localStorage.getItem('token'),
                'x-UserType' : localStorage.getItem('typeUser')
            },
          })
          return response.data
    }
    catch(err){
        throw err
    }
} 

export const postScore = async(values) => {
    const {rating} = values
    try{
        const response = await axios({
            method:"POST",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/score",
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
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/score",
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
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/space/photos",
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
            baseURL: process.env.REACT_APP_SERVER_URL,
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
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: "/space/photos",
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
            baseURL:`${process.env.REACT_APP_SERVER_URL}/space/tenant`,
            url: queryString
        })
        return response.data
    }
    catch(err){
        throw err
    }
} 

export const getFilterSpacesHome = async (queryString) => {
    try {
        const response = await axios({
            method: "GET",
            baseURL:`${process.env.REACT_APP_SERVER_URL}/space/tenant`,
            url: queryString
          })
          return response
    }
    catch(err){
        throw err
    }
} 

export const postFAQs = async (newFAQs) => {
    try{
        const response = await axios({
            method: "POST",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: "/queAns",
            data: newFAQs
        })
        return response.data
    }catch(err){
        throw err
    }
}

export const deleteTenant = async(tenantId, typeUser) => {
    const user = (typeUser === "tenant" ? `"${typeUser}"`:``)
    try{
        const response = await axios({
            method: "DELETE",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: "/tenant",
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
const host = process.env.REACT_APP_SERVER_URL;

export const registerSubscription = async(path, body) => {
    try {
        const response = await axios({
            method: "POST",
            url: `${host}${path}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : localStorage.getItem("typeUser")
            },
            data: body              
        })
        return response
    } catch(err){
        return err
    }
}
export const cancelSubscription = async(path, body) => {
    try {
        const response = await axios({
            method: "DELETE",
            url: `${host}${path}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : localStorage.getItem("typeUser")
            },
            data: body              
        })
        return response
    } catch(err){
        throw err
    }
}

export const sendNotification = async(path, body) => {
    try {
        const response = await axios({
            method: "POST",
            url: `${host}${path}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : localStorage.getItem("typeUser")
            },
            data: body              
        })
        return response
    } catch(err){
        return err
    }
}        
export const isUserSubscribed = async(path, body) => {
    try {
        const response = await axios({
            method: "GET",
            url: `${host}${path}`,
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : localStorage.getItem("typeUser")
            },
            data: body              
        })
        return response.data
    } catch(err){
        return err
    }
}  
export const createElements = async(elements,spaceId) => {
    try{
        const response = await axios({
            method: "POST",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: "/element",
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : localStorage.getItem('typeUser')
            },
            data:{
                elements,
                spaceId
            }
        })
        return response.data
    } catch(err){
        throw (err)
    }
}

export const createNotification = async(inventoryId,tenantId,lenderId,datesReservedId) => {
    try{
        const response = await axios({
            method: "POST",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: "/notification",
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : localStorage.getItem('typeUser')
            },
            data:{
                inventoryId,
                tenantId,
                lenderId,
                datesReservedId
            }
        })
        return response
    } catch(err){
        throw (err)
    }
}

export const createDates = async(finalDate,initialDate,spaceId,tenantId) => {
    try{
        const response = await axios({
            method: "POST",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url: "/dates",
            headers:{
                Authorization: "Bearer " + localStorage.getItem('token'),
                'x-UserType' : localStorage.getItem('typeUser')
            },
            data:{
                spaceId,
                tenantId,
                initialDate,
                finalDate
            }
        })
        return response.data
    } catch(err){
        throw (err)
    }
}

export const getNotificationNumber = async()=>{
    try{
        const response = await axios({
            method:"GET",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/notification/number",
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token'),
                "x-UserType": localStorage.getItem('typeUser')                        
            }
        })
        return response.data
    }catch(err){
        throw err
    }
}

export const getNotificationUser = async()=>{
    const user = localStorage.getItem("typeUser") === "tenant" ? localStorage.getItem("typeUser"):``
    try{
        const response = await axios({
            method:"GET",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/notification",
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token'),
                "x-UserType":user                        
            }
        })
        return response
    }catch(err){
        throw err
    }
}

export const updateNotification = async(status,notification)=>{
    const user = localStorage.getItem("typeUser") === "tenant" ? localStorage.getItem("typeUser"):``
    try{
        const response = await axios({
            method:"PUT",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:"/notification",
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token'),
                "x-UserType":user                        
            },
            data: {
                status,
                notification
            }
        })
        return response
    }catch(err){
        throw err
    }
}

export const GetPaymentInfoByReference = async (reference)=>{
    try{
        const response = await axios({
            method:"GET",
            baseURL:"https://api.secure.payco.co/validation/v1/reference/",
            url: reference
        })
        return response 
    }catch(err){
        throw(err)
    }
}

export const updateElements = async (elementId, data) => {
    const user = localStorage.getItem("typeUser") === "tenant" ? localStorage.getItem("typeUser"):``
    try{
        const response = await axios({
            method: "PUT",
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: "element",
            data: {
                id: elementId,
                data: {...data}
            },
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token'),
                "x-UserType":user                        
            }
        })
        return response.data
    }catch(err){
        throw(err)
    }
}

export const getElementsByInventoryId =  async (inventoryId) => {
    const user = localStorage.getItem("typeUser") === "tenant" ? localStorage.getItem("typeUser"):``
    try{
        const response = await axios ({
            method:"GET",
            baseURL:process.env.REACT_APP_SERVER_URL,
            url:`element/getByinventoryId?inventoryId=${inventoryId}`,
            headers:{
                Authorization: 'Bearer '+ localStorage.getItem('token'),
                "x-UserType":user                        
            } 
        })
        return response.data
    }
    catch(err){
        throw(err)
    }
}
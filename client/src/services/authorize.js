

//เก็บ token / username => sessionStorage
export const authenticate=(Response,next)=>{
    if(window !=="undefined"){
        //เก็บข้อมูล sessionStorage
        sessionStorage.setItem("token",JSON.stringify(Response.data.token))
        sessionStorage.setItem("user",JSON.stringify(Response.data.username))
    }
    next()
}

//ดึงข้อมูล token
export const getToken=()=>{
    if(window !=="undefined"){
        if(sessionStorage.getItem("token")){
            return JSON.parse(sessionStorage.getItem("token"))
        }else{
            return false
        }
    }
}
//ดึงข้อมูล user
export const getUser=()=>{
    if(window !=="undefined"){
        if(sessionStorage.getItem("user")){
            return JSON.parse(sessionStorage.getItem("user"))
        }else{
            return false
        }
    }
}

//logout
export const logout=(next)=>{
    if(window !=="undefined"){
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("user")
    }
    next()
}
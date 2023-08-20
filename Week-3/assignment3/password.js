const checkPass =(password)=>{
    
    if(password.length >8 && !password.includes("password") && password !== password.toLowerCase() ){
        console.log("strong password")
        return true
    }else{
        console.log("weak password")
        return false
    }
}
checkPass("Mohit@123")
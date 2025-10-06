export function validate(email,password){
    if(email.length===0 || password.length===0){
        return("Email or Password is missing");
    }
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid){
        return "Please enter a valid email address";
    }
    if(!isPasswordValid){
        return "Please enter a Valid Password";
    }

    return null;
}
export function getUserData(){
    return JSON.parse(localStorage.getItem('userData'));
}
export function setUserData(data){
    return localStorage.setItem('userData', JSON.stringify(data));
}
export function clearUserData(){
    localStorage.removeItem('userData');
}

export function createSubmitHandler(callback){
    return function(e){
        e.preventDefault();
        const form=e.currentTarget
        const formData=new FormData(form)
        const data=Object.fromEntries(formData.entries())
        callback(data,form);
    }
}
checkToken();

function checkToken(){
    if(!localStorage.getItem('token')){
        window.location.href = '/html/login.html'
    }
}

function logout(){
    localStorage.removeItem('token');
    window.location.href = '/html/login.html'
}
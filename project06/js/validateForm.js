function validateLogin() {
    let email = document.login.txtUser;
    let emailPattern = /^[0-9]{10}(@e.tlu.edu.vn)$/;

    if(emailPattern.test(email.value) == false){
        email.value = 'Email không hợp lệ';
        email.style.backgroundColor = 'yellow';
        return false;
    }

    let pass = document.login.txtPass;
    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])$/;
    
    if(passPattern.test(pass.value) == false){
        let sr_pass = document.getElementById('sr_pass');
        sr_pass.textContent = 'Mật khẩu phải dài tối thiểu 8 kí tự bảo gồm cả chữ in hoa, chữ thường và các kí tự đặc biệt như @, #...';
        sr_pass.style.backgroundColor = 'yellow';
        pass.focus();
        return false;
    }
    return true;
}
<?php
    session_start()
    if(isset($_POST['btnSignIn'])&&  isset($_POST[txtUer])){
        require("config.php");
        $email = $_POST['txtEmail'];
        $pass  = $_POST['txtPass'];      

        $sql = "SELECT * FROM db_nguoidung WHERE email = '$email' AND matkhau='$pass'";
        $stmt = mysqli_prepare($conn,$sql);
        mysqli_stmt_bind_param($stmt,"ss",$email,$pass);
        if(mysqli_stmt_execute($stmt){    
            mysqli_stmt_bind_result($stmt,$mand,$tennd,$emailnd,$pass);        
            if(mysqli_stmt_fetch($stmt){
                echo $emailnd;
        }else{
           echo 'Dữ liệu không khớp. Ví dụ trống SQL Injection'
        }
    }else{
        echo 'Không có dữ liệu'
    }

       
    }
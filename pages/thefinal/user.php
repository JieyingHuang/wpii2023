<?php

$account = $_POST["account"];
$password = $_POST["password"];


$host = 'sql307.epizy.com';
$dbname = 'epiz_34070572_acc';
$username = 'epiz_34070572';
$password = 'oifaSYJslQ1vZ';

$conn = mysqli_connect ($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error " . mysqli_connect_errno());
}

$sql = "INSERT INTO acc (account, password)
VALUES ('$account', '$password')";

if ($conn->query($sql) === TRUE)
 {
    echo "  ";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css2?family=Calistoga&family=Pacifico&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
  <title> Account Saved  </title> 

<style> 

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins";
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:#FFF7DE; 
}
/*circle*/ 
body::before{
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(#febf92, #83af9b);
    clip-path: circle(45% at 90% 90%);
}

body::after{
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(#febf92, #83af9b);
    clip-path: circle(12% at 7% 3%);
   
}

main::after{ 
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(#febf92, #83af9b);
    clip-path: circle(23% at 30% 15%);
}

main::before{ 
    content:"";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background: linear-gradient(#febf92, #83af9b);
    clip-path: circle(15*% at 27% 72%);
    opacity: 50%;
}

.window {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    z-index: 1;
}

.window .login{
    position: relative;
    width:350px;
    height: 500px;
    background-color: rgba(255,255,255,0.1);
    margin:30px;
    border-radius: 15px;
    box-shadow: 20px 10px 50px rgba(0,0,0,0.5);
    overflow:hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
}

.window.login.fillup {
    text-align: center;


}
 h1{
    position: absolute;
    top:0;
    right:10px;
    font-size: 138px;
    color:rgba(255, 255, 255, 0.057);
}
h2{
    font-size: 60px;
    color:#774f38;
    font-family: 'Indie Flower', cursive; 
}


input{
    width:200px;
    height:40px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #eee;
    font-size: 16px;
    outline: none;
}

button{
    width: 150px;
    height: 36px;
    border: 1px solid #eee;
    border-radius: 11px;
    background-color: transparent;
    font-size: 20px;
    color: #eee;
    font-family: 'Indie Flower', cursive; 
}


a {
    text-decoration:none ;
    color: #774f38;
}



</style>
  </head> 
  
  <body> 
    <main>
    <div class="window"> 
        <div class="login">

            <div class="fillup">
                           
            <h1> &#128062 </h1>
            <br>
            <h2> Welcome </h2>

            
            <button><a href="dogsh.html"> See the Doggo!  </a></button>
            <br>
            <button><a href="http://jyhuang.rf.gd/accounts.php"> See our members </a> </button>
    
        </div>
        

        </div>
        </div>

        <br> 
    </main>
  </body>
</html>
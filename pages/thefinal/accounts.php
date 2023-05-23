<?php

$host = 'sql307.epizy.com';
$dbname = 'epiz_34070572_acc';
$username = 'epiz_34070572';
$password = 'oifaSYJslQ1vZ';

$conn = mysqli_connect ($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error " . mysqli_connect_errno());
}

$sql = "SELECT * FROM acc;";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title> accounts  </title>
<body> 
    <h1> Signed in accounts </h1> 
    <?php
       
        if ($resultCheck > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo '<li>' . $row['account'] . "</li>";
        
            }
        }
        ?>

 
</body>
</html>
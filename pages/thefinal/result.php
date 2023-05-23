<?php

$host = 'sql307.epizy.com';
$dbname = 'epiz_34070572_contact';
$username = 'epiz_34070572';
$password = 'oifaSYJslQ1vZ';

$conn = mysqli_connect ($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error " . mysqli_connect_errno());
}

$sql = "SELECT * FROM contact;";
$result = mysqli_query($conn, $sql);
$resultCheck = mysqli_num_rows($result);

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title> RESULTS </title>
<body> 
    <h1> About them </h1> 
    <?php
       
        if ($resultCheck > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo '<li>' . $row['name'] . "</li>";
        
            }
        }
        ?>

 
</body>
</html>
<?php

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$dogtreat = $_POST["dogtreat"];

$host = 'sql307.epizy.com';
$dbname = 'epiz_34070572_contact';
$username = 'epiz_34070572';
$password = 'oifaSYJslQ1vZ';

$conn = mysqli_connect ($host, $username, $password, $dbname);

if (mysqli_connect_errno()) {
    die("Connection error " . mysqli_connect_errno());
}

$sql = "INSERT INTO contact (name, email, phone, dogtreat)
VALUES ('$name', '$email', '$phone', '$dogtreat')";

if ($conn->query($sql) === TRUE)
 {
    echo "THANKS FOR CONTACTING!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>

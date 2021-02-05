<?php
	//die("hi");
	$servername = "localhost";
	$username = "person";
	$password = "SQL12!@password";
	$dbname = "dbschool";
	
	$conn = new mysqli($servername, $username, $password, $dbname);
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	
	
	$math = $_GET['math'];
	$science = $_GET['science'];
	$sst = $_GET['sst'];
	$landa = $_GET['landa'];
	
	$count = 0;
	if(strlen($math)>1)
		$count++;
	if(strlen($science)>1)
		$count++;
	if(strlen($sst)>1)
		$count++;
	if(strlen($landa)>1)
		$count++;
	
	
	$subjects = $math." , ".$science." , ".$sst." , ".$landa;
	
	$sql = "INSERT INTO enrollment_form ".
	"VALUES ('".$_GET['name']."','".$_GET['email']."','".$_GET['grade']."','".$subjects."','"
	.$_GET['bundle']."','".$_GET['from_time']."','".$_GET['to_time']."','".$_GET['timezone']."',CURRENT_TIMESTAMP, NULL);";
	if ($conn->query($sql) === TRUE) {
		//echo "New record created successfully";
		header("Location: payment.php?items=".$count."&id=".LAST_INSERT_ID());
		} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	
	
	$conn->close();
?>
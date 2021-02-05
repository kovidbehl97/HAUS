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
	if(isSet($_GET['math'])){
		$bundles .= $_GET['bundleMath'];
	}
	if(isSet($_GET['science'])){
		$bundles .= $_GET['bundleScience'];
	}
	if(isSet($_GET['sst'])){
		$bundles .= $_GET['bundleSst'];
	}
	if(isSet($_GET['landa'])){
		$bundles .= $_GET['bundleLanda'];
	}
	
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
	.$bundles."','".$_GET['timeslot']."','".$_GET['parentName'].$_GET['parentPhone']."','".$_GET['timezone']."',CURRENT_TIMESTAMP, NULL);";
	if ($conn->query($sql) === TRUE) {
		//echo "New record created successfully";
		header("Location: payment.php?items=".$_GET['amount']."&name=".$_GET['name']."&email=".$_GET['email']."&grade=".$_GET['grade']."&timeslot=".$_GET['timeslot']."&timezone=".$_GET['timezone']."&subjects=".$subjects."&parentName=".$_GET['parentName']."&parentPhone=".$_GET['parentPhone']);
		} else {
		echo "Error: " . $sql . "<br>" . $conn->error;
	}
	
	$conn->close();
?>
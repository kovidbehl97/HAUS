<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="resources/css/complete.css">
    </head>
    <body>
        <div id="container">
            <h2>Success!</h2>
            <h3>Your payment to<br>Home Academy US<br>was successful</h3>
            <h3 id="summary">summary</h3>
            <h4>Transaction ID : <span id="id"><?php  echo $_GET['id']; ?></span></h4>
            <h4>Student Name : <span><?php  echo $_GET['name']; ?></span></h4>
            <h4>Email : <span id="email"><?php  echo $_GET['email']; ?></span></h4>
            <h4>Grade : <span id="grade"><?php  echo $_GET['grade']; ?></span></h4>
            <h4>Subjects : <span id="subjects"><?php  echo $_GET['subjects']; ?></span></h4>
            <h4>Time Preferred : <span id="time-preferred"><?php  echo $_GET['time']; ?></span></h4>
            <h4>Time Zone : <span id="time-zone"><?php  echo $_GET['zone']; ?></span></h4>
            <h3>Total Amount Paid : <span id="total-amount"><?php  echo $_GET['amount']; ?> $</span></h3>
        </div>
        
    </body>
</html>
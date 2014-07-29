<?php

$EmailFrom = "luke@sizr.net";
$EmailTo = "kartikdgr8@gmail.com";
$Subject = "Website Form: ";

$Email = Trim(stripslashes($_POST['email'])); 
$Subject .= Trim(stripslashes($_POST['subject']));
$Name = Trim(stripslashes($_POST['name']));
$Message = Trim(stripslashes($_POST['message']));

// prepare email body text
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\nName: ";
$Body .= $Name;
$Body .= "\nMessage: ";
$Body .= $Message;

// send email 
mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

?>
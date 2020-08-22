<?php

if(isset($_POST['submit'])) {

    $name = $POST['name'];
    $subject = $POST['subject'];
    $mailForm = $POST['mail'];
    $message = $POST['message'];

    $mailTo = 'info@trina.dev';
    $headers = 'From: '.$mailFrom;
    $txt = "You have recieved an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header('Location:index.php?mailsend');
}

?>
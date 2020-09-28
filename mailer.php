<?php
require_once "./vendor/autoload.php";
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = htmlentities($_POST['name']);
    $email = htmlentities($_POST['email']);
    $subject = htmlentities($_POST['subject']);
    $comment = htmlentities($_POST['comment']);
    // Usual Default port. Other optional ports are 25, 587, 465, or 2525
    // Usually blocked by ISP(s).
    $PORT = 25;
    $transport = (new Swift_SmtpTransport('YOUR_HOST_NAME', $PORT, 'IS_SSL_OR_NOT'))
        ->setUsername('USER_NAME')
        ->setPassword('PASSWORD');

    // Create the Mailer using your created Transport
    $mailer = new Swift_Mailer($transport);

    // Create a message
    $message = (new Swift_Message($subject))
        ->setFrom([$email => $name])
        ->setTo(['Recipient_EMAIL_ADDR'])
        ->setBody($comment);

    // Send the message
    $result = $mailer->send($message);
    echo $result;
} else {
    echo "Sorry! wrong attempt!";
}

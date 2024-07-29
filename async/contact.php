<?php

require_once '../PHPMailer/PHPMailerAutoload.php';
require_once "../Classes/Mailer.php";

//echo json_encode($_POST);

$success = 0;
$msg = "une erreur est survenue ... (script php)";

if(!empty(trim($_POST['email'])) && !empty(trim($_POST['message'])) && empty($_POST["subject"]) && isset($_SERVER['HTTP_ORIGIN'])) {
    $email = strip_tags($_POST["email"]);
    $message = strip_tags($_POST["message"]);

    if(filter_var($email, FILTER_VALIDATE_EMAIL)) {

        if(strlen($message) < 1000) {

            //envoi du mail
             // on envoie le mail à l'administrateur
             $subject = "Contact Boulange d'antan";
             //adresse de l'administrateur
             $address = "baileche.theo@gmail.com";
             //corps du mail
             $mailContent = "<p>De la part de : $email</p><p>Message : $message</p>";
         
            Mailer::sendMail($subject, $address, $mailContent);

            $success = 1;
            $msg = "Votre message a bien été envoyé ! Vous allez être redirigé vers la page d'accueil.";

        } else {
            $msg = "Votre message ne doit pas dépasser 1000 caractères";
        }
        
    } else {
        $msg = "Votre email n'a pas un format valide";
    }
} else {
    $msg = "Veuillez remplir tous les champs du formulaire";
}

$result = ["success" => $success, "msg" => $msg];

echo json_encode($result);
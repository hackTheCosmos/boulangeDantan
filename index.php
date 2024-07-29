<?php

session_start();

require_once "autoloader.php";

//autoloader recaptcha
// require_once 'recaptcha//autoload.php';

//Load Composer's autoloader
require_once 'PHPMailer/PHPMailerAutoload.php';

Router::route();





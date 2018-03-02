<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['name'];
$address = $_POST['address'];
$email = $_POST['email'];
$price = $_POST['price'];
$message = $_POST['message'];
$phone = $_POST['phone'];



if(!empty($_POST["name"])){
    $name = $_POST['name'];
}
else {
    $name = 'defaultName';
}

if(!empty($_POST["address"])){
    $address = $_POST['address'];
}
else {
    $address = 'defaultAddress';
}

if(!empty($_POST["email"])){
    $email = $_POST['email'];
}
else {
    $email = 'defaultEmail';
}

if(!empty($_POST["price"])){
    $price = $_POST['price'];
}
else {
    $price = 'defaultPrice';
}

if(!empty($_POST["message"])){
    $message = $_POST['message'];
}
else {
    $message = 'defaultMessage';
}

if(!empty($_POST["phone"])){
    $phone = $_POST['phone'];
}
else {
    $phone = 'defaultPhone';
}

// Настройки
$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->Host = 'az-serwer1741646.online.pro';  
$mail->SMTPAuth = true;                      
$mail->Username = 'uslugi@greenpolis.pl'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = '_Orzel_V'; // Ваш пароль
$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('uslugi@greenpolis.pl'); // Ваш Email
$mail->addAddress('uslugi@greenpolis.pl'); // Email получателя
$mail->CharSet = 'UTF-8';

 
                                 
// Письмо
$mail->isHTML(true); 
$mail->Subject = "Nowe zamówienie z greenpolis.pl"; // Заголовок письма
$mail->Body    = "Imię: $name <br> 
                  Adres: $address <br>
                  Poczta: $email <br>
                  Telefon: $phone <br>
                  Cena: $price <br>
                  Wiadomość: $message"; // Текст письма

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>
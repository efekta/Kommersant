<?php

$recepient = "efekta9@gmail.com";
$sitename = "Название сайта";

$name = trim($_POST["name"]);
$tel = trim($_POST["tel"]);
$email = trim($_POST["email"]);
$arrived = trim($_POST["arrived"]);
$arrivedCome = trim($_POST["arrivedCome"]);
$quantity = trim($_POST["quantity"]);
$quantityChild = trim($_POST["quantityChild"]);
$quantityBaby = trim($_POST["quantityBaby"]);
$biznes = trim($_POST["biznes"]);
$economy = trim($_POST["economy"]);



$message = "Имя: $name \nТелефон: $tel \nПочта: $email \nЗаезд: $arrived \nВыезд: $arrivedCome \nВзрослых: $quantity \nДетей: $quantityChild \nМладенцев: $quantityBaby \nБизнес: $biznes \nЭконом: $economy \n;

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
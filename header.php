<!DOCTYPE html>
<!--[if lte IE 6]><html class="preIE7 preIE8 preIE9"><![endif]-->
<!--[if IE 7]><html class="preIE8 preIE9"><![endif]-->
<!--[if IE 8]><html class="preIE9"><![endif]-->
<!--[if gte IE 9]><!-->
<html lang="en">
<!--<![endif]-->

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="author" content="CM Freelancing">
    <meta name="description" content="Richcon: Producer, Director, Actor.">
    <meta name="keywords" content="produce, producer, direct, director, tv, television, film, act, actor">
    <title>Home</title>
    <link rel="icon" href="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/cropped-RichCon-icon-32x32.png"
        sizes="32x32">
    <script src="https://kit.fontawesome.com/5633037ef4.js"></script>
    <?php wp_head()?>
</head>

<body>


    <header id="top">
        <?php
    wp_nav_menu(array(
        "menu" => "Top Menu",
        "container" => "nav",
        "container_class" => "top-menu",
        "theme_location" => "top-menu",
        "items_wrap" => '<img src="https://cmfreelancing.co.za/client_sites/richcon/wp-content/uploads/2019/08/RichCon-logo.png" alt="logo">
        <ul id="%1$s" class="%2$s">%3$s</ul>'));
    wp_nav_menu(array(
        "menu" => "Top Center Menu",
        "container" => "nav",
        "container_class" => "top-center-menu",
        "theme_location" => "top-center-menu",
        "items_wrap" => '<ul id="%1$s" class="%2$s">%3$s<img src="https://cmfreelancing.co.za/client_sites/richcon/wp-content/uploads/2019/08/Cropped-RichCon-logo-white.png" alt="logo"></ul>'));
?>
    </header>
    <header id="side">
        <?php
    wp_nav_menu(array(
        "menu" => "Side Menu",
        "container" => "nav",
        "container_class" => "side-menu",
        "theme_location" => "side-menu",
        "items_wrap" => '<img src="https://cmfreelancing.co.za/client_sites/richcon/wp-content/uploads/2019/08/RichCon-logo.png" alt="logo">
        <hr></hr>
        <ul id="%1$s" class="%2$s">%3$s</ul>
        <div class="social-icons">
        <a href="http://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
        <a href="http://www.instagram.co.za"><i class="fab fa-instagram"></i></a>
        <a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a></div>',));
    wp_nav_menu(array(
        "menu" => "Small Side Menu",
        "container" => "nav",
        "container_class" => "small-side-menu",
        "theme_location" => "small-side-menu",
        "items_wrap" => '<img src="https://cmfreelancing.co.za/client_sites/richcon/wp-content/uploads/2019/08/Cropped-RichCon-logo-white.png" alt="logo">
        <div class="nav-expander"><span></span><span></span></div>
        <ul id="%1$s" class="%2$s">%3$s</ul>
        <div class="social-icons">
        <a href="http://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
        <a href="http://www.instagram.co.za"><i class="fab fa-instagram"></i></a>
        <a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a></div>',));
?>
    </header>

    <button id="nav-position-toggler"></button>
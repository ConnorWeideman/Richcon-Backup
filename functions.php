<?php
function load_stylesheets() {
    wp_register_style("main", get_template_directory_uri() . "/styles/main.css", array(), 1, "all" );
    wp_enqueue_style("main");
    if (is_front_page()) {
      wp_register_style("front", get_template_directory_uri() . "/styles/front.css", array(), 1, "all" );
      wp_enqueue_style("front");
    }
    else if (is_page("about")) {
      wp_register_style("about", get_template_directory_uri() . "/styles/about.css", array(), 1, "all" );
      wp_enqueue_style("about");
    }
    else if (is_page("tv-film")) {
      wp_register_style("tv", get_template_directory_uri() . "/styles/tv.css", array(), 1, "all" );
      wp_enqueue_style("tv");
    }
    else if (is_page("clients")) {
      wp_register_style("clients", get_template_directory_uri() . "/styles/clients.css", array(), 1, "all" );
      wp_enqueue_style("clients");
    }
    else if (is_page("news")) {
      wp_register_style("news", get_template_directory_uri() . "/styles/news.css", array(), 1, "all" );
      wp_enqueue_style("news");
    }
    else if (is_page("contact")) {
      wp_register_style("contact", get_template_directory_uri() . "/styles/contact.css", array(), 1, "all" );
      wp_enqueue_style("contact");
    }
}
function load_scripts() {
    wp_register_script("main", get_template_directory_uri() . "/scripts/main.js", array(), 1, true);
    wp_enqueue_script("main");
    if (is_front_page()) {
      wp_register_script("front", get_template_directory_uri() . "/scripts/front.js", array(), 1, true);
      wp_enqueue_script("front");
    }
    else if (is_page("about")) {
      wp_register_script("about", get_template_directory_uri() . "/scripts/about.js", array(), 1, true);
      wp_enqueue_script("about");
    }
    else if (is_page("tv-film")) {
      wp_register_script("tv", get_template_directory_uri() . "/scripts/tv.js", array(), 1, true);
      wp_enqueue_script("tv");
    }
    else if (is_page("clients")) {
      wp_register_script("clients", get_template_directory_uri() . "/scripts/clients.js", array(), 1, true);
      wp_enqueue_script("clients");
    }
    else if (is_page("news")) {
      wp_register_script("news", get_template_directory_uri() . "/scripts/news.js", array(), 1, true);
      wp_enqueue_script("news");
    }
    else if (is_page("contact")) {
      wp_register_script("contact", get_template_directory_uri() . "/scripts/contact.js", array(), 1, true);
      wp_enqueue_script("contact");
    }
}
function register_my_menus() {
    register_nav_menus(
      array(
        'top-menu' => __( 'Top Menu' ),
        'side-menu' => __( 'Side Menu' ),
        'top--center-menu' => __( 'Top Center Menu' ),
        'small-side-menu' => __( 'Small Side Menu' ),
      )
    );
}
add_action( 'init', 'register_my_menus' );
add_action("wp_enqueue_scripts", "load_scripts");
add_action("wp_enqueue_scripts", "load_stylesheets");
?>
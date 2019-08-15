<?php
function load_stylesheets() {
    wp_register_style("mainstyles", get_template_directory_uri() . "/styles/style.css", array(), 1, "all" );
    wp_enqueue_style("mainstyles");
}
function load_scripts() {
    wp_register_script("mainscripts", get_template_directory_uri() . "/scripts/scripts.js", array(), 1, true);
    wp_enqueue_script("mainscripts");
}
function register_my_menus() {
    register_nav_menus(
      array(
        'top-menu' => __( 'Top Menu' ),
        'side-menu' => __( 'Side Menu' ),
      )
    );
}
add_action( 'init', 'register_my_menus' );
add_action("wp_enqueue_scripts", "load_scripts");
add_action("wp_enqueue_scripts", "load_stylesheets");
?>
<?php get_header() ?>

<main>
    <section id="general2">
        <h1><?php the_title() ?></h1>
        <section class="content">
            <?php echo get_post_field('post_content', $post->ID) ?>
        </section>
    </section>
</main>

<?php get_footer() ?>
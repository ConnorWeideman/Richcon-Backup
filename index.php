<?php get_header() ?>

<main>
    <input type="range" min="0" max="3" value="0">
    <section id="general1">
        <h1><?php the_title() ?></h1>
        <section class="content">
            <?php echo get_post_field('post_content', $post->ID) ?>
        </section>
    </section>
    <section id="general2">
        <h1><?php the_title() ?></h1>
        <section class="content">
            <?php echo get_post_field('post_content', $post->ID) ?>
        </section>
    </section>
    <section id="general3">
        <section class="content">
            <h1><?php the_title() ?></h1>
            <?php echo get_post_field('post_content', $post->ID) ?>
        </section>
    </section>
    <section id="general4">
        <section class="content">
            <h1><?php the_title() ?></h1>
            <?php echo get_post_field('post_content', $post->ID) ?>
        </section>
    </section>
</main>

<?php get_footer() ?>
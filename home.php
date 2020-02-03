<?php get_header() ?>

<main>
    <section id="blog3">
        <h1 id="title">NEWS</h1>

        <section id="blogs">
            <?php rewind_posts();
            if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article class="blog">
                <a class="overlay" href="<?php the_permalink() ?>"></a>
                <h2 class="title"><?php the_title() ?></h2>
                <p class="excerpt"><?php the_excerpt() ?></p>
                <div class="date"><?php the_time("d-m-y") ?></div>
            </article>
            <?php endwhile;
            endif; ?>
        </section>

        <div id="nav">
            <?php
            echo paginate_links(
                array(
                    'format'             => '/page/%#%',
                    'end_size'           => 1,
                    'mid_size'           => 3,
                    'prev_next'          => true,
                    'prev_text'          => __('«'),
                    'next_text'          => __('»'),
                )
            ); ?>
        </div>
        <section id="social">
            <section id="instagram">
                <h2 class="title">Instagram:</h2>
                <div id="posts">
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/09/henck1.jpg">
                    </div>
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/Henck.jpg">
                    </div>
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/09/henck2.jpg">
                    </div>
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/09/Richard2.jpg">
                    </div>
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/Richard.jpg">
                    </div>
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/Richard1.jpg">
                    </div>
                </div>
            </section>
        </section>
    </section>
</main>

<?php get_footer() ?>
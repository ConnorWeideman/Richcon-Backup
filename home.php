<?php get_header() ?>

<main>
    <input type="range" max="3" min="0" value="0">

    <section id="blog1">
        <h1>NEWS</h1>
        <section id="blogs">
            <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article class="blog">
                <div class="date">
                    <div class="day"><?php the_time("d") ?></div>
                    <div class="month-year">
                        <p><?php the_time("M") ?></p>
                        <p><?php the_time("Y") ?></p>
                    </div>
                </div>
                <div class="title">
                    <h2><?php the_title() ?></h2>
                </div>
                <a class="link" href="<?php the_permalink() ?>">
                    <i class="fas fa-long-arrow-alt-right"></i>
                </a>
            </article>
            <?php endwhile;
            endif; ?>
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
        </section>
        <section id="social">
            <h2 class="title">Our Socials:</h2>
            <section id="facebook">
                <h2 class="title">Facebook</h2>
                <div class="item">
                    <h3>Henck Conway</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sodales ex, at gravida turpis.
                        Vestibulum pharetra, magna ut ultricies congue, sapien leo volutpat ante, a elementum ex ipsum
                        quis ante. Phasellus ac turpis quis ligula laoreet ultrices. Duis a interdum nisl.</p>
                </div>
                <div class="item">
                    <h3>Richard Opperman</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sodales ex, at gravida turpis.
                        Vestibulum pharetra, magna ut ultricies congue, sapien leo volutpat ante, a elementum ex ipsum
                        quis ante. Phasellus ac turpis quis ligula laoreet ultrices. Duis a interdum nisl.</p>
                </div>
                <div class="item">
                    <h3>Henck Conway</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sodales ex, at gravida turpis.
                        Vestibulum pharetra, magna ut ultricies congue, sapien leo volutpat ante, a elementum ex ipsum
                        quis ante. Phasellus ac turpis quis ligula laoreet ultrices. Duis a interdum nisl.</p>
                </div>
            </section>
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
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/09/Richcon1.jpg">
                    </div>
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/09/Richcon.jpg">
                    </div>
                    <div class="post">
                        <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/Henck-Richard-Pose.jpg">
                    </div>
                </div>
            </section>
        </section>
    </section>
    <section id="blog2">
        <nav id="filters">
            <h1 id="title">NEWS</h1>
            <a class="filter" id="all">ALL</a>
            <a class="filter" id="Uncategorized">GENERAL</a>
            <a class="filter" id="Produced">PRODUCED</a>
            <a class="filter" id="Directed">DIRECTED</a>
            <a class="filter" id="Written">WRITTEN</a>
            <a class="filter" id="Acted">ACTED</a>
        </nav>

        <section id="blogs">

            <?php $query = new WP_Query(array("posts_per_page" => "100"));
            if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>


            <article class="blog <?php foreach ((get_the_category()) as $category) echo $category->name . " " ?>">
                <a href="<?php the_permalink() ?>" class="wrap">
                    <div class="excerpt">
                        <?php the_excerpt() ?>
                    </div>
                    <div class="title">
                        <h2><?php the_title() ?></h2>
                    </div>
                </a>
            </article>

            <?php endwhile;
            endif; ?>

        </section>
    </section>

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
            <h2 class="title">Our Socials:</h2>
            <section id="facebook">
                <h2 class="title">Facebook</h2>
                <div class="item">
                    <div class="overlay"></div>
                    <h3>Henck Conway</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sodales ex, at gravida turpis.
                        Vestibulum pharetra, magna ut ultricies congue, sapien leo volutpat ante, a elementum ex ipsum
                        quis ante. Phasellus ac turpis quis ligula laoreet ultrices. Duis a interdum nisl.</p>
                </div>
                <div class="item">
                    <div class="overlay"></div>
                    <h3>Richard Opperman</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sodales ex, at gravida turpis.
                        Vestibulum pharetra, magna ut ultricies congue, sapien leo volutpat ante, a elementum ex ipsum
                        quis ante. Phasellus ac turpis quis ligula laoreet ultrices. Duis a interdum nisl.</p>
                </div>
                <div class="item">
                    <div class="overlay"></div>
                    <h3>Henck Conway</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac sodales ex, at gravida turpis.
                        Vestibulum pharetra, magna ut ultricies congue, sapien leo volutpat ante, a elementum ex ipsum
                        quis ante. Phasellus ac turpis quis ligula laoreet ultrices. Duis a interdum nisl.</p>
                </div>
            </section>
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

    <section id="blog4">
        <h1 id="title">NEWS</h1>
        <div id="toggle">
            <label for="options">TYPE</label>
            <select id="options">
                <option value="all">All</option>
                <option value="Uncategorized">General</option>
                <option value="Produced">Produced</option>
                <option value="Written">Written</option>
                <option value="Acted">Acted</option>
                <option value="Directed">Directed</option>
            </select>
        </div>
        <section id="blogs">

            <?php $query->rewind_posts();
            if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>
            <article class="blog <?php foreach ((get_the_category()) as $category) echo $category->name . " " ?>">
                <a class="overlay" href="<?php the_permalink() ?>">
                    <h2><?php the_title() ?></h2>
                </a>
                <div class="date"><?php the_time("jS F Y") ?></div>
                <div class="excerpt"><?php echo the_excerpt() ?></div>
            </article>
            <?php endwhile;
            endif; ?>

        </section>
    </section>
</main>

<?php get_footer() ?>
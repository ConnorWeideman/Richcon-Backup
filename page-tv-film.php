<?php get_header();?>

<main>
    <section id="film1">
        <h1 class="title">TV/FILM</h1>
        <div id="main-box">
            <nav id="filters">
                <a class="filter" id="all">ALL</a>
                <a class="filter" id="produced">SERIES</a>
                <a class="filter" id="written">COMMERCIALS</a>
            </nav>
            <section id="films">
                <article class="film produced">
                    <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/TV-Film-Vat-Jou-Goed.jpg"
                        alt="Vat Jou Goed En Trek">
                    <h2>Vat Jou Goed En Trek</h2>
                    <p>Produced</p>
                </article>
                <article class="film acted">
                    <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/TV-Film-Vat-Jou-Goed.jpg"
                        alt="Vat Jou Goed En Trek">
                    <h2>Vat Jou Goed En Trek</h2>
                    <p>Acted</p>
                </article>
                <article class="film written">
                    <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/TV-Film-Vat-Jou-Goed.jpg"
                        alt="Vat Jou Goed En Trek">
                    <h2>Vat Jou Goed En Trek</h2>
                    <p>Written</p>
                </article>
                <article class="film directed">
                    <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/TV-Film-Vat-Jou-Goed.jpg"
                        alt="Vat Jou Goed En Trek">
                    <h2>Vat Jou Goed En Trek</h2>
                    <p>Directed</p>
                </article>
                <article class="film produced acted">
                    <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/TV-Film-Vat-Jou-Goed.jpg"
                        alt="Vat Jou Goed En Trek">
                    <h2>Vat Jou Goed En Trek</h2>
                    <p>Produced, Acted</p>
                </article>
                <article class="film produced directed">
                    <img src="<?php bloginfo('wpurl')?>/wp-content/uploads/2019/08/TV-Film-Vat-Jou-Goed.jpg"
                        alt="Vat Jou Goed En Trek">
                    <h2>Vat Jou Goed En Trek</h2>
                    <p>Produced, Directed</p>
                </article>
            </section>
        </div>
    </section>
</main>

<?php get_footer();?>
<?php get_header() ?>

<main>
    <section id="contact1">
        <h1 class="title">CONTACT</h1>
        <section id="contacts">
            <div id="richcon">
                <h2>Email:</h2>
                <a href="mail:info@richcon.co.za" class="details">info@richcon.co.za</a>
            </div>
        </section>
        <section id="form">
            <h2>Leave A Message</h2>
            <form method="post">
                <input type="text" name="name" placeholder="Name">
                <input type="email" name="email" placeholder="Email">
                <textarea name="message" placeholder="Message"></textarea>
                <input type="submit">
            </form>
        </section>
    </section>
</main>

<?php get_footer() ?>
<?php get_header() ?>

<main>
    <input type="range" max="3" min="0" value="0">

    <section id="contact1">
        <h1 class="title">CONTACT</h1>
        <section id="contacts">
            <div id="richcon">
                <h2>Richcon</h2>
                <a href="localhost" class="details">info@richcon.co.za</a>
                <a href="localhost" class="details">011 123 1234</a>
                <a href="localhost" class="details">1 Fake Street<br>Clifton<br>Cape Town<br>1011</a>
            </div>
            <div id="richard">
                <h2>Richard</h2>
                <a href="localhost" class="details">richard@richcon.co.za</a>
                <a href="localhost" class="details">+27 63 123 1234</a>
            </div>
            <div id="henck">
                <h2>Henck</h2>
                <a href="localhost" class="details">henck@richcon.co.za</a>
                <a href="localhost" class="details">+27 83 123 1234</a>
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

    <section id="contact2">
        <section id="header">
            <h1 class="title">CONTACT</h1>
            <a class="toggle">Richcon</a>
            <a class="toggle">Richard</a>
            <a class="toggle">Henck</a>
            <a class="toggle">Comment</a>
        </section>
        <section id="contacts">
            <section id="richcon">
                <h2>Richcon</h2>
                <div class="phone">
                    <i class="fas fa-phone"></i><a>011 123 1234</a>
                </div>
                <div class="email">
                    <i class="fas fa-envelope"></i><a>info@richcon.co.za</a>
                </div>
                <div class="location">
                    <i class="fas fa-map-marker-alt"></i><a>1 Fake Street<br>Clifton<br>Cape Town<br>1011</a>
                </div>
            </section>
            <section id="richard">
                <h2>Richard</h2>
                <div class="phone">
                    <i class="fas fa-phone"></i><a>+27 63 123 1234</a>
                </div>
                <div class="email">
                    <i class="fas fa-envelope"></i><a>richard@richcon.co.za</a>
                </div>
            </section>
            <section id="henck">
                <h2>Henck</h2>
                <div class="phone">
                    <i class="fas fa-phone"></i><a>+27 83 123 1234</a>
                </div>
                <div class="email">
                    <i class="fas fa-envelope"></i><a>henck@richcon.co.za</a>
                </div>
            </section>
            <section id="comment">
                <h2>Leave A Message</h2>
                <form method="post">
                    <label for="name">Name:</label>
                    <input type="text" name="name" placeholder="Name" id="name">
                    <label for="email">Email:</label>
                    <input type="email" name="email" placeholder="Email" id="email">
                    <label for="message">Message:</label>
                    <textarea name="message" placeholder="Message" id="message"></textarea>
                    <input type="submit">
                </form>
            </section>
        </section>
    </section>

    <section id="contact3">
        <h1>CONTACT</h1>
        <section id="richcon">
            <h2 class="title">Richcon</h2>
            <div class="contacts">
                <div class="phone">
                    <a>011 123 1234</a>
                </div>
                <div class="email">
                    <a>info@richcon.co.za</a>
                </div>
                <div class="location">
                    <a>1 Fake Street<br>Clifton<br>Cape Town<br>1011</a>
                </div>
            </div>
        </section>
        <section id="richard">
            <h2 class="title">Richard</h2>
            <div class="contacts">
                <div class="phone">
                    <a>+27 63 123 1234</a>
                </div>
                <div class="email">
                    <a>richard@richcon.co.za</a>
                </div>
            </div>
        </section>
        <section id="henck">
            <h2 class="title">Henck</h2>
            <div class="contacts">
                <div class="phone">
                    <a>+27 83 123 1234</a>
                </div>
                <div class="email">
                    <a>henck@richcon.co.za</a>
                </div>
            </div>
        </section>
        <section id="comment">
            <h2>Leave A Message</h2>
            <form method="post">
                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="Name" id="name">
                <label for="email">Email:</label>
                <input type="email" name="email" placeholder="Email" id="email">
                <label for="message">Message:</label>
                <textarea name="message" placeholder="Message" id="message"></textarea>
                <input type="submit">
            </form>
        </section>
    </section>

    <section id="contact4">
        <h1>CONTACT</h1>
        <section id="contacts">
            <section id="richard" class="contact">
                <h2>Richard</h2>
                <div class="left">
                    <a>Email:<br>Phone:</a>
                </div>
                <div class="right">
                    <a>richard@richcon.co.za<br>+27 63 123 1234</a>
                </div>
            </section>
            <section id="richcon" class="contact">
                <h2>Richcon</h2>
                <div class="left">
                    <a>Email:<br>Phone:<br>Address:</a>
                </div>
                <div class="right">
                    <a>info@richcon.co.za<br>011 123 1234<br>1 Fake Street<br>Clifton<br>Cape Town<br>1011</a>
                </div>
            </section>
            <section id="henck" class="contact">
                <h2>Henck</h2>
                <div class="left">
                    <a>Email:<br>Phone:</a>
                </div>
                <div class="right">
                    <a>henck@richcon.co.za<br>+27 83 123 1234</a>
                </div>
            </section>
        </section>
        <section id="comment">
            <h2>Leave A Message</h2>
            <form method="post">
                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="Name" id="name">
                <label for="email">Email:</label>
                <input type="email" name="email" placeholder="Email" id="email">
                <label for="message">Message:</label>
                <textarea name="message" placeholder="Message" id="message"></textarea>
                <input type="submit">
            </form>
        </section>
    </section>
</main>

<?php get_footer() ?>
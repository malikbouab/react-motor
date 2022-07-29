import ScrollReveal from "scrollreveal"

export default function Navbar() {
    return (
        <main>
            <section className="showcase-area">
                <div className="container">
                    <div className="showcase-info">
                        <h3 className="sub-heading">Bienvenue</h3>
                        <h1 className="heading">Sur mon tout premier site</h1>
                        <p className="text">et je vais tout dechirer sur le freelance</p>
                        <div className="cta">
                            <a href="#" className="btn">Boutique</a>
                            <a href="mailto:malikoo13000@gmail.com" className="btn secondaire-btn">Contactez-nous</a>
                        </div>
                    </div>
                    <div className="showcase-image">
                        <img src="/moto1.png" className="moto" alt="Cylex" /></div>
                </div>
            </section>
        </main >
    );
}



let sr = ScrollReveal({
    duration: 2500,
    distance: "60px"
});

sr.reveal(".showcase-info", { delay: 600 });
sr.reveal(".showcase-image", { delay: 700, origin: 'top' });
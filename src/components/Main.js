import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";

export default function Navbar() {
  const sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
  });

  useEffect(() => {
    sr.reveal(".showcase-info", { delay: 600 });
    sr.reveal(".showcase-image", { delay: 700, origin: "top" });
  });

  return (
    <main>
      <section className="showcase-area">
        <Container>
          <div>
            <h3 className="sub-heading">Bienvenue</h3>
            <h1 className="heading">Sur mon tout premier site</h1>
            <p className="text">et je vais tout dechirer sur le freelance</p>
            <div className="cta">
              <a href="#" className="btn">
                Boutique
              </a>
              <a
                href="mailto:malikoo13000@gmail.com"
                className="btn secondaire-btn"
              >
                Contactez-nous
              </a>
            </div>
          </div>
          <div className="showcase-image">
            <img src="/moto1.png" className="moto" alt="Cylex" />
          </div>
        </Container>
      </section>
    </main>
  );
}

const Container = styled("div")`
  position: relative;
  width: 100%;
  max-width: 75rem;
  padding: 0 1.5rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 550px;
  height: calc(100vh - 120px);
  max-height: 600px;
  align-items: center;
`;
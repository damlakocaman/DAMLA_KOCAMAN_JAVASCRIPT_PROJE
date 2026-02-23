import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0 }}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={{ margin: 0 }}>"DK Lojistik"</h1>
        <nav>
          <a href="#hizmetler" style={styles.link}>Hizmetler</a>
          <a href="#hakkimizda" style={styles.link}>Hakkimizda</a>
          <a href="#iletisim" style={styles.link}>İletişim</a>
        </nav>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h2>Türkiye ve Avrupa’ya Güvenli Taşımacılık</h2>
        <p>Zamanında teslimat, güvenli nakliye, profesyonel ekip.</p>
        <button style={styles.button}>Teklif Al</button>
      </section>

      {/* HİZMETLER */}
      <section id="hizmetler" style={styles.section}>
        <h2>Hizmetlerimiz</h2>
        <div style={styles.cardContainer}>
          <div style={styles.card}>
            <h3>Uluslararasi Tasimacilik</h3>
            <p>Yurt içi ve yurt dışı güvenli taşımacılık çözümleri.</p>
          </div>
          <div style={styles.card}>
            <h3>Depolama</h3>
            <p>Modern ve güvenli depolama alanları.</p>
          </div>
          <div style={styles.card}>
            <h3>Hızlı Teslimat</h3>
            <p>Zamanında ve güvenilir teslimat garantisi.</p>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section id="hakkimizda" style={{ ...styles.section, background: "#f4f4f4" }}>
        <h2>"Hakkimizda"</h2>
        <p>
      
        </p>
      </section>

      {/* İLETİŞİM */}
      <section id="iletisim" style={styles.section}>
        <h2>"İletişim"</h2>
        <p>📍 "İstanbul, Türkiye"</p>
        <p>📞 +90 555 555 55 55</p>
        <p>"📧 info@kocamanlojistik.com"</p>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Kocaman Lojistik - Tüm Hakları Saklıdır
      </footer>
    </div>
  );
}

const styles = {
  header: {
    background: "#0d1b2a",
    color: "white",
    padding: "15px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  link: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
  },
  hero: {
    background: "#1b263b",
    color: "white",
    textAlign: "center",
    padding: "80px 20px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 25px",
    fontSize: "16px",
    background: "#fca311",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  section: {
    padding: "60px 40px",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },
  card: {
    background: "white",
    padding: "20px",
    width: "250px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  footer: {
    background: "#0d1b2a",
    color: "white",
    textAlign: "center",
    padding: "20px",
  },
};

export default App;












export default function Home() {
  return (
    <div className="page-container">
      <section class="hero">
        <div class="hero-content">
          <h1 class="hero-head">Welcome to our Design Agency!</h1>
          <p class="hero-desc">We create stunning designs tailored for your needs.</p>
        </div>
      </section>

      <section class="home-services">
        <div class="home-service-card">
          <img src="../src/assets/images/service1.jpg" alt="Service 1"></img>
          <h2>Web design</h2>
        </div>
        <div class="home-service-card">
          <img src="../src/assets/images/service2.jpg" alt="Service 2"></img>
          <h2>Branding</h2>
        </div>
        <div class="home-service-card">
          <img src="../src/assets/images/service3.jpg" alt="Service 3"></img>
          <h2>Logo Design</h2>
        </div>
      </section>
    </div>
  );
}

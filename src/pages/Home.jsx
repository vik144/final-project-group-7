import service1 from "../assets/images/service1.jpg";
import service2 from "../assets/images/service2.jpg";
import service3 from "../assets/images/service3.jpg";
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
          <img src={service1} alt="Service 1"></img>
          <h2>Web design</h2>
        </div>
        <div class="home-service-card">
          <img src={service2} alt="Service 2"></img>
          <h2>Branding</h2>
        </div>
        <div class="home-service-card">
          <img src={service3} alt="Service 3"></img>
          <h2>Logo Design</h2>
        </div>
      </section>
    </div>
  );
}

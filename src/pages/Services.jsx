import React from "react";

function Portfolio() {
  return (
    <div className="page-container">
      <h1>Our Services</h1>
      <p>Browse all the service offerings</p>
      <div class="services-section">
        <div class="service-card">
          <img src="https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service Image 1" />
          <h3>Marketing Management</h3>
          <p>We provide full range Management of all your marketing media channels.</p>
        </div>
        <div class="service-card">
          <img src="https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service Image 2" />
          <h3>Content Planning</h3>
          <p>We can create a perfect plan to launch your next product.</p>
        </div>
        <div class="service-card">
          <img src="https://images.unsplash.com/photo-1544655152-4dc3bc4df059?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Service Image 3" />
          <h3>Content Writing</h3>
          <p>Our staff of expert content writers will help you generate content for your blogs.</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

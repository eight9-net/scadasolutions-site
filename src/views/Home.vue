<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to SCADA Solutions Inc.</h1>
      <p class="subtitle">Expert SCADA and Control Systems Integration</p>
      <div class="cta-buttons">
        <router-link to="/contact" class="btn btn-primary">Contact Us</router-link>
        <router-link to="/scada" class="btn btn-secondary">Learn More</router-link>
      </div>
    </section>

    <section class="features">
      <div class="feature-grid">
        <div class="feature-card">
          <h3>SCADA Systems</h3>
          <p>Comprehensive SCADA solutions for monitoring and control</p>
        </div>
        <div class="feature-card">
          <h3>Communications</h3>
          <p>Reliable communication infrastructure for industrial systems</p>
        </div>
        <div class="feature-card">
          <h3>Wind Energy</h3>
          <p>Specialized solutions for wind energy applications</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Home page component
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.btn-primary {
  background-color: #42b983;
  color: white;
}

.btn-primary:hover {
  background-color: #369970;
}

.btn-secondary {
  background-color: white;
  color: #667eea;
}

.btn-secondary:hover {
  background-color: #f0f0f0;
}

.features {
  padding: 2rem 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  padding: 2rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.feature-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.feature-card p {
  color: #666;
}
</style>

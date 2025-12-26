<script setup>
// Home page component
</script>

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

<style scoped>

</style>

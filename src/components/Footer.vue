<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>SCADA Solutions Inc.</h3>
          <p>Expert SCADA and control systems integration</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><router-link to="/company">Company</router-link></li>
            <li><router-link to="/scada">SCADA</router-link></li>
            <li><router-link to="/careers">Careers</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Resources</h4>
          <ul>
            <li><router-link to="/glossary">Glossary</router-link></li>
            <li><router-link to="/wind-energy-tutorial">Wind Energy Tutorial</router-link></li>
            <li><router-link to="/wind-facts">Wind Facts</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} SCADA Solutions Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  margin-bottom: 1rem;
  color: #42b983;
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #42b983;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1rem;
  text-align: center;
}
</style>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <router-link to="/">SCADA Solutions</router-link>
      </div>
      <nav class="nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/company">Company</router-link></li>
          <li><router-link to="/scada">SCADA</router-link></li>
          <li><router-link to="/communications">Communications</router-link></li>
          <li><router-link to="/news">News</router-link></li>
          <li><router-link to="/careers">Careers</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// Header component
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s;
}

.nav a:hover,
.nav a.router-link-active {
  color: #42b983;
}
</style>

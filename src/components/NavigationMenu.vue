<script setup>
// Header component
</script>

<template>
      <ul class="menu menu-horizontal px-1">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/company">Company</router-link></li>
        <li><router-link to="/scada">SCADA</router-link></li>
        <li><router-link to="/communications">Communications</router-link></li>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/careers">Careers</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li><router-link to="/">Child</router-link></li>
            </ul>
          </details>
        </li>
      </ul>
</template>
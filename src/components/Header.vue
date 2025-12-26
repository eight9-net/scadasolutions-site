
<script setup>
import NavigationMenu from './NavigationMenu.vue';

// Header component
</script>

<template>
  <header class="header">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <router-link to="/">SCADA Solutions</router-link>
      </div>
      <div class="flex-none">
        <nav>
          <NavigationMenu />
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>


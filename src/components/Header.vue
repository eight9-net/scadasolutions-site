
<script setup>
import NavigationMenu from './NavigationMenu.vue';

function getImageUrl(image) {
  return new URL(image, import.meta.url).href
}
</script>

<template>
  <header class="header">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <navigation-menu classes="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-100" :hover="false" />
        </div>
        <router-link :to="{ name: 'home' }">
          <img :src="getImageUrl('../assets/images/scada-solutions-logo.png')" alt="SCADA Solutions" />
        </router-link>
      </div>

      <div class="navbar-center hidden lg:flex">
        <navigation-menu />
      </div>

      <div class="navbar-end">
        <router-link class="btn btn-primary" :to="{ name: 'home', hash: '#ContactUs'}">Contact Us</router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>


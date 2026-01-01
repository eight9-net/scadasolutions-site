
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NavigationMenu from './NavigationMenu.vue';

function getImageUrl(image) {
  return new URL(image, import.meta.url).href
}
</script>

<template>
  <header class="header sticky top-0 z-50">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-lg btn-ghost lg:hidden">
            <font-awesome-icon :icon="['fa', 'bars']" size="lg" />
          </div>
          <navigation-menu classes="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-100" :hover="false" :border="false" />
        </div>
        <router-link :to="{ name: 'home' }">
          <img class="max-w-[275px] sm:max-w-[400px]" :src="getImageUrl('../assets/images/scada-solutions-logo.png')" alt="SCADA Solutions" />
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


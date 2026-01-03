
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import NavigationMenu from './NavigationMenu.vue';

</script>

<template>
  <header class="header sticky top-0 z-50">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start flex-2">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-lg btn-ghost lg:hidden">
            <font-awesome-icon :icon="['fa', 'bars']" size="lg" />
          </div>
          <navigation-menu classes="menu menu-compact text-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-100" :hover="false" :border="false" />
        </div>
        <router-link :to="{ name: 'home' }">
          <img class="max-w-[275px] sm:max-w-[400px]" :src="$getImageUrl('scada-solutions-logo.png')" alt="SCADA Solutions" />
        </router-link>
      </div>

      <div class="navbar-center hidden lg:flex flex-auto">
        <navigation-menu />
      </div>

      <div class="navbar-end ml-5 flex-1">
        <ContactButton />
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>


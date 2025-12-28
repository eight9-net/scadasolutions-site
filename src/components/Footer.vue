<script setup>
  import { computed } from 'vue';

  const currentYear = computed(() => new Date().getFullYear());
  function getImageUrl(image) {
    return new URL(image, import.meta.url).href;
  }
</script>

<template>
  <footer class="footer-section">
    <div class="container">
      <div class="w-full flex text-center">

        <div class="flex-1 footer-column">
          <img :src="getImageUrl('../assets/images/scada-solutions-logo.png')" />
          <p class="copyright my-5 text-xs">&copy; {{ currentYear}} All Rights Reserved | SCADA Solutions, Inc.</p>
        </div>
        <div class="flex-1 footer-column">
          <h2 class="mb-5 text-3xl font-bold">Contact Information</h2>
          <ul>
            <li class="my-5">
              <FontAwesomeIcon :icon="['fa', 'phone']" />
              <a href="tel:+19495989605" class="ms-1">949-598-9605</a>
            </li>
            <li class="my-5">
              <FontAwesomeIcon :icon="['fa', 'envelope']" />
              <a href="mailto:info@scadasolutions.com" class="ms-1">info@scadasolutions.com</a>
            </li>
          </ul>
          <h3 class="my-5 font-bold">Registered California DIR Public Works Contractor #949-509-9605</h3>
        </div>
        <div class="flex-1 footer-column">
          <h2 class="mb-5 text-3xl font-bold">Map</h2>
        </div>

      </div>
    </div>
  </footer>
</template>


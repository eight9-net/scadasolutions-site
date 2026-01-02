<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';

  const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer-section">
    <div class="container mx-auto">
      <div class="w-full flex text-center">

        <div class="flex-1 footer-column">
            <img class="max-w-[350px] mx-auto" :src="$getImageUrl('scada-solutions-logo.png')" />
          <p class="copyright my-10 text-xs">&copy; {{ currentYear}} All Rights Reserved | SCADA Solutions, Inc.</p>
        </div>
        <div class="flex-1 footer-column">
          <h2 class="headline m-5 text-3xl font-normal">Contact Information</h2>
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
          <div class="text-blue-600 text-4xl my-10">
            <a href="https://linkedin.com/company/scada-solutions-llc?trk=public_profile_topcard-current-company" alt="Visit us on LinkedIn"><FontAwesomeIcon :icon="['fab', 'linkedin']" /></a>
          </div>
        </div>
        <div class="flex-1 footer-column">
          <h2 class="my-10">Map...</h2>
        </div>

      </div>
    </div>
  </footer>
</template>


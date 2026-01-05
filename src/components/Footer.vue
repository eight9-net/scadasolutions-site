<script setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { computed } from 'vue';

  const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer-section">
    <div class="container w-full md:mx-auto">
      <div class="w-full flex items-center justify-center bg-blue-400 m-0">
        <h2 class="text-1xl text-white p-2">Control Systems Integration</h2>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">

        <div class="w-full md:w-1/3 text-center">
            <img class="max-w-[300px] lg:max-w-[350px] mx-auto" :src="$getImageUrl('scada-solutions-logo.png')" />
          <p class="copyright my-10 text-xs">&copy; {{ currentYear}} All Rights Reserved | SCADA Solutions, Inc.</p>
        </div>
        <div class="w-full md:w-1/3 text-center">
          <h3 class="my-5 font-bold">Registered California DIR Public Works Contractor<br />#949-509-9605</h3>
          <div class="text-blue-600 text-4xl my-10">
            <a href="https://linkedin.com/company/scada-solutions-llc?trk=public_profile_topcard-current-company" alt="Visit us on LinkedIn"><FontAwesomeIcon :icon="['fab', 'linkedin']" /></a>
          </div>
        </div>
        <div class="w-full md:w-1/3 text-center">
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
        </div>

      </div>
    </div>
  </footer>
</template>


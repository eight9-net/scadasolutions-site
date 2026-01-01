<script setup>
  function getImageUrl(image) {
    return new URL(image, import.meta.url).href;
  }

</script>

<template>
  <div class="flex">

    <div
      class="flex-1 bg-cover bg-top"
      :style="`background-image: url(${getImageUrl('../assets/images/networking.webp')});`"
    >
      &nbsp;
    </div>

    <div class="flex-1 px-10 py-15 bg-base-200">
      <h2 class="headline text-3xl font-normal mb-10 text-left">Expert Installation for Your Network Needs</h2>
      <p class="mx-auto">Our expertise in system design engineering of complete SCADA solutions, coupled with our experienced and professional installation knowledge, allows for seamless delivery and implementation. We understand that the successful implementation of network solutions involves a number of skills, protocols, and technologies. Our experienced field technicians ensure the complete and timely implementation of the client's network solutions with minimal disruption to its vital business operations and functions. Please contact us or call us to speak with a solutions expert and learn more about our installation services.</p>
      <div class="mx-auto mb-10">
        <router-link :to="{ name: 'home', hash: '#ContactUs' }" class="btn btn-primary mt-5 btn-lg">Call Today</router-link>
      </div>
    </div>

  </div>
</template>
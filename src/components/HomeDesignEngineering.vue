<script setup>
  function getImageUrl(image) {
    return new URL(image, import.meta.url).href;
  }

</script>

<template>
  <div class="flex">


    <div class="flex-1 bg-cover bg-top"
      :style="`background-image: url(${getImageUrl('../assets/images/turbine.jpeg')});`"
    >
      &nbsp;
    </div>

    <div class="flex-1 mx-5 my-15">
      <h2 class="headline text-3xl font-normal mb-10 text-left">Tailored Design and Engineering Solutions by Expert Professionals</h2>
      <p class="mx-auto">Our team of skilled engineers and designers is ready to support you with your design and engineering requirements. We provide detailed, expert programming tailored to meet your specific requests and needs. This encompasses identifying the right components and disciplines for integration, determining configuration details and installation specifications, and guaranteeing the utmost efficiency and effectiveness of the final product.</p>
      <div class="mx-auto mb-10">
        <router-link :to="{ name: 'home', hash: '#ContactUs' }" class="btn btn-primary mt-5 btn-lg">Reach Out</router-link>
      </div>
    </div>

  </div>
</template>
<script setup>
  function getImageUrl(image) {
    return new URL(image, import.meta.url).href;
  }

</script>

<template>
  <div class="flex">

    <div class="flex-1 mx-5 my-15">
      <h2 class="headline text-3xl font-normal mb-10 text-left">Empowering Industries with Wind SCADA Solutions</h2>
      <p class="mx-auto">We specialize in providing control system integration for windpower projects. With our expertise and experience, we have successfully completed automation and communication systems for nearly every industrial application, including wind farms. Our team is dedicated to delivering reliable and efficient solutions that optimize the performance of wind turbines and ensure seamless operations. Whether it's designing advanced monitoring and control systems or implementing innovative communication technologies, we have the knowledge and skills to support the growth of the windpower industry. Let us help you maximize the potential of your windpower projects with our comprehensive control system integration services.</p>
      <div class="mx-auto mb-10">
        <router-link :to="{ name: 'home', hash: '#ContactUs' }" class="btn btn-primary mt-5 btn-lg">Contact Us</router-link>
      </div>
    </div>

    <div
      class="flex-1 bg-cover bg-top"
      :style="`background-image: url(${getImageUrl('../assets/images/turbines-clouds.webp')});`"
    >
      &nbsp;
    </div>

  </div>
</template>
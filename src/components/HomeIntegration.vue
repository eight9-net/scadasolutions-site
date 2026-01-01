<script setup>
  function getImageUrl(image) {
    return new URL(image, import.meta.url).href;
  }

</script>

<template>
  <div class="flex">

    <div class="flex-1 mx-5 my-15">
      <h2 class="headline text-3xl font-normal mb-10 text-left">SCADA Solutions Integration</h2>
      <p class="mx-auto">Integration has become increasingly fundamental given the rising number of IT components that must interact in today's wind farm environment. Our engineers and installers are experts in system integration and configuration. We can design a new platform to be compatible with nearly every component of an existing infrastructure. Through technology, we're able to combine, retrofit, or replace any or all of a project's entire network. Please contact us or phone us to speak with a solutions expert and learn more about our integration services.</p>
      <div class="mx-auto mb-10">
        <router-link :to="{ name: 'home', hash: '#ContactUs' }" class="btn btn-primary mt-5 btn-lg">Contact Us</router-link>
      </div>
    </div>

    <div
      class="flex-1 bg-cover bg-top"
      :style="`background-image: url(${getImageUrl('../assets/images/turbines.webp')});`"
    >
      &nbsp;
    </div>

  </div>
</template>
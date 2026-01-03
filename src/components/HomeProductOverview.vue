<script setup>
  import Gallery from './Gallery.vue';
</script>

<template>
  <div class="flex flex-col lg:flex-row gap-4 text-center lg:text-left">

    <div class="w-full lg:w-1/2 p-4">
      <h2 class="headline text-3xl font-normal mb-10">Seamless SCADA Solutions for Uninterrupted Operations</h2>
      <p class="mx-auto">SCADA Solutions, Inc. capabilities in system design engineering of complete SCADA solutions, coupled with our experienced and professional installation knowledge, allow for seamless delivery and implementation with minimal operational interruption. Our superior communication, automation, and integration capabilities and ability to serve all brands of turbines, both old and new, set us apart from other third-party SCADA providers.</p>
      <div class="mx-auto mt-5">
        <ContactButton buttonText="Get in Touch" />
      </div>
    </div>

    <div class="w-full lg:w-1/2 p-4">
      <Gallery
        cols="2"
        :images="[
          { src: 'windcapture-01-1920w.webp', alt: 'SCADA Product Overview 1' },
          { src: 'windcapture-02-1920w.webp', alt: 'SCADA Product Overview 2' },
          { src: 'windcapture-03-1920w.webp', alt: 'SCADA Product Overview 3' },
          { src: 'windcapture-04-1920w.webp', alt: 'SCADA Product Overview 4' },
        ]"
      />

    </div>

  </div>
</template>
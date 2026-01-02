
<template>
  <div class="flex">

    <div class="flex-1 m-5">
      <h2 class="headline text-3xl font-normal mb-10 text-left">Seamless SCADA Solutions for Uninterrupted Operations</h2>
      <p class="mx-auto">SCADA Solutions, Inc. capabilities in system design engineering of complete SCADA solutions, coupled with our experienced and professional installation knowledge, allow for seamless delivery and implementation with minimal operational interruption. Our superior communication, automation, and integration capabilities and ability to serve all brands of turbines, both old and new, set us apart from other third-party SCADA providers.</p>
      <div class="mx-auto">
        <router-link :to="{ name: 'home', hash: '#ContactUs' }" class="btn btn-primary mt-5 btn-lg">Get in Touch</router-link>
      </div>
    </div>

    <div class="flex-1 m-5">
      <div class="flex">
        <div class="flex-1 m-2">
          <img :src="$getImageUrl('windcapture-01-1920w.webp')" alt="SCADA Product Overview 1" />
        </div>
        <div class="flex-1 m-2">
          <img :src="$getImageUrl('windcapture-02-1920w.webp')" alt="SCADA Product Overview 2" />
        </div>
      </div>
      <div class="flex">
        <div class="flex-1 m-2">
          <img :src="$getImageUrl('windcapture-03-1920w.webp')" alt="SCADA Product Overview 3" />
        </div>
        <div class="flex-1 m-2">
          <img :src="$getImageUrl('windcapture-04-1920w.webp')" alt="SCADA Product Overview 4" />
        </div>
      </div>
    </div>

  </div>
</template>
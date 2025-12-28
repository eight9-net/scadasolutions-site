<script setup>
  import { computed, ref } from 'vue';
  import HomeFaq from '../components/HomeFaq.vue';
  import HomeContactForm from '../components/HomeContactForm.vue';

  const currentHeroImageIdxRef = ref(0);
  const heroImagesRef = ref([
    '../assets/images/hero-bg-1.webp',
    '../assets/images/hero-bg-2.webp',
    '../assets/images/hero-bg-3.webp',
  ]);
  const currentHeroImageComputed = computed(() => heroImagesRef.value[currentHeroImageIdxRef.value]);

  function getImageUrl(image) {
    return new URL(image, import.meta.url).href;
  }
</script>

<template>
  <div class="home">

    <section class="hero">
      <div
        class="hero min-h-screen"
        :style="`background-image: url(${getImageUrl(currentHeroImageComputed)});`"
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Streamlined Integration Solutions for Industrial Automation</h1>
            <p class="mb-5">
              Control Systems Integration Services | Irvine
            </p>
            <router-link :to="{ name: 'home', hash: '#ContactUs' }" class="btn btn-primary">Contact Us</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="features" v-if="false">
      <div class="feature-grid">
        <div class="feature-card">
          <h3>SCADA Systems</h3>
          <p>Comprehensive SCADA solutions for monitoring and control</p>
        </div>
        <div class="feature-card">
          <h3>Communications</h3>
          <p>Reliable communication infrastructure for industrial systems</p>
        </div>
        <div class="feature-card">
          <h3>Wind Energy</h3>
          <p>Specialized solutions for wind energy applications</p>
        </div>
      </div>
    </section>


    <section class="faq-section my-20" id="FAQs">
      <div
        class="faq-container fixed-bg"
        :style="`background-image: url(${getImageUrl('../assets/images/solar-blur-bg.png')});`"
      >
        <div class="h-full w-full backdrop-brightness-50 m-0">
          <div class="w-auto">
            <div class="container mx-auto px-40 faq-container py-25">
              <h2 class="text-3xl font-bold mb-10 text-white text-center">Frequently Asked Questions</h2>
              <HomeFaq />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-us-section my-20" id="ContactUs">
      <div
        class="contact-us-container bg-cover bg-center"
        :style="`background-image: url(${getImageUrl('../assets/images/turbines-blue-bg.jpeg')});`"
      >
        <div class="h-full w-full backdrop-brightness-50 text-white m-0">
          <div class="w-auto">
            <div class="container mx-auto px-40 faq-container py-25 ">
              <h2 class="text-3xl font-bold mb-10 text-white text-center">Contact Us</h2>
              <p class="my-4 mx-40 text-center">
                Enter your information below along with a brief message and your contact details. A member of our team will be in touch with you as soon as possible to schedule a consultation.
              </p>
              <HomeContactForm />
            </div>

            <div class="w-full flex items-center justify-center bg-blue-400 m-0">
              <h2 class="text-1xl text-white p-2">Control Systems Integration</h2>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>

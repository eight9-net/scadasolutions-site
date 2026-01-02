<script setup>
  import { computed, ref } from 'vue';
  import HomeExplanation from '../components/HomeExplanation.vue';
  import HomeProductOverview from '../components/HomeProductOverview.vue';
  import HomeDesignEngineering from '../components/HomeDesignEngineering.vue';
  import HomeServiceAndSupport from '../components/HomeServiceAndSupport.vue';
  import HomeIntegration from '../components/HomeIntegration.vue';
  import HomeInstallation from '../components/HomeInstallation.vue';
  import HomeSolar from '../components/HomeSolar.vue';
  import HomeWind from '../components/HomeWind.vue';
  import HomeFaq from '../components/HomeFaq.vue';
  import HomeContactForm from '../components/HomeContactForm.vue';

  const currentHeroImageIdxRef = ref(0);
  const heroImagesRef = ref([
    'hero-bg-1.webp',
    'hero-bg-2.webp',
    'hero-bg-3.webp',
  ]);
  const currentHeroImageComputed = computed(() => heroImagesRef.value[currentHeroImageIdxRef.value]);

</script>

<template>
  <div class="home">

    <section class="hero">
      <div
        class="hero min-h-screen"
        :style="`background-image: url(${$getImageUrl(currentHeroImageComputed)});`"
      >
        <div class="hero-overlay"></div>
        <div class="hero-content text-neutral-content text-center">
          <div class="w-full mx-auto max-w-4xl">
            <h1 class="headline uppercase mb-5 text-3xl md:text-5xl font-normal">Streamlined Integration Solutions for Industrial Automation</h1>
            <div class="headline mb-5 text-2xl my-6 font-light">
              Control Systems Integration Services | Irvine
            </div>
            <router-link :to="{ name: 'home', hash: '#ContactUs' }" class="btn btn-soft btn-primary btn-lg my-4">Contact Us</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="explanation-section my-10 pt-10">
      <div class="scroll-target" id="Explanation">&nbsp;</div>
      <div
        class="explanation-container bg-blue-200"
      >
        <div class="h-full w-full m-0">
          <div class="w-auto">
            <div class="container mx-auto px-5 md:px-40 py-25">
              <HomeExplanation />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-overview-section my-10 pt-10">
      <div class="scroll-target" id="ProductOverview">&nbsp;</div>
      <div
        class="product-overview-container"
      >
        <div class="h-full w-full m-0">
          <div class="w-auto">
            <div class="container mx-auto">
              <HomeProductOverview />
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="design-engineering-section my-10 pt-10">
      <div class="scroll-target" id="DesignAndEngineering">&nbsp;</div>
      <div
        class="design-engineering-container"
      >
        <div class="h-full w-full m-0">
          <div class="w-auto">
            <div class="container mx-auto">
              <HomeDesignEngineering />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="service-and-support-section my-10 pt-10">
      <div class="scroll-target" id="ServiceAndSupport">&nbsp;</div>
      <div
        class="service-and-support-container fixed-bg"
        :style="`background-image: url(${$getImageUrl('solar-w-turbines.webp')});`"
      >
        <div class="h-full w-full backdrop-brightness-50 m-0">
          <div class="w-auto">
            <div class="container mx-auto px-5 md:px-40 faq-container py-25">
              <HomeServiceAndSupport />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="integration-section my-10 pt-10">
      <div class="scroll-target" id="Integration">&nbsp;</div>
      <div class="integration-container">
        <div class="h-full w-full m-0">
          <div class="w-auto">
            <div class="container mx-auto">
              <HomeIntegration />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="installation-section my-10 pt-10">
      <div class="scroll-target" id="Installation">&nbsp;</div>
      <div class="installation-container">
        <div class="h-full w-full m-0">
          <div class="w-auto">
            <div class="container mx-auto">
              <HomeInstallation />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="solar-section my-10 pt-10">
      <div class="scroll-target" id="SolarServices">&nbsp;</div>
      <div
        class="solar-container fixed-bg"
        :style="`background-image: url(${$getImageUrl('16_AES-Lawai-Solar_1-scaled-1920w.webp')});`"
      >
        <div class="h-full w-full backdrop-brightness-50 m-0">
          <div class="w-auto">
            <div class="container mx-auto px-40 faq-container py-25">
              <HomeSolar />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="wind-section my-10 pt-10">
      <div class="scroll-target" id="WindServices">&nbsp;</div>
      <div class="wind-container">
        <div class="h-full w-full m-0">
          <div class="w-auto">
            <div class="container mx-auto">
              <HomeWind />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq-section my-10 pt-10">
      <div class="scroll-target" id="FAQs">&nbsp;</div>
      <div
        class="faq-container fixed-bg"
        :style="`background-image: url(${$getImageUrl('solar-blur-bg.webp')});`"
      >
        <div class="h-full w-full backdrop-brightness-50 m-0">
          <div class="w-auto">
            <div class="container mx-auto px-40 faq-container py-25">
              <h2 class="headline text-3xl font-normal mb-10 text-white text-center">Frequently Asked Questions</h2>
              <HomeFaq />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-us-section my-10 pt-10">
      <div class="scroll-target" id="ContactUs">&nbsp;</div>
      <div
        class="contact-us-container bg-cover bg-center"
        :style="`background-image: url(${$getImageUrl('turbines-blue-bg.webp')});`"
      >
        <div class="h-full w-full backdrop-brightness-50 text-white m-0">
          <div class="w-auto">
            <div class="container mx-auto lg:px-40 faq-container py-25 text-center">
              <h2 class="headline text-3xl font-normal mb-10 text-white text-center">Contact Us</h2>
              <div class="my-4 mx-auto md:mx-40">
                <p>Call Us</p>
                <p>
                  <FontAwesomeIcon :icon="['fa', 'phone']" />
                  <a href="tel:+19495989605" class="ms-1">949-598-9605</a>
                </p>
              </div>
              <div class="my-4 mx-auto md:mx-40">
                <p>Email Us</p>
                <p>
                  <FontAwesomeIcon :icon="['fa', 'envelope']" />
                  <a href="mailto:info@scadasolutions.com" class="ms-1">info@scadasolutions.com</a>
                </p>
              </div>
              <p class="my-4 mx-auto md:mx-40">
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

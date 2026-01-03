<script setup>
  import { ref } from 'vue';
  import HomeContactForm from './HomeContactForm.vue';

</script>

<template>

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
            <div class="my-4 mx-auto px-5 md:px-40">
              <p>Call Us</p>
              <p>
                <FontAwesomeIcon :icon="['fa', 'phone']" />
                <a href="tel:+19495989605" class="ms-1">949-598-9605</a>
              </p>
            </div>
            <div class="my-4 mx-auto px-5 md:px-40">
              <p>Email Us</p>
              <p>
                <FontAwesomeIcon :icon="['fa', 'envelope']" />
                <a href="mailto:info@scadasolutions.com" class="ms-1">info@scadasolutions.com</a>
              </p>
            </div>
            <p class="my-4 mx-auto px-5 md:px-40">
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
</template>

<style scoped>
  .validator-hint {
    font-size: 0.75rem;
  }
</style>
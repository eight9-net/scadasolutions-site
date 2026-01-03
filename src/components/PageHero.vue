<script setup>
  const props = defineProps({
    image: {
      type: String,
      required: false,
      default: 'products-hero-bg.jpg',
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: false,
      default: 'Contact Us',
    },
  });
</script>
<template>
  <section class="hero">
    <div
      class="hero min-h-[640px] w-screen relative w-full overflow-hidden"
    >
      <div
        class="hero-overlay absolute inset-0 bg-cover bg-center bg-fixed"
        :style="`background-image: url(${$getImageUrl(props.image)});`"
      ></div>
      <div class="absolute inset-0 bg-black opacity-40"></div>

      <div class="hero-content text-neutral-content text-center">
        <div class="w-full mx-auto max-w-4xl">
          <h1 class="headline uppercase mb-10 text-3xl md:text-5xl font-normal">
            {{ props.title }}
          </h1>
          <div class="headline mb-5 text-2xl my-6 font-light">
            {{ props.subtitle }}
          </div>
          <ContactButton classes="btn btn-soft btn-primary btn-lg my-4 border border-2 border-primary" />
        </div>
      </div>
    </div>
  </section>
</template>
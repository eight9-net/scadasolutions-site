<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  const heroImagesRef = [
    'hero-bg-1.webp',
    'hero-bg-2.webp',
    'hero-bg-3.webp',
  ];

  let intervalId = ref(null);
  const currentHeroImageIdxRef = ref(0);
  const currentHeroImageComputed = computed(() => {
    return heroImagesRef[currentHeroImageIdxRef.value];
  });

  // On mounted, set up image rotation
  onMounted(() => {
    startImageRotation();
  });

  onUnmounted(() => {
    if (intervalId.value) clearInterval(intervalId.value);
  });

  function startImageRotation() {
    // Rotate hero image every 10 seconds
    intervalId = setInterval(() => {
      currentHeroImageIdxRef.value = (currentHeroImageIdxRef.value + 1) % heroImagesRef.length;
    }, 5000);
  }
</script>
<template>
  <section class="hero">
    <div
      class="hero min-h-screen relative h-screen w-full overflow-hidden"
      
    >
      <Transition name="fade"
        enter-active-class="transition-opacity duration-500 ease-in"
        leave-active-class="transition-opacity duration-500 ease-out"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div
          :key="currentHeroImageComputed"
          class="hero-overlay absolute inset-0 bg-cover bg-center"
          :style="`background-image: url(${$getImageUrl(currentHeroImageComputed)});`"
        ></div>
      </Transition>
      <div class="absolute inset-0 bg-black opacity-40"></div>

      <div class="hero-content text-neutral-content text-center">
        <div class="w-full mx-auto max-w-4xl">
          <h1 class="headline uppercase mb-5 text-3xl md:text-5xl font-normal">Streamlined Integration Solutions for Industrial Automation</h1>
          <div class="headline mb-5 text-2xl my-6 font-light">
            Control Systems Integration Services | Irvine
          </div>
          <ContactButton classes="btn btn-soft btn-primary btn-lg my-4 border border-2 border-primary" />
        </div>
      </div>
    </div>
  </section>
</template>
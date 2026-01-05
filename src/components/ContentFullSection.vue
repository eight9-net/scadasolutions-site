<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    button: {
      type: Boolean,
      default: true,
    },
    buttonText: {
      type: String,
      required: false,
    },
    contentClasses: {
      type: String,
      required: false,
      default: 'text-center text-white',
    },
  });
</script>
<template>
  <section :class="`${props.name}-section my-10 pt-10`">
    <div class="scroll-target" :id="props.id">&nbsp;</div>
    <div
      class="service-and-support-container fixed-bg"
      :style="`background-image: url(${$getImageUrl(props.image)});`"
    >
      <div class="h-full w-full backdrop-brightness-60 m-0">
        <div class="w-auto">
          <div :class="`container mx-auto px-5 md:px-40 ${props.name}-container py-25`">
            <div :class="props.contentClasses">
              <h2 class="headline text-3xl font-normal mb-10">{{ props.title }}</h2>

              <slot />

              <div class="mx-auto my-5" v-if="props.button">
                <ContactButton :buttonText="props.buttonText" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import { computed } from 'vue';
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
    buttonRoute: {
      type: String,
      required: false,
    },
    contentClasses: {
      type: String,
      required: false,
      default: 'text-center text-white',
    },
    backdropClasses: {
      type: String,
      required: false,
      default: 'backdrop-brightness-60',
    },
    containerClasses: {
      type: String,
      required: false,
      default: 'container mx-auto px-5 md:px-40 py-25',
    },
    bgClasses: {
      type: String,
      required: false,
      default: 'fixed-bg',
    },
  });

  const getImageUrl = (filename) => {
    return new URL(`/public/images/${filename}`, import.meta.url).href;
  }

  const bgStyleComputed = computed(() => {
    return props.image ? `background-image: url(${getImageUrl(props.image)});` : '';
  });

  const bgClassesComputed = computed(() => {
    return props.image ? `${props.bgClasses}` : '';
  });

</script>
<template>
  <section :class="`${props.name}-section my-10 pt-10`">
    <div class="scroll-target" :id="props.id">&nbsp;</div>
    <div
      :class="bgClassesComputed"
      :style="bgStyleComputed"
    >
      <div class="h-full w-full m-0">
        <div class="w-auto" :class="props.backdropClasses">
          <div :class="`${props.containerClasses} ${props.name}-container`">
            <div :class="props.contentClasses">
              <h2 class="headline text-3xl font-normal mb-10" v-if="props.title">{{ props.title }}</h2>

              <slot />

              <div class="mx-auto my-5" v-if="props.button">
                <ContactButton :buttonText="props.buttonText" v-if="!props.buttonRoute" />
                <button class="btn btn-primary" v-if="props.buttonRoute" :onclick="`window.location.href='${props.buttonRoute}'`">{{ props.buttonText }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
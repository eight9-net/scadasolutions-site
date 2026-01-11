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
    buttonText: {
      type: String,
      required: false,
    },
    buttonRoute: {
      type: String,
      required: false,
    },
    contentBgColor: {
      type: String,
      required: false,
      default: '',
    },
    bgClasses: {
      type: String,
      required: false,
      default: 'bg-cover bg-top',
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

    <div :class="`${props.name}-container`">
      <div class="h-full w-full m-0">
        <div class="w-auto">
          <div class="container mx-auto">
            <div class="flex">

              <div class="flex-1 px-10 py-15" :class="props.contentBgColor">
                <h2 class="headline text-3xl font-normal mb-10 text-left">{{ props.title }}</h2>

                <slot />

                <div class="mx-auto mb-10 my-5">
                  <ContactButton :buttonText="props.buttonText" v-if="!props.buttonRoute" />
                  <button class="btn btn-primary" v-if="props.buttonRoute" :onclick="`window.location.href='${props.buttonRoute}'`">{{ props.buttonText }}</button>
                </div>
              </div>

              <div
                class="flex-1"
                :class="bgClassesComputed"
                :style="bgStyleComputed"
              >
                &nbsp;
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
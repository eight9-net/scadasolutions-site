<script setup>
  import { useGetImageUrl } from '../composables/utils';
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
    contentBgColor: {
      type: String,
      default: '',
    },
  });
</script>
<template>
  <section :class="`${props.name}-section my-10 pt-10`">

    <div class="scroll-target" :id="props.id">&nbsp;</div>

    <div :class="`${props.name}-container`">
      <div class="w-full h-full m-0">
        <div class="w-auto">
          <div class="container mx-auto">
            <div class="flex">

              <div
                class="flex-1 bg-top bg-cover"
                :style="`background-image: url(${useGetImageUrl(props.image)});`"
              >
                &nbsp;
              </div>

              <div class="flex-1 px-10 py-15" :class="props.contentBgColor">
                <h2 class="mb-10 text-3xl font-normal text-left headline">{{ props.title }}</h2>

                  <slot />

                <div class="mx-auto my-5 mb-10">
                  <ContactButton :buttonText="props.buttonText" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
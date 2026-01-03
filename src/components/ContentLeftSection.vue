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
    buttonText: {
      type: String,
      required: false,
    },
    contentBgColor: {
      type: String,
      required: false,
      default: '',
    },
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
                <p class="mx-auto">
                  <slot />
                </p>
                <div class="mx-auto mb-10 my-5">
                  <ContactButton :buttonText="props.buttonText" />
                </div>
              </div>

              <div
                class="flex-1 bg-cover bg-top"
                :style="`background-image: url(${$getImageUrl(props.image)});`"
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
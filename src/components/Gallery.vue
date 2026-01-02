<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const isModalOpen = ref(false);
const currentFullSrc = ref('');
const currentAlt = ref('');

const openModal = (src, alt) => {
  currentFullSrc.value = src;
  currentAlt.value = alt;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  currentFullSrc.value = '';
  currentAlt.value = '';
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <div>

    <div class="grid grid-cols-2 gap-4">
      <div
        v-for="(image, index) in props.images"
        :key="index"
        @click="openModal(image.src, image.alt)"
        class="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:opacity-75 transition duration-300 flex-1 m-2"
      >
        <img
          :src="$getImageUrl(image.src)"
          :alt="image.alt"
          class="w-full h-48 object-cover"
        />
      </div>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      @click.self="closeModal"
    >
      <div class="relative max-w-3xl max-h-full overflow-auto">
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-white text-3xl font-bold p-2 bg-gray-800 rounded-full hover:bg-gray-700 border border-white cursor-pointer"
        >
          <FontAwesomeIcon :icon="['fa', 'times']" />
        </button>
        <img
          :src="$getImageUrl(currentFullSrc)"
          :alt="currentAlt"
          class="max-w-full max-h-screen object-contain"
        />
      </div>
    </div>
  </div>
</template>

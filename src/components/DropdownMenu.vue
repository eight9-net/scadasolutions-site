<script setup>

import { shallowRef } from 'vue';
import { vElementHover } from '@vueuse/components';

const props = defineProps({
  title : {
    type: String,
    required: true
  },
  link: {
    type: Object,
    required: false
  },
  links : {
    type: Array,
    required: true
  }
});

const isHovered = shallowRef(false);

function onHover(state) {
  isHovered.value = state;
}

</script>

<template>
  <li>
    <details v-element-hover="[onHover, { delayEnter: 300 }]" :open="isHovered">
      <summary>
        <router-link :to="link" v-if="link">{{ title }}</router-link>
        <span v-else>{{ title }}</span>
      </summary>
      <ul class="bg-base-100 rounded-t-none p-2 w-52 subnav">
        <li v-for="(item, index) in links" :key="index">
          <router-link :to="{ name: item.name, hash: item.hash }">{{ item.title }}</router-link>
        </li>
      </ul>
    </details>
  </li>
</template>

<style scoped>
  .navbar .subnav {
    margin-block-start: 0px;
  }
</style>
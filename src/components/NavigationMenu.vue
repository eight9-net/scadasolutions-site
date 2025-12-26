<script setup>
// Header component
const props = defineProps({
  classes: {
    type: String,
    default: 'menu menu-horizontal px-1 dropdown-hover'
  }
});

import { vElementHover } from '@vueuse/components';
import { ref, shallowRef } from 'vue';
import DropdownMenu from './DropdownMenu.vue';

const isHovered = ref(false);

function onHover(state, foo) {
  isHovered.value = state;
  console.log('hover state:', state, foo);
}

const links = shallowRef({
  home: [
    { name: 'home', hash: '#faqs', title: 'FAQs' },
    { name: 'home', hash: '#contact', title: 'Contact Us' },
  ],
  products: [
    { name: 'scada', title: 'SCADA' },
    { name: 'communications', title: 'Communications' },
    { name: 'scopeofworkprocess', title: 'Scope of Work Process' },
    { name: 'requestaquote', title: 'Request a Quote' },
  ],
  company: [
    { name: 'company', hash: '#profile', title: 'Company Profile' },
    { name: 'company', hash: '#partners', title: 'Partners and Affiliations' },
    { name: 'company', hash: '#privacy', title: 'Privacy' },
  ],
  services: [
    { name: 'home', hash: '#DesignAndEngineering', title: 'Design and Engineering' },
    { name: 'home', hash: '#Integration', title: 'Integration' },
    { name: 'home', hash: '#Installation', title: 'Installation' },
    { name: 'home', hash: '#ServiceAndSupport', title: 'Service and Support' },
    { name: 'home', hash: '#SolarServices', title: 'Solar Services' },
  ],
  windpower: [
    { name: 'windenergytutorial', title: 'Wind Energy Tutorial' },
    { name: 'windfacts', title: 'Wind Facts' },
    { name: 'glossary', title: 'Glossary' },
  ],
  news: [
    { name: 'news', hash: '#latest', title: 'Latest News' },
    { name: 'news', hash: '#archive', title: 'News Archives' },
  ],
  careers: [
    { name: 'careers', hash: '#NorthAmericanJobs', title: 'North American Jobs' },
    { name: 'careers', hash: '#EuropeanUnionJobs', title: 'European Union Jobs' },
    { name: 'careers', hash: '#PrivacyPolicy', title: 'Applicant Privacy Policy' },
  ],
});

</script>

<template>
  <ul :class="props.classes">
    <DropdownMenu title="Home" :link="{name: 'home'}" :links="links.home" />
    <DropdownMenu title="Products" :links="links.products" />
    <DropdownMenu title="Company" :link="company" :links="links.company" />
    <DropdownMenu title="Services" :links="links.services" />
    <DropdownMenu title="Wind Power" :links="links.windpower" />
    <DropdownMenu title="News" :links="links.news" />
    <DropdownMenu title="Careers" :links="links.careers" />
  </ul>
</template>


<style scoped>
  .navbar .subnav {
    margin-block-start: 0px;
  }
</style>
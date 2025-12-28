<script setup>
// Header component
const props = defineProps({
  classes: {
    type: String,
    default: 'menu menu-horizontal px-1'
  },
  hover: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  },
});
import { shallowRef } from 'vue';
import DropdownMenu from './DropdownMenu.vue';


const links = shallowRef({
  home: [
    { name: 'home', hash: '#FAQs', title: 'FAQs' },
    { name: 'home', hash: '#ContactUs', title: 'Contact Us' },
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
    <DropdownMenu title="Home" :links="links.home" :hover="props.hover" :border="props.border" />
    <DropdownMenu title="Products" :links="links.products" :hover="props.hover" :border="props.border" />
    <DropdownMenu title="Company" :links="links.company" :hover="props.hover" :border="props.border" />
    <DropdownMenu title="Services" :links="links.services" :hover="props.hover" :border="props.border" />
    <DropdownMenu title="Wind Power" :links="links.windpower" :hover="props.hover" :border="props.border" />
    <DropdownMenu title="News" :links="links.news" :hover="props.hover" :border="props.border" />
    <DropdownMenu title="Careers" :links="links.careers" :hover="props.hover" :border="props.border" />
  </ul>
</template>


<style scoped>
  .navbar .subnav {
    margin-block-start: 0px;
  }
</style>
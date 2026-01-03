<script setup>
  import HomeHero from '../components/HomeHero.vue';
  import HomeExplanation from '../components/HomeExplanation.vue';
  import HomeProductOverview from '../components/HomeProductOverview.vue';
  import HomeDesignEngineering from '../components/HomeDesignEngineering.vue';
  import HomeServiceAndSupport from '../components/HomeServiceAndSupport.vue';
  import HomeIntegration from '../components/HomeIntegration.vue';
  import HomeInstallation from '../components/HomeInstallation.vue';
  import HomeSolar from '../components/HomeSolar.vue';
  import HomeWind from '../components/HomeWind.vue';
  import HomeFaq from '../components/HomeFaq.vue';
  import HomeContactSection from '../components/HomeContactSection.vue';

</script>

<template>
  <div class="home">

    <HomeHero />


    <!-- Home Content -->

    <HomeExplanation />

    <HomeProductOverview />


    <!-- Services Content -->

    <HomeDesignEngineering />

    <HomeServiceAndSupport />

    <HomeIntegration />

    <HomeInstallation />

    <HomeSolar />

    <HomeWind />


    <!-- Home Misc -->

    <HomeFaq />

    <HomeContactSection />

  </div>
</template>

<style scoped>

</style>

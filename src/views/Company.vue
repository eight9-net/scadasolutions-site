<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ContentFullSection from '../components/ContentFullSection.vue';
import ContentLeftSection from '../components/ContentLeftSection.vue';
import ContentRightSection from '../components/ContentRightSection.vue';
import ProductsHero from '../components/PageHero.vue';
import Gallery from '../components/Gallery.vue';

</script>

<template>
  <div class="about-company">
    <ProductsHero
      title="About Our Company"
      subtitle="Control Systems Integration Services in Irvine"
    />

    <ContentLeftSection
      name="company-profile"
      id="Profile"
      image="turbines-clouds.webp"
      title="Company Profile"
      contentClasses="text-left text-black"
      bgClasses="bg-white bg-bottom"
      backdropClasses=""
      containerClasses="container mx-auto px-5"
      buttonText="Get in Touch"
    >
      <p class="mx-auto my-10">
        SCADA Solutions specializes in restoring infrastructure integrity through the integration of communications and SCADA systems. We provide complete design, engineering, installation, and service of communications and SCADA systems, fiber optics, and cable assemblies, and we offer the latest technologies in smart packet radios. The results are a completely integrated control design essential to the utilization and maintenance of critical renewable energy assets.
      </p>
      <p class="mx-auto my-10">
        Our expertise in system design engineering of complete SCADA solutions, coupled with our experienced and professional installation knowledge, allows for seamless delivery and implementation with minimal operational interruption. Our superior communication, automation, and integration capabilities and ability to serve all brands of turbines, both old and new, set us apart from other third-party SCADA providers. (use first two paragraphs on front page of home and link to 'read more...')
      </p>
      <p class="mx-auto my-10">
        Optimal production goals place increased demand on accurate fault detection, consistent data collection and trending, secure remote access, and other industry challenges. SSI's wide array of scalable and automated solutions builds reliability and accuracy into your new or existing cyber infrastructure.
      </p>
      <p class="mx-auto my-10">
        The explosive growth in wind energy validates the ongoing wide-scale adoption of this legitimate alternative to traditional energy sources. A sound, intelligent network with reliable communications and a functional SCADA management system is essential to optimizing your critical wind energy assets. Let SCADA Solutions provide the answers.
      </p>
    </ContentLeftSection>


    <ContentFullSection
      name="partners-affiliations"
      id="Partners"
      image="turbines-sunset.webp"
      title="Partners / Affiliations"
      contentClasses="text-left text-black"
      bgClasses="bg-white bg-bottom"
      backdropClasses=""
      containerClasses="container mx-auto px-5"
      :button="false"
    >
      <Gallery
        :images="[
          { src: 'awea.webp', alt: 'American Wind Energy Association', url: 'https://www.awea.org/' },
          { src: 'opto22.svg', alt: 'OPTO 22', url: 'https://www.opto22.com/' },
          { src: 'landisgyr.webp', alt: 'Landis + Gyr', url: 'https://www.landisgyr.com/' },
          { src: 'dwpa.webp', alt: 'Danish Wind Power Academy', url: 'https://www.danishwpa.com/' },
        ]"
        cols="2"
      />
    </ContentFullSection>


    <ContentRightSection
      name="privacy-policy"
      id="Privacy"
      image="privacy-policy.jpg"
      title="Privacy"
    >
      <p class="mx-auto my-10">
        Copyright Information and Privacy Policy: This website and all its contents are copyright {{ siteProperties.companyName }}. If you believe there are errors or wish to submit general inquiries about the site, please contact us.
      </p>
      <p class="mx-auto my-10">
        {{ siteProperties.companyName }} is not responsible for content on pages linked to outside our network. We take every precaution to protect your privacy. If you have concerns, questions, or comments about your privacy in your dealings with {{ siteProperties.companyName }}, please contact us.
      </p>
    </ContentRightSection>

  </div>
</template>
<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ContentFullSection from '../components/ContentFullSection.vue';
import ContentLeftSection from '../components/ContentLeftSection.vue';
import ContentRightSection from '../components/ContentRightSection.vue';
import ProductsHero from '../components/PageHero.vue';


</script>

<template>
  <div class="scope-of-work-process">
    <ProductsHero
      title="Scope of Work Process"
      subtitle="Every project and situation contains its own unique challenges, needs, and desires. We custom engineer solutions, from the communications network and database storage to software design, installation, and support. Our processes for success are meticulously thought out and professionally implemented as follows:"
    />

    <ContentFullSection
      name="sow-research-analysis"
      id="ResearchAnalysis"
      image=""
      title="Research and Analysis Phase"
      contentClasses="text-left text-black"
      bgClasses="bg-white"
      backdropClasses=""
      containerClasses="container mx-auto px-5"
      :button="false"
    >
      <p class="mx-auto my-10">
        We begin by gathering all documentation pertaining to the existing SCADA and communications systems from the client, as well as any information available on the turbine PLC hardware and software protocols. We then perform a site visit to evaluate the existing communications systems and all ancillary communications links. We will also determine infrastructure requirements and assess structural mounting specifications and installation requirements in accordance with the client's needs while on site. We will 'capture' clients' communications codes from the CO and also directly from the tower for data acquisition, whenever possible. During our visit, we will also download and begin analyzing the existing SCADA platform(s) currently running. While constantly evaluating the data collected while on site, our engineering team will now conduct its final review and appraisal process. After completing our comparative analysis of all existing systems and determining feasibility options, we will make recommendations for necessary upgrades and/or retrofits. We then work with the client to identify the scope of work that best fits their needs, both operationally and financially. After a systems solution has been agreed upon, cost estimates are submitted for approval.
      </p>
    </ContentFullSection>


    <ContentFullSection
      name="sow-design-development"
      id="DesignDevelopment"
      image=""
      title="Design and Development Phase"
      contentClasses="text-left text-black"
      bgClasses="bg-white"
      backdropClasses=""
      containerClasses="container mx-auto px-5"
      :button="false"
    >
      <p class="mx-auto my-10">
        Using the information assembled and conclusions achieved during due diligence, we will design and develop a complete solution based on the scope of work. The detailed, professional programming of WindCaptureTM is customized to the client's requests. This includes identifying the appropriate components and disciplines to integrate, configuration details, and installation specifications, and ensuring optimal efficiency and effectiveness of the final product(s).
      </p>
    </ContentFullSection>


    <ContentFullSection
      name="sow-build-test"
      id="BuildTest"
      image=""
      title="Build Out and Test Phase"
      contentClasses="text-left text-black"
      bgClasses="bg-white"
      backdropClasses=""
      containerClasses="container mx-auto px-5"
      :button="false"
    >
      <p class="mx-auto my-10">
        Wherever applicable, and usually whenever possible, we will simulate as much as practical off site. We will set up all software and hardware components, mount and/or connect all equipment, communication cabling, fiber optics, radios, etc., and coordinate any ancillary needs from the client. We will then conduct off-site acceptance tests of the installation prior to start up. Acceptance test periods will vary depending on the complexity of the design.
      </p>
    </ContentFullSection>


    <ContentFullSection
      name="sow-rollout-support"
      id="RolloutSupport"
      image=""
      title="Rollout and Support"
      contentClasses="text-left text-black"
      bgClasses="bg-white"
      backdropClasses=""
      containerClasses="container mx-auto px-5"
      :button="false"
    >
      <p class="mx-auto my-10">
        Our experience ensures the complete and timely implementation of all network solutions and integrations with minimal disruption to vital business operations and functions. We will work closely with clients' field staff and management for a smooth installation through on-site pre-installation meetings, post-installation adjustments, and tech support.
      </p>
      <p class="mx-auto my-10">
        Although the process seems tedious, these are necessary steps for a reliable system. Beware of 'off-the-shelf' fixes when it comes to your SCADA system. Many designs will not 'talk' to your existing protocols, which include VPCs, PLCs, RF, and other communications systems.
      </p>
    </ContentFullSection>


    <ContentFullSection
      name="sow-project-management"
      id="ProjectManagement"
      image=""
      title="Project Management"
      contentClasses="text-left text-black"
      bgClasses="bg-white"
      backdropClasses=""
      containerClasses="container mx-auto px-5"
      :button="false"
    >
      <p class="mx-auto my-10">
        Creating, coordinating, and deploying business solutions on time and within budget require a disciplined approach. As a result, with our experience in multiple fields of SCADA and communication systems, we have consistently evolved our methodology to meet the needs of our clients along with the demands of technology's growing pace.
      </p>
      <p class="mx-auto my-10">
        Our project management program ensures project completion through all phases of research, design, development, construction, and deployment. Our team is always available and covers:
      </p>
      <p class="mx-auto my-10">
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-blue-400 mx-1" /> Quality Assurance<br />
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-blue-400 mx-1" /> Status Updates<br />
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-blue-400 mx-1" /> Integration Support<br />
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-blue-400 mx-1" /> Timelines, Budget, and Scope Review<br />
        <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-blue-400 mx-1" /> Communication Planning<br />
      </p>
      <p class="mx-auto my-10">
        Our engineering team, management, and staff are confident in our abilities to produce and deliver an economically feasible solution to fully restore and/or upgrade communications and SCADA systems in most situations. If, however, we are unable to provide a solution that meets your needs or challenges, we will offer our experience, expertise, and best efforts to help you find one. Our end goal is to provide the products, services, and resources to help service our clients' requirements and wishes in any manner we can.
      </p>
    </ContentFullSection>


  </div>
</template>

<style scoped>

</style>

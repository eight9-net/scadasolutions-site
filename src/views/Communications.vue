<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ContentFullSection from '../components/ContentFullSection.vue';
import ContentLeftSection from '../components/ContentLeftSection.vue';
import ContentRightSection from '../components/ContentRightSection.vue';
import ProductsHero from '../components/PageHero.vue';


</script>

<style scoped>

</style>

<template>
  <ProductsHero title="Communications" />

  <ContentLeftSection
    name="distributed-automation"
    id="DistributedAutomation"
    image="solar-blur-bg.webp"
    title="Distributed Automation"
    contentBgColor="bg-white/90"
    >
    <p class="mx-auto my-10">
      SCADA Solutions has teamed with communications innovator Landis+Gyr, a worldwide leader in electricity metering and energy management, to integrate advanced radio technologies into the wind industry.
    </p>
    <p class="mx-auto my-10">
      Distributed automation solutions require several key elements, from the end devices to the host application, with a strong communication network in between. Inherent features of the communication network include real-time two-way communications, scalability, reliability with self-healing capabilities, and a high level of security while being cost-effective for today's deployments. Three critical technologies from Landis+Gyr allow SCADA Solutions to integrate and create its intelligent windfarm communications networks: an RF mesh architecture with peer-to-peer communication and network functionality; asynchronous spread spectrum frequency hopping for maximum use of bandwidth; and packet switching for automatic error checking, retries, and store-and-forward routing.
    </p>
    <p class="mx-auto my-10">
      Landis+Gyr's full two-way wireless RF mesh communication network, currently used by more than 200 utilities worldwide for distribution automation and SCADA controls, is an integral piece of SSI's windfarm communications solutions. The distributed automation radios form the foundation of an RF mesh network and serve multiple functions. Each radio can communicate with end devices for data collection, monitoring, or control functions. This may involve transparent applications where data is merely passed through the network. Or it may involve programs running within the radios and/or other gateway devices to perform custom applications, increase network efficiency, or enhance network functionality. Additionally, each radio interacts with its neighboring radios to form a wide area network (WAN), into which it may initiate a packet, automatically route a packet between other radios, or accept a packet as the final destination.
    </p>
    <p class="mx-auto my-10">
      SCADA Solutions' strategic partnership with Landis+Gyr allows the company to deliver the most advanced radio technologies available in the marketplace. Landis+Gyr has over 5,000 employees, including 600 full-time professionals dedicated to R&D and operations, in 30 countries across five continents. The partnership is committed to providing end-to-end, advanced communications solutions that will empower the next generation of smart grid wind farms.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    name="applications-engineering"
    id="ApplicationsEngineering"
    image="solar-blur-bg.webp"
    title="Applications Engineering"
    contentBgColor="bg-gray-200"
    >
    <p class="mx-auto my-10">
      Our highly qualified applications engineers are experts in the application of fiber optic media, cables, connectors, and hardware. No matter how complex or challenging your requirements, our team can develop a custom solution that's reliable, mitigates risk, and helps speed up project implementation schedules. SCADA Solutions' engineers are skilled at designing the most advanced single- and multi-mode cable assemblies, guaranteeing to meet even the most stringent connector and cable specifications. We work with you to solve cable-related problems and help lower project costs by facilitating creative solutions.
    </p>
  </ContentRightSection>

  <ContentFullSection
    name="fiber-optic-solutions"
    id="FiberOpticSolutions"
    image="solar-blur-bg.webp"
    title="Fiber Optic Termination"
    contentClasses="text-left text-white"
    >
    <p class="mx-auto my-10">
      SCADA Solutions is a leader in the application of cutting-edge fiber optic terminations and splicing methods. No matter the number or complexity of your fiber optic terminations, our Applications Specialists can help you select the right component for each step in the termination and assembly process.
    </p>
    <p class="mx-auto my-10">
      Customers have confidence that every assembly has been manufactured to your exact specifications using brand-name products. They know that every assembly has been fully tested to international industry standards before it leaves our door. Our streamlined work order system, audited under the ISO 9001:2000 standards, ensures that each project is completed on time and as specified.
    </p>
    <p class="mx-auto my-10">
      Available in any length, on spools when applicable<br />
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-blue-400 mx-1" /> 1-288 fiber cable in single-mode and multi-mode<br />
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-blue-400 mx-1" /> Choose your connector type or combination<br />
      Cable is available from industry-leading manufacturers<br />
    </p>
  </ContentFullSection>

  <ContentRightSection
    name="harsh-environments"
    id="HarshEnvironments"
    image="solar-blur-bg.webp"
    title="Harsh Environment Assemblies"
    buttonText="Request Service"
    contentBgColor="bg-white/90"
    >
    <p class="mx-auto my-10">
      Harsh Environment Assemblies Mil-qualified assemblies are built to withstand the demands of the most rigorous environments and applications. These assemblies are ideal for any application where standard assemblies would be damaged by chemical, environmental, or physical stresses. Available features include hybrid assemblies, copper/fiber combinations, and multimode and single mode termini. Request these series and more:
    </p>
    <p>
      <FontAwesomeIcon icon="fa-solid fa-chevron-right" class="text-blue-400 mx-1" /> Hermaphroditic connectors for conditions where end-to-end connector flexibility is necessary<br />
      M28876 is designed for shipboard and ship-to-shore applications<br />
      D38999 is designed for tactical or industrial applications<br />
      Mil Spec ST-QPL Military ST fiber optic connector
    </p>
  </ContentRightSection>

</template>


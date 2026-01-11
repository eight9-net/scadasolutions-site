<script setup>
  import { ref } from 'vue';
  import ProductsHero from '../components/PageHero.vue';
  import Gallery from '../components/Gallery.vue';
  import ContentFullSection from '../components/ContentFullSection.vue';
  import ContentLeftSection from '../components/ContentLeftSection.vue';

  const fileUrl = (filename) => {
    return new URL(`/public/files/${filename}`, import.meta.url).href;
  }
  const lalamiloPdfRef = ref(fileUrl('Lala_Presentation.pptx'));

</script>

<style scoped>

</style>

<template>
  <ProductsHero title="SCADA" />

  <section class="scada-section my-10 pt-10">
    <div class="scroll-target" id="ScadaSolutions">&nbsp;</div>
    <div class="scada-container mx-auto text-base/8">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 align-top">
        <div class="w-auto mx-10">
          <div class="my-5">
            <h2 class="headline text-3xl md:text-4xl font-normal mb-10 text-left">Seamless SCADA Solutions for Uninterrupted Operations</h2>
            <p class="mx-auto mb-10">SCADA Solutions' flagship product, WindCapture&trade;, is a Supervisory Control and Data Acquisition (SCADA) software package used for monitoring, controlling, data collection, and reporting for wind turbine generators (WTG). It was designed and tailored to the demands of manufacturers, operators, developers, and maintenance managers of wind energy projects and facilities. Nearly a year in the making, the results are a completely integrated control design essential to the utilization and maintenance of critical renewable energy assets.</p>
            <p class="mx-auto mb-10">Regardless of the make of turbines in your project(s), SSI customizes WindCapture&trade; with every installation to ensure the reliable flow and presentation of needed data. The system also combines a comprehensive database management system for standardized and customized operations reports with powerful analytic graphs, charts, tables, and other tools. You can use preset timetables or input any time period parameter and easily export to Excel&trade;.</p>
            <p class="mx-auto mb-10">WindCapture&trade; has numerous usable, integrated functions that work with your infrastructure's communications network. Some of the various valuable features include:</p>

            <h4 class="headline text-xl font-bold mb-5 mt-10 text-blue-400">Scalability</h4>
            <p class="mx-auto mb-10">The SCADA systems currently found on many larger wind farms and farms consisting of older turbines have difficulty dealing with expansion and suffer from significant performance drops as a farm grows since they lack scalability. WindCapture&trade; is engineered to handle any number of turbines and is easily upgraded to sustain any future growth. SSI can connect your projects and your various farms together. Our design platforms also support projects consisting of several different types of turbines.</p>
            <p class="mx-auto mb-10">As wind generation becomes increasingly widespread, it is necessary that operating SCADA systems are also compatible with enterprise systems. Additionally, they need to report data to enterprise resource planning (ERP), supply chain, financial, and operating systems. If a user requires specific plant information, they will be able to access it remotely without having to place a telephone call to transmit the data.</p>

            <h4 class="headline text-xl font-bold mb-5 mt-10 text-blue-400">Reporting</h4>
            <p class="mx-auto mb-10">In addition to minimizing the amount of data lost, SSI's WindCapture&trade; systems provide real-time reporting with the highest degree of accuracy. If operators are able to quickly identify and measure the issues in a process, they can systematically figure out how to eliminate them and get as close to a zero forced outage rate as possible. Additionally, trend and analysis reporting is increasingly important for owners and operators. Production curves, optimization graphs, and comparative analysis reports are a simple point-and-click away and can be easily exported to Excel&trade; for further manipulation and presentation.</p>
          </div>
        </div>

        <div class="w-auto mx-auto mx-10 my-10 max-w-2xl">
          <Gallery :images="[
            { src: 'windcapture-01-1920w.webp', alt: 'SCADA Solutions 1' },
            { src: 'windcapture-02-1920w.webp', alt: 'SCADA Solutions 2' },
            { src: 'windcapture-03-1920w.webp', alt: 'SCADA Solutions 3' },
            { src: 'windcapture-04-1920w.webp', alt: 'SCADA Solutions 4' },
          ]" cols="1" />
        </div>

      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 align-top">

        <div class="w-auto mx-10">
          <div class="my-5">
            <h4 class="headline text-xl font-bold mb-5 mt-10 text-blue-400">Automation</h4>
            <p class="mx-auto mb-10">WindCapture&trade; offers an unprecedented level of automation. Automated curtailment easily handles curtailment setpoints from the power-outtaker, or CAISO, and allows operators to define which turbines, or groups of turbines, will be curtailed. Turbines are shut down or brought on-line to match the curtailment setpoint as the wind changes. Autorun modules allow operators to define when turbines run based on environmental conditions such as wind direction, wind speed, time of day, and turbine-specific setpoints like hydraulic, gear, or bearing temperatures. Market reactive modules allow operators to set curtailment points based on real-time or next-interval market pricing from CAISO. Gain some peace of mind knowing that your profits won't disappear during negative pricing events.</p>

            <h4 class="headline text-xl font-bold mb-5 mt-10 text-blue-400">Advanced GUI</h4>
            <p class="mx-auto mb-10">It is essential for operators of wind farms to have an advanced graphic user interface (GUI) that displays accurate data in real-time. WindCapture&trade; offers complete form-based GUI software that is remotely accessible and easily navigated by authorized operators. The GUI displays all of the monitoring sensors from a particular project or farm, with detailed information on each turbine. This advanced system also allows the authorized user to dynamically change parameters that may change, such as fault detection values of wind speed or the maintenance schedule for a particular pole.</p>
          </div>
        </div>

        <div class="w-auto mx-10">
          <div class="my-5">
            <h4 class="headline text-xl font-bold mb-5 mt-10 text-blue-400">Remote Access Capabilities</h4>
            <p class="mx-auto mb-10">Enormous growth in the shear number of turbines per project, not to mention the vast territory where any one field may reside, has made remote access capabilities far more than just a convenience. Efficiencies are needed in detecting, analyzing, and solving the every-day problems encountered on wind farms that prohibit production and decrease productivity.</p>
            <p class="mx-auto mb-10">SCADA Solutions solves these challenges by utilizing a technology platform that supports data reporting, alarms, and status updates to operators via the web, SMS, e-mail, or even remotely by supporting mobile platforms such as iOS and Android. Turbines are now being reset from the central office or from your living room. Fault codes can be sent to your maintenance crew's cell phones with detailed error detection information. Meter reading and predictive maintenance scheduling are now being done miles away from the pole. Information accessibility has become increasingly vital to the operations, productivity, and maintenance of wind projects.</p>
            <p class="mx-auto mb-10">WindCapture&trade; represents a complete windfarm computer monitoring and control system for almost any turbine. Each and every system is customized to your specific needs by our engineers and meets the most demanding requirements. Its open architecture allows for easy troubleshooting, upgrades, and internal modifications and advancements. To learn more about its advantages and how WindCapture&trade; can support, improve, and assist you in better managing your wind assets, please contact one of our solutions experts.</p>
          </div>
        </div>

      </div>

      <ContentFullSection
        name="scada-projects"
        id="ScadaProjects"
        image="MixingWindWater-2880w.webp"
        bgClasses="bg-cover bg-contain"
        contentClasses="text-center text-black bg-white/55 p-5"
        title="Take a Look at our Projects"
        buttonText="Download to Learn More"
        :buttonRoute="lalamiloPdfRef"
      >
        <h1 class="headline text-2xl font-normal mb-10 text-center uppercase">Lalamilo Wind Farm</h1>
        <p class="mx-auto mb-5">The Lalamilo Wind Farm integrates the Wind Energy produced on site to meet the power requirements needed to operate and monitor the various Department of Water Supply resources in the area.</p>
        <p class="mx-auto mb-10">These systems are uniquely specialized and are comprised of two independent SCADA (Supervisory Control And Data Acquisition) systems working in parallel while communicating and sharing data to achieve maximum efficiency. </p>
      </ContentFullSection>

      <ContentLeftSection
        name="scada-water-treatment"
        id="ScadaWaterTreatment"
        image="WaterTreatment-1920w.webp"
        imageClass="w-full min-w-[600px] h-auto"
        title="Advanced Water Treatment"
        buttonText="Get in Touch"
        bgClasses="bg-cover bg-contain"
      >
        <p class="mx-auto my-10">
          Discover the power of SCADA systems, pivotal in enhancing water treatment processes through comprehensive real-time monitoring, precise control, insightful data analysis, and effective alert management. These advanced systems are designed to ensure unparalleled water quality and operational efficiency, safeguarding our most vital resource.
        </p>
      </ContentLeftSection>

      <ContentFullSection
        name="scada-projects"
        id="ScadaProjects"
        image=""
        title=""
        :button="false"
        containerClasses="container mx-auto px-5 md:px-10 py-5"
        backdropClasses=""
      >
        <Gallery :images="[
          { src: 'PLWTP+AerialLo-1920w.webp', alt: 'SCADA Water Treatment 1' },
          { src: 'Water Treatment 3.jpg', alt: 'SCADA Water Treatment 2' },
          { src: 'Education_WWTrtmt-1920w.webp', alt: 'SCADA Water Treatment 3' },
          { src: 'basinsLo-1920w.webp', alt: 'SCADA Water Treatment 4' },
        ]" cols="4" />
      </ContentFullSection>

      <div>
        <img :src="$getImageUrl('SmartIndustryArticle-1920w.webp')" alt="Smart Industry Article" class="mx-auto my-10 w-full h-auto max-w-4xl" />
      </div>

    </div>

  </section>

</template>


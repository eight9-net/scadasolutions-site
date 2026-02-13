<script setup>
  import ContentLeftSection from '../components/ContentLeftSection.vue';
  import PageHero from '../components/PageHero.vue';
  import ListItem from '../components/ListItem.vue';
  import ContentRightSection from '../components/ContentRightSection.vue';
import ContentFullSection from '../components/ContentFullSection.vue';

</script>

<template>
  <PageHero
    title="Careers"
    subtitle="Want to help change the world? Become a member of the exciting, dynamic, and challenging world of renewable energy. SCADA Solutions specializes in restoring infrastructure integrity through the integration of communications and SCADA systems. Our products and services are as good as our winning teams, who design, engineer, integrate, install, and service them. Please check back regularly or contact our Human Resources Department for opportunities. Come and grow with us; together, we can make a difference."
    image="earth.jpg"
  />

  <ContentLeftSection
    name="north-american-jobs"
    id="NorthAmericanJobs"
    title="North American Jobs"
    image="north-america-map.jpg"
    contentBgColor=""
    :button="false"
  >
    <h3 class="mb-5 text-2xl font-bold headline">SCADA Engineer</h3>
    <p class="mb-3">
      SCADA Solutions is currently looking for talented, highly motivated, and dependable software engineers (junior and experienced) to join our team in the San Diego area. These exciting opportunities offer a chance to work in one of the nicest climates in the world (inside and outside). This is your chance to work with some of the brightest SCADA engineers in the land.
    </p>

    <h4 class="mt-5 mb-3 text-xl font-bold text-blue-400 headline">Responsibilities</h4>
    <p class="mb-3">
      You will be directly involved in developing the next generation of our flagship WindCapture&trade; product. Work will encompass all aspects of the software design and development processes in an informal but over-achieving environment.
    </p>

    <h4 class="mt-5 mb-3 text-xl font-bold text-blue-400 headline">Primary Requirements</h4>
    <p class="mb-3">
      <ListItem>Science or Technical Degree from accredited university, e.g. BS in Electrical Engineering (BSEE)</ListItem>
      <ListItem>3+ years relevant experience</ListItem>
      <ListItem>Experience with Allen Bradley PLC and FactoryTalk/RSView</ListItem>
      <ListItem>Strong communications skills (written and verbal), including ability to write detailed technical reports</ListItem>
      <ListItem>SQL and MS Access database application experience</ListItem>
      <ListItem>Experience with electronic converters and drivers</ListItem>
    </p>
    <h4 class="mt-5 mb-3 text-xl font-bold text-blue-400 headline">Compensation / Benefits</h4>
    <p class="mt-5">
      SSI offers competitive compensation packages for the right candidates and is an equal opportunity employer.
    </p>
    <p class="my-5">
      All interested candidates can email their resume and cover letter to <a class="link" :href="`mailto:${$contactEmail}?subject=SCADA%20Engineer`">{{ $contactEmail }}</a>.
    </p>



    <h3 class="mb-5 text-2xl font-bold headline mt-15">SCADA Programmer</h3>
    <p class="mb-3">
      SCADA Solutions is currently looking for talented, highly motivated, and dependable field technicians (junior and experienced) to join our team in the San Diego area. These exciting opportunities offer a chance to work in one of the fastest-growing industries in the world: renewable energy. This is your chance to work with some of the brightest engineers and technicians in the land.
    </p>

    <h4 class="mt-5 mb-3 text-xl font-bold text-blue-400 headline">Responsibilities</h4>
    <p class="mb-3">
      You will be directly involved in our cutting-edge SCADA system architecture and configuration. The work will encompass all aspects of testing, simulating, installing, and servicing our communications and SCADA software solution networks. You will be traveling to windfarm projects around the country about 30% of the time. Your involvement will include project management, server configuration, troubleshooting, and technical support.
    </p>

    <h4 class="mt-5 mb-3 text-xl font-bold text-blue-400 headline">Primary Requirements</h4>
    <p class="mb-3">
      <ListItem>Science or Technical Degree from accredited university, e.g. BS in Electrical Engineering (BSEE)</ListItem>
      <ListItem>3+ years relevant experience</ListItem>
      <ListItem>Experience with Allen Bradley PLC and FactoryTalk/RSView</ListItem>
      <ListItem>Strong communications skills (written and verbal), including ability to write detailed technical reports</ListItem>
      <ListItem>RF Communications experience</ListItem>
      <ListItem>Experience with electronic converters and drivers</ListItem>
      <ListItem>Experience with fiber optics and cable assemblies</ListItem>
      <ListItem>Experience deploying software systems</ListItem>
    </p>
    <h4 class="mt-5 mb-3 text-xl font-bold text-blue-400 headline">Compensation / Benefits</h4>
    <p class="mt-5">
      SSI offers competitive compensation packages for the right candidates and is an equal opportunity employer.
    </p>
    <p class="my-5">
      All interested candidates can email their resume and cover letter to <a class="link" :href="`mailto:${$contactEmail}?subject=SCADA%20Programmer`">{{ $contactEmail }}</a>.
    </p>
  </ContentLeftSection>

  <ContentRightSection
    name="european-union-jobs"
    id="EuropeanUnionJobs"
    title="European Union Jobs"
    image="europe-map.jpg"
    contentBgColor=""
    :button="false"
  >
    <h3 class="mb-5 text-2xl font-bold headline mt-15">No Current Openings.</h3>
  </ContentRightSection>


  <ContentLeftSection
    name="applicant-privacy-policy"
    id="PrivacyPolicy"
    title="Applicant Privacy Policy"
    image="privacy-policy.jpg"
  >
    <p class="mb-10">
      SCADA Solutions respects the privacy of any personal information we obtain in connection with your application for employment. Your personal information will be used to determine your suitability for a position within SSI and, if applicable, your terms of employment or engagement. Your details may be held in paper or electronic form for up to two years. SSI may disclose your details to verify or obtain additional information about you from third parties, including education claims, previous employment, and references.
    </p>
    <p class="mb-10">
      We take every precaution to protect your privacy. If you have concerns, questions, or comments about your privacy in your dealings with SCADA Solutions, please contact us.
    </p>
  </ContentLeftSection>
</template>
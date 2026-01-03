
<template>
  <div class="flex">

    <div
      class="flex-1 bg-cover bg-top"
      :style="`background-image: url(${$getImageUrl('turbine.webp')});`"
    >
      &nbsp;
    </div>

    <div class="flex-1 px-10 py-15 bg-base-200">
      <h2 class="headline text-3xl font-normal mb-10 text-left">Tailored Design and Engineering Solutions by Expert Professionals</h2>
      <p class="mx-auto">Our team of skilled engineers and designers is ready to support you with your design and engineering requirements. We provide detailed, expert programming tailored to meet your specific requests and needs. This encompasses identifying the right components and disciplines for integration, determining configuration details and installation specifications, and guaranteeing the utmost efficiency and effectiveness of the final product.</p>
      <div class="mx-auto mb-10">
        <ContactButton buttonText="Reach Out" />
      </div>
    </div>

  </div>
</template>
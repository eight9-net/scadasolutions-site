
<template>
  <div class="relative md:flex">

    <div class="md:hidden flex-1 bg-cover bg-top absolute inset-0 z-10 "
      :style="`background-image: url(${$getImageUrl('turbines-clouds.webp')});`">
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <div class="flex-1 mx-5 py-10 z-20 text-white text-center md:text-left md:text-black relative">
      <h2 class="headline text-3xl font-normal my-10">Empowering Industries with Wind SCADA Solutions</h2>
      <p class="mx-auto">We specialize in providing control system integration for windpower projects. With our expertise and experience, we have successfully completed automation and communication systems for nearly every industrial application, including wind farms. Our team is dedicated to delivering reliable and efficient solutions that optimize the performance of wind turbines and ensure seamless operations. Whether it's designing advanced monitoring and control systems or implementing innovative communication technologies, we have the knowledge and skills to support the growth of the windpower industry. Let us help you maximize the potential of your windpower projects with our comprehensive control system integration services.</p>
      <div class="mx-auto mb-10">
        <ContactButton />
      </div>
    </div>

    <div
      class="hidden md:flex-1 md:block bg-cover bg-top"
      :style="`background-image: url(${$getImageUrl('turbines-clouds.webp')});`"
    >
      &nbsp;
    </div>

  </div>
</template>
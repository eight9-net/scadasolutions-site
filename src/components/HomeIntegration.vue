<template>
  <div class="relative md:flex">

    <div class="md:hidden flex-1 bg-cover bg-top absolute inset-0 z-10"
      :style="`background-image: url(${$getImageUrl('turbines.webp')});`">
      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <div class="flex-1 mx-5 py-10 z-20 text-white text-center md:text-left md:text-black relative">
      <h2 class="headline text-3xl font-normal my-10">SCADA Solutions Integration</h2>
      <p class="mx-auto">Integration has become increasingly fundamental given the rising number of IT components that must interact in today's wind farm environment. Our engineers and installers are experts in system integration and configuration. We can design a new platform to be compatible with nearly every component of an existing infrastructure. Through technology, we're able to combine, retrofit, or replace any or all of a project's entire network. Please contact us or phone us to speak with a solutions expert and learn more about our integration services.</p>
      <div class="mx-auto mb-10">
        <ContactButton />
      </div>
    </div>

    <div
      class="hidden md:flex-1 md:block bg-cover bg-top"
      :style="`background-image: url(${$getImageUrl('turbines.webp')});`"
    >
      &nbsp;
    </div>

  </div>
</template>
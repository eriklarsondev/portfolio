<template>
  <div>
    <PageHero slug="about-me" />

    <div class="container max-w-[1260px]">
      <div class="flex lg:flex-row flex-col xl:gap-20 gap-10">
        <div class="lg:w-64 w-full">
          <AboutPageSidebar />
        </div>

        <div class="flex-1" data-aos="fade-left" :data-aos-delay="500">
          <Content slug="about-me" />
        </div>
      </div>
    </div>
  </div>
</template>

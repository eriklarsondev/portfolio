<template>
  <div>
    <PageHero slug="about-me" />

    <Container>
      <div class="flex lg:flex-row flex-col xl:gap-20 gap-10">
        <div class="lg:w-64 w-full">
          <AboutPageSidebar />
        </div>

        <div class="flex-1" data-aos="fade-left">
          <Content slug="about-me" :long="true" />
        </div>
      </div>
    </Container>
  </div>
</template>

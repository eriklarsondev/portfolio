<template>
  <div>
    <PageHero slug="industry-experience" />

    <Container>
      <Experience />

      <Separator />
    </Container>

    <Container class="[&]:max-w-[1600px]">
      <Heading :muted="true" :cta="true" class="text-center" data-aos="zoom-in-down">
        Project <span class="sm:inline hidden">& client</span> spotlight
      </Heading>

      <ProjectCarousel />
    </Container>
  </div>
</template>
ss

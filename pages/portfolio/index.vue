<template>
  <div>
    <PageHero slug="portfolio" />

    <div class="container max-w-[1260px]">
      <FeaturedProjects />
    </div>

    <SlantedContainer></SlantedContainer>

    <div class="container max-w-[1260px]">
      <Heading :muted="true" :cta="true" class="text-center" data-aos="flip-left">Open source collaboration</Heading>
      <GithubRepos />
    </div>
  </div>
</template>

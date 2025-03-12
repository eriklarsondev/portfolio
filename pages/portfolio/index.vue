<template>
  <div>
    <PageHero slug="portfolio" />

    <div class="container max-w-[1260px]">
      <FeaturedProjects />
    </div>

    <SlantedContainer></SlantedContainer>

    <div class="container max-w-[1260px]">
      <Heading label="Open-source collaboration" :muted="true" :cta="true" class="text-center" data-aos="flip-left" />
      <GithubRepos />
    </div>
  </div>
</template>

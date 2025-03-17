<template>
  <div>
    <PageHero slug="portfolio" />

    <Container>
      <FeaturedProjects />
    </Container>

    <SlantedContainer>
      <Heading label="Project archive" :muted="true" :cta="true" />
    </SlantedContainer>

    <Container>
      <Heading :muted="true" :cta="true" class="text-center" data-aos="flip-left">Open source collaboration</Heading>
      <GithubRepos />
    </Container>
  </div>
</template>

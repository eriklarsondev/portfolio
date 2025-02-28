<template>
  <div>
    <HomepageHero />

    <div class="container max-w-[1260px]">
      <Heading label="Let's build something great" class="text-center" />
      <Services />
    </div>

    <SlantedContainer>
      <div class="max-w-5xl mx-auto">
        <div class="max-w-3xl mb-8">
          <Heading label="Technology expert" class="[&]:mb-3" />

          <Callout :dark="true">
            <Content slug="tech-expert" />
          </Callout>
        </div>

        <Technologies />
      </div>
    </SlantedContainer>

    <div class="container max-w-[1260px]">
      <Heading label="Open-source advocate" class="text-center" />
      <GithubRepos />
    </div>
  </div>
</template>

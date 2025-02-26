<template>
  <div>
    <HomepageHero />

    <div class="container max-w-[1260px]">
      <Heading label="Let's build something great" class="text-center" />
      <Services />
    </div>

    <Slanted>
      <div class="max-w-5xl mx-auto">
        <div class="max-w-3xl mb-8">
          <Callout :dark="true">
            <Content slug="tech-expert" />
          </Callout>
        </div>

        <Technologies />
      </div>
    </Slanted>

    <div class="container max-w-[1260px]">
      <Heading label="Open-source advocate" class="text-center" />
      <GithubRepos />
    </div>
  </div>
</template>

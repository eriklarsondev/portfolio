<template>
  <div>
    <HomepageHero />

    <div class="container max-w-[1260px]">
      <Heading label="Let's build something great" class="text-center" />

      <LinkContainer label="Let's Work Together" url="/services">
        <Services />
      </LinkContainer>
    </div>

    <SlantedContainer>
      <div class="max-w-4xl mx-auto">
        <Heading label="Technology expert" class="[&]:mb-3" />

        <Callout :alternate="true" class="mb-8">
          <Content slug="tech-expert" />
        </Callout>

        <Technologies />
      </div>
    </SlantedContainer>

    <div class="container max-w-[1260px]">
      <Testimonials />

      <Separator />

      <Heading label="Open-source advocate" class="text-center" />
      <LinkContainer label="Connect on GitHub" url="https://github.com/eriklarsondev" :tab="true">
        <GithubRepos />
      </LinkContainer>
    </div>
  </div>
</template>

<template>
  <div>
    <HomepageHero />

    <div class="container max-w-[1260px]">
      <Heading label="Let's build something great" class="text-center" data-aos="flip-left" />

      <LinkContainer label="Let's Work Together" url="/hire">
        <Services />
      </LinkContainer>
    </div>

    <SlantedContainer>
      <div class="max-w-3xl mx-auto">
        <Heading label="Technology expert" :muted="true" :cta="true" class="[&]:mb-3" data-aos="fade-down" />

        <Callout :lighten="true" class="mb-8" data-aos="fade-left">
          <Content slug="tech-expert" />
        </Callout>

        <Separator :lighten="true" class="[&]:my-[3rem]" />
      </div>

      <Technologies class="max-w-5xl mx-auto" />
    </SlantedContainer>

    <div class="container max-w-[1260px]">
      <Testimonials />

      <Separator />

      <Heading :muted="true" :cta="true" class="text-center" data-aos="flip-left">Open source collaboration</Heading>
      <LinkContainer label="Connect on GitHub" url="https://github.com/eriklarsondev" :tab="true">
        <GithubRepos />
      </LinkContainer>
    </div>
  </div>
</template>

<template>
  <div>
    <HomepageHero />

    <Container>
      <Heading :muted="true" :cta="true" class="text-center" data-aos="flip-left">
        Let's build <br class="xl:hidden block" />something great
      </Heading>

      <LinkContainer label="Let's Work Together" url="/hire">
        <Services />
      </LinkContainer>
    </Container>

    <SlantedContainer>
      <div class="max-w-4xl mx-auto">
        <Heading :muted="true" :cta="true" class="[&]:mb-1" data-aos="fade-down">
          Tech<span class="sm:inline hidden">ology</span> expert
        </Heading>

        <Callout :lighten="true" class="mb-8" data-aos="fade-left">
          <Content slug="tech-expert" />
        </Callout>

        <Technologies class="max-w-5xl mx-auto" />
      </div>
    </SlantedContainer>

    <Container>
      <Testimonials />
    </Container>

    <CTA slug="homepage" />

    <Container>
      <Heading :muted="true" :cta="true" class="text-center" data-aos="flip-left">Open source collaboration</Heading>

      <LinkContainer label="Connect on GitHub" url="https://github.com/eriklarsondev" :tab="true">
        <GithubRepos />
      </LinkContainer>
    </Container>
  </div>
</template>

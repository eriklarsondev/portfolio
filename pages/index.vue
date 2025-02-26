<template>
  <div>
    <HomepageHero />

    <div class="container max-w-[1260px]">
      <Heading label="Let's build something great" class="text-center" />
      <Services />
    </div>

    <Slanted>
      <div class="max-w-3xl">
        <Heading label="Technology expert" class="[&]:mb-2" />

        <Callout :dark="true">
          <Content slug="tech-expert" />
        </Callout>
      </div>
    </Slanted>
  </div>
</template>

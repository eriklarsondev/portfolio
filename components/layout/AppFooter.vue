<template>
  <footer class="text-center">
    <div class="py-20 border-t-4 border-zinc-900">
      <Container>
        <div class="flex lg:flex-row flex-col items-center gap-10">
          <div class="flex-1 lg:order-first order-2">
            <FooterMenu />
          </div>

          <div class="flex-1" data-aos="flip-down"></div>

          <div class="flex-1 order-last">
            <SocialMediaBar />
          </div>
        </div>
      </Container>
    </div>

    <div class="py-10 border-t-4 border-zinc-900">
      <Container>
        <Subheading :label="`© ${currentYear} Erik Larson`" :muted="true" class="[&]:m-0" />
      </Container>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

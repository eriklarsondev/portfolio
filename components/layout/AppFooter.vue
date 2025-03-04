<template>
  <footer class="text-center">
    <div class="py-20 border-t-4 border-zinc-900">
      <div class="container max-w-[1260px]">
        <div class="flex lg:flex-row flex-col items-center gap-10">
          <div class="flex-1 lg:order-first order-2">
            <FooterMenu />
          </div>

          <div class="flex-1">
            <Logo src="https://res.cloudinary.com/dst50wvgy/image/upload/v1741105778/badge_0aa814824b.svg" />
          </div>

          <div class="flex-1 order-last">
            <SocialMediaBar />
          </div>
        </div>
      </div>
    </div>

    <div class="py-10 border-t-4 border-zinc-900">
      <div class="container max-w-[1260px]">
        <Subheading :label="`© ${currentYear} Erik Larson`" :muted="true" class="[&]:m-0" />
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

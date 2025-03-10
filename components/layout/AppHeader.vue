<template>
  <div>
    <header class="fixed z-50 top-0 left-0 w-full h-[70px] bg-black/50 backdrop-blur-sm">
      <div class="container max-w-[1260px]">
        <div class="flex items-center gap-7 h-[70px]">
          <div class="flex-1">
            <Logo src="https://res.cloudinary.com/dst50wvgy/image/upload/v1741106159/logo_7136b0bd54.svg" />
          </div>

          <div class="lg:block hidden">
            <Navbar />
          </div>

          <div class="lg:hidden block">
            <MobileMenu />
          </div>

          <div class="lg:block hidden" v-if="route.path !== '/hire'">
            <HireButton label="Hire Me" url="/hire" />
          </div>
        </div>
      </div>
    </header>

    <div class="h-[70px]"></div>
  </div>
</template>

<script setup>
const route = useRoute()
</script>

<template>
  <div>
    <header class="fixed z-50 top-0 left-0 w-full h-[70px] bg-black">
      <Container>
        <div class="flex items-center gap-7 h-[70px]">
          <div class="flex-1"></div>

          <div class="lg:block hidden">
            <Navbar />
          </div>

          <div class="lg:hidden block">
            <MobileMenu />
          </div>

          <div class="lg:block hidden" v-if="route.path !== '/hire'">
            <HireButton label="Hire me" url="/hire" />
          </div>
        </div>
      </Container>
    </header>

    <div class="h-[70px]"></div>
  </div>
</template>

<script setup>
const route = useRoute()
</script>

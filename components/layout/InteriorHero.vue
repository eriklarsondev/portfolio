<template>
  <div class="page-hero relative mb-10 pt-20 pb-10">
    <Container>
      <Subheading :label="props.heading" class="[&]:mb-1" data-aos="fade-down">
        <template v-slot:icon>
          <font-awesome icon="terminal" />
        </template>
      </Subheading>

      <Heading :label="props.headline" class="[&]:m-0" data-aos="fade-right" />

      <div class="mt-8" data-aos="fade-up" v-if="slots.controls">
        <slot name="controls" />
      </div>
    </Container>
  </div>
</template>

<script setup>
const props = defineProps(['heading', 'headline'])
const slots = useSlots()
</script>

<style lang="scss" scoped>
.page-hero::before {
  @apply absolute content-[''] bottom-0 md:left-1/2 left-1/3 w-screen h-screen;

  background-image: radial-gradient(circle at 1px 1px, #52525b 1px, transparent 0);
  background-size: 30px 30px;
}
</style>

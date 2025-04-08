<template>
  <div>
    <a
      href=""
      @click.prevent="toggleMenu()"
      :class="['menu-toggle inline-block relative w-[50px] h-[30px]', { active: toggle }]">
      <span
        class="absolute top-[calc(50%_-_1px)] left-0 w-full h-[2px] bg-zinc-200 rounded-full transition-all duration-300"></span>
    </a>

    <div
      :class="[
        'fixed z-50 top-[70px] w-full h-[calc(100vh_-_70px)] px-10 py-20 overflow-y-auto bg-black transition-all duration-1000',
        { 'left-full delay-700': !toggle, 'left-0': toggle }
      ]">
      <ul>
        <li
          v-for="(item, index) in data.items"
          :key="index"
          @click.prevent="toggleMenu()"
          :class="['block sm:text-center text-left', { 'sm:mb-[10vw] mb-[14vw]': index < data.items.length - 1 }]">
          <NuxtLink
            :to="item.url"
            :target="!item.newTab ? '_self' : '_blank'"
            class="menu-item relative font-heading font-normal md:text-[16vw] sm:text-[18vw] text-[24vw] text-zinc-200 hover:text-zinc-400 transition-all duration-300">
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const toggle = ref(false)

function toggleMenu() {
  toggle.value = !toggle.value
}

const { data } = await useFetch('/api/menus/mobile-menu')
</script>

<style lang="scss" scoped>
.menu-toggle {
  &::before,
  &::after {
    @apply absolute content-[''] w-full h-[2px] bg-zinc-200 rounded-full transition-all duration-300;
  }

  &::before {
    @apply top-0 left-0;
  }

  &::after {
    @apply bottom-0 right-0;
  }

  &.active {
    &::before {
      @apply top-[calc(50%_-_1px)] rotate-45;
    }

    &::after {
      @apply bottom-[calc(50%_-_1px)] -rotate-45;
    }

    span {
      @apply left-[100vw];
    }
  }
}

.menu-item.router-link-active {
  @apply pl-5 text-accent;

  &::before {
    @apply absolute content-[''] top-[calc(50%_-_5px)] left-0 w-[10px] h-[10px] bg-accent rounded-full;
  }
}
</style>

<template>
  <div>
    <ul v-if="data">
      <li
        v-for="(item, index) in data.items"
        :key="index"
        :class="['inline-block', { 'sm:mr-7 mr-6': index < data.items.length - 1 }]"
        data-aos="zoom-in"
        :data-aos-delay="(index + 1) * 150">
        <a :href="item.url" :target="!item.newTab ? '_self' : '_blank'" class="sm:text-2xl text-xl text-zinc-200">
          <font-awesome :icon="['fab', item.label]" />
        </a>
      </li>
    </ul>

    <Error v-if="!data">social-media-bar not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/menus/social-media-bar')
</script>

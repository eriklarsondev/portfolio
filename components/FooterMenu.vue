<template>
  <div>
    <ul v-if="data">
      <li
        v-for="(item, index) in data.items"
        :key="index"
        :class="['block', { 'mb-1': index < data.items.length - 1 }]">
        <NavLink :label="item.label" :url="item.url" :tab="item.newTab" />
      </li>
    </ul>

    <Error v-if="!data">footer-menu not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/menus/footer-menu')
</script>

<template>
  <div class="w-64 mx-auto text-center">
    <Image :data="data.image" direction="left" :rounded="true" class="mb-5" v-if="data.image" />

    <div v-for="(item, index) in data.topics" :key="index" :class="{ 'mb-2': index < data.topics.length - 1 }">
      <Subheading :label="item.label" :muted="true" class="[&]:m-0">
        <template v-slot:icon>
          <font-awesome :icon="item.icon" />
        </template>
      </Subheading>
    </div>

    <hr class="w-1/4 mx-auto" />

    <Subheading label="Connect on social" :muted="true" />
    <SocialMediaBar />
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/sidebars/about-page-sidebar')
</script>

<template>
  <div>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-5" v-if="data && data.length">
      <div
        v-for="item in data"
        :key="item.documentId"
        class="project relative lg:h-96 md:h-[50vw] sm:h-[70vw] h-[80vw] overflow-hidden bg-zinc-900">
        <div class="top flex flex-col justify-end absolute top-0 left-0 w-full h-full p-6 transition-all duration-500">
          <h2 class="mb-1 text-3xl">{{ item.name }}</h2>
          <Subheading :label="item.platform" class="[&]:m-0">
            <template v-slot:icon>
              <font-awesome icon="laptop" />
            </template>
          </Subheading>
        </div>

        <div
          class="bottom flex flex-col justify-end absolute top-full left-0 w-full h-full p-6 transition-all duration-500">
          <div>
            <ListGroup :items="item.technologies" class="mb-5" />

            <Subheading :label="item.name" class="[&]:mb-1" />
            <span class="block leading-7 text-zinc-300">
              {{ item.description ? item.description : '&mdash;' }}
            </span>

            <Button label="Learn More" :url="`/portfolio/${item.slug}`" class="mt-4" v-if="item.content" />
          </div>
        </div>
      </div>
    </div>

    <Error v-if="!data || !data.length">Projects not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/projects?featured=true')
</script>

<style lang="scss" scoped>
.project:hover {
  .top {
    @apply -left-full;
  }

  .bottom {
    @apply top-0;
  }
}
</style>

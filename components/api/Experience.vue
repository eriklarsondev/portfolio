<template>
  <div>
    <div class="experience-timeline relative" v-if="data && data.length">
      <div
        v-for="(item, index) in data"
        :key="index"
        :class="['lg:flex block lg:py-20 lg:gap-x-[200px] relative', { 'lg:flex-row-reverse': index % 2 !== 0 }]">
        <div
          :class="[
            'lg:block hidden absolute top-[93px] w-[80px] h-[2px] bg-zinc-700 rounded-full',
            { 'left-1/2': index % 2 !== 0, 'right-1/2': index % 2 === 0 }
          ]"></div>

        <div
          class="lg:inline-flex hidden justify-center items-center absolute top-[79px] left-[calc(50%_-_40px)] w-[80px] h-[30px] bg-black border-2 border-zinc-700 rounded-full">
          <Subheading :label="item.startYear" class="[&]:m-0 [&]:text-zinc-200" />
        </div>

        <div class="flex-1">
          <div class="flex items-center mb-1">
            <div class="flex-1">
              <h3 class="m-0">{{ item.company }}</h3>
            </div>

            <div>
              <Subheading :label="item.location" :muted="true" class="[&]:m-0">
                <template v-slot:icon>
                  <font-awesome icon="location-dot" />
                </template>
              </Subheading>
            </div>
          </div>

          <Subheading
            :label="`${item.startYear} - ${item.endYear ? item.endYear : 'Present'} (${item.duration})`"
            :muted="true" />

          <Subheading :label="item.jobTitle" class="[&]:mb-5">
            <template v-slot:icon>
              <font-awesome icon="building-user" />
            </template>
          </Subheading>

          <Subheading label="Technologies" :muted="true" class="[&]:mb-1" />
          <ListGroup :items="item.technologies" />

          <Callout class="mt-2" v-if="item.content">
            <div v-html="item.content"></div>
          </Callout>
        </div>

        <div class="flex-1 lg:block hidden"></div>

        <hr class="lg:hidden block my-10" v-if="index < data.length - 1" />
      </div>
    </div>

    <Error v-if="!data || !data.length">Experience not found</Error>
  </div>
</template>

<script setup>
const { data } = await useFetch('/api/work')
</script>

<style lang="scss" scoped>
.experience-timeline::before {
  @apply lg:block hidden absolute content-[''] top-0 left-[calc(50%_-_1px)] w-[2px] h-full bg-zinc-700 rounded-full;
}
</style>

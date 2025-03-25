<template>
  <div>
    <InteriorHero heading="Insights" :headline="data.name" />

    <Container class="mb-20">
      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1">
          <div class="flex items-center mb-5">
            <div class="flex-1">
              <Categories :items="data.categories" data-aos="fade-down" />
            </div>

            <div></div>
          </div>

          <div class="leading-8" v-html="data.content"></div>
        </div>

        <div class="lg:w-[350px] w-full">
          <CategoryFilter />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const route = useRoute()

const { data } = await useFetch(`/api/articles/${route.params.slug}`)

useSeoMeta({
  titleTemplate: `${
    data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null
  } | Insights`,
  description: data.value && data.value.seo ? data.value.seo.description : null
})

definePageMeta({ layout: 'basic' })
</script>

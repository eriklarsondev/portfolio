<template>
  <div>
    <InteriorHero heading="Category" :headline="data.name" />

    <Container class="mb-20">
      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1">
          <Articles :data="data.articles" v-if="data.articles && data.articles.length" />

          <div class="leading-9 font-serif text-2xl" data-aos="fade-up" v-if="!data.articles || !data.articles.length">
            <font-awesome icon="triangle-exclamation" class="text-accent" /> Category "{{ data.name }}" does not have
            any articles
          </div>
        </div>

        <div class="lg:w-[350px] w-full">
          <CategoryFilter />
        </div>
      </div>
    </Container>

    <LeadContainer />
  </div>
</template>

<script setup>
const route = useRoute()

const { data } = await useFetch(`/api/categories/${route.params.slug}`)

useHead({
  titleTemplate: `${
    data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null
  } | Insights`,
  meta: [{ name: 'description', content: data.value && data.value.seo ? data.value.seo.description : null }]
})

definePageMeta({ layout: 'basic' })
</script>

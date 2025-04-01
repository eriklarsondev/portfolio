<template>
  <div>
    <InteriorHero heading="Insights" :headline="data.name" />

    <Container class="mb-20">
      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1">
          <div class="flex items-center mb-5">
            <div class="flex-1 sm:block hidden">
              <Categories :items="data.categories" data-aos="fade-down" />
            </div>

            <div>
              <Subheading
                :label="`${published.month} ${published.day}, ${published.year}`"
                :muted="true"
                data-aos="fade-right">
                <template v-slot:icon>
                  <font-awesome icon="calendar-day" class="text-accent" />
                </template>
              </Subheading>
            </div>
          </div>

          <div data-aos="fade-right" :data-aos-delay="1000">
            <div class="leading-9 tracking-wide text-[15px]" v-html="data.content"></div>
          </div>

          <div class="mt-20">
            <DisqusComments :identifier="`/blog/${data.slug}`" />
          </div>
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
const published = ref({ month: null, day: null, year: null })

const { data } = await useFetch(`/api/articles/${route.params.slug}`)

onMounted(() => {
  const date = new Date(data.value.published)

  published.value.month = date.toLocaleDateString('en-US', { month: 'long' })
  published.value.day = date.toLocaleDateString('en-US', { day: 'numeric' })
  published.value.year = date.toLocaleDateString('en-US', { year: 'numeric' })
})

useSeoMeta({
  titleTemplate: `${
    data.value && data.value.seo ? data.value.seo.title : data.value ? data.value.name : null
  } | Insights`,
  description: data.value && data.value.seo ? data.value.seo.description : null
})

definePageMeta({ layout: 'basic' })
</script>

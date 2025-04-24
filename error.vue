<template>
  <div>
    <NuxtLoadingIndicator color="#cfc493" />

    <NuxtLayout>
      <div>
        <InteriorHero
          heading="Error"
          :headline="`Looks like a ${props.error.statusCode} error`"
          :description="props.error.message">
          <template v-slot:controls><Button label="Return Home" url="/" /></template>
        </InteriorHero>

        <Container>
          <LinkContainer label="Let's Work Together" url="/hire">
            <Services />
          </LinkContainer>
        </Container>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
const props = defineProps(['error'])

useSeoMeta({
  titleTemplate: `Error - ${props.error.message}`
})
</script>

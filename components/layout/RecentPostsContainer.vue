<template>
  <div class="py-20 border-t-4 border-zinc-900">
    <Container>
      <div class="flex lg:flex-row flex-col gap-20">
        <div class="flex-1">
          <Heading label="Join the conversation" data-aos="flip-left" />

          <Articles :limit="2" />
        </div>

        <div class="lg:w-[350px] w-full"></div>
      </div>
    </Container>
  </div>
</template>

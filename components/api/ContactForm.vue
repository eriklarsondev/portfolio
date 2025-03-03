<template>
  <form @submit.prevent="submit()">
    <div class="flex sm:flex-row flex-col gap-5 mb-5">
      <div class="flex-1">
        <label>Full Name</label>
        <input type="text" v-model="fields.fullName" required />
      </div>

      <div class="flex-1">
        <label>Email</label>
        <input type="text" v-model="fields.email" required />
      </div>
    </div>

    <div class="flex sm:flex-row flex-col gap-5 mb-5">
      <div class="flex-1">
        <label>Website URL</label>
        <input type="text" placeholder="www.google.com" v-model="fields.websiteUrl" />
      </div>
    </div>

    <div class="flex sm:flex-row flex-col gap-5 mb-5" v-if="route.path === '/services'">
      <div class="flex-1">
        <label>Project Type</label>
        <select v-model="fields.services">
          <option v-for="(item, index) in data" :key="index" :value="item.name">{{ item.name }}</option>
        </select>
      </div>

      <div class="flex-1">
        <label>Budget / Price Range</label>
        <input type="range" min="500" max="10000" step="500" v-model="fields.budget" />

        <div class="flex items-center mt-2 h-[28px]">
          <Subheading :label="`$${fields.budget}`" class="[&]:m-0">
            <template v-slot:icon>
              <font-awesome icon="tag" />
            </template>
          </Subheading>
        </div>
      </div>
    </div>

    <div class="flex sm:flex-row flex-col gap-5 mb-5">
      <div class="flex-1">
        <label>Message</label>
        <textarea placeholder="Tell me about your next project" v-model="fields.message" required></textarea>
      </div>
    </div>

    <div class="flex sm:flex-row flex-col gap-5">
      <div class="flex-1">
        <SubmitButton />
      </div>
    </div>
  </form>
</template>

<script setup>
const route = useRoute()

const fields = ref({ fullName: null, email: null, websiteUrl: null, services: null, budget: 500, message: null })
const meta = ref({ location: route.path })

const { data } = await useFetch('/api/services')

async function submit() {
  try {
    const payload = await useFetch('/api/leads', {
      data: fields.value
    })
  } catch (err) {}
}
</script>

<style lang="scss" scoped>
label {
  @apply block mb-1 uppercase tracking-widest font-medium text-xs text-accent;
}

input:not([type='range']),
select,
textarea {
  @apply w-full h-[60px] px-3 bg-zinc-900 text-zinc-200 border-2 border-transparent rounded-none outline-none appearance-none;
  @apply focus:bg-accent/30 focus:border-accent transition-all duration-300;

  &::placeholder {
    @apply text-zinc-500;
  }
}

input[type='range'] {
  @apply w-full cursor-grab outline-none appearance-none;

  &::-webkit-slider-runnable-track {
    @apply h-[7px] bg-zinc-900;
  }

  &::-webkit-slider-thumb {
    @apply -mt-[6px] w-[20px] h-[20px] bg-accent rounded-full appearance-none;
  }
}

textarea {
  @apply h-[300px] py-4 resize-none;
}
</style>

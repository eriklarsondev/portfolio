<template>
  <form @submit.prevent="submit()">
    <div class="flex sm:flex-row flex-col gap-5 mb-5">
      <div class="flex-1">
        <label>Full Name</label>
        <input type="text" placeholder="John Smith" v-model="fields.fullName" required />
      </div>

      <div class="flex-1">
        <label>Email</label>
        <input type="text" placeholder="john@gmail.com" v-model="fields.email" required />
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

        <div class="flex items-center h-[25px] mt-1">
          <Subheading :label="`$${fields.budget}`" class="[&]:m-0 [&]:text-zinc-200">
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

const fields = ref({ fullName: null, email: null, websiteUrl: null, services: null, budget: 5000, message: null })
const meta = ref({ location: route.path })

const { data } = await useFetch('/api/services')

async function submit() {
  try {
    const payload = await useFetch('/api/leads', fields)
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
  @apply w-full h-[60px] px-3 bg-zinc-900 text-zinc-200 border-2 border-transparent rounded-sm outline-none appearance-none;
  @apply focus:bg-accent/30 focus:border-accent transition-all duration-300;

  &::placeholder {
    @apply text-zinc-500;
  }
}

input[type='range'] {
  @apply w-full overflow-hidden cursor-grab outline-none rounded-sm appearance-none;

  &::-webkit-slider-runnable-track {
    @apply h-[25px] bg-zinc-900;
  }

  &::-webkit-slider-thumb {
    @apply w-[25px] h-[25px] bg-zinc-200 rounded-sm appearance-none;

    box-shadow: -100vw 0 0 99vw #cfc493;
  }
}

textarea {
  @apply h-[300px] py-4 resize-none;
}
</style>

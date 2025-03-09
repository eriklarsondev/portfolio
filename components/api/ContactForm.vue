<template>
  <div>
    <form @submit.prevent="sendMessage()" :class="{ lighten: props.lighten }">
      <div class="flex sm:flex-row flex-col gap-5 mb-5">
        <div class="flex-1">
          <label>Full Name</label>
          <input type="text" placeholder="Your Name" v-model="fields.fullName" required />
        </div>

        <div class="flex-1">
          <label>Email</label>
          <input type="text" placeholder="Your Email" v-model="fields.email" required />
        </div>
      </div>

      <div class="flex sm:flex-row flex-col gap-5 mb-5">
        <div class="flex-1">
          <label>Website URL</label>
          <input type="text" placeholder="www.google.com" v-model="fields.websiteUrl" />
        </div>
      </div>

      <div class="flex sm:flex-row flex-col gap-5 mb-5" v-if="route.path === '/hire'">
        <div class="flex-1">
          <label>Project Type</label>
          <select v-model="scope.type">
            <option v-for="(item, index) in data" :key="index" :value="item.name">{{ item.name }}</option>
          </select>
        </div>

        <div class="flex-1">
          <label>Budget / Price Range</label>
          <input type="range" min="500" max="10000" step="500" v-model="scope.budget" />

          <div class="flex items-center h-[25px] mt-1">
            <Subheading :label="`$${scope.budget}`" class="[&]:m-0 [&]:text-base [&]:text-zinc-400">
              <template v-slot:icon>
                <font-awesome icon="tag" class="text-accent" />
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

    <div ref="scroll">
      <div class="mt-10 p-6 text-center bg-accent/20 border-2 border-dotted border-accent" v-if="success">
        <font-awesome icon="circle-check" class="mb-3 text-3xl text-accent"></font-awesome>
        <Subheading label="Your message has been received" class="[&]:m-0" />
      </div>

      <div class="mt-10 p-6 text-center bg-red-400/20 border-2 border-dotted border-red-400" v-if="error">
        <font-awesome icon="triangle-exclamation" class="mb-3 text-3xl text-red-400"></font-awesome>
        <Subheading label="Something went wrong, please try again" class="[&]:m-0 [&]:text-red-400" />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const props = defineProps(['lighten'])

const fields = ref({ fullName: null, email: null, websiteUrl: null, message: null })
const scope = ref({ type: null, budget: 5000 })

const meta = ref({ location: route.path })

const scroll = ref()

const success = ref(false)
const error = ref(false)

const { data } = await useFetch('/api/services')

async function sendMessage() {
  try {
    let payload
    if (route.path === '/hire') {
      payload = { ...fields.value, ...scope.value, ...meta.value }
    } else {
      payload = { ...fields.value, ...meta.value }
    }

    await $fetch('/api/leads', {
      method: 'post',
      body: payload
    })
    success.value = true
    error.value = false

    fields.value = { fullName: null, email: null, websiteUrl: null, message: null }
    scope.value = { type: null, budget: 5000 }

    meta.value = { location: route.path }
  } catch (err) {
    success.value = false
    error.value = true
  }

  scroll.value.scrollIntoView({ behavior: 'smooth' })

  setTimeout(() => {
    success.value = false
    error.value = false
  }, 25000)
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

form.lighten {
  input,
  textarea,
  select {
    @apply bg-zinc-800 focus:bg-accent/30;
  }

  input[type='range']::-webkit-slider-runnable-track {
    @apply bg-zinc-800;
  }
}
</style>

<template>
  <form @submit.prevent="submit()">
    <div class="flex sm:flex-row flex-col gap-5 mb-5">
      <div class="flex-1">
        <label>Full Name</label>
        <input type="text" placeholder="John Smith" v-model="fields.fullName" />
      </div>

      <div class="flex-1">
        <label>Email</label>
        <input type="text" placeholder="john@gmail.com" v-model="fields.email" />
      </div>
    </div>

    <div class="flex sm:flex-row flex-col gap-5 mb-5">
      <div class="flex-1">
        <label>Website</label>
        <input type="text" placeholder="www.google.com" v-model="fields.websiteUrl" />
      </div>
    </div>

    <div class="flex sm:flex-row flex-col gap-5 mb-5">
      <div class="flex-1">
        <label>Message</label>
        <textarea placeholder="Tell me about your next project" v-model="fields.message"></textarea>
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
const fields = ref({ fullName: null, email: null, websiteUrl: null, message: null })

async function submit() {
  try {
  } catch (err) {}
}
</script>

<style lang="scss" scoped>
label {
  @apply block mb-1 uppercase tracking-widest font-medium text-xs text-accent;
}

input,
textarea {
  @apply w-full h-[60px] px-3 bg-zinc-900 text-zinc-200 border-2 border-transparent outline-none;
  @apply focus:bg-accent/30 focus:border-accent transition-all duration-300;

  &::placeholder {
    @apply text-zinc-500;
  }
}

textarea {
  @apply h-[300px] py-4 resize-none;
}
</style>

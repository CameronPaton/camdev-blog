<template>
    <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    class="border border-primary p-3 text-primary hover:bg-primary hover:text-white transition ease-in-out duration-500 lg:text-xl m-8 flex flex-row items-center font-secondary"><svg class="w-6 h-6 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
      <span class="hidden lg:block"> {{ prev.title }} </span>
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
    class="border border-primary p-3 text-primary hover:bg-primary hover:text-white transition ease-in-out duration-500 lg:text-xl m-8 flex flex-row items-center font-secondary">
      <span class="hidden lg:block">{{ next.title }} </span><svg class="w-6 h-6 md:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
    export default {
    props: {
      prev: {
        type: Object,
        default: () => null
      },
      next: {
        type: Object,
        default: () => null
      }
    }
  }
</script>
<template>
  <div class="grid grid-cols-1 grid-rows-auto">

    <!-- Tag Name and Description flex-col-->
    <!--Back to all articles-->
    <div id="row1" class="relative row-span-1 h-64 col-span-1 flex flex-col items-center justify-around border border-b-gray-500 shadow-md" :style="{ backgroundImage: `url(${ tag.img })`, backgroundPosition: `center`}">
      <div class="flex flex-col mx-5 z-10">
        <span class="font-bold text-4xl uppercase "> {{ tag.name }} </span>
        <span class="uppercase"> {{ tag.description }} </span>
      </div>
      <div class="z-10">
        <nuxt-link to="/blog" class="mx-5"><button class=" bg-black border border-white hover:bg-white hover:text-gray-700 hover:border-gray-700 text-white p-3 w-40 transition ease-in-out duration-500 focus:outline-none flex flex-row items-center" > <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg> All Articles </button></nuxt-link>
      </div>
    </div>

    <!--Articles section-->
    <div class="row-span-1 col-span-1 ">
      <ul class="mx-5">
        <li v-for="article in articles" :key="article.slug" class="my-5 shadow-md hover:shadow-lg rounded-md border border-gray-200 hover:border-gray-400">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="md:grid md:grid-cols-4 md:gap-4">
            <img v-if="article.img" class="md:cols-span-1 w-full h-56 object-cover"  :src="article.img" :alt="article.alt" />
            <div class="md:flex md:flex-col md:justify-between md:col-span-3">
              <div class="m-3">
                <h3 class="font-bold text-2xl text-center md:text-left p-3">{{ article.title }}</h3>
                <p class="p-3">{{ article.description }}</p>
                <p class="italic text-gray-500 p-3">{{ formatDate(article.createdAt) }}</p>
            </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>



    




      
<!--List of Results-->
      
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const tags = await $content('tags')
      .where({ slug: { $contains: params.tag } })
      .limit(1)
      .fetch()
    const tag = tags.length > 0 ? tags[0] : {}
    const articles = await $content('articles', params.slug)
      .where({ tags: { $contains: tag.name } })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tag
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' }
      return new Date(date).toLocaleDateString('en-GB', options)
    }
  }
}
</script>

<style scoped>
  #row1 {
    z-index: 1;
  }

  #row1:after {
  content: '';
  background: rgba(255,255,255,0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
}
</style>

<!--UL

<ul class="mx-5">
        <li v-for="article in articles" :key="article.slug" class="my-5 shadow-md hover:shadow-lg rounded-md border border-gray-200 hover:border-gray-400">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="md:grid md:grid-cols-4 md:gap-4">
            <img v-if="article.img" class="md:cols-span-1 w-full h-56 object-cover"  :src="article.img" :alt="article.alt" />
            <div class="md:flex md:flex-col md:justify-between md:col-span-3">
              <div class="m-3">
                <h3 class="font-bold text-2xl text-center md:text-left p-3">{{ article.title }}</h3>
                <p class="p-3">{{ article.description }}</p>
                <p class="font-bold text-gray-500 p-3">{{ formatDate(article.createdAt) }}</p>
            </div>
            </div>
          </NuxtLink>
        </li>
      </ul>
-->

<!--Dynamic BG Image

:style="{ backgroundImage: `url(${ tag.img })`, backgroundPosition: `center`}"

-->

<!-- Button back to articles

<nuxt-link to="/blog" class="order-last lg:order-first ml-5"><button class=" bg-black border border-white hover:bg-white hover:text-gray-700 hover:border-gray-700 text-white p-3 w-40 transition ease-in-out duration-500 focus:outline-none flex flex-row items-center" > <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg> All Articles </button></nuxt-link>

-->

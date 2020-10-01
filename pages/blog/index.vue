<template>
    <div class="">
    <Appheader />
    <div class="mt-56 lg:mt-24 h-auto w-screen">
        <header>
            <div id="row1" class="bg-white w-full flex items-center justify-center">
                <h2 class="blogHeader text-bold text-center text-3xl md:text-5xl lg:text-6xl text-red-800 mx-5">Welcome to my Blog</h2>
            </div>
        </header>

        <main class="">
            <div class="relative bg-white">
                <button @click="toggle" class="border border-black text-black p-3 uppercase focus:outline-none hover:bg-gray-300 flex flex-row items-center justify-center ml-20">Filter <svg class="w-6 h-6 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                    <ul v-if="active" class="bg-gray-400 w-48 absolute z-10">
                        
                        <li v-for="tag of tags" :key="tag.slug" class="bg-white border-b border-gray-500 text-black p-5 block hover:bg-gray-400 text-center uppercase">
                        <NuxtLink :to="`/blog/tag/${tag.slug}`">
                        <span class="">
                        {{ tag.name }}
                        </span>
                        </NuxtLink>
                        </li>
                        
                    </ul>
            </div>
            

            <div class="my-8">
            <ul class="mx-5 text-black grid gap-5 grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 grid-flow-row">
                <li v-for="article of articles" :key="article.slug" class="shadow-md hover:shadow-lg">
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                        <img :src="article.img" class="rounded-lg w-full h-56 object-cover" />
                    <div class="m-3">
                        <h3 class="font-bold text-2xl text-center p-3">{{ article.title }}</h3>
                        <p class="p-3">{{ article.description }}</p>
                    </div>
                    <div class="flex flex-row items-center justify-between m-3">
                        <span class="text-gray-500 p-3 italic"> {{ formatDate(article.createdAt) }} </span>
                        <span class="border border-blue-500 py-1 px-3 rounded-full bg-blue-500 font-bold text-white"> {{ article.tags }} </span>
                    </div>
                    </NuxtLink>
                </li>
            </ul>
            </div>
        </main>
    </div>
    <Appfooter />
</div>
</template>

<script>

export default {

    head() {
        return {
            title: 'Camdev Blog',
            meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Blog'
                    },
					{
						name: 'keywords', 
						content: 'blog, technology, development, design'
					}
                ]
            }
        },
        data() {
            return {
                active: false
            }
        },
        async asyncData({ $content, params }) {
            const articles = await $content('articles', params.slug)
                .only(['title', 'description', 'img', 'slug', 'createdAt', 'tags'])
                .sortBy('createdAt', 'desc')
                .fetch()
            const tags = await $content('tags', params.slug)
                .only(['name', 'slug'])
                .fetch()
            return {
                articles,
                tags
            }
        },
        methods: {
        formatDate(date) {
            const options = { day: 'numeric', month: 'short', year: 'numeric' }
            return new Date(date).toLocaleDateString('en-GB', options)
            },
        toggle () {
            this.active = !this.active
        }
    }
}
</script>

<style scoped>
    #row1 {
        height:250px;
    }
    .blogHeader {
        font-family: 'Rock Salt', cursive;
    }
</style>

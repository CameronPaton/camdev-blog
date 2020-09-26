<template>
    
    <div class="mt-56 lg:mt-24 h-auto w-screen">
        <header>
            <div class="blogHeader grid grid-rows-2 grid-cols-3 gap-5 lg:flex lg:flex-row lg:justify-around">
                <img class="w-24 md:w-32 mx-auto my-2 md:my-5 hover:shadow-lg" src="~/assets/images/categories/7.png">
                <img class="w-24 md:w-32 mx-auto my-2 md:my-5 hover:shadow-lg" src="~/assets/images/categories/8.png">
                <img class="w-24 md:w-32 mx-auto my-2 md:my-5 hover:shadow-lg" src="~/assets/images/categories/9.png">
                <img class="w-24 md:w-32 mx-auto my-2 md:my-5 hover:shadow-lg" src="~/assets/images/categories/10.png">
                <img class="w-24 md:w-32 mx-auto my-2 md:my-5 hover:shadow-lg" src="~/assets/images/categories/11.png">
                <img class="w-24 md:w-32 mx-auto my-2 md:my-5 hover:shadow-lg" src="~/assets/images/categories/12.png">
            </div>
            
            <div class="filterSort flex flex-row justify-around bg-red-800 text-white hidden">
                <div>
                    <button class="filterArticles bg-white text-black p-2 my-2 w-30">Most Recent</button>
                </div>
                <div class="sortArticles">
                    <button class="bg-white text-black p-2 my-2 w-30">Oldest First</button>
                </div>
            </div>
        </header>   

        <main class="py-8">
            <ul class="mx-5 text-black grid gap-5 grid-cols-1 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4 grid-flow-row">
                <li v-for="article of articles" :key="article.slug" class="shadow-md hover:shadow-lg">
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                        <img :src="article.img" class="rounded-lg w-full h-56 object-cover" />
                    <div class="m-3">
                        <h3 class="font-bold text-2xl text-center p-3">{{ article.title }}</h3>
                        <p class="p-3">{{ article.description }}</p>
                    </div>
                    <div class="flex flex-row items-center justify-between m-3">
                        <span class="text-gray-500 p-3"> {{ formatDate(article.createdAt) }} </span>
                        <span class="border border-blue-500 py-1 px-3 rounded-full bg-blue-500 font-bold text-white"> {{ article.tags }} </span>
                    </div>
                    </NuxtLink>
                </li>
            </ul>
        </main>
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
        async asyncData({ $content, params }) {
            const articles = await $content('articles', params.slug)
                .only(['title', 'description', 'img', 'slug', 'createdAt', 'tags'])
                .sortBy('createdAt', 'desc')
                .fetch()

            return {
                articles,
            }
        },
        methods: {
        formatDate(date) {
            const options = { day: 'numeric', month: 'short', year: 'numeric' }
            return new Date(date).toLocaleDateString('en-GB', options)
            },
    }
}
</script>

<style scoped>
    .blogHeader {
        
        background-color: #f8f4e1;
    }

    .filterArticles:hover .dropdown-menu {
        display: block;
    }

    main {
        background-color: #ECECEC;
    }

    h2 {
        font-size: 1.5em;
        text-decoration: none;
        color: black;
        font-weight: bold;
        display: block;
    }

    h2:after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 5%;
        padding-top: 20px;
        border-bottom: 2px solid #8e0b0b;
  
    }

    
</style>

<!--
<ul class="mx-5 text-black grid grid-cols-6">
<li v-for="(post, index) in posts" :key="index" data-aos="fade-up" data-aos-delay="500">
<nuxt-link :to="{ path: post.slug }" class="md:grid md:grid-cols-4">
    <img :src="post.feature_image" class="md:w-full md:h-48 lg:h-56 xl:h-64 md:col-span-1 md:col-start-1 md:col-end-2 rounded-lg">
        <div class="content md:col-span-3 md:col-start-2 md:col-end-5 md:ml-5 p-5">
            <h3 class="text-center md:text-left"> {{ post.title }} </h3>
            <p class="pt-8"> {{ post.excerpt }} </p>
            <p class="text-gray-500 pt-8">{{ $moment(post.published_at).format("MMMM Do YYYY") }} </p>
        </div>
</nuxt-link>
</ul>

v2:<template>
    
     <ul class="mx-5 text-black grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-5 grid-flow-row xl:grid-cols-4">
                <li v-for="(post, index) in posts" :key="index" class="shadow-lg">
                    <nuxt-link :to="{ path: post.slug }">
                        <div class="flex flex-col justify-evenly">
                            <img :src="post.feature_image" class="md:w-full md:h-48 lg:h-56 xl:h-64 rounded-lg">
                            <div class="content">
                                <h3 class="text-center"> {{ post.title }} </h3>
                                <p class=""> {{ post.excerpt }} </p>
                            </div>
                            <p class="publishedDate bg-red-500">{{ $moment(post.published_at).format("MMMM Do YYYY") }} </p>
                        </div>
                        
                    </nuxt-link>
                </li>
            </ul>
</template>

css:<template>
    #allArticles ul {
        list-style-type: none;
        padding: 0;
    }

    #allArticles ul li {
        background: white;
        border-radius: 1em;
        
        box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.04);
    }

    .content {
        padding: .5em;
    }

    li h3 {
        font-size: 1.5em;
        text-decoration: none;
        color: black;
        font-weight: bold;
        display: block;
        margin: -.1em 0 .2em;
    }

    h2 {
        font-size: 1.5em;
        text-decoration: none;
        color: black;
        font-weight: bold;
        display: block;
    }

    @media only screen and (min-width: 768px){
        #allArticles li {
            grid-template-columns: 180px auto;
        }
    }

</template>
-->
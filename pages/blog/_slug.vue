<template>
<div>
    <article>
        <section id="articleHeader" class=" text-black flex flex-col items-center justify-around">
            <h2 class="text-center font-secondary mx-20 my-5 text-3xl md:text-4xl lg:text-5xl"> {{ article.title }} </h2>
            <p class="mx-8 md:mx-20 lg:mx-32 text-md md:font-bold tracking-wider"> {{ article.description }} </p>
            <Appsearch />
            
            <!--Back to All Articles -->
            
            <!-- Tags or Category of article -->
        </section>

        <div class="w-full bg-black flex justify-center">
            <nuxt-link to="/"><img class="h-24 lg:h-32 mt-5" src="~/assets/images/12-2.png" alt=""></nuxt-link>
        </div>


        <div class="w-full flex justify-between items-center bg-black p-5">
                <nuxt-link to="/blog"><button class="md:ml-10 bg-black border border-white hover:bg-white hover:text-gray-700 text-white p-2 md:p-3 md:w-40 transition ease-in-out duration-500 focus:outline-none md:flex md:flex-row md:items-center" > <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg><span class="hidden md:block"> All Articles</span> </button></nuxt-link>
                <div>
                    <span class="border border-blue-500 py-1 px-3 rounded-full bg-blue-500 font-bold mx-1 md:mx-3"> {{ article.tags }} </span>
                    <span v-if="article.featured === true " class="border border-gold py-1 px-3 rounded-full bg-gold font-bold text-black"> Featured Article </span>
                </div>
        </div>


        <div class="content h-auto md:grid md:grid-cols-4 md:gap-3 ">



                <div class="postIntro col1 md:col-span-3">
                <!-- POST INTRO -->
                    <div class="w-4/5 my-0 mx-auto py-8">
                        <img class="rounded-lg" :src="article.img" :alt="article.alt">
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 mx-8 md:mx-20 ">
                        <div class="col1 shadow-lg rounded-lg border border-gray-300">
                            <!-- TOC -->
                            <nav class="p-8">
                                <h2 class="text-center font-bold text-gold p-3"> Table of Contents </h2>
                                <ul>
                                    <li v-for="link of article.toc" :key="link.id" :class="{ 'py-2 hover:text-gold text-lg font-bold border-b': link.depth === 2, 'ml-2 pb-2 p-3 hover:text-gold text-gray-600 border-b': link.depth === 3 }">
                                        <NuxtLink :to="`#${link.id}`"> {{ link.text }}</NuxtLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col2">
                            <!--Pinterest Image with pin it functionality -->
                            <img class="mx-auto lg:mx-3 my-5 lg:my-0" :src="article.pinterestImg" :alt="article.pinAlt">
                        </div>
                    </div>
                <!--Embedded Youtube Video -->

                <!-- blank line -->
                    <figure v-show="article.youtube === true" class="video_container my-5 mx-5">
                        <iframe :src="article.youtubeSrc" frameborder="0" allowfullscreen="true"> </iframe>
                    </figure>
                    <!-- blank line -->

                <!-- Button to subscribe -->
                    <app-youtube />
                <!-- POST CONTENT - END OF INTRO -->
                <div class="text-black text-lg mx-20 mt-8 italic"> Article published: {{ formatDate(article.createdAt) }} </div>
                <nuxt-content class="coreContent mx-5 pl-2 md:px-8" :document="article" />

                
                
                <!-- Social Share Article -->
                
            
                
                <!-- Next and Previous -->
                <div>
                    <prev-next :prev="prev" :next="next" class=""/>
                </div>
                <!-- Related Articles -->

                <!-- Disqus Comments -->
                <div class="comments mx-5 pl-2 md:pl-8">
                    <Disqus shortname="camdev" />
                </div>
                

                


            </div>
        <aside class="col2-sidebar md:col-span-1 hidden md:block">
            <!--component to be imported-->
            <app-sidebar></app-sidebar>
        </aside>
        </div>
        <!-- Go to www.addthis.com/dashboard to customize your tools -->

</article>
<Appfooter />

</div>

</template>

<script>
import appSidebar from "../../components/appsidebar";
import prevNext from "../../components/prevnext";
import { Disqus } from 'vue-disqus';

    export default {
        head() {
        return {
            title: this.article.title,
            meta: [
                    {
                        hid: this.article.description,
                        name: 'description',
                        content: 'Blog'
                    },
					{
						name: 'keywords', 
						content: this.article.keywords
					}
                ],
            link: [
                { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"  }
            ],
            script: [
                { type: 'text/javascript', src:'https://platform-api.sharethis.com/js/sharethis.js#property=5f74731cd6bec30019bb9fef&product=sop', async: 'async' }
            ]
            }
        },
        async asyncData({ $content, params }) {
            const article = await $content('articles', params.slug).fetch()

            const [prev, next] = await $content('articles')
                .only(['title', 'slug'])
                .sortBy('createdAt', 'asc')
                .surround(params.slug)
                .fetch()

            return { 
                article,
                prev,
                next,
            }
        },
        components: {
            'app-sidebar': appSidebar,
            'prev-next': prevNext,
        },
        methods: {
        formatDate(date) {
            const options = { day: 'numeric', month: 'short', year: 'numeric' }
            return new Date(date).toLocaleDateString('en-GB', options)
            }
        }
    }
</script>

<style scoped>
    #articleHeader {
        height: 400px;
    }

    #articleHeader h1 {
        font-size: 4.0em;
    }

    #articleHeader h1:after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 40%;
        padding-top: 20px;
        border-bottom: 1px solid gray;
    }
   
   @media screen and (max-width: 768px){
      #articleHeader h1 {
        font-size: 3.0em;
    }
   }

  @media screen and (max-width: 500px){
      #articleHeader h1 {
        font-size: 2.0em;
    }
  }
</style>

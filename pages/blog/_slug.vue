<template>
    <article class="mt-56 lg:mt-24 mb-8">


        <section id="articleHeader" class="bg-black text-white flex flex-col items-center justify-around">
            <h1 class="text-center"> {{ article.title }} </h1>
            <p class="mx-8 md:mx-20 lg:mx-32 text-md md:font-bold tracking-wider"> {{ article.description }} </p>
            
            
            <!--Back to All Articles -->
            <div class="w-full flex justify-evenly md:justify-between items-center">
                <nuxt-link to="/blog"><button class="ml-6 md:ml-10 hidden md:block bg-black border border-white hover:bg-white hover:text-gray-700 text-white p-2 md:p-3 w-40 transition ease-in-out duration-500 focus:outline-none md:flex md:flex-row md:items-center" > <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg> All Articles </button></nuxt-link>
                <span class="text-gray-500 text-lg"> {{ formatDate(article.createdAt) }} </span>
                <span class="border border-blue-500 py-1 px-3 rounded-full bg-blue-500 font-bold mr-10"> {{ article.tags }} </span>
            </div>
            <!-- Tags or Category of article -->
        </section>



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
                        </div>
                    </div>
                <!--Embedded Youtube Video -->
                <!-- Button to subscribe -->


                <!-- POST CONTENT - END OF INTRO -->
                
                <nuxt-content class="coreContent mx-5 my-5 md:mx-8 md:my-8 p-2" :document="article" />

                <span v-if="article.featured === true "> Featured Article </span>
                
                <!-- Social Share Article -->
                <div class="addthis_inline_share_toolbox text-center"></div>
                
                <!-- Next and Previous -->
                <div>
                    <prev-next :prev="prev" :next="next" class=""/>
                </div>
                <!-- Related Articles -->

                <!-- Disqus Comments -->

                <div id="disqus_thread" class="mx-8"></div>
                <script>
                    (function() {
                    var d = document, s = d.createElement('script');
                    s.src = 'https://camdev.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                    })();   
                </script>
                <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>


            </div>
        <aside class="col2-sidebar md:col-span-1 hidden md:block">
            <!--component to be imported-->
            <app-sidebar></app-sidebar>
        </aside>
        </div>
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f6f35b8f80ce631"></script>
        <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5f6f35b8f80ce631"></script>
        <script id="dsq-count-scr" src="//camdev.disqus.com/count.js" async></script>
</article>
</template>

<script>
import appSidebar from "../../components/appSidebar";

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
                next 
            }
        },
        components: {
            'app-sidebar': appSidebar
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

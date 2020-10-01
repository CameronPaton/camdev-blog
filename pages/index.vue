<template>
    <div>
    <Appheader />
    <main class="mt-56 lg:mt-24 grid grid-cols-4 grid-rows-9 h-auto">

        <!--Showcase Section -->

        <div id="row1" class="h-screen col-start-1 col-end-5 col-span-4 row-span-1 row-start-1 row-end-2 relative">
          <div id="overlay" class="h-screen bg-black flex flex-col items-center">
            <div id="heroBranding" class="h-screen flex flex-col items-center justify-center md:justify-evenly">
              <img class="w-64 md:w-6/12" id="showcaseBrand" src="~/assets/images/narrow.png" alt="camdev digital development">
              <div id="callToAction" class="text-white bg-red-800 text-center p-5 rounded-lg tracking-wider w-48 mt-5 md:mt-0 md:w-4/12">
              <p class="text-white text-lg font-extrabold text-center">Read the latest articles to enhance your digital life</p>
              <nuxt-link to="/blog"><button class="p-4 border bg-black text-white rounded-lg uppercase font-extrabold hover:bg-red-800 hover:border-black hover:text-black transition ease-in-out duration-500 mt-8"> See Articles </button></nuxt-link>
              <img src="~/assets/images/23.png" alt="Cameron Paton">
              </div>
            </div>
          </div>
          
        </div>

        <!--About Section -->

        <section id="row2" class="row-span-1 row-start-2 row-end-3 col-start-1 col-end-5 col-span-4">
            <div><h2 class="text-center mt-8">Camdev Digital Development</h2></div>
            <div >
              <p class="mt-8 text-sm md:text-md lg:text-lg px-8 md:px-20 text-gray-700">
                Thankyou for visiting my blog site! The username I use for blogging and vlogging is Camdev but my name is Cameron and I created this site as a hub for online content that I intend to develop. Digital Development is the general theme of the content, which will cover a broad spectrum of categories in the digital world such as: web development and design; useful software; devices; digital media and digital marketing. My aim is to create a central resource hub for information containing both articles and videos. 
              </p>
              <p class="mt-8 text-sm md:text-md lg:text-lg px-8 py-5 md:px-20 text-gray-700">
                In the future I plan to create regular blog articles, online courses, free useful content, ebooks, videos and freelancing services which will be available through this website. I also have a Youtube channel which I will use to supplement any tutorials I make so please subscribe to that. Enter your email address below to subscribe to this site and you will receive updates on new content, services or latest news. 
              </p>
            </div>
        </section>

        <!--Branding and motto - ties in with parallax image somehow? -->

        <div id="row3" class="bg-red-800 row-span-1 row-start-3 row-end-4 col-start-1 col-end-5 col-span-4 flex items-center justify-center">
            <div id="row3-col-1" class="border-l-4 border-white pl-5 font-extrabold text-yellow-400 w-64"><h1>Make Your Digital Life More Efficient</h1></div>
        </div>

        <!--Parallax Image -->

        <div id="row4" class="row-start-4 row-end-5 col-start-1 col-end-5 col-span-4">
            <div id="parallaxImage"></div>
        </div>

        <!--paste the three additional Sections here when ready to expand -->
        <!--Free Content -->
        <!--Youtube -->
        <!--Instagram -->

        <!--Featured Post -->

        <div id="row8" class="row-start-8 row-end-9 col-start-1 col-end-5 col-span-4">
            <h2 class="text-center font-extrabold font-lg mt-8"> Featured Post </h2>
            <div class="mt-8 mx-5">
              <ul id="row8Featured">
                <li v-for="featuredArticle of featuredArticles" :key="featuredArticle.slug">
                  <nuxt-link :to="{ name: 'blog-slug', params: { slug: featuredArticle.slug } }" class="md:grid md:grid-cols-4 md:gap-4">
                  <!-- Image -->
                    <img :src="featuredArticle.img" class="md:cols-span-1 rounded-lg w-full h-56 object-cover" />
                  <!--description, title --> 
                  <div class="md:flex md:flex-col md:justify-between md:col-span-3">
                    <div class="m-3">
                        <h3 class="font-bold text-2xl text-center p-3 md:text-left">{{ featuredArticle.title }}</h3>
                        <p class="p-3">{{ featuredArticle.description }}</p>
                    </div>
                    <div class="flex flex-row items-center justify-between m-3">
                        <span class="text-white p-3 italic"> {{ formatDate(featuredArticle.createdAt) }} </span>
                        <span class="border border-blue-500 py-1 px-3 rounded-full bg-blue-500 font-bold text-white"> {{ featuredArticle.tags }} </span>
                    </div> 
                  </div>
                  </nuxt-link>
                </li>
              </ul>
            </div>
        </div>
      
        <!--Recent Articles -->

        <div id="row9" class="bg-blue-200 row-start-9 row-end-10 col-start-1 col-end-5 col-span-4 h-auto mt-8">
            <h2 class="text-center mt-8">Recent Articles</h2>
          <div class="py-8">
            <ul class="mx-5">
              <li class="my-5" v-for="article of articles" :key="article.slug">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="md:grid md:grid-cols-4 md:gap-4">
                    <img :src="article.img" class="md:cols-span-1 rounded-lg w-full h-56 object-cover" />
                  <div class="md:flex md:flex-col md:justify-between md:col-span-3">
                    <div class="m-3">
                        <h3 class="font-bold text-2xl text-center md:text-left p-3">{{ article.title }}</h3>
                        <p class="p-3">{{ article.description }}</p>
                    </div>
                    <div class="flex flex-row items-center justify-between m-3">
                        <span class="text-gray-500 p-3 italic"> {{ formatDate(article.createdAt) }} </span>
                        <span class="border border-blue-500 py-1 px-3 rounded-full bg-blue-500 font-bold text-white"> {{ article.tags }} </span>
                    </div>
                  </div>
                </NuxtLink>
              </li>
            </ul>
          </div>
         
        </div>
    

  </main>
   <Appfooter />
</div>
</template>

<script>

export default {

  head() {
            return {
                title: 'Camdev | Cameron Paton',
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Camdev | Cameron Paton'
                    },
					{
						name: 'keywords', 
						content: 'about me, who am I'
					}
                ]
            }
        },
        async asyncData({ $content, params }) {
            const featuredArticles = await $content('articles', params.slug)
                .only(['title', 'description', 'img', 'slug', 'createdAt', 'tags'])
                .where({ featured: true })
                .limit(1)
                .fetch()

            const articles = await $content('articles', params.slug)
                .only(['title', 'description', 'img', 'slug', 'createdAt', 'tags', 'featured'])
                .sortBy('createdAt', 'asc')
                .limit(3)
                .fetch()

            return {
                articles,
                featuredArticles
            }
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

#row1 {
  background-image: url('https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2901&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
}

#row2 {
  height: 500px;
}

h2 {
        font-size: 1.5em;
        text-decoration: none;
        color: black;
        font-weight: bold;
        display: block;
        text-align: center;
}

h2:after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 5%;
  padding-top: 20px;
  border-bottom: 2px solid #8e0b0b;
  
}

#row3 {
  height: 400px;
  background-image: url('../assets/images/23.png');
  background-repeat: no-repeat;
  background-position: right;
  position: relative;
}

#row3:after {
  content: '';
  background: rgba(0,0,0,0.7);
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

#row3-col-1 {
  font-size: 2em;
  width: 50%;
  position: absolute;
  z-index: 2;
}

#row4 {
    background-image: url('../assets/images/BenMacDui.JPG');
    min-height: 600px;
    position: relative;
    background-position: center 10%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: scroll;
}

#row8{
  height: auto;
  background-color: white;
}

#row8Featured {
  background: #cbb26a;
  border-radius: 1em;
  padding: .8em;
  margin: 1em 0;
  box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.04);
}

#row8Featured h3 {
  font-size: 1.5em;
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin: -.1em 0 .2em;
  
}

#row9 h3{
  font-size: 1.5em;
  text-decoration: none;
  font-weight: bold;
  display: block;
  margin: -.1em 0 .2em;
}

#row9 ul li{
  background: white;
  border-radius: 1em;
  padding: .8em;
  box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.04);
}

#overlay {
  background: rgba(0,0,0,0.7)
}

@media screen and (max-width: 768px){
  h2:after {
  content: '';
  display: block;
  margin: 0 auto;
  width: 10%;
  padding-top: 20px;
  border-bottom: 2px solid #8e0b0b;
}

#row2 {
  height: 600px;
}
}

@media screen and (max-width: 500px){
  #row2 {
    height: 700px;
  }
}

@media screen and (max-width: 300px){
  #row2 {
    height: 900px;
  }
  #row4 {
    background-position: center;
  }
}


</style>

<!--
additional sections to be added later:
  
  <div id="row5" class="bg-yellow-500 h-64 row-start-5 row-end-6 col-start-1 col-end-5 col-span-4">
            <h3> Free Content Ebooks or templates or guides </h3>
        </div>

        <div id="row6" class="bg-purple-500 h-64 row-start-6 row-end-7 col-start-1 col-end-5 col-span-4">
            <h3> Youtube Videos </h3>
        </div>

        <div id="row7" class="bg-gray-500 h-64 row-start-7 row-end-8 col-start-1 col-end-5 col-span-4">
            <h3> Instagram </h3>
        </div>
-->
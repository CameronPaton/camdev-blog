<template>
    <footer>
        <!--Branding-->
        <div class="flex justify-center border-t-2 border-grey-400"> 
            <img class="h-64" src="~/assets/images/22.png" type="image" alt="Branding Camdev Digital Development Logo">
        </div>
        <!--Subscribe-->
        <div class="appsubscribe flex items-center justify-center bg-teal-600">
            <div class="flex flex-col items-center bg-white rounded-lg w-9/12 md:w-1/3">
                <div class="text-black text-xl p-4"><p>Subscribe to the newsletter to receive monthly updates on new articles, videos or free content:</p></div>
                <appsubscribe class="w-48 md:w-56 text-center p-3 m-4 h-16 bg-primary text-white text-xl md:text-2xl hover:bg-red-500 transition ease-in-out duration-500"> </appsubscribe>
            </div>
        </div>
        
        <!--Author-->
        <div id="authorFooter" class="bg-black flex flex-col items-center justify-center">
            <div class="flex items-center justify-center">
                <img class="authorImage w-48 mt-10 lg:w-64 z-0" src="~/assets/images/profile_pic_circle.png" type="image" alt="profile picture of camdev">
            </div>
            <div class="flex items-center justify-center -mt-10">
                <div id="footerAbout" class="bg-red-800 text-white rounded-lg flex flex-col items-center justify-center">
                    <p class="px-3 text-center text-sm md:text-md">I'm Cameron and thanks for visiting my website. To get occasional updates on when I publish a new article please enter your email above to subscribe.</p>
                    <br>
                    <p class="px-3 text-center mb-5 text-sm md:text-md">To see more about me, click below to visit the About page:</p>
                    <nuxt-link to="/about"><button class="border border-white hover:bg-red-300 hover:text-gray-800 hover:border-red-900 transition ease-in-out duration-500 rounded-lg p-3 uppercase text-sm md:text-lg">See More</button></nuxt-link>
                </div>
            </div> 
        </div>
        <!--Tech Stack-->
        <div id="footerTechStack" class="bg-gray-600"> 
            <ul class="grid grid-cols-3">
                <li v-for="(stackItem, index) in stackItems" :key="index" class="flex items-center justify-center flex-col">
                    <img :src="stackItem.logo" :alt="stackItem.logoalt" class="w-15 h-12 md:w-26 md:h-24 mt-10">
                    <div class="itemName text-white text-xl md:font-semibold mt-10">
                        <h3> {{ stackItem.title }} </h3>
                    </div>
                </li>
            </ul>
        </div>
        <!--Social Media-->
        <div id="footerSocial" class="flex flex-row justify-evenly items-center bg-gray-800"> 
            <a href="https://www.pinterest.co.uk/cameronpaton86/" target="_blank"><img class="h-8 w-8 md:h-12 md:w-12" src="~/assets/images/pinterest.png" type="image" alt="pinterest Camdev Cameron Paton"></a>
            <a href="https://github.com/CameronPaton" target="_blank"><img class="h-8 w-8 md:h-12 md:w-12" src="~/assets/images/github.png" type="image" alt="github Camdev Cameron Paton"></a>
            <a href="https://www.linkedin.com/in/cameronpaton86/" target="_blank"><img class="h-8 w-8 md:h-12 md:w-12" src="~/assets/images/linkedIn.png" type="image" alt="linkedIn Camdev Cameron Paton"></a>
            <a href="https://www.instagram.com/cameronpaton86/" target="_blank"><img class="h-8 w-8 md:h-12 md:w-12" src="~/assets/images/instagram.png" type="image" alt="instagram Camdev Cameron Paton"></a>
            <a href="https://youtube.com/channel/UCVX2Z0tBQFjmqA9mxVPmm8w" target="_blank"><img class="h-8 w-8 md:h-12 md:w-12" src="~/assets/images/youtube.png" type="image" alt="youtube Camdev Cameron Paton"></a>
            <a href="https://twitter.com/cameronpaton86" target="_blank"><img class="h-8 w-8 md:h-12 md:w-12" src="~/assets/images/twitter.png" type="image" alt='twitter Camdev Cameron Paton'></a>
        </div>
    </footer>
</template>

<script>


    export default {
        name: 'AppFooter',
        data () {
            return {
                stackItems: [
                    {
                        logo: require('@/assets/images/nuxtLogo.png'),
                        title: 'NuxtJS',
                        logoalt: 'Created the frontend with Nuxt NuxtJS Nuxtjs'
                    },
                    {
                        logo: require('@/assets/images/vue.png'),
                        title: 'VueJS',
                        logoalt: 'Powered by VueJS'
                    },
                    
                    {
                        logo: require('@/assets/images/tailwind.png'),
                        title: 'TailwindCSS',
                        logoalt: 'Styled with Tailwind CSS'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
#authorFooter {
    height: 600px;
}

.appsubscribe {
    height: 400px;
}

#footerAbout {
    width: 70%;
    height: 400px;
    margin-bottom: 10px;
}


#footerTechStack {
    height: 250px;
}

#footerSocial {
    height: 150px;
}

@media all and (min-width: 520px) {

    #authorFooter {
        height: 600px;
    }
    #footerAbout {
        width: 50%;
        margin-bottom: 10px;
    }

}

@media all and (min-width: 767px) {

    #authorFooter {
        height: 600px;
    }  

    #footerAbout {
        width: 30%;
        margin-bottom: 10px;
    }
}

@media all and (min-width: 1024px) {

    #footerAbout {
        padding-top: 30px;
        height: 350px;
        width: 25%;
        margin-bottom: 20px;
    }
}


</style>
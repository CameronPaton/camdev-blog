<template>
    <div id="sideBarContent" class="flex flex-col items-center justify-between mb-5">
        <!-- Author -->
        <div>
            <div>
                <img class="authorImage mt-10 mx-auto md:w-40 lg:w-56" src="@/assets/images/profile_pic_circle.png" alt="profile picture of camdev Cameron Paton">
            </div>

            <div class="bg-red-800 text-white rounded-lg -mt-8 w-11/12 m-auto flex flex-col items-center justify-center">
                    <p class="px-3 pt-10 text-center text-sm lg:text-md">I'm Cameron and thanks for reading my article. To get occasional updates on when I publish a new article please enter your email below to subscribe. I also have a Youtube channel you can subscribe with below and social media links you can follow me on. </p>
                    <br>
                    <p class="px-3 text-center mb-5 text-sm lg:text-md">To see more about me, click below to visit the About page:</p>
                    <nuxt-link to="/about"><button class="border border-white hover:bg-red-300 hover:text-gray-800 hover:border-red-900 transition ease-in-out duration-500 rounded-lg p-3 uppercase md:text-md lg:text-lg mb-5">See More</button></nuxt-link>
            </div>
        </div>

        <!-- Categories -->
        <div class="my-5 mx-5 border border-gray-400 p-3">
            <div>
                <h3 class="text-lg text-center my-3">Blog Categories: </h3>
            </div>

        <!-- Follow Me -->
        <div>
            <app-socialmedia></app-socialmedia>
        </div>

        <!-- Subscribe to Youtube Channel (add later) 
        <div>

        </div>
        -->

        <!-- Sign Up -->
        <div>
            <app-subscribe></app-subscribe>
        </div>
    </div>
</template>

<script>
import appSocialMedia from "../components/socialmedia";
import appSubscribe from "../components/appsubscribe";

    export default {
            name: 'appSidebar',
            components: {
                'app-socialmedia': appSocialMedia,
                'app-subscribe': appSubscribe,
            }
    };
    
</script>

<!-- Subscribe to Youtube Channel (add later) -->
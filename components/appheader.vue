<template>
    <header class="shadow-md h-56 lg:h-24 flex flex-col items-center lg:flex-row lg:justify-between">

        <div id="brandingLogo" class="flex mt-3 lg:order-2 lg:mb-3 lg:mr-12">
            <nuxt-link to="/">
                <img class="w-20 h-20" src="~/assets/images/2.png">
            </nuxt-link>
        </div>

        <nav class="lg:order-1">
            <ul class="md:text-lg pt-3 lg:pt-0 border-t-2 lg:border-none mt-5 flex flex-row text-gray-600">
                <li class="navItem list-none mr-5 md:mr-16 lg:mr-10 lg:ml-5 md:pb-1 hover:text-red-800 transition ease-in duration-500"><nuxt-link to="/"> Home</nuxt-link></li>
                <li class="navItem list-none mr-5 md:mr-16 lg:mr-10 md:pb-1 hover:text-red-800 transition ease-in duration-500"><nuxt-link to="/blog"> Blog</nuxt-link></li>
                <li class="navItem list-none hover:text-red-800 md:pb-1 transition ease-in duration-500"><nuxt-link to="/about"> About</nuxt-link></li>
            </ul>
        </nav>

        

        <div class="p-0 w-56 md:w-64 h-10 lg:order-3 lg:mr-5 my-auto">
            <app-search></app-search>
        </div>
    </header>
</template>

<script>
import appSearch from '../components/appsearch';

    export default {
        name: 'AppHeader',
        components: {
            'app-search': appSearch
        }
            
    }

</script>

<style scoped>
header {
 position: fixed;
 top: 0;
 left: 0;
 z-index: 9999;
 width: 100%;
 background-color: white;
}

nav {
    font-family: 'Montserrat', sans-serif;
}

.navItem {
    letter-spacing: 0.2em;
}

</style>
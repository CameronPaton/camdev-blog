<template>
        <form>
            <div class="flex flex-row items-center justify-center">
                <svg class="w-6 h-6 text-gray-500 -mr-8 z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input v-model="searchQuery" type="search" autocomplete="off" placeholder="Search Articles..." class="block w-full border  border-gray-400 rounded-lg pl-10 py-3 text-gray-700 outline-none focus:border-gray-500 focus:bg-white" />
            </div>
            <ul v-if="articles.length" class="z-10 absolute w-auto flex-1 top-40 bg-white dark:bg-gray-900 rounded-md border border-gray-300 overflow-hidden">
                <li v-for="article of articles" :key="article.slug">
                    <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }" class="flex px-4 py-2 items-center leading-5 transition ease-in-out duration-150 text-red-800 hover:text-black">
                        {{ article.title }}
                    </NuxtLink>
                </li>
            </ul>
        </form>
</template>

<script>
    export default {
        data() {
            return {
                searchQuery: '',
                articles: []
            }
        },
    watch: {
        async searchQuery(searchQuery) {
                if (!searchQuery) {
                    this.articles = []
                    return
                }
                this.articles = await this.$content('articles')
                .limit(6)
                .search(searchQuery)
                .fetch()
        }
    }
}
</script>

<style scoped>

</style>
<template>
    <div>
        <input v-model="searchQuery" type="search" autocomplete="off" placeholder="Search Articles..." class="border border-solid border-grey-600 rounded-lg outline-none w-full h-full p-2" />
        <ul v-if="articles.length" class="w-full bg-white">
            <li v-for="article of articles" :key="article.slug" class="p-3 border border-b-gray-500 font-bold">
                <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">
                    {{ article.title }}
                </NuxtLink>
            </li>
        </ul>
    </div>
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
                if(!searchQuery) {
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
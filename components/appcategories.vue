<template>
     
</template>

<script>
    export default {
        async asyncData({ $content, params }) {
                const tags = await $content('tags', params.slug)
                    .only(['name', 'description', 'img', 'slug'])
                    .sortBy('createdAt', 'asc')
                    .fetch()
                return {
                    tags
                }
            }
    }
</script>
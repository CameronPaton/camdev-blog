<template>
    <div class="my-5 mx-5 border border-gray-400 p-3">
        <div>
            <h3 class="text-lg text-center my-3">Blog Categories: </h3>
        </div>

        <div class="grid md:grid-rows-3 md:grid-cols-2 md:gap-5 lg:grid-rows-2 lg:grid-cols-3 lg:gap-5">
            <img src="~/assets/images/categories/noBg/2.png">
            <img src="~/assets/images/categories/noBg/3.png">
            <img src="~/assets/images/categories/noBg/4.png">
            <img src="~/assets/images/categories/noBg/5.png">
            <img src="~/assets/images/categories/noBg/6.png">
            <img src="~/assets/images/categories/noBg/7.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'appCategories',
        data() {
            return {
                categoryIcons: [
                    {
                        name: 'health',
                        src: '~/assets/images/categories/1.png'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div>
    <headerPage />
    <productPage/>
</div>
</template>
    <script>
    import headerPage from '../components/headerPage.vue'
    import productPage from '@/components/productPage.vue';
    
    export default{
        name: 'mainView',
        components:{
            headerPage,
            productPage
        }
    }
    
    </script>
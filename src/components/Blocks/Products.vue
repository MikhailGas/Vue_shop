<template>
    <section class="featured center">
        <h3 class="featured_title">Fetured Items</h3>
        <p class="featured_text">Shop for items based on what we featured in this week</p>
        <div class="products-box">
            <div class="product" v-for="product in PRODUCTS" :key="product.id">
                <a href="#"><img :src="require('../../assets/img/' + product.img)" alt="Product__1" class="product__img" ></a>
                <div class="product__text">
                    <a class="product__name">{{ product.name }} </a>
                    <div class="product__price">{{ product.price }}</div>
                </div>
                <a @click="ADD_TO_CART(product)"  class="add_to_cart"><img class="add_to_cart_img" src="../../assets/img/Forma_1_copy.svg" alt="">Добавить в козину</a>
            </div>
            
        </div>
    </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';



export default {
    name: 'prpducts',
    computed:{
        ...mapGetters([
        'PRODUCTS',
        ]),
    },
    methods:{
        ...mapActions([
         'ADD_TO_CART',
        ]),
        
    }
}
</script>

<style scoped>
    .add_to_cart{
        cursor:pointer;
    }
</style>
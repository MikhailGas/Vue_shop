<template>
    <div class="header__cart" @click="isShow = !isShow">
                    <img  src="@/assets/img/cart.svg" alt="cart">
                    <div class="cart__box" v-if="isShow">
                        <div class="cart__products" v-for="product in CART" :key="product.id">
                            <img :src="require('../../assets/img/' + product.img)" alt="cart_1" class="product__cart__img">
                            <div class="product__cart__text">
                                <a href="#" class="product__cart__name">{{ product.name }}</a>
                                <rating rating="product.rating" />
                                <p class="product__cart__price">{{ product.quantity }}  x   {{ product.price }}</p>
                            </div>
                            <p class="product__delete"><i class="fa fa-times-circle"></i></p>
                        </div>
                        
                        <div class="total__price">
                            <p class="total">TOTAL</p>
                            <p class="price">$500.00</p>
                        </div>
                        <a href="checkout.html" class="cart__button">Checkout</a>
                        <a href="cart.html" class="cart__button">Go to cart</a>
                    </div>
                </div> 
</template>

<script>
import rating from './rating'
import {mapGetters} from 'vuex'


export default {
    data(){
        return{
            isShow:false,
        }
    },
    name:'cartbox',
    components:{
        rating,
    },
    computed:{
        ...mapGetters(['CART'])
    }
}
</script>
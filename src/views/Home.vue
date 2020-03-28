<template>
  <div>
    <header-block/>
    <nav-block/>
    <slider/>
    <category/>
    <products/>
    <div class="button__wrepper center">
        <a href="#" class="product__button">Browse All Product</a>
    </div>
    <feature/>
    <subscribe/>
    <footer-block/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HeaderBlock from '@/components/Blocks/Header.vue'
import NavBlock from '@/components/Blocks/Nav.vue'
import Slider from '@/components/Blocks/Slider.vue'
import Category from '@/components/Blocks/Category.vue'
import Products from '@/components/Blocks/Products.vue'
import Feature from '@/components/Blocks/Feature.vue'
import Subscribe from '@/components/Blocks/Subscribe.vue'
import FooterBlock from '@/components/Blocks/Footer.vue'
document.title = 'Домашняя'

export default {
  name: 'Home',
  components: {
    HeaderBlock,
    NavBlock,
    Slider,
    Category,
    Products,
    Feature,
    Subscribe,
    FooterBlock,
  },
  
}
</script>

<style lang="css">
  
</style>

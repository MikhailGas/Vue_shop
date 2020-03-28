<template>
     <header class="header">
        <div class="header__wrapper center">
            <div class="header__left">
                <a class="logo" href="#"><img class="logo__img" src="@/assets/img/logo.png" alt="Logo">BRAN<span class="brand">D</span></a>
                <form class="header__form" action="#">
                   <div class="wrapper__browse">
                        <a href="#" class="button__browse" type="button">Browse &#x25BC;</a>
                        <div class="drop__box">
                                  <div class="drop__box__item">
                                   <h3 class="drop__item__title">Women</h3>
                                   <ul class="drop__menu">
                                       <li class="drop__list"><a href="#" class="drop__link">Dresses</a></li>
                                       <li class="drop__list"><a href="#" class="drop__link">Tops</a></li>
                                       <li class="drop__list"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                       <li class="drop__list"><a href="#" class="drop__link">Jackets/Coats</a></li>
                                   </ul>
                                   <h3 class="drop__item__title">Women</h3>
                                   <ul class="drop__menu">
                                       <li class="drop__list"><a href="#" class="drop__link">Dresses</a></li>
                                       <li class="drop__list"><a href="#" class="drop__link">Tops</a></li>
                                       <li class="drop__list"><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                   </ul>
                               </div>

                           </div>
                   </div>
                    
                    
                    <input class="search__field" type="text" >
                    <div class="search__button"><i class="fas fa-search"></i></div>
                </form>
            </div>
            
            <div class="header__right">
                <cart-box />
                
                <a href="#" class="myAccount__button" type="button">My Account &#x25BC;</a>
            </div>
        </div>
            
        
    </header>
</template>

<script>
import CartBox from '../Elements/CartBox.vue'

export default {
    name:'header-block',
    components:{
        CartBox,
    }
}
</script>

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
                <div class="header__cart">
                    <img  src="@/assets/img/cart.svg" alt="cart">
                    <div class="cart__box">
                        <div class="cart__products">
                            <img src="@/assets/img/cart_1.png" alt="cart_1" class="product__cart__img">
                            <div class="product__cart__text">
                                <a href="#" class="product__cart__name">Rebox Zane</a>
                                <div class="product__raiting">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <p class="product__cart__price">1  x   $250</p>
                            </div>
                            <p class="product__delete"><i class="fa fa-times-circle"></i></p>
                        </div>
                        <div class="cart__products">
                            <img src="@/assets/img/cart_2.png" alt="cart_2" class="product__cart__img">
                            <div class="product__cart__text">
                                <a href="" class="product__cart__name">Rebox Zane</a>
                                <div class="product__raiting"> <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                                <p class="product__cart__price">1  x   $250</p>
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
                
                <a href="#" class="myAccount__button" type="button">My Account &#x25BC;</a>
            </div>
        </div>
            
        
    </header>
</template>

<script>
export default {
    name:'header-block'
}
</script>

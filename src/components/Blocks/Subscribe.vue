<template>
    <section class="subscribe">
      
       <div class="subscribe__bg">
          <div class="subscribe__content center">
            <div class="subscribe__slider">
                <img src="@/assets/img/photo.png" alt="" class="slider__photo">
                <div class="slider__text">
                    <p class="text__message">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
                    <p class="text__name">Bin Burhan</p>
                    <p class="text__city">Dhaka, Bd</p>
                    <div class="slider__poiter">
                        <div class="pointer__item"></div>
                        <div class="pointer__item pointer__item__active"></div>
                        <div class="pointer__item"></div>
                    </div>
                </div>
                
            </div>
            <form action="#" class="subscribe__form">
                <h3 class="form__title">Subscribe </h3>
                <p class="form__text">FOR OUR NEWLETTER AND PROMOTION</p>
                <input type="email" class="form__field" placeholder="Enter Your Email" required>
                <input type="submit" class="form__button" value="Subscribe">
            </form>
          </div>
           
       </div>
        
    </section>
</template>

<script>
export default {
    name: 'subscribe'
}
</script>
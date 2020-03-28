<template>
    <div class="product__raiting" >
        
        <i class="fa-star" :class="classList" v-for="classList in getRating(rating)" :key="classList.index"></i>
        
    </div>
</template>

<script>
export default {
    name:'rating',
    data(){
        return{
           
        }
    },
    props:['rating'],
    methods:{
        
        getRating(rating){
            let ratings = [];
            if(rating > 5) reting = 5;
            for(let i = 0; i < rating; i++) ratings.push('fas')
            for(let i = 0; i < 5 - rating; i++) ratings.push('far')
            return ratings;
        }
    }
}
</script>
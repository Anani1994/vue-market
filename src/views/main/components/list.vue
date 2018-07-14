<template>
    <div class="goods">
        <!-- <router-link> -->
            <Card>
                <div class="img-goods">
                    <img :src="goodsList.src" />
                </div>
                <div class="des-goods">
                    <div>
                        <span class="price-goods">{{ goodsList.price }}</span>
                        <span class="num-sell-goods">{{ goodsList.num }}</span>
                    </div>
                    <div class="title-goods">{{ goodsList.title }}</div>
                </div>
            </Card>
        <!-- </router-link> -->
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        goodsList: Object
    },
    data () {
        return {

        }
    }
}
</script>


<style lang="less">
.goods {
    margin: 10px .5%;
    width: 24%;
    float: left;
    .img-goods {
        
    }
}
</style>


<template>
    <div class="goods">
        <!-- <router-link> -->
            <Card>
                <img :src="goodsList.src" />
                <div class="d-flex space-between num-goods">
                    <span class="price-goods">{{ goodsList.price }}</span>
                    <span class="num-sell-goods">{{ goodsList.num }}</span>
                </div>
                <div class="title-goods">{{ goodsList.title }}</div>
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
    img {
        display: block;
        height: 150px;
        margin: 0 auto;
    }
    .num-goods {
        margin: 10px;
    }
}
</style>


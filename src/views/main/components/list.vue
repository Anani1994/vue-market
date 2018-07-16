<template>
    <div class="list">
        <router-link :to="'/goods/' + goodsList.id">
            <Card>
                <img :src="goodsList.src" />
                <div class="d-flex justify-between num-goods">
                    <span class="color-error">${{ goodsList.price }}</span>
                    <span class="color-success">已售{{ goodsList.num }}</span>
                </div>
                <div class="color-content">{{ goodsList.title }}</div>
            </Card>
        </router-link>
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
.list {
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


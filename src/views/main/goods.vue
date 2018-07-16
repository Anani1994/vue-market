<template>
    <Row class="goods">
        <Col span="12">
            <img class="image-goods" :src="goods.src">
        </Col>
        <Col span="12">
            <div class="info-goods position-relative">
                <h2 class="title-goods">{{ goods.title }}</h2>
                <p>品牌： {{ goods.brand }}</p>
                <p class="color-error">单价： {{ goods.price }}元</p>
                <Button class="buy-button position-absolute" type="error" long>加入购物车 </Button>
            </div>
        </Col>
    </Row>
</template>

<script>
import goodses from '../../../remote-data/goods.js';
export default {
    name: 'Goods',
    data () {
        return {
            // 获取路由中的参数, 用于发送 ajax 请求获处理对应的商品
            id: parseInt(this.$route.params.id),
            goods: ''
        }
    },
    methods: {
        getGoodsInfo () {
            // 真实环境改为 ajax 获取
            this.goods = goodses.find(item => item.id === this.id);
        }
    },
    mounted () {
        this.getGoodsInfo();
    }
}
</script>

<style lang="less">
.goods {
    .image-goods {
        display: block;
        height: 500px;
    }
    .info-goods {
        height: 500px;
    }
    .title-goods {
        margin: 20px;
        text-align: center;
    }
    .buy-button {
        bottom: 0;
    }
}
</style>


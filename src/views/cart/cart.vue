<template>
    <div class="cart">
        <Table
            border
            ref="goodsSelection" 
            :columns="columnsDes" 
            :data="testCart"
            :no-data-text="noDataText">
        </Table>
        <Button @click="handleSelectAll(true)">商品全选</Button>
        <Button @click="handleSelectAll(false)">取消全选</Button>
        共计 {{ totalCount }} 件商品 应付 {{ totalPriceEst }} 元
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columnsDes: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '商品信息',
                        key: 'title',
                        ellipsis: true,
                        render: (h, params) => {
                            return h('div', [
                                h('img', {
                                    props: {
                                        src: params.row.src
                                    }
                                }),
                                h('strong', params.row.title)
                            ]);
                        }
                    },
                    {
                        title: '单价',
                        key: 'price',
                    },
                    {
                        title: '数量',
                        key: 'count',
                        align: 'center',
                        render: (h,params) => {
                            return h('div',[
                                h('Icon',{
                                    props: {
                                        type: 'plus-circled'
                                    },
                                    style: {
                                        marginRight: '10px'
                                    },
                                    on: {
                                        click: () => params.row.count += 1
                                    }
                                }),
                                h('span',params.row.count),
                                h('Icon',{
                                    props: {
                                        type: 'minus-circled'
                                    },
                                    style: {
                                        marginLeft: '10px'
                                    },
                                    on: {
                                        click: () => {
                                            if(params.row.count >1) {
                                                params.row.count -= 1
                                            }else {
                                                this.$Message.warning('商品数量不能再减少了')
                                            }
                                        }
                                    }
                                })
                            ])
                        }
                    },
                    {
                        title: '小记',
                        key: 'totalPrice',
                        render: (h,params) => {
                            return h('span',params.row.price * params.row.count)
                        }
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                totalPriceEst: 0,
                totalCount: 0,
                noDataText: '购物车居然是空的，赶快去商场选购吧'
            }
        },
        computed: {
            testCart() {
                return this.$store.state.cartList;
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '商品详细信息',
                    content: `商品名称：${this.testCart[index].title}<br>单价：${this.testCart[index].price}`
                })
            },
            remove (index) {
                this.testCart.splice(index, 1);
            },
            handleSelectAll (status) {
                this.$refs.goodsSelection.selectAll(status);
            }
        },
        mounted() {
            this.$store.dispatch('getCart');
        }
    }
</script>
<style lang="less">
.cart {
    margin: 10px auto;
    width: 99%;
}
</style>


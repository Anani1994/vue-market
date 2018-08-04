<template>
    <div class="cart">
        <Table
            border
            ref="goodsSelection" 
            :columns="columnsDes" 
            :data="testCart"
            :no-data-text="noDataText"
            @on-selection-change="handleSelectChange">
        </Table>
        <div class="select-button" v-if="testCart.length">
            <Button @click="handleSelectAll(true)">商品全选</Button>
            <Button @click="handleSelectAll(false)">取消全选</Button>
        </div>
        <div class="result-price" v-if="testCart.length">
            已选中
            <span class="color-error"> {{ totalCount }} </span>
            件商品 应付
            <span class="color-error"> {{ totalPriceEst }} </span>
            元
            <Button type="primary" @click="checkOut">现在结算</Button>
        </div>
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
                                    domProps: {
                                        src: params.row.src
                                    },
                                    style: {
                                        width: '50px',
                                        height: '50px',
                                        verticalAlign: 'middle'
                                    }
                                }),
                                h('div', {
                                    style: {
                                        display: 'inline-block',
                                        lineHeight: '50px'
                                    }
                                }, params.row.title)
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
                                        click: () => {
                                            this.totalCount = 0;
                                            this.totalPriceEst = 0;
                                            this.$store.dispatch('addCartGoods',{id: params.row.id}).then(() => params.row.count += 1);
                                        }
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
                                            this.totalCount = 0;
                                            this.totalPriceEst = 0;
                                            this.$store.dispatch('reduceCartGoods',{id: params.row.id}).then(data => {
                                                if(data === 0) {
                                                    this.$Message.warning('商品数量不能再减少了'); 
                                                }else {
                                                    params.row.count -= 1
                                                }
                                            });
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
                                }, '查看'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.$store.dispatch('removeCartGoods',{id: params.row.id});
                                            
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                totalPriceEst: 0,
                totalCount: '0',
                noDataText: '购物车居然是空的，赶快去商场选购吧',
                selected: []
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
                    content: `<p>商品名称：${this.testCart[index].title}</p>
                              <p>单价：${this.testCart[index].price}</p>
                              <img src="${this.testCart[index].src}">`
                })
            },
            handleSelectAll (status) {
                this.$refs.goodsSelection.selectAll(status);
            },
            handleSelectChange(selection) {
                this.selected = selection;
                this.totalCount = selection.reduce((total,item) => total + item.count,0);
                this.totalPriceEst = selection.reduce((total,item) => total + item.price * item.count,0);
            },
            checkOut() {
                let selectedID = [];
                this.selected.forEach(item => selectedID.push(item.id));
                if(selectedID.length < 1) {
                    this.$Message.error('请先选择您要购买的商品');
                    
                }else {
                    this.$store.dispatch('buySelected',{id: selectedID});
                }
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
    .select-button {
        padding: 2rem 1rem;
        float: left;
    }
    .result-price {
        padding: 5rem 3rem 2rem 1rem;
        float: right;
        font-size: 1rem;
    }
}
</style>


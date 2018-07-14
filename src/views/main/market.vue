<template>
    <div class="market clear-fix">
        <div>
            <span>品牌：</span>
            <span
                class="tag"
                v-for="item in brands"
                :class="{ active : item === filterBrand }"
                @click="handleFilterBrand(item)">{{ item }}</span>
        </div>
        <div>
            <span>尺寸：</span>
            <span
                class="tag"
                v-for="item in sizes"
                :class="{ active : item === filterSize }"
                @click="handleFilterSize(item)">{{ item }}</span>
        </div>
        <div>
            <span>颜色：</span>
            <span
                class="tag"
                v-for="item in colors"
                :class="{ active : item === filterColor }"
                @click="handleFilterColor(item)">{{ item }}</span>
        </div>
        <div class="search">
            <Input 
                v-model="searchVal" 
                placeholder="请输入关键字" 
                clearable
                icon="ios-search" 
                style="width: 200px"></Input>
        </div>
        <List
            v-for="(goodsList,index) in filteredGoodsList"
            :key="index"
            :id="goodsList.id"
            :goodsList="goodsList"></List>
    </div>
</template>

<script>
import List from './components/list.vue';
export default {
    name: 'Market',
    components: {
        List
    },
    data () {
        return {
            filterBrand: '全部',
            filterSize: '全部',
            filterColor: '全部',
            searchVal: ''
        }
    },
    computed: {
        colors () {
            return this.$store.getters.colors;
        },
        brands () {
            return this.$store.getters.brands;
        },
        sizes () {
            return this.$store.getters.sizes;
        },
        filteredGoodsList () {
            let list = this.$store.state.goodsList;
            return list;
        }
    },
    methods: {
        handleFilterBrand (item) {
            if(item !== this.filterBrand) {
                this.filterBrand = item;
            }
        },
        handleFilterSize (item) {
            if(item !== this.filterSize) {
                this.filterSize = item;
            }
        },
        handleFilterColor (item) {
            if(item !== this.filterColor) {
                this.filterSize = item;
            }
        }
    },
    mounted () {
        this.$store.dispatch('getGoodsList');
    }
}
</script>

<style lang=less>
.market {
    padding: 1%;
    .tag {
        display: inline-block;
        margin: 5px;
        padding: 5px 16px;
        color: #273444;
        cursor: pointer;
    }
    .active {
        border-radius: 2px;
        background: #4289dc;
        color: #fff;
    }
    .search {
        margin: 15px 0;
    }
}
</style>

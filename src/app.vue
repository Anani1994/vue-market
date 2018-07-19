<style lang="less">
    @import './assets/style/main.less';
</style>

<template>
    <div class="main">
        <Menu mode="horizontal" theme="dark" active-name="index">
            <Row>
                <Col span="8">
                    <router-link to="/">
                        <MenuItem name="index">
                            <Icon type="android-globe"></Icon>
                            市场
                        </MenuItem>
                    </router-link>
                </Col>
                <Col span="16">
                    <router-link to="/cart">
                        <MenuItem name="car" style="float: right;">
                            <Icon type="android-cart"></Icon>
                            购物车
                        </MenuItem>
                    </router-link>
                    <MenuItem name="car" style="float: right;">
                        <Icon type="person"></Icon>
                        登录
                    </MenuItem>
                </Col>
            </Row>
        </Menu>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

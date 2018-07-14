<style lang="less">
    @import './assets/style/main.less';
</style>

<template>
    <div class="main">
        <Menu mode="horizontal" theme="dark" active-name="index">
            <Row>
                <Col span="8">
                    <MenuItem name="index">
                        <Icon type="android-globe"></Icon>
                        市场
                    </MenuItem>
                </Col>
                <Col span="16">
                    <MenuItem name="car" style="float: right;">
                        <Icon type="android-cart"></Icon>
                        购物车
                    </MenuItem>
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

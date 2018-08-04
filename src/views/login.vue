<template>
    <div class="login-container">
        <Card class="login-card" :bordered="false">
            <div slot="title">
                <Icon type="log-in"></Icon>
                欢迎登录
            </div>
            <Form ref="loginForm" :model="form" :rules="rules">
                <FormItem prop="userName">
                    <Input v-model="form.userName" placeholder="请输入用户名">
                        <span slot="prepend">
                            <Icon :size="16" type="person"></Icon>
                        </span>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="form.password" placeholder="请输入密码">
                        <span slot="prepend">
                            <Icon :size="14" type="locked"></Icon>
                        </span>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button @click="handleSubmit('loginForm')" type="primary" long>登录</Button>
                </FormItem>
            </Form>
            <p class="login-tip">输入任意用户名和密码即可</p>
        </Card>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                userName: 'anani',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { type: 'string', min: 6, message: '密码不能少于 6 位', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
         handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('登录成功');
                    sessionStorage.setItem('user',this.form.userName);
                    this.$router.push({
                        name: 'index'
                    });
                    this.$store.commit('toggleNav');
                }
            })
        },
    }
}
</script>

<style lang="less">
.login-container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding-top: 60px;
    background-image: url('../assets/images/login-bg-img.jpeg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .login-card {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 400px;
        background: rgba(255,255,255,.2);
    }
    .login-tip {
        color: #fff;
        text-align: center;
    }
}
</style>


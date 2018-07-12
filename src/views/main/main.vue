<template>
    <div>
        {{test}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            test: this.$store.state.count
        }
    }
}
</script>

<style lang=less>

</style>

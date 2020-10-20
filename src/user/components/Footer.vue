<style lang="less" scoped>
.footer {
    left: 70px;
}
</style>
<template>
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="text-sm-right d-none d-sm-block">
                    践行社会主义<i class="mdi mdi-heart text-danger"></i>核心价值观
                </div>
            </div>
        </div>
    </div>
</footer>
</template>

<script>
export default {
    created() {
        console.log(this.$parent)
        // this.$parent.$emit('tofooter', (msg) => {
        //     console.log(msg)
        // })
    }
}
</script>

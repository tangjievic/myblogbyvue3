<style lang="less">

</style>

<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
                <h4 class="mb-0">Pricing</h4>

                <div class="page-title-right">
                    <ol class="breadcrumb m-0">
                        <li class="breadcrumb-item"><a href="javascript: void(0);">Utility</a></li>
                        <li class="breadcrumb-item active">Pricing</li>
                    </ol>
                </div>

            </div>
        </div>
    </div>
    <div>
        <slot></slot>
    </div>
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
</div>
</template>

<script>
export default {
    setup() {

    }
}
</script>

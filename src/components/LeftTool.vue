<style lang="less">
.fixed_left(@zindex, @width) {
    position: fixed;
    z-index: @zindex;
    top: 0;
    left: 0;
    bottom: 0;
    width: @width;
}

@wet-leftmenu-mini-width: 70px;

.wet-leftmenu {
    &.fiexd {
        .fixed_left(600, @wet-leftmenu-mini-width);
    }

    background-color: var(--wet-primary);
}
</style>

<template>
<div class="wet-leftmenu fiexd">

</div>
</template>

<script>
export default {

}
</script>

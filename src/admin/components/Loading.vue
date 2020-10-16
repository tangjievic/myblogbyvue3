<style lang="less">
.wetadmin-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 2000;

    .spinner-border {
        position: absolute;
        top: 50%;
        margin-top: 2rem;
        left: 50%;
        margin-left: 1rem;
    }
}
</style>

<template>
<div class="wetadmin-loading" ref="lodingDom">
    <div class="spinner-border text-danger m-1" role="status">
        <span class="sr-only">Loading...</span>
    </div>
</div>
</template>

<script>
import {
    ref,
    toRefs,
    watch,
    onMounted,
} from 'vue';
let $ = window.$;
export default {
    props: {
        isLoading: Boolean
    },
    setup(props) {
        let {
            isLoading
        } = toRefs(props);
        const lodingDom = ref(null);
        watch(isLoading, (value, oldvalue) => {
            console.log(value, 'dfdasfasf')
            if (value !== oldvalue) {
                if (value) {
                    $(lodingDom.value).fadeIn();
                } else {
                    $(lodingDom.value).fadeOut();
                }
            }
        })
        onMounted(() => {
            console.log(isLoading.value)
            if (!isLoading.value) {
                console.log(lodingDom.value, 'xss')
                $(lodingDom.value).hide()
            }
        })
        return {
            lodingDom
        }
    }
}
</script>

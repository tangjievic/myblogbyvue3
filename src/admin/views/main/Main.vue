<template>
<PageLayout>
    <router-view></router-view>
    <LoadingPanel :isLoading="isLoading"></LoadingPanel>
</PageLayout>
</template>

<script>
import {
    reactive,
    onMounted,
    toRefs
} from 'vue';
import PageLayout from '../../layout/PageLayout';
import LoadingPanel from '../../components/Loading';
export default {
    components: {
        PageLayout,
        LoadingPanel
    },
    setup() {
        let state = reactive({
            isLoading: true
        })

        onMounted(() => {
            setTimeout(() => {
                state.isLoading = false;
            }, 3000)
        })
        return toRefs(state);
    }
}
</script>

<style lang="less">
</style>

import MainLayout from '../../layout/MainLayout.vue';
import Footer from '../../components/Footer.vue';
import { useRoute } from 'vue-router'
export default {
    components: {
        MainLayout,
        Footer
    },
    setup() {
        const route = useRoute();
        return {
            route
        }
    }
}
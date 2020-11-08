import othervm from '../../tool/othervm';
import Alert from './Alert.vue';
//createvm(Alert)
//export default createvm
// const $alert = (props) => {
//     const aletvn = othervm(Alert, props);
//     console.log(aletvn.scrollTop)
// }
export const alertObj = {
        _num: 0,
        $alert: (props) => {
            alertObj._num++;
            othervm(Alert, props);
            //console.log(alertObj, 'xxxx')
        }

    }
    //console.log(alertObj, 'xxxx')
export default alertObj.$alert;
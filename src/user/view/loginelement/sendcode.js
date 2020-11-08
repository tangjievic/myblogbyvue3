import $alert from '../../../wetui/base/alert/alert';
import { getCode } from '../../apilist';
const sendCodeEvent = (email) => {

    if (!email) {
        $alert({
            content: "邮箱为空发送失败,请稍后",
            type: 'risk'
        })
        return
    }
    getCode({
        email: email
    }).then((res) => {
        $alert({
            content: res.message,
            type: 'success'
        })
    })
}

export default sendCodeEvent
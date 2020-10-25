import { createApp, h } from "vue";

function othervm(component, props) {
    //这里就是未来渲染 alert message tips的其他渲染盒
    const body = document.getElementsByTagName('body')[0];
    const otherNodeBox = document.createElement('div');
    body.appendChild(otherNodeBox);
    const vm = createApp({
        render() {
            return h(component, props)
        }
    })
    const vmmount = vm.mount(otherNodeBox);
    //console.log(vmmount.$el.scrollTop)
    vmmount.$removeVmNode = () => {
        vm.unmount(otherNodeBox);
        body.removeChild(otherNodeBox)
    }
    return vmmount.$el
}

export default othervm
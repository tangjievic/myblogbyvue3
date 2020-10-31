import { createApp, h } from "vue";

function othervm(component, props) {
    //这里就是未来渲染 alert message tips的其他渲染盒
    const otherNodeBox = document.querySelector('.wetothernodebox');
    if (!otherNodeBox) {
        const body = document.getElementsByTagName('body')[0];
        const otherNodeBox = document.createElement('div');
        otherNodeBox.style.position = "absolute";
        otherNodeBox.setAttribute('class', 'wetothernodebox');
        body.appendChild(otherNodeBox);
    }
    const vm = createApp({
        render() {
            return h(component, props)
        }
    })
    const vmmount = vm.mount(otherNodeBox);
    vmmount.$removeVmNode = () => {
        vm.unmount(otherNodeBox);
        //body.removeChild(otherNodeBox)
    }
    return vmmount.$el
}

export default othervm
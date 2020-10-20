<style lang="less">

.grid__item {
    position: relative;
    padding: 20px;
}

.grid__item-title {
	font-size: 0.85rem;
	color: var(--color-item-title);
	align-self: flex-start;
	margin: 0;
}

.action:focus {
	outline: none;
}

.particles {
    position: relative;
	grid-area: 1 / 1 / 2 / 2;
}

.particles-canvas {
	position: absolute;
	pointer-events: none;
	top: 50%;
	left: 50%;
    transform: translate3d(-50%,-50%,0);
    display: block;
}

.particles-wrapper {
	position: relative;
	display: inline-block;
    overflow: hidden;
}

.particles-button {
	user-select: none;
	position: relative;
	border-radius: 5px;
	border-radius: var(--radius-button);
	background: var(--color-button-bg);
	color: var(--color-button-text);
	border: 0;
	border: var(--border-button);
	margin: 0;
	// padding: 1.5rem 3rem;
    // padding: var(--button-padding);
    height: 35px;
    line-height: 35px;
    width: 200px;
    //transition: height 0.8s linear;
}

.particles-button:focus {
	outline: none;
}
.no-js .particles-button {
	grid-area: 1 / 1 / 2 / 2;
}
.theme-12 {
	--color-item-bg: #ffffff;
    --color-button-bg: #ff4d73;
    --color-button-text: #fff;
    --button-padding: 10px 30px;
    --radius-button: 40px;
    --border-button: 0;
}

</style>
<template>
<div class="grid__item theme-12">
    <button ref="btn" class="particles-button">{{statue.text}}</button>
</div>
</template>
<script>
import Particles from './dybtn';
import { onMounted,ref,reactive } from 'vue';
export default {
    setup(){
        const btn = ref(null);
        const statue =reactive({
            isSignIn:true,
            text:'点我签到'
        })
        onMounted(()=>{
            const bttn = btn.value;
            const particlesOpts =  {
                style: 'stroke',
                color: '#ff4d73',
                direction: 'bottom',
                duration: 500,
                easing: 'easeOutSine',
                speed: .5,
                oscillationCoefficient: 5
            };
            const particles = new Particles(bttn, particlesOpts);
            let buttonVisible = true;
            bttn.addEventListener('click', () => {
                if ( !particles.isAnimating() && buttonVisible ) {
                    particles.disintegrate();
                    buttonVisible = !buttonVisible;
                    setTimeout(()=>{
                        particles.integrate({
                            duration: 500,
                            easing: 'easeOutSine'
                        });
                        buttonVisible = !buttonVisible;
                        statue.text = '明天继续'
                    },1800)
                }
            });
        })

        return{
            btn,
            statue
        }
    }
}
</script>
<template>
    <div class="authentication-bg">
        <svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
            <filter id="f4" x="-50%" y="-50%" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="0" dy="20" />
                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="7" />
                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
            <path filter="url(#f4)" class="redPath" id="redPath4" d="M100 250 L 200 100 L 300 300 L 400 150" />
            <path filter="url(#f4)" class="greenPath" id="greenPath4" d="M100 250 L 200 100 L 300 300 L 400 150" />
            <path filter="url(#f4)" class="bluePath" id="bluePath4" d="M100 250 L 200 100 L 300 300 L 400 150" />
            <path filter="url(#f4)" class="whitePath" id="whitePath4" d="M100 250 L 200 100 L 300 300 L 400 150" />

            <g id="circle14" class="circle">
                <circle filter="url(#f4)" cx="200" cy="100" r="25" />
                <circle filter="url(#f4)" cx="230" cy="40" r="1" />
                <path filter="url(#f4)" class="redPath" d="M160 50 L 165 50 L 160 55 L 160 50" />
                <path filter="url(#f4)" class="greenPath" d="M260 150 L 165 150 L 160 155 L 160 150" />
            </g>
            <g id="circle24" class="circle">
                <circle filter="url(#f4)" cx="330" cy="330" r="1" />
                <circle filter="url(#f4)" cx="300" cy="300" r="35" />
            </g>
        </svg>
    </div>
</template>
<script>
/* eslint-disable */
import '../../../admin/assets/js/timeline';
import { onMounted } from 'vue';

export default {
    setup(){
        onMounted(()=>{
            paths(4);
            circles(4);
            function paths(nb) {
                movePath("whitePath" + nb, 0);
                movePath("bluePath" + nb, 0.1);
                movePath("greenPath" + nb, 0.2);
                movePath("redPath" + nb, 0.3);
            }

            function movePath(id, delay) {
                const ease = [Power3.easeIn, Power3.easeOut];
                var tl = new TimelineLite({
                    paused: false,
                    onComplete: function () {
                        this.restart();
                    },
                });
                const path = document.getElementById(id);
                tl.add(
                    TweenLite.set(path, {
                        strokeDashoffset: "0",
                        strokeDasharray: "1,800",
                    })
                );
                tl.add(
                    TweenLite.to(path, delay, {
                        strokeDashoffset: "0",
                        strokeDasharray: "1,800",
                    })
                );
                tl.add(
                    TweenLite.to(path, 1, {
                        strokeDashoffset: "-250",
                        strokeDasharray: "200,800",
                        ease: ease[0],
                    })
                );
                tl.add(
                    TweenLite.to(path, 1 - delay, {
                        strokeDashoffset: "-580",
                        strokeDasharray: "1,800",
                        ease: ease[1],
                    })
                );
                tl.add(
                    TweenLite.to(path, 1 + delay, {
                        strokeDashoffset: "-250",
                        strokeDasharray: "100,800",
                        ease: ease[0],
                    })
                );
                tl.add(
                    TweenLite.to(path, 1 - delay, {
                        strokeDashoffset: "-0",
                        strokeDasharray: "1,800",
                        ease: ease[1],
                    })
                );
            }

            function circles(nb) {
                moveCircle1("circle1" + nb);
                moveCircle2("circle2" + nb);
            }

            function moveCircle1(id) {
                var tl = new TimelineLite({
                    paused: false,
                    onComplete: function () {
                        this.restart();
                    },
                });
                const circle1 = document.getElementById(id);
                tl.add(
                    TweenLite.set(circle1, {
                        transform: "scale(0.5) translate(0px, 0px)",
                        opacity: 0,
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 0.85, {
                        transform: "scale(1) translate(0px, 0px)",
                        opacity: 0,
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 0.05, {
                        //BOOM
                        transform: "scale(1.4) translate(-14px, -20px)",
                        opacity: 1,
                        animation: "colorSwitch 2s",
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 1.1, {
                        transform: "scale(1.6) translate(-16px, -25px)",
                        opacity: 0,
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 1.1, {
                        transform: "scale(1)",
                        opacity: 0,
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 0.1, {
                        //BOOM
                        transform: "scale(1.4) translate(-14px, -20px)",
                        opacity: 1,
                        animation: "colorSwitch 1.2s",
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 0.8, {
                        transform: "scale(1.6) translate(-16px, -20px)",
                        opacity: 0,
                    })
                );
            }

            function moveCircle2(id) {
                var tl = new TimelineLite({
                    paused: false,
                    onComplete: function () {
                        this.restart();
                    },
                });
                const circle1 = document.getElementById(id);
                tl.add(
                    TweenLite.set(circle1, {
                        transform: "scale(0) translate(150px, 150px)",
                        opacity: 0,
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 1.1, {
                        transform: "scale(0.5) translate(20px, 20px)",
                        opacity: 0,
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 0.1, {
                        //BOOM
                        transform: "scale(1.4) translate(-10px, -10px)",
                        opacity: 1,
                        animation: "colorSwitch 2s",
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 0.8, {
                        transform: "scale(1.6) translate(-10px, -10px)",
                        opacity: 0,
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 0.8, {
                        transform: "scale(0.5) translate(20px, 20px)",
                        opacity: 0,
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 0.1, {
                        //BOOM
                        transform: "scale(1.4) translate(-10px, -10px)",
                        opacity: 1,
                        animation: "colorSwitch 1.2s",
                    })
                );
                tl.add(
                    TweenLite.to(circle1, 1.1, {
                        transform: "scale(1.6) translate(-10px, -10px)",
                        opacity: 0,
                    })
                );
            }
        })
    }
}
</script>
<style lang="less" scoped>
.authentication-bg {
    background-image: url(../../../admin/assets/images/login.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 35% auto;
}
svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.whitePath,
.bluePath,
.greenPath,
.redPath {
    fill: none;
    stroke-width: 5px;
    stroke-linecap: round;
    stroke-dashoffset: 0;
    stroke-dasharray: 0, 800;
}

.whitePath {
    stroke: #fbfef9;
}

.bluePath {
    stroke: #f3a712;
}

.greenPath {
    stroke: #db2b39;
}

.redPath {
    stroke: #456990;
}

.circle {
    fill: none;
    stroke: #fbfef9;
    stroke-width: 3px;
}

@keyframes colorSwitch {
    0% {
        stroke: #fbfef9;
    }

    20% {
        stroke: #f3a712;
    }

    40% {
        stroke: #db2b39;
    }

    50% {
        stroke: #456990;
    }
}
</style>
<template>
  <div class="auth-body-bg">
    <div>
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-lg-5">
            <div
              class="authentication-page-content p-4 d-flex align-items-center min-vh-100"
            >
              <div class="w-100">
                <div class="row justify-content-center">
                  <div class="col-lg-9">
                    <div>
                      <div class="text-center">
                        <div>
                          <h1>
                            <div class="wetui_logo"></div>
                            WetCMS
                          </h1>
                        </div>
                        <h4 class="font-size-18 mt-4">欢迎回来 !</h4>
                        <p class="text-muted">登录WetCMS,基于vue3</p>
                      </div>

                      <div class="p-2 mt-5">
                        <form class="form-horizontal" action="index.html">
                          <div class="form-group auth-form-group-custom mb-4">
                            <i
                              class="ri-user-2-line auti-custom-input-icon"
                            ></i>
                            <label for="username">用户名</label>
                            <input
                              type="text"
                              class="form-control"
                              id="username"
                              placeholder="输入管理员名"
                            />
                          </div>

                          <div class="form-group auth-form-group-custom mb-4">
                            <i
                              class="ri-lock-2-line auti-custom-input-icon"
                            ></i>
                            <label for="userpassword">密码</label>
                            <input
                              type="password"
                              class="form-control"
                              id="userpassword"
                              placeholder="输入密码"
                            />
                          </div>
                          <div class="form-group auth-form-group-custom mb-4">
                            <i
                              class="ri-lock-2-line auti-custom-input-icon"
                            ></i>
                            <label for="userpassword">二次密码验证</label>
                            <input
                              type="password"
                              class="form-control"
                              id="userpassword"
                              placeholder="输入密码"
                            />
                          </div>
                          <div class="mt-4 text-center">
                            <button
                              class="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              点击登录
                            </button>
                          </div>

                          <div class="mt-4 text-center">
                            <i class="mdi mdi-lock mr-1"></i>
                            忘记密码?管理端不支持找回，请联系管理员
                          </div>
                        </form>
                      </div>

                      <div class="mt-5 text-center">
                        <p>没有账号,管理端不支持注册，请联系主管理员 ！</p>
                        <p>
                          © 2020 WetCMS. Crafted with
                          <i class="mdi mdi-heart text-danger"></i> By
                          <a href="https://cn.vuejs.org/">vue3</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="authentication-bg">
              <svg width="500" height="400" xmlns="http://www.w3.org/2000/svg">
                <filter id="f4" x="-50%" y="-50%" width="200%" height="200%">
                  <feOffset result="offOut" in="SourceGraphic" dx="0" dy="20" />
                  <feGaussianBlur
                    result="blurOut"
                    in="offOut"
                    stdDeviation="7"
                  />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
                <path
                  filter="url(#f4)"
                  class="redPath"
                  id="redPath4"
                  d="M100 250 L 200 100 L 300 300 L 400 150"
                />
                <path
                  filter="url(#f4)"
                  class="greenPath"
                  id="greenPath4"
                  d="M100 250 L 200 100 L 300 300 L 400 150"
                />
                <path
                  filter="url(#f4)"
                  class="bluePath"
                  id="bluePath4"
                  d="M100 250 L 200 100 L 300 300 L 400 150"
                />
                <path
                  filter="url(#f4)"
                  class="whitePath"
                  id="whitePath4"
                  d="M100 250 L 200 100 L 300 300 L 400 150"
                />

                <g id="circle14" class="circle">
                  <circle filter="url(#f4)" cx="200" cy="100" r="25" />
                  <circle filter="url(#f4)" cx="230" cy="40" r="1" />
                  <path
                    filter="url(#f4)"
                    class="redPath"
                    d="M160 50 L 165 50 L 160 55 L 160 50"
                  />
                  <path
                    filter="url(#f4)"
                    class="greenPath"
                    d="M260 150 L 165 150 L 160 155 L 160 150"
                  />
                </g>
                <g id="circle24" class="circle">
                  <circle filter="url(#f4)" cx="330" cy="330" r="1" />
                  <circle filter="url(#f4)" cx="300" cy="300" r="35" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { onMounted } from "vue";
import '../../assets/js/timeline';
export default {
  setup() {
    onMounted(() => {
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
    });
  },
};
</script>

<style lang="less" scoped>
.authentication-bg {
  background-image: url(../../assets/images/login.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: 35% auto;
}

svg {
    position: absolute;
    top:50%;
    left: 50%;
    transform:translate(-50%,-50%);
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

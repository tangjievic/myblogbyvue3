<style lang="less" scoped>
@import '../../../tool/code.less';

.tjblog-art {
    background-color: #fff;
    padding: 20px;

    .fa {
        margin-right: 8px;
    }

    .fa-envira {
        color: #64d572;
    }

    .fa-eye {
        color: #3498DB;
    }

    .desc {
        padding: 5px;
        background-color: rgba(0, 0, 0, .05);
        border-left: 4px solid rgba(0, 0, 0, .3);
        text-align: justify;
        margin: 16px 0;
    }
}
</style>
<template>
<div class="view_page">
    <Header></Header>
    <section class="tjblog-art">
        <div class="author"><i class="fa fa-envira"></i>作者：TANGJIE</div>
        <div class="seenum"><i class="fa fa-eye"></i>点击量：74</div>
        <div class="desc">CSS3里的3d世界，同时给出了h5摇一摇的基本实现ts代码和旋转正方形css代码</div>
        <article class="markdown-body">
            <h3><a id="CSS33D_0"></a>CSS3,3D之旅</h3>
            <h4><a id="1HTML5_1"></a>1.HTML5陀螺仪</h4>
            <p>我们可以让document监听deviceorientation 来获取相关的数据，里面包括3个值 alpha、beta和gamma。</p>
            <p>a、alpha:移动设备水平放置时，绕z轴旋转的角度，数值为0度到360度<br>
                b、beta:移动设备水平放置时，绕X轴旋转的角度，数值为-180度到180度。<br>
                c、gamma:移动设备水平放置时，绕Y轴旋转的角度，数值为-90度到90度。</p>
            <pre><div class="hljs"><code class="lang-c++"><span class="hljs-comment">//获取旋转角度</span>
window.addEventListener(<span class="hljs-string">"deviceorientation"</span>,(event:any)=&gt;{
    console.<span class="hljs-built_in">log</span>(event)
},<span class="hljs-literal">true</span>)
</code></div></pre>
            <p>一般初始化需要校准罗盘，放在获取旋转角度出错</p>
            <pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">//校准罗盘</span>
<span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">"compassneedscalibration"</span>,(event:any)=&gt;{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'校准罗盘逻辑'</span>)
    event.preventDefault();
},<span class="hljs-literal">true</span>)
</code></div></pre>
            <p>重力加速度获取</p>
            <pre><div class="hljs"><code class="lang-javascript"><span class="hljs-comment">//获取重力加速度</span>
<span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">'devicemotion'</span>,(event:any)=&gt;{
    <span class="hljs-comment">//处理event.accleration</span>
    <span class="hljs-comment">//x(y,z):设备在x(y,z)方向上的移动加速度值</span>

    <span class="hljs-comment">//event.acclerationIncludingGravity</span>
    <span class="hljs-comment">//考虑了重力加速度后设备在x(y,z)的移动加速度</span>

    <span class="hljs-comment">//alpha,beta,gamma:设备绕x,y,z轴旋转的角度</span>
},<span class="hljs-literal">true</span>)
</code></div></pre>
            <h5><a id="11_H5_35"></a>1.1 设计一个H5摇一摇的代码</h5>
            <h6><a id="_36"></a>设计思想</h6>
            <p>a、 用户大多时候都是以一个方向为主晃动手机来进行摇动；<br>
                b、 在晃动时三个方向的加速度数据必定都会变化；<br>
                c、 我们不能误判手机正常的运动行为，想一想，如果你的手机放在裤兜里，走路时它也会有加速度数据变化。</p>
            <p>综上，我们应该针对三个方向的加速度进行计算，间隔测量它们，考察它们在固定时间段里的变化率，而且需要为它确定一个阈值来触发动作。</p>
            <p>ts 代码如下：引入了vconsole库方便手机端查看测试值</p>
            <pre><div class="hljs"><code class="lang-javascript"><span class="hljs-keyword">import</span> VConsole <span class="hljs-keyword">from</span> <span class="hljs-string">'vconsole'</span>
<span class="hljs-keyword">new</span> VConsole();
<span class="hljs-keyword">const</span> SHAKE_THRESHOLD:number = <span class="hljs-number">3000</span>;<span class="hljs-comment">//设置摇动阀值</span>
<span class="hljs-keyword">let</span> last_update:number = <span class="hljs-number">0</span>;
interface Sitedot {
    <span class="hljs-attr">x</span>:number;
    y:number;
    z:number
}
<span class="hljs-keyword">let</span> now_dot:Sitedot = {
    <span class="hljs-attr">x</span>:<span class="hljs-number">0</span>,
    <span class="hljs-attr">y</span>:<span class="hljs-number">0</span>,
    <span class="hljs-attr">z</span>:<span class="hljs-number">0</span>
}
<span class="hljs-keyword">let</span> last_dot:Sitedot = {
    <span class="hljs-attr">x</span>:<span class="hljs-number">0</span>,
    <span class="hljs-attr">y</span>:<span class="hljs-number">0</span>,
    <span class="hljs-attr">z</span>:<span class="hljs-number">0</span>
};
<span class="hljs-keyword">let</span> init:<span class="hljs-function"><span class="hljs-params">()</span>=&gt;</span><span class="hljs-keyword">void</span>
init = ():<span class="hljs-function"><span class="hljs-params">void</span>=&gt;</span>{
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">window</span>.DeviceMotionEvent) {
        <span class="hljs-built_in">window</span>.addEventListener(<span class="hljs-string">'devicemotion'</span>, deviceMotionHandler, <span class="hljs-literal">false</span>);
    } <span class="hljs-keyword">else</span> {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'not support mobile event'</span>);
    }
}
<span class="hljs-keyword">let</span> deviceMotionHandler:<span class="hljs-function">(<span class="hljs-params">event:any</span>)=&gt;</span><span class="hljs-keyword">void</span>;
deviceMotionHandler = (event:any):<span class="hljs-function"><span class="hljs-params">void</span> =&gt;</span>{
    <span class="hljs-keyword">let</span> acceleration = event.accelerationIncludingGravity;
    <span class="hljs-keyword">let</span> curTime = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().getTime();
    <span class="hljs-built_in">console</span>.log(event.interval)
    <span class="hljs-keyword">if</span> ((curTime - last_update) &gt; <span class="hljs-number">100</span>) {<span class="hljs-comment">//设备移动</span>
        <span class="hljs-keyword">let</span> diffTime = curTime - last_update;
        last_update = curTime;
        now_dot.x = acceleration.x;
        now_dot.y = acceleration.y;
        now_dot.z = acceleration.z;
        <span class="hljs-keyword">let</span> speed = <span class="hljs-built_in">Math</span>.abs(now_dot.x + now_dot.y + now_dot.z - last_dot.x - last_dot.y - last_dot.z) / diffTime * <span class="hljs-number">10000</span>;
        <span class="hljs-keyword">if</span> (speed &gt; SHAKE_THRESHOLD) {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"摇动了"</span>); 
        }
        last_dot.x = now_dot.x;
        last_dot.y = now_dot.y;
        last_dot.z = now_dot.z;
    }
}

init()
</code></div></pre>
            <h4><a id="3css33D_95"></a>3.css3、3D</h4>
            <h5><a id="31_3d_96"></a>3.1 旋转的3d正方体实现</h5>
            <p>html结构<br>
                <img src="data:image/png;base64,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" alt="code.png" rel="2"><br>
                less代码
            </p>
            <pre><div class="hljs"><code class="lang-less"><span class="hljs-comment">//css重置代码省略</span>
<span class="hljs-comment">//正方体3d旋转变换</span>
<span class="hljs-selector-class">.quadrate_loadingbox</span>{
    <span class="hljs-attribute">position</span>: fixed;
    <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;<span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;<span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;<span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">99999</span>;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ffffff</span>;
    <span class="hljs-selector-class">.center</span>{
        <span class="hljs-attribute">position</span>: absolute;
        <span class="hljs-attribute">top</span>: <span class="hljs-number">50%</span>;
        <span class="hljs-attribute">left</span>: <span class="hljs-number">50%</span>;
        <span class="hljs-attribute">margin-top</span>: -<span class="hljs-number">250px</span>;
        <span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">75px</span>;
    }
    <span class="hljs-selector-class">.loading_txt</span>{
        <span class="hljs-attribute">margin-top</span>: <span class="hljs-number">100px</span>;
        <span class="hljs-attribute">text-align</span>: center;
    }
}
<span class="hljs-selector-class">.quadrate_loading</span>{
    <span class="hljs-comment">//background-color: pink;</span>
    <span class="hljs-attribute">width</span>: <span class="hljs-number">150px</span>;
    <span class="hljs-attribute">height</span>: <span class="hljs-number">150px</span>;
    <span class="hljs-attribute">position</span>: relative;
    <span class="hljs-attribute">transform-style</span>: preserve-<span class="hljs-number">3</span>d;
    <span class="hljs-attribute">transform-origin</span>: <span class="hljs-number">50%</span> <span class="hljs-number">50%</span> <span class="hljs-number">0</span>;
    <span class="hljs-attribute">transform</span>: rotateX(-<span class="hljs-number">10deg</span>) rotateY(<span class="hljs-number">10deg</span>) rotateZ(<span class="hljs-number">10deg</span>);
    <span class="hljs-attribute">animation</span>: quadrate_loadings <span class="hljs-number">5s</span> linear;
    <span class="hljs-attribute">animation-iteration-count</span>: infinite;
    <span class="hljs-selector-tag">li</span>{
        <span class="hljs-attribute">transform-origin</span>: <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span>;
        <span class="hljs-attribute">width</span>: <span class="hljs-number">150px</span>;
        <span class="hljs-attribute">height</span>: <span class="hljs-number">150px</span>;
        <span class="hljs-attribute">line-height</span>: <span class="hljs-number">150px</span>;
        <span class="hljs-attribute">text-align</span>: center;
        <span class="hljs-attribute">float</span>: left;
        <span class="hljs-attribute">background-repeat</span>: no-repeat;
        <span class="hljs-attribute">background-position</span>: center;
        <span class="hljs-attribute">font-size</span>: <span class="hljs-number">16px</span>;
        <span class="hljs-attribute">position</span>: absolute;
        <span class="hljs-attribute">top</span>: <span class="hljs-number">0</span>;<span class="hljs-attribute">left</span>: <span class="hljs-number">0</span>;<span class="hljs-attribute">right</span>: <span class="hljs-number">0</span>;<span class="hljs-attribute">bottom</span>: <span class="hljs-number">0</span>;
        <span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.9</span>;
        <span class="hljs-attribute">transform</span>: translateZ(<span class="hljs-number">75px</span>);
        <span class="hljs-selector-tag">svg</span>{
            <span class="hljs-attribute">vertical-align</span>: middle;
        }
    }
    <span class="hljs-selector-class">.top</span>{
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#1ABC9C</span>;
        <span class="hljs-comment">//left: 0;right: 0;top: 0;</span>
        <span class="hljs-attribute">transform</span>: rotateX(-<span class="hljs-number">90deg</span>) translateY(-<span class="hljs-number">75px</span>);
    }
    <span class="hljs-selector-class">.bottom</span>{
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#34495E</span>;
        <span class="hljs-attribute">transform</span>: rotateX(<span class="hljs-number">90deg</span>) translateZ(-<span class="hljs-number">150px</span>) translateY(-<span class="hljs-number">75px</span>);
    }
    <span class="hljs-selector-class">.left</span>{
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#F39C12</span>;
        <span class="hljs-attribute">transform</span>: rotateY(<span class="hljs-number">90deg</span>) translateX(-<span class="hljs-number">75px</span>);
    }
    <span class="hljs-selector-class">.right</span>{
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#9B59B6</span>;
        <span class="hljs-attribute">transform</span>: rotateY(<span class="hljs-number">90deg</span>) translateZ(<span class="hljs-number">150px</span>) translateX(-<span class="hljs-number">75px</span>);
    }
    <span class="hljs-selector-class">.front</span>{
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#3498DB</span>;
    }
    <span class="hljs-selector-class">.back</span>{
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#E74C3C</span>;
        <span class="hljs-attribute">transform</span>: translateZ(-<span class="hljs-number">75px</span>);
    }
}
<span class="hljs-keyword">@keyframes</span> quadrate_loadings {
    <span class="hljs-selector-tag">0%</span>{
        <span class="hljs-attribute">transform</span>: rotateX(<span class="hljs-number">0deg</span>) rotateY(<span class="hljs-number">0deg</span>) rotateZ(<span class="hljs-number">0deg</span>);
    }
    <span class="hljs-selector-tag">100%</span>{
        <span class="hljs-attribute">transform</span>: rotateX(<span class="hljs-number">360deg</span>) rotateY(<span class="hljs-number">720deg</span>) rotateZ(<span class="hljs-number">1080deg</span>);
    }
}
</code></div></pre>
            <p><a href="https://www.tangjietop.cn/public/codeexample/quadrate_loading/index.html" target="_blank">代码地址效果点</a></p>
            <h5><a id="32_3D_184"></a>3.2 常用的简单轻量级3D类库</h5>
            <p>基本css3的3d不在赘述，毕竟都是固定的api，去查找使用即可，列一下常用的库<br>
                a、parallax.js 视觉差库<br>
                b、css3d-engine css3d库</p>
        </article>
    </section>
    <footer class="list_ft">践行社会主义核心价值观 </footer>
</div>
</template>

<script>
import Header from '../../components/Header'
export default {
    components: {
        Header
    }
}
</script>

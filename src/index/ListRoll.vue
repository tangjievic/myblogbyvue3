<style lang="less">
.listroll{
    /*消息滚动*/
    width: 100%;
.ellipsis {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .roll {
    overflow: hidden;
    height: 215px;
    position: relative;
    letter-spacing: 1px;
    left: 0;
    padding-bottom: 25px;
    a{
      text-decoration: none;
    }
  }
  .roll ul {
    position: relative;
    margin:0;
  }
  .roll li {

    width: 100%;
    margin: 0 auto;
    position: absolute;
    left: 0;
    transition: all 2s;
    font-size: 14px;
    list-style: none;
    box-sizing: border-box;
  }
  .roll-link{
        display: block;
        position: relative;
        color: #444443;
        transition: all 0.3s;
        text-align: center;
        div{
            padding: 5px 0;
        }
  }
  .roll li.roll_1 {
    opacity: 0.7;
    top: 0;
    transform-style: preserve-3d;
    transform: scale3d(0.7,0.7,0.7);
  }
  .roll li.roll_2 {
    transform-style: preserve-3d;
    transform: scale3d(1,1,1);
    opacity: 1;
    top: 80px;
    height: 80px;
  }
  .roll li.roll_3 {
    transform-style: preserve-3d;
    opacity: 0.7;
    top: 160px;
    transform: scale3d(0.7,0.7,0.7);
  }
  .roll li.roll_hide {
    transform-style: preserve-3d;
    opacity: 0;
    top: 125px;
    transform: scale3d(0.6,0.6,0.7);
  }
}
</style>

<template>
    <div class="roll">
        <ul ref="listroll">
            <li class="roll_1">
                <a href="#" class="roll-link">
                    <div class="ellipsis">【更新】博客于2020/6更新版本</div>
                    <div>
                        <span class="wet-tag wet-tag__primary">2020/06/05</span>
                    </div>
                </a>
            </li>
            <li class="roll_2">
                <a href="#" class="roll-link">
                    <div class="ellipsis">【更新】博客于2020/6更新版本</div>
                    <div>
                        <span class="wet-tag wet-tag__primary">2020/06/05</span>
                    </div>
                </a>
            </li>
            <li class="roll_3">
                <a href="#" class="roll-link">
                    <div class="ellipsis">【更新】博客于2020/6更新版本</div>
                    <div>
                        <span class="wet-tag wet-tag__primary">2020/06/05</span>
                    </div>
                </a>
            </li>
            <li class="roll_hide">
                <a href="#" class="roll-link">
                    <div class="ellipsis">【更新】博客于2020/6更新版本</div>
                    <div>
                        <span class="wet-tag wet-tag__primary">2020/06/05</span>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery';
import{
    onMounted,
    ref
} from 'vue';
let timeID = null;
let listRoll = ($ul)=>{
    clearInterval(timeID);
    timeID = setInterval(()=>{
        $ul.find("li:first").removeClass().addClass('roll_hide').appendTo($ul);
        for(var i=0;i<3;i++){
            $ul.find("li").eq(i).removeClass().addClass('roll_'+ (i+1) +'');
        }
        listRoll($ul);
    },3000)
}
//listRoll()
export default {
    setup(){
        const listroll = ref(null);

        onMounted(()=>{
            let $ul = $(listroll.value);
            listRoll($ul);
            console.log('xxx')
        })

        return{
            listroll
        }
    }
}
</script>
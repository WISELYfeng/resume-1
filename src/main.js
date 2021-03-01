let text = document.querySelector("#text");
let style = document.querySelector("#style");
let n = 0;
let string = `
    /* hi,我是小黎，一名前端新人
    * 现在，我又再次踏上前端之旅
    * 接下来我要耍些花活
    * 先调整下背景颜色
    **/
    body{
        background-color:#f2f2f2;
    }
    /* 再准备一个div */
    #icon{
        border: 1px solid red;
        width: 200px;
        height: 200px;
    }
    /* 接下来我把 div 变成一个八卦图
    * 注意看好了
    * 首先，把 div 变成一个圆
    **/
    #icon{
        border-radius: 50%;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
        border: none;
    }
    /* 八卦由两部分组成
    * 一黑一白，代表阴阳相对
    **/
    #icon{
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    }
    /* 利用伪元素加两个神秘的小球 */
    #icon::before{
        width: 100px;
        height: 100px;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #000;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    }
    #icon::after{
        width: 100px;
        height: 100px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: #fff;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
    }
    /* 完成了，前端真好玩 */
`;
let string2 = '';

let step = () => {
    setTimeout(()=>{
        if(string[n] === "\n"){
            // 如果不这样拼接，渲染内容时会出现<一闪的情况
            string2 += "<br>";
        }else if(string[n] === " "){
            string2 += "&nbsp;";
        }else{
            string2 += string[n];
        }
        text.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        text.scrollTo(0, 99999);
        if( n < string.length - 1){ // 当n不是最后一个就继续
            n += 1;
            step();
        }
    },0)
}

step()
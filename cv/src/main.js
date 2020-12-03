let html = document.querySelector("#html");
let style = document.querySelector("#style");


let str = `
/*
蒋武你是傻逼
你是傻逼
真的傻逼
无比傻逼*/

/* 将武老阴阳人了 */
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
  }
  /* 首先把div变成一个圆 */
  #div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
  }
  /* 创建阴阳背景*/
  #div1 {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  #div1::before {
    content: "";
    display: block;
    position: absolute;
  }
  #div1::after {
    content: "";
    display: block;
    position: absolute;
  }
  
  /* 创建阴阳球 */
  #div1::before {
    width: 100px;
    height: 100px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 25%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  #div1::after {
    width: 100px;
    height: 100px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 25%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  


`
let str2 = "";
let n = 0;

let step = () =>{
    setTimeout(() => {
        
        console.log(str[n]);
        
        // 遇到回车的判断 
        if(str[n] ==="\n"){
            str2 += "<br>"             
        }else if(str[n] === " "){ // CSS代码中遇到空格
            str2 += "&nbsp;";
        }else{
            str2 += str[n] ;
        }
        html.innerHTML = str2;
        style.innerHTML = str.substring(0,n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if(n < str.length - 1){
            n ++;
            step();
        }
    }, 5);
}
step();

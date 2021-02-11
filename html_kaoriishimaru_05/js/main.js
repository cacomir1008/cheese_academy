// jsを記述する際はここに記載していく
// カルーセル（slick)

$('.slider').slick({
  autoplay:true,
  arrows:true,
  dots: true,
  // infinite: true,
  speed: 200,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
});

var
cursor = $(".cursor"),
follower = $(".follower"),
cWidth = 8, //カーソルの大きさ
fWidth = 40, //フォロワーの大きさ
delay = 10, //数字を大きくするとフォロワーがより遅れて来る
mouseX = 0, //マウスのX座標
mouseY = 0, //マウスのY座標
posX = 0, //フォロワーのX座標
posY = 0; //フォロワーのX座標

$(document).on('mousemove', function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
  cursor.css({
    //カーソルの真ん中に座標軸が来るよう、
    //カーソルの大きさの半分を引きます
    left: mouseX - (cWidth / 2),
    top: mouseY - (cWidth / 2)
  })
});


// マウスホバー アクション type3

const hover = document.querySelector("#type3");
hover.addEventListener('mouseenter',(e) =>{
  let view="";
  // console.log('マウスオーバー');
  view="当たり！" + "<br>" + '<img src="img/cheese_mouse.png">';
  $("#type3").html(view);
});

hover.addEventListener('mouseleave',(e)=>{
  let view ="";
  // console.log('マウスアウト');
  view='<img src="img/news_img.jpg">';
  $("#type3").html(view);
});

// Quiz

//問題文[配列]
// const qs =[
//   "あなたのタイプを選んで下さい！"
// ];

// 回答選択肢 [多重配列]（0,1,2）
// const toi= 
//   ["がっつり食べたい派","おしゃれにつまみたい派","個性派で生きていたい派"];

// 普通のクイズはここに答えを用意する(const ans=[1,2,3];)


// 1.最初の問題文（上書き）＆回答選択肢＆回答地を設定
// let i =0;
// $("#quest").html(qs[i]);
// $("#toi1").html(toi[0]);
// $("#toi2").html(toi[1]);
// $("#toi3").html(toi[2]);



$("[name=toi]").on("click",function(){  
  if($(this).val()==1){
      document.querySelector("#quizpic").setAttribute("src","img/gyudon.jpg");
      document.querySelector("#quiztext").innerText="24時間コードを書け！チーズ牛丼コース";
  }
  else if ($(this).val()==2){
      document.querySelector("#quizpic").setAttribute("src","img/pizza.jpg");
      document.querySelector("#quiztext").innerText="隙間時間をクールに活用！ゴルゴンゾーラピッツァコース";
      } 
  else if($(this).val()==3){
      document.querySelector("#quizpic").setAttribute("src","img/cake.jpg");
      document.querySelector("#quiztext").innerText="尖った作品しか興味なし！ブルーチーズケーキコース";

  }});

 



  //問題と回答を表記する
const quiz=[
  {
  question:'三角形の内角の和は？',
  answers: ['45°','90°','180°','360°'],
  correct:'180°'

  },
  {
    question:'ドライアイスは何が固まったものでしょうか？',
    answers: ['酸素','窒素','二酸化窒素','二酸化炭素'],
    correct:'二酸化炭素'
  
  },
  {
    question:'日本の初代総理大臣は誰でしょうか？',
    answers: ['伊藤博文','田中角栄','小泉純一郎','宇多田ヒカル'],
    correct:'伊藤博文'
    
      },{
        question:'大気中で最も軽い気体はなんでしょう？',
        answers:['水素','酸素','メタン','二酸化炭素','ヘリウム'],
        correct:'水素'
      },
      {
        question:'甲子園球場がある都道府県はなんでしょう？',
        answers:['東京都','兵庫県','神奈川県','北海道'],
        correct:'兵庫県'
      },{
        question:'太陽の表面温度はおよそ何度でしょうか？',
        answers:['10000度','8000度','6000度','5000度'],
        correct:''
      }

];
const quizLength=quiz.length;
let quizIndex=0;
let score=0;



//これからのプログラミングにおける定数を表記する

const $apple= document.getElementsByTagName('button');
const buttonLength=$apple.length;

//クイズの問題文、選択肢を定義
const setupQuiz=()=>{
document.getElementById('js-question').textContent=quiz[quizIndex].question;

let buttonIndex=0;

while(buttonIndex < buttonLength){
  $apple[buttonIndex].textContent=quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}
setupQuiz();

const clickHandler=(e)=>{
  if(quiz[quizIndex].correct===e.target.textContent){
    window.alert("正解!");
    score++;
  } else {
    window.alert("不正解!");
  }

  quizIndex++;
  if (quizIndex<quizLength){
    setupQuiz();

   } else {
    window.alert('終了!あなたの正解数は'+score+'/'+quizLength+'です!');
  }

}


//クリックをしたら正誤判定
let handlerIndex=0;

while (handlerIndex<buttonLength){
  $apple[handlerIndex].addEventListener('click',(e)=>{

    clickHandler(e);
   });

  handlerIndex++;
  }
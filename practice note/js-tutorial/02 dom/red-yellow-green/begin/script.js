/* 🚀🔥
黃綠紅 你要哪一個？

此專案涵蓋的概念
- DOM 操作
- 事件監聽器
- 迴圈 forEach 
- 變數
- 條件語句 (if else if)
- 樣板字面值
*/


// 將 title 文字改成 '報告阿柴，標題已經切換！' 並將字體顏色改成藍色
const change_buttom = document.getElementById('changeButton')
change_buttom.onclick = () => {
  changeTitle()
}

function changeTitle(){
  let titleDiv = document.getElementById('title')
  console.log("title:",titleDiv.innerText)
  if (titleDiv.innerText=='報告凱文，標題已經切換'){
    let message = '標題'
    titleDiv.innerText=message
    return 0;
  }else{
    let message = '報告凱文，標題已經切換'
    titleDiv.innerText=message
  }
  
}

const squares = document.querySelectorAll('.colorSquare')
const output = document.getElementById('output')
// 將每個元素綁定
squares.forEach(square => {
  square.onclick = () => {
    id = square.getAttribute('id')
    output.innerHTML = `<div class='colorSquare' id='${id}'></div>`
  }
})


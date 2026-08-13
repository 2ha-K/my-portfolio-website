let seconds = 0
let m_seconds = 0
const displayMSeconds = document.getElementById('m_seconds')
const displaySeconds = document.getElementById('seconds')
const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const buttonReset = document.getElementById('button-reset')
let interval = null

// 綁定 buttonStart 按鈕的觸發事件
buttonStart.onclick = () => {
  if (interval==null){
    interval = setInterval(timer, 10)
  }
}

// 綁定 buttonStop 按鈕的觸發事件
buttonStop.onclick = () => {
  clearInterval(interval)
  interval=null
}

// 綁定 buttonReset 按鈕的觸發事件
buttonReset.onclick = () => {
  clearInterval(interval)
  seconds=0
  m_seconds=0
  displayMSeconds.innerHTML=`0${m_seconds}`
  displaySeconds.innerHTML=`0${seconds}`
  interval=null
}

// 碼錶讀取方法
const timer = () => {
  m_seconds++;
  if (m_seconds>99){
    seconds++;
  if (seconds<=9){
    displaySeconds.innerHTML=`0${seconds}`
  }else{
    displaySeconds.innerHTML=`${seconds}`
  }
    m_seconds=0
  }
  if (seconds>59){
      seconds=0
      displaySeconds.innerHTML = `00`;
  }

  if (m_seconds<=9){
    displayMSeconds.innerHTML=`0${m_seconds}`
  }else{
    displayMSeconds.innerHTML=`${m_seconds}`
  }


}

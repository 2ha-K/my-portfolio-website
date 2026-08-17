

function Title() {
  return (
    <h1>標題: 今天的天氣</h1>
  )
}

function Body() {
  let temp = 25
  return (
    <>
      <p>今天天氣很好喔!溫度是{temp}度</p>
      <button onClick={()=>(alert("超級狗狗"))}>產生狗狗</button>
    </>
    
  )
}

function App() {

  return (
    <div>
      <Title />
      <Body />
    </div>
  )
}

export default App

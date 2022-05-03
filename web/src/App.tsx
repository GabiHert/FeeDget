
interface ButtonProps {
  text: string;
}

function Button(props:ButtonProps){
  return <button className="bg-violet-500 p-4 h-10 rounded hover:bg-violet-700 transition-colors">{props.text}</button>
}

function App() {
  return (<div className="flex gap-2">
    <Button text="OK"/>
    <Button text = "OK"/>
    <Button text = "OK"/>
    <Button text = "OK"/>
  </div>)
}

export default App

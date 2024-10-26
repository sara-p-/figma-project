import './App.css'
// import TextBox from './components/TextBox/TextBox'
import TextArea from './components/TextArea/TextArea'
// import TextInput from './components/TextInput/TextInput'

function App() {
  return (
    <section>
      <div className='wrapper'>
        <div className='box'>
          <TextArea></TextArea>
        </div>
        {/* <TextBox
          initialHeight={200}
          initialWidth={200}
          classes={['hello-text', 'resize']}
        >
          <h1>Hello Figma!</h1>
        </TextBox> */}
      </div>
    </section>
  )
}

export default App

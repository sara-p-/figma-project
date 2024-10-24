import './App.css'
import TextBox from './components/TextBox/TextBox'
// import TextArea from './components/Textarea/Textarea'
// import TextInput from './components/TextInput/TextInput'

function App() {
  return (
    <section>
      <div className='wrapper'>
        <TextBox resize={true} classes={['hello-text', 'resize']}>
          <h1>Hello Figma!</h1>
        </TextBox>
      </div>
    </section>
  )
}

export default App

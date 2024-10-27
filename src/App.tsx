import './App.css'
import TextBox from './components/TextBox/TextBox'
import TextArea from './components/TextArea/TextArea'
import Sidebar from './components/Sidebar/Sidebar'
// import TextInput from './components/TextInput/TextInput'

function App() {
  return (
    <>
      <section>
        <div className='content'>
          <div className='content__wrapper'>
            <div className='screen'>
              <div className='screen__inside'>
                <TextBox classes={['hello-text', 'resize']}>
                  <h1>Hello Figma!</h1>
                </TextBox>
                <TextArea></TextArea>
              </div>
            </div>
          </div>
        </div>
        <Sidebar />
      </section>
    </>
  )
}

export default App

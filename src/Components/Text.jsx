
import { useState } from 'react'
import style from './Text.module.css'

const Text = ()=>{

  let sentence = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet et odio ad hic vel, provident ab totam laudantium iure illo assumenda natus praesentium exercitationem voluptatem. Sapiente excepturi dolor laborum id perspiciatis aliquid debitis cum, iure voluptatem non itaque earum ad."


  const [text,setText] = useState(sentence)

    function lowerCase(){
      let low= text.toLowerCase()
      setText(low)
    }
    function orignal(){
        setText(sentence)
    }
    function upperCase(){
      let upp= text.toUpperCase()
      setText(upp)
    }

  return (
    <div className={style.text}>
            <div>
              <h1>Text Transform</h1>
            </div>

            <div className={style.textBox}>{text}</div>

            <div className={style.buttonBox}>
              <button onClick={lowerCase}>Lower Case</button>
              <button onClick={orignal}>Orignal</button>
              <button onClick={upperCase}>Upper Case</button>
            </div>

    </div>
  )
}

export default Text;
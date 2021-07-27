import { useEffect, useRef, useState } from 'react'
import './game.css'
import 'bootstrap/dist/css/bootstrap.min.css';

let makeNum = (num)=> {
    return parseInt(num * 100)
}

export default function Game() {
    
    const [Number, setNumber] = useState(makeNum(Math.random()))
    const [game, setgame] = useState("ta imkoniyatingiz bor")
    const [inpValue, setinpValue] = useState('')
    const [gameStats, setgameStats] = useState("")
    const [tryCount, settryCount] = useState(10)

    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    });

    const changeIt = (event) => {
        setinpValue(event.target.value)
    }
    const clearInp = () => {
        setinpValue("")
    }
    const checkGame = (e) => {
        e.preventDefault()
        setinpValue('')
            if(tryCount <= 1) {
                alert("siz yutkazdingiz")
                settryCount(10)
                setgame("ta imkoniyatingiz bor")
                setNumber(makeNum(Math.random()))
                setgameStats('')
                clearInp()
                return
            }
            if(inpValue == Number){
                alert("you won")
                settryCount(10)
                setgame("ta imkoniyatingiz bor")
                setNumber(makeNum(Math.random()))
                setgameStats('')
                clearInp()
                return
            }
            if(inpValue > Number){
                setgameStats("oylangan son kichik")
                settryCount(tryCount -1)
            } else {
                setgameStats("oylangan son katta")
                settryCount(tryCount -1)
            }
    }

    return  <div className="game container">
                <div className="game-status d-flex justify-content-center">
                    <h1 className="game-status_title text-white"><span className="text-warning">{tryCount}</span> {game}</h1>
                </div>
                <div className="game-controller d-flex justify-content-center">
                    <p>{gameStats}</p>
                </div>
                <div className="game-play d-flex justify-content-center">
                    <form className="game-play__form d-flex flex-column">
                        <input 
                          type="text" 
                          value={inpValue}
                          placeholder="O'ylangan Sonni toping"
                          onClick={clearInp} 
                          onChange={changeIt} 
                          ref={inputRef}
                          className="game-play-input my-2"
                          />
                        <button onClick={checkGame} className="btn-white">Tekshirish</button>
                    </form>
                </div>
            </div>
}
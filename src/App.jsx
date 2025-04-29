import { useState} from 'react'
import './App.css'
import Die from './components/Die'
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti'

export default function App() {
    
    const [dice, setDice] = useState(() => generateAllNewDice())
    const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)
    

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false,
                id: nanoid()
            }))
    }

    const diceElements = dice.map(dieObject => 
        <Die 
            key={dieObject.id} 
            value={dieObject.value} 
            isHeld={dieObject.isHeld} 
            hold={hold} 
            id={dieObject.id} />
    )

    function rollDice() {
        if (!gameWon) {
            setDice(oldDice => oldDice.map(prev => {
                return prev.isHeld ? 
                        prev : 
                        {...prev,
                            value: Math.ceil(Math.random() * 6),
                            id: nanoid(),
                            isHeld: false 
                        }
            }))
        } else {
            setDice(generateAllNewDice())
        }        
    }

    function hold(id) {
        setDice(prevDice => prevDice.map(prev => {
            return prev.id === id ? {...prev, isHeld: !prev.isHeld} : prev
        }))
    }

    return (
        <main>
            {gameWon && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='dice-container'>                
                {diceElements}
            </div>   
            
            <button className='roll-dice' onClick={rollDice}>
                {gameWon ? "New Game" : "Roll"}                
            </button>                     
        </main>
  )
}


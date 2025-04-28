import { useState } from 'react'
import './App.css'
import Die from './components/Die'

export default function App() {
    
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6), 
                isHeld: false
            }))
    }

    const diceElements = dice.map(dieObject => 
        <Die value={dieObject.value} />
    )

    function rollDice() {
        setDice(generateAllNewDice())
    }

    return (
        <main>
            <div className='dice-container'>                
                {diceElements}
            </div>   
            
            <button className='roll-dice' onClick={rollDice}>Roll</button>
                     
        </main>
  )
}


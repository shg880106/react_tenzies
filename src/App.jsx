import './App.css'
import Die from './components/Die'

export default function App() {
    
    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }

    console.log(generateAllNewDice())
    return (
        <main>
            <div className='dice-container'>                
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
                <Die value={Math.floor(Math.random() * 6) + 1} />
            </div>            
        </main>
  )
}


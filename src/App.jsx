import './App.css'
import Die from './components/Die'

export default function App() {
    
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


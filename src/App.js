import Background from './components/Background/Background';
import Settings from './components/Settings/Settings';
import Board from './components/Board/Board';
import './App.css'
import useGetImages from './hooks/useGetImages';
import { useState } from 'react';

function App() {
    const [gameOptions, setGameOptions] = useState(null);


    const startGame = options => {
        setGameOptions(options);
    };

    const restartGame = () => {
      setGameOptions(null)
    }

    return (
        <>
            <Background />
            <h1 className='gameTitle'>AKLINDA TUT!</h1>
            {!gameOptions ? (
                <Settings startGame={startGame} /> 
            ) : (
                <Board gameOptions={gameOptions} restartGame={restartGame} />
            )}
            <h4 className='copyright'><span>©2022, Developed by</span>  Taşkın Demirel</h4>


        </>
    );
}

export default App;

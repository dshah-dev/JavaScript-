import react, {useState,useEffect,useRef} from 'react';

function task2() {  
    const[count,setCount]=useState(0);
    const[direction,setDirection]=useState(1);
    const[running,setRunning]=useState(false);
    const refVal=useRef(null);

    useEffect(() => {
        if(!running){
            if(refVal.current){
                clearInterval(refVal.current);
                refVal.current=null;
            }
            return;
        }
        refVal.current=setInterval(() => {
            setCount(prev=>{
                if(prev===0 && direction===1) return 1

                const next=prev + direction;

                if(direction===1 && prev >=20){
                    setDirection(-1);
                    return 20;
                }
                if(direction===1 && next >=20){
                    setDirection(-1);
                    return 20;
                }
                if(direction===-1 && next <=1){
                    setRunning(false);
                    setDirection(1);
                    return 1;
                }
                return next;
            })
        }, 200);

        return () => {
            if(refVal.current){
                clearInterval(refVal.current);
                refVal.current=null;
            }
        }
    }, [running,direction]);

    const handleStart=()=>{
        if(running) return;
        if(count===0) setCount(1);
        setDirection(1);
        setRunning(true);
    }
    const handleStop=()=>{ setRunning(false); }

    const handleReset=()=>{
        setRunning(false);
        setCount(0);
        setDirection(1);
    }

    return (
    <div>
        <h1>Task-1</h1>
        <h2>COUNTER: {count}</h2>
        <button className='m-3' onClick={handleStart}>Start</button>
        <button className='m-3' onClick={handleStop}>Stop</button>
        <button className='m-3' onClick={handleReset}>Reset</button>
    </div>
    )
}

export default task2;
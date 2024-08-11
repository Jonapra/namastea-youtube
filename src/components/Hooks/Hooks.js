import { nthPrime } from '../../utils/helper';
import { useMemo, useState } from 'react';
import RefsDemo from './RefsDemo';

const Hooks = () => {
    const [input, setInput] = useState("");
    const [dark, setDark] = useState(false);
    // console.log("input :", input);
    console.log('Rendering...');

    //This will only run when the input changes ,it will not run/re-render when it is not changed
    const prime =useMemo(()=> nthPrime(input),[input]);
    
  return (
    <div className='mt-16  bg-white pl-16 pt-14 flex gap-14'>
        <div className={'inputBox border-2 border-black w-[400px] h-[400px] pt-3 pl-2 rounded-lg ' + (dark && 'bg-black text-white')}>
            <button className='border-2 rounded-lg border-red-800 px-4 py-1 bg-green-500' onClick={()=>setDark(!dark)}>Dark</button>
            <input type="number" className={'mt-2 border-2 border-black w-[360px] h-[40px]' + (dark && 'text-white bg-black')}
            placeholder='Enter Number'
            value={input}   
            onChange={(e)=>setInput(e.target.value)}/>
            <div>
                <h2 className='font-semibold'>nth Prime Number: {prime}</h2>
            </div>
        </div>
        {/*  useRefsDemo */}
        <RefsDemo/>
    </div>
  )
}

export default Hooks
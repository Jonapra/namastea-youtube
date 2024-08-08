import { nthPrime } from '../../utils/helper';
import { useState } from 'react';

const Hooks = () => {
    const [input, setInput] = useState("");
    // console.log("input :", input);
    console.log('Rendering...');

    const prime = nthPrime(input);
    
  return (
    <div className='mt-16  bg-white pl-16 pt-14 '>
        <div className='inputBox border-2 border-black w-[400px] h-[400px] pt-3 pl-2 rounded-lg'>
            <input type="number" className='border-2 border-black w-[360px] h-[40px] ' 
            placeholder='Enter text'
            value={input}   
            onChange={(e)=>setInput(e.target.value)}/>
            <div>
                <h2 className='font-semibold'>nth Prime Number: {prime}</h2>
            </div>
        </div>
        
    </div>
  )
}

export default Hooks
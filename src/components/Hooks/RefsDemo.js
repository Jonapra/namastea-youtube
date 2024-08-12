import React, { useEffect } from 'react'
import { useRef ,useState} from 'react';

const RefsDemo = () => {
    let x = 10;
    const [y, setY] = useState(10);
    // we can access the ref object using ref.current we get like this -{current: 10}
    const ref = useRef(10); //(10 is the initial value of ref)
    // console.log('Ref :',ref); 
    
    const inputRef = useRef(null);
    
    const handleButtonClick = () => {
        inputRef.current.focus(); // Focus the input field
        console.log('Reference :',inputRef);
    };

  return (
    <div className='p-2 bg-slate-50 border-2 ☐ border-black w-96 h-96 flex flex-col'>
        <span className='text-lg font-bold'>Normal Variable X = {x}</span>
        <button className='px-3 py-2 bg-green-600 rounded-md w-24'
        onClick={() => {
            x += 1;  //this will not change the value of x as it is not re-rendered but it will change the value of x in the memory , When I click the increaseY button it will re-render the component and it will refresh the value of and it will again set the value of x to 10
            console.log('X =',x);  // x vlaue does increase but it is not reflected in the UI as its not re-rendered
        }}>
            Increase X
        </button>

        <span className='text-lg font-bold'>Using State Y = {y}</span>
        <button className='px-3 py-2 bg-green-600 rounded-md w-24'
        onClick={() => {
            setY(y+1); //this will change the value of y it re-render the component as the state changes
        }}>
            Increase Y
        </button>

        <span className='text-lg font-bold'>useRef = {ref.current}</span>
        <button className='px-3 py-2 bg-green-600 rounded-md w-24'
        onClick={() => {
            ref.current += 1; //this will change the value of useRef.current it will not re-render the component as it is not a state but it will change the value of useRef.current in the memory , When I click the increaseY button it will re-render the component and it will render the current value of useRef.current in the UI.
            console.log('useRef :',ref.current);
            
        }}>
            useRef
        </button>

        <div>
            <input ref={inputRef} type="text" placeholder="Focus on me!" className="border p-2" />
            <button onClick={handleButtonClick} className="mt-2 p-2 bg-blue-500 text-white">
                Focus Input
            </button>
        </div>

    </div>
  )
}

export default RefsDemo
'use client'
import { useState } from 'react';
import style from './style.module.css'

export default function Home() {
  const [color, setColor] = useState("red")
  return ( 
      <main >

        <h1 className={color == 'red' ? style.red : style.green}> Condition with style </h1>
        <h2 style={{backgroundColor:color == 'red' ? 'red' : 'green' }}>Heading 2</h2>
        <h3 id={style.orange}>Heading 3</h3>
        <button onClick={()=> setColor('green')}>Update color</button>
      </main>  
  );
}

/*

👉 Key Differences :
    Feature                      	<InnerComponent />                    	            {InnerComponent()}
      Lifecycle            Management	React manages lifecycle methods.        	No lifecycle management by React.
      State/Context	       Can use state and context.	                          State and context won’t work.
      Execution Time	     Executed when React renders it.	                    Executed immediately.
      Reusability          Fully reusable as a React component.                	Behaves like a simple function.

*/
'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";



// 👉 Variable cannot be rerendered, but 'state' can rerendered (when state change)...

export default function Home() {
  const router = useRouter();
  const apple = (item) => {
    alert(item)
  }

  const InnerComponent=() => {
    return (
      <h1>Inner Component</h1>
    )
  }

  return ( 
    <div className={styles.page} >
      <main className={styles.main} >
        <h1>Events, fucntion and state</h1>
        {/* <button onClick={() => apple("color")}>Click me</button> */}

        {/* <InnerComponent />
        {InnerComponent()}                👉 It also work as same as upper component */}


        <Link href="/login">Go to Login page</Link>
        <br /><br />
        
        <Link href="/about">Go to About page</Link>
        <br /><br />
        
        <button onClick={()=> router.push("/login")}>Go to Login page</button>
        <br /><br />
        
        <button onClick={()=> router.push("/about")}>Go to About page</button>

      </main>  
    </div>
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
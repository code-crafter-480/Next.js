'use client'
import Link from "next/link";

export default function Home() {

  return ( 
      <main >

        <h1> Fetch Data with API in Client Component </h1>
        <Link href="/productlist">Go to Product List</Link>

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
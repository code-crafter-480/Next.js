import Image from "next/image";
import Profile from '../../public/next.svg'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight:'100', 
  subsets:['latin'],
  display: 'swap'
})

export default function Home() {
  console.log(Profile)
  return ( 
      <main >
        
        <h1>Image Optimazation in Next</h1>
        {/* 
        <Image src={Profile} />             {/* Inside this 'Image', Nextjs already put predefined some things whick make it more optimized  
        <img src={Profile.src} />             This is not optimized */}

        {/* 👉 Ata use korle amader 'height' 'width' and 'hostname' define korte hobe, 'hostname' set korte 'next.config.mjs' a setup korte hobe... */}
        <Image src="https://media.istockphoto.com/id/1370871192/photo/happy-woman-shows-blank-smartphone-screen-against-blue-background.jpg?s=612x612&w=0&k=20&c=ICucU4i1_xfW8kx2JFGD7LmEsepyNbIA-zab9B4CRtM=" width={200} height={200} />

        <h1>Font Optimization in Next</h1>
        {/* <h1 style={{fontFamily:'Roboto', fontWeight:100}}>Font with Link Tag in Next</h1>   👉 This is through a request to the googleFont all the time so for this reason it consume some time and create some delay, So here we use Nextjs 'Google font' */}        

        <h1 className={roboto.className}>Font with Next js font feature</h1>

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
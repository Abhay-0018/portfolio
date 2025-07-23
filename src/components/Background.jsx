import React, { useEffect, useState } from 'react'

const Background = () => {

// Function and the states
// Why an empty array because the no is not fixed
const [stars , setStars]= useState([])
const [meteors , setMeteors] = useState([])





// This function is for the stars only 
const generateStars = ()=>{
    const numberOfStars = Math.floor(
        (window.innerWidth * window.innerHeight) / 10000
    )

    const newStars = [];
    
    //Iterating for the stars
    for(let i =0; i < numberOfStars ; i++){
        newStars.push({
            id:i,
            size:Math.random() * 3 +1,
            x :Math.random() * 100, 
            y :Math.random() * 100, 
            opacity : Math.random() *0.5 + 0.5,
            animationDuration : Math.random() * 4 +1,
        })
    }

    setStars(newStars)
}


// This function is for the metros or the snow effect

const generateMeteors = ()=>{
    const numberOfMeteros = 4

    const newMeteors = [];
    
    //Iterating for the stars
    for(let i =0;i < numberOfMeteros; i++){
        newMeteors.push({
            id:i,
            size:Math.random() * 2 +1,
            x :Math.random() * 100, 
            // x :Math.random() * 50, 

            y :Math.random() * 20, 
            delay: Math.random() * 15,
            animationDuration : Math.random() * 3 +3,
        })
    }

    setMeteors(newMeteors)
}
 

useEffect(()=>{
    // Why use effect for calling a function because it can provide an effect into the ui and also to make sure this runs for the 1 time only 
    generateStars();
    generateMeteors();


    // For the responsiveness 
    const handleResize =()=>{
        generateStars();
    }

    window.addEventListener("resize" , handleResize)

    // This return is for the clean up
    return() => window.removeEventListener("resize" , handleResize)

} ,[]);

  return ( 
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      
      {/* For printing the stars use the array map method  */}

      {stars.map((star)=>(

        <div  key={star.id}
        className='star animate-pulse-subtle'
        style={{
            width : star.size + 'px', 
            height : star.size + 'px', 
            left : star.x + '%', 
            top : star.y + '%', 
            opacity : star.opacity, 
            animationDuration : star.animationDuration + "s"

        }}
        />

      ))}

      {/* For the meteors  */}

      {meteors.map((meteor)=>(

        <div  key={meteor.id}
        className='meteor animate-meteor'
        style={{
            width : meteor.size * 50 + 'px',  // For the sd
            height : meteor.size * 1  + 'px', 
            left : meteor.x + '%', 
            top : meteor.y + '%', 
            animationDelay : meteor.delay , //+ "s"
            animationDuration : meteor.animationDuration + "s",

        }}
        
        />
      ))}
    </div>
  )
}

export default Background

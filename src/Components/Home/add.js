import React from 'react'

const add = () => {



   const [arrow, setArrow] = useState(0)

   // let translateX = 0

   useEffect(() => {

      let leftArrow = document.getElementsByClassName('arrowbtn')[0]
      leftArrow.style.display = 'none';


   }, [])





   const nextArrow = (e) => {
      console.log('nextArrow')
      console.log(arrow)

      if (arrow > (-65 * 8)) {
         setArrow(arrow - (-65 * 8))
         let igStories = document.getElementsByClassName('igStories')[0]
         igStories.style.transform = `translateX(${arrow}px)`
         return 0;
      }

      let leftArrow = document.getElementsByClassName('arrowbtn')[1]
      leftArrow.style.display = 'none';

      let rightArrow = document.getElementsByClassName('arrowbtn')[0]
      rightArrow.style.display = 'block';
   }


   const GoBackArrow = (e) => {
      console.log('GoBackArrow')
      console.log(arrow)
      if (arrow < 0) {
         setArrow(arrow + (65 * 8))
         let igStories = document.getElementsByClassName('igStories')[0]
         igStories.style.transform = `translateX(${arrow}px)`
         return 0;
      }

      let leftArrow = document.getElementsByClassName('arrowbtn')[0]
      leftArrow.style.display = 'none';

      let rightArrow = document.getElementsByClassName('arrowbtn')[1]
      rightArrow.style.display = 'block';
   }














   return (

      <div>

         <div className="storiesContainer ">

            <div className="storiesbox">
               <div className="stories ">
                  <ul className="igStories" id="igStories" style={{ background: "#fff" }} role="presentation">
                     {[...Array(23)].map((e, i) => {
                        return (
                           <li key={i} className="userStories">
                              <button className="storiesbtn">

                                 <div className="Storieprofile ">
                                    <span>
                                       <img className="storieprofilePic" src="propic.jpeg" alt="stories Profilepic" draggable="false" />
                                    </span>
                                 </div>
                                 <div className="stories__userName seconderyColor"><span>{i}_52...</span></div>
                              </button>
                           </li>
                        )
                     })}
                  </ul>
               </div>



            </div>
         </div>






         <div className="arrowContainer">



            <div className="leftArrow arrow" aria-label='Go Back' onClick={GoBackArrow} tabIndex="-1" aria-expanded="false">
               <button className="arrowbtn">
                  <div className="arrowicon"></div>
               </button>
            </div>


            <div className="rightArrow arrow" aria-label='next' onClick={nextArrow} tabIndex="-1" aria-expanded="false">
               <button className="arrowbtn">

                  <div className="arrowicon"></div>
               </button>
            </div>

         </div>
      </div>





   )
}

export default add
import React from 'react'
import { RightArrow, LeftArrow } from './StoriesArrows.tsx';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Card from './Card.tsx';
import './Stories.css'
const Stories = () => {



   const elemPrefix = "test";
   const getId = (index) => `${elemPrefix}${index}`;

   const getItems = () =>
      Array(20)
         .fill(0)
         .map((_, ind) => ({ id: getId(ind) }));

   const [items] = React.useState(getItems);


   return (
      <div className="StoriesContainer">
         <ScrollMenu
            className="StoriesBox"
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
         >

            {items.map(({ id }) => (
               <Card
                  title={id}
                  itemId={id} // NOTE: itemId is required for track items
                  key={id}
               />
            ))}
         </ScrollMenu>
      </div>
   )
}

export default Stories
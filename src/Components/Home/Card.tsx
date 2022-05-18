import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export default function Card({
  title,
  itemId,
}: {
  title: string;
  itemId: string;
}) {
  const visibility = React.useContext(VisibilityContext);

  const visible = visibility.isItemVisible(itemId);

  return (
    <div className="userStories">
      <button className="storiesbtn">
        <div className="Storieprofile ">
          <span>
            <img
              className="storieprofilePic"
              src="propic.jpeg"
              alt="stories Profilepic"
              draggable="false"
            />
          </span>
        </div>
        <div className="stories__userName seconderyColor">
          <span>{title}</span>
        </div>
      </button>
    </div>
  );
}

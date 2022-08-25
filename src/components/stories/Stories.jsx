import React from "react";
import "./Stories.css";

const Stories = () => {
  const [state, setState] = React.useState([
    { id: 1, image: "/Assets/person5.jpeg", name: "Ibrahim" },
    { id: 2, image: "/Assets/person2.jpeg", name: "ibrahim" },
    { id: 3, image: "/Assets/person3.jpeg", name: "ibrahim" },
    { id: 4, image: "/Assets/person4.jpeg", name: "ibrahim" },
  ]);
  return (
    <div className="stories">
      {state.map((story) => (
        <div className="stories__col" key={story.id}>
          <div className="stories__body">
            <img src={story.image} alt="stories" />
            <div className="stories__body-overlay">
              <div className="stories__body-overlay-img">
                <img src={story.image} alt="" />
              </div>
              <div className="stories__body-name">{story.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;

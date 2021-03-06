import React from "react";
import { ListGroup } from "react-bootstrap";

export const SubServiceCard = ({
  pathIcon,
  iconId,
  titleText,
  contentText,
}) => {
  return (
    <div className="ItemSubservice">
      <div className="HeaderSubService">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="currentColor"
          viewBox="0 0 16 16"
          className={iconId}
        >
          <path d={pathIcon} />
        </svg>
        <h3 className="">{titleText}</h3>
      </div>
      <div className="ContentSubservice">
        <ListGroup variant="flush">
          {contentText.map((element, index) => (
            <ListGroup.Item key={`titleText-${index + 1}`}>
              {element}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

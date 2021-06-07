import React from 'react';
import { Card } from 'react-bootstrap';

export const ValueCard = ({
    valueTitle,
    pictureValue,
    contentValue
}) => {
    return (
        <Card border="light">
            {
                pictureValue? <Card.Img variant="top" src={pictureValue} /> : <div />
            }
            <Card.Header className="CardHeaderItem">
                <h3 className="HeaderTitle">{valueTitle}</h3>
            </Card.Header>            
            <Card.Body>
                {/* <Card.Title>{valueTitle}</Card.Title> */}
                <Card.Text className="CardContent" >{contentValue}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
         </Card>
    );
};
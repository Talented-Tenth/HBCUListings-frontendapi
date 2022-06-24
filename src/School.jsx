import React, {  } from 'react';
import {Link} from 'react-router-dom';
import {Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function School(schools) {
    
    
    //render the school details
    return (
        <div className='School'>
            <Card style={{ width: '100%' ,margin:'30px auto'}}>
            {/* <Card.Img variant="top" style= {{height:'350px'}} src={props.dog.image}/> */}
            <Card.Body>

                <Card.Title>{schools.name}</Card.Title>
                <Card.Text>
                Something
                </Card.Text>
                {/* <Button href={`/dogs/${props.dog.id}`} style= {{backgroundColor:'darkblue'}} variant="primary">More Info</Button> */}

            </Card.Body>
            </Card>
       
        </div>
    );
}

export default School;
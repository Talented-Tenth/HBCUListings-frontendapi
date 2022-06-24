import React, { useState, useEffect } from 'react';
import './index.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';


function SchoolAll() {
  //state storing schools list
  const [schools, setSchools] = useState(null);
  
  //load schools list on component mount
  useEffect(() => {
  getSchools();
  }, []);

  //api fetch request
  function getSchools() {
  const url = `http://hub-env.eba-ufpmtewu.us-east-1.elasticbeanstalk.com/schools`;
  fetch(url)
      .then(response => response.json())
      .then(response => {
      setSchools(response.schools)
      })
      .catch(console.error);
  }

  //guard operator displays program after api response
  if(schools===null){
      return(
      <div>Loading Results...</div>
      )
  } else{
      return ( 
        <Container>
        <Row className="School">
                {schools.map((Schools)=>{
                return (<Col xs={12} sm={6} lg={4} key={schools.id} school={schools}>
                  <br/>
                  {Schools.name}
                  <br/>
                  {Schools.city}, {Schools.state}
                  <br/>

                    </Col>)         
                    
            })}   
            
        </Row>
        </Container>
     
          );
  }
}

export default SchoolAll;
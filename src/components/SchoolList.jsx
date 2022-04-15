import React from 'react';
import School from './School';


function SchoolList({schools}) {
    //maps through list of schools, creating a component for each
    return (
        schools
        ? 
        <div>

            {schools.map((School)=>{
                return <School key={School.id} School={School}/>
            })}
        </div>
        :
        <p>loading</p>
    );
}

export default SchoolList;
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import People from './People.jsx';
import { useState } from 'react';
import { useEffect } from 'react';
import PeopleGroups from './peopleGroup.jsx';
import getData from '../util/GetData.js';

function PeopleTabs() {
  const [loading, setLoading] = useState(false); 
  const [people, setPeople] = useState();

  useEffect(()=>{
    getData('people/')
    .then((json) => {
      console.log("new json: ", json);
      setPeople(json);
      setLoading(true);
    })
  },[])

  return (
    <Tabs
      defaultActiveKey="faculty"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="faculty" title="Faculty">
        {loading && <PeopleGroups title = "faculty" pepGroup = {people.faculty}/>};
        <People faculty={true} />
      </Tab>
      <Tab eventKey="staff" title="Staff">
        {loading && <PeopleGroups title = "staff" pepGroup = {people.staff}/>};
        <People faculty={false} />
      </Tab>
    </Tabs>
  );
}

export default PeopleTabs;
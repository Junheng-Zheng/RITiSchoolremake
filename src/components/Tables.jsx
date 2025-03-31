import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { useEffect } from "react";
import PeopleGroups from "./peopleGroup.jsx";
import getData from "../util/GetData.js";

function Tables() {
  const [loading, setLoading] = useState(false);
  const [people, setPeople] = useState();

  useEffect(() => {
    getData("people/").then((json) => {
      console.log("new json: ", json);
      setPeople(json);
      setLoading(true);
    });
  }, []);

  return (
    <Tabs
      defaultActiveKey="faculty"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="faculty" title="Faculty">
        {loading && <PeopleGroups title="faculty" pepGroup={people.faculty} />}
      </Tab>
      <Tab eventKey="staff" title="Staff">
        {loading && <PeopleGroups title="staff" pepGroup={people.staff} />}
      </Tab>
    </Tabs>
  );
}

export default Tables;

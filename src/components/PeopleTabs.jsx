import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useState } from "react";
import { useEffect } from "react";
import PeopleGroups from "./peopleGroup.jsx";

const PeopleTabs = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState();

  useEffect(() => {
    const Fetch = async () => {
      if (data) {
        setPeople(data);
        console.log("set!");
        setIsLoading(true);
      }
    };
    Fetch();
  }, [data]);

  return (
    <Tabs
      defaultActiveKey="faculty"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="faculty" title="Faculty">
        {isLoading && (
          <PeopleGroups title="faculty" pepGroup={people.faculty} />
        )}
      </Tab>
      <Tab eventKey="staff" title="Staff">
        {isLoading && <PeopleGroups title="staff" pepGroup={people.staff} />}
      </Tab>
    </Tabs>
  );
};

export default PeopleTabs;

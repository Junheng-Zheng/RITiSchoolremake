import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PeopleGroups from "./peopleGroup.jsx";

const PeopleTabs = ({ data }) => {
  //tabs for staff and faculty`
  return (
    <Tabs defaultActiveKey="faculty" id="uncontrolled-tab-example">
      <Tab eventKey="faculty" title="Faculty">
        {<PeopleGroups title="faculty" pepGroup={data.faculty} />}
      </Tab>
      <Tab eventKey="staff" title="Staff">
        {<PeopleGroups title="staff" pepGroup={data.staff} />}
      </Tab>
    </Tabs>
  );
};

export default PeopleTabs;

import PhysicsNote from "./PhysicsNotes";
import Math101Notes from "./Math101Notes";
import ChemistryNotes from "./ChemistryNotes";
import Math102Notes from "./Math102Notes";
import Ges101Notes from "./GES101Notes";
import Ges101_1Notes from "./Ges101.1Notes";
import Get111Notes from "./Get111";
import CeeNotes from "./Cee";

function BasicAccordion(props) {
  return (<>{props.title == "PHYSICS" ? <PhysicsNote /> : props.title == 'MATH101' ? <Math101Notes /> : props.title == 'MATH102' ? <Math102Notes /> : props.title == 'CHEMISTRY' ? <ChemistryNotes /> : props.title == 'GES101' ? <Ges101Notes /> : props.title == 'GES101.1' ? <Ges101_1Notes /> : props.title == 'GET111' ? <Get111Notes /> :  <CeeNotes />}</>);
}

export default BasicAccordion;

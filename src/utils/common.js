import { 
  VscFiles
  , VscCode
  , VscFolderLibrary
  , VscGithub
  , VscAccount
  , VscMail
  , VscSettingsGear
} from "react-icons/vsc"
import { LiaLinkedin } from "react-icons/lia";

import Home  from "../components/pages/Home";
import Skills from "../components/pages/Skills";
import Experiences from "../components/pages/Experiences";


const Components = {
  VscFiles
  , VscCode
  , VscFolderLibrary
  , LiaLinkedin
  , VscGithub
  , VscAccount
  , VscMail
  , VscSettingsGear
  , Home
  , Skills
  , Experiences
}

export const CapitalizedComponent = ( props ) => {
  let Component = Components[ props.type ];
  return (<Component { ...props } />);
}

export default CapitalizedComponent;
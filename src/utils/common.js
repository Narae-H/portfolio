import { 
  VscFiles
  , VscCode
  , VscFolderLibrary
  , VscGithub
  , VscAccount
  , VscMail
  , VscSettingsGear
} from "react-icons/vsc"


const Components = {
  VscFiles
  , VscCode
  , VscFolderLibrary
  , VscGithub
  , VscAccount
  , VscMail
  , VscSettingsGear
}

export const CapitalizedComponent = ( props ) => {
  let Component = Components[ props.type ];
  return (<Component { ...props } />);
}

export default CapitalizedComponent;
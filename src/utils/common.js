import { 
  VscFiles
  , VscCode
  , VscFolderLibrary
  , VscGithub
  , VscAccount
  , VscSettingsGear
} from "react-icons/vsc"


const Components = {
  VscFiles
  , VscCode
  , VscFolderLibrary
  , VscGithub
  , VscAccount
  , VscSettingsGear
}

export const CapitalizedComponent = ( props ) => {
  let Component = Components[ props.type ];
  return (<Component { ...props } />);
}

export default CapitalizedComponent;
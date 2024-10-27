import { PropTypes } from "prop-types";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";
import Contactme from "./pages/Contactme";


const pageMap = {
  home : {
    component: Home
  },
  skills : {
    component: Skills
  },
  experiences : {
    component: Experiences
  },
  contactme : {
    component: Contactme
  }
}

export function PageComponent({ name='', props }) {
  const { component: PageComponent } = pageMap[name.toLowerCase()] || pageMap['home'];

  return (
    <PageComponent />
  )
}

PageComponent.propTypes = {
  pageComponentName: PropTypes.string
};
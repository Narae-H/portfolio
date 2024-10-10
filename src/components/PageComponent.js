import { PropTypes } from "prop-types";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experiences from "./pages/Experiences";


const pageMap = {
  home : {
    component: Home
  },
  skills : {
    component: Skills
  },
  experiences : {
    component: Experiences
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
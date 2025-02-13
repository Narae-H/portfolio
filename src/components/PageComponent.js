import { PropTypes } from "prop-types";

import Home from "./pages/Home";
// import Skills from "./pages/Skills";
// import Experiences from "./pages/Experiences";
// import Contactme from "./pages/Contactme";
import { lazy } from "react";

// This will show up as a separate chunk in the Network tab
const Skills = lazy(() => import(/* webpackChunkName: "skills" */ './pages/Skills'));
const Experiences = lazy(() => import(/* webpackChunkName: "experiences" */ './pages/Experiences'));
const Contactme = lazy(() => import(/* webpackChunkName: "contactme" */ './pages/Contactme'));

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
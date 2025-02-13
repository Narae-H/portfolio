import React from 'react';
import { FaJ, FaJava, FaHashtag, FaReact, FaAws, FaMicrosoft, FaS, FaMaxcdn, FaHtml5, FaCss3Alt, FaN, FaDocker } from "react-icons/fa6";
import { IoLogoJavascript, IoMdGitBranch } from 'react-icons/io';
import { SiSpringboot, SiMariadb, SiThymeleaf } from "react-icons/si";
import { MdAttachMoney, MdCode, MdDarkMode, MdEditDocument, MdLightMode, MdManageAccounts, MdWebAsset } from "react-icons/md";
import { BiLogoRedux, BiLeaf, BiSolidWindowAlt } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { VscAzure, VscFiles, VscCode, VscFolderLibrary, VscMail, VscSettingsGear, VscVscode, VscRemote } from "react-icons/vsc";
import { ImGithub, ImLinkedin, ImOnedrive } from "react-icons/im";
import { PiCertificateBold, PiCursorClickFill, PiFinnTheHumanFill, PiTrademarkRegisteredBold, PiTrafficSignalFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoPersonCircle, IoServer } from "react-icons/io5";
import { GiCycle } from "react-icons/gi";
import { PropTypes } from 'prop-types';

const iconMap = {
  vscode : {
    component: VscVscode,
    style: { color: '#1f9cf0', size: '36px' }
  },
  home: {
    component: VscFiles,
    style: { color: '#7b7b7b', size: '36px' }
  },
  skills: {
    component: VscCode,
    style: { color: '#7b7b7b', size: '24px' }
  },
  experiences: {
    component: VscFolderLibrary,
    style: { color: '#7b7b7b', size: '24px' }
  },
  contactme: {
    component: VscMail,
    style: { color: '#7b7b7b', size: '24px' }
  },
  settings: {
    component: VscSettingsGear,
    style: { color: '#7b7b7b', size: '24px' }
  },
  java: {
    component: FaJ,
    style: { color: '#cc3e44', width: '13px', height: '13px' }
  },
  javalogo: {
    component: FaJava,
    style: { background: '#d4360e', color: '#ffffff', size: '24px', padding: '4px', borderRadius: '5px' }
  },
  springboot: {
    component: SiSpringboot,
    style: { color: '#6ca84e', width: '13px', height: '13px' }
  },
  html: {
    component: MdCode,
    style: { color: '#dd7726', size: '24px' }
  },
  htmllogo: {
    component: FaHtml5,
    style: { color: '#f77718', size: '24px' }
  },
  css: {
    component: FaHashtag,
    style: { color: '#519aba', size: '24px' }
  },
  csslogo: {
    component: FaCss3Alt,
    style: { color: '#285fee', size: '24px' }
  },
  javascript: {
    component: IoLogoJavascript,
    style: { color: '#cbcb41', size: '24px' }
  },
  react: {
    component: FaReact,
    style: { color: '#5ed3f3', size: '24px' }
  },
  reduxtoolkit: {
    component: BiLogoRedux,
    style: { color: '#6c3cb2', size: '24px' }
  },
  bootstrap: {
    component: RiBootstrapLine,
    style: { color: '#69419a', size: '24px' }
  },
  thymeleaf: {
    component: BiLeaf,
    style: { color: '#bac431', size: '24px' }
  },
  thymeleaflogo: {
    component: SiThymeleaf,
    style: { color: '#005f0f', size: '24px' }
  },
  mysql: {
    component: TbBrandMysql,
    style: { color: '#4e7d9d', size: '24px' }
  },
  mariadb: {
    component: SiMariadb,
    style: { color: '#be9469', size: '24px' }
  },
  azuredb: {
    component: ImOnedrive,
    style: { color: '#0085cf', size: '24px' }
  },
  aws: {
    component: FaAws,
    style: { color: '#f68727', size: '24px' }
  },
  microsoft: {
    component: VscAzure,
    style: { color: '#0085cf', size: '24px' }
  },
  codeversioncontrol: {
    component: IoMdGitBranch,
    style: { color: '#F0DB4F', size: '24px' }
  },
  seo: {
    component: FaS,
    style: { color: '#6ca84e', size: '24px' }
  },
  msofficeapp: {
    component: FaMicrosoft,
    style: { color: '#e43900', size: '24px' }
  },
  mspowerplatform: {
    component: FaMaxcdn,
    style: { color: '#7bb400', size: '24px' }
  },
  lightmode: {
    component: MdLightMode, 
    style: { color: '#ffffff', width: '15px', height: '15px' }
  },
  darkmode: {
    component: MdDarkMode, 
    style: { color: '#f8f8f8', width: '15px', height: '15px' }
  },
  vscremote:{
    component: VscRemote, 
    style: { color: '#cccccc', width: '15px', height: '15px' }
  },
  imgithub:{
    component: ImGithub, 
    style: { color: '#cccccc', width: '13px', height: '13px' }
  },
  imlinkedin:{
    component: ImLinkedin, 
    style: { color: '#cccccc', width: '13px', height: '13px' }
  },
  buildcicdpipeline:{
    component: FaDocker, 
    style: { color: '#2392e6', width: '13px', height: '13px' }
  },
  portfolio:{
    component: FaN, 
    style: { color: '#ffff00', width: '13px', height: '13px' }
  },
  humanresourcedatabase:{
    component: PiFinnTheHumanFill, 
    style: { color: '#5ed3f3', width: '13px', height: '13px' }
  },
  servermigration:{
    component: IoServer, 
    style: { color: '#69aef4', width: '13px', height: '13px' }
  },
  employeecapacityreport:{
    component: BsFillPeopleFill, 
    style: { color: '#f7c100', width: '13px', height: '13px' }
  },
  hhlawyersintranet:{
    component: MdWebAsset, 
    style: { color: '#115f42', width: '13px', height: '13px' }
  },
  oneclicktrademarkwebsite:{
    component: PiCursorClickFill, 
    style: { color: '#0056a3', width: '13px', height: '13px' }
  },
  financeoverviewdashboard:{
    component: MdAttachMoney, 
    style: { color: '#f7d74d', width: '13px', height: '13px' }
  },
  individualperformancedashboard:{
    component: IoPersonCircle, 
    style: { color: '#f76c0d', width: '13px', height: '13px' }
  },
  hhlawyerswebsiteandservermigration:{
    component: BiSolidWindowAlt, 
    style: { color: '#115f42', width: '13px', height: '13px' }
  },
  stmsmanagement:{
    component: FaS, 
    style: { color: '#008aff', width: '13px', height: '13px' }
  },
  projectlifecyclemanagement:{
    component: GiCycle, 
    style: { color: '#e61e4b', width: '13px', height: '13px' }
  },
  trafficinformationsystem:{
    component: PiTrafficSignalFill, 
    style: { color: '#61b60e', width: '13px', height: '13px' }
  },
  mpis:{
    component: MdEditDocument, 
    style: { color: '#f78b00', width: '13px', height: '13px' }
  },
  mpasis:{
    component: PiTrademarkRegisteredBold, 
    style: { color: '#f6c729', width: '13px', height: '13px' }
  },
  poc:{
    component: PiCertificateBold, 
    style: { color: '#83bc00', width: '13px', height: '13px' }
  },
  systemmanagement:{
    component: MdManageAccounts, 
    style: { color: '#f3593a', width: '13px', height: '13px' }
  },
  mslogo: {
    component: () => {
      return (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg" 
        >
          <path fill="#f35325" d="M1 1h10v10H1z"/>
          <path fill="#81bc06" d="M12 1h10v10H12z"/>
          <path fill="#05a6f0" d="M1 12h10v10H1z"/>
          <path fill="#ffba08" d="M12 12h10v10H12z"/>
        </svg>
      )
    },
    style: { }
  },
  vscodec: {
    component: ( ) => {
      return (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 32 32" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M29.01,5.03,23.244,2.254a1.742,1.742,0,0,0-1.989.338L2.38,19.8A1.166,1.166,0,0,0,2.3,21.447c.025.027.05.053.077.077l1.541,1.4a1.165,1.165,0,0,0,1.489.066L28.142,5.75A1.158,1.158,0,0,1,30,6.672V6.605A1.748,1.748,0,0,0,29.01,5.03Z" fill="#0065a9"/>
          <path d="M29.01,26.97l-5.766,2.777a1.745,1.745,0,0,1-1.989-.338L2.38,12.2A1.166,1.166,0,0,1,2.3,10.553c.025-.027.05-.053.077-.077l1.541-1.4A1.165,1.165,0,0,1,5.41,9.01L28.142,26.25A1.158,1.158,0,0,0,30,25.328V25.4A1.749,1.749,0,0,1,29.01,26.97Z" fill="#007acc"/>
          <path d="M23.244,29.747a1.745,1.745,0,0,1-1.989-.338A1.025,1.025,0,0,0,23,28.684V3.316a1.024,1.024,0,0,0-1.749-.724,1.744,1.744,0,0,1,1.989-.339l5.765,2.772A1.748,1.748,0,0,1,30,6.6V25.4a1.748,1.748,0,0,1-.991,1.576Z" fill="#1f9cf0"/>
        </svg>
      )
    }, 
    style: { }
  }
};

export const Icon = ({ name, className = '', style: eleStyle, ...props }) => {
  const iconData = iconMap[name.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '').replace(/\s+/g, '')];

  if (!iconData) {
    console.warn(`Icon not found: ${name}`);
    return <span>`Icon not found: ${name}`</span>;
  }

  const { component: IconComponent, style } = iconData;

  const combinedStyle = {
    ...style,
    ...eleStyle
  };

  return <IconComponent style={combinedStyle} {...props} className={`${className}`.trim()} />;
};

Icon.prototype ={
  name: PropTypes.string.isRequired,
  className: PropTypes.string
}



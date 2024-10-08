import React from 'react';
import { FaJ, FaJava, FaHashtag, FaReact, FaAws, FaMicrosoft, FaS, FaMaxcdn } from "react-icons/fa6";
import { IoLogoJavascript, IoMdGitBranch } from 'react-icons/io';
import { SiSpringboot, SiMariadb } from "react-icons/si";
import { MdCode, MdDarkMode, MdLightMode } from "react-icons/md";
import { BiLogoRedux, BiLeaf } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { VscAzure, VscFiles, VscCode, VscFolderLibrary, VscMail, VscSettingsGear, VscVscode, VscRemote } from "react-icons/vsc";
import { ImGithub, ImLinkedin, ImOnedrive } from "react-icons/im";

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
    style: { color: '#cc3e44', size: '24px' }
  },
  javalogo: {
    component: FaJava,
    style: { background: '#d4360e', color: '#ffffff', size: '24px', padding: '4px', borderRadius: '5px' }
  },
  springboot: {
    component: SiSpringboot,
    style: { color: '#6ca84e', size: '24px' }
  },
  html: {
    component: MdCode,
    style: { color: '#dd7726', size: '24px' }
  },
  css: {
    component: FaHashtag,
    style: { color: '#519aba', size: '24px' }
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
    style: { color: '#ffbb52', width: '15px', height: '15px' }
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

export const Icon = ({ name, className = '',  ...props }) => {
  const iconData = iconMap[name.toLowerCase()];

  if (!iconData) {
    console.warn(`Icon not found: ${name}`);
    return <span>`Icon not found: ${name}`</span>;
  }

  const { component: IconComponent, style } = iconData;

  const combinedStyle = {
    ...style,
    ...props.style,
  };

  return <IconComponent style={combinedStyle} {...props} className={`${className}`.trim()} />;
};


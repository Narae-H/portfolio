import React from 'react';
import { FaJ, FaJava, FaHashtag, FaReact, FaAws, FaMicrosoft, FaS, FaMaxcdn } from "react-icons/fa6";
import { IoLogoJavascript, IoMdGitBranch } from 'react-icons/io';
import { SiSpringboot, SiMariadb } from "react-icons/si";
import { MdCode } from "react-icons/md";
import { BiLogoRedux, BiLeaf } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { VscAzure, VscFiles, VscCode, VscFolderLibrary, VscMail, VscSettingsGear, VscVscode } from "react-icons/vsc";
import { ImOnedrive } from "react-icons/im";

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


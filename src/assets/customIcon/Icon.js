import React from 'react';
import { FaJ, FaHashtag, FaReact, FaAws, FaMicrosoft, FaS, FaMaxcdn } from "react-icons/fa6";
import { IoLogoJavascript, IoMdGitBranch } from 'react-icons/io';
import { SiSpringboot, SiMariadb } from "react-icons/si";
import { MdCode } from "react-icons/md";
import { BiLogoRedux, BiLeaf } from "react-icons/bi";
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { VscAzure, VscFiles, VscCode, VscFolderLibrary, VscMail, VscSettingsGear } from "react-icons/vsc";
import { ImOnedrive } from "react-icons/im";

const iconMap = {
  home: {
    icon: VscFiles,
    style: { color: '#7b7b7b', size: '36px' }
  },
  skills: {
    icon: VscCode,
    style: { color: '#7b7b7b', size: '24px' }
  },
  experiences: {
    icon: VscFolderLibrary,
    style: { color: '#7b7b7b', size: '24px' }
  },
  contactme: {
    icon: VscMail,
    style: { color: '#7b7b7b', size: '24px' }
  },
  settings: {
    icon: VscSettingsGear,
    style: { color: '#7b7b7b', size: '24px' }
  },
  java: {
    icon: FaJ,
    style: { color: '#cc3e44', size: '24px' }
  },
  springboot: {
    icon: SiSpringboot,
    style: { color: '#6ca84e', size: '24px' }
  },
  html: {
    icon: MdCode,
    style: { color: '#dd7726', size: '24px' }
  },
  css: {
    icon: FaHashtag,
    style: { color: '#519aba', size: '24px' }
  },
  javascript: {
    icon: IoLogoJavascript,
    style: { color: '#cbcb41', size: '24px' }
  },
  react: {
    icon: FaReact,
    style: { color: '#5ed3f3', size: '24px' }
  },
  reduxtoolkit: {
    icon: BiLogoRedux,
    style: { color: '#6c3cb2', size: '24px' }
  },
  bootstrap: {
    icon: RiBootstrapLine,
    style: { color: '#69419a', size: '24px' }
  },
  thymeleaf: {
    icon: BiLeaf,
    style: { color: '#bac431', size: '24px' }
  },
  mysql: {
    icon: TbBrandMysql,
    style: { color: '#4e7d9d', size: '24px' }
  },
  mariadb: {
    icon: SiMariadb,
    style: { color: '#be9469', size: '24px' }
  },
  azuredb: {
    icon: ImOnedrive,
    style: { color: '#0085cf', size: '24px' }
  },
  aws: {
    icon: FaAws,
    style: { color: '#f68727', size: '24px' }
  },
  microsoft: {
    icon: VscAzure,
    style: { color: '#0085cf', size: '24px' }
  },
  codeversioncontrol: {
    icon: IoMdGitBranch,
    style: { color: '#F0DB4F', size: '24px' }
  },
  seo: {
    icon: FaS,
    style: { color: '#6ca84e', size: '24px' }
  },
  msofficeapp: {
    icon: FaMicrosoft,
    style: { color: '#e43900', size: '24px' }
  },
  mspowerplatform: {
    icon: FaMaxcdn,
    style: { color: '#7bb400', size: '24px' }
  }
};

export const Icon = ({ name, className = '',  ...props }) => {
  const iconData = iconMap[name.toLowerCase()];

  if (!iconData) {
    console.warn(`Icon not found: ${name}`);
    return null;
  }

  const { icon: Icon, style } = iconData;

  const combinedStyle = {
    ...style,
    ...props.style,
  };

  return <Icon style={combinedStyle} {...props} className={`${className}`.trim()} />;
};


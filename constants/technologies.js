import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio, DiPostgresql, DiMysql } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello, FaPhp, FaNodeJs } from "react-icons/fa";
import { BsBootstrap, BsEmojiExpressionless } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind, TbBrandMongodb } from "react-icons/tb";
import { RiFlutterFill } from "react-icons/ri";
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ExpressIcon from "public/assets/svg/express.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import { Zap } from 'lucide-react';
export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "MUI", icon: <MuiIcon width={32} /> },
			{ name: "AntD", icon: <AiOutlineAntDesign size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Chakra", icon: <ChakraIcon width={32} /> },
			{ name: "Magic UI", icon: < Zap className="text-purple-500" /> }
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "Node.js", icon: <FaNodeJs size={32} /> },
			{ name: "Express.js", icon: <ExpressIcon size={32} /> },
			{ name: "PHP", icon: <FaPhp size={32} /> },
			{ name: "MySQL", icon: <DiMysql size={32} /> },
			{ name: "PostgreSQL", icon: <DiPostgresql size={32} /> },
			{ name: "MongoDB", icon: <TbBrandMongodb size={32} /> },
			{ name: "Postman", icon: <AiOutlineAntDesign size={32} /> },
		]
	},
	{
		category: "UI tools",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> },
			{ name: "Zeplin", icon: <ZeplinIcon width={36} /> },
			{ name: "XD", icon: <AdobeXDIcon width={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "WordPress CMS", icon: <FaWordpressSimple size={32} /> },
			{ name: "Jira", icon: <JiraIcon width={32} /> },
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			{ name: "WebStorm", icon: <WebstormIcon width={32} /> }
		]
	}
];

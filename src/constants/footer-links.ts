import { IconType } from "react-icons";
import {
	BiLogoBlogger,
	BiLogoFacebookSquare,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoYoutube,
} from "react-icons/bi";
import { FooterLinksType } from "../interfaces/links";

export const MAIN_SOCIAL_ICONS: IconType[] = [
	BiLogoFacebookSquare,
	BiLogoBlogger,
	BiLogoYoutube,
	BiLogoTwitter,
	BiLogoInstagram,
];

export const MAIN_FOOTER_LINKS: FooterLinksType[] = [
	{
		title: "company",
		links: [
			{ name: "about us", link: "#" },
			{ name: "blog", link: "#" },
			{ name: "careers", link: "#" },
			{ name: "our team", link: "#" },
			{ name: "help center", link: "#" },
		],
	},
	{
		title: "shop",
		links: [
			{ name: "gift cards", link: "#" },
			{ name: "our products", link: "#" },
			{ name: "my account", link: "#" },
			{ name: "shipping", link: "#" },
			{ name: "returns", link: "#" },
		],
	},
	{
		title: "support",
		links: [
			{ name: "contact us", link: "#" },
			{ name: "payment options", link: "#" },
			{ name: "store locater", link: "#" },
			{ name: "accessibility", link: "#" },
			{ name: "affilates", link: "#" },
		],
	},
	{
		title: "FAQ",
		links: [
			{ name: "rewards FAQ", link: "#" },
			{ name: "product care", link: "#" },
			{ name: "size guide", link: "#" },
		],
	},
];

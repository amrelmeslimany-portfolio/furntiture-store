import { v4 as uuidv4 } from "uuid";
import { BiSolidBox, BiSolidOffer, BiSolidTruck, BiSolidWallet } from "react-icons/bi";
import { BenefitType, StatisticItemType, TestimonialInterface } from "../interfaces";
import { CategoryType, ProductDetailsType } from "../interfaces/products";
import {
    CHAIR_IMG1,
    CHAIR_IMG10,
    CHAIR_IMG11,
    CHAIR_IMG12,
    CHAIR_IMG2,
    CHAIR_IMG3,
    CHAIR_IMG4,
    CHAIR_IMG5,
    CHAIR_IMG6,
    CHAIR_IMG7,
    CHAIR_IMG8,
    CHAIR_IMG9,
    FURNITURE_IMG1,
    FURNITURE_IMG10,
    FURNITURE_IMG11,
    FURNITURE_IMG12,
    FURNITURE_IMG13,
    FURNITURE_IMG14,
    FURNITURE_IMG15,
    FURNITURE_IMG2,
    FURNITURE_IMG3,
    FURNITURE_IMG5,
    FURNITURE_IMG6,
    FURNITURE_IMG7,
    FURNITURE_IMG9,
    SHOP_COVER_JPG1,
    SHOP_COVER_JPG2,
    SHOP_COVER_JPG3,
    SHOP_COVER_JPG4,
    SHOP_COVER_JPG5,
} from "./images";
import { FurnitureBrands, FurnitureMaterials, ProductCategriesEnum, RoomsEnum } from "./enums/furniture";
import { ROUTES } from "./routes";

export type IDGlobal = {
    id: string;
};

// @ Home Page
export const CATEGORIES: CategoryType[] = [
    {
        img: FURNITURE_IMG1,
        title: "Living Room",
        path: `${ROUTES.main.Shop}?rooms=${RoomsEnum.LivingRoom}`,
        restQuantity: 354,
    },
    {
        img: FURNITURE_IMG2,
        title: "Bed Room",
        path: `${ROUTES.main.Shop}?rooms=${RoomsEnum.Bedroom}`,
        restQuantity: 156,
    },
];

export const MAIN_STATISTICS: StatisticItemType[] = [
    { name: "Collections", value: 456 },
    { name: "Customors", value: 800 },
    { name: "Reviews", value: 4.5 },
];

export const MAIN_BENEFITS: BenefitType[] = [
    {
        Icon: BiSolidWallet,
        title: "Easy payments",
        description:
            "This is a sample text body with about two lines of content. Now this will be the eccommerce website for testing.",
    },
    {
        Icon: BiSolidOffer,
        title: "Promo offers",
        description:
            "This is a sample text body with about two lines of content. Now this will be the eccommerce website for testing.",
    },
    {
        Icon: BiSolidTruck,
        title: "Free Delivery",
        description:
            "This is a sample text body with about two lines of content. Now this will be the eccommerce website for testing.",
    },
    {
        Icon: BiSolidBox,
        title: "Easy Return",
        description:
            "This is a sample text body with about two lines of content. Now this will be the eccommerce website for testing.",
    },
];

export const MAIN_FURTNITURE_CATEGORIES: string[] = ["All", ...Object.values(ProductCategriesEnum)];

export const MAIN_PRODUCTS: ProductDetailsType[] = [
    {
        id: "36da31af-9000-4ec8-b818-3316640d2fba",
        image: CHAIR_IMG1,
        category: ProductCategriesEnum.Armrest,
        name: "Armest Wailling",
        price: 57,
        rating: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.Ikea,
        material: FurnitureMaterials.Wood,
        createdAt: new Date("05-03-2022"),
        rooms: [RoomsEnum.Bedroom],
    },
    {
        id: "6618cd22-09ba-4343-a788-072407be722a",
        image: CHAIR_IMG2,
        category: ProductCategriesEnum.Rails,
        name: "Whona Rails Furniture",
        price: 854,
        rating: 2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.LaZBoy,
        material: FurnitureMaterials.Glass,
        createdAt: new Date("05-03-2021"),
        rooms: [RoomsEnum.DiningRoom],
    },
    {
        id: "b133c598-31da-4bc8-9dc4-54aa7bc78b87",
        image: CHAIR_IMG3,
        category: ProductCategriesEnum.Webbing,
        name: "Swreze Webbing Furniture",
        price: 405,
        rating: 2.5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.Ikea,
        material: FurnitureMaterials.Glass,
        createdAt: new Date("01-02-2021"),
        rooms: [RoomsEnum.Kitchen],
    },
    {
        id: "3524d80a-402f-492b-a206-9ed55ae040d6",
        image: CHAIR_IMG4,
        category: ProductCategriesEnum.Shelves,
        name: "Chelveiws Alphe Jollio",
        price: 78,
        rating: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.AshleyFurniture,
        material: FurnitureMaterials.Metal,
        createdAt: new Date("10-08-2021"),
        rooms: [RoomsEnum.DiningRoom],
    },
    {
        id: "8ec571a6-f0ca-470e-b9ec-cb7ef8ffabea",
        image: CHAIR_IMG5,
        category: ProductCategriesEnum.Batting,
        name: "Batting New Hooy",
        price: 42,
        rating: 4.5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.Ikea,
        material: FurnitureMaterials.Plastic,
        createdAt: new Date("05-03-2023"),
        rooms: [RoomsEnum.StudyRoom],
    },
    {
        id: "18521ca8-1494-405c-b98a-11998112f5a8",
        image: CHAIR_IMG6,
        category: ProductCategriesEnum.Chair,
        name: "Chair Against Water",
        price: 366,
        rating: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.Broyhill,
        material: FurnitureMaterials.Stone,
        createdAt: new Date("05-12-2021"),
        rooms: [RoomsEnum.Bathroom],
    },
    {
        id: "a8322b9f-f247-4acd-8bc0-f936f16baa86",
        image: CHAIR_IMG7,
        category: ProductCategriesEnum.Chair,
        name: "Chair Which Test",
        price: 96,
        rating: 3.5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.Bernhardt,
        material: FurnitureMaterials.Concrete,
        createdAt: new Date("05-03-2008"),
        rooms: [RoomsEnum.Bathroom, RoomsEnum.DiningRoom],
    },
    {
        id: "39f0e161-eb42-47cc-97b8-7152ce6f1392",
        image: CHAIR_IMG8,
        category: ProductCategriesEnum.Base,
        name: "Base Furniture",
        price: 55,
        rating: 4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.EthanAllen,
        material: FurnitureMaterials.Wicker,
        createdAt: new Date("25-01-2018"),
        rooms: [RoomsEnum.Kitchen, RoomsEnum.DiningRoom, RoomsEnum.StudyRoom],
    },
    {
        id: "afa210f4-8344-4ff0-8ec8-ac667878ab85",
        image: CHAIR_IMG9,
        category: ProductCategriesEnum.Chair,
        name: "Chair Dining Old",
        price: 564,
        rating: 1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.Havertys,
        material: FurnitureMaterials.Rattan,
        createdAt: new Date("05-11-2001"),
        rooms: [RoomsEnum.LivingRoom],
    },
    {
        id: "af281329-27ad-4e3c-8e3d-d652382d94ac",
        image: CHAIR_IMG10,
        category: ProductCategriesEnum.Chair,
        name: "Chair Dining Of Kitch",
        price: 715,
        rating: 1.5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.LaZBoy,
        material: FurnitureMaterials.Glass,
        createdAt: new Date("12-07-2021"),
        rooms: [RoomsEnum.DiningRoom],
    },
    {
        id: "df65fb39-4788-4902-9852-72b39d3b2890",
        image: CHAIR_IMG11,
        category: ProductCategriesEnum.Webbing,
        name: "Webbing Again",
        price: 662,
        rating: 2,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.Ikea,
        material: FurnitureMaterials.Wood,
        createdAt: new Date("05-10-2011"),
        rooms: [RoomsEnum.Kitchen],
    },
    {
        id: "9278c2b2-c313-45f3-b73a-b8efc3bf53cd",
        image: CHAIR_IMG12,
        category: ProductCategriesEnum.Base,
        name: "Base 2 Furniture",
        price: 25.5,
        rating: 5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.",
        brand: FurnitureBrands.Ikea,
        material: FurnitureMaterials.Wood,
        createdAt: new Date("07-10-2011"),
        rooms: [RoomsEnum.Kitchen],
    },
];

export const MAIN_TESTIMONIALS: TestimonialInterface[] = [
    {
        id: uuidv4(), // Generate a random unique ID
        client: {
            clientID: "1",
            image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
            name: "John Doe",
            jobTitle: "Web Developer",
        },
        rating: 4.5,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit. dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: uuidv4(),
        client: {
            clientID: "2",
            image: "https://t4.ftcdn.net/jpg/02/89/97/29/360_F_289972906_N6XsPECfJznaEcC6NNWQ1dojVwrmHDGV.jpg",
            name: "Jane Smith",
            jobTitle: "Graphic Designer",
        },
        rating: 1,
        body: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: uuidv4(),
        client: {
            clientID: "3",
            image: "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
            name: "Alice Johnson",
            jobTitle: "UX Designer",
        },
        rating: 4.2,
        body: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    },
    {
        id: uuidv4(),
        client: {
            clientID: "4",
            image: "https://t4.ftcdn.net/jpg/03/17/48/95/360_F_317489531_025PeIv2eEXoBq6XRu8TIvmkF728CA53.webp",
            name: "Robert Williams",
            jobTitle: "Product Manager",
        },
        rating: 4.9,
        body: "Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt.",
    },
    {
        id: uuidv4(),
        client: {
            clientID: "5",
            image: "https://t4.ftcdn.net/jpg/02/20/60/99/360_F_220609904_fTwNGnpLJwpaJ7lyw5m34BSOSrHqOViu.webp",
            name: "Ella Davis",
            jobTitle: "Marketing Specialist",
        },
        rating: 4.7,
        body: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    },
    {
        id: uuidv4(),
        client: {
            clientID: "6",
            image: "https://as2.ftcdn.net/v2/jpg/02/97/94/59/1000_F_297945909_arzkNzWxNAy1W62Pkd7twagO6ZDf7FiY.jpg",
            name: "William Wilson",
            jobTitle: "Software Engineer",
        },
        rating: 3.8,
        body: "Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    },
];

export const MAIN_FOLLOWUS: { id: string; img: string }[] = [
    { id: uuidv4(), img: FURNITURE_IMG3 },
    { id: uuidv4(), img: FURNITURE_IMG5 },
    { id: uuidv4(), img: FURNITURE_IMG6 },
    { id: uuidv4(), img: FURNITURE_IMG7 },
    { id: uuidv4(), img: FURNITURE_IMG9 },
    { id: uuidv4(), img: FURNITURE_IMG10 },
    { id: uuidv4(), img: FURNITURE_IMG11 },
    { id: uuidv4(), img: FURNITURE_IMG12 },
    { id: uuidv4(), img: FURNITURE_IMG13 },
    { id: uuidv4(), img: FURNITURE_IMG14 },
    { id: uuidv4(), img: FURNITURE_IMG15 },
];

// @ Shop
export const MAIN_SHOP_HEADERS: { id: string; image: string; title: string; text: string }[] = [
    {
        id: uuidv4(),
        image: SHOP_COVER_JPG1,
        title: "Best Furtniture Ideas",
        text: "You can decore furniture oline easly here",
    },

    {
        id: uuidv4(),
        image: SHOP_COVER_JPG2,
        title: "Modern Home Decor",
        text: "Elevate your home decor with our unique furniture designs.",
    },
    {
        id: uuidv4(),
        image: SHOP_COVER_JPG3,
        title: "Interior Design Inspiration",
        text: "Get inspired with our curated selection of home furnishings.",
    },
    {
        id: uuidv4(),
        image: SHOP_COVER_JPG4,
        title: "Best Furniture Ideas",
        text: "Explore our latest furniture collections and transform your home.",
    },
    {
        id: uuidv4(),
        image: SHOP_COVER_JPG5,
        title: "Furniture Showcase",
        text: "Discover the perfect pieces for your living space.",
    },
];

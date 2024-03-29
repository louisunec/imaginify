import { config } from "process";

export const navLinks = [
    {
        label: 'Home',
        route: '/',
        icon:"/assets/icons/home.svg",
    },
    {
        label: "Image Restore",
        route: "/transformations/add/restore",
        icon: "/assets/icons/image.svg",
    },
    {
        label: "Generative Fill",
        route: "/transformations/add/fill",
        icon: "/assets/icons/stars.svg",
    },
    {
        label: "Object Remove",
        route: "/transformations/add/remove",
        icon: "/assets/icons/scan.svg",
    },
    {
        label: "Object Recolor",
        route: "/transformations/add/recolor",
        icon: "/assets/icons/filter.svg",
    },
    {
        label: "Background Remove",
        route: "/transformations/add/removeBackground",
        icon: "/assets/icons/camera.svg",
    },
    {
        label: "Profile",
        route: "/profile",
        icon: "/assets/icons/profile.svg",
    },
    {
        label: "Buy Credits",
        route: "/credits",
        icon: "/assets/icons/bag.svg",
    },
];

export const transformationTypes = {
    restore: {
        type: "restore",
        title: "Image Restore",
        subtitle: "Refine your images with our AI-powered image restoration tool.",
        config: { restore: true },
        icon: "image.svg"
    },
    removeBackground: {
        type: "removeBackground",
        title: "Background Remove",
        subtitle: "Remove the background from your images with our AI-powered tool.",
        config: { removeBackground: true },
        icon: "scan.svg",
    },
    fill: {
        type: "fill",
        title: "Generative Fill",
        subtitle: "Fill in missing parts of your images with our AI-powered tool.",
        config: { fill: true },
        icon: "stars.svg",
    },
    remove: {
        type: "remove",
        title: "Object Remove",
        subtitle: "Remove objects from your images with our AI-powered tool.",
        config: { remove: { prompt: "", removeShadow: true, multiple: true } },
        icon: "filter.svg",
    },
    recolor: {
        type: "recolor",
        title: "Object Recolor",
        subtitle: "Recolor objects in your images with our AI-powered tool.",
        config: { recolor: { prompt: "", to:"", multiple: true } },
        icon: "filter.svg",
    },
};

export const aspectRatioOptions = {
    "1:1": {
        aspectRatio: "1:1",
        label:"square (1:1)",
        width: 1000,
        height: 1000,
    },
    "3:4": {
        aspectRatio: "3:4",
        label: "Standard Portait (3:4)",
        width: 1000,
        height: 1334,
    },
    "9:16": {
        aspectRatio: "9:16",
        label: "Phone Portait (9:16)",
        width: 1000,
        height: 1778,
    },
};

export const defaultValues = {
    title: "",
    aspectRatio: "",
    color: "",
    prompt: "",
    publicId: "",
};

export const creditFee = -1;

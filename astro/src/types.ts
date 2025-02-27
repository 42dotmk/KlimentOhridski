import type { Page } from "astro"
import type { Components } from "./constants"

export type StrapiImage = {
    image: {
        url: string
    }
    alt: string
    page: Page
    component: Components
}

export type StrapiText = {
    text: string
    page: Page
    component: Components
}

export type ContactInformation = {
    email: string,
    phoneNumber: string,
    location: string,
    facebookLink: string,
    facebookDisplayText: string,
}

export type Service = {
    name: string,
    content: any;
    image: {
        url: string
    },
}

export type Post = {
    id: number;
    title: string;
    content: any;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    images?: {
        url: string;
    }[];
}

export type BlockType = {
    type: string;
    format: string;
    level?: number;
    children: {
        type: string;
        text: string;
        children: {
            type: string;
            text: string;
        }[];
    }[];
};
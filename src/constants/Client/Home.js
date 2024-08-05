import women from "../../assets/images/banner_1.jpg"
import accessories from "../../assets/images/banner_2.jpg"
import men from "../../assets/images/banner_3.jpg"

import truck from '../../assets/icons/icons8-truck-50.png'
import money from '../../assets/icons/icons8-money-32.png'
import reload from '../../assets/icons/icons8-reload-50.png'
import clock from '../../assets/icons/icons8-clock-64.png'

import blog1 from '../../assets/images/blog_1.jpg'
import blog2 from '../../assets/images/blog_2.jpg'
import blog3 from '../../assets/images/blog_3.jpg'

export const categories = [
    {
        name: "woman",
        title: "WOMEN'S",
        image: women
    },
    {
        name: "accessories",
        title: "ACCESSORIES'S",
        image: accessories
    },
    {
        name: "man",
        title: "MEN'S",
        image: men
    },
]

export const benefits = [
    {
        icon: "fa-truck",
        title: "Free Shipping",
        image: truck,
        description: "Suffered Alteration in Some Form",
    
    },
    {
        icon: "fa-money",
        title: "Cash on Delivery",
        image: money,
        description: "The Internet Tend To Repeat",
    },
    {
        icon: "fa-undo",
        title: "45 Days Return",
        image: reload,
        description: "Making it Look Like Readable",
    },
    {
        icon: "fa-clock-o",
        title: "Opening All Week",
        image: clock,
        description: "8AM - 09PM",
    },
];

export const blogs = [
   blog1, blog2, blog3
]
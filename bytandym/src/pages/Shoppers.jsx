import React, { act, useState } from 'react'
import Navbar from '../components/Navbar'
import image5 from '../Assets/Explore/image5.png'
import image2 from '../Assets/Explore/image2.png'
import image3 from '../Assets/Explore/image3.png'
import image4 from '../Assets/Explore/image4.png'
import image1 from '../Assets/Explore/image1.png'
import img1 from '../Assets/Brands/div.brands-item_graphic-1.png'
import img2 from '../Assets/Brands/div.brands-item_graphic-2.png'
import img3 from '../Assets/Brands/div.brands-item_graphic-3.png'
import img4 from '../Assets/Brands/div.brands-item_graphic-4.png'
import rocket from '../Assets/pseudoElement/rocket.svg.png'
import lightning from '../Assets/pseudoElement/lightning.svg.png'
import { motion } from 'framer-motion'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import UsePageTitle from '../hooks/UsePageTitle'

const data = [
    {
        image : img1,
        name : 'Melissa',
        percentage : '25% In Rewards Cash Boost',
        discount : 'Earn 25% In Rewards Cash on your first purchase',
        Earn : '',
        pseudoElement : rocket
    },
        {
        image : img2,
        name : 'All Citizens',
        percentage : '10% Off',
        discount : 'Save 10% on your first purchase',
        Earn : '',
        pseudoElement : lightning
    },
        {
        image : img3,
        name : 'SimpleTire',
        percentage : '5% Off',
        discount : 'Save 5% on your first purchase',
        Earn : '',
        pseudoElement : lightning
    },
        {
        image : img4,
        name : 'Long Wknd',
        percentage : '20% Off',
        discount : 'Save 20% on your first purchase',
        Earn : '',
        pseudoElement : lightning
    },
]
const payload = [
    {
        header : 'How do I sign up?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'Will signup impact my credit score?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'Can I sign up with a land line phone number?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'Are there any interest charges or fees?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'With credit, what are my monthly payments?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'With debit, how do I make payments?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'How can I pay my Tandym Credit account balance?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'How do I view and manage my account?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'How do I redeem my rewards?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'Can I earn new rewards when I’m redeeming existing ones?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'What happens to my rewards if I return my purchase?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'What is the maximum order amount allowed for purchases?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'Is Tandym available outside the US?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
    {
        header : 'Is Tandym available outside the US?',
        body : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis facilis provident, molestiae impedit assumenda odio consectetur blanditiis harum ipsa eligendi ipsum fugit ea sint tenetur saepe commodi aliquam ipsam eveniet? v"
    },
]

export default function Shoppers () {
    const [activeAccordions, setActiveAccordions] = useState([]);
    UsePageTitle("Shoppers");
  return (
    <div>
      <Navbar />
      <div className=' bg-inherit text-white h-svh mt-28 pb-10'>
        <div className='flex justify-center h-[50%] shopper-header-bg'>
          <h1
            className=' text-7xl w-[40%] text-center tracking-wide'
            style={{ fontFamily: 'Helvetica Neue' }}
          >
            One Wallet, Endless Opportunities
          </h1>
        </div>
        <div className=' flex justify-end items-center flex-col h-[80%] shopper-header-bg-1 bg-[#D6E4E2] text-black pb-60'>
          <div className=' flex flex-col justify-center gap-4 text-center p-12'>
            <p className=' text-blue-500'>Tandym Wallet</p>
            <h3 className=' text-3xl w-[50%] self-center'>
              Sign up once and access the Tandym network
            </h3>
            <p className=' tracking-tighter w-[50%] self-center'>
              After you open an account, just look for the Tandym wallet icon
              and your account automatically works at all of our brands.
            </p>

            <div className=' flex gap-3 self-center items-center justify-center'>
              <div className=' bg-[#136D58] p-4 rounded-3xl text-white'>
                Explore all Brands
              </div>
              <p>👇 Learn how it works</p>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-[#FFFFFF] min-h-96 grid grid-rows-5 p-14'>
        <div className='grid grid-cols-2 items-center'>
          <div className='flex justify-center'>
            <img src={image2} alt='img' />
          </div>
          <div className=' flex flex-col gap-3 items-center  '>
            <h2 className=' text-4xl w-[50%] '>
              A decision in as little as seconds
            </h2>
            <div className=' flex flex-col gap-2 w-[50%]'>
              <span className=' w-fit h-fit bg-[#ECF4F2] rounded-xl p-1'>
                Credit
              </span>
              <p>
                Apply for a digital credit card now or during checkout. It takes
                as little as seconds without a hard credit pull!*
              </p>
            </div>
            <div className=' flex flex-col gap-2 w-[50%]'>
              <span className=' bg-[#FFFBEB] p-1 rounded-xl w-fit h-fit text-[#B45309]'>
                Debit
              </span>
              <p>
                Sign up for a digital debit card by securely connecting your
                bank account. It takes as little as seconds with our
                industry-trusted partner, Plaid, to keep your bank information
                private and safe. Learn more about Plaid.
              </p>
            </div>
          </div>
        </div>
        <div className=' grid grid-cols-2 items-center justify-items-center'>
          <div className=' flex flex-col gap-7 w-[50%]'>
            <h2 className='text-4xl'>
              Pay securely with your mobile phone number
            </h2>

            <p>
              Select Tandym at the last step of checkout and pay with your phone
              number - no need to remember a long card number, expiration date,
              and CVV or PIN.
            </p>
          </div>
          <div className='flex flex-col items-center '>
            <img src={image5} alt='img' />
          </div>
        </div>
        <div className=' grid grid-cols-2 items-center justify-items-center'>
          <div className='flex flex-col items-center '>
            <img src={image3} alt='img' />
          </div>
          <div className=' flex flex-col gap-7 w-[50%]'>
            <h2 className='text-4xl'>Earn & redeem on every order</h2>

            <p>
              You’ll earn rewards on every order. Return and pay again with
              Tandym to automatically redeem your rewards for an instant
              discount. No codes necessary!.
            </p>
          </div>
        </div>
        <div className=' grid grid-cols-2 items-center justify-items-center'>
          <div className=' flex flex-col gap-7 w-[50%]'>
            <h2 className='text-4xl'>Manage your account</h2>
            <div className=' flex flex-col gap-2'>
              <span className=' w-fit h-fit bg-[#ECF4F2] rounded-xl p-1'>
                Credit
              </span>
              <p>
                Make regular payments every month from your bank account with
                autopay or one-time payments. View your rewards balance,
                exclusive rewards, and statements.
              </p>
            </div>
            <div className=' flex flex-col gap-2'>
              <span className='bg-[#FFFBEB] p-1 rounded-xl w-fit h-fit text-[#B45309]'>
                Debit
              </span>
              <p>
                Make regular payments every month from your bank account with
                autopay or one-time payments. View your rewards balance,
                exclusive rewards, and statements.
              </p>
            </div>
          </div>
          <div className='flex flex-col items-center '>
            <img src={image4} alt='img' />
          </div>
        </div>
        <div className='grid grid-cols-2 items-center'>
          <div className='flex justify-center'>
            <img src={image1} alt='img' />
          </div>
          <div className=' flex flex-col gap-3 items-center  '>
            <h2 className=' text-4xl w-[50%] '>
              Securely connect your bank for repayment
            </h2>
            <div className=' flex flex-col gap-2 w-[50%]'>
              <p>
                We use Plaid to connect your bank account because their
                information security program is designed to meet or exceed
                industry standards, with many different controls to keep your
                personal information safe.
              </p>
            </div>
            <div className=' flex flex-col gap-2 w-[50%]'>
              <p>
                Plaid is certified in internationally-recognized security
                standards, like ISO 27001. Learn more about Plaid.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=' bg-[#D6E4E2] min-h-56 p-14 flex flex-col justify-center '>
        <h2 className=' text-4xl text-center'>Explore brands that accept Tandym</h2>
        <div className='grid grid-cols-4 min-h-0 p-14 gap-y-8'>
            {
                 
                    data.map((elem , index) => {
                        return <div className='flex flex-col gap-2 items-center' key={index}>
                            <div> <img src={elem.image} alt='img' /> </div>
                          {elem.percentage ?<div className=' bg-gradient-to-r from-[#D6E4E2] via-[#FFD6B8] to-[#FFC3A9] p-2 text-sm tracking-tighter rounded-xl'>{elem.percentage}</div> : <span>{elem.Earn} </span> }  
                            <h4 className=' text-2xl'>{elem.name}</h4>
                            <p className=' tracking-tight'>{elem.discount}</p>
                        </div>
                    })
                
            }

        </div>
        <Link  to='/brands' className=' bg-[#136D58] p-4 text-center w-fit rounded-3xl text-white self-center'>Explore all Brands</Link>

      </div>
      <div className=' bg-[#FAF6F2] flex flex-col items-center min-h-44 p-14 gap-9'>
        <h2 className=' text-4xl'>Frequently Asked Questions </h2>
        <div>
            
            {
                payload.map((elem,index) =>{
                    return <><button className={`bg-[#FFFFFF] w-full text-left p-4 text-lg  transition-all ease-linear duration-75 border ${activeAccordions.includes(index)? 'bg-[#ccc] ': ''} hover:bg-[#ccc]`} onClick={() =>{
                        if(activeAccordions.includes(index)){
                            setActiveAccordions(activeAccordions.filter(i => i !== index))
                        }
                        else{
                            setActiveAccordions(prevElem => [...prevElem, index])
                        }
                    }} key={index}>{elem.header}</button>
                     <motion.div                    initial = {{height : 0, opacity : 0}}   
                     animate = {{height : activeAccordions.includes(index) ? 'auto' : 0, opacity: activeAccordions.includes(index) ? 1 : 0}}
                     exit={{opacity : 0, height: 0}}
                     transition={{duration : 0.2, ease :'linear' }}
                     className=' tracking-tight p-2 overflow-hidden' style={{
                        display : activeAccordions.includes(index) ? 'block' : 'none'
                     }}>{elem.body}</motion.div>
                    
                    
             </>
                })
            }
               </div>
      </div>
      <Footer />
    </div>
  )
}

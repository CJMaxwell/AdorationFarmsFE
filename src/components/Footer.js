import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { BiMap, BiPhone } from 'react-icons/bi';
import { FiFacebook, FiTwitter } from 'react-icons/fi';

const Wrapper = styled.footer`

`;

const Footer = () => {
  return (
    <Wrapper className="sm:block lg:flex lg:items-start lg:space-x-24 lg:pt-24 py-12 sm:mt-10">
      <section>
        <h1 className="font-semibold text-xl">Adoration Farms</h1>
        <p className="mt-2">
          Adoration Farms is a leading agritech company in Nigeria duly registered with CAC.
          We give you the opportunity to own a Palm plantation in Nigeria and aid you in growing
          it from land acquisition to harvest. We aid you in procuring seedlings, keeping track of
          farm progress, harvest and processing of produce. We use improved quality seeds that
          produce higher yields and are naturally more resistant to diseases and pests.
        </p>
        <ul className="flex items-center space-x-4 mt-4">
          <li>
            <Link to="#instagram" className="cursor-pointer">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="#fb" className="cursor-pointer">
              <FiFacebook />
            </Link>
          </li>
          <li>
            <Link to="#twitter" className="cursor-pointer">
              <FiTwitter />
            </Link>
          </li>
        </ul>
      </section>
      <section className="w-full lg:mt-0 mt-10" id="contact-us">
        <h1 className="font-semibold text-xl">Contact Us</h1>
        <p className="mt-2 flex items-start">
          <span className="inline-flex mr-2 mt-2"><BiMap /></span>
          <span>
            18, Olu Ibokun Crescent,
            Olugba-Ilogbo Road,
            Adodo-Otta,
          Ogun State.</span>
        </p>
        <p className="mt-2 flex items-start">
          <span className="inline-flex mr-2 mt-2"><BiPhone /></span>
          <span>+234 706 508 1353, +234 909 007 6828, +4915753779213.</span>
        </p>
      </section>
      <section className="w-full lg:mt-0 mt-10">
        <h1 className="font-semibold text-xl">Quick Links</h1>
        <ul className="mt-2">
          <li>
            <Link to="/terms-conditions" className="cursor-pointer">
              T&amp;C
            </Link>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/signup" className="cursor-pointer">
              Sign up
            </Link>
          </li>
        </ul>
      </section>
    </Wrapper>
  )
}

export default Footer

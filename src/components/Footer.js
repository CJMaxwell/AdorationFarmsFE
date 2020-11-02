import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Wrapper = styled.footer`

`;

const Footer = () => {
  return (
    <Wrapper className="sm:block lg:flex lg:items-start lg:space-x-24 lg:pt-24 py-12 sm:mt-10">
      <section>
        <h1 className="font-semibold text-xl">Adoration Farms</h1>
        <p className="mt-2">
          Adoration Farms gives you the opportunity to own a Palm plantation in Nigeria. It all starts with a seed;
          We use improved quality seeds that produce higher yields and are naturally more resistant to diseases
          and pests.
        </p>
        <ul className="flex items-center space-x-4 mt-4">
          <li>
            <Link to="#instagram" className="cursor-pointer">
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="#fb" className="cursor-pointer">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link to="#twitter" className="cursor-pointer">
              <FaTwitter />
            </Link>
          </li>
        </ul>
      </section>
      <section className="w-full lg:mt-0 sm:mt-10" id="contact-us">
        <h1 className="font-semibold text-xl">Contact Us</h1>
        <p className="mt-2">
          18, Olugba-Ilogbo,
          Adodo-Otta,<br />
          Ogun State.
        </p>
      </section>
      <section className="w-full lg:mt-0 sm:mt-10">
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

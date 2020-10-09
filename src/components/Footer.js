import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'

const Wrapper = styled.footer`

`;

const Footer = () => {
  return (
    <Wrapper className="sm:block lg:flex lg:items-start lg:space-x-24 lg:mt-20 sm:mt-10">
      <section>
        <h1 className="font-semibold">Adoration Farms</h1>
        <p className="mt-2">
          It begins with a Palm tree,
          Adoration Farms is increasing palm oil production by allowing you easily own
          a farm with a promise to manage all the processes involved in palm oil production.
        </p>
        <ul className="flex items-center space-x-4 mt-4">
          <li>
            <a className="cursor-pointer">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </section>
      <section className="w-full lg:mt-0 sm:mt-10">
        <h1 className="font-semibold">Contact Us</h1>
        <p className="mt-2">
          18, Olugba-Ilogbo,
          Adodo-Otta,<br />
          Ogun State.
        </p>
      </section>
      <section className="w-full lg:mt-0 sm:mt-10">
        <h1 className="font-semibold">Quick Links</h1>
        <ul className="mt-2">
          <li>
            <a className="cursor-pointer">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              About Us
            </a>
          </li>
          <li>
            <a className="cursor-pointer">
              Sign up
            </a>
          </li>
        </ul>
      </section>
    </Wrapper>
  )
}

export default Footer

import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <div name="contact" className='flex items-center justify-center h-screen'>
      <div className='max-w-screen-lg w-full px-4'>
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className='my-10 text-center bg-gradient-to-r from-violet-900 via-pink-500 to-violet-900 bg-clip-text text-6xl tracking-tight text-transparent'
        >
          Contact
        </motion.h2>

        <div className='text-center tracking-tighter'>
          <p className='my-4'>{CONTACT.address}</p>
          <div className='flex my-10 justify-center'>
            <iframe
              title='TKM College of Engineering Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.6269990306782!2d76.63195209999999!3d8.9142251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd3036020df5%3A0xc3c1007e5232dc27!2sTKM%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1721371766412!5m2!1sen!2sin'
              width='150'
              height='150'
              style={{ border: '0' }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
          <a href={`https://wa.me/${CONTACT.phoneNo}`} className='my-4 '>
            {CONTACT.phoneNo}
          </a>
          <p />
          <a href={`mailto:${CONTACT.email}`} className='my-4 border-b '>
            {CONTACT.email}
          </a>
        </div>

        <div className='flex items-center justify-center mt-10'>
          <a
            href='https://www.instagram.com/m_dev_21'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl mx-3 hover:scale-150 duration-200'
          >
            <FaInstagram />
          </a>
          <a
            href='https://github.com/1518manu'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl mx-3 hover:scale-150 duration-200'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/Manu21'
            target='_blank'
            rel='noopener noreferrer'
            className='text-2xl mx-3 hover:scale-150 duration-200'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

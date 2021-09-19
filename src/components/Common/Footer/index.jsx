import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaGlobeAmericas } from 'react-icons/fa'

import { Container } from 'styles/CommonComponent'

import Msg from 'constants/messages'

import { ContainerCopy, ContainerFooter, LinkExternal, SocialList } from './styles'

const Footer = () => (
  <ContainerFooter>
    <Container>
      <ContainerCopy>
        Creado con 💛 por Yadurani López.
        <SocialList>
          <li>
            <LinkExternal rel="noopener" href={Msg.Linkedin} target="_blank" title="Linkedin">
              <FaLinkedinIn size="1.2rem"/>
            </LinkExternal>
          </li>
          <li>
            <LinkExternal rel="noopener" href={Msg.Twitter} target="_blank">
              <FaTwitter size="1.2rem"/>
            </LinkExternal>
          </li>
          <li>
            <LinkExternal rel="noopener" href={Msg.Github} target="_blank">
              <FaGithub size="1.2rem"/>
            </LinkExternal>
          </li>
          <li>
            <LinkExternal rel="noopener" href={Msg.WebSite} target="_blank">
              <FaGlobeAmericas size="1.2rem"/>
            </LinkExternal>
          </li>
        </SocialList>
      </ContainerCopy>
    </Container>
  </ContainerFooter>
)

export default Footer

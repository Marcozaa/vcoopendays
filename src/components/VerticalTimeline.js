import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React from 'react'
import { FaIndustry, FaMonero, FaSchool } from 'react-icons/fa';
import { Avatar, AvatarGroup } from '@chakra-ui/react';

export default function Timeline() {
  return (
    <div><VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="13:40 -15:00"
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchool />}
    >
  
    <h3 className="vertical-timeline-element-title">Oggi</h3>
    <AvatarGroup size='sm' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </AvatarGroup>
    <p>
        Open day politecnico area ingegneria
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="11:00 -15:00"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaMonero />}
    >
  
    <h3 className="vertical-timeline-element-title">Domani</h3>
    <AvatarGroup size='sm' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </AvatarGroup>
    <p>
      Presentazione corsi magistrale in economia
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: ' rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   rgb(233, 30, 99)' }}
    date="13:00 -18:00"
    iconStyle={{ background: ' rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaIndustry />}
    >
  
    <h3 className="vertical-timeline-element-title">Mercoledì 3 Marzo</h3>
    <AvatarGroup size='sm' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </AvatarGroup>
    <p>
      Incontro con aziende settore informatico del territorio.
    </p>
  </VerticalTimelineElement>
 <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="13:40 -15:00"
   
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaSchool />}
    >
  
    <h3 className="vertical-timeline-element-title">Oggi</h3>
    <AvatarGroup size='sm' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </AvatarGroup>
    <p>
        Open day politecnico area ingegneria
    </p>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="11:00 -15:00"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaMonero />}
    >
  
    <h3 className="vertical-timeline-element-title">Domani</h3>
    <AvatarGroup size='sm' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </AvatarGroup>
    <p>
      Presentazione corsi magistrale in economia
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: ' rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid   rgb(233, 30, 99)' }}
    date="13:00 -18:00"
    iconStyle={{ background: ' rgb(233, 30, 99)', color: '#fff' }}
    icon={<FaIndustry />}
    >
  
    <h3 className="vertical-timeline-element-title">Mercoledì 3 Marzo</h3>
    <AvatarGroup size='sm' max={2}>
  <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
  <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
  <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
  <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
  </AvatarGroup>
    <p>
      Incontro con aziende settore informatico del territorio.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    
  />
</VerticalTimeline></div>
  )
}

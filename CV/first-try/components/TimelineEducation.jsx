import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Education from './CareerIcons/Education';

export default function TimelineEducation() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        //contentStyle={{ background: '#F5D661', color: '#fff' }}
        //contentArrowStyle={{ borderRight: '7px solid  #F5D661' }}
        date="09/2021 - 04/2022"
        iconStyle={{ background: '#F5D661', color: '#fff' }}
        icon={<Education />}>
        <a href="https://technocite.be/formations/devops" target="_blank" rel="noopener">
          <img src="/technocite.svg" alt="technocite img" className="h-8 pb-2" />
        </a>
        <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Hornu, BE</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team
          Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="05/2021 - 08/2021"
        iconStyle={{ background: '#F5D661', color: '#fff' }}
        icon={<Education />}>
        <img src="/technocite.svg" alt="technocite img" className="h-8 pb-2" />
        <h3 className="vertical-timeline-element-title">IT Support & Network</h3>
        <h4 className="vertical-timeline-element-subtitle">Hornu, BE</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="05/2021 - present"
        iconStyle={{ background: '#F5D661', color: '#fff' }}
        icon={<Education />}>
        <h3 className="vertical-timeline-element-title">Openclassrooms</h3>
        <h3 className="vertical-timeline-element-title">IT</h3>
        <h4 className="vertical-timeline-element-subtitle">Online</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="03/2016 - 02/2017"
        iconStyle={{ background: '#F5D661', color: '#fff' }}
        icon={<Education />}>
        <h3 className="vertical-timeline-element-title">ITTT</h3>
        <h3 className="vertical-timeline-element-title">TEFL</h3>
        <h4 className="vertical-timeline-element-subtitle">Online</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

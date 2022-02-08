import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Work from './CareerIcons/Work';

export default function TimelineCareer() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        //contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        //contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="08/2020 - 01/2021"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Work />}>
        <a
          href="https://www.wurth.be/fr/wuerth_belux/company/wurth.php"
          target="_blank"
          rel="noopener">
          <img
            className="rounded-sm"
            src="/wurth.svg"
            alt="wurth img"
            className="h-12 pb-2"
          />
        </a>
        <h3 className="vertical-timeline-element-title">Account Manager</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Google Datacenter, Ghlin, BE
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project Management, Team
          Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="12/2017 - 03/2020"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Work />}>
        <a href="https://mic21.com" target="_blank" rel="noopener">
          <img src="/mic21.svg" alt="wurth img" className="h-12 pb-2" />
        </a>
        <h3 className="vertical-timeline-element-title">Sales Manager</h3>
        <h4 className="vertical-timeline-element-subtitle">Okinawa, JP</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="02/2017 - 11/2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Work />}>
        <a href="https://seasir.com" target="_blank" rel="noopener">
          <img src="/seasir.svg" alt="seasir img" className="h-12 pb-2" />
        </a>
        <h3 className="vertical-timeline-element-title">Sales Representative</h3>
        <h4 className="vertical-timeline-element-subtitle">Okinawa, JP</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="03/2016 - 02/2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Work />}>
        <a href="https://seasir.com" target="_blank" rel="noopener">
          <img src="/seasir.svg" alt="seasir img" className="h-12 pb-2" />
        </a>
        <h3 className="vertical-timeline-element-title">Scuba Diving Instructor</h3>
        <h4 className="vertical-timeline-element-subtitle">Okinawa, JP</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

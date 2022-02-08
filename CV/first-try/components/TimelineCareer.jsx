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
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="08/2020 - 01/2021"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Work />}>
        <h3 className="vertical-timeline-element-title">Würth</h3>
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
        <h3 className="vertical-timeline-element-title">mic21</h3>
        <h3 className="vertical-timeline-element-title">Sales Manager</h3>
        <h4 className="vertical-timeline-element-subtitle">Okinawa, JP</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="02/2017 - 11/2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Work />}>
        <h3 className="vertical-timeline-element-title">Seasir</h3>
        <h3 className="vertical-timeline-element-title">Sales Representative</h3>
        <h4 className="vertical-timeline-element-subtitle">Okinawa, JP</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="03/2016 - 02/2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Work />}>
        <h3 className="vertical-timeline-element-title">Seasir</h3>
        <h3 className="vertical-timeline-element-title">Scuba Diving Instructor</h3>
        <h4 className="vertical-timeline-element-subtitle">Okinawa, JP</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

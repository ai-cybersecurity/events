import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/weekDays.css'
import { useTranslation } from 'react-i18next';

//react-icons
import { SiAdobephotoshop } from "react-icons/si";
import { FaBook } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";

const Friday = () => {

    const [t] = useTranslation('global')

  return (
    <div className='day-main'>
        <h1 className='day-title'>Friday</h1>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="14:30"
            icon={<FaBrain />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Brain Ring 2.0</h3>
            <p>{t('friday.description1')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            icon={<SiAdobephotoshop />}
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="14:30"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Logo & UI Designing</h3>
            <p>{t('friday.description2')}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            icon={<FaBook />}
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(76, 175, 80)' }}
            date="14:30"
            iconStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Reading Competition</h3>
            <p>{t('friday.description3')}</p>
        </VerticalTimelineElement>
    </VerticalTimeline>
    </div>

  );
};

export default Friday;
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../css/weekDays.css'
import { useTranslation } from 'react-i18next';

//react-icons
import { MdCelebration } from "react-icons/md";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { PiFilmSlateDuotone } from "react-icons/pi";

const Saturday = () => {

    const [t] = useTranslation('global')

  return (
    <div className='day-main'>
        <h1 className='day-title'>Saturday</h1>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="14:30"
            icon={<MdCelebration />}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Closing Ceremony</h3>
            <p>{t('saturday.description1')}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            icon={<PiMicrophoneStageFill />}
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
            date="14:30"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Karaoke</h3>
            <p>{t('saturday.description2')}</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
            icon={<PiFilmSlateDuotone />}
            className="vertical-timeline-element"
            contentStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(76, 175, 80)' }}
            date="14:30"
            iconStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}>
            <h3 className="vertical-timeline-element-title">Short Film</h3>
            <p>{t('saturday.description3')}</p>
        </VerticalTimelineElement>
    </VerticalTimeline>
    </div>

  );
};

export default Saturday;
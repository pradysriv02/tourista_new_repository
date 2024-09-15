import React, { useContext } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const IternarySlider = () => {

  return (
    <div>
    <div ><br/>
        <h3>Iternary for Jaiselmer - Jodhpur Trip</h3>
        <br/>
    </div>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(235, 235, 235)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="23rd Feb"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Fort Tour</h3>
            <h4 className="vertical-timeline-element-subtitle">Jaiselmer, RJ</h4>
            <p>
                Visit the fort at heart of city, where people still reside. (Approx. 4 hours)
                Don't Forget trying the amazing sweets and kachodis near fort.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: 'rgb(235, 235, 235)', color: '#000' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
             date="23rd Feb"
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Patwon ki Haveli</h3>
            <h4 className="vertical-timeline-element-subtitle">Jaiselmer, RJ</h4>
            <p>
                Visit the Haveli, and see its amazing architecture and engravings. (Approx. 2 hours)
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: 'rgb(235, 235, 235)', color: '#000' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
             date="23rd Feb"
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Gadisagar Lake</h3>
            <h4 className="vertical-timeline-element-subtitle">Jaiselmer, RJ</h4>
            <p>
                Spend evening at the lake, peddle the raft there, and watch amazing lazer show. Don't miss the amazing
                food stalls, as well as puppet show! (Approx. 5 hours)
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: 'rgb(235, 235, 235)', color: '#000' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
             date="24th Feb"
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Sam Dunes</h3>
            <h4 className="vertical-timeline-element-subtitle">Jaiselmer, RJ</h4>
            <p>
                Spend day and night in thar, take a jeep and camel safari, try some sports in sand and explore the amazing
                camp there with night folklore. (Approx. 1 day)
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
             className="vertical-timeline-element--work"
             contentStyle={{ background: 'rgb(235, 235, 235)', color: '#000' }}
             contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
             date="25th Feb"
             iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Mehrangarh Fort</h3>
            <h4 className="vertical-timeline-element-subtitle">Jodhpur, RJ</h4>
            <p>
                Visit the amazing city of Jodhpur, having a amazing museum in fort, clock tower and Royal Umaid
                Bhavan Palace. Not to miss on amazing food city offers. (Approx. 15 hours)
            </p>
        </VerticalTimelineElement>
        
        
    </VerticalTimeline>
    </div>
  );
};

export default IternarySlider;

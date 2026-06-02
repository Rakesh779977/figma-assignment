import { useState } from 'react';
import './WorkingProcess.css';

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
  },
  {
    number: '02',
    title: 'Research and Strategy Development',
    description:
      'Our team conducts in-depth market research and competitor analysis to craft a data-driven strategy tailored to your business objectives and target audience.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'We put the strategy into action, launching campaigns across selected channels while ensuring every element aligns with the overall plan and brand guidelines.',
  },
  {
    number: '04',
    title: 'Monitoring and Optimization',
    description:
      'We continuously monitor campaign performance, analyze key metrics, and make real-time adjustments to maximize ROI and ensure optimal results.',
  },
  {
    number: '05',
    title: 'Reporting and Communication',
    description:
      'You receive regular, transparent reports detailing campaign performance, insights, and recommendations. We maintain open communication to keep you informed every step of the way.',
  },
  {
    number: '06',
    title: 'Continual Improvement',
    description:
      'Digital marketing is an ongoing process. We continuously refine strategies based on data and feedback to drive sustained growth and long-term success.',
  },
];

function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="working-process">
      <div className="working-process__header">
        <h2 className="working-process__title">
          <span className="working-process__title-highlight">Our Working Process</span>
        </h2>
        <p className="working-process__description">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="working-process__list">
        {processSteps.map((step, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={step.number}
              className={`working-process__item ${isOpen ? 'working-process__item--open' : ''}`}
            >
              <button
                className="working-process__item-header"
                onClick={() => handleToggle(index)}
                aria-expanded={isOpen}
              >
                <span className="working-process__item-number">{step.number}</span>
                <span className="working-process__item-title">{step.title}</span>
                <span className="working-process__item-toggle">
                  {isOpen ? (
                    <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
                      <path d="M18 29.5H40" stroke="#191A23" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="29" cy="29.5" r="28.5" fill="#F3F3F3" stroke="#191A23"/>
                      <path d="M29 18.5V40.5" stroke="#191A23" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M18 29.5H40" stroke="#191A23" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                </span>
              </button>

              <div className="working-process__item-body">
                <div className="working-process__item-content">
                  <div className="working-process__item-divider" />
                  <p className="working-process__item-description">{step.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WorkingProcess;

import './Team.css';

const teamMembers = [
  {
    name: 'John Smith',
    position: 'CEO and Founder',
    bio: 'Over 10 years of experience in digital marketing. Visionary leader passionate about delivering results for clients.',
    avatar: '👨‍💼',
  },
  {
    name: 'Jane Doe',
    position: 'Director of Operations',
    bio: '7+ years of experience in project management and team leadership. Streamlines processes to ensure operational excellence.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Brown',
    position: 'Senior SEO Specialist',
    bio: '5+ years of experience in SEO and content strategy. Dedicated to driving organic growth through data-driven techniques.',
    avatar: '👨‍💻',
  },
  {
    name: 'Emily Johnson',
    position: 'PPC Manager',
    bio: '3+ years of experience in paid search advertising. Expert in maximizing ROI through targeted ad campaigns.',
    avatar: '👩‍💻',
  },
  {
    name: 'Brian Williams',
    position: 'Social Media Specialist',
    bio: '4+ years of experience in social media marketing. Creative strategist building engaged communities and brand awareness.',
    avatar: '🧑‍🎨',
  },
  {
    name: 'Sarah Kim',
    position: 'Content Creator',
    bio: '2+ years of experience in content creation and copywriting. Crafts compelling narratives that resonate with audiences.',
    avatar: '✍️',
  },
];

function LinkedInIcon() {
  return (
    <svg
      className="team__card-linkedin"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.04 1H2.96C1.88 1 1 1.88 1 2.96V17.04C1 18.12 1.88 19 2.96 19H17.04C18.12 19 19 18.12 19 17.04V2.96C19 1.88 18.12 1 17.04 1ZM6.56 16.28H3.92V7.96H6.56V16.28ZM5.24 6.8C4.4 6.8 3.72 6.12 3.72 5.28C3.72 4.44 4.4 3.76 5.24 3.76C6.08 3.76 6.76 4.44 6.76 5.28C6.76 6.12 6.08 6.8 5.24 6.8ZM16.28 16.28H13.64V12.24C13.64 11.28 13.64 10.04 12.28 10.04C10.92 10.04 10.72 11.08 10.72 12.16V16.28H8.08V7.96H10.6V9.08H10.64C11 8.44 11.84 7.76 13.08 7.76C15.76 7.76 16.28 9.52 16.28 11.8V16.28Z"
        fill="#191A23"
      />
    </svg>
  );
}

function Team() {
  return (
    <section className="team">
      <div className="team__header">
        <h2 className="team__title">
          <span className="team__title-highlight">Team</span>
        </h2>
        <p className="team__description">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      <div className="team__grid">
        {teamMembers.map((member) => (
          <div key={member.name} className="team__card">
            <div className="team__card-top">
              <div className="team__card-avatar">{member.avatar}</div>
              <div className="team__card-info">
                <h3 className="team__card-name">{member.name}</h3>
                <p className="team__card-position">{member.position}</p>
              </div>
              <a
                href="#"
                className="team__card-social"
                aria-label={`${member.name} LinkedIn`}
              >
                <LinkedInIcon />
              </a>
            </div>
            <div className="team__card-divider" />
            <p className="team__card-bio">{member.bio}</p>
          </div>
        ))}
      </div>

      <div className="team__cta">
        <button className="team__button">See all team</button>
      </div>
    </section>
  );
}

export default Team;

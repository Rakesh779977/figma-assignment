import './SectionTitle.css';

function SectionTitle({ title, description }) {
  return (
    <div className="section-title">
      <h2 className="section-title__heading">
        <span className="section-title__badge">{title}</span>
      </h2>
      {description && (
        <p className="section-title__description">{description}</p>
      )}
    </div>
  );
}

export default SectionTitle;

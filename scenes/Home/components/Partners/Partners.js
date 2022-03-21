import s from "./Partners.module.scss";
import PartnersItem from "./PartnersItem/PartnersItem";

const Partners = ({ data }) => {
  const { partners, title, description } = data.partners;
  const partnersItem = partners.map((item, index) => {
    return <PartnersItem data={item} key={index} />;
  });

  return (
    <div className="section">
      <div className={s.partners}>
        <div className="container">
          <span className="section-category">{description}</span>
          <h3 className="section-title">{title}</h3>
          <div className="section-content">
            <div className={s.partnersList}>{partnersItem}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

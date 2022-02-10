import s from "./Partners.module.scss";
import ButtonPrimary from "../../../../components/Buttons/ButtonPrimary/ButtonPrimary";
import ButtonWithArrow from "../../../../components/Buttons/ButtonWithArrow/ButtonWithArrow";
import PartnersItem from "./PartnersItem/PartnersItem";

const Partners = ({ data, urlFor }) => {
  const { partners } = data.partners;
  const partnersItem = partners.map((item, index) => {
    return <PartnersItem data={item} key={index} />;
  });

  return (
    <div className="section">
      <div className={s.partners}>
        <div className="container">
          <span className="section-category">Partners</span>
          <h3 className="section-title">Trusted by over 260 companies</h3>
          <div className="section-content">
            <div className={s.partnersList}>{partnersItem}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;

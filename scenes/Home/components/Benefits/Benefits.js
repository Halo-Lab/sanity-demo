import s from "./Benefits.module.scss";
import BenefitsItem from "./BenefitsItem/BenefitsItem";

const Benefits = ({ data }) => {
  const { benefits, benefitGeneralTitle, benefitCategory } = data.benefits;

  const benefitsItems = benefits.map((item, index) => {
    return <BenefitsItem data={item} key={index} />;
  });

  return (
    <div className="section">
      <div className="content-section">
        <div className="content-section__inner">
          <div className={s.benefits}>
            <div className="container">
              <span className="section-category section-category--red">
                {benefitCategory}
              </span>
              <h3 className="section-title section-title--brown section-title--small">
                {benefitGeneralTitle}
              </h3>
              <div className="section-content">
                <div className={s.benefitsList}>{benefitsItems}</div>
                <div className={s.benefitsFooter}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;

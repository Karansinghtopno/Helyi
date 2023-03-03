import React from "react";
import "./KeyAdv.css";
import KeyCard from "./KeyCard";
import main1 from "../../images/key_advantage/take_your/main.png";
import main2 from "../../images/key_advantage/customer_foc/main.png";
import main3 from "../../images/key_advantage/cost_imp/main.png";
import t1 from "../../images/key_advantage/take_your/1.png"
import t2 from "../../images/key_advantage/take_your/2.png"
import t3 from "../../images/key_advantage/take_your/3.png"
import t4 from "../../images/key_advantage/take_your/4.png"
import t5 from "../../images/key_advantage/take_your/5.png"
import t6 from "../../images/key_advantage/take_your/6.png"
import t7 from "../../images/key_advantage/take_your/7.png"
import t8 from "../../images/key_advantage/take_your/8.png"
import t9 from "../../images/key_advantage/take_your/9.png"
import c1 from "../../images/key_advantage/customer_foc/1.png"
import c2 from "../../images/key_advantage/customer_foc/2.png"
import c3 from "../../images/key_advantage/customer_foc/3.png"
import c4 from "../../images/key_advantage/customer_foc/4.png"
import co1 from "../../images/key_advantage/cost_imp/1.png"
import co2 from "../../images/key_advantage/cost_imp/2.png"
import co3 from "../../images/key_advantage/cost_imp/3.png"
import co4 from "../../images/key_advantage/cost_imp/4.png"
import co5 from "../../images/key_advantage/cost_imp/5.png"
import co6 from "../../images/key_advantage/cost_imp/6.png"


const TIconAndDesc=[
{img:t1,det:"Dashboard Notifications"},
{img:t2,det:"Click on a button and lend"},
{img:t3,det:"Easy Forecasting"},
{img:t4,det:"Keep Records and Alerts"},
{img:t5,det:"Easy Inventory Control"},
{img:t6,det:"Get your returns in just a snap"},
{img:t7,det:"Reward your Customers"},
{img:t8,det:"Earn an Extra Income"},
{img:t9,det:"Decrease Buying Costs"},
]
const CIconAndDetail=[
  {img:c1,det:"Single Point Initiation"},
  {img:c2,det:"Weekly Supply"},
  {img:c3,det:"24X7 Customer Support"},
  {img:c4,det:"Digital Marketing"},
]
const costIconAndDetail=[
  {img:co1,det:"Versatile Partners"},
  {img:co2,det:"Loyalty Program"},
  {img:co3,det:"Monthly Launches"},
  {img:co4,det:"Offers & Rewards"},
  {img:co5,det:"Easy Purchase"},
  {img:co6,det:"Smart Security"},
]


const KeyAdv = () => {
  return (
    <section className="key_adv_container">
      <div className="key_adv_wrapper">
        <h2 className="key_adv_heading">Key Advantages</h2>
        <p className="key_adv_para">
          Be a part of our “Every Home Helyi” Revolution. A platform where
          innovations and thinkability meets execution!
        </p>
        <div className="key_adv_card_container">
          <KeyCard
            img={main1}
            details="We reimagined the overall situation and came up with a better
management and use of technology  so that you can bring your business online."
            text="Take your business Online"
            iconDet={TIconAndDesc}
          />
          <KeyCard
            img={main2}
            details="All our research and approaches minimizes your effort, related
risks and operational problems. Our Customer Support team
is working constantly to improve your experience."
            text="Customer Focused"
            iconDet={CIconAndDetail}
          />
          <KeyCard
            img={main3}
            details="All our research and approaches minimizes your effort, related
risks and operational problems thus maximizing profits and revenues."
            text="Cost Improvement"
            iconDet={costIconAndDetail}
          
          />
          {/* <div className="customer"></div>
          <div className="cost"></div> */}
        </div>
      </div>
    </section>
  );
};

export default KeyAdv;

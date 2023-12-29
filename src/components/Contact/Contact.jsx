import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
            <span className="orangeText">Our Contacts</span>
            <span className="primaryText">Easy to Contact us</span>
            <span className="secondaryText">We always ready to help by providing the best Services for you. <br />We beleive a good blace to live can make your life better </span>

            <div className="flexColStart cotactModes">
                {/* first row */}
                <div className="flexStart row">
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <MdCall size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Call</span><span className="secondaryText">8103 334 932</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Call Now</div>
                    </div>

                        {/* second mode  */}
                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Chat</span><span className="secondaryText">8103 334 932</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Chat Now</div>
                    </div>
                </div>

                {/* second row */}
                <div className="flexStart row">
                    <div className="flexColStart mode mode2">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <HiChatBubbleBottomCenter size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Messages</span><span className="secondaryText">8103 334 932</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Messages Now</div>
                    </div>

                    <div className="flexColStart mode">
                        <div className="flexStart">
                            <div className="flexCenter icon">
                                <BsFillChatDotsFill size={25} />
                            </div>
                            <div className="flexColStart detail">
                                <span className="primaryText">Video Call</span><span className="secondaryText">8103 334 932</span>
                            </div>
                        </div>
                        <div className="flexCenter button">Video Call Now</div>
                    </div>
                </div>
            </div>

        </div>
        <div className="c-right">
            <div className="img-container">
                <img src="./contact.jpg" alt="Contact_image" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

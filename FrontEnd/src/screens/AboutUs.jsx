import React from "react";
import BannerCompo from "../components/BannerCompo";
import about from '../assets/Aboutus.jpg'
import '../css/BannerCompo.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../css/Footer.css'
import '../css/Navbar.css'
import '../css/AboutUs.css'

const AboutUs = () => {
  return (<>
    <Navbar/>
    <section
      className="story-one pt-5 cleenhearts-jarallax"
      data-jarallax=""
      data-speed="0.3"
    >
      

      
      
      <BannerCompo image={about} title={"About-Us"} pagename={"About-Us"}/>
      <div className="container">
      <div className="container mx-auto px-4">
        <div className="sec-title">
          <h3 className="sec-title__title">
            A Journey Through Our <span className="sec-title__title__inner">Story</span>
          </h3>
        </div>
        <div className="story-one__tabs-box">
          <div className="tabs-content">
            <div className="tab active-tab" id="year1992" style={{ display: "block" }}>
              <div className="row gutter-y-40">
                <div
                  className="col-xl-12 animated fadeInRight"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <div className="story-one__content">
                    <p style={{ textAlign: "justify" }}>
                      CollCom stands for <span style={{ color: "#800000" }}><strong>College Community</strong></span>, and is a <strong>Non-Profit Organization established in 2018</strong> by alumni of Jawaharlal Nehru University, New Delhi. Our team comprises individuals from diverse career backgrounds who have united to redefine the volunteering experience.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      We are dedicated to creating <strong>diverse opportunities for youth</strong>, offering them platforms to explore their talents and guiding them towards meaningful career paths. Through our initiatives, we address everyday challenges, <strong>conduct skill development training</strong>, and <strong>organize capacity-building workshops</strong> to enhance personalities.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      CollCom <strong>empowers youth to engage closely with communities</strong>, including street children, migrants, slum dwellers, orphanages, the elderly, sanitation workers, differently abled individuals, drug abuse victims, jail inmates, and farmers. We strive to understand their issues and involve ourselves in finding solutions, aiming to elevate their quality of life both materially and morally.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      Our <strong>primary objective is to strengthen National Service Scheme (NSS) units</strong>, Nehru Yuva Kendra Sangathan (NYKS), and other youth-led organizations in +2 schools and colleges nationwide.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      We offer a <strong>range of training programs and volunteering opportunities</strong> for youth to make a positive impact in society. Furthermore, we actively collaborate with government agencies, educational institutions, and other non-profit organizations to amplify our impact. We organize awareness campaigns, community service projects, and advocacy efforts to address social, environmental, and economic issues at both local and national levels.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      Our vision is to <strong>foster a culture of volunteerism, social responsibility</strong>, and youth empowerment, creating a brighter future for generations to come.
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      We are proud to be <strong>certified under sections 12A and 80G of the Income Tax Act, 1961</strong>, ensuring that all financial donations are exempted under these provisions.
                    </p>
                    <header className="entry-header">
                      <h2 className="entry-title">Vision</h2>
                    </header>
                    <div className="entry-content mt-5">
                      <p style={{ textAlign: "justify" }}>
                        To create a culture of volunteerism, social responsibility, and youth empowerment, fostering a brighter and more inclusive future for all communities.
                      </p>
                    </div>
                    <header className="entry-header">
                      <h2 className="entry-title">Mission</h2>
                    </header>
                    <div className="entry-content mt-5">
                      <p style={{ textAlign: "justify" }}>
                        To engage and empower youth through skill-building, volunteerism, and collaborative initiatives. We aim to address social challenges, enhance community well-being, and promote a culture of social responsibility and innovation.
                      </p>
                    </div>
                    <h2 className="entry-title">Value</h2>
                    <p>Our organization is guided by a set of core values that inform everything we do. We believe in these values because they are fundamental to achieving our mission and vision, and they reflect the kind of world we want to create.</p>
                    <ol className="list-disc pl-5">
                      <li>
                        <p><strong>Integrity:</strong> We are committed to honesty, transparency, and accountability in all our actions. We strive to earn and maintain the trust of our stakeholders by upholding the highest ethical standards.</p>
                      </li>
                      <li>
                        <p><strong>Empathy:</strong> We value empathy and compassion as essential qualities in our work. We seek to understand the needs and perspectives of those we serve, and we approach our work with sensitivity and respect.</p>
                      </li>
                      <li>
                        <p><strong>Collaboration:</strong> We believe in the power of collaboration and partnership. We work in partnership with communities, governments, civil society organizations, and other stakeholders to achieve our mission.</p>
                      </li>
                      <li>
                        <p><strong>Diversity and Inclusion:</strong> We value diversity and inclusion as essential elements of our work. We embrace differences and strive to create an inclusive environment where everyone feels valued and respected.</p>
                      </li>
                      <li>
                        <p><strong>Innovation:</strong> We are committed to innovation and creativity in our work. We seek new and effective ways to address complex social problems, and we are open to new ideas and approaches.</p>
                      </li>
                      <li>
                        <p><strong>Sustainability:</strong> We believe in sustainable development as a key to achieving our mission. We prioritize environmental sustainability and seek to minimize our impact on the natural environment.</p>
                      </li>
                    </ol>
                    <p>These values guide our decision-making, actions, and interactions with stakeholders. We believe that by embodying these values, we can create meaningful and lasting change in the world.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://www.collcom.org/public/web/assets/images/shapes/about-shape-1-2.png"
        alt="cleenhearts"
        className="about-one__hand mt-4 mx-auto"
      />
      </div>
      <Footer/>
    </section>
    </>
    
  );
};

export default AboutUs;

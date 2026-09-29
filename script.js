function renderNavbar() {
    return `<nav id="navbar">
      <div class="nav-inner">
        <div class="nav-brand" data-action="home-brand" role="button" tabindex="0">
          <div class="nav-brand-logo"><img src="./assets/icaries_logo.png" alt="ICARIES 2027" width="1148" height="918">
          </div>
          <div>
            <span class="nav-brand-name">ICARIES 2027</span>
            <span class="nav-brand-sub">PRMITR Badnera</span>
          </div>
        </div>
        <ul class="nav-links">
          <li><a href="/" data-goto-page="">Home</a></li>
          <li><a href="/" data-goto-page="committee">Committee</a></li>
          <li><a href="/" data-goto-page="program">Call for Papers</a></li>
          <li><a href="/" data-goto-page="important-dates">Important Dates</a></li>
          <li><a href="/" data-goto-page="author-guidelines">Author Guidelines</a></li>
          <li><a href="/" data-goto-page="registration">Registration</a></li>
          <li class="nav-dropdown">
            <a href="/" data-goto-section="about-conference">About</a>
            <ul class="dropdown-menu">
              <li><a href="/" data-goto-section="about-conference">About Conference</a></li>
              <li><a href="/" data-goto-section="about-institute">About Institute</a></li>
              <li><a href="/" data-goto-section="about-city">About City</a></li>
            </ul>
          </li>
          <li><a href="/" data-goto-page="contact">Contact Us</a></li>
        </ul>
        <button class="hamburger" id="hamburger" aria-controls="mobile-nav" aria-expanded="false"
          aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
    <div id="mobile-nav">
      <ul>
        <li><a href="/" data-goto-page="">Home</a></li>
        <li><a href="/" data-goto-page="committee">Committee</a></li>
        <li><a href="/" data-goto-page="program">Call for Papers</a></li>
        <li><a href="/" data-goto-page="important-dates">Important Dates</a></li>
        <li><a href="/" data-goto-page="author-guidelines">Author Guidelines</a></li>
        <li><a href="/" data-goto-page="registration">Registration</a></li>
        <li class="mobile-nav-group">
          <span class="mobile-nav-label">About</span>
          <ul class="mobile-submenu">
            <li><a href="/" data-goto-section="about-conference">About Conference</a></li>
            <li><a href="/" data-goto-section="about-institute">About Institute</a></li>
            <li><a href="/" data-goto-section="about-city">About City</a></li>
          </ul>
        </li>
        <li><a href="/" data-goto-page="contact">Contact Us</a></li>
      </ul>
    </div>
    `;
}

function renderHome() {
    return `
      <!-- HERO -->
      <section id="home" class="section home-hero home-hero-restyled"
        style="padding-top:3.5rem;padding-bottom:3.5rem;text-align:center">
        <div class="hero-inner section-inner home-hero-layout">
          <div class="home-hero-title-row">
            <div class="home-hero-logo home-hero-logo-college"><img src="./assets/college_logo.png"
                alt="PRMITR College Logo" width="1024" height="1024"></div>
            <h1 class="hero-title">
              <span style="white-space:nowrap">2027 International Conference</span><br>
              <span style="white-space:nowrap">on</span><br>
              <span style="white-space:nowrap">Automation and Resilient</span><br>
              <span style="white-space:nowrap">Innovative Expert System</span>
            </h1>
            <div class="home-hero-logo home-hero-logo-ieee"><img src="./assets/IEEE_main_logo.jpeg" alt="IEEE"
                width="1280" height="209"></div>
          </div>
          <div class="home-hero-details">
            <p class="hero-subtitle">Hybrid Mode</p>
            <div class="hero-meta-item hero-record">IEEE Conference Record Number: #72646</div>
            <div class="home-hero-sponsor-line">
              <span>Technically Co-Sponsored by IEEE Maharashtra Section</span>
              <img src="./assets/IEEE_maha.png" alt="IEEE Maharashtra Section" width="144" height="37">
            </div>
            <div class="hero-meta-item hero-dates">
              <span class="hero-date-value">Date of Conference : 26–27 February 2027</span>
            </div>
            <p class="hero-sponsored hero-venue">Venue: Prof. Ram Meghe Institute of Technology and Research
              <span class="hero-venue-locality">(PRMITR, Badnera)</span><br>Badnera - Amravati 444701(MS)</p>
            <div class="hero-cta" style="margin-top:1.25rem">
              <a href="https://cmt3.research.microsoft.com/ICARIES2027" target="_blank" rel="noopener noreferrer" class="btn btn-blue">
                Submit Paper <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5"
                  viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <!-- <p>CMT ACKNOWLEDGMENT : The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p> -->
            </div>
          </div>
        </div>
      </section>

      <!-- CMT ACKNOWLEDGMENT -->

      <section id="about-cmt" class="section alt">
        <div class="section-inner">
          <!-- <div class="welcome-grid"> -->
          <div>
            <!-- <span class="sec-eyebrow">About the Conference</span> -->
            <h2 class="sec-title">ACKNOWLEDGMENT</h2>
            <div class="sec-bar"></div>
            <div class="welcome-text">
              <p>The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This
                service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud
                services as well as for software development and support.</p>
            </div>
          </div>
          <!-- </div> -->
        </div>
      </section>

      <!-- ABOUT CONFERENCE -->
      <section id="about-conference" class="section alt">
        <div class="section-inner">
          <div class="welcome-grid">
            <div>
              <span class="sec-eyebrow">About the Conference</span>
              <h2 class="sec-title">Welcome To ICARIES 2027</h2>
              <div class="sec-bar"></div>
              <div class="welcome-text">
                <p>The conference theme focuses on the development of advanced engineering and computing solutions that
                  enhance the reliability, robustness, and adaptability of modern technological infrastructures. As
                  technological systems become increasingly interconnected and complex, ensuring their ability to
                  withstand disruptions, maintain performance, and recover from failures has become a critical research
                  priority. The conference aims to explore innovative approaches in computing and processing, including
                  intelligent algorithms, artificial intelligence, machine learning, and scalable cloud and edge
                  computing architectures. It also addresses advancements in communication, networking, and
                  broadcasting, emphasizing secure, fault-tolerant, and resilient communication frameworks.
                  Additionally, the theme highlights progress in robotics and control systems, particularly in
                  autonomous systems and adaptive control. By bringing together researchers, academicians, and industry
                  professionals, the conference provides a platform to share emerging technologies and interdisciplinary
                  research that contribute to the design of reliable and resilient technological systems for future
                  applications.</p>
                <p>ICARIES provides a dynamic platform for researchers, academics, industry professionals, and
                  policymakers to exchange ideas, present their latest research findings, and explore innovative
                  solutions in the realms of intelligent computing and sustainable technology. This interdisciplinary
                  conference aims to foster collaboration and knowledge sharing across a range of specialized tracks.
                </p>
                <p>ICARIES 2027 is organized in hybrid mode, bolstering the global presence of the event. Delegates will
                  be able to decide whether to attend physically or virtually.</p>
              </div>
            </div>
            <div class="welcome-logo">
              <img src="./assets/icaries_logo.png" alt="ICARIES 2027" width="1148" height="918" loading="lazy"
                decoding="async">
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT INSTITUTE -->
      <section id="about-institute" class="section alt">
        <div class="section-inner">
          <div class="about-grid">
            <div class="reveal">
              <span class="sec-eyebrow">About the Institute</span>
              <h2 class="sec-title">Prof. Ram Meghe Institute of Technology and Research (PRMITR)</h2>
              <div class="sec-bar"></div>
              <div class="about-text">
                <p>The Vidarbha Youth Welfare Society's Prof. Ram Meghe Institute of Technology &amp; Research,
                  Badnera-Amravati (an Autonomous Institute and formerly well known as College of Engineering Badnera),
                  is a leading technological institute from Vidarbha. Established in the year 1983, the institute has a
                  prestigious standing amongst the topmost Technical Institutes of Maharashtra.</p>
                <p>PRMITR has a legacy of 43 years in terms of research collaboration and student engagement in multiple
                  UG courses like Computer Science and Engineering, Civil Engineering, Information Technology,
                  Electronics and Telecommunication Engineering, Artificial Intelligence and Data Science, Computer
                  Science and Engineering-IOT and Mechanical Engineering.</p>
                <p>The institute is approved by AICTE, New Delhi, accredited by National Assessment and Accreditation
                  Council (NAAC), Bangalore with Grade 'A+' and some of its UG programmes are accredited thrice (03) by
                  the National Board of Accreditation (NBA), New Delhi. The institute is recognized by Directorate of
                  Technical Education (DTE Mumbai), Govt. of Maharashtra and affiliated to Sant Gadge Baba Amravati
                  University, Amravati.</p>
              </div>
            </div>
            <div class="about-img reveal">
              <img src="./assets/prmitr.webp" alt="PRMITR Campus" width="600" height="600" loading="lazy"
                decoding="async">
            </div>
          </div>
        </div>
      </section>

      <!-- SPEAKERS -->
      <section id="speakers" class="section alt">
        <div class="section-inner">
          <div style="text-align:center">
            <span class="sec-eyebrow">Keynote Speakers</span>
            <h2 class="sec-title">Distinguished <span class="blue">Speakers</span></h2>
            <div class="sec-bar center"></div>
            <p class="sec-sub" style="margin:0 auto;text-align:center">Leading minds in Automation &amp; Intelligent Expert Systems</p>
          </div>
          <div class="speakers-grid">

            <div class="spk-card reveal">
              <div class="spk-photo"><svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"
                  viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg></div>
              <div class="spk-info">
                <span class="spk-badge">Keynote Speaker</span>
                <!-- <div class="spk-name"> </div> -->
              </div>
            </div>
            <div class="spk-card reveal">
              <div class="spk-photo"><svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"
                  viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg></div>
              <div class="spk-info">
                <span class="spk-badge">Keynote Speaker</span>
                <!-- <div class="spk-name">Coming Soon</div> -->
              </div>
            </div>
            <div class="spk-card reveal">
              <div class="spk-photo"><svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5"
                  viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg></div>
              <div class="spk-info">
                <span class="spk-badge">Keynote Speaker</span>
                <!-- <div class="spk-name">Coming Soon</div> -->
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ABOUT CITY / VENUE -->
      <section id="venue" class="section">
        <div class="section-inner">
          <div class="venue-copy">
            <div id="about-city">
              <span class="sec-eyebrow">The Host City</span>
              <h2 class="sec-title">About Amravati City</h2>
              <div class="sec-bar"></div>
              <div class="about-text">
                <p>Amravati, often called the cultural capital of Vidarbha, is a significant city in Maharashtra. It is
                  renowned for its historical temples, particularly the Ambadevi Temple, and serves as an educational
                  hub with several universities and colleges. The city holds a rich heritage and is a gateway to Melghat
                  Tiger Reserve, offering both urban amenities and proximity to natural beauty. Amravati is
                  strategically located and well-connected, making it an ideal venue for international intellectual
                  gatherings.</p>
              </div>

              <div class="city-highlights">
                <div class="city-highlight-card reveal">
                  <img src="./assets/shegao.jpg" alt="Historical Legacy" class="highlight-img" width="736" height="414"
                    loading="lazy" decoding="async">
                  <div class="highlight-info">
                    <h4>Historical Legacy</h4>
                    <p>Rich in history, known as the 'Indrapuri' with monuments dating back centuries.</p>
                  </div>
                </div>
                <div class="city-highlight-card reveal">
                  <img src="./assets/connectivity.png" alt="Connectivity" class="highlight-img" width="640" height="640"
                    loading="lazy" decoding="async">
                  <div class="highlight-info">
                    <h4>Connectivity</h4>
                    <p>Excellent rail (Badnera Junction) and road links, with Nagpur airport nearby.</p>
                  </div>
                </div>
                <div class="city-highlight-card reveal">
                  <img src="./assets/chikhaldara.png" alt="Pleasant Climate" class="highlight-img" width="640"
                    height="640" loading="lazy" decoding="async">
                  <div class="highlight-info">
                    <h4>Pleasant Climate</h4>
                    <p>June–July offers a wonderful monsoon chill and lush green landscapes.</p>
                  </div>
                </div>
              </div>

              <div class="city-gallery-title">Explore Beautiful <span class="blue">Amravati</span></div>
              <div class="city-gallery">
                <div class="city-card reveal" data-modal-src="./assets/ambadevi.jpg" data-modal-alt="Ambadevi Temple"
                  data-modal-width="600" data-modal-height="511">
                  <div class="city-thumb">
                    <img src="./assets/ambadevi.jpg" alt="Ambadevi Temple" width="600" height="511" loading="lazy"
                      decoding="async">
                    <div class="city-overlay"><span class="expand-icon">+</span></div>
                  </div>
                  <div class="city-info">
                    <h3>Ambadevi Temple</h3>
                    <p>A historic Hindu temple dedicated to Goddess Amba.</p>
                    <div class="city-actions">
                      <button type="button" class="map-btn map-btn-primary"
                        data-map-query="Ambadevi Temple, Amravati, Maharashtra">Map</button>
                    </div>
                  </div>
                </div>
                <div class="city-card reveal" data-modal-src="./assets/chikhaldara.png"
                  data-modal-alt="Chikhaldara Hill Station" data-modal-width="640" data-modal-height="640">
                  <div class="city-thumb">
                    <img src="./assets/chikhaldara.png" alt="Chikhaldara Hill Station" width="640" height="640"
                      loading="lazy" decoding="async">
                    <div class="city-overlay"><span class="expand-icon">+</span></div>
                  </div>
                  <div class="city-info">
                    <h3>Chikhaldara Hill Station</h3>
                    <p>Scenic hill station renowned as the only hill station in the Vidarbha region.</p>
                    <div class="city-actions">
                      <button type="button" class="map-btn map-btn-primary"
                        data-map-query="Chikhaldara Hill Station, Chikhaldara, Maharashtra">Map</button>
                    </div>
                  </div>
                </div>
                <div class="city-card reveal" data-modal-src="./assets/melghat.png"
                  data-modal-alt="Melghat Tiger Reserve" data-modal-width="800" data-modal-height="530">
                  <div class="city-thumb">
                    <img src="./assets/melghat.png" alt="Melghat Tiger Reserve" width="800" height="530" loading="lazy"
                      decoding="async">
                    <div class="city-overlay"><span class="expand-icon">+</span></div>
                  </div>
                  <div class="city-info">
                    <h3>Melghat Tiger Reserve</h3>
                    <p>Among the first nine tiger reserves of India notified in 1973 under Project Tiger.</p>
                    <div class="city-actions">
                      <button type="button" class="map-btn map-btn-primary"
                        data-map-query="Melghat Tiger Reserve, Amravati, Maharashtra">Map</button>
                    </div>
                  </div>
                </div>
                <div class="city-card reveal" data-modal-src="./assets/upperwardha.png"
                  data-modal-alt="Upper Wardha Dam" data-modal-width="1557" data-modal-height="849">
                  <div class="city-thumb">
                    <img src="./assets/upperwardha.png" alt="Upper Wardha Dam" width="1557" height="849" loading="lazy"
                      decoding="async">
                    <div class="city-overlay"><span class="expand-icon">+</span></div>
                  </div>
                  <div class="city-info">
                    <h3>Upper Wardha Dam</h3>
                    <p>Known as Nal Damayanti Sagar, a major earthfill gravity dam on the Wardha River.</p>
                    <div class="city-actions">
                      <button type="button" class="map-btn map-btn-primary"
                        data-map-query="Upper Wardha Dam, Amravati, Maharashtra">Map</button>
                    </div>
                  </div>
                </div>
                <div class="city-card reveal" data-modal-src="./assets/shegao.jpg"
                  data-modal-alt="Shri Gajanan Maharaj Mandir" data-modal-width="736" data-modal-height="414">
                  <div class="city-thumb">
                    <img src="./assets/shegao.jpg" alt="Shri Gajanan Maharaj Mandir" width="736" height="414"
                      loading="lazy" decoding="async">
                    <div class="city-overlay"><span class="expand-icon">+</span></div>
                  </div>
                  <div class="city-info">
                    <h3>Shri Gajanan Maharaj Mandir</h3>
                    <p>A highly revered pilgrimage site and Samadhi shrine of saint Shri Gajanan Maharaj.</p>
                    <div class="city-actions">
                      <button type="button" class="map-btn map-btn-primary"
                        data-map-query="Shri Gajanan Maharaj Mandir, Shegaon, Maharashtra">Map</button>
                    </div>
                  </div>
                </div>
                <div class="city-card reveal" data-modal-src="./assets/semadoh.jpg"
                  data-modal-alt="Semadoh Elephant Ride" data-modal-width="686" data-modal-height="386">
                  <div class="city-thumb">
                    <img src="./assets/semadoh.jpg" alt="Semadoh Elephant Ride" width="686" height="386" loading="lazy"
                      decoding="async">
                    <div class="city-overlay"><span class="expand-icon">+</span></div>
                  </div>
                  <div class="city-info">
                    <h3>Semadoh Elephant Ride</h3>
                    <p>Offers elephant safari rides to explore the dense Satpura forest and observe wildlife.</p>
                    <div class="city-actions">
                      <button type="button" class="map-btn map-btn-primary"
                        data-map-query="Semadoh, Melghat, Maharashtra">Map</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
}

function renderCommittee() {
    return `
      <section class="section section-tight">
        <div class="section-inner">
          <div class="section-heading">
            <span class="sec-eyebrow">ICARIES 2027</span>
            <h2 class="sec-title">Organizing Committee</h2>
            <div class="sec-bar"></div>
          </div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chief Patron</span>
              <div class="member-name">Dr. Nitin Dhande</div>
              <div class="member-org">President VYWS</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Patron</span>
              <div class="member-name">VYWS Management</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">General Chair</span>
              <div class="member-name">Dr. G. R. Bamnote</div>
              <div class="member-org">Principal</div>
              <div class="member-org">PRMITR Badnera</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">General Co-Chair</span>
              <div class="member-name">Dr. C. N. Deshmukh</div>
              <div class="member-org">PRMITR Badnera</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">General Co-Chair</span>
              <div class="member-name">Dr. M. A. Pund</div>
              <div class="member-org">PRMITR Badnera</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Organizing Secretary</span>
              <div class="member-name">Prof. A. U. Chaudhari</div>
              <div class="member-org">PRMITR Badnera</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Finance Chair</span>
              <div class="member-name">Dr. A. A. Chaudhari</div>
              <div class="member-org">PRMITR Badnera</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section alt section-tight">
        <div class="section-inner">
          <div class="section-heading">
            <span class="sec-eyebrow">ICARIES 2027</span>
            <h2 class="sec-title">Advisory and Planery Committee</h2>
            <div class="sec-bar"></div>
          </div>

          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role"> Chair</span>
              <div class="member-name">Dr. S. V. Pattalwar</div>
              <div class="member-org">PRMITR, Badnera
              </div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. C. R. Patil</div>
              <div class="member-org">PRMITR, Badnera
              </div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Major Dr. V. A. Narayana</div>
              <div class="member-org">Principal, CMR College of Engineering Technology, Kandlakoya, Hyderabad, Telangana
              </div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Shankar D. Nawale</div>
              <div class="member-org">Principal, SPSPM’s N. B. Nawale Sinhgad College of Engineering, Kegaon, Solapur
              </div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Sanjay T. Gandhe</div>
              <div class="member-org">Principal, PICT Pune</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Nishant Saurabh</div>
              <div class="member-org">Assistant Professor, Utrecht University, The Netherlands</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Vikram Patil</div>
              <div class="member-org">Principal, Faculty of Engineering, Yashoda Technical Campus, Satara</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. S. D. Shirbahadurkar</div>
              <div class="member-org">Principal, Dr. D. Y. Patil Technical Campus (DYPTC), Varale-Talegaon, Pune</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Pon Harshavardhanan</div>
              <div class="member-org">Professor &amp; Dean, VIT Bhopal</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Manoj B Chandak</div>
              <div class="member-org">Principal &amp; IEEE Member, RKEC, Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Ashish Mahalle</div>
              <div class="member-org">Principal, Govt. College of Engineering, Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Atul Borde</div>
              <div class="member-org">Principal, Govt. Polytechnic, Amravati</div>
            </div>

            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. P. S. Deshpande</div>
              <div class="member-org">Professor, VNIT, Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. U. A. Deshpande</div>
              <div class="member-org">Professor, VNIT, Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Mr. Anshuman Pund</div>
              <div class="member-org">Chief Security Officer, SBM Bank, India</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Sonali Patil</div>
              <div class="member-org">Professor &amp; Head, Senior IEEE Member, PCCOE, Pune</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Mr. Narendra Kale</div>
              <div class="member-org">Director, NN Technology Solutions, Navi Mumbai</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Sachin Sakhare</div>
              <div class="member-org">Professor &amp; Head, MMCOE</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Nilesh N. Thakur</div>
              <div class="member-org">Professor, YCCE, Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Mrs. A. V. Malviya</div>
              <div class="member-org">IEEE Senior Member, Associate Professor, SIPNA COE, Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. P. R. Deshmukh</div>
              <div class="member-org">IEEE Senior Member, Associate Professor, Govt COE, Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. S. B. Somani</div>
              <div class="member-org">IEEE Member, Principal, SSGMCE, Shegaon</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Sandeep Kumar</div>
              <div class="member-org">IEEE Senior Member, Deputy Director &amp; Professor, SIT, Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Roshan Bodile</div>
              <div class="member-org">Assistant Prof, NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. K. T. V. Reddy</div>
              <div class="member-org">IEEE Senior Member, Dean, Faculty of Engineering and Technology (FEAT), DMIHER,
                Wardha</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Smita Nirkhi Singh</div>
              <div class="member-org">IEEE Member, SIT Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Mr. Prasanna Ganorkar</div>
              <div class="member-org">Director, Pricewaterhouse Coopers Services LLP.</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Shashank Vekhande</div>
              <div class="member-org">Application Development Engineer, Allegro Microsystem, Pune</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Anand Khandare</div>
              <div class="member-org">Professor &amp; Associate Dean (Planning &amp; Operations-Digital Resources),
                Department of Artificial Intelligence &amp; Data Science</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Ajay Thakare</div>
              <div class="member-org">Principal, PRMCEAM, Badnera</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Gnyana Panigrahi</div>
              <div class="member-org">HOD, Robotics &amp; Automation, Faculty of Engineering and Technology (FET), Sri
                Sri University, Cuttack, Odisha, India</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Mr. Pravin Gaurkhede</div>
              <div class="member-org">Senior Project Manager AI, Global Consulting Trust, Australia</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Sandeep Ushkewar</div>
              <div class="member-org">IEEE Member, Assistant Professor (Senior Scale), STME, SVKM NMIMS Global
                University Dhule</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Tausif Diwan</div>
              <div class="member-org">Associate Dean, IIIT Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Sathans</div>
              <div class="member-org">Professor, Electrical Engineering, NIT Kurukshetra</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Yash Paul Singh Berwal</div>
              <div class="member-org">Director, ECE India, Technical Eduction Haryana</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Sunil Luthra</div>
              <div class="member-org">Director, Department of Mechanical Engineering, AICTE, New Delhi</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Mr. Mr. Hemant Rajkule</div>
              <div class="member-org">CEO, ASPEN Systems &amp; Software, Pune</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Dhabu Meera</div>
              <div class="member-org">VNIT, Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Shital Raut</div>
              <div class="member-org">VNIT, Nagpur</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. Mohd. Atique</div>
              <div class="member-org">Dept of CSE, SGBAU, Amravati</div>
            </div>

        </div>
      </section>

      <section class="section alt section-tight">
        <div class="section-inner">
          <div class="section-heading">
            <span class="sec-eyebrow">ICARIES 2027</span>
            <h2 class="sec-title">Technical and Academics Committee</h2>
            <div class="sec-bar"></div>
          </div>

          <div class="group-label">Technical Committee</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name"> Dr. M. S. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name"> Dr. R. R. Karwa</div>
              <div class="member-org">PRMITR, Badnera</div>
            </div>

            <div class="member-card reveal">

              <div class="member-name">Dr. Roshan Bodile</div>
              <div class="member-org">NIT Jalandhar </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Sunil Wankhade</div>
              <div class="member-org">Head &amp; Professor, Dept of IT, Rajiv Gandhi Institute of Technology, Mumbai
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Ankush Hutke</div>
              <div class="member-org">Assistant professor, Dept of IT, Rajiv Gandhi Institute of Technology, Mumbai
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Roshan Halmare</div>
              <div class="member-org">Lead Database Administrator, Global Payments, India </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Shyam Sharma</div>
              <div class="member-org">Technical Lead, Wipro Technologies, India </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name"> Dr. Amruta Deshmukh</div>
              <div class="member-org"> Ciena Corporation, USA </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Saurabh Deshmukh</div>
              <div class="member-org">Senior Data Architect, Cognizant Worldwide, UK </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name"> Mr. Apoorv Sawale</div>
              <div class="member-org"> Sr ETL Developer, ARAG Legal Insurance, USA </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Mangesh Pimprikar</div>
              <div class="member-org">Technical Manager/ Architect, Cognizant Technology, USA</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Vinay Purushe</div>
              <div class="member-org">Consultant, TCS, USA</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Ajinkya P. Chatur</div>
              <div class="member-org">Senior Software Developer, U.S. Bancorp, USA</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Ms. Pooja Rajurkar</div>
              <div class="member-org">Enterprisewide Manager, Siemens Healthineers, USA</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Hrishav Kumar</div>
              <div class="member-org">SAP Operations Technical Team Lead, C&amp;A, Germany</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Nilesh Sarode</div>
              <div class="member-org">Software Engineer, United Health Group, Ireland</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Ms. Amruta Chorey</div>
              <div class="member-org">Business Analyst, Blue Cross Blue Shield, USA</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Ms. Rashi Dhande</div>
              <div class="member-org">Software Engineer, Progyny, USA</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Rohit Singh</div>
              <div class="member-org">NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Kundan Kumar</div>
              <div class="member-org">NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Aijaz Mehdi Zaidi</div>
              <div class="member-org">NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Monali Gulhane</div>
              <div class="member-org">IEEE Senior Member, Assistant Professor, Symbiosis Institute Of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Sachchidanand</div>
              <div class="member-org">NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. V Narasimha Nayak</div>
              <div class="member-org">NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Kappala Vinod Kiran</div>
              <div class="member-org">NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Somesula Manoj Kumar</div>
              <div class="member-org">NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Banalaxmi Brahma</div>
              <div class="member-org">NIT Jalandhar</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Jailsingh Bhookya</div>
              <div class="member-org">NIT Calicut</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Gautam Borkar</div>
              <div class="member-org">Professor, Ramrao Adik Institute of Technology, Nerul Navi Mumbai</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Shivaji Lahane</div>
              <div class="member-org">GES R.H. Sapat COE, Management Studies, Nashik</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Hemant Rajkule</div>
              <div class="member-org">CEO, ASPEN Systems &amp; Software, Pune</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Ms. Sapana Kawle</div>
              <div class="member-org">Data Analyst, Nvidia, India</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Ankush D. Sawarkar</div>
              <div class="member-org">Assistant Professor, SGGSIE&amp;T, Nanded, India</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Prof. R. R. Papalkar</div>
              <div class="member-org">Assistant Professor, VIT Pune</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Shreyash R. Hole</div>
              <div class="member-org">Assistant Professor, SIT Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Pratik B Raut</div>
              <div class="member-org">Sr. Development Engg. Manager, Asimily India Pvt Ltd., India</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Sheetal S. Dhande</div>
              <div class="member-org">Assistant Professor, Sipna Engg COE, Amravati</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Yogesh Thakare</div>
              <div class="member-org">SRCOEM, Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Jayendra Jadhav</div>
              <div class="member-org">Assistant Professor, Vishwakarma University</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Prof. (Dr.) Satish N. Gujar</div>
              <div class="member-org">Professor and Head of MTech, MSc, MCA Program, JSPM University Pune, India</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Sandeep S. Deshmukh</div>
              <div class="member-org">Professor, Dept of Mechanical Engineering, BITS Pilani, Hyderabad Campus</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Shyamkumar Kalpande</div>
              <div class="member-org">Professor &amp; Head, Department of Mechanical Engineering, MET Bhujbal Knowledge
                City Nashik</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Vishal Sulakhe</div>
              <div class="member-org">HOD Mechanical, Sandeep University Nashik</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Arun Thakare</div>
              <div class="member-org">Associate Professor, GH Raisoni College of Engineering &amp; Management, Pune
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Sunil Dambhare</div>
              <div class="member-org">Director IQAC &amp; Professor, Department of Mechanical Engineering, DY Patil
                International University Akurdi, Pune</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Sanjay Pohekar</div>
              <div class="member-org">Professor &amp; Head, Research Programs, Symbiosis Center of Research Innovation,
                Pune</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Avinash D Gawande</div>
              <div class="member-org">Professor, SIPNA COE, Amravati</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Pradnya Borkar</div>
              <div class="member-org">Associate Professor, Symbiosis Institute of Technology, Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Poorva Agrawal</div>
              <div class="member-org">Associate Professor, MPSTME, SVKM'S NMIMS, India</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Amol P. Bhopale</div>
              <div class="member-org">Assistant Professor, IIIT Nagpur, India</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Prof. V. K. Bhangdiya</div>
              <div class="member-org">IEEE Member, Assistant Professor, SSGMCE, Shegaon</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Pratik Agrawal</div>
              <div class="member-org">IEEE Senior Member, Assistant Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Monali Gulhane</div>
              <div class="member-org">IEEE Senior Member, Assistant Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Pradnya Borkar</div>
              <div class="member-org">IEEE Senior Member, Associate Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Piyush Chavhan</div>
              <div class="member-org">IEEE Senior Member, Associate Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Bhupesh Dewangan</div>
              <div class="member-org">IEEE Senior Member, Associate Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Gaurav Londhe</div>
              <div class="member-org">IEEE Senior Member, Associate Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Akhil Gupta</div>
              <div class="member-org">IEEE Senior Member, Associate Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Mohan Kumar</div>
              <div class="member-org">IEEE Senior Member, Professor, Symbiosis Institute of Technology Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Priya Dasarwar</div>
              <div class="member-org">Assistant Professor, IEEE Senior Member, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Shreyash Hole</div>
              <div class="member-org">IEEE Senior Member, Assistant Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Nikhil Mangrulkar</div>
              <div class="member-org">IEEE Senior Member, Assistant Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Harshala Shingane</div>
              <div class="member-org">IEEE Senior Member, Assistant Professor, Symbiosis Institute of Technology Nagpur
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Mona Mulchandani</div>
              <div class="member-org">IEEE Senior Member, Symbiosis Institute of Technology Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Praful Pardhi</div>
              <div class="member-org">IEEE Senior Member, Ramdev Baba University Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Sandeep Uskewar</div>
              <div class="member-org">IEEE Member, SVKM's Institute of Technology, Dhule</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Chetan Puri</div>
              <div class="member-org">HoD CSE, IEEE Member, Faculty of Engineering and Technology, Datta Meghe Institute
                of Higher Education and Research (DU)</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Aniket Shahade</div>
              <div class="member-org">IEEE Senior Member, Associate Professor, Symbiosis Institute of Technology, Pune
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Disha Sushant Wankhede</div>
              <div class="member-org">Assistant Professor, Vishwakarma Institute of Technology Pune</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Ms. Pranita P. Raut</div>
              <div class="member-org">Assistant Vice President, CITI India Pvt Ltd</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Shital Raut</div>
              <div class="member-org">Professor, VNIT, Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. A. S. Tiwari</div>
              <div class="member-org">VNIT, Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Sagar Badhiye</div>
              <div class="member-org">IEEE Senior Member, HOD (CSE), Symbiosis Institute of Technology Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Jaya Chandwani</div>
              <div class="member-org">Assistant Professor, Cambridge Institute of Technology, Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Arvind Shivappa Kapse</div>
              <div class="member-org">Professor, School of CSE, REVA University, Bengaluru</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Farooque Azam</div>
              <div class="member-org">Associate Professor, School of Computer Science and Engineering, REVA University
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Vasundhara Rathod</div>
              <div class="member-org">Assistant Professor, Indian Institute of Information Technology, Nagpur</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Aditya Shashtri</div>
              <div class="member-org">Assistant Professor, Department of CSE, School of Technology, PDEU</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Kunal Mhapsekar</div>
              <div class="member-org">Senior Mechanical Engineer - Loads and Dynamics, Zipline International Inc.USA
              </div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Palash Sukhdeo Deulkar</div>
              <div class="member-org">Senior Engineer, LTM, USA</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Aniket Tondare</div>
              <div class="member-org">Director, ECE India, ECE India Pvt. Ltd. Pune</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Mr. Vinayak Dahore</div>
              <div class="member-org">Senior IoT Data Engineer, Vivicta Pvt. Ltd. Pune (Microsoft Frontier Firm)</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Preeti A. Khodke</div>
              <div class="member-org">HOD, Dept. of IT, PRMCEAM, Badnera</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. Lovely S. Mutneja</div>
              <div class="member-org">HOD, Dept. of CSE(DS), PRMCEAM, Badnera</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. D. G. Harkut</div>
              <div class="member-org">HOD, Dept. of CSE, PRMCEAM, Badnera</div>
            </div>
            <div class="member-card reveal">

              <div class="member-name">Dr. A. V. Mohod</div>
              <div class="member-org">HOD, Dept. of Electrical Engineering</div>
            </div>
          </div>
          <div class="divider"></div>

          <div class="group-label">Plagiarism &amp; AI Checking Committee</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. Pranjali Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. S. M. Iqbal</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Co-Chair</span>
              <div class="member-name">Prof. Nikita Band</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Co-Chair</span>
              <div class="member-name">Prof. P. N. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Co-Chair</span>
              <div class="member-name">Dr. N. S. Dandge</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Co-Chair</span>
              <div class="member-name">Prof. S. V. Kalbande</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Co-Chair</span>
              <div class="member-name">Prof. S. G. Taley</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>


      </section>
      <section class="section section-tight">
        <div class="section-inner">
          <div class="section-heading">
            <span class="sec-eyebrow">ICARIES 2027</span>
            <h2 class="sec-title">Track Committee</h2>
            <div class="sec-bar"></div>
          </div>
          <div class="group-label">Computing and Processing</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. Anup Burange</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Co-Chair</span>
              <div class="member-name">Dr. Umesh Nikam</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Co-Chair</span>
              <div class="member-name">Dr. Pranita Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. A. R. Pathare</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. Preeti Lavhale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Artificial Intelligence and Machine Learning</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. Y. A. Dhumale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. R. A. Kale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Memeber</span>
              <div class="member-name">Prof. V. M. Sarad</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Memeber</span>
              <div class="member-name">Dr. S. A. Chorey</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Memeber</span>
              <div class="member-name">Dr. Ms. Preeti V. Dudhe</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>


          </div>
          <div class="divider"></div>
          <div class="group-label">Data Science and Analytics</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. S. P. Ingale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. P. S. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Memeber</span>
              <div class="member-name">Prof N. S. Kachane</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. P. M. Dhundale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>

          </div>
          <div class="divider"></div>
          <div class="group-label">Communication and Networking</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. Karan Belsare</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. S. G. Pundkar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. N. S. Thakare</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. N. A. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. S. A. Nirmal</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>

          </div>
          <div class="divider"></div>
          <div class="group-label">Robotics and Automation</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. R. R. Kolhekar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. A. S. Utane</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Memeber</span>
              <div class="member-name">Dr. Saurabh Paropte</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. A. A. Jiwarkar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. P. B. Jawanjal</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>


          </div>
          <div class="divider"></div>

          <div class="group-label">Publication Committee</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. S. J. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role"> Co-Chair</span>
              <div class="member-name">Prof. A. U. Chaudhari</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role"> Co-Chair</span>
              <div class="member-name">Dr. K. R. Hole</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
          </div>

        </div>
      </section>

      <section class="section section-tight">
        <div class="section-inner">
          <div class="section-heading">
            <span class="sec-eyebrow">ICARIES 2027</span>
            <h2 class="sec-title">Operations and Logistics Committee</h2>
            <div class="sec-bar"></div>
          </div>

          <div class="group-label">Registration Chair</div>


          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. Ms. K. H. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>

            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. R. A. Wakode</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. R. S. Barde</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. S. P. Mahindre</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Hall Arrangement</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. R. A. Tiwari</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. C. R. Bundele</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. N. A. Dakhore</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Food Arrangement and Transportation Chair</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Prof. T. P. Adhau</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. A. P. Thakare</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. A. O. Sable</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. P. R. Nerkar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Session Management</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. R. A. Meshram</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>

          </div>
          <div class="divider"></div>
          <div class="group-label">Hospitality Committee</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. N. N. Khalsa</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. D. P. Paraskar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>

            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. H. D. Kale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Publicity Committee</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. A. G. Kadu</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. A. R. Mune</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Prof. C. W. Rawarkar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Prof. H. D. Misalkar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>  
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. S. N. Sarda</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. A. I. Rokade</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Prof. A. S. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Prof. S. S. Dhok</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. G. J. Sawale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Prof. M. V. Tiwari</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. N. S. Wadhe</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Prof. S. S. Bhange</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. P. A. Chorey</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Dr. A. S. Sakhare</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Members</span>
              <div class="member-name">Prof. P. G. Kale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Website and CMT Handling Committee</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">CMT Chair</span>
              <div class="member-name">Dr. S. S. Dandge</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Website Chair</span>
              <div class="member-name">Dr. A. A. Gulhane</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. N. M. Yawale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. A. G. Mahalle</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. Ms. A. S. Chaudhari</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. K. P. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. S. A. Nirmal</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. A. B. Pardikar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Design and Printing Committee</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. S. D. Thakur</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. J. P. Morey</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Inauguration &amp; Stage Arrangement Committee</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Dr. N. V. Kadam</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Co-Chair</span>
              <div class="member-name">Dr. S. S. Tantarpale</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. Ms. K. H. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. N. V. Tiwari</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. Ms. M. A. Deshmukh</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. Ms. R. P. Sawarkar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. Ms. N. K. Chede</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Press Notes Preparation &amp; Photography Chair</div>
          <div class="members-grid">

            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Prof. V. N. Maldhure</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Prof. R. P. Fuke</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Minutes of Meetings and Documentation</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Prof. P. V. Bobade</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
            <div class="member-card reveal">
              <span class="member-role">Member</span>
              <div class="member-name">Dr. H. D. Patil</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="group-label">Electrical Backup</div>
          <div class="members-grid">
            <div class="member-card reveal">
              <span class="member-role">Chair</span>
              <div class="member-name">Prof. Amol Dhanbhar</div>
              <div class="member-org">PRMITR, Badnera-Amravati</div>
            </div>
          </div>

        </div>
      </section>
  </div>
  </div>
  </section>


  `;
}

function renderImportantDates() {
    return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">ICARIES 2027</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Important Dates</h1>
        <div class="sec-bar"></div>
        <p style="color:rgba(255,255,255,.5);font-size:.95rem;margin-top:.4rem">Keep these key conference milestones in your calendar.</p>
      </div>
    </div>
    <section class="section">
      <div class="section-inner" style="max-width:900px">
        <div class="dtable-title">Conference Schedule</div>
        <table class="dtable"><tbody>
    <tr><td>Conference Website &amp; CFP Launch</td><td>15 September 2026</td></tr>
    <tr><td>Paper Submission Deadline</td><td>30 November 2026</td></tr>
    <tr><td>Acceptance / Rejection Notification</td><td>31 December 2026</td></tr>
    <tr><td>Registration Deadline</td><td>10 January 2027</td></tr>
    <tr><td>Camera-Ready Paper Submission</td><td>31 January 2027</td></tr>
    <tr><td>Date of Conference</td><td>26–27 February 2027</td></tr></tbody></table>
      </div>
    </section>`;
}

function renderRegistration() {
    return `
      <div class="subpage-hero">
        <div class="subpage-hero-inner subpage-hero-inner-centered">
          <span class="sec-eyebrow">ICARIES 2027</span>
          <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Registration</h1>
          <div class="sec-bar"></div>
          <p style="color:rgba(255,255,255,.5);font-size:.9rem;margin-top:.3rem">Note : The conference is in Hybrid Mode
            (Online/Offline), however conference officials motivate the participants to take part in the conference in
            PHYSICAL MODE in order to utilize the fullest benefits of conference participation.</p>
        </div>
      </div>
      <section class="section registration-section">
        <div class="section-inner registration-wrap">
          <div class="registration-notes">
            <p><strong>Mandatory Registration:</strong> At least one author of an accepted paper must register for the
              conference for the paper to be included in the conference proceedings.</p>
            <p><strong>Separate Registration for Multiple Papers:</strong> If an author has multiple accepted papers,
              each paper must be registered separately.</p>
            <p>The author can present a maximum of <strong>three papers</strong>. However, each paper needs to be
              registered separately.</p>
            <p><strong>Tax:</strong> The registrants must bear payment gateway charges and applicable taxes (GST 18%) or
              levies, if any.</p>
            <p><strong>ID Proof:</strong> IEEE members must upload a valid IEEE membership card during the online
              registration.</p>
            <p><strong>No Show Consequence:</strong> Papers accepted by the Technical Program Committee but not
              presented (either online or in person) will not be submitted to IEEE Xplore. All conference attendees are
              required to register.</p>
            <p><strong>Non-Refundable Fees:</strong> Once the registration fees are paid, they are non-refundable under
              any circumstances.</p>
          </div>
          <div class="registration-fees">
            <h2>Registration Fees</h2>
            <div class="registration-table-wrap">
              <table class="registration-table">
                <thead>
                  <tr>
                    <th>Sr. No.</th>
                    <th>Category of Registration</th>
                    <th>Total Registration Fees</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>IEEE Member</td>
                    <td>₹ 8,500 + 18% GST</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Non-IEEE Member</td>
                    <td>₹ 9,500 + 18% GST</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Foreign Authors</td>
                    <td>$150 + 18% GST</td>
                  </tr>
                </tbody>
              </table>
              <p style="margin-top:1.25rem;color:var(--muted);font-size:.9rem">Late registration fee: ₹1,000 additional
                per participant.</p>
            </div>
          </div>
          <div class="registration-fees">
            <h2>Where to Submit</h2>
            <p>Submit your paper via CMT: <a href="https://cmt3.research.microsoft.com/ICARIES2027" target="_blank"
                rel="noopener noreferrer">https://cmt3.research.microsoft.com/ICARIES2027</a></p>
            <h2 style="margin-top:1.5rem">How to Submit</h2>
            <p>You need to have a <strong>CMT</strong> account before you can submit your paper.</p>
            <ul style="margin-top:.75rem;padding-left:1.25rem;line-height:1.8">
              <li>Here is a link to create the account: <a
                  href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html" target="_blank"
                  rel="noopener noreferrer">https://cmt3.research.microsoft.com/docs/help/general/account-creation.html</a>
              </li>
              <li>Here is a link for authors on how to submit a paper: <a
                  href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                  target="_blank"
                  rel="noopener noreferrer">https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html</a>
              </li>
            </ul>
          </div>
          <div class="registration-fees registration-bank-details">
            <h2>Banking Details for Registration</h2>
            <p><strong>Please mention your Paper ID / Registration ID in the 'Reference/Purpose' field of the
                transaction.</strong></p>
            <div class="registration-table-wrap">
              <table class="registration-table">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Account Name</td>
                    <td>PROF. RAM MEGHE INSTITUTE OF TECHNOLOGY & RESEARCH BADNERA</td>
                  </tr>
                  <tr>
                    <td>Account Number</td>
                    <td>10580418884</td>
                  </tr>
                  <tr>
                    <td>IFSC Code</td>
                    <td>SBIN0004884</td>
                  </tr>
                  <tr>
                    <td>Name of the Bank</td>
                    <td>State Bank Of India,(04884)-BADNERA NANDANWAN CHANDNI CHOWK,BADNERA, AMRAVATI 444701</td>
                  </tr>
                  <tr>
                    <td>Type of Account</td>
                    <td>Saving Account</td>
                  </tr>
                  <tr>
                    <td>MICR No</td>
                    <td>444002004</td>
                  </tr>
                  <!-- <tr>
                    <td>SWIFT Code (for foreign authors)</td>
                    <td>SWIFT_CODE</td>
                  </tr> -->
                </tbody>
              </table>
            </div>
            <p>After completing the transfer, please email the payment/transaction proof (in PDF format) along with your
              Paper ID to <a href="mailto:aries@mitra.ac.in">aries@mitra.ac.in</a>.</p>
          </div>
          <div class="hero-cta" style="margin:1.5rem 0">
            <a href="https://cmt3.research.microsoft.com/ICARIES2027" target="_blank" rel="noopener noreferrer" class="btn btn-blue">
              Submit Paper <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
            <div class="cmt-ack-box">
              <p>CMT ACKNOWLEDGMENT : The Microsoft CMT service was used for managing the peer-reviewing process for this
                conference. This service was provided for free by Microsoft and they bore all expenses, including costs
                for Azure cloud services as well as for software development and support.</p>
            </div>
          </div>
        </div>
      </section>
    `;
}

function renderAuthorGuidelines() {
    return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">For Researchers</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Author Guidelines</h1>
        <div class="sec-bar"></div>
        <p style="color:rgba(255,255,255,.5);font-size:.9rem;margin-top:.3rem">Please follow these instructions carefully to ensure your submission is processed correctly.</p>
      </div>
    </div>
    <div class="section">
      <div class="authors-wrap">
        <ul class="g-list">
          
          <li class="g-item">
            <div class="g-num">1</div>
            <div class="g-text">The paper should be original and should not have been published anywhere else or be under review for any journal or other conferences.</div>
          </li>
          <li class="g-item">
            <div class="g-num">2</div>
            <div class="g-text">A paper should not have more than Five authors.</div>
          </li>
          <li class="g-item">
            <div class="g-num">3</div>
            <div class="g-text">The author can submit a maximum of 03 papers. However, each paper needs to be registered separately.</div>
          </li>
          <li class="g-item">
            <div class="g-num">4</div>
            <div class="g-text">Page limit is of maximum 06 pages. You may submit a paper of up to 8 pages with an additional cost of ₹500 per extra page.</div>
          </li>
          <li class="g-item">
            <div class="g-num">5</div>
            <div class="g-text">IEEE members must upload a valid IEEE membership card during the online registration.</div>
          </li>
          <li class="g-item">
            <div class="g-num">6</div>
            <div class="g-text">Tables, figures and images should have appropriate captions and be of good quality (dpi = 400). Each of these items must be cited inline in the main text of the manuscript.</div>
          </li>
          <li class="g-item">
            <div class="g-num">7</div>
            <div class="g-text">The full article must be submitted as a MS Word file in DOC or DOCX format with proper title.</div>
          </li>
          <li class="g-item">
            <div class="g-num">8</div>
            <div class="g-text">Before submitting your paper, please ensure that the English used is clear, concise and coherent. This is especially important if English is not your first language.</div>
          </li>
          <li class="g-item">
            <div class="g-num">9</div>
            <div class="g-text">All submissions with less than 15% similarity (Plagiarism) and the AI-generated text must be 0% or * will only be eligible for review, with the quality and scope of the work being taken into consideration.</div>
          </li>
          <li class="g-item">
            <div class="g-num">10</div>
            <div class="g-text">Once the full paper is accepted, the author(s) will be requested to submit the copyright transfer form.</div>
          </li>
          <li class="g-item">
            <div class="g-num">11</div>
            <div class="g-text">Any paper that does not follow the guidelines may not be considered for publication in the conference proceedings.</div>
          </li>
          <li class="g-item">
            <div class="g-num">12</div>
            <div class="g-text">All the accepted papers must be revised with due comments and suggestions given by reviewers before the deadlines.</div>
          </li>
          <li class="g-item">
            <div class="g-num">13</div>
            <div class="g-text">The Publisher maintains the right to exclude any papers from the work if they are deemed unsuitable for publication.</div>
          </li>
          <li class="g-item">
            <div class="g-num">14</div>
            <div class="g-text">Authors must enter complete author and co-author information in the CMT submission form.</div>
          </li>
          <li class="g-item">
            <div class="g-num">15</div>
            <div class="g-text">The manuscript PDF uploaded for review must be anonymized and must not contain author names, affiliations, email addresses, acknowledgments, or other information that directly reveals author identity.</div>
          </li>
        </ul>

        <div class="notes-box">
          <div class="notes-title"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> Important Notes</div>
          <ul class="notes-list">
            <li class="">At least one author has to register for the paper to be included in the proceedings.</li><li class="">Only registered authors will be allowed to present and receive certificates.</li><li class="">Keep a copy of your transaction ID and bank receipt to track your registration.</li><li class="hl">The committee is not responsible for financial losses caused by improper transactions.</li>
          </ul>
        </div>

        <div class="submit-box">
          <div class="submit-title">Submit Research Paper</div>
          <p class="submit-desc">Authors are invited to submit their original and unpublished research papers in the prescribed format. All submissions will undergo a peer-review process.</p>
          <ul class="submit-list">
            <li>Submit papers in DOC/DOCX format</li><li>Maximum 6 pages (extra pages with additional charges)</li><li>Ensure plagiarism is below 15%</li><li>Follow all author guidelines before submission</li>
          </ul>
          <div class="submit-btns">
            <a href="https://cmt3.research.microsoft.com/ICARIES2027" target="_blank" rel="noopener noreferrer" class="btn btn-blue">Submit Paper <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
            <button type="button" class="btn btn-outline-blue" onclick="window.open('https://www.ieee.org/conferences/publishing/templates','_blank','noopener,noreferrer')">Download Template</button>
          </div>
        </div>
        <div class="cmt-ack-box">
          <p>CMT ACKNOWLEDGMENT : The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
        </div>
      </div>
    </div>`;
}

function renderProgram() {
    return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">Call for Papers</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Program Tracks</h1>
        <div class="sec-bar"></div>
        <p class="program-intro" style="color:rgba(255,255,255,.5);font-size:.95rem">The ICARIES 2027 program is organized into five specialized technical tracks, with curated topic clusters for submissions and sessions.</p>
      </div>
    </div>
    <section class="section">
      <div class="section-inner">
        <div class="program-tracks-grid">
    <article class="program-track-card reveal">
      <h3 class="track-title">Track 1: Computing and Processing</h3>
      <ul class="track-topics">
        <li class="track-topic">Computer Architecture and Organization</li><li class="track-topic">Parallel, Distributed, and High-Performance Computing</li><li class="track-topic">Cloud, Edge, and Fog Computing</li><li class="track-topic">Operating Systems and Middleware</li><li class="track-topic">Embedded and Real-Time Systems</li><li class="track-topic">Green and Energy-Efficient Computing</li><li class="track-topic">Quantum Computing and Simulators</li><li class="track-topic">Compiler Design and Optimization</li><li class="track-topic">System and Software Security</li><li class="track-topic">Digital Signal Processing (DSP)</li><li class="track-topic">Image and Video Processing</li><li class="track-topic">Computer Vision and Pattern Recognition</li>
        <li class="track-scope-note">The scope of the conference includes, but is not limited to, the topics listed above.</li>
      </ul>
    </article>
    <article class="program-track-card reveal">
      <h3 class="track-title">Track 2: Artificial Intelligence and Machine Learning</h3>
      <ul class="track-topics">
        <li class="track-topic">Machine Learning Algorithms and Theory</li><li class="track-topic">Deep Learning and Neural Networks</li><li class="track-topic">Natural Language Processing</li><li class="track-topic">Computer Vision and Pattern Recognition</li><li class="track-topic">Reinforcement and Multi-Agent Learning</li><li class="track-topic">Generative AI and Foundation Models</li><li class="track-topic">Explainable and Trustworthy AI</li><li class="track-topic">AI for Cyber Security</li><li class="track-topic">Adversarial Machine Learning and AI Security</li>
        <li class="track-scope-note">The scope of the conference includes, but is not limited to, the topics listed above.</li>
      </ul>
    </article>
    <article class="program-track-card reveal">
      <h3 class="track-title">Track 3: Data Science and Analytics</h3>
      <ul class="track-topics">
        <li class="track-topic">Big Data Analytics and Platforms</li><li class="track-topic">Data Mining and Knowledge Discovery</li><li class="track-topic">Statistical Modeling and Predictive Analytics</li><li class="track-topic">Time-Series and Streaming Analytics</li><li class="track-topic">Data Visualization and Visual Analytics</li><li class="track-topic">Business Intelligence and Decision Support</li><li class="track-topic">Graph Analytics and Network Science</li><li class="track-topic">Data Engineering and Data Pipelines</li><li class="track-topic">Data Privacy and Secure Analytics</li><li class="track-topic">Privacy-Preserving Data Mining</li>
        <li class="track-scope-note">The scope of the conference includes, but is not limited to, the topics listed above.</li>
      </ul>
    </article>
    <article class="program-track-card reveal">
      <h3 class="track-title">Track 4: Communication and Networking</h3>
      <ul class="track-topics">
        <li class="track-topic">Wireless and Mobile Communication (5G/6G)</li><li class="track-topic">Internet of Things (IoT) and Sensor Networks</li><li class="track-topic">Computer Networks and Protocol Development</li><li class="track-topic">Software-Defined Networking (SDN) and NFV</li><li class="track-topic">Network Performance, QoS, and Traffic Engineering</li><li class="track-topic">Vehicular, Ad Hoc, and Mesh Networks</li><li class="track-topic">Network and Communication Security</li>
        <li class="track-scope-note">The scope of the conference includes, but is not limited to, the topics listed above.</li>
      </ul>
    </article>
    <article class="program-track-card reveal">
      <h3 class="track-title">Track 5: Robotics and Automation</h3>
      <ul class="track-topics">
        <li class="track-topic">Robotics Systems and Architectures</li><li class="track-topic">Control Systems and Automation</li><li class="track-topic">Autonomous Robots and Vehicles</li><li class="track-topic">Industrial Robotics and Smart Manufacturing</li><li class="track-topic">Swarm and Multi-Robot Systems</li><li class="track-topic">Robot Perception, Localization, and SLAM</li><li class="track-topic">Cyber-Physical Systems Security</li><li class="track-topic">Secure and Safe Autonomous Systems</li>
        <li class="track-scope-note">The scope of the conference includes, but is not limited to, the topics listed above.</li>
      </ul>
    </article></div>
        <div class="submission-cta">
          <a href="https://cmt3.research.microsoft.com/ICARIES2027" target="_blank" rel="noopener noreferrer" class="btn btn-blue">
            Submit Your Paper <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </a>
          <div class="cmt-ack-box">
            <p>CMT ACKNOWLEDGMENT : The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</p>
          </div>
        </div>
      </div>
    </section>`;
}

function renderVenue() {
    return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">Visit PRMITR</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Venue Information</h1>
        <div class="sec-bar"></div>
        <p style="color:rgba(255,255,255,.5);font-size:.95rem;margin-top:.4rem">Join us at PRMITR, Badnera, and experience a vibrant venue that inspires learning, collaboration, and innovation.</p>
      </div>
    </div>

    <section class="section">
      <div class="section-inner">
        <div class="page-section-header page-section-header-centered">
          <span class="sec-eyebrow">Conference Venue</span>
          <h2 class="sec-title">Location</h2>
          <div class="sec-bar center"></div>
          <p class="venue-section-copy">The conference venue is centered around the PRMITR campus in Badnera, giving visitors direct access to the event location with a cleaner and more focused venue experience.</p>
        </div>
        <div class="locations-grid locations-grid-single">
          <article class="location-card location-card-featured">
            <div class="location-map-mini">
              <iframe width="100%" height="240" style="border:none;border-radius:12px" loading="lazy" allowfullscreen="" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.8!2d77.75355!3d20.8782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sProf.%20Ram%20Meghe%20Institute%20of%20Technology%20and%20Research%2C%20Badnera!5e0!3m2!1sen!2sin!4v1"></iframe>
            </div>
            <div class="location-card-body">
              <h3 class="location-card-title">Prof. Ram Meghe Institute of Technology and Research</h3>
              <p class="location-card-address">Badnera, Amravati, Maharashtra, India</p>
              <p class="location-card-desc">State-of-the-art campus hosting the ICARIES 2027 conference.</p>
              <a href="https://www.google.com/maps/search/?api=1&amp;query=Prof.+Ram+Meghe+Institute+of+Technology+and+Research%2C+Badnera" target="_blank" rel="noreferrer noopener" class="btn btn-outline-blue" style="margin-top:1rem;display:inline-block"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg> View Full Map</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section alt">
      <div class="section-inner">
        <div class="page-section-header page-section-header-centered">
          <span class="sec-eyebrow">Stay Nearby</span>
          <h2 class="sec-title">Accommodation</h2>
          <div class="sec-bar center"></div>
          <p class="venue-section-copy">Choose from recommended hotels near the conference venue, with convenient booking access.</p>
        </div>
        <div class="hotel-grid">
          <article class="hotel-card">
            <div class="hotel-card-img"><img src="./assets/prime-park.jpg" alt="Prime Park Hotel, Amravati" width="1024" height="683" loading="lazy" decoding="async"></div>
            <div class="hotel-card-body">
              <h3 class="hotel-card-title">Prime Park</h3>
              <p class="hotel-card-desc">A premium stay option with spacious rooms, hearty breakfasts, and trusted hotel comforts.</p>
              <a href="https://www.makemytrip.com/hotels/hotel-details/?hotelId=202002181549124515" target="_blank" rel="noreferrer noopener" class="btn btn-outline-blue hotel-btn">Visit</a>
            </div>
          </article>
          <article class="hotel-card">
            <div class="hotel-card-img"><img src="./assets/landmark.avif" alt="Landmark Continental Hotel, Amravati" width="2880" height="1920" loading="lazy" decoding="async"></div>
            <div class="hotel-card-body">
              <h3 class="hotel-card-title">Landmark Continental</h3>
              <p class="hotel-card-desc">Modern rooms and easy access to local dining with comfortable amenities and friendly service.</p>
              <a href="https://www.makemytrip.com/hotels/landmark_continental-details-amravati.html" target="_blank" rel="noreferrer noopener" class="btn btn-outline-blue hotel-btn">Visit</a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <div class="page-section-header page-section-header-centered">
          <span class="sec-eyebrow">Travel Planning</span>
          <h2 class="sec-title">Transportation Modes</h2>
          <div class="sec-bar center"></div>
        </div>
        <div class="transport-journey">
          <div class="journey-stage">
            <h3 class="stage-title">Stage 1: Reach Nagpur</h3>
            <p class="stage-subtitle">Choose your preferred mode of transport to reach Nagpur</p>
            <div class="transport-grid">
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-plane"></i></div>
                <h4 class="transport-name">Aeroplane</h4>
                <p class="transport-detail"><strong>Dr. Ambedkar International Airport</strong></p>
                <p class="transport-desc">International airport with flights from major Indian and international cities. Located ~80 km from city center.</p>
              </article>
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-train-subway"></i></div>
                <h4 class="transport-name">Train</h4>
                <p class="transport-detail"><strong>Nagpur Central Station</strong></p>
                <p class="transport-desc">Well-connected railway hub. Regular trains from Delhi, Mumbai, Kolkata, and other major cities.</p>
              </article>
            </div>
          </div>
          <div class="journey-divider">
            <div class="divider-line"></div>
            <div class="divider-text">↓</div>
            <div class="divider-line"></div>
          </div>
          <div class="journey-stage">
            <h3 class="stage-title">Stage 2: Nagpur to Amravati</h3>
            <p class="stage-subtitle">Distance: ~150 km | Estimated travel time: ~3 hours</p>
            <div class="transport-grid">
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-car"></i></div>
                <h4 class="transport-name">Cab</h4>
                <p class="transport-detail"><strong>Most Convenient</strong></p>
                <p class="transport-desc">Private cab or taxi services available. Door-to-door convenience. Recommended for comfort and flexible timing.</p>
              </article>
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-bus"></i></div>
                <h4 class="transport-name">Bus</h4>
                <p class="transport-detail"><strong>Budget Friendly</strong></p>
                <p class="transport-desc">Regular bus services from Nagpur to Amravati. AC and non-AC options available. Frequent departures throughout the day.</p>
              </article>
              <article class="transport-card">
                <div class="transport-icon"><i class="fa-solid fa-train-subway"></i></div>
                <h4 class="transport-name">Train</h4>
                <p class="transport-detail"><strong>Reliable &amp; Comfortable</strong></p>
                <p class="transport-desc">Regional trains available from Nagpur Junction to Badnera Junction (10 km from Amravati). Check schedules in advance.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>`;
}

function renderContact() {
    return `
    <div class="subpage-hero">
      <div class="subpage-hero-inner subpage-hero-inner-centered">
        <span class="sec-eyebrow">Contact Information</span>
        <h1 class="sec-title" style="font-size:clamp(1.6rem,4vw,2.8rem)">Conference Contacts</h1>
        <div class="sec-bar"></div>
        <p style="color:rgba(255,255,255,.5);font-size:.95rem;margin-top:.4rem">Reach out to our organizing team for conference and author support.</p>
      </div>
    </div>
    <section class="section">
      <div class="section-inner">
        <div class="contact-grid">
    <article class="contact-card reveal">
      <div class="contact-card-icon"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
      <h3 class="contact-card-title">Our Office</h3>
      <div class="contact-card-detail">Prof. Ram Meghe Institute of Technology and Research, Badnera - Amravati 444701(MS)</div>
    </article>
    <article class="contact-card reveal contact-card-email">
      <div class="contact-card-icon"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
      <h3 class="contact-card-title">Email Us</h3>
      <div class="contact-card-detail"><a href="mailto:aries@mitra.ac.in">aries@mitra.ac.in</a></div><div class="contact-card-detail"><a href="mailto:auchaudhari@mitra.ac.in">auchaudhari@mitra.ac.in</a></div>
    </article>
    <article class="contact-card reveal">
      <div class="contact-card-icon"><svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg></div>
      <h3 class="contact-card-title">Call Us</h3>
      <div class="contact-card-detail"><a href="tel:+919021117416">Prof. A.U. Chaudhari : (+91) 9021117416</a></div>
    </article></div>
      </div>
    </section>`;
}

function renderFooter() {
    return `
  <footer id="site-footer">
    <div class="footer-inner">
      <div class="footer-grid">
        <div class="footer-brand-col">
          <div class="footer-logo-wrap">
            <img src="./assets/icaries_logo.png" alt="ICARIES 2027" class="footer-logo-img" width="200" height="200"
              loading="lazy" decoding="async">
            <div>
              <span class="footer-brand-name">ICARIES 2027</span>
            </div>
          <p class="footer-desc">ICARIES 2027 is a hybrid IEEE conference (record number #72646) focused on innovative
            and resilient technologies in computing, artificial intelligence, data science, communication, robotics,
            and automation. It will be held at PRMITR Badnera on 26–27 February 2027.</p>
        </div>
        <div class="footer-col">
          <h4>Conference</h4>
          <ul>
            <li><a href="/" data-goto-section="about-conference">About Conference</a></li>
            <li><a href="/" data-goto-section="speakers">Keynote Speakers</a></li>
            <li><a href="/" data-goto-page="important-dates">Important Dates</a></li>
            <li><a href="/" data-goto-page="committee">Committees</a></li>
            <li><a href="/" data-goto-page="venue">Venue &amp; Travel</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>For Authors</h4>
          <ul>
            <li><a href="/" data-goto-page="program">Call for Papers</a></li>
            <li><a href="/" data-goto-page="author-guidelines">Submission Guidelines</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact Us</h4>
          <div class="footer-c-item"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg><span>Prof. Ram Meghe Institute of Technology and Research, Badnera-Amravati, MH, India</span></div>
          <div class="footer-c-item"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg><a href="mailto:aries@mitra.ac.in">aries@mitra.ac.in</a></div>
          <div class="footer-c-item"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"
              viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg><a href="mailto:auchaudhari@mitra.ac.in">auchaudhari@mitra.ac.in</a></div>
          <div class="footer-c-item"><svg style="width:14px;height:14px" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2">
              <path
                d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z">
              </path>
            </svg><a href="tel:9021117416">9021117416</a></div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-inner"
          style="display:flex;align-items:center;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
          <div style="display:flex;flex-direction:column;">
            <span>© 2027 ICARIES — Prof. Ram Meghe Institute of Technology &amp; Research, Badnera. All rights
              reserved.</span>
            <span class="footer-credit">Developed and Maintained by Amruta Topale and <a href="https://linkedin.com/in/harsh-deshmukh-23d" target="_blank">Harsh Deshmukh</a></span>
          </div>
          <div style="display:flex;gap:1rem;align-items:center;">
            <a href="#" class="footer-link">Privacy Policy</a>
            <a href="#" class="footer-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  </footer>`;
}

function renderScrollTop() {
    return `<button id="scroll-top-btn" aria-label="Scroll to top"><svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 19V7"></path>
      <path d="M6.5 12.5 12 7l5.5 5.5"></path>
    </svg></button>`;
}


const PAGES = new Set(['committee', 'important-dates', 'author-guidelines', 'program', 'venue', 'registration', 'contact']);

function getRoute() {
    return window.location.hash.replace(/^#\/?/, '');
}

function goPage(key) {
    window.location.hash = key ? `#/${key}` : '#/';
}

function goSection(sectionId) {
    const route = getRoute();
    if (PAGES.has(route)) {
        window.location.hash = '#/';
        setTimeout(() => scrollToSection(sectionId), 60);
    } else {
        scrollToSection(sectionId);
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
}

function renderMain() {
    const route = getRoute();
    const main = document.getElementById('main-content');
    if (!main) return;
    if (route === 'committee') main.innerHTML = renderCommittee();
    else if (route === 'important-dates') main.innerHTML = renderImportantDates();
    else if (route === 'registration') main.innerHTML = renderRegistration();
    else if (route === 'author-guidelines') main.innerHTML = renderAuthorGuidelines();
    else if (route === 'program') main.innerHTML = renderProgram();
    else if (route === 'venue') main.innerHTML = renderVenue();
    else if (route === 'contact') main.innerHTML = renderContact();
    else main.innerHTML = renderHome();

    initReveal();
    bindMainEvents();
    initInPageAnchors();
    updateActiveNav();
    window.scrollTo(0, 0);
}

function updateActiveNav() {
    const route = getRoute();
    const active = PAGES.has(route) ? route : '';
    document.querySelectorAll('#navbar [data-goto-page], #mobile-nav [data-goto-page]').forEach(el => {
        el.classList.toggle('active', el.dataset.gotoPage === active);
    });

    // Venue has no primary-nav link of its own — highlight "About" as the closest parent item.
    if (route === 'venue') {
        document.querySelectorAll('#navbar [data-goto-section="about-conference"], #mobile-nav [data-goto-section="about-conference"]').forEach(el => el.classList.add('active'));
    }
}


// Image modal state
let previousBodyOverflow = '';
let isModalOpen = false;

function mapsUrl(query) {
    return `https://www.google.com/maps/search/?${new URLSearchParams({ api: '1', query }).toString()}`;
}

function renderModal(src, alt, width, height) {
    return `
    <div class="modal-overlay" id="img-modal">
      <div class="modal-content">
        <button class="modal-close" id="modal-close" aria-label="Close modal">x</button>
        <img src="${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async"/>
        <div class="modal-caption">${alt}</div>
      </div>
    </div>`;
}

function openModal(src, alt, width, height) {
    let modal = document.getElementById('img-modal');
    if (!modal) {
        document.body.insertAdjacentHTML('beforeend', renderModal(src, alt, width, height));
        modal = document.getElementById('img-modal');
        modal.querySelector('#modal-close').addEventListener('click', closeModal);
        modal.addEventListener('click', event => {
            if (event.target === modal) closeModal();
        });
    } else {
        const image = modal.querySelector('img');
        image.src = src;
        image.alt = alt;
        image.width = width;
        image.height = height;
        modal.querySelector('.modal-caption').textContent = alt;
    }

    modal.style.display = 'flex';
    if (!isModalOpen) previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    isModalOpen = true;
}

function closeModal() {
    const modal = document.getElementById('img-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = previousBodyOverflow;
    isModalOpen = false;
}

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && document.getElementById('img-modal')?.style.display === 'flex') {
        closeModal();
    }
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function initReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('vis');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.07 });

    document.querySelectorAll('.reveal, .g-item').forEach(element => observer.observe(element));
}

function bindMainEvents() {
    document.querySelectorAll('[data-modal-src]').forEach(element => {
        element.addEventListener('click', () => openModal(
            element.dataset.modalSrc,
            element.dataset.modalAlt,
            Number(element.dataset.modalWidth),
            Number(element.dataset.modalHeight)
        ));
    });

    document.querySelectorAll('[data-map-query]').forEach(button => {
        button.addEventListener('click', event => {
            event.stopPropagation();
            window.open(mapsUrl(button.dataset.mapQuery), '_blank', 'noopener,noreferrer');
        });
    });
}

function bindNavEvents() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');

    hamburger?.addEventListener('click', () => {
        const open = mobileNav.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open);
        hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });

    const closeMenu = () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
    };

    document.querySelectorAll('#navbar [data-goto-page], #mobile-nav [data-goto-page]').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); closeMenu(); goPage(el.dataset.gotoPage); });
    });
    document.querySelectorAll('#navbar [data-goto-section], #mobile-nav [data-goto-section]').forEach(el => {
        el.addEventListener('click', e => { e.preventDefault(); closeMenu(); goSection(el.dataset.gotoSection); });
    });
    document.querySelector('[data-action="home-brand"]')?.addEventListener('click', () => { closeMenu(); goSection('home'); });

    const navbar = document.getElementById('navbar');
    const scrollButton = document.getElementById('scroll-top-btn');
    window.addEventListener('scroll', () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 10);
        scrollButton?.classList.toggle('show', window.scrollY > 300);
    });

    scrollButton?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initInPageAnchors() {
    // Kept as a no-op hook for parity; in-page section navigation is handled by
    // goSection()/data-goto-section clicks (see bindNavEvents), not raw #anchors,
    // since this is a single-page hash-router app again.
}

function init() {
    const textAlignmentStyle = document.createElement('style');
    textAlignmentStyle.textContent = '#root p { text-align: justify; }';
    document.head.appendChild(textAlignmentStyle);

    const root = document.getElementById('root');
    root.innerHTML = `
    ${renderNavbar()}
    <main id="main-content"></main>
    ${renderFooter()}
    ${renderScrollTop()}`;

    renderMain();
    bindNavEvents();

    window.addEventListener('hashchange', renderMain);
}

document.addEventListener('DOMContentLoaded', init);

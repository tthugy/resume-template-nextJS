import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import styles from '../styles/main.module.css'
import Commit from '../public/myCommit.png'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {

  useEffect(() => {
    AOS.init();
  })

  const scrollTop = e => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <main className={styles.main}>
        <div data-aos="fade-up" data-aos-duration="800" className={styles.intro}>
            <p>
              Hello, I am a DevOps Engineer Lorem imsum.
            </p>
            <div className={styles.linkCollect}>
                <a target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>
                  <i className="bi bi-github"></i>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/wonseok-choi-b6041922b/' rel='noopener noreferrer'>
                  <i className="bi bi-linkedin"></i>
                </a>
                {/* <a className={styles.docs}>
                  <i class="bi bi-filetype-pdf"></i>
                </a> */}
                <a href='mailto:lorem@ipsum.com'>
                  <i className={`bi bi-at`}></i>
                </a>
            </div>
            <div className={styles.codeTxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat ultrices metus et mattis. Nam mattis elit vel urna iaculis ultrices. Aliquam vulputate nunc eu justo tristique gravida. Sed sollicitudin, mi nec luctus pulvinar, dolor arcu finibus felis, ut tristique augue enim id arcu. Phasellus a rhoncus risus, ac lacinia nibh. Aenean tincidunt non sapien in blandit.</div>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" className={styles.company}>
          <ul>
            <li>
              <div>
                Company
                <span>DevOps Engineer</span> 
                <span className={styles.comPeriod}>99.03 ~ current</span> 
              </div>
              <span className={styles.comCont}>Continuous delivery. For this role, you will need a deep understanding of continuous delivery CD theory, concepts and real-world application of them. And Configuration Management lots of projects at the below.</span>
            </li>
          </ul>
        </div>

        <div className={styles.education}>
          <p data-aos="fade-left" data-aos-duration="600" className={styles.titles}>Educations<span>a</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.eduCont}>
            <span>Example Univ, 16.03 ~ 22.02</span>
            <ul>
              <li>major: Computer Science</li>
              <li>double majoring:&nbsp;
                <a target='_blank' href='' rel='noopener noreferrer'>
                  Mathematics
                  <i className={`${styles.pageOut} bi bi-box-arrow-up-right`}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.commitBox}>
          <p data-aos="fade-left" data-aos-duration="600" className={styles.titles}>Self Improvement<span>b</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.commitImg}>
            <span className={styles.commit}>
              <Image alt="Commit Graph" src={Commit} layout='responsive' objectFit='contain' priority />
            </span>
          </div>
          <span className={styles.commitDesc}>
          After creating a personal Github account, I am dedicated to my daily leisure activities and activities.
            <br/><br/>
            The image above shows a graph of <a target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>a Github account<i className={`${styles.pageOut} bi bi-box-arrow-up-right`}></i></a> , an example.
          </span>
        </div>

        <div className={styles.project}>
          <p data-aos="fade-left" data-aos-duration="600" className={`${styles.titles} ${styles.ctitles}`}>Open Source Projects<span>c</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
            <a target='_blank' href='https://github.com/tthugy/resume-template-nextJS' rel='noopener noreferrer'><p>Open Source Project1<i className={`${styles.pLink} bi bi-box-arrow-up-right`}></i></p></a>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;99.07 ~ current
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 Description of this Project</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>Styled Components</li>
                  <li>Redux</li>
                  <li>Github actions</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>Open source is at the core of the products we build.</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Project Initial React Application Architecture Design</li>
                  <li>Managing issues with Github actions, continuous integration and distribution through the Jenkins pipeline</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage}`}>Put your project Image</span>
              <span className={`${styles.pImage}`}>Put your project Image</span>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <p data-aos="fade-left" data-aos-duration="600" className={`${styles.titles} ${styles.ctitles}`}>Private Projects<span>d</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p>Private Project1</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;99.07 ~ current
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 Description of this Project</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>CSS-module</li>
                  <li>Github actions</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>Open source is at the core of the products we build.</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Project Initial React Application Architecture Design</li>
                  <li>Managing issues with Github actions, continuous integration and distribution through the Jenkins pipeline</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage}`}>Put your project Image</span>
              <span className={`${styles.pImage}`}>Put your project Image</span>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <p data-aos="fade-left" data-aos-duration="600" className={`${styles.titles} ${styles.ctitles}`}>Commercial Projects<span>e</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p>Project1</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;99.07 ~ current
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 Description of this Project</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>Chart.js</li>
                  <li>Axios</li>
                  <li>zustand</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Project Initial React Application Architecture Design</li>
                  <li>Introducing Next.js within the team</li>
                  <li>Interworking with Node.js REST API via Axois</li>
                  <li>Managing issues with github, continuous integration and distribution through the Jenkins pipeline</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage}`}>Put your project Image</span>
              <span className={`${styles.pImage}`}>Put your project Image</span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p>Project2</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;99.03 ~ 99.08
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 Description of this Project</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Vanilla Html + CSS + Javascript</li>
                  <li>Ajax</li>
                  <li>Socket.io</li>
                  <li>WebView</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>It is a long established fact that a reader will be distracted</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Interworking with Node.js REST API via Axois</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage}`}>Put your project Image</span>
              <span className={`${styles.pImage}`}>Put your project Image</span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p>Project3</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;99.03 ~ 99.08
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 Description of this Project</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Php</li>
                  <li>MySQL</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>It is a long established fact that a reader will be distracted</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Responsible function: main page, select icon page, admin page</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage}`}>Put your project Image</span>
              <span className={`${styles.pImage}`}>Put your project Image</span>
            </div>
          </div>
        </div>
        <p onClick={scrollTop} className={styles.end}>
          Thanks for reading my portfolio.
        </p>

    </main>
  )
}

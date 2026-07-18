/**
 * TODOs:
 * add video backround with planes just like msfs24 main menu
 * glassmorphism because it will look nice with the aviation theme
 * aviation-themed hover animations
 * aviation-themed buttons, switches, radios, checkboxes, etc.
 * referrals to increase users
 */

"use client"
import { useAutomove } from './useAutomove';
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
<main className={`${styles.mainContainer} w-screen overflow-x-hidden flex flex-col items-center text-white relative`}>
  
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a href="">TAKEOFF</a>
          <a href=""  className={styles.navbarButtons}>About</a>

        </div>

      </header>


      <div className="max-w-xl text-center px-6">
        <p className="text-sky-400 text-xl font-medium tracking-widest uppercase">
          Takeoff
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Coming Soon
        </h1>

        <p className="mt-6 text-slate-400">
          A YSWS where you ship aviation-related hardware and/or software projects (drones, hobby radars,
          flight trackers, aviation games, etc.), and we ship aviation-related prizes and funding for your
          hardware projects!
        </p>

        <br /><p>
          Subscribe to the RSVP to get notified when this YSWS starts!
        </p><br />

        <Button
          variant="outline"
          size="lg"
          className="mt-6 mb-12"
          onClick={() => window.open("https://rsvp.hackclub.community/takeoff", "_blank", "noopener,noreferrer")} // TODO: not ideal. fix. refer to shadcn docs for Button
        >
          RSVP
        </Button>
              </div>


<section className={styles.showcaseSection}>
  <h2 className={styles.showcaseHeading}>[Previous submissions]</h2>

    <div className={styles.cardStream}>
  <div className={styles.blueprintCard} style={{ backgroundImage: "url('/RC-plane.webp')"}}>
      <div className={styles.cardTitle}>RC PLANE</div>
      <div className={styles.cardCreator}>By Hydrance</div>
      <div className={styles.cardDescription}>a 3d printed RC plane from scratch. Using lightweight PLA, brushless motors, flight controller, ESC, transmitter, receiver, GPS, and some servos.</div>
    </div>

    <div className={styles.blueprintCard} style={{ backgroundImage: "url('/flight-sensor.webp')"}}>
      <div className={styles.cardTitle}>Flightsensor</div>
      <div className={styles.cardCreator}>By Limitens</div>
      <div className={styles.cardDescription}>A Keychain flight sensor that can track the closest planes to the user using public flight data.</div>
    </div>


    <div className={styles.blueprintCard} style={{ backgroundImage: "url('/drone-pcb.webp')" }}>
      <div className={styles.cardTitle}>Drone controller module</div>
      <div className={styles.cardCreator}>By Abohisham</div>
      <div className={styles.cardDescription}>A controller used to control a drone with 4 motors, plus an IMU controller to determine position of drone and orientation.</div>
    </div>


    <div className={styles.blueprintCard} style={{ backgroundImage: "url('/rocket-flight-controller.webp')" }}>
      <div className={styles.cardTitle}>Rocket flight controller</div>
      <div className={styles.cardCreator}>By dash.pt101</div>
      <div className={styles.cardDescription}>Rocket Flight Controller, designed with TVC and Active Control, while allowing estimates for e.g speeds in flight controls.</div>
    </div>

    <div className={styles.blueprintCard} style={{ backgroundImage: "url('/Desktop-jet-engine.webp')" }}>
      <div className={styles.cardTitle}>Desktop Jet engine</div>
      <div className={styles.cardCreator}>By Ryan</div>
      <div className={styles.cardDescription}>A miniature turbojet replica powered by a dc motor</div>
    </div>

    <div className={styles.blueprintCard} style={{ backgroundImage: "url('/Hover.webp')" }}>
      <div className={styles.cardTitle}>Hover</div>
      <div className={styles.cardCreator}>By Shauryac</div>
      <div className={styles.cardDescription}>A fully custom mini racing/stunt drone with ML-assisted balancing, automatic stunts, and some level of autonomous operation.</div>
    </div>

    <div className={styles.blueprintCard} style={{ backgroundImage: "url('/RC-transmitter.jpg')" }}>
      <div className={styles.cardTitle}>RC-transmitter</div>
      <div className={styles.cardCreator}>By Yarne</div>
      <div className={styles.cardDescription}>A 2.4GHz transmitter for controlling drones, planes, cars. Based around the RP2040 and nRF24.</div>
    </div>
  </div>
</section>

<div className={styles.FAQ}>
            <br /><h1 className="text-3xl font-bold mb-6 text-center">FAQ</h1>
        <details className={styles.FAQstyle}>
            <summary className={styles.FAQlist}>what is this?</summary>
            <p className={styles.FAQcontent}>A YSWS where you ship aviation-related hardware and/or software projects (drones, hobby radars, flight trackers, aviation games, etc.), and we ship aviation-related prizes and funding for your hardware projects!

</p>
  </details>
          <details className={styles.FAQstyle}>
            <summary className={styles.FAQlist}>Is this legit?</summary>
            <p className={styles.FAQcontent}>Hack Club is the world's largest community of teenage makers, and a 501(c)(3) nonprofit. Hack Club is supported by donations from tech companies like GitHub and individuals like Michael Dell. Hack Club is fiscally transparent.

</p>
        </details>

          <details className={styles.FAQstyle}>
            <summary className={styles.FAQlist}>I dont know any hardware or software!</summary>
            <p className={styles.FAQcontent}>Don't worry! Takeoff is beginner friendly, we have some starter projects for you to start learning skills!</p>
        </details>

          <details className={styles.FAQstyle}>
            <summary className={styles.FAQlist}>Who is eligible?</summary>
            <p className={styles.FAQcontent}>To be eligible for Takeoff, you must be between the ages of 13 and 18 (inclusive).</p>
        </details>
              <details className={styles.FAQstyle}>
            <summary className={styles.FAQlist}>I have more questions!</summary>
            <p className={styles.FAQcontent}>Ask in #takeoff-help on the Hack Club Slack</p>
        </details>

</div>

    </main>
  );
}
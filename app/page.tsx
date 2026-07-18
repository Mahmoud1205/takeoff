/**
 * TODOs:
 * add video backround with planes just like msfs24 main menu
 * glassmorphism because it will look nice with the aviation theme
 * aviation-themed hover animations
 * aviation-themed buttons, switches, radios, checkboxes, etc.
 * referrals to increase users
 */

"use client"
import styles from "./page.module.css";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">


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
</div>

      </div>
    </main>
  );
}

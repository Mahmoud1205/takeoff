/**
 * TODOs:
 * add video backround with planes just like msfs24 main menu
 * glassmorphism because it will look nice with the aviation theme
 * aviation-themed hover animations
 * aviation-themed buttons, switches, radios, checkboxes, etc.
 * referrals to increase users
 */

"use client"

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
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
          onClick={() => window.open("https://rsvp.hackclub.community/takeoff", "_blank", "noopener,noreferrer")} // TODO: not ideal. fix. refer to shadcn docs for Button
        >
          RSVP
        </Button>
      </div>
    </main>
  );
}

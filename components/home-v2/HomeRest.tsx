"use client";

import { useEffect, useRef } from "react";

const MARKUP = `<div class="bg"><div class="glow"></div><div class="grid"></div><div class="vignette"></div></div>

<!-- ===================== HERO ===================== -->
<!-- ===================== OPPORTUNITY ===================== -->
<section id="opps">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker">Where the upside lives</span>
      <h2>The growth is hiding in the everyday moments.</h2>
      <p>You don't need a new system or ten new tools. Just a handful of everyday moments, handled well — and each one quietly adds up.</p>
    </div>
    <div class="opps">
      <div class="opp">
        <svg class="ic" viewBox="0 0 146.8 148.5"><path fill="#F4F6F3" d="m139.2 137.9-7.2-19.4c4.5-6.9 7.3-15.4 7.3-25.8 0-22.5-17.8-47.7-46.5-47.7-25.9 0-46.6 21.2-46.6 47.3 0 23 17.9 47.5 46.6 47.5 7.6 0 15-1.9 23.8-6.4l19.8 7.1c1.6 0.5 3.1-0.9 2.8-2.6zm-22-8.9c-0.6-0.2-1.3-0.1-1.9 0.3-5.9 3.7-13.5 6.6-22.5 6.6-23.9 0-42.3-19.6-42.3-43.4 0-20.5 16-43.2 42.3-43.2 23.2 0 42.7 18.4 42.7 43.2 0 7-1.5 15.6-6.6 23.5-1.4 1.6-0.9 1.9-0.9 2.6l6 16.8-16.8-6.4z"/><path fill="#C2F24F" d="m97.5 85.4 3.8-21.8c0.4-2.2-2.4-3.5-3.6-1.5l-24.2 34.3c-1 1.5 0.8 3.2 1.9 3.2h12.8l-4.3 22.7c-0.3 2.2 2.7 3.3 3.8 1.4l24.2-35.1c1-1.4 0.1-3.2-1.6-3.2h-13zm-7.9 28.9 2.8-16.4c0.1-0.9-0.8-2.3-1.9-2.3h-11.2l16.4-23.6-2.8 14.9c-0.2 1.3 0.7 2.6 1.8 2.5h11.6l-16.7 24.9z"/></svg>
        <h3>Speed-to-lead</h3>
        <p>First to reply usually wins the job. Be first, every time — without lifting a finger.</p>
      </div>
      <div class="opp">
        <svg class="ic" viewBox="0 0 150 150"><path fill="#F4F6F3" d="m67.5 72.8v-21.5c11.5 1.8 9.7 10.8 9.8 10.9 0.2 1.4 1.5 2.5 3 2.2s2-1.4 1.9-2.7c-0.2-7.9-6.4-14.5-14.7-15.3v-4.7c0-1.2-1-2-2.2-2s-2.4 1.1-2.4 2.3v4.7c-8.1 0.6-15 6.7-15 15.6 0 6.1 4.4 13.7 14.9 14.6v20.5c-7.2-1.2-9.9-6.6-9.9-9.7 0-1.3-0.9-2.4-2.4-2.4-1.1 0-2.7 1-2.6 2.5 0.4 8.1 6.8 13.3 14.9 14.3v5.1c0.1 2.8 4.6 3.9 4.7 0v-5c6.9-0.5 14.4-5.6 14.2-14.7-0.3-8.4-6.8-14-14.2-14.7zm-4.6-0.4c-6-0.8-10.1-4.5-10.1-9.9s4.2-10 10.1-11.2v21.1zm4.5 25v-20.2c1.9 0.2 9.8 1.8 9.8 10.2 0 5.3-4.8 9.3-9.8 10z"/><path fill="#F4F6F3" d="m114.9 100c-1.1 0.1-2.3 1-2.3 2.3v30.5c0 2.2-1.7 3.9-3.9 3.9h-88.8c-2.1-0.1-4-1.8-4-4.1l-0.1-115c0-2.2 1.7-4.1 4.1-4.1h67.1v17.3c0 4.6 3.5 8.3 8.4 8.3h16.8v10.7c0.1 3.6 5 3.1 5-0.1v-12.8c0-0.7-0.3-1.3-0.6-1.6l-25.2-25.5c-0.7-0.7-1.4-0.9-2.1-0.9h-69.2c-4.7 0-9 3.6-9 8.6v115.3c0 4.6 3.7 8.3 8.7 8.3h88.9c4.7 0.1 8.4-3.5 8.5-8.2v-30.7c-0.1-1.2-1.1-2.3-2.3-2.2zm-23.2-83.4 17.5 17.9h-13.5c-2.1-0.1-4-1.8-4-4.1v-13.8z"/><path fill="#C2F24F" d="m137.6 74.4-21.3-17.1c-1.6-1.2-3.9-0.3-3.9 1.9v9.6l-14.6-11.5c-1.6-1.2-3.9-0.2-3.9 2v33.8c0 2.1 2.4 3.2 4 1.8l14.5-11.3v9.5c0.1 2.3 2.7 3.2 4.1 1.8l21.2-16.8c1-0.7 1.3-2.6-0.1-3.7zm-39 14.1v-24.3l13.8 10.7v2.7l-13.8 10.9zm18.4 0.1v-24.4l15.6 12.1-15.6 12.3z"/></svg>
        <h3>Instant quotes</h3>
        <p>A quote that lands the same hour hits different than one that takes three days.</p>
      </div>
      <div class="opp">
        <svg class="ic" viewBox="0 0 150.9 150.7"><style>.mc1{fill:none;stroke:#F4F6F3;stroke-width:3.4466;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.mc2{fill:#C2F24F}.mc3{fill:none;stroke:#F4F6F3;stroke-width:3.4466;stroke-linejoin:round;stroke-miterlimit:10}</style><path class="mc1" d="m92.9 65v36.2c0 9.5-7.3 17.8-17.4 17.8-9.7 0-20.1-7.8-20.2-28.3v-22.2c0-11.3 3.5-26.5 19.8-27.3h0.6c2.4 0 4.3 2.8 4.3 4.2v15.9c0 2.2-1.7 4.3-4.3 4.3h-1.5c-2.6 0-4.2 1.4-5 3.4s-2.8 10.9-0.4 20.4c0.6 2.5 2.8 4.3 5.2 4.3h2c2.5 0 4 2 4 4.2v17.2c0 2.2-1.8 3.9-4 3.9"/><path class="mc3" d="m56.4 58.2v-8.6c0-9.3 7.8-17.9 18.2-17.9 10.1 0 18.2 8.1 18.2 17.3v8l-4.8-5.7"/><polyline class="mc1" points="87.6 50.9 92.9 57.4 97.9 51"/><path class="mc2" d="m74.6 104.9c0 2.3-1.8 4.2-4.2 4.7-2.4 0-4.3-1.7-4.3-4.6s2.4-4.6 4.3-4.5c2.3 0 4.2 1.9 4.2 4.4z"/><path class="mc1" d="m73.9 41.7v23.9"/></svg>
        <h3>Missed-call text-back</h3>
        <p>Every missed call gets a friendly text right back — before they call someone else.</p>
      </div>
      <div class="opp">
        <svg class="ic" viewBox="0 0 155.9 162"><style>.fu0{fill:#C2F24F}.fu1{fill:#F4F6F3}</style><path class="fu0" d="m109 129.5c-0.9 0-1.7-0.4-2.3-1.1-1.7-2.2-0.1-3.8 0.7-4.3l1.5-1.1c1.1-0.9 2.7-1.6 4.2 0 1.1 1.3 0.8 3.3-0.4 4.2l-2.5 1.8c-0.5 0.3-0.9 0.5-1.2 0.5zm10.1-9c-2.4-0.6-3.6-3.4-1.7-5.1l2.5-2.5c1-1.2 3-1.4 4-0.3 1.2 1.2 1.2 3.2 0 4.3l-2.5 2.5c-0.6 1-1.5 1.2-2.3 1.1zm7.9-12.9c-1.6-1.7-0.7-3.1-0.4-3.6l2.4-3c1-1.4 2.9-1.5 5-0.1 0.9 1.2 1.2 2.7 0 4l-2.2 2.8c-0.8 1.2-3.4 1.7-4.8-0.1z"/><path class="fu0" d="m146.8 57.4c-3.5-7.2-10.6-13.4-20.3-13.5h-2.6v5.6h2c3.5-0.1 8.5 0.9 10.6 4.5s1.1 10.6-5.5 17.4c-3 3.2-6.1 5.7-9.8 8.5-1.6 1.1-3.4 2.5-5.8 4.2-7.1 4.2-21.4 12.2-38 12.3l-5.9-0.3c3.3-10 12.1-22 25.3-32.5 5-4 11.1-8.7 18.7-12v-6.3c-9.1 2.6-17.5 8-22.5 12-13.1 10.3-27 26.2-28.9 44.1-0.2 3.1-0.4 7.5 0.1 14.6 0.6 3.9-1.8 7.5-5.4 11.7-7 7.7-16.9 14.2-27.2 15-8.6 0.3-13.5-2.6-15.7-7.1-2.3-4.7-2.4-12 4.2-21.2l2.3-3.5-5.6-2.9c-0.3 0.5-0.7 1.1-1.2 1.8-8 11.1-8.2 21.1-4.5 28.1 3.4 6 9.7 10.2 19.7 10.2 12.9 0 25.1-7.5 31.8-14.7 2-2 3.9-4.5 4.9-7 3.3 6 8.4 12.2 18.3 12.5 4.6 0.1 8.8-1 14.1-3.5 1.5-0.6 2.2-2.3 1.5-4-0.6-1.3-2.4-2.4-4.3-1.4-4.3 2.3-8.5 3.1-12 3-6-0.4-9.8-3.9-12.3-8.6-3-5.4-5-13-2.9-23.3 19.1 2.5 34.2-4.6 45.5-10.2 4.6-2.5 9.1-5.4 13.5-9 6.6-5.5 14.1-13.4 14.5-20.2 3.6 9.3-2 22.2-7 30.4-0.9 1.3-0.6 3.3 1 4.2 1.2 0.6 3.2 0.6 4.2-1.3 4.3-6.9 8-15 8.4-24 0.1-4.9-0.6-9.4-3.2-13.6z"/><path class="fu1" d="m97.8 13.6h-68.8c-12.1 0-23.2 10.2-23.2 23v52.9c0 9.1 6.8 21.9 22.3 21.9h1.7v11.6c0 3.9 3.6 7.1 7.3 6.9s4.7-1.3 4.8-1.8l17.5-16.7h4.4c-0.2-1.8 0-3.9 0-6h-5.8c-0.6 0-1.2 0.2-2.1 1.1l-17.9 17.4c-0.9 1.2-2.6 0.6-2.6-0.9v-14.9c0-1.5-1-2.7-2.5-2.7h-4.9c-8.9 0.1-16.6-6.5-16.6-15.9v-52.6c0-9 7.5-17.5 17.6-17.6h68.8c9.1 0 17.6 7.3 17.6 17.6v52.9c0 6.6-5.5 15.6-16.4 15.6h-26.7c-0.2 1.4 0 4.5 0 6h26.7c10.8 0 22.1-7.8 22.1-21.4v-53.1c0-11.9-9.2-23.3-23.3-23.3z"/></svg>
        <h3>Follow-up that finishes</h3>
        <p>Most yeses come after the first try. Keep following up, gently, until they decide.</p>
      </div>
      <div class="opp">
        <svg class="ic" viewBox="0 0 160 160"><style>.rv0{fill:#C2F24F}.rv1{fill:#F4F6F3}</style><path class="rv0" d="m141.7 27.8c-0.8-0.4-1.4-0.3-2.1-0.4-9-1-11.9-7.6-12.1-13.1-0.2-3.7-5.9-4.3-6.2-0.2-0.6 8.9-6.6 12.9-13.8 13.4-3.3 0.2-4.4 5.8-0.4 6.3 7 0.5 13.5 4.7 14.3 13.1l0.1 0.1c0.4 3.6 5.9 3.6 6.1-0.1v-0.2c0.7-7.6 6.6-12.5 14-12.9 3.1-0.3 3.7-4.8 0.1-6zm-17.3 9.5c-1.5-2.5-3.6-4.7-6.6-6.6 2.8-1.3 5.1-3.7 6.6-6.6 1.6 2.6 3.9 5 6.8 6.6-2.8 1.6-5.2 3.8-6.8 6.6z"/><path class="rv1" d="m149.6 68c-0.6-5-4.7-9.1-9.8-9.4l-37.8-0.9-11.8-36.5c-1.3-4-4.8-6.8-9-7.3-4.3-0.7-9.8 2.7-11.3 7.4l-11.7 36.3-38.1 1c-8.9 0.6-13.1 11.2-6.7 18.7l31 22.6-10.8 35.4c-2 7.9 4 14.3 10.9 13.4 2 0 3.9-0.6 5.5-1.7l30-21.1 29.9 21c1.8 1.3 3.9 1.9 6.1 1.9 6.9 0.2 11.9-5.5 10.5-13l-10.8-35.9 30.7-22c2.5-2.1 3.7-5.9 3.2-9.9zm-9.5 1.7c0 0.4-0.1 0.7-0.3 0.9l-32.6 23.7c-1.6 1.2-2.6 3.3-1.7 5.9l11.4 37.4c0.5 1.5-0.6 2.2-1.7 1.4l-32.1-22.4c-1.8-1.3-4.2-1.4-6.2-0.1l-32 22.5c-1.1 0.7-2.2 0.1-1.8-1.4l11.7-37.1 0.1-0.5c0.7-2.6-0.2-4.9-2.1-6l-32.7-23.4c-0.8-0.6-0.6-2.1 0.7-2.1l41.3-1c1.9-0.1 3.7-1.3 4.4-3.3l12.3-39.1c0.5-2.1 1.8-1.9 2.2-0.5l12.6 39.4c0.7 2 2.5 3.4 4.6 3.5l41.3 1c0.3 0.1 0.7 0.5 0.8 0.8l-0.2 0.4z"/></svg>
        <h3>Reviews on autopilot</h3>
        <p>Turn happy customers into 5-star reviews — asked at exactly the right moment.</p>
      </div>
      <div class="opp">
        <svg class="ic" viewBox="0 0 115.7 99"><style>.sb0{fill:#F4F6F3}.sb1{fill:#C2F24F}</style><path class="sb0" d="m100.6 5.6h-12.6v-2.7c0-2.5-2.1-4.9-4.7-4.9s-5.4 2-5.4 4.9v2.6h-40.4l0.1-0.1v-2.5c0-2.6-2-4.9-4.9-4.9s-4.9 2.3-4.9 4.9v2.7h-12.7c-3.6 0-7.2 3.1-7.2 7.3v81.2c0 3.8 2.9 6.7 6.9 6.9h86.1c2.9 0 6.7-2.5 6.7-6.7v-81.4c0-3.6-2.8-7.3-7-7.3zm-19.4 8.9c0.4-0.2 0.2-0.7 0.2-5.6v0.1-6c0-0.7 0.6-1.5 1.5-1.5s1.6 0.6 1.6 1.5v11.4c0 0.9 1.2 1.5 1.2 3.2-0.1 1.9-1.6 3.4-3.4 3.4-1.8 0.1-3.8-1.4-3.8-3.4 0-1.7 2-2.9 2.7-3.1zm-50.3 0.4v-11.5c0-0.9 0.7-1.9 1.6-1.9s1.6 0.8 1.6 1.5v10c0 1.8 0.8 1.1 2 2.6 0.3 0.5 0.6 1.1 0.6 2 0 1.9-1.7 3.4-3.4 3.4s-3.6-1.4-3.6-3.3c0-1.2 0.6-2 1.2-2.8zm73 79c0 1.7-1.3 3.3-3.2 3.3h-85.7c-1.7 0-3.3-1.4-3.4-3.3v-80.8c0-1.6 1.3-3.6 3.6-3.6h12.5v3.4c-1 1.2-1.8 2.5-1.9 4.7 0 3.9 3 6.9 7 6.9 4.1 0.1 7.9-2.8 7.9-6.9 0.1-2.1-1-4.7-3.2-6v-2.2h40.5l-0.1 2.2c-1.6 1.2-3.1 3.3-3 6 0.1 3.9 3.2 6.9 7.1 6.9s7.1-2.4 7.5-6.5c0.2-1.9-0.6-4.1-1.5-5.1v-3.5h12.4c2-0.1 3.5 1.7 3.5 3.7v80.8z"/><path class="sb0" d="m95.9 34.1c0-0.9-0.8-2-1.9-1.9h-72.7c-0.9 0-1.9 0.8-1.9 1.9v53.6c0 1 0.8 2 1.9 2h48.8c0.9 0 1.7-0.9 1.7-1.8v-16.1h11c2.2 0.3 2.9-2.7 0.8-3.9h-0.3-11v-13.9h19.8v5.9c0.2 2.2 4 2.2 4 0v-25.8zm-52.1 51.6h-20.6v-13.9h20.6v13.9zm0-18.1h-20.6v-13.6h20.6v13.6zm0-17.4h-20.6v-14h20.6v14zm24.2 35.5h-20.5v-13.9h20.5v13.9zm0-18.1h-20.5v-13.6h20.5v13.6zm0-17.4h-20.5v-14h20.5v14zm24.1 0h-20.3v-14h20.4v14z"/><path class="sb1" d="m82.9 83.5c0.6 0.5 1.9 0.8 2 0.3 0.4-0.1-0.1 0.1 12.7-14.9 1.5-1.6-0.5-5-3-3.2l-11.6 13.8-4.2-4c-1.8-1.5-4.2 0.3-3 2.6l5.9 5.8"/></svg>
        <h3>Self-booking</h3>
        <p>Let customers grab the right slot themselves — no more endless phone tag.</p>
      </div>
      <div class="opp">
        <svg class="ic" viewBox="0 0 150 150"><style>.wb0{fill:#C2F24F}.wb1{fill:none;stroke:#F4F6F3;stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round}.wb2{fill:none;stroke:#F4F6F3;stroke-width:3.2;stroke-miterlimit:10}</style><polygon class="wb0" points="71.9 9.1 71.9 36.8 91.1 22.9"/><path class="wb1" d="m83.5 9.7c29.2 2.8 57.8 28.4 57.8 65.8 0 35.5-27 65.5-66.3 65.5-38 0-66.3-29.3-66.3-65.5 0-32.5 24.1-60.9 57-65.7"/><path class="wb1" d="m91.3 31.1c12.7 4.5 30.9 18.9 30.9 44.3 0 24.2-19.2 46.6-47 46.6-25.9 0.1-47.5-20.7-47.5-46.6 0-23.6 19.8-46.1 44.2-47v8.4l19.2-13.9-19-13.9v8.3"/><path class="wb2" d="m87.2 60c0 6.3-5.1 12.4-12.2 12.4s-12.2-5.4-12.2-12.3 5.3-13.2 12.3-13.2c6.4 0 12.1 5.5 12.1 13v0.1z"/><path class="wb1" d="m50.1 102.4c0.5-11.8 10.7-22.3 24.8-22.3 11.5 0 24.1 8.5 25 22.3"/></svg>
        <h3>Win-back &amp; repeat</h3>
        <p>Your past customers are your easiest next sale. Bring them back before they forget you.</p>
      </div>
      <div class="opp more">
        <svg class="ic" viewBox="0 0 100 96"><style>.el0{fill:#F4F6F3}.el1{fill:#C2F24F}</style><path class="el0" d="m76.8 92.6h-53.5c-9.7 0-18.2-7.6-18.2-18.3v-57.9c0-6.8 5.6-13.1 12.9-13.1h63.9c7-0.2 13.1 5.9 13.1 13.1v57.9c0.1 10.8-7.9 18.3-18.2 18.3zm-58.9-86.1c-5.3 0-9.5 4.5-9.5 9.8v58.1c0 8.2 6.5 15 14.8 15h53.8c8 0 14.7-6.1 14.7-14.8l0.1-58.2c0-5.2-4.1-9.9-9.7-9.9h-64.2z"/><path class="el1" d="m27.6 57.5c-5.2 0-9.7-4-9.8-9.5-0.1-4.9 4.1-9.6 9.8-9.5 5.1 0 9.7 4.1 9.7 9.6s-4.2 9.4-9.7 9.4zm0-15.6c-3 0-6.2 2.4-6.2 6.1 0 3.5 2.9 6.1 6.2 6.1 3.3 0 6.2-2.7 6.2-6s-2.8-6.1-6.2-6.1z"/><path class="el1" d="m50 57.5c-5.2 0-9.4-3.8-9.5-9.3-0.1-4.8 4-9.8 9.6-9.7 4.8 0 9.4 3.9 9.4 9.5-0.1 5.2-4 9.5-9.5 9.5zm0-15.6c-2.9 0-6.1 2.3-6.1 6.1 0 3.1 2.6 6 6 6 3.2 0.1 6-2.5 6-6 0.1-3.2-2.6-6.1-5.9-6.1z"/><path class="el1" d="m72.4 57.5c-5.1-0.1-9.5-3.9-9.7-9.4-0.1-4.7 3.9-9.8 9.8-9.6 4.8 0 9.4 3.7 9.5 9.2 0.1 5.4-4.1 9.8-9.6 9.8zm0-15.6c-2.7 0-6.1 2.4-6.1 6 0 2.9 2.2 6.1 6.1 6.1 3.2 0.1 6.1-2.6 6.1-6 0-3.3-2.8-6.1-6.1-6.1z"/></svg>
        <h3>…and the ones that are yours alone</h3>
        <p>Every business has its own quiet wins waiting. Finding yours is exactly what the audit is for.</p>
      </div>
    </div>
  </div>
</section>

<!-- ===================== SEE IT IN ACTION (cycler placement) ===================== -->
<section id="inaction" style="border-top:1px solid var(--line)">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker">See it in action</span>
      <h2>Here's what "handled" actually looks like.</h2>
      <p>Pick a moment from a normal day and watch how it plays out — start to finish, without you lifting a finger.</p>
    </div>
    <div class="cyc">
      <div class="cyc-tabs" id="cyc-tabs"></div>
      <div class="cyc-flow" id="cyc-flow"></div>
      <div class="cyc-cap">Illustrative preview — a simplified stand-in for the full animated demo</div>
    </div>
  </div>
</section>

<!-- ===================== HOW IT WORKS ===================== -->
<section id="how" class="band">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker">How it works</span>
      <h2>It starts with a conversation — not a contract.</h2>
      <p>You move one step at a time, and each step earns the next. No big commitment up front, no mystery scope — just a clear path forward.</p>
    </div>

    <div class="how-block">
      <div class="how-copy">
        <span class="tag">Step 01 · free</span>
        <h3>It starts with a 15-minute conversation.</h3>
        <p>A few quick questions about how you work, and we pinpoint your <b>single biggest bottleneck</b> — the spot where high frequency meets high friction — then prescribe <b>one tool</b> to fix it.</p>
        <p>You leave with one clear, specific win you could act on tomorrow. Free, no commitment.</p>
      </div>
      <div>
        <div class="assess">
          <div class="assess-top"><div class="t">Free Assessment</div></div>
          <div class="assess-list">
            <div class="it"><span class="ck">✓</span>A few quick questions about how you work</div>
            <div class="it"><span class="ck">✓</span>We pinpoint your #1 bottleneck</div>
            <div class="it"><span class="ck">✓</span>You get one specific tool to fix it</div>
            <div class="it"><span class="ck">✓</span>A straight answer on whether AI fits</div>
          </div>
          <div class="assess-foot">No prep needed. One clear next step.</div>
        </div>
      </div>
    </div>

    <div class="how-block flip" style="margin-top:44px">
      <div class="how-copy">
        <span class="tag">Step 02 · the full picture</span>
        <h3>Want the whole map? That's the audit.</h3>
        <p>The $999 audit is the full report: every opportunity plotted by <b>impact</b> and <b>effort</b>, your <b>six quick wins</b>, the exact tools to use, a 4-day rollout plan, and the ROI to expect.</p>
        <p>You start where the map says to — <em>high impact, low effort</em> — and it's yours to keep. If we build together, <b>the $999 comes off your first month.</b></p>
      </div>
      <div>
        <div class="gmap" role="img" aria-label="Growth Map: a 2 by 2 matrix plotting opportunities by impact and effort, with the quick-wins quadrant highlighted.">
          <div class="gmap-head"><div class="t">Your Growth Map<small>Sample · impact × effort</small></div></div>
          <div class="gmap-body">
            <div class="y-ax">Impact →</div>
            <div class="plot-col">
              <div class="plot">
                <div class="qfill"></div>
                <div class="vline"></div><div class="hline"></div>
                <div class="quad tl">Quick wins</div>
                <div class="quad tr">Major projects</div>
                <div class="quad bl">Fill-ins</div>
                <div class="quad br">Ignore these</div>
                <div class="pt" style="top:13%;left:18%"><span class="d"></span><span class="lbl">Speed-to-lead</span></div>
                <div class="pt" style="top:25%;left:40%"><span class="d"></span><span class="lbl">Instant quotes</span></div>
                <div class="pt" style="top:36%;left:22%"><span class="d"></span><span class="lbl">Missed-call text-back</span></div>
                <div class="pt" style="top:47%;left:33%"><span class="d"></span><span class="lbl">Review requests</span></div>
                <div class="pt amber lft" style="top:19%;left:83%"><span class="d"></span><span class="lbl">Custom CRM build</span></div>
              </div>
              <div class="x-ax"><span>Low effort</span><span>High effort</span></div>
            </div>
          </div>
        </div>
        <div class="mock-cap">Illustrative sample — your map is built in the audit</div>
      </div>
    </div>

    <div class="how-block" style="margin-top:44px">
      <div class="how-copy">
        <span class="tag">Step 03 · two ways to go</span>
        <h3>Then we build it — your call how.</h3>
        <p>Once the map's clear, you pick the lane that fits how you like to work. Same outcome, two very different feels.</p>
        <p>Some owners want a partner building alongside them — the <b>AI Concierge</b>. Others just want it run for them — <b>Managed Agents</b>. Both land in the same place.</p>
      </div>
      <div class="fork">
        <div class="fcard">
          <div class="fic"><svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"><path fill="#F4F6F3" d="m76.7 42.6h22.3c0.8 0 0.9-2.6-0.7-2.6h-21.6c-1.6 0-2 2.3 0 2.6z"/><path fill="#F4F6F3" d="m135.5 39.8h-21c-1.8 0-1.9 2.8 0 2.8h21c1.6 0 2.8 1.3 2.8 2.8v37.8h-58.5c-1.8 0-2.1 2.8 0 2.9h58.5v4.3c0 1.7-1.3 3.1-2.8 3.2h-52c-2.2-0.2-2.5 2.5-0.2 2.6h13.9c-0.2 1.4-0.8 3.4-1.1 4.8h-15.7l-4.2-13.5c-1.3-4.6-4.6-8.2-8.6-10.3l1.3-4.5h2c3.1 0 5.7-2.2 5.9-5.4l0.1-2.8h1.4c1.7 0 3.3-2 2.2-4l-2.6-5.6c-0.1-7.3-5.1-13.7-13.2-13.7-7 0-13.9 5.4-14 13.3 0 3.4 1.1 6.9 3.4 10.7 0.8 1.2 1.2 2.7 0.8 4.3l-2.3 7.2c-5.2 2.1-10.2 7.5-11 13.9h-2.9v-11.1l5.4-0.5c1.8-0.1 1.8-2.8-0.3-2.8l-13.3 1.4c-1.6 0.3-1.5 2.9 0.3 2.8l5.3-0.6v10.8h-5.9c-4.2 0-8.6 3.6-8.6 8.8v30.3c0 1.4 2.8 1.7 2.8 0v-30.1c0-3.5 2.7-6.2 6-6.2h16.1c2.9 0 6 2.3 6 6v30.3c0 1.8 3.1 2.3 3-0.1v-29.9c0-5.4-4.2-9.1-8.9-9.1h-2.1c1.2-9.2 11.6-15.2 20.4-11.5 3.8 1.3 7.2 4.5 8.6 8.7l4.4 14.9c0.3 0.7 0.7 1.1 1.5 1.1h20.8c4.7 0 5.4 5.2 2.4 7.8-0.5 0.3-1.2 0.8-2.4 0.8h-25.5c-1.9 0-3.7-1.5-4.5-3.5l-5.7-16c-0.8-2-3.5-1-2.8 0.8l5.7 15.4c1.2 3.3 3.6 5.8 6.5 6v8.2c0 0.9 0.6 1.4 1.3 1.4l14.8 0.1c2.8 0 6.4 1.6 7.3 5.1 0.4 1.5 3.2 1.6 2.7-0.7-1.1-3.7-5-7.3-10.1-7.3h-13.2v-6.7h23.8c4.1 0 6.5-3.1 6.5-6.2 0.3-4-3.1-7.9-7-8h-1c0.5-1.4 0.9-3.1 1.1-4.8h13.1c0.2 4.6 0.6 7.4 4.3 11.8h-5.9c-1.6 0-2.2 3 0 3.1h28.4c1.6-0.1 1.8-3-0.3-3.1h-16.2c-1.1 0.1-6.6-2.9-7.3-8.3l-0.3-3.5h19.4c3.3 0.1 5.9-2.6 5.9-5.9v-44.9c0-3.1-2.4-5.5-5.7-5.6zm-79.6 35.9 1.7-5.1c0.6-2.5 0.3-4.7-1-6.8-1.6-2.5-2.9-5.3-2.8-9.4 0.2-6.3 5.8-10.7 11.6-10.7 5.2 0.3 9.4 3.4 9.6 10.4 0 1 1.7 3.8 2.9 7 0 0.3-2 0.2-2.5 0.4-0.7 0.1-1.2 0.6-1.2 1.5l-0.2 3.5c0 1.1-1 3.1-3.4 3.2h-2.9c-0.6 0.2-1.1 0.7-1.2 1.3l-1.5 5.1c-2.8-0.7-5.4-1.1-9.1-0.4z"/><path fill="#F4F6F3" d="m18 64.6c-4.9 2.1-9 7.9-9.2 13.5l-0.1 51.6c0 1.8 2.8 2.2 2.9 0l-0.1-51c0-6.3 5.4-13 12.9-13h24.5c2 0 2.1-2.8 0.1-2.8h-15.6l0.8-2.7h2.4c3.2-0.1 5.5-2.6 5.8-5.6l0.2-3 1.5-0.1c1.9 0 3.3-2.3 2.3-4.4l-3-5.5c0-7.5-5.5-12.6-13-12.6-7.8 0-14.6 5.6-14.6 13.4 0 4 1.8 7.7 3.4 10.2s0.9 4.8-1.2 12zm1.2-22.4c0.3-6 4.8-10.4 10.8-10.4 5.6-0.1 10.5 3.7 10.6 9.9 0 1.2 1.3 2.9 3.1 6.7h-2.3c-2.5 0-1.4 3-2 5.7-0.4 1.4-1.5 3-3.7 3h-2.3c-0.9 0-1.6 0.5-1.8 1.4l-1.2 4.6h-6c-1 0-2.4 0.1-3.3 0.3 1.6-5.2 2.8-8.4 0-12.7-1.2-1.8-2.1-4.8-2.4-7.8z"/><path fill="#F4F6F3" d="m75.7 79.3 17-4.6c7.5 1.4 7.4 1.7 8.7 1 0.8-0.7 2.2-3.1 3.1-4.7 0.7-1.1 1-2.3 0.4-3.4l5.5-1.5c3.7-0.7 3.7-6.1 0.1-7.1h-1.3l-24.6 1.7c-1.9 0.2-1.6 2.9 0.3 2.9l5.6-0.2 0.4 9-16 4.2c-1.5 0.3-1.3 3 0.8 2.7zm17.7-16.2 15.7-1.1c0.8 0 1 0 1.1 0.5 0.2 0.6-0.3 0.7-0.8 0.9l-7 2c-2.2 1.2-0.3 2.7 0 3.3 0.1 0.3 0 0.4-0.5 1.3-0.7 1-1.4 2.5-2 3.2l-6.2-1.1-0.3-9z"/><path fill="#C2F24F" d="m92.9 35.7 6.8 1.8c3.3 1 2.9 1 3.3 1.7l2.4 8.4c0.5 1.9 2.6 1.8 2.8 0.1l2.7-8.2c0.5-0.9 0.5-1.1 3.6-2l6.5-1.8c1.4-0.3 1.6-2.5-0.1-2.8l-6.4-1.9c-2.6-0.6-3.1-0.9-3.6-3.3l-2.7-7.8c-0.5-1.3-2.3-1.3-2.8 0l-2.5 8.8c-0.4 1.3-1.2 1.5-2.8 2l-7.2 2c-1.9 0.7-1.5 2.7 0 3zm9.1-0.3-4.1-1.2 4.5-1.2c3-0.9 3.2-3.5 4.3-7.5l0.9 3.2c1 3.3 2.6 4 5.1 4.7l3.2 0.8-3.4 1c-2.6 1-3.8 1.9-5 7.4l-1.1-3.5c-0.8-2.4-2.7-3.4-4.4-3.7z"/></svg></div>
          <div class="who">With You</div>
          <h3>AI Concierge</h3>
          <p>We build it live, on your screen, and train your team to run it. When we're done, you own it outright — no black box, no dependency.</p>
        </div>
        <div class="fcard">
          <div class="fic"><svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"><style>.ma0{fill:none;stroke:#C2F24F;stroke-width:2.4869;stroke-linejoin:round;stroke-miterlimit:7}.ma1{fill:none;stroke:#F4F6F3;stroke-width:2.4869;stroke-linecap:round;stroke-linejoin:round}</style><path class="ma0" d="m30.9 70 0.1-15.4c0-0.9 0.4-1.9 1.1-2.6l7.3-7.4"/><path class="ma0" d="m45.5 41.9h16.4c0.9 0 1.8-0.3 2.5-1l7.5-7.3"/><path class="ma0" d="m118.7 77v17.1c0 1-0.3 2-1 2.7l-7.4 7.6"/><path class="ma0" d="m78.9 118.7 15.7 0.1c1 0 1.9-0.3 2.6-1l8-8"/><path class="ma1" d="m60 59.7-15-15.1m-5.7-5.7-7.6-7.3m10.4 71.1v-15.7c0-0.9-0.3-1.8-1.1-2.6l-6.9-7.1m-10.6 48.4 15.7-15.5m32.4 24.4-7.3-5.7-19.3-18.5m59.9-6.6-14.6-14.8m35.9 36.5-15.4-15.2m22.9-21-11.8-11.8m13.2-19.8-13.5 13.7m-43.5-44.4 10.7-10.5"/><path class="ma1" d="m60.9 15.9 10.9 11.1m3.1 7.1v23.9"/><path class="ma1" d="m78.1 33.4 37.7 38"/><path class="ma1" d="m96.1 74.4h18.7"/><path class="ma1" d="m35.8 74.4h18.2"/><path class="ma1" d="m44.9 104.2 15-15.2"/><path class="ma1" d="m64.2 128.3 7.4-6.7"/><path class="ma1" d="m74.9 96.1v18.7"/><path class="ma1" d="m21.9 65.3c-0.5 0-1.1 0.2-1.4 0.6l-5.6 5.9"/><path class="ma1" d="m28.2 71.6-5.4-5.9"/><path class="ma1" d="m66 58h18.1c6.1 0 11.7 5.1 11.7 11.9v14c0 3-2.3 5-4.8 5h-31.7c-2.2 0-5-1.8-5-5.1v-13.2c0-7.2 5.5-12.6 11.7-12.6z"/><path class="ma1" d="m68.4 65h12.9c4.2 0 7.8 3.3 7.8 7.6s-3.1 7.8-7.8 7.8h-12.9c-4.1 0-7.4-3.3-7.4-7.6s3.6-7.8 7.4-7.8z"/><path class="ma1" d="m68.4 73.7v-1.9m12.7 1.9v-1.9"/><path class="ma1" d="m70.4 89c-0.5 2.5-1.1 4.4-1.7 6.7"/><path class="ma1" d="m79.5 89.5c0.6 2.1 1 3.8 1.8 6.3"/><path class="ma1" d="m64 96h22"/><path class="ma1" d="m111.6 22.6c-4.7 0.7-10.3 5.7-10.3 11.7 0 6.3 5 11.3 12.2 11.4 6.6 0 9.8-4.7 10.5-6.3-6 2.3-13.9-0.5-15.2-8.3-0.4-3.1 0.6-6.2 2.8-8.8v0.3z"/><circle class="ma1" cx="92.1" cy="13.7" r="3.9"/><circle class="ma1" cx="57.9" cy="12.8" r="3.9"/><ellipse class="ma1" cx="28.6" cy="28.9" rx="3.9" ry="3.9"/><circle class="ma1" cx="42.1" cy="42" r="3.9"/><circle class="ma1" cx="11.9" cy="74.4" r="3.9"/><circle class="ma1" cx="30.9" cy="74.4" r="3.9"/><circle class="ma1" cx="137.9" cy="54.5" r="3.9"/><circle class="ma1" cx="136.8" cy="92.1" r="3.9"/><circle class="ma1" cx="129.4" cy="128.6" r="3.9"/><circle class="ma1" cx="107.7" cy="107.2" r="3.9"/><circle class="ma1" cx="75.1" cy="137.1" r="3.9"/><circle class="ma1" cx="75.1" cy="118.8" r="3.9"/><circle class="ma1" cx="20.6" cy="128.6" r="3.9"/><circle class="ma1" cx="42.1" cy="107.2" r="3.9"/><circle class="ma1" cx="118.7" cy="74.4" r="3.9"/><circle class="ma1" cx="75" cy="30.1" r="3.9"/></svg></div>
          <div class="who">For You</div>
          <h3>Managed Agents</h3>
          <p>We build it, run it, and keep it sharp. Like hiring a teammate who never sleeps, never forgets to follow up, and never lets a lead go cold.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===================== APPROACH / AOA ===================== -->
<section id="approach">
  <div class="wrap">
    <div class="sec-head center">
      <span class="kicker">Built by operators, not engineers</span>
      <h2>AI doesn't fix a broken process. It <em>scales</em> one.</h2>
      <p>So we work in a deliberate order. It's also why "I tried AI and it flopped" almost always means the first two steps got skipped.</p>
    </div>
    <div class="aoa">
      <div class="aoa-step"><div class="letter">A</div><h3>Audit</h3><p>We learn how the work really flows today, and find what's quietly slowing you down.</p></div>
      <div class="aoa-step"><div class="letter">O</div><h3>Optimize</h3><p>We clear out the busywork and get the process clean — by hand, first.</p></div>
      <div class="aoa-step"><div class="letter">A</div><h3>Automate</h3><p>Then AI takes the repeatable parts, and you keep every judgment call.</p></div>
    </div>
  </div>
</section>

<!-- ===================== WHO ===================== -->
<section id="who" class="band">
  <div class="wrap">
    <div class="sec-head">
      <span class="kicker">Who it's for</span>
      <h2>For owners who run real businesses.</h2>
      <p>If you grow by answering customers fast and doing great work, this was built for you. A few we know well — and the list keeps growing:</p>
    </div>
    <div class="niches">
      <span class="niche">Roofers</span><span class="niche">Dentists</span><span class="niche">Landscapers</span><span class="niche">Med spas</span><span class="niche">Realtors</span><span class="niche">Accounting firms</span><span class="niche">HVAC &amp; plumbing</span><span class="niche">Law practices</span><span class="niche">Auto shops</span><span class="niche">Contractors</span>
    </div>
  </div>
</section>

<!-- ===================== FINAL CTA ===================== -->
<section id="book" class="final">
  <div class="wrap">
    <span class="kicker" style="justify-content:center;display:inline-flex">Your move</span>
    <h2 style="margin-top:20px">See the business you could be running.</h2>
    <p>Fifteen minutes, no slides, no commitment — just a clear read on the one change that would pay for itself the fastest.</p>
    <a href="#" class="btn-primary" style="font-size:16px;padding:15px 28px">Book your free 15-min AI Assessment</a>
  </div>
</section>

<footer>
  <div class="wrap foot-inner">
    <div class="logo" style="font-size:16px"><span class="dot"></span>Hybrid Theory</div>
    <div style="font-family:Inter">AI consulting for real businesses · hybridtheory.ai</div>
  </div>
</footer>`;

type FlowItem = { tab: string; steps: string[] };

const CYCLER: FlowItem[] = [
  { tab: "Speed-to-lead", steps: ["A new lead comes in", "Your AI replies in under 5 minutes", "The conversation gets booked"] },
  { tab: "Missed call", steps: ["A call goes unanswered", "A friendly text goes out instantly", "They book instead of bouncing"] },
  { tab: "Instant quote", steps: ["A customer asks for a price", "Your AI drafts the quote", "It goes out the same hour"] },
  { tab: "Reviews", steps: ["A job is marked complete", "A review request goes out", "A new 5-star rolls in"] },
];

export function HomeRest() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const tabsEl = root.querySelector<HTMLElement>("#cyc-tabs");
    const flowEl = root.querySelector<HTMLElement>("#cyc-flow");
    let timer: ReturnType<typeof setInterval> | null = null;

    if (tabsEl && flowEl) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let idx = 0;
      let auto = true;

      const render = () => {
        Array.from(tabsEl.children).forEach((c, i) => {
          (c as HTMLElement).className = "cyc-tab" + (i === idx ? " on" : "");
        });
        const d = CYCLER[idx];
        flowEl.innerHTML = "";
        d.steps.forEach((s, i) => {
          const step = document.createElement("div");
          step.className = "flow-step cyc-fade" + (i === 2 ? " final" : "");
          step.innerHTML = '<span class="n">' + (i + 1) + '</span><span class="s">' + s + "</span>";
          flowEl.appendChild(step);
          if (i < 2) {
            const a = document.createElement("div");
            a.className = "flow-arrow";
            a.textContent = "→";
            flowEl.appendChild(a);
          }
        });
      };

      tabsEl.innerHTML = "";
      CYCLER.forEach((d, i) => {
        const b = document.createElement("button");
        b.className = "cyc-tab" + (i === 0 ? " on" : "");
        b.textContent = d.tab;
        b.onclick = () => {
          auto = false;
          if (timer) clearInterval(timer);
          idx = i;
          render();
        };
        tabsEl.appendChild(b);
      });
      render();
      if (!reduce) {
        timer = setInterval(() => {
          if (auto) {
            idx = (idx + 1) % CYCLER.length;
            render();
          }
        }, 3600);
      }
    }
    return () => { if (timer) clearInterval(timer); };
  }, []);

  return <div id="ht-v2" ref={ref} dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}

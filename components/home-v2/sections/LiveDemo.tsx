import { WorkflowTheater } from "../WorkflowTheater/WorkflowTheater";

export function LiveDemo() {
  return (
    <section id="inaction" className="htv-section">
      <div className="htv-wrap">
        <div className="htv-sec-head htv-center">
          <span className="htv-kicker">See it in action</span>
          <h2>Watch a whole job handle itself.</h2>
          <p>
            Pick a workflow. First signal to follow-through, end to end &mdash; while you&rsquo;re on
            the job.
          </p>
        </div>

        <WorkflowTheater />
      </div>
    </section>
  );
}

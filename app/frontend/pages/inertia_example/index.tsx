import { Head } from "@inertiajs/react";
import { version as react_version } from "react";

import cs from "./index.module.css";

const InertiaExample = ({
  rails_version,
  ruby_version,
  rack_version,
  inertia_rails_version,
}: {
  rails_version: string;
  ruby_version: string;
  rack_version: string;
  inertia_rails_version: string;
}) => (
  <div className={cs.root}>
    <Head title="Ruby on Rails + Inertia + React" />

    <nav className={cs.subNav}>
      <a
        href="https://rubyonrails.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rails
      </a>
      <a
        href="https://inertia-rails.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        Inertia.js
      </a>
      <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
        React
      </a>
    </nav>

    <div className={cs.footer}>
      <div className={cs.card}>
        <p>
          Edit <code>app/frontend/pages/inertia_example/index.tsx</code> and
          save to test <abbr title="Hot Module Replacement">HMR</abbr>.
        </p>
      </div>

      <ul>
        <li>
          <ul>
            <li>
              <strong>Rails version:</strong> {rails_version}
            </li>
            <li>
              <strong>Rack version:</strong> {rack_version}
            </li>
          </ul>
        </li>
        <li>
          <strong>Ruby version:</strong> {ruby_version}
        </li>
        <li>
          <ul>
            <li>
              <strong>Inertia Rails version:</strong> {inertia_rails_version}
            </li>
            <li>
              <strong>React version:</strong> {react_version}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

export default InertiaExample;

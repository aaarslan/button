import "./App.css";

import type React from "react";
import { useState } from "react";

import { Button } from "../lib/Button";

export const Globe: React.ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <title>Globe</title>
    <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm10 12a9.938 9.938 0 0 1-1.662 5.508l-1.192-1.193a.5.5 0 0 1-.146-.353V15a3 3 0 0 0-3-3h-3a1 1 0 0 1-1-1v-.5a.5.5 0 0 1 .5-.5A2.5 2.5 0 0 0 15 7.5v-1a.5.5 0 0 1 .5-.5h1.379a2.516 2.516 0 0 0 1.767-.732l.377-.377A9.969 9.969 0 0 1 22 12Zm-19.951.963 3.158 3.158A2.978 2.978 0 0 0 7.329 17H10a1 1 0 0 1 1 1v3.949a10.016 10.016 0 0 1-8.951-8.986ZM13 21.949V18a3 3 0 0 0-3-3H7.329a1 1 0 0 1-.708-.293l-4.458-4.458A9.978 9.978 0 0 1 17.456 3.63l-.224.224a.507.507 0 0 1-.353.146H15.5A2.5 2.5 0 0 0 13 6.5v1a.5.5 0 0 1-.5.5 2.5 2.5 0 0 0-2.5 2.5v.5a3 3 0 0 0 3 3h3a1 1 0 0 1 1 1v.962a2.516 2.516 0 0 0 .732 1.767l1.337 1.337A9.971 9.971 0 0 1 13 21.949Z" />
  </svg>
);

function App() {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <div className="container">
        <h2>Test how your component will look</h2>
        <p>
          If you haven't already replace the content of the div below with the
          component you are working on.
        </p>
      </div>
      <div className="ReplaceSample">
        {/* Replace the Sample component with your own and run yarn run dev */}
        <div className="subcontainer">
          <h4>Primary</h4>
          <Button
            variant="primary"
            color="info"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click me
          </Button>
          <Button
            variant="primary"
            color="danger"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
          <Button
            variant="primary"
            color="warning"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
          <Button
            variant="primary"
            color="success"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
        </div>
        <div className="subcontainer">
          <h4>Secondary</h4>
          <Button
            variant="secondary"
            color="info"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click me
          </Button>
          <Button
            variant="secondary"
            color="danger"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
          <Button
            variant="secondary"
            color="warning"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
          <Button
            variant="secondary"
            color="success"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
        </div>
        <div className="subcontainer">
          <h4>Link</h4>
          <Button
            variant="link"
            color="info"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click me
          </Button>
          <Button
            variant="link"
            color="danger"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
          <Button
            variant="link"
            color="warning"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
          <Button
            variant="link"
            color="success"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
          >
            Click Me
          </Button>
        </div>
        <div className="subcontainer">
          <h4>Disabled</h4>
          <Button
            variant="primary"
            color="info"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
            disabled
          >
            Click me
          </Button>
          <Button
            variant="primary"
            color="danger"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
            disabled
          >
            Click Me
          </Button>
          <Button
            variant="primary"
            color="warning"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
            disabled
          >
            Click Me
          </Button>
          <Button
            variant="primary"
            color="success"
            loading={loading}
            onClick={handleButtonClick}
            icon={Globe}
            iconPosition="left"
            disabled
          >
            Click Me
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;

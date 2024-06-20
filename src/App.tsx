import { useState } from "react";

import Button from "./components/Button";
import Checkbox, { CheckboxChangeEvent } from "./components/Checkbox";
import Divider from "./components/Divider";
import { PAGE_OPTIONS } from "./constants";

import "./App.css";

function App() {
  const [state, setState] = useState(() =>
    PAGE_OPTIONS.map((option) => ({ ...option, checked: false }))
  );

  function handleSelectAll(e: CheckboxChangeEvent) {
    if (e.checked)
      setState((prevState) =>
        prevState.map((option) => {
          return { ...option, checked: true };
        })
      );
    else
      setState((prevState) =>
        prevState.map((option) => {
          return { ...option, checked: false };
        })
      );
  }

  function handleChange(e: CheckboxChangeEvent) {
    const { checked, value } = e;

    if (value === "all_pages") return handleSelectAll(e);

    setState((prevState) =>
      prevState.map((option) => {
        if (value === option.value) {
          return {
            ...option,
            checked,
          };
        }

        return option;
      })
    );
  }

  function handleDone() {
    setState(PAGE_OPTIONS.map((option) => ({ ...option, checked: false })));

    setTimeout(() => {
      alert("State reset to default!");
    }, 0);
  }

  return (
    <>
      <main className="main">
        <div className="card card-options">
          <div className="list-options">
            {state.map((option) => (
              <div key={option.value}>
                {option.value === "all_pages" ? (
                  <>
                    <Checkbox onChange={handleChange} {...option} />

                    <Divider />
                  </>
                ) : (
                  <Checkbox onChange={handleChange} {...option} />
                )}
              </div>
            ))}
          </div>
          <Divider />
          <div className="btn-container">
            <Button onClick={handleDone}>Done</Button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

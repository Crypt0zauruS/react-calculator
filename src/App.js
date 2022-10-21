import "./App.css";
import React, { useState, useEffect } from "react";
import { evaluate } from "mathjs";

function App() {
  const initialState = "0";
  const [formula, setFormula] = useState("");
  const [display, setDisplay] = useState(initialState);
  const [isEvaluated, setIsEvaluated] = useState(false);

  useEffect(() => {
    if (formula === "") {
      setDisplay(initialState);
    } else {
      if (/^[*+/]/.test(formula)) {
        setFormula("0" + formula);
        setDisplay("0" + formula);
      } else {
        setFormula(formula);
        setDisplay(formula);
      }
    }

    if (isEvaluated) {
      setIsEvaluated(false);

      if (/[*+/-]/.test(formula.slice(-1))) {
        setFormula(display + formula.slice(-1));
      } else {
        setFormula(formula.slice(-1));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formula]);

  useEffect(() => {
    if (display === initialState) {
      setFormula("");
    }
  }, [display]);

  useEffect(() => {
    setDisplay(initialState);
  }, []);

  const solve = () => {
    if (/[0-9]/.test(formula.slice(-1))) {
      const uselessZero = /[.0]+$/;
      const result = /\./.test(evaluate(formula))
        ? evaluate(formula).toFixed(6).replace(uselessZero, "")
        : evaluate(formula);

      setDisplay(result.toString());
      setIsEvaluated(true);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <table id="calculator">
          <tbody>
            <tr>
              <td colSpan="3">
                <p id="title">🦕 Crypt0zauruS' 🧮</p>
                <p id="display">{display}</p>
              </td>

              <td>
                <input
                  defaultValue="C"
                  id="clear"
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setDisplay(initialState)}
                />
                <hr />
                <input
                  defaultValue="Back"
                  id="back"
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    if (!isEvaluated) setFormula(formula.slice(0, -1));
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="btn btn-secondary"
                  id="one"
                  type="button"
                  defaultValue="1"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "1");
                    } else setFormula(formula + "1");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="two"
                  type="button"
                  defaultValue="2"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "2");
                    } else setFormula(formula + "2");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="three"
                  type="button"
                  defaultValue="3"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "3");
                    } else setFormula(formula + "3");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="divide"
                  type="button"
                  defaultValue="/"
                  onClick={() => {
                    if (/[*+\-/.]/.test(formula.slice(-1))) {
                      setFormula(formula.slice(0, -1) + "/");
                    } else {
                      setFormula(formula + "/");
                    }
                  }}
                />{" "}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="btn btn-secondary"
                  id="four"
                  type="button"
                  defaultValue="4"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "4");
                    } else setFormula(formula + "4");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="five"
                  type="button"
                  defaultValue="5"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "5");
                    } else setFormula(formula + "5");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="six"
                  type="button"
                  defaultValue="6"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "6");
                    } else setFormula(formula + "6");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="multiply"
                  type="button"
                  defaultValue="*"
                  onClick={() => {
                    if (/[*+\-/.]/.test(formula.slice(-1))) {
                      setFormula(formula.slice(0, -1) + "*");
                    } else {
                      setFormula(formula + "*");
                    }
                  }}
                />{" "}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="btn btn-secondary"
                  id="seven"
                  type="button"
                  defaultValue="7"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "7");
                    } else setFormula(formula + "7");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="eight"
                  type="button"
                  defaultValue="8"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "8");
                    } else setFormula(formula + "8");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="nine"
                  type="button"
                  defaultValue="9"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      setFormula(formula.slice(0, -1) + "9");
                    } else setFormula(formula + "9");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="subtract"
                  type="button"
                  defaultValue="-"
                  onClick={() => {
                    setFormula(formula + "-");
                  }}
                />{" "}
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="btn btn-secondary"
                  id="zero"
                  type="button"
                  defaultValue="0"
                  onClick={() => {
                    if (formula.charAt(0) === "0" && formula.length < 2) {
                      return;
                    } else setFormula(formula + "0");
                  }}
                />{" "}
              </td>
              <td>
                <input
                  className="btn btn-secondary"
                  id="decimal"
                  type="button"
                  defaultValue="."
                  onClick={() => {
                    if (!/\./.test(formula.slice(-1))) {
                      if (/[0-9]/.test(formula.slice(-1))) {
                        const regex = /^.+[+*/-]/;
                        const temp = formula.replace(regex, "");
                        if (!/\./.test(temp)) {
                          setFormula(formula + ".");
                        }
                      } else if (!formula.slice(-1)) {
                        setFormula("0.");
                      }
                    }
                  }}
                />{" "}
              </td>

              <td>
                <input
                  className="btn btn-secondary"
                  id="equals"
                  type="button"
                  defaultValue="="
                  onClick={() => solve(formula)}
                />{" "}
              </td>

              <td>
                <input
                  className="btn btn-secondary"
                  id="add"
                  type="button"
                  defaultValue="+"
                  onClick={() => {
                    if (/[*+/.]/.test(formula.slice(-1))) {
                      setFormula(formula.slice(0, -1) + "+");
                    } else if (
                      /-/.test(formula.slice(-1)) &&
                      !/[0-9]/.test(formula.slice(-2))
                    ) {
                      setFormula(formula.slice(0, -2) + "+");
                    } else if (
                      /-/.test(formula.slice(-1)) &&
                      /[0-9]/.test(formula.slice(-2))
                    ) {
                      setFormula(formula.slice(0, -1) + "+");
                    } else {
                      setFormula(formula + "+");
                    }
                  }}
                />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="footer">
        &copy; Copyright by Crypt0zauruS
        <h1>
          Follow me on
          <a
            className="twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/CryptosaurusRe4"
          >
            <i className="fab fa-twitter"></i>
          </a>
          and
          <a
            className="github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Crypt0zauruS"
          >
            <i className="fab fa-github"></i>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default App;

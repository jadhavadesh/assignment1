import React, { useState } from "react";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const FirstQue = () => {
  const [firstArg, setFirstArg] = useState(0);
  const [secondArg, setSecondArg] = useState(0);
  const [x, setX] = useState(null);

  const calculate = (a, b) => {
    let res = 0;

    try {
      if (isNaN(a) && isNaN(b)) {
        toast.error("argument is not a number");
        console.log("argument is not a number");
      } else {
        res = Math.sqrt(3 * a + 1) / b;
        setX(res);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  //   console.log(calculate(5, 4));

  return (
    <>
      <div>First Question</div>
      <h3>Find x in 3 * a + 1 / b</h3>
      <label style={{ marginRight: "10px" }}>
        Enter two arguments for finding x
      </label>
      <div>
        <input
          style={{ marginRight: "10px" }}
          type={"text"}
          value={firstArg}
          onChange={(e) => setFirstArg(e.target.value)}
        />
        <input
          type={"text"}
          value={secondArg}
          onChange={(e) => setSecondArg(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => calculate(firstArg, secondArg)}>Submit</button>
      </div>

      <h2>The value of x is : {x}</h2>

      <div>
        <Link to="/second">
          <button>Got to next question</button>
        </Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default FirstQue;

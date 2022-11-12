import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SecondQue = () => {
  const [largestNumber, setLargetNumber] = useState(null);
  const [string, setString] = useState(null);
  const [polyfill, setPolyfill] = useState(null);
  // array
  const arr1 = [20, 40, 60, 100, 500, 30, 800];
  const obj1 = ["Adesh"];
  const largest = (arr) => {
    let i;
    let max = arr[0];
    try {
      if (typeof max === "number") {
        for (i = 1; i < arr.length; i++) {
          if (arr[i] > max) max = arr[i];
        }
        setLargetNumber(max);
      } else {
        setString("The element of the array is string");
        toast.error("The element of the array is string");
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  // polyfill for  reduce method
  const arr2 = [20, 80, 5000, 300, 40];
  //   var initialValue = 0;
  Array.prototype.myReduce = function (cb, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
      accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
  };
  const larger = () => {
    arr2.myReduce((acc, curr) => {
      if (curr > acc) acc = curr;
      setPolyfill(acc);
    }, 0);
  };

  //   console.log(large);
  return (
    <>
      <div>Find the largest element in the array</div>
      <div>
        <h3> [1] Array is : [20,40,60,100,500,30,800]</h3>
      </div>
      <div>
        <h2>The largest number is : {largestNumber}</h2>
      </div>
      <div>
        <button onClick={() => largest(arr1)}>Find largest number</button>
      </div>
      <hr />

      <div>
        <h3> [2] Array is : ["car", "bike"]</h3>
      </div>
      <div>
        <h2>The largest number is : {string}</h2>
      </div>
      <div>
        <button onClick={() => largest(obj1)}>Find largest number</button>
      </div>
      <hr />

      <div>
        <h1>Using polyfill of reduce method</h1>
        <h3> [3] Array is : [20, 80, 5000, 300, 40]</h3>
      </div>
      <div>
        <h2>The largest number is : {polyfill}</h2>
      </div>
      <div>
        <button onClick={larger}>Find largest number</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default SecondQue;

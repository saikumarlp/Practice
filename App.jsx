import { useState } from "react";

const randomNumber = Math.floor(Math.random() * 20) + 1;

export default function App() {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setVal(value === "" ? "" : Number(value));
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(111, 77, 77)",
          border: "2px solid white",
          borderRadius: "20px",
          padding: "10px"
        }}
      >
        <h3 style={{ color: "white", textAlign: "center" }}>
          Guess Number between 1 to 20
        </h3>
        <input
          type="number"
          name="guess"
          id="guess"
          style={{
            border: "2px solid green",
            padding: "10px",
            height: "10px",
            width: "450px",
            display: "block",
            margin: "0 auto"
          }}
          onChange={handleChange}
        />
        {val === "" ? (
          <p></p>
        ) : val === randomNumber ? (
          <p
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: "30px",
            }}
          >
            You Guessed: Yippee, correct!
          </p>
        ) : val > randomNumber ? <p
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: "30px",
            }}
          >
            Number is Greater
          </p> : (
          <p
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: "30px",
            }}
          >
            Number is Smaller
          </p>
        )}
      </div>
    </>
  );
}

import React from "react";
import Button from "./Button.jsx";
import Side from "./Side.jsx";
import Cards from "./cards.jsx";
import TodoList from "./indexxx.jsx";

const WrapperInfo = () => {
  // Correctly get the current year
  const date = new Date().getFullYear();

  return (
    <div className="wrapper">
      {/* Cards Section */}
      <section className="cards">
        <Cards name="Mohammad" desc="Hello" date={date} />
        <Cards date={date} />
        <Cards date={date} />
        <Cards date={date} />
        <Cards name="Mohammad" desc="Hello" date={date} />
        <Cards name="Niggeer" desc="Hello" date={date} />
      </section>
      <TodoList></TodoList>

      {/* Sidebar Section */}
      <section className="side">
        <Side />
      </section>

    </div>

  );
};

export default WrapperInfo;

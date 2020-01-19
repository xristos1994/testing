import React from "react";
import Counter from "./../counter/";

export const Page = () => {
  return (
    <div>
      <h1 data-testid="pageTitle">TEST PAGE</h1>
      <Counter />
    </div>
  );
};

export default Page;

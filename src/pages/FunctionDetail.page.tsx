import React from "react";
import { Code } from "../components/Code";
import { CodeEditor } from "../components/CodeEditor";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Table } from "../components/Table";

export function FunctionDetail() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="p-9">
        <h1 className="py-6">
          How do I find all objects with a specific field value in an array
          using javascript
        </h1>
        <CodeEditor></CodeEditor>
        <Code></Code>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

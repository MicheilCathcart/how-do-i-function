import React from "react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Table } from "../components/Table";

export function FunctionPage() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className="p-9">
        <h1 className="py-6">Latest functions</h1>
        <Table></Table>
        <h1 className="py-6">Fastest functions</h1>
        <Table></Table>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

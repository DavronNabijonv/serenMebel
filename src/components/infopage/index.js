import React from "react";
import Navbar from "../../layouts/navbar";
import Malumot from "../pageitems/infopageitems/malumot";
import Malumot2 from "../pageitems/infopageitems/malumot2";
import Main from "../pageitems/infopageitems/main";

export default function Info() {
  return (
    <div>
      <Navbar />
      <Main />
      <Malumot />
      <Malumot2 />
    </div>
  );
}

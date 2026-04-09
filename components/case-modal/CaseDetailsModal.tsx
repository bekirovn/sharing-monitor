import Link from "next/link";
import React, { useState } from "react";
import Popup from "reactjs-popup";

export default function CaseDetailsModal() {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
  return (
    <Popup
      trigger={
        <img src="/img/icon_expand.svg" />}
      modal
      nested
    >
        <div className="modal bg-white border-1px border-[sky] mx-auto max-w-3xl">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Modal Title </div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
            nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
            quibusdam voluptates delectus doloremque, explicabo tempore dicta
            adipisci fugit amet dignissimos? <br /> Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Consequatur sit commodi beatae optio
            voluptatum sed eius cumque, delectus saepe repudiandae explicabo
            nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                //console.log("modal closed ");
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
    </Popup>
  );
}

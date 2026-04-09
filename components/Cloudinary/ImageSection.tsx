import { useContext, useEffect, useState } from "react";
import { LangContext } from "../LangProvider";

type Props = {
  imageUrl: string;
};

export default function ImageSection({ imageUrl }: Props) {
  const lang = useContext(LangContext);
  
  return (
    <div className="leading-5">
        <strong className="uppercase flex flex-row">
            {lang === "sr" ? "slika/skrinšot" : "image/screenshot"}
          </strong>
          <br />
      {imageUrl != "" && (
        <a href={imageUrl} target="_blank">
          <img className="h-40" src={imageUrl} />
        </a>
      )}
    </div>
  );
}

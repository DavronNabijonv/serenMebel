import React from "react";
import { useTranslation } from "react-i18next";
import bir from "../../assets/images/seren/oshxona/HI-TECH/13.jpg";
import { Link } from "react-router-dom";
import "./index.scss";

export default function To_Build() {
  const { t } = useTranslation();
  return (
    <div className="tobuild">
      <div className="t_grp">
        <img src={bir} />
        <Link to="/build">
          <button>{t("pod")}</button>
        </Link>
      </div>
    </div>
  );
}

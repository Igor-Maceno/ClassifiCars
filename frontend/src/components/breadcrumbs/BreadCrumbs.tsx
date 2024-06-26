import React from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./BreadCrumbs.module.css";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const BreadCrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs"><Link to="/" className="breadHome">Home</Link> {crumbs}</div>;
};

export default BreadCrumbs;

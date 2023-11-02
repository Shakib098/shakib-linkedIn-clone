import React from 'react';
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div classNme="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle }</p>
            </div>
        </div>
    )

  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("#Coder is back", "Top news - 9099 readers")}
        {newsArticle("Shahrukh khan is back", "Top news - 100050 readers")}
        {newsArticle("Shahrukh khan is back", "Top news - 100050 readers")}
        {newsArticle("Shahrukh khan is back", "Top news - 100050 readers")}
        {newsArticle("Shahrukh khan is back", "Top news - 100050 readers")}
        {newsArticle("Shahrukh khan is back", "Top news - 100050 readers")} 
    </div>
  )
}

export default Widgets
import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div className="content">
        <h1 style={{ color: "white", textAlign: "left" }}>Projects</h1>
        <div className="Col">
          <Card
            image="outfitCheck"
            title="Outfit Check"
            date="2019"
            description="Amazon Alexa skills that gives users feedback on wether an
                outfit 'goes' "
            languages={["Node.js", "Amazon Lambda"]}
          />
        </div>
        <div className="Col">
          <Card
            image="MyUCSC"
            title="MyUCSC Portal Redesign"
            date="2019"
            description="Redesigned the myUCSC student portal for a final project"
            languages={["Figma"]}
          />
        </div>
      </div>
    );
  }
}
function Card(props) {
  return (
    <div className="card">
      <img
        src={require("./Assets/" + props.image + ".jpg")}
        className="cardPhoto"
        alt="project images"
      />
      <div className="cardBody">
        <h4>{props.title}</h4>
        <h5>{props.date}</h5>
        <p style={{ float: "left" }}>{props.description}</p>
        <LanguageIcon langs={props.languages} />
      </div>
    </div>
  );
}
function LanguageIcon({ langs }) {
  return (
    <div>
      {langs.map(lang => (
        <div className="languageIcon" style={{ float: "left" }}>
          {lang}
        </div>
      ))}
    </div>
  );
}
export default Projects;

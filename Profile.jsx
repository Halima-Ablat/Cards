import PropTypes from "prop-types";

function Profile(props) {
  return (
    <>
      <div className="card">
        <img src={props.image} alt="" />

        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    </>
  );
}

export default Profile;

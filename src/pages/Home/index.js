import { useEffect, useState } from "react";
import UploadCard from "../../components/home/UploadCard";
import { getAllUploads } from "../../actions/Uploads";
import "./index.css";

import { connect } from "react-redux";
import PropTypes from "prop-types";

const Home = (props) => {
  useEffect(() => {
    props.getAllUploads();
  }, []);

  return (
    <div className="homeContainer">
      <h1>Uploads</h1>

      <div className="uploadsContainer">
        {props.uploads.uploadsList &&
          props.uploads.uploadsList.map((item, i) => {
            return <UploadCard data={item} index={i} key={String(i)} />;
          })}
      </div>
    </div>
  );
};

Home.propTypes = {
  setToOppositeTheme: PropTypes.func.isRequired,
  common: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  uploads: state.uploads,
});

export default connect(mapStateToProps, { getAllUploads })(Home);

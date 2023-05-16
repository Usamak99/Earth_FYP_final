import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";


import { checkImage } from "../../utils/imageUpload";

const NGallery = ({ setNGallery }) => {
  const { auth, theme } = useSelector((state) => state);
  const dispatch = useDispatch();




  const handleSubmit = e => {
      e.preventDefault();
      dispatch(NGallery( {auth} ) );
  };

  return (
    <div className="edit_profile">
      <button
        className="btn btn-danger btn_close"
        onClick={() => setNGallery(false)}
      >
        Close
      </button>

      <form onSubmit={handleSubmit}>
        
        
        <div className="form_group">
          <label htmlFor="gName">Gallery Name</label>

          <input
            type="text"
            className="form-control"
            id="gName"
            name="gName"
            value={gName}
            onChange={(e) => setgName(e.target.value)}
          />
        </div>

        
        <button className="btn btn-info w-100" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default NGallery;

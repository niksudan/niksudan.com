import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import uniqueRandomArray from 'unique-random-array';
import { selectProject } from '../actions/projects';
import placeholders from '../data/placeholders';
import './styles/Panel.css';
const placeholder = uniqueRandomArray(placeholders);

const Panel = ({ dispatch, data, index }) => {
  return (
    <div className="panel" onClick={(e) => {
      e.preventDefault();
      dispatch(selectProject(index));
      browserHistory.push(`/${data.slug}`);
    }}>
      <div className="panel__image" style={{
        backgroundImage: `url('${data.image ? data.image : placeholder()}')`
      }}></div>
      <div className="panel__content">
        <h4>{data.date}</h4>
        <h2>{data.name}</h2>
      </div>
    </div>
  );
};

export default connect()(Panel);

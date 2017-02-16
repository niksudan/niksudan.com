import React from 'react';
import { connect } from 'react-redux';
import { Motion, spring } from 'react-motion';
import Panel from '../components/Panel';
import Project from '../components/Project';
import Modal from '../components/Modal';
import { MOTION_MODAL } from '../constants/motion';
import { unselectProject } from '../actions/projects';

const Index = ({ dispatch, projects }) => {
  return (
    <div className="app__view">
      {projects.items.map((project, index) => (
        <Panel
          key={index}
          index={index}
          data={project}
          />
      ))}
      <Motion
        defaultStyle={{ transition: 0 }}
        style={{ transition: spring(projects.isOpen ? 1 : 0, MOTION_MODAL) }}
        >
        {style =>
          projects.current &&
          <Modal
            transition={style.transition}
            handleClose={(e) => {
              e.preventDefault();
              dispatch(unselectProject());
            }}
            >
            <Project data={projects.current} />
          </Modal>
        }
      </Motion>
    </div>
  );
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(mapStateToProps)(Index);

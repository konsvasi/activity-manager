import React from "react";

const ActivityModal = ({ closeModal, modalState }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create an activity</p>
        </header>
        <section className="modal-card-body">
          <div className="content">
            <div className="field">
              <label className="label">Give a name to your activity</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Activity name"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">When?</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Date placeholder"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Who?</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Invite some friends"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary" onClick={closeModal}>
            Save
          </button>
          <button className="button" onClick={closeModal}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ActivityModal;

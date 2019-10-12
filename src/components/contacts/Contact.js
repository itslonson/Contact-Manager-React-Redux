import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteContact } from "../../actions/contactActions";

import "./styles/contact.css";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteContact(id);
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{" "}
          <i
            className="delete fas fa-times"
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`contact/edit/${id}`}>
            <i className="edit fas fa-pencil-alt" />
          </Link>
          {showContactInfo ? (
            <i
              onClick={() =>
                this.setState({
                  showContactInfo: !this.state.showContactInfo
                })
              }
              className="hide fas fa-chevron-up"
              style={{ cursor: "pointer" }}
            ></i>
          ) : (
            <i
              onClick={() =>
                this.setState({
                  showContactInfo: !this.state.showContactInfo
                })
              }
              className="show fas fa-chevron-down"
              style={{ cursor: "pointer" }}
            ></i>
          )}
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">{email}</li>
            <li className="list-group-item">{phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteContact }
)(Contact);

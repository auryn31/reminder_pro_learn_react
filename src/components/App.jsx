import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';
import FlipMove from 'react-flip-move';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        text: '',
        dueDate: ''
      }
    }

    addReminder() {
      console.log('duedate', this.state.dueDate);
      this.props.addReminder(this.state.text, this.state.dueDate);
    }

    deleteReimder(id) {
      this.props.deleteReminder(id);
    }

    renderReminders(){
      const  { reminders } = this.props;
      return (
          <ul className="list-group col-sm-4">
            <FlipMove duration={250} easing="ease-out" enterAnimation="accordionVertical" leaveAnimation="accordionVertical">
              {
                reminders.map(reminder => {
                  return this.renderReminderItems(reminder);
                })
              }
              <li  className="list-group-item button-list-group">
                <div
                  className="btn btn-danger list-item button-list-item"
                  onClick={() => this.props.clearReminders()}>
                  Clear Reminders
                </div>
              </li>
              </FlipMove>
          </ul>
      )
    }

    renderReminderItems(reminder) {
      return(
        <li key={reminder.id} className="list-group-item">
          <div className="list-item">
            <div>{reminder.text}</div>
            <div><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
          </div>
          <button className="list-item delete-button btn btn-danger"
            onClick={() => this.deleteReimder(reminder.id)}>
            &#x2715;
          </button>
        </li>
      )
    }

    render() {
      return (
        <div className="App">
          <div className="title">
              Reminder Pro
          </div>
          <div className ="form-inline reminder-form col-sm-4">
            <div className ="form-group">
              <input
                className="form-control"
                placeholder="I hav to do..."
                onChange = { event => this.setState({text: event.target.value})}
              />
              <input className="form-control"
                type="datetime-local"
                onChange={event => this.setState({dueDate: event.target.value})}
              />
            </div>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => this.addReminder()}>
              Add Reminder
            </button>
          </div>
          { this.renderReminders() }
        </div>
      )
    }
}

function mapStateToProps(state) {
  return {
    reminders: state
  }
}

export default connect(mapStateToProps, {addReminder, deleteReminder, clearReminders})(App);

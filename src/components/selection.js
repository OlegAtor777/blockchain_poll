import React from 'react';
import Polls from '../polls.json';

class Selection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
        this.ValChange = this.ValChange.bind(this);
        this.SubmitForm = this.SubmitForm.bind(this);
    }

    ValChange = (event) => {
        this.setState({
            status: true,
            value: event.target.value,
        });
    }

    SubmitForm = (event) => {
        event.preventDefault();
        console.log(this.state.value);
    }

    render() {
        const id = this.state.id
        const poll = Polls[id]

        return (

                        <form onSubmit={this.SubmitForm}>
                            <h3>{poll.question}</h3>

                            <div className="form-check">
                                {poll.options.map((opt, index) => {
                                    return (
                                        <div key={id}>
                                            <input
                                                className="form-check-input"
                                                name="radiobutton"
                                                type="radio"
                                                value={index}
                                                onChange={this.ValChange}/>
                                            <label className="form-check-label">{opt}</label>
                                        </div>
                                            )
                                        }
                                    )
                                }
                            </div>
                            <button className="btn btn-secondary mt-3" type="submit" disabled={false === this.state.status}>Submit vote</button>
                        </form>
        )
    }
}

export default Selection;
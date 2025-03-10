import { render } from "@testing-library/react";
import React from "react";

class AddContact extends React.Component {
    state = {
        name: '',
        email: ''
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === '' || this.state.email === ''){
            alert('All the fields are mandatory');
            return
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: '',email: ''})
    }
    render() {
        return (
            <div className="ui main py-5 m-3">
                <h2>Add Contact</h2>
                <form class="ui form" onSubmit={this.add}>
                    <div class="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div class="field">
                        <label>Email</label>
                        <input type="text" name="Email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                    </div>
                    <button class="ui button primary" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;
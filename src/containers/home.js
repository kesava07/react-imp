import React, {
  Component
} from 'react';
import Header from '../components/Header';
import CommonService from '../services/services'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: undefined

    }
  }
  componentDidMount() {
    // CommonService.getCardsData().then((result) => {
    //   this.setState(() => ({
    //     data: result
    //   }))
    // })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.secondName.value;
    const phoneNumber = e.target.elements.phoneNum.value;
    if (firstName && lastName && phoneNumber) {
      this.setState(() => ({
        data: {
          firstName, lastName, phoneNumber
        }
      }))
      e.target.elements.firstName.value = ''
      e.target.elements.secondName.value = ''
      e.target.elements.phoneNum.value = ''
    } else if (!this.state.error) {
      this.setState(() => ({ error: "please fill all the details" }))
    }
  }
  render() {
    console.log(this.state.data)
    return (
      <div>
        <Header />
        <h1 > Home page </h1>
        <form className="mx-4" onSubmit={this.handleSubmit}>
          <input type="text" autoFocus name="firstName" className="form-control w-25 mb-2" placeholder="first name" />
          <input type="text" className="form-control w-25 mb-2" name="secondName" placeholder="last name" />
          <input type="number" className="form-control w-25 mb-2" name="phoneNum" placeholder="mobile number" />
          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
        </form>
        {
          this.state.error && <p className="text-danger m-4">{this.state.error}</p>
        }
        {/* {
          this.state.data.map((val) => {
            return (
              <p key={val}> {val.name} - {val.age} </p>
            )
          })
        } */}
      </div>
    )
  }
}
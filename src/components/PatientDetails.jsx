import React, { Component } from 'react'

class PatientDetails extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {}
  // }

  render() {
    return (
      <div className='col-right'>
        <h2 className='primary-heading'>User Details</h2>
        <div className='user-info'>
          <figure className='profile-pic'>
            <img src='https://chrisbenson.com/images/chrisbenson_square-profile_2016_with-background.png' />
          </figure>

          <div className='user-details'>
            <dl>
              <dt>Name:</dt>
              <dd>Chris Benson</dd>

              <dt>Diagnosis:</dt>
              <dd>Hypertension</dd>

              <dt>Mobile No.:</dt>
              <dd>7387475662</dd>
            </dl>
          </div>

          <div className='other-matches'>
            <h4>Other Matches:</h4>
            <ul>
              <li><img className='higher' src='https://media.creativemornings.com/uploads/user/avatar/89900/Profile_picture_square.jpg'/></li>
              <li><img className='medium' src='http://www.sardiniauniqueproperties.com/wp-content/uploads/2015/10/square-profile-pic-2.jpg'/></li>
              <li><img className='lower' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj0J_rHEqNM0dcwxZw_7WAsW7twPtc6gKCqIVYoWnBlro7zYAg'/></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PatientDetails

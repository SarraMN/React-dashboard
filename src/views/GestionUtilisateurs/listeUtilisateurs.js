import React from 'react'

const listeUtilisateurs = () => {
  return
  ;<div className="content">
    <div className="container">
      <h2 className="mb-5">Table #10</h2>

      <div className="table-responsive">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th scope="col">
                <label className="control control--checkbox">
                  <input type="checkbox" className="js-check-all" />
                  <div className="control__indicator"></div>
                </label>
              </th>
              <th scope="col">Order</th>
              <th scope="col">Name</th>
              <th scope="col">Occupation</th>
              <th scope="col">Contact</th>
              <th scope="col">Education</th>
              <th scope="col">
                <label className="custom-control ios-switch" style="position: relative; top: 10px;">
                  <input type="checkbox" className="ios-switch-control-input js-ios-switch-all" />
                  <span className="ios-switch-control-indicator"></span>
                </label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr scope="row" className="active">
              <td>
                <label className="control control--checkbox">
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
              </td>
              <td>1392</td>
              <td className="pl-0">
                <div className="d-flex align-items-center">
                  <a href="#" className="name">
                    James Yates
                  </a>
                </div>
              </td>
              <td>
                Web Designer
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+63 983 0962 971</td>
              <td>NY University</td>
              <td>
                <label className="custom-control ios-switch">
                  <input type="checkbox" className="ios-switch-control-input" checked="" />
                  <span className="ios-switch-control-indicator"></span>
                </label>
              </td>
            </tr>

            <tr className="active">
              <td>
                <label className="control control--checkbox">
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
              </td>

              <td>4616</td>
              <td className="pl-0">
                <div className="d-flex align-items-center">
                  <a href="#" className="name">
                    Matthew Wasil
                  </a>
                </div>
              </td>
              <td>
                Graphic Designer
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+02 020 3994 929</td>
              <td>London College</td>
              <td>
                <label className="custom-control ios-switch">
                  <input type="checkbox" className="ios-switch-control-input" checked="" />
                  <span className="ios-switch-control-indicator"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label className="control control--checkbox">
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
              </td>
              <td>9841</td>
              <td className="pl-0">
                <div className="d-flex align-items-center">
                  <a href="#" className="name">
                    Sampson Murphy
                  </a>
                </div>
              </td>
              <td>
                Mobile Dev
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+01 352 1125 0192</td>
              <td>Senior High</td>
              <td>
                <label className="custom-control ios-switch">
                  <input type="checkbox" className="ios-switch-control-input" />
                  <span className="ios-switch-control-indicator"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label className="control control--checkbox">
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
              </td>
              <td>9548</td>

              <td className="pl-0">
                <div className="d-flex align-items-center">
                  <a href="#" className="name">
                    Gaspar Semenov
                  </a>
                </div>
              </td>

              <td>
                Illustrator
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+92 020 3994 929</td>
              <td>College</td>
              <td>
                <label className="custom-control ios-switch">
                  <input type="checkbox" className="ios-switch-control-input" />
                  <span className="ios-switch-control-indicator"></span>
                </label>
              </td>
            </tr>

            <tr className="active">
              <td>
                <label className="control control--checkbox">
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
              </td>
              <td>4616</td>
              <td className="pl-0">
                <div className="d-flex align-items-center">
                  <a href="#" className="name">
                    Matthew Wasil
                  </a>
                </div>
              </td>
              <td>
                Graphic Designer
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+02 020 3994 929</td>
              <td>London College</td>
              <td>
                <label className="custom-control ios-switch">
                  <input type="checkbox" checked="" className="ios-switch-control-input" />
                  <span classNameNameName="ios-switch-control-indicator"></span>
                </label>
              </td>
            </tr>
            <tr className="active">
              <td>
                <label className="control control--checkbox">
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
              </td>
              <td>9841</td>
              <td className="pl-0">
                <div className="d-flex align-items-center">
                  <a href="#" className="name">
                    Sampson Murphy
                  </a>
                </div>
              </td>

              <td>
                Mobile Dev
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+01 352 1125 0192</td>
              <td>Senior High</td>
              <td>
                <label className="custom-control ios-switch">
                  <input type="checkbox" checked="" className="ios-switch-control-input" />
                  <span className="ios-switch-control-indicator"></span>
                </label>
              </td>
            </tr>
            <tr>
              <td>
                <label className="control control--checkbox">
                  <input type="checkbox" />
                  <div className="control__indicator"></div>
                </label>
              </td>
              <td>9548</td>
              <td className="pl-0">
                <div className="d-flex align-items-center">
                  <a href="#" className="name">
                    Gaspar Semenov
                  </a>
                </div>
              </td>
              <td>
                Illustrator
                <small className="d-block">Far far away, behind the word mountains</small>
              </td>
              <td>+92 020 3994 929</td>
              <td>College</td>
              <td>
                <label className="custom-control ios-switch">
                  <input type="checkbox" className="ios-switch-control-input" />
                  <span className="ios-switch-control-indicator"></span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
}
export default listeUtilisateurs

import React from "react";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Header({
  NameValue,
  change,
  hobbyChange,
  handleShow,
  BlankValues,
  LogoutHandle,
  handleClose,
  SubmitHandle,
  show
}) {

    return (
    <>
      <div className="d-flex">
        <Button
          className="mx-5"
          variant="primary my-5"
          onClick={(e) => {
            handleShow();
            BlankValues();
          }}
        >
          Add Data
        </Button>

        <Button variant="primary my-5" onClick={LogoutHandle}>
          Logout
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Detail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="mb-5">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input
                name="firstName"
                value={NameValue.firstName}
                onChange={change}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Last Name
              </label>
              <input
                name="lastName"
                value={NameValue?.lastName}
                onChange={change}
                type="text"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                value={NameValue?.email}
                onChange={change}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                onChange={change}
                name="password"
                value={NameValue?.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputNumber" className="form-label">
                Phone No.
              </label>
              <input
                name="phone"
                value={NameValue?.phone}
                onChange={change}
                type="number"
                className="form-control"
                id="exampleInputNumber1"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlSelect1">
                Select Your Role
              </label>
              <select
                name="role"
                value={NameValue?.role}
                onChange={change}
                className="form-control mt-2"
                id="exampleFormControlSelect1"
              >
                <option>Role</option>
                <option>Super Admin</option>
                <option>Admin</option>
                <option>User</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1">Address</label>
              <textarea
                name="address"
                value={NameValue?.address}
                onChange={change}
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlSelect1">Select Country</label>
              <select
                name="country"
                value={NameValue?.country}
                onChange={change}
                className="form-control mt-2"
                id="exampleFormControlSelect1"
              >
                <option>Your Country</option>
                <option>India</option>
                <option>Germany</option>
                <option>Dubai</option>
                <option>Switzerland</option>
                <option>United States</option>
              </select>
            </div>

            <div className="mb-3" onChange={(e) => change(e)}>
              <label
                className="d-block mb-2"
                htmlFor="exampleFormControlSelect1"
              >
                Select Gender
              </label>
              <input
                className="form-check-input mx-1"
                type="radio"
                value="male"
                checked={NameValue?.gender === "male" ? true : false}
                name="gender"
              />{" "}
              Male
              <input
                className="form-check-input mx-1"
                type="radio"
                value="female"
                checked={NameValue?.gender === "female" ? true : false}
                name="gender"
              />{" "}
              Female
              <input
                className="form-check-input mx-1"
                type="radio"
                value="other"
                checked={NameValue?.gender === "other" ? true : false}
                name="gender"
              />{" "}
              Other
            </div>

            <div className="mb-3" name="hobby">
              <label className="mb-2 d-block" htmlFor="scales">
                Select Hobby
              </label>

              <input
                className="me-2"
                name="Coding"
                value="Coding"
                type="checkbox"
                checked={NameValue.hobby.includes("Coding")}
                onChange={(e) => {
                  hobbyChange(e);
                }}
              />
              <label className="me-3" htmlFor="scales">
                Coding
              </label>

              <input
                className="me-2"
                name="Reading"
                type="checkbox"
                checked={NameValue.hobby.includes("Reading")}
                onChange={(e) => {
                  hobbyChange(e);
                }}
              />
              <label className="me-3" htmlFor="horns">
                Reading
              </label>

              <input
                className="me-2"
                name="Music"
                type="checkbox"
                checked={NameValue.hobby.includes("Music")}
                onChange={(e) => {
                  hobbyChange(e);
                }}
              />
              <label className="me-3" htmlFor="horns">
                Music
              </label>

              <input
                className="me-2"
                name="GYM"
                type="checkbox"
                checked={NameValue.hobby.includes("GYM")}
                onChange={(e) => {
                  hobbyChange(e);
                }}
              />
              <label className="me-3" htmlFor="horns">
                GYM
              </label>

              <input
                className="me-2"
                name="Picnic"
                type="checkbox"
                checked={NameValue.hobby.includes("Picnic")}
                onChange={(e) => {
                  hobbyChange(e);
                }}
              />
              <label className="me-3" htmlFor="horns">
                Picnic
              </label>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlSelect1">Date Of Birth</label>
              <input
                name="dob"
                value={NameValue.dob}
                onChange={change}
                className="ms-3"
                type="date"
              ></input>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              handleClose();
            }}
          >
            Close
          </Button>

          <Button variant="dark" onClick={(e) => SubmitHandle(e)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Header;

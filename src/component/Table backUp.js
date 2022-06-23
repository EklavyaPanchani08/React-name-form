import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Table(props) {
  const navigate = useNavigate();

  const interValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
    address: "",
    country: "",
    gender: "",
    hobby: [],
    dob: "",
  };

  const [NameValue, setNameValue] = useState(interValues);
  const [Data, setData] = useState(
    JSON.parse(localStorage.getItem("NewData")) || []
  );
  const [updateId, setupdateId] = useState("");
  const [show, setShow] = useState(false);

  const change = (e) => {
    const { name, value } = e.target;
    setNameValue({ ...NameValue, [name]: value });
  };
  const hobbyChange = (e) => {
    const { name, checked } = e.target;
    if (checked === true) {
      setNameValue({ ...NameValue, hobby: [...NameValue.hobby, name] });
    } else {
      const Hobby = NameValue?.hobby?.filter((f) => f != e.target.name);
      setNameValue({
        ...NameValue,
        hobby: [...Hobby],
      });
    }
  };
  const SubmitHandle = (e , checked) => {
    e.preventDefault();

    if (!NameValue.firstName) {
      toast.warn("Please Enter FirstName");
    } 
      else if (!NameValue.lastName) {
        toast.warn("Please Enter LastName");
    } 
      else if (!NameValue.email) {
        toast.warn("Please Enter Email");
    } 
      else if (!NameValue.password) {
        toast.warn("Please Enter Password");
    } 
      else if (NameValue.password.length < 8) {
        toast.warn("Please Enter 8 Digit Password");
    } 
      else if (!NameValue.phone) {
        toast.warn("Please Enter Mobile No.");
    } 
      else if (NameValue.phone.length !==10) {
        toast.warn("Please Enter Valid Mobile No.");
    } 
      else if (!NameValue.address) {
        toast.warn("Please Enter Address");
    } 
      else if (!NameValue.role) {
        toast.warn("Please Select  Your Role");
    } 
      else if (!NameValue.country) {
        toast.warn("Please Select Your Country");
    } 
      else if (!NameValue.gender) {
        toast.warn("Please Select Your Gender");
    }
    else if (NameValue.hobby.length == 0) {
      toast.warn("Please Select Your Hobby");
  }
      else if (!NameValue.dob) {
        toast.warn("Please Select Your Date Of Birth");
    } else{
      setShow(false);
      if (updateId || updateId === 0) {
        const NewEdit = Data.map((ee, i) => {
          if (updateId === i) {
            return { ...NameValue };
          }
          return ee;
        });
        setupdateId("");
        setData(NewEdit);
        setNameValue(interValues);
        localStorage.setItem("NewData", JSON.stringify([...NewEdit]));
        toast.success("Edit Successful");
      } else {
        setData([...Data, { ...NameValue }]);
        setNameValue(interValues);
        localStorage.setItem(
          "NewData",
          JSON.stringify([...Data, { ...NameValue }])
        );
        toast.success("Data Add Successful");
      }
    }
    // ____________
  };
  const Edit = (index, text) => {
    const NewEdit = Data.map((ee, i) => {
      if (index === i) {
        return {
          ...ee,
          text: text,
        };
      }
      return ee;
    });
    setData(NewEdit);
  };

  const Delete = (xx) => {
    const filterData = Data?.filter((dd, i) => {
      return i !== xx;
    });
    setData(filterData);
    localStorage.setItem("NewData", JSON.stringify([...filterData]));
    toast.error("Data Delete");
  };

  const LogoutHandle = () => {
    navigate("/");
    setTimeout(() => {
      toast.success("Logout Successful");
    }, 100);
    // toast.success("Logout Successful");
    // setTimeout(() => {navigate("/");}, 3000);
    localStorage.removeItem("token");
  };
  
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const BlankValues = () => {
    {
      setNameValue(interValues);
    }
  };

  return (
    <>
      <div className="container">
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
                  value={NameValue.lastName}
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
                  value={NameValue.email}
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
                  value={NameValue.phone}
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
                  value={NameValue.role}
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
                  value={NameValue.address}
                  onChange={change}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlSelect1">
                  Select Country
                </label>
                <select
                  name="country"
                  value={NameValue.country}
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

        <table className="table table-bordered border-dark">
          <thead className="">
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Role</th>
              <th>Address</th>
              <th>Country</th>
              <th>Gender</th>
              <th>Hobby</th>
              <th>DOB</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map(function (Element, index) {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{Element.firstName}</td>
                  <td>{Element.lastName}</td>
                  <td>{Element.email}</td>
                  <td>{Element.phone}</td>
                  <td>{Element.role}</td>
                  <td>{Element.address}</td>
                  <td>{Element.country}</td>
                  <td>{Element.gender}</td>
                  <td>{Element.hobby.join(",")}</td>
                  <td>{Element.dob}</td>
                  <td>
                    <a
                      onClick={() => {
                        setNameValue({ ...Element });
                        setupdateId(index);
                        handleShow();
                      }}
                      className="btn btn-success ms-2"
                    >
                      Edit
                    </a>
                    <a
                      onClick={() => Delete(index)}
                      className="btn btn-danger ms-3"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </>
  );
}

export default Table;

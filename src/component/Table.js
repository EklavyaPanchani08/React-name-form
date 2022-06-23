import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import List from "./List";


function Table (props) {
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
  const SubmitHandle = (e, checked) => {
    e.preventDefault();

    if (!NameValue.firstName) {
      toast.warn("Please Enter FirstName");
    } else if (!NameValue.lastName) {
      toast.warn("Please Enter LastName");
    } else if (!NameValue.email) {
      toast.warn("Please Enter Email");
    } else if (!NameValue.password) {
      toast.warn("Please Enter Password");
    } else if (NameValue.password.length < 8) {
      toast.warn("Please Enter 8 Digit Password");
    } else if (!NameValue.phone) {
      toast.warn("Please Enter Mobile No.");
    } else if (NameValue.phone.length !== 10) {
      toast.warn("Please Enter Valid Mobile No.");
    } else if (!NameValue.address) {
      toast.warn("Please Enter Address");
    } else if (!NameValue.role) {
      toast.warn("Please Select  Your Role");
    } else if (!NameValue.country) {
      toast.warn("Please Select Your Country");
    } else if (!NameValue.gender) {
      toast.warn("Please Select Your Gender");
    } else if (NameValue.hobby.length == 0) {
      toast.warn("Please Select Your Hobby");
    } else if (!NameValue.dob) {
      toast.warn("Please Select Your Date Of Birth");
    } else {
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
        <Header
          NameValue={NameValue}
          show={show}
          change={change}
          hobbyChange={hobbyChange}
          handleShow={handleShow}
          BlankValues={BlankValues}
          LogoutHandle={LogoutHandle}
          handleClose={handleClose}
          SubmitHandle={SubmitHandle}
        />

        <List
          Data={Data}
          setupdateId={setupdateId}
          setNameValue={setNameValue}
          Delete={Delete}
          handleShow={handleShow}
        />
      </div>
      <ToastContainer />
    </>
  );
}

export default Table;

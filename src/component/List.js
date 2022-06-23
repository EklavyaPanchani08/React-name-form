import React from 'react'
import { Button, Modal } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from 'moment';

function List({
    Data,
    setupdateId,
    setNameValue,
    Delete,
    handleShow
}) {
  return (
    <>
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
                  <td>{moment(Element.dob).format('L')}</td>
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
        <ToastContainer />
    </>
  )
}

export default List

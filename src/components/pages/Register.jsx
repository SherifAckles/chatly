import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./register.css";
import Avatar from "assets/avatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "//firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
function Register() {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const file = e.target[2].files[0];
    console.log(e.target[0].value, e.target[1].value, e.target[2].value);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, email);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          setErr(true);
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, { email, photoURL: downloadURL });
            await setDoc(doc(db,"users", res.user.uid), {
              uid: res.user.uid,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <main className="main-container">
      <span className="logo d-flex justify-content-center">
        Chatl <span className="y">y</span>
      </span>
      <Form onSubmit={handleSubmit}>
        <span className="title d-flex justify-content-center m-2">
          Register
        </span>
        <Form.Group
          className="mb-3 container-form-group"
          controlId="formGroupEmail"
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 container-form-group"
          controlId="formGroupPassword"
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            className="email"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Label>Add a profile picture</Form.Label>

        <div>
          <Form.Control
            style={{ display: "none" }}
            type="file"
            id="file"
            variant="light"
            size="md"
          />

          <label htmlFor="file">
            <img src={Avatar} className="avatar " alt="avatar pic" />
          </label>
        </div>

        <div>
          <Button type="submit" className="d-grid mt-2 col-6 mx-auto" size="md">
            Sign up
          </Button>
          {err && <span>Something went wrong</span>}
        </div>
      </Form>
      <p className="d-flex justify-content-center m-4">
        Already have Chatly account? login
      </p>
    </main>
  );
}

export default Register;

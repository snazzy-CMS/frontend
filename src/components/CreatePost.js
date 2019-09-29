import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const CreatePost = ({ status }) => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    status && setPost(post => [...post, status]);
  }, [status]);

  return (
    <div className="create-post">
      <Form>
        <h2>Create a new post</h2>
        <Field type="text" name="title" placeholder="Title" />
        {touched.title && errors.title && (<p>{errors.title}</p>)}

        <Field type="text" name="content" placeholder="Post" />
        {touched.content && errors.content && (<p>{errors.content}</p>)}
        
        <button type="submit">Add Post</button>
      </Form>
      {post.map(postInfo => (
        <div key={postInfo.id}>
          <p>{postInfo.title}</p>
          <p>{postInfo.content}</p>
        </div>
      ))}
    </div>
  );
};

const FormikUserForm = withFormik({
  mapPropsToValues({ title, content }) {
    return {
      title: title || "",
      content: content || ""
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required("A title is required for your post."),
    content: Yup.string().required("Content is required for your post")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log(values);
    resetForm("");
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        setStatus(response.data);
      })
      .catch(error => console.log("This is an error", error));
  }
})(CreatePost);

export default FormikUserForm;

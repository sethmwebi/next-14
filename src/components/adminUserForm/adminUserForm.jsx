"use client";
import React from "react";
import { useFormState } from "react-dom";
import styles from "./adminUserForm.module.css";
import { addUser } from "@/lib/action";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="email" name="email" placeholder="email" />
      <input type="password" name="password" placeholder="password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="">IsAdmin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button type="submit">Add</button>
      {state && state?.error}
    </form>
  );
};

export default AdminUserForm;

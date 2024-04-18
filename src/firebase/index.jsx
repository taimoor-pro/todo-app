import { notifyError, notifySuccess } from "../utils/toast";
import {
  auth,
  db,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  deleteDoc,
} from "./firebase";

export const LoginOnSubmit = async (value, navigate, setUser) => {
  console.log("myValue", value);

  if (value.role === undefined) {
    alert("Please select a role");
    return;
  }

  try {
    const { user } = await signInWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );

    const querySnapshot = await getDocs(collection(db, "register"));
    querySnapshot.forEach((doc) => {
      if (doc.data().uid === user.uid && doc.data().role === value.role) {
        setUser((prevUser) => ({ ...prevUser, role: doc.data().role }));
        notifySuccess("Login successfully!");
        navigate("/dashboard");
        localStorage.setItem("role", doc.data().role);
      }
    });
  } catch (error) {
    console.error("Error logging in:", error.message);
    notifyError(error.message);
  }
};

export const RegisterOnSubmit = async (value, navigate) => {
  console.log("myValue", value);

  const userRegister = {
    email: value.email,
    role: "user",
  };

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      value.email,
      value.password
    );
    await addDoc(collection(db, "register"), {
      ...userRegister,
      uid: user.uid,
    });
    console.log("Document written with ID: ", user);
    notifySuccess("Register successfully!");
    navigate("/");
  } catch (error) {
    notifyError(error.message);
  }
};
export const TodoOnSubmit = async (value) => {
  console.log("myValue", value);

  const todo = {
    text: value.todo,
    completed: false,
  };

  try {
    if (value.todo === "") {
      notifyError("Please enter a valid todo");
      return;
    }
    await addDoc(collection(db, "todos"), todo).then((res) =>
      notifySuccess("Add Todo Successfully!!")
    );
  } catch (error) {
    notifyError(error.message);
  }
};

export const UpdateTodo = async (value) => {
  try {
    await updateDoc(doc(db, "todos", value.id), {
      completed: !value.completed,
    }).then((res) => notifySuccess("Todo Updated Successfully!!"));
  } catch (error) {
    notifyError(error.message);
  }
};

export const DeleteTodo = async (id) => {
  try {
    await deleteDoc(doc(db, "todos", id)).then((res) =>
      notifySuccess("Todo Deleted Successfully!!")
    );
  } catch (error) {
    notifyError(error.message);
  }
};

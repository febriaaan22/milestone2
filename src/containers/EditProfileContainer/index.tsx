import { EditProfileForm } from "@/components";
import React, { useState, useEffect } from "react";

const EditProfileContainer: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userInfo = sessionStorage.getItem("userInfo");
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo) as {
        name: string;
        email: string;
        [key: string]: any;
      };
      if (parsedUserInfo.name && typeof parsedUserInfo.name === "string") {
        setName(parsedUserInfo.name);
      }
      if (parsedUserInfo.email && typeof parsedUserInfo.email === "string") {
        setEmail(parsedUserInfo.email);
      }
    }
  }, []);

  const handleSave = () => {
    console.log("Save logic here");
    // Implement save logic
  };

  const handleCancel = () => {
    console.log("Cancel logic here");
    // Implement cancel logic
  };

  return (
    <EditProfileForm
      name={name}
      email={email}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  );
};

export default EditProfileContainer;

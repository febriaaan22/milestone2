"use client";

import React, { useState } from "react";
import { ChangePasswordForm } from "@/components";

interface ShowPasswordState {
  old: boolean;
  new: boolean;
  confirm: boolean;
}

const ChangePasswordContainer: React.FC = () => {
  const [showPassword, setShowPassword] = useState<ShowPasswordState>({
    old: false,
    new: false,
    confirm: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleToggleShowPassword = (field: keyof ShowPasswordState) => {
    setShowPassword({ ...showPassword, [field]: !showPassword[field] });
  };

  const handleCancel = () => {
    console.log("Cancelled");
  };

  // Function to handle form save action
  const handleSave = (formValues: { oldPassword: string; newPassword: string; confirmPassword: string }) => {
    setIsLoading(true);
    console.log("Saving", formValues); // actual save logic

    // Perform async save operation
    void (async () => {
      try {
        // Await your async save logic here
        console.log("Password changed successfully"); // Implementsuccess logic
      } catch (error) {
        console.error("Error changing password:", error); // Handle errors appropriately
      } finally {
        setIsLoading(false); // Reset the loading state
      }
    })();
  };

  return (
    <ChangePasswordForm
      showPassword={showPassword}
      onToggleShowPassword={handleToggleShowPassword}
      onCancel={handleCancel}
      onSave={handleSave}
      isLoading={isLoading}
    />
  );
};

export default ChangePasswordContainer;

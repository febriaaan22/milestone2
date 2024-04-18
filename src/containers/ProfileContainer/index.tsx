"use client";

import React, { useState } from "react";
import styles from "./ProfileContainer.module.scss";
import ProfileTabs, { TabPanel } from "@/components/ProfileTabs";
import { ApplyAsCounselorContainer, ChangePasswordContainer } from "..";
import EditProfileContainer from "../EditProfileContainer";

const ProfileContainer: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.tabContainer}>
        <ProfileTabs value={value} handleChange={handleChange} />
      </div>
      <div className={styles.editProfileContainer}>
        <TabPanel value={value} index={0}>
          <EditProfileContainer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ChangePasswordContainer />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ApplyAsCounselorContainer />
        </TabPanel>
      </div>
    </div>
  );
};

export default ProfileContainer;

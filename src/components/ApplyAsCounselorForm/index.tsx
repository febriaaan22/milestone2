import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Box, Typography, Paper } from "@mui/material";
import { applyAsCounselorValidationSchema } from "../utils/ValidationSchema";
import styles from "./ApplyAsCounselorForm.module.scss";
import { PrimaryButton } from "..";

interface ApplyAsCounselorFormProps {
  onSubmit: (values: any) => void; // Define a proper type for `values`
}

const ApplyAsCounselorForm: React.FC<ApplyAsCounselorFormProps> = ({
  onSubmit,
}) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper elevation={0} className={styles.wrapper}>
        <Typography variant="h4" className={styles.title}>
          Apply as Counsellor
        </Typography>
        <Formik
          initialValues={{
            fullName: "",
            strNumber: "",
            specialization: "",
            yearsOfExperience: "",
          }}
          validationSchema={applyAsCounselorValidationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form className={styles.applyAsCounselorForm}>
              <Field
                name="fullName"
                as={TextField}
                label="Name"
                size="small"
                error={touched.fullName && Boolean(errors.fullName)}
                helperText={touched.fullName && errors.fullName}
                fullWidth
                margin="normal"
                onChange={handleChange}
              />
              <Field
                name="strNumber"
                size="small"
                as={TextField}
                label="STR Number"
                error={touched.strNumber && Boolean(errors.strNumber)}
                helperText={touched.strNumber && errors.strNumber}
                fullWidth
                margin="normal"
              />
              <Field
                name="specialization"
                as={TextField}
                label="Specialization"
                size="small"
                value={values.specialization}
                onChange={handleChange}
                error={touched.specialization && Boolean(errors.specialization)}
                helperText={touched.specialization && errors.specialization}
                fullWidth
                margin="normal"
              ></Field>
              <Field
                name="yearsOfExperience"
                size="small"
                as={TextField}
                label="Years of Experience"
                type="number"
                helperText={
                  touched.yearsOfExperience && errors.yearsOfExperience
                }
                fullWidth
                margin="normal"
              />
              <Box className={styles.buttonContainer}>
                <PrimaryButton type="submit" text="Send" />
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default ApplyAsCounselorForm;

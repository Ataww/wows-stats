import React, { useEffect, useState } from "react";
import { accountsStructure, apiStructure, CategoryMetadata } from "../../common";
import { ErrorMessage, Field, FieldProps, Form, FormikProps } from "formik";
import { EuClient } from "../../repository/ApiClient";
import { ParametersListWrapper } from "./ParametersList";
import { QueryParameters } from "../QueryBuilder";
import {
  Button,
  FormControl,
  FormHelperText, Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextareaAutosize
} from "@material-ui/core";
import { DotsLoading } from "../../components/loading/Loading";

const formStyle = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(2)
  },
  fieldset: {
    border: 0,
    padding: 0
  }
}));

const categories = Object.keys(apiStructure)
  .map(key => <MenuItem key={key}
                        value={key}>{apiStructure[key].name}</MenuItem>
  );

const QueryBuilderForm = ({ values, touched, errors, setFieldValue }: FormikProps<QueryParameters>) => {
  const [category, setCategory] = useState<CategoryMetadata>(accountsStructure);
  const [methods, setMethods] = useState<React.ReactNode[]>([]);
  const classes = formStyle();
  useEffect(() => {
    setCategory(apiStructure[values.category]);
    if (category) {
      setFieldValue("method", Object.keys(category.methods)[0]);
    }
  }, [values.category, category]);

  useEffect(() => {
    const nodes: React.ReactNode[] = [];
    if (category) {
      for (const path in category.methods) {
        nodes.push(<MenuItem key={path} value={path}>{category.methods[path].method}</MenuItem>);
      }
      setMethods(nodes);
    }
  }, [category]);

  useEffect(() => {
    const path = `${values.category}/${values.method}`;
    const parameters: any = {};
    values.parameters.forEach(p => {
      parameters[p.name] = p.value;
    });
    setFieldValue("query", EuClient.formatQuery(path, parameters));
  }, [values]);

  return (
    <Form className={classes.form}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field name={"query"}
                 render={({ field }: FieldProps<QueryParameters>) => <fieldset className={classes.fieldset}>
                   <InputLabel htmlFor="query-field">Query preview</InputLabel>
                   <TextareaAutosize id="query-field" rows={4} cols={60} {...field} placeholder="query">
                   </TextareaAutosize>
                   <FormHelperText>
                     <ErrorMessage name={"query"}/>
                   </FormHelperText>
                 </fieldset>}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field name={"category"} render={({ field }: FieldProps<QueryParameters>) => (
            <FormControl component={"fieldset"} className={classes.fieldset}>
              <InputLabel htmlFor="category-select">Category</InputLabel>
              <Select {...field} inputProps={{
                id: "category-select",
                name: field.name
              }}>
                {categories}
              </Select>
              <FormHelperText>
                <ErrorMessage name={"category"}/>
              </FormHelperText>
            </FormControl>)}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field name={"method"} render={({ field }: FieldProps<QueryParameters>) => (
            <FormControl component={"fieldset"} className={classes.fieldset}>
              <InputLabel htmlFor="method-select">Method</InputLabel>
              <Select {...field} inputProps={{
                id: "method-select",
                name: field.name
              }}>
                {methods}
              </Select>
            </FormControl>
          )}/>
        </Grid>
        <Grid item xs={12}>
          <ParametersListWrapper values={values}/>
        </Grid>
        <Grid item xs={12}>
          <Field name="query" render={({ form }: FieldProps<QueryParameters>) =>
            <Button variant={"outlined"} color={"secondary"} type={"submit"}>{form.isSubmitting ?
              <DotsLoading/> : "Run query"}</Button>
          }
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default QueryBuilderForm;

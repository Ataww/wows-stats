import React, { useEffect, useMemo, useState } from "react";
import { Field, FieldProps, Form, Formik, FormikProps } from "formik";
import { accountsStructure, ApiMetadata, apiStructure, CategoryMetadata } from "../common";
import "./QueryBuilder.scss";
import { EuClient } from "../repository/ApiClient";
import { ParametersListWrapper } from "./query/ParametersList";

export interface Parameter {
  name: string;
  value: string;
}

export interface QueryParameters {
  category: keyof ApiMetadata;
  method: string;
  query: string;
  parameters: Parameter[]

}

const QueryBuilderForm = ({ values, touched, errors, setFieldValue }: FormikProps<QueryParameters>) => {
  const [category, setCategory] = useState<CategoryMetadata>(accountsStructure);
  const [methods, setMethods] = useState<React.ReactNode[]>([]);

  const categories = useMemo(() => Object.keys(apiStructure)
    .map(key => <option key={key}
                        value={key}>{apiStructure[key].name}</option>
    ), []);

  useEffect(() => {
    setCategory(apiStructure[values.category]);
    if (category) {
      setFieldValue("method", Object.keys(category.methods)[0]);
    }
  }, [values.category, setFieldValue, category]);

  useEffect(() => {
    const nodes: React.ReactNode[] = [];
    if (category) {
      for (const path in category.methods) {
        nodes.push(<option key={path} value={path}>{category.methods[path].method}</option>);
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
  }, [values, setFieldValue]);

  return (
    <Form>
      <Field name={"query"} render={({ field, form }: FieldProps<QueryParameters>) => <div>
        <label htmlFor="query-field">Query preview</label>
        <textarea id="query-field" cols={50} {...field} placeholder="query" onChange={() => {
        }}>
                </textarea>
        {form.touched.query && form.errors.query && form.errors.query}
      </div>}/>
      <Field name={"category"} render={({ field }: FieldProps<QueryParameters>) => (
        <div>
          <label htmlFor="category-select">Category</label>
          <select id="category-select" {...field}>
            {categories}
          </select>
          {touched.category && errors.category && errors.category}
        </div>)}/>
      <Field name={"method"} render={({ field }: FieldProps<QueryParameters>) => (
        <div>
          <label htmlFor="method-select">Method</label>
          <select id="method-select" {...field}>
            {methods}
          </select>
        </div>
      )}/>
      <ParametersListWrapper values={values}/>
    </Form>
  );
};

const QueryBuilder: React.FC = () => {
  return (<div>
    <h4>Query Builder</h4>
    <Formik
      initialValues={{
        query: "",
        category: accountsStructure.path,
        method: Object.keys(accountsStructure.methods)[0],
        parameters: []
      }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
      }}
    >
      {(props: FormikProps<QueryParameters>) => <QueryBuilderForm {...props}  />}
    </Formik>
  </div>);
};

export default QueryBuilder;
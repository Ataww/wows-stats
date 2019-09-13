import React, { useEffect, useState } from "react";
import { accountsStructure, apiStructure, CategoryMetadata } from "../../common";
import { Field, FieldProps, Form, FormikProps } from "formik";
import { EuClient } from "../../repository/ApiClient";
import { ParametersListWrapper } from "./ParametersList";
import { QueryParameters } from "../QueryBuilder";

const categories = Object.keys(apiStructure)
  .map(key => <option key={key}
                      value={key}>{apiStructure[key].name}</option>
  );

const QueryBuilderForm = ({ values, touched, errors, setFieldValue }: FormikProps<QueryParameters>) => {
  const [category, setCategory] = useState<CategoryMetadata>(accountsStructure);
  const [methods, setMethods] = useState<React.ReactNode[]>([]);

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
  }, [values]);

  return (
    <Form>
      <Field name={"query"} render={({ field, form }: FieldProps<QueryParameters>) => <div>
        <label htmlFor="query-field">Query preview</label>
        <textarea id="query-field" cols={80} rows={4} {...field} placeholder="query" onChange={() => {
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
      <div>
        <button type={"submit"}>Run query</button>
      </div>
    </Form>
  );
};

export default QueryBuilderForm;
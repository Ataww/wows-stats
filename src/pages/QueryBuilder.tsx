import React, { useCallback, useEffect, useState } from "react";
import { Formik, FormikActions, FormikProps } from "formik";
import { accountsStructure, ApiMetadata } from "../common";
import "./QueryBuilder.scss";
import { EuClient } from "../repository/ApiClient";
import QueryBuilderForm from "./query/Form";
import { parse } from "json2csv";

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

const QueryBuilder: React.FC = () => {
  const [jsonResult, setJsonResult] = useState<any>(null);
  const [csvResult, setCsvResult] = useState("");
  const [pretty, setPretty] = useState(false);

  useEffect(() => {
    if (jsonResult) {
      setCsvResult(parse(jsonResult, {
        flatten: true
      }));
    }
  }, [jsonResult]);

  const submitHandler = useCallback(async (values: QueryParameters, actions: FormikActions<QueryParameters>) => {
    const response = await EuClient.runQuery(values.query);
    response.cata(({ error }) => setJsonResult(error), val => setJsonResult(val.data));
    actions.setSubmitting(false);
  }, []);

  return (<div>
    <h4>Query Builder</h4>
    <Formik
      initialValues={{
        query: "",
        category: accountsStructure.path,
        method: Object.keys(accountsStructure.methods)[0],
        parameters: []
      }}
      onSubmit={submitHandler}
    >
      {(props: FormikProps<QueryParameters>) => <div><QueryBuilderForm {...props}  />
        <div>
          <h4>JSON result</h4>
          <textarea cols={80} rows={10} value={JSON.stringify(jsonResult)} readOnly/>
        </div>
        <div>
          <h4>CSV result</h4>
          <textarea cols={80} rows={10} value={csvResult} readOnly/>
        </div>
        <a href={window.URL.createObjectURL(new Blob([csvResult], { type: "text/csv" }))}
           download={"result.csv"}
           id="csv-download"
        >
          Download CSV
        </a>
      </div>}
    </Formik>
  </div>);
};

export default QueryBuilder;
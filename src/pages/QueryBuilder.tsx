import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Formik, FormikActions, FormikProps } from "formik";
import { accountsStructure, ApiMetadata } from "../common";
import { EuClient } from "../repository/ApiClient";
import QueryBuilderForm from "./query/Form";
import { parse } from "json2csv";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";

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

const JsonCard: React.FC<{ value: any }> = ({ value }) => {
  const [pretty, setPretty] = useState(false);
  const formattedValue = useMemo(() =>
    JSON.stringify(value, null, pretty ? 2 : undefined), [pretty, value]);
  return (<Card>
    <CardContent>
      <Typography variant={"h5"}>JSON result</Typography>
      <textarea cols={80} rows={10} value={formattedValue} readOnly/>
    </CardContent>
    <CardActions>
      <Button component={"a"} size={"small"}
              href={window.URL.createObjectURL(new Blob([formattedValue], { type: "text/json" }))}
              download={"result.json"}
      >Download</Button>
      <Button size={"small"} onClick={() => setPretty(!pretty)}>Pretty print</Button>
    </CardActions>
  </Card>);
};

const CsvCard: React.FC<{ value: string }> = ({ value }) => {
  return (<Card>
    <CardContent>
      <Typography variant={"h5"}>CSV result</Typography>
      <textarea cols={80} rows={10} value={value} readOnly/>
    </CardContent>
    <CardActions>
      <Button component={"a"} size={"small"} href={window.URL.createObjectURL(new Blob([value], { type: "text/csv" }))}
              download={"result.csv"}
      >Download</Button>
    </CardActions>
  </Card>);
};

const QueryBuilder: React.FC = () => {
  const [jsonResult, setJsonResult] = useState<any>(null);
  const [csvResult, setCsvResult] = useState("");

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

  return (<Grid container spacing={3}>
    <Typography variant={"h4"}>Query Builder</Typography>
    <Formik
      initialValues={{
        query: "",
        category: accountsStructure.path,
        method: Object.keys(accountsStructure.methods)[0],
        parameters: []
      }}
      onSubmit={submitHandler}
    >
      {(props: FormikProps<QueryParameters>) => <Grid container spacing={1}
                                                      direction={"column"}><QueryBuilderForm {...props}  />
        <Grid item><JsonCard value={jsonResult}/></Grid>
        <Grid item><CsvCard value={csvResult}/></Grid>
      </Grid>}
    </Formik>
  </Grid>);
};

export default QueryBuilder;

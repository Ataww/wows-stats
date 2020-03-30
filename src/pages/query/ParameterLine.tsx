import { BaseParameters } from "../../search";
import { Parameter, QueryParameters } from "../QueryBuilder";
import React, { useMemo, useState } from "react";
import { concat, map, pipe, uniq } from "ramda";
import { Field, FieldProps } from "formik";
import { ParameterSelect } from "./ParameterSelect";
import { Grid, IconButton, Input } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

export interface LineProps<T extends BaseParameters = BaseParameters> {
  availableParameters: Array<keyof T>;
  parameter: Parameter;
  index: number;
  required?: boolean;

  changeValue(previous: string, current: string, index: number): void;

  remove(parameter: string, index?: number): void;
}

export const ParameterLine = <T extends BaseParameters = BaseParameters>({ availableParameters, parameter, changeValue, remove, index }:
                                                                           LineProps) => {
  const [currentParameter, setCurrentParameter] = useState(parameter.name);
  const parameters = useMemo(() => pipe(map(String), concat([currentParameter]), uniq)(availableParameters), [currentParameter, availableParameters]);

  return <Grid item container>
    <Field name={`parameters.${index}.name`}
           render={() => <Grid item xs={4} sm={2}><ParameterSelect
             fields={parameters}
             setParameter={(prev, cur) => {
               console.log(`${prev} => ${cur}`);
               setCurrentParameter(cur);
               changeValue(prev, cur, index);
             }
             }/></Grid>}/>

    <Field name={`parameters.${index}.value`}
           render={({ field }: FieldProps<QueryParameters>) => <Grid item xs={6} sm={8}><Input
             type="text" {...field}
             placeholder={currentParameter} fullWidth/></Grid>
           }/>
    <Grid item xs={2}>
      <IconButton onClick={() => remove(parameter.name, index)} aria-label="delete"><Delete/> </IconButton>
    </Grid>
  </Grid>;
};

import { BaseParameters } from "../../search";
import { Parameter, QueryParameters } from "../QueryBuilder";
import React, { useMemo, useState } from "react";
import { concat, map, uniq, pipe } from "ramda";
import { Field, FieldProps } from "formik";
import { ParameterSelect } from "./ParameterSelect";

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

  return <div className="parameter-row">
    <Field name={`parameters.${index}.name`}
           render={() => <div className="parameter-select"><ParameterSelect
             fields={parameters}
             setParameter={(prev, cur) => {
               console.log(`${prev} => ${cur}`);
               setCurrentParameter(cur);
               changeValue(prev, cur, index);
             }
             }/></div>}/>

    <Field name={`parameters.${index}.value`}
           render={({ field }: FieldProps<QueryParameters>) => <div className="parameter-input"><input
             type="text" {...field}
             placeholder={currentParameter}/></div>
           }/>
    <div>
      <button type="button" onClick={() => remove(parameter.name, index)}>X</button>
    </div>
  </div>;
  ;
  ;
  ;
};
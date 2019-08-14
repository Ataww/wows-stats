import React, { useEffect, useMemo, useState } from "react";
import { Field, FieldArray, FieldArrayRenderProps, FieldProps } from "formik";
import { Parameter, QueryParameters } from "../QueryBuilder";
import { apiStructure, QueryMetadata } from "../../common";
import { BaseParameters } from "../../search";
import { ParameterSelect } from "./ParameterSelect";
import { concat, isEmpty, pipe, uniq } from "ramda";
import "./ParametersList.scss";
import useDualList from "../../common/useDualList";

interface ParametersListProps extends FieldArrayRenderProps {
  method: QueryMetadata;
}

export function ParametersListWrapper({ values }: { values: QueryParameters }) {
  return <FieldArray name="parameters" render={props => {
    const method = apiStructure[values.category].methods[values.method];
    if (method) {
      return <ParametersList method={method} {...props} />;
    } else {
      return null;
    }
  }
  }/>;
}

export function ParametersList({ method, form, ...props }: ParametersListProps) {

  const [available, taken, take, release, swap] = useDualList(method.parameters as string[]);

  useEffect(() => {
    console.log(`Available: ${available}`);
  }, [available]);

  useEffect(() => {
    console.log(`Taken: ${taken}`);
  }, [taken]);

  useEffect(() => {
    form.setFieldValue("parameters", []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [method]);

  const changeValue = (prev: string, cur: string, index: number) => {
    swap(cur, prev);
    props.replace(index, {
      name: cur,
      value: ""
    });
  };

  const addParam = (name?: string) => {
    const param = take(name);
    props.push({
      name: param,
      value: ""
    });
  };

  const removeParam = (name: string, index: number) => {
    release(name);
    props.remove(index);
  };

  return <div className="parameters-list">
    {form.values.parameters.map((p: Parameter, idx: number) => <ParameterLine availableParameters={available}
                                                                              parameter={p}
                                                                              changeValue={changeValue}
                                                                              remove={removeParam} key={idx}
                                                                              index={idx}/>)}
    {!isEmpty(available) &&
    <div>
      <button type="button" onClick={() => addParam()}>Add parameter</button>
    </div>}
  </div>;
}
;

interface LineProps<T extends BaseParameters = BaseParameters> {
  availableParameters: Array<keyof T>;
  parameter: Parameter;
  index: number;

  changeValue(previous: string, current: string, index: number): void;

  remove(parameter: string, index?: number): void;
}

const ParameterLine = <T extends BaseParameters = BaseParameters>({ availableParameters, parameter, changeValue, remove, index }:
                                                                    LineProps) => {
  const [currentParameter, setCurrentParameter] = useState(parameter.name);
  const parameters = useMemo(() => pipe(concat([currentParameter]), uniq)(availableParameters as string[]), [currentParameter, availableParameters]);

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
;
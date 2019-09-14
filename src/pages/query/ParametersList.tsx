import React, { useEffect, useMemo } from "react";
import { FieldArray, FieldArrayRenderProps } from "formik";
import { Parameter, QueryParameters } from "../QueryBuilder";
import { apiStructure, isStringParameter, MethodParameter, QueryMetadata } from "../../common";
import { BaseParameters } from "../../search";
import { compose, isEmpty, map } from "ramda";
import "./ParametersList.scss";
import useDualList from "../../common/useDualList";
import { ParameterLine } from "./ParameterLine";

interface ParametersListProps<T> extends FieldArrayRenderProps {
  method: QueryMetadata<T>;
}

export function ParametersListWrapper({ values }: { values: QueryParameters }) {
  return <FieldArray name="parameters" render={props => {
    const category = apiStructure[values.category];
    if (!category) {
      return null;
    }
    const method = category.methods[values.method];
    if (method) {
      return <ParametersList method={method} {...props} />;
    } else {
      return null;
    }
  }
  }/>;
}

export function ParametersList<T extends BaseParameters = BaseParameters>({ method, form, ...props }: ParametersListProps<T>) {
  const parameters = useMemo<string[]>(() => compose(map(String),
    map((param: keyof T | MethodParameter<T>) => isStringParameter(param) ? param : param.name)
  )(method.parameters), [method.parameters]);

  const [available, taken, take, release, swap] = useDualList(parameters);

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
    const param = take(name) || "";
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
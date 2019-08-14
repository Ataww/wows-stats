import React, { useMemo, useState } from "react";
import { BaseParameters } from "../../search";

interface ParameterSelectProps<T> {
  fields: Array<keyof T>,

  setParameter(previous: string, current: string): void
}

export const ParameterSelect = <T extends BaseParameters = BaseParameters>(props: ParameterSelectProps<T>) => {
  const [selected, setSelected] = useState<keyof T>(props.fields[0]);
  const displayFields = useMemo(
    () => props.fields.map((v, idx) => <option key={idx}
                                               value={String(v)}>{v}</option>),
    [props.fields]);
  return (<select value={selected as string} onChange={e => {
    setSelected(e.target.value);
    props.setParameter(selected as string, e.target.value);
  }}>
    {displayFields}
  </select>);
};
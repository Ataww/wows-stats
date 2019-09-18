import React, { useMemo, useState } from "react";
import { BaseParameters } from "../../search";
import { MenuItem, Select } from "@material-ui/core";

interface ParameterSelectProps<T> {
  fields: Array<keyof T>,

  setParameter(previous: string, current: string): void
}

export const ParameterSelect = <T extends BaseParameters = BaseParameters>(props: ParameterSelectProps<T>) => {
  const [selected, setSelected] = useState<keyof T>(props.fields[0]);
  const displayFields = useMemo(
    () => props.fields.map((v, idx) => <MenuItem key={idx}
                                               value={String(v)}>{v}</MenuItem>),
    [props.fields]);
  return (<Select value={selected as string} onChange={e => {
    setSelected(e.target.value as string);
    props.setParameter(selected as string, e.target.value as string);
  }}>
    {displayFields}
  </Select>);
};

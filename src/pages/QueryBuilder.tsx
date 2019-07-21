import React, {useEffect, useMemo, useState} from "react";
import {Field, FieldProps, Form, Formik, FormikProps} from "formik";
import {
    accountsStructure,
    ApiMetadata,
    apiStructure,
    Categories,
    CategoryMetadata,
    Methods,
    PlayerMethods
} from "../common";
import "./QueryBuilder.scss";

interface QueryParameters {
    category: keyof ApiMetadata;
    method: Methods;
    query: string;
}

const QueryBuilderForm = ({handleChange, values, touched, errors, setFieldValue, ...props}: FormikProps<QueryParameters>) => {
    const [category, setCategory] = useState<CategoryMetadata>(accountsStructure);
    const [methods, setMethods] = useState<React.ReactNode[]>([]);

    const categories = useMemo(() => Object.keys(apiStructure)
        .map(key => <option key={key}
                            value={key}>{apiStructure[key].name}</option>
        ), []);

    useEffect(() => {
        setCategory(apiStructure[values.category])
    }, [values.category]);

    useEffect(() => {
        const nodes: React.ReactNode[] = [];
        if (category) {
            for (const path in category.methods) {
                nodes.push(<option key={path} value={path}>{category.methods[path].method}</option>)
            }
            setMethods(nodes);
        }
    }, [category]);

    useEffect(() => {
        setFieldValue("query", `https://api.worldofwarships.eu/wows/${values.category}/${values.method}/`)
    }, [values.category, values.method, setFieldValue]);

    return (
        <Form>

            <Field name={"category"} render={({field}: FieldProps<QueryParameters>) => (
                <div>
                    <label htmlFor="category-select">Category</label>
                    <select id="category-select" {...field}>
                        {categories}
                    </select>
                    {touched.category && errors.category && errors.category}
                </div>)}/>
            <Field name={"method"} render={({field}: FieldProps<QueryParameters>) => (
                <div>
                    <label htmlFor="method-select">Method</label>
                    <select id="method-select" {...field}>
                        {methods}
                    </select>
                </div>
            )}/>
            <Field name={"query"} render={({field, form}: FieldProps<QueryParameters>) => <div>
                <label htmlFor="query-field">Query preview</label>
                <textarea id="query-field" cols={50} {...field} placeholder="query" onChange={() => {
                }}>
                </textarea>
                {form.touched.query && form.errors.query && form.errors.query}
            </div>}/>
        </Form>
    )
}

const QueryBuilder: React.FC = props => {
    return (<div>
        <h4>Query Builder</h4>
        <Formik initialValues={{query: "", category: Categories.ACCOUNT, method: PlayerMethods.PLAYER_SEARCH}}
                onSubmit={(values, actions) => {
                    console.log(JSON.stringify(values));
                    actions.setSubmitting(false);
                }}
        >
            {(props: FormikProps<QueryParameters>) => <QueryBuilderForm {...props}  />}
        </Formik>
    </div>)
}

export default QueryBuilder;
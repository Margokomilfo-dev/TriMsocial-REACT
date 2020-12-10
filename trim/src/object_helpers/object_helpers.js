import {Field} from "redux-form";
import React from "react";

export const updateObjectInArray = (items, objPropName, itemId, newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}

export const createField = (className, component, type, name, placeholder, fieldText) => {
    return (
        <div className={className}>
            <Field component ={component} type={type} name={name} placeholder={placeholder}/> {fieldText}
        </div>
    )
}
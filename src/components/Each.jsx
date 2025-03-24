import React, { Children } from 'react';

/**
 * A utility component that iterates over an array and renders elements.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {boolean} props.if - Condition that determines whether to render the list
 * @param {Array} props.of - The array to iterate over
 * @param {Function} props.as - Function that receives each item and index and returns a React element
 * @param {Function | string} [props.or=null] - Fallback content to render if the condition is false
 * @returns {Array|null} Array of rendered elements or fallback content
 */
export const Each = props =>
  props.if ? Children.toArray(props.of.map((item, i) => props.as(item, i))) : props.or || null;

/**
 * A utility component that iterates over object entries and renders elements.
 * 
 * @component
 * @param {Object} props - The component props
 * @param {boolean} props.if - Condition that determines whether to render the entries
 * @param {Object} props.of - The object whose entries to iterate over
 * @param {Function} props.as - Function that receives each [key, value] pair and index and returns a React element
 * @param {Function | string} [props.or=null] - Fallback content to render if the condition is false
 * @returns {Array|null} Array of rendered elements or fallback content
 */
export const EachEntry = props => (
  <Each of={Object.entries(props.of)} if={props.if} as={props.as} or={props.or} />
);
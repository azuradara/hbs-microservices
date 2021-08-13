import React from 'react';
import styled from 'styled-components';

const TextInput = React.forwardRef(
  ({ type, name, placeholder, icon: Icon, ...rest }, ref) => {
    return (
      <div className="flex flex-col mb-2">
        <div className="flex relative gap-1">
          <span className="rounded-md inline-flex  items-center px-3 border-t bg-white border  border-gray-300 text-gray-500 shadow-sm text-sm">
            {Icon && <Icon className="h-4 w-4" />}
          </span>

          <input
            {...rest}
            type={type}
            name={name}
            ref={ref}
            placeholder={placeholder}
            className="w-full rounded-lg flex-1 appearance-none border border-gray-300 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-christalle-400 focus:border-transparent"
          />
        </div>
      </div>
    );
  }
);

export default TextInput;

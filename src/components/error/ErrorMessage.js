import React from 'react';
/*
 * Purpose: The purpose of this component is to render common errors.
 *          This component is going to be common to all the routes.
 * Version: 1.0
 * Author: dev@cefalo.com
 */

const ErrorMessage = ({ errorMsg }) =>{
   return(
       <div className="error">
           {errorMsg} msg
       </div>
   )
};
export default ErrorMessage;

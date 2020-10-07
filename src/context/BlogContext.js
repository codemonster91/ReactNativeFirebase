import React from 'react';

const BlogContext = React.createContext();

export const BlockProvider = ({childern})=>{
    return <BlogContext.Provider>{childern}</BlogContext.Provider>
    
} ;

export default BlogContext;
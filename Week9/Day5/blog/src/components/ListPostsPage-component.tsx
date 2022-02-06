import React from 'react';

import logo from "../assets/blog.png"

import { styles } from "../styles";
import { blogStateType } from '../types/types';
interface iDetailsProps {
   article: blogStateType
}
export const ListPostsPage: React.FC<iDetailsProps> = ({article}) => {
  return (
    <>
    
      <div style={styles.card}>
        <img src={logo} style={styles.logo} />
        <span>
          <h1>{article.title}</h1>
          <p>{article.details}</p>
        </span>
      </div>
    </>
    
  );
};

import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { selectPost } from '../store/actions/blog-action';

import { blogStateType } from '../types/types';
import { ListPostsPage } from './ListPostsPage-component';

interface IProps {
  articles: Array<blogStateType>
  selectPostHandler: Function
}
const HomePage: React.FC<IProps> = ({ articles, selectPostHandler }) => {
console.log(articles);

  return (
    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',}}>
      <h1 style={{ alignSelf: 'flex-start' }}>Home page</h1>
      {articles.length &&
        articles.map((el, index) => {
          return (
            <div key={index}>
              <NavLink
                to="/post"
                onClick={() => selectPostHandler(el)}
                style={{ color: 'black', textDecoration: 'none' }}>
                <ListPostsPage article={el}/>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return {
    articles: state.blog
  };
};


const mapDispatchToProps = (dispatch: Function) => {
   return {
      selectPostHandler: (el: blogStateType) => dispatch(selectPost(el))
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

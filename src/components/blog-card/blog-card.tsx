import { FC } from 'react';
import { TPost } from '../../types';
import { Link } from '@mui/material';
import { BlogCardUI } from '../ui';
import { NavLink } from 'react-router-dom';

type TBlogCardProps = {
  post: TPost;
};

export const BlogCard: FC<TBlogCardProps> = ({ post }) => {
  const handleClick = () => {
    //тут будет сохраняться в стор post
  };

  return (
    <>
      <NavLink to={`/blog/post/${post.id}`} onClick={() => handleClick()}>
        <BlogCardUI post={post} />
      </NavLink>
    </>
  );
};

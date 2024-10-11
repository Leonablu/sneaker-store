import { FC } from 'react';
import { TPost } from '../../types';
import { Link } from '@mui/material';
import { BlogCardUI } from '../ui';

export type TBlogCardProps = {
  post: TPost;
};

export const BlogCard: FC<TBlogCardProps> = ({ post }) => {
  const a = 1;
  return (
    <>
      <Link underline='none'>
        <BlogCardUI post={post}></BlogCardUI>
      </Link>
    </>
  );
};

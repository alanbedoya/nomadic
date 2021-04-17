import React from 'react';
import { Divider, Skeleton, Alert } from 'antd';
import './styles/ListingsSkeleton.css';

interface Props {
  title: string;
  error?: boolean;
}

export const ListingsSkeleton = ({ title, error = false }: Props) => {
  const errorAlert = error ? (
    <Alert
      type='error'
      message='Dang, seems like something went wrong - please try again later.'
      className='skeleton-alert'
    />
  ) : null;

  return (
    <div className='skeleton-list'>
      {errorAlert}
      <h2>{title}</h2>
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
      <Divider />
      <Skeleton active paragraph={{ rows: 1 }} />
    </div>
  );
};

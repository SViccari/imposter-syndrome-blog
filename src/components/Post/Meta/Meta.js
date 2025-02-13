import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

const Meta = ({ date, filename }) => {
  let fileNameDate = moment(date).format('YYYY-MM-DD');

  let markdownName = `${fileNameDate}---${filename}`;
  let repoUrl = 'https://github.com/sbatson5/imposter-syndrome-blog/edit/master/content/posts/';
  let fullUrl = `${repoUrl}${markdownName}`;

  return (
    <div className={styles['meta']}>
      <p className={styles['meta__date']}>Published {moment(date).format('D MMM YYYY')}</p>
      <p className={styles['meta__date']}>Find a typo? <a href={fullUrl} target="_blank">Edit the file here!</a></p>
    </div>
  );
};

export default Meta;

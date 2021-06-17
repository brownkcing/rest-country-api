import * as React from 'react';
import * as style from './tag.module.scss';

interface TagProps {
    symbol?: string;
    code: string;

}

export const Tag: React.FC<TagProps> = (props) => {
    const {symbol, code} = props;
  return (
      <div className={`${style.code} mx-1`}>{symbol && <span className={`px-1`}>{symbol}</span>}{code}</div>
  );
};
import * as React from 'react';
import * as style from './button.module.scss';
import { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: 'contained' | 'outlined' | 'text';
    btnIcon?: ReactNode;
    btnClassName?: string;
    color?: 'primary' | 'secondary' | 'transparent';
    loading?: boolean;
    buttonLabelClass?: string;
}

export const Button: React.FC<ButtonProps> = props => {
    const { btnType, btnIcon, className, children, loading, color = 'primary', buttonLabelClass, ...otherProps } = props;

    const renderColor = (color:string) => {
        switch (color) {
            case 'primary':
                return style.primary;
            case 'secondary':
                return style.secondary;
            case 'transparent':
                return style.transparent;
        }
    };

    return (
        <div>
            <button
                className={`${style.button} ${renderColor(color)} ${loading && style.loading} ${className}`}
                {...otherProps}
            >
        <span className={style.btnSpinner}>
          {loading ? <FontAwesomeIcon icon={faSpinner} spin={true} /> : btnIcon ? btnIcon : null}
        </span>
                <span className={`${style.btnLabel} ${buttonLabelClass}`}>{children}</span>
            </button>
        </div>
    );
};

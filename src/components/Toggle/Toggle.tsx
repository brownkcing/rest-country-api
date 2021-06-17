import * as React from 'react';
import * as style from './toggle.module.scss';

interface ToggleProps {
    checked?: boolean;
    className?: string;
    sameColor?: boolean;
    defaultChecked?: boolean;
    onChange?: (e:any) => void;
}

export const Toggle = (props: ToggleProps) => {
    const {
        sameColor = false,
        className,
        checked,
        defaultChecked,
        onChange
    } = props
    return (
        <label className={[style.switch__Toggle, className].join(' ')}>
            <input type="checkbox" checked={checked} defaultChecked={defaultChecked} onChange={onChange} />
            <span className={[style.slider, sameColor && style.sameColor].join(' ')} />
        </label>
    );
};

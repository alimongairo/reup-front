import { useState } from 'react';
import classNames from 'classnames';
import cx from './index.module.scss';

import SelectedOption from './SelectedOption';

import { ReactComponent as SearchIcon } from '../../../../static/images/icons/search.svg';
import { ISelectOption } from '../Select/interface';

export interface ISelect {
    label?: string;
    placeholder?: string;
    options: ISelectOption[];
    onChange: any;
    value: string | string[];
    multiple?: boolean;
    withPercentage?: boolean;
}

const SearchableSelect = ({
    label,
    placeholder,
    options,
    onChange,
    value,
    multiple,
    withPercentage,
}: ISelect) => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    const onMultipleSelect = (newValue: ISelectOption) => {
        onChange([...value, newValue.value]);
    };

    const onSelect = (newValue: ISelectOption) => {
        onChange(newValue.value);
    };

    return (
        <div className={cx.wrapper}>
            <div className={cx.label}>{label}</div>

            <div
                className={classNames(
                    cx.container,
                    !multiple && value.length > 0 ? cx.disabled : ''
                )}
                onClick={() => setOpen(!open)}
            >
                <div className={cx.content}>
                    <input
                        placeholder={placeholder}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <SearchIcon />
                </div>
                <div className={classNames(cx.dropdown, open && cx.visible)}>
                    {options
                        .filter((el) => !value.includes(el.value))
                        .filter((el) => el.label.includes(search))
                        .map((option, i) => {
                            return (
                                <div
                                    className={cx.option}
                                    key={i}
                                    onClick={() =>
                                        multiple
                                            ? onMultipleSelect(option)
                                            : onSelect(option)
                                    }
                                >
                                    {option.label}
                                </div>
                            );
                        })}
                </div>
            </div>

            {Boolean(value.length) && (
                <div className={cx.selectedOptions}>
                    {Array.isArray(value) ? (
                        value.map((el, i) => (
                            <SelectedOption
                                key={i}
                                option={options.find(
                                    (option) => option.value == el
                                )}
                                value={value}
                                onChange={onChange}
                                withPercentage={withPercentage}
                            />
                        ))
                    ) : (
                        <SelectedOption
                            option={options.find(
                                (option) => option.value == value
                            )}
                            value={value}
                            onChange={onChange}
                            withPercentage={withPercentage}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchableSelect;

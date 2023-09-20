import { useCallback } from 'react';
import cx from './index.module.scss';
import { ReactComponent as DeleteIcon } from '../../../../../static/images/icons/close.svg';
import { ISelectOption } from '../../Select/interface';

interface Props {
  option: ISelectOption | undefined;
  value: string | string[];
  onChange: any;
}

const SelectedOption = ({ option, value, onChange }: Props) => {
  const handleDelete = useCallback(() => {
    onChange(
      Array.isArray(value) ? value.filter((el) => el !== option?.value) : '', 
    );
  }, [onChange, option?.value, value]);

  if (option) {
    return (
      <div className={cx.option}>
        {option.label}
        <DeleteIcon onClick={handleDelete} className={cx.icon}/>
      </div>
    );
  }
  return null;
};

export default SelectedOption;

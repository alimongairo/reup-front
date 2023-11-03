import cx from './index.module.scss';
import classNames from 'classnames';
import { ReactComponent as DeleteIcon } from '../../../../../static/images/icons/close.svg'
import { ISelectOption } from '../../Select/interface';

interface Props {
  option: ISelectOption | undefined;
  active: boolean;
  disabled: boolean;
}

const SelectedOption = ({ option, active, disabled }: Props) => {
  if (option) {
    return (
      <div
        className={classNames(
          cx.option,
          active ? cx.active : '',
          disabled ? cx.disabled : '',
        )}
      >
        {option.label}
        {active && <DeleteIcon fill='#fff' width='14px' height='14px'/>}
      </div>
    );
  }
  return null;
};

export default SelectedOption;

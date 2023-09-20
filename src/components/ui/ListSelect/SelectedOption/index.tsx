import cx from './index.module.scss';
import classNames from 'classnames';
import { ReactComponent as DeleteIconActive } from '../../../../../static/images/icons/close.svg'
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
        {active && <DeleteIconActive />}
      </div>
    );
  }
  return null;
};

export default SelectedOption;

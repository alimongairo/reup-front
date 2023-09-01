import searchLogo from '../../../../static/images/icons/search.svg';
import cx from './index.module.scss';
import { Input } from '@mui/material';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div className={cx.searchWrapper}>
      <Input
        placeholder="поиск"
        spellCheck={false}
        className={cx.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <img
        src={searchLogo}
        alt="searchLogo"
        width={18}
        height={18}
        style={{ cursor: 'pointer' }}
        className={cx.searchIcon}
      />
    </div>
  );
};

export default SearchInput;
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import cx from './index.module.scss';
import SizeSelectSingle from './SizeSelectSingle';
import SizeSelectRange from './SizeSelectRange';
import { Product, SizeType } from '../../../types/productEditTypes';
import Switcher from '../../ui/Switcher';
import { Grid } from '@mui/material';

interface Props {
  state: Product;
  setState: Dispatch<SetStateAction<Product>>;
}

const sizes = ['36', '38', '42', '44', '46'];

const SizeBlock = ({ state, setState }: Props) => {
  const handleChange = useCallback(
    (name: string) => {
      return (value: string) => setState((prevState) => ({ ...prevState, [name]: value }));
    },
    [setState],
  );

  useEffect(() => {
    state.sizeType === SizeType.single
      ? setState({ ...state, sizes: [''] })
      : setState({ ...state, sizes: [['', '']] });
  }, [setState, state, state.sizeType]);

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
        <div className={cx.switcherBox}>
          <Switcher
            value={state.sizeCountry}
            onChange={handleChange('sizeCountry')}
            leftOption={{ label: 'int', value: 'int' }}
            rightOption={{ label: 'ru', value: 'ru' }}
          />
          {state.sizeCountry && (
            <Switcher
              value={state.sizeType}
              onChange={handleChange('sizeType')}
              leftOption={{ label: 'размер', value: SizeType.single }}
              rightOption={{ label: 'диапозон размеров', value: SizeType.range }}
            />
          )}
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className={cx.sizesBox}>
          {state.sizeType === SizeType.single && (
            <SizeSelectSingle
              value={state.sizes as string[]}
              onChange={handleChange('sizes')}
              sizes={sizes}
            />
          )}
          {state.sizeType === SizeType.range && (
            <SizeSelectRange
              value={state.sizes as string[][]}
              onChange={handleChange('sizes')}
              sizes={sizes}
            />
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default SizeBlock;

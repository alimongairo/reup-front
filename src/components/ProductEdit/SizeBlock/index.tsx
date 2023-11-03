import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
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
    (name: string) => (value: string) => 
      setState((prevState) => ({ ...prevState, [name]: value })),
  [setState]);

  useEffect(() => {
    state.sizeType === SizeType.single
      ? setState((prevState) => ({ ...prevState, sizes: [''] }))
      : setState((prevState)=>({ ...prevState, sizes: [['', '']] }));
  }, [setState, state.sizeType]);

  return (
    <Grid container spacing={6}>
      <Grid item xs={6}>
          <Switcher
            value={state.sizeCountry}
            onChange={handleChange('sizeCountry')}
            leftOption={{ label: 'int', value: 'int' }}
            rightOption={{ label: 'ru', value: 'ru' }}
          />
          {state.sizeCountry && (
            <Switcher
              additional
              value={state.sizeType}
              onChange={handleChange('sizeType')}
              leftOption={{ label: 'размер', value: SizeType.single }}
              rightOption={{ label: 'диапозон размеров', value: SizeType.range }}
            />
          )}
      </Grid>
      <Grid item xs={6}>
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
      </Grid>
    </Grid>
  );
};

export default SizeBlock;

import classNames from 'classnames';
import { LegacyRef } from 'react';
import { Input } from "@/components/ui";
import { Grid, Stack } from '@mui/material';
import { uid } from "react-uid";

interface IField {
  name: string;
  label: string;
}

interface IProps {
  className?: string;
  formRef: LegacyRef<HTMLFormElement> | undefined;
  fields: IField[][];
}

const BrandRegistrationForm = ({ className, formRef, fields }: IProps) => {
  return (
    <div className={classNames(className)}>
      <form ref={formRef}>
        <Grid container spacing={12} direction='row'>
          {fields.map((column) => (
            <Grid item container spacing={4} xs={6} key={uid(column)}>
              {column.map((item) => (
                <Grid item xs={12} key={uid(item)}>
                  <Stack spacing={2.5}>
                    <p>{item.label}</p>
                    <Input
                      key={item.name}
                      name={item.name}
                    />
                  </Stack>
                </Grid>
              ))}
            </Grid>
          ))}
        </Grid>
      </form>
    </div>
  );
};

export default BrandRegistrationForm;

import { useEffect, useRef, useState } from 'react';
import { Tabs, ETabsView, Typography, Button } from '../../../components/ui';
import {
  IFreelanceFormFields,
  ICorporateFormfields,
  corporateFormFields,
  freelanceFormFields,
} from './constants';


import { CRMLayout } from "../../../layouts";
import cx from './index.module.scss';
import { BrandRegistrationForm } from "./components";


const BrandRegistrationPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<
    IFreelanceFormFields | ICorporateFormfields | {}
  >({});

  const onChangeForm = () => {
    if (formRef.current) {
      const data = new FormData(formRef.current);
      setFormData((state: any) => ({
        ...state,
        ...Object.fromEntries([...data]),
      }));
      // после отправки нужно будет чистить setFormData({})
    }
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <CRMLayout>
      <div className={cx.wrapper}>
        <Typography variant="h1" className={cx.heading}>регистрация бренда</Typography>

        <div className={cx.subheading}>
          <Typography variant="h2">1 /&nbsp;</Typography>
          <Typography variant="h2">укажи форму предпринимательства </Typography>
        </div>

        <Tabs
          tabs={[
            {
              id: 1,
              title: '1',
              content: (
                <BrandRegistrationForm
                  className={cx.subcontent}
                  formRef={formRef}
                  fields={freelanceFormFields}
                />
              ),
            },
            {
              id: 2,
              title: '2',
              content: (
                <BrandRegistrationForm
                  className={cx.subcontent}
                  formRef={formRef}
                  fields={corporateFormFields}
                />
              ),
            },
          ]}
          view={ETabsView.BUTTONS}
          className={cx.tabs}
          tabHeader={
            <div className={cx.subheading}>
              <Typography variant="h2">2 /&nbsp;</Typography>
              <Typography variant="h2">заполни форму регистрации</Typography>
            </div>
          }
        />
        <div className={cx.subheading}>
          <Typography variant="h2">3 /&nbsp;</Typography>
          <Typography variant="h2">
            заверши регистрацию оформлением страницы бренда
          </Typography>
        </div>

        <div className={cx.subcontent}>
          <Button onClick={onChangeForm}>
            отправить регистрацию и перейти к оформлению
          </Button>
        </div>
      </div>
    </CRMLayout>
  );
};

export default BrandRegistrationPage;

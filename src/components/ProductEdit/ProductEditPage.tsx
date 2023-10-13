import { useCallback, useState, useMemo, ChangeEvent } from "react";
// import { useNavigate } from "react-router-dom";
// import { ERoutes } from "../../app/router/config";
import { initState } from "../../types/productEditTypes";

// import CancelButton from "../ui/CancelButton";
import { Divider, Input, Typography, Select, ImageUpload, SearchableSelect, Button } from "../ui";
import { Grid, Stack } from "@mui/material";

import cx from './index.module.scss';
import ListSelect from "../ui/ListSelect";
import SizeBlock from "./SizeBlock";

const options = [
    { label: 'option 1', value: '1' },
    { label: 'option 2', value: '2' },
    { label: 'option 3', value: '3' },
    { label: 'option 4', value: '4' },
    { label: 'option 5', value: '5' },
  ];

const delivery = '0';

const ProductEditLayout = () => {
    // const navigate = useNavigate();
    const [state, setState] = useState(initState);

    const withDiscount = useMemo(() => {
        return (Number(state.price) * (1 - Number(state.discount) / 100));
    }, [state.discount, state.price]);

    const comission = useMemo(() => {
        return (Number(state.price) * 0.15);
    }, [state.price]);

    const total = useMemo(() => {
        return (Number(withDiscount) - Number(delivery) - Number(comission));
    }, [comission, delivery, withDiscount]);
    
    const handleSelect = useCallback((name: string) => (value: string) => {
        setState((prevState) => ({ ...prevState, [name]: value}));
    }, []);

    const handleInput = useCallback((name: string) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState((prevState) => ({ ...prevState, [name]: e.target.value}));
    }, []);

    const handleChangeMainMedia = useCallback(() => (value: any) => {
        setState((prevState) => ({ ...prevState, media: { ...prevState.media, main: value } }));
    }, []); 

    const handleChangeMedia = useCallback(
    (i: number) => (value: string) => {
        const newState = { ...state };
        newState.media.other[i] = value;
        setState(newState);
    }, []);

    const handleChangeCharacterictic = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setState((prevState) => ({
            ...prevState,
            characterictics: { ...prevState.characterictics, text: e.target.value },
        }));
    }, []);

    const mainBlock = useMemo(() => {
        return (
            <div className={cx.block}>
                <div className={cx.heading}>
                    <Typography variant='h2'>главная</Typography>
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <Stack spacing={4}>
                            <Select
                                options={options}
                                label="тип товара"
                                value={state.type}
                                onChange={handleSelect('type')}
                            />
                            <Select
                                options={options}
                                label="категория"
                                value={state.category}
                                onChange={handleSelect('category')}
                            />
                            {state.category &&
                                <Select
                                    options={options}
                                    label="подкатегория"
                                    value={state.subcategory}
                                    onChange={handleSelect('subcategory')}
                                />
                            }
                            {state.subcategory &&
                                <Select
                                    options={options}
                                    label="под-подкатегория"
                                    value={state.subsubcategory}
                                    onChange={handleSelect('subsubcategory')}
                                />
                            }
                        </Stack>
                    </Grid>
                    <Grid item xs={8}>
                        <Stack spacing={1}>
                            <Input
                                fullWidth
                                label="название товара"
                                value={state.name}
                                onChange={handleInput('name')}
                                limit={60}
                            />
                            <Input
                                fullWidth
                                className={cx.description}
                                label="описание товара"
                                value={state.description}
                                onChange={handleInput('description')}
                                multiline
                                rows={8}
                                limit={600}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </div>
        );
    }, [state]);

    const mediaBlock = useMemo(() => { // fix grid
        return (
            <div className={cx.block}>
                <div className={cx.heading}>
                    <Typography variant='h2'>мультимедиа</Typography>
                </div>
                <Grid container direction='row' spacing={3}>
                    <Grid container item xs={4} >
                        <ImageUpload main value={state.media.main} onChange={handleChangeMainMedia}/>
                    </Grid>
                    <Grid item container direction='row' xs={8} spacing={3}>
                        {state.media.other.map((el, i) => (
                            <Grid container item xs={12/5} key={i}>
                                <ImageUpload value={el} onChange={handleChangeMedia(i)}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </div>
        );
    }, [state]);

    const detailsBlock = useMemo(() => {
        return (
            <div className={cx.block}>
                <div className={cx.heading}>
                    <Typography variant='h2'>о товаре</Typography>
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <SearchableSelect
                            label="материал"
                            placeholder="состав"
                            value={state.fabric}
                            onChange={handleSelect('fabric')}
                            options={options}
                            multiple
                            withPercentage
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SearchableSelect
                            label="цвет"
                            placeholder="цвет"
                            value={state.color}
                            onChange={handleSelect('color')}
                            options={options}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SearchableSelect
                            label="узор"
                            placeholder="узор"
                            value={state.pattern}
                            onChange={handleSelect('pattern')}
                            options={options}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SearchableSelect
                            label="стиль"
                            placeholder="стиль"
                            value={state.style}
                            onChange={handleSelect('style')}
                            options={options}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ListSelect
                            label="сезон"
                            value={state.season}
                            onChange={handleSelect('season')}
                            options={options}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <ListSelect
                            label="пол"
                            value={state.gender}
                            onChange={handleSelect('gender')}
                            options={options}
                        />
                    </Grid>
                </Grid>
          </div>
        );
    }, [state]);

    const characteristicsBlock = useMemo(() => {
        return (
            <div className={cx.block}>
                <div className={cx.heading}>
                    <Typography variant='h2'>характеристики</Typography>
                </div>
                <Input
                    fullWidth
                    label="описание товара"
                    value={state.characterictics.text}
                    onChange={handleChangeCharacterictic}
                    multiline
                    rows={5}
                />
            </div>
        );
    }, [state]);

    const sizeBlock = useMemo(() => {
        return (
            <div className={cx.block}>
                <div className={cx.heading}>
                    <Typography variant='h2'>размеры</Typography>
                </div>
                <SizeBlock state={state} setState={setState}/>
            </div>
        );
    }, [state]);

    const deliveryBlock = useMemo(() => {
        return (
            <div className={cx.block}>
                <div className={cx.heading}>
                    <Typography variant='h2'>выбор пвз</Typography>
                </div>
                <Grid container direction='row' spacing={3}>
                    <Grid item xs={5}>
                        <Select
                            label="пункт выдачи"
                            options={options}
                            value={state.poi}
                            onChange={handleSelect('poi')}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Select
                            label="вес товара"
                            options={options}
                            value={state.weight}
                            onChange={handleSelect('weight')}
                        />
                    </Grid>
                </Grid>
            </div>
        );
    }, [state]);

    const priceBlock = useMemo(() => {
        return (
            <div className={cx.block}>
                <div className={cx.heading}>
                    <Typography variant='h2'>стоимость</Typography>
                </div>
                <div className={cx.priceBlock}>
                    <div className={cx.inputBlock}>
                        <div className={cx.price}>
                            <Input
                                type='number'
                                fullWidth
                                label="стоимость"
                                value={state.price}
                                onChange={handleInput('price')}
                            />
                        </div>
                        <div className={cx.sale}>
                            <Input
                                type='number'
                                fullWidth
                                label="скидка"
                                value={state.discount}
                                onChange={handleInput('discount')}
                            />
                            %
                        </div>
                        <div className={cx.sum}>
                            <span className={cx.sumLabel}>
                            стоимость&nbsp;со&nbsp;скидкой:&nbsp;
                            </span>
                            <span className={cx.sumValue}>
                            {Math.floor(Number(withDiscount) * 100) / 100}
                            </span>
                        </div>
                        </div>
                        <div className={cx.infoBlock}>
                        <div className={cx.infoItem}>
                            <div>стоимость доставки: </div>
                            <div>{delivery} ₽</div>
                        </div>
                        <div className={cx.infoItem}>
                            <div>комиссия REUP (15%):</div>
                            <div>{Math.floor(Number(comission) * 100) / 100} ₽</div>
                        </div>
                        </div>
                        <div className={cx.total}>
                        <div className={cx.totalLabel}>
                            итоговая сумма, которую вы получите:
                        </div>
                        <div>{Math.floor(Number(total) * 100) / 100} ₽</div>
                    </div>
                </div>
            </div>
        );
    }, [state]);

    return (
        <div className={cx.wrapper}>
            {/* <CancelButton onClick={() => navigate(ERoutes.Stock)}/> */}
            <Typography variant="h1" className={cx.headerLabel}>добавить товар</Typography>
            <div className={cx.formWrapper}>
                <Divider direction="horizontal" />
                {mainBlock}
                <Divider direction="horizontal" />
                {mediaBlock}
                <Divider direction="horizontal" />
                {detailsBlock}
                <Divider direction="horizontal" />
                {characteristicsBlock}
                <Divider direction="horizontal" />
                {sizeBlock}
                <Divider direction="horizontal" />
                {deliveryBlock}
                <Divider direction="horizontal" />
                {priceBlock}
                <Divider direction="horizontal" />
                <div className={cx.confirm}>
                    <Button onClick={() => {}}>добавить товар на склад</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductEditLayout;
import { RootState } from '../../../app/store';

export const brandSettingsSelector = (state: RootState) => state.brandSettings;

export const brandSettingsColorAndFamilySelector = (state: RootState) =>
    state.brandSettings.colorAndFamily;

export const brandSettingsBgColorsSelector = (state: RootState) =>
    state.brandSettings.bgColor;

export const brandSettingsCategoriesSelector = (state: RootState) =>
    state.brandSettings.categories;

export const brandSettingsTextSelector = (state: RootState) =>
    state.brandSettings.editText;

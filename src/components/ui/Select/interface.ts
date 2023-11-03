export interface ISelectOption {
    label: string;
    value: string;
}
  
export type SelectValue<Multiple extends boolean | undefined> = Multiple extends true
    ? string[]
    : string;
  
export interface Props<Multiple extends boolean | undefined> {
    label?: string;
    options: ISelectOption[];
    value?: SelectValue<Multiple>;
    onChange: (value: SelectValue<Multiple>) => void;
    className?: string;
    multiple?: Multiple;
    disabled?: boolean;
    isDisabledClearable?: boolean;
    fullWidth?: boolean;
}
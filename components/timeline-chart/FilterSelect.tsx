import React, { useState, Component } from 'react';
import classNames from "classnames";
import { default as ReactSelect } from "react-select";
import { components } from "react-select";

const Option = (props:any) => {
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
};

export default class FilterSelect extends Component<any, any> {
    constructor(props:any) {
        super(props);
        this.state = {
            optionSelected: props.defaultValue ? props.defaultValue : null,
            menuOpened: null,
            // allSelected: props.allowSelectAll && props.defaultValue.value == 'all',
        };
    }
    menuOpen = () => {
        this.setState({
            menuOpened: true
        });
    };
    menuClose = () => {
        this.setState({
            menuOpened: false
        });
    };
    handleChange = (selected:any) => {
        this.props.onChange(selected)
    };

    render() {
        return (
        <ReactSelect
            {...this.props}
            classNames={{
                control: ({ isDisabled, isFocused }) =>
                    classNames(
                        'text-sm tracking-wide min-w-[120px] hover:cursor-pointer py-2 pl-4 pr-2 font-bold bg-primary-light rounded-3xl',
                        this.state.menuOpened && 'rounded-none rounded-t-2xl',
                    ),
                option: ({ isDisabled, isFocused, isSelected }) =>
                    classNames(
                        'hover:cursor-pointer flex items-center pl-1 text-sm tracking-wide font-bold',
                        // isSelected && 'bg-primary',
                         !isSelected && isFocused && 'bg-primary',
                        // !isDisabled && isSelected && 'active:bg-purple-800',
                        // !isDisabled && !isSelected && 'active:bg-purple-500'
                    ),
                menu: ({  }) =>
                    classNames(
                        'bg-primary-light p-3 rounded-3xl',
                        this.state.menuOpened && 'rounded-none rounded-b-2xl',
                    ),
                dropdownIndicator: () =>
                    classNames(
                        this.state.menuOpened && 'rotate-180'
                    ),
                menuList: () =>
                    classNames(
                        'overflow-x-hidden'
                    ),
            }}
            options={this.props.options}
            unstyled
            onMenuOpen={this.menuOpen}
            onMenuClose={this.menuClose}
            defaultValue={this.props.defaultValue || 'Select'}
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{
                Option
            }}
            // menuIsOpen={true}
            onChange={this.handleChange}
            value={this.state.optionSelected}
        />
        );
    }
}
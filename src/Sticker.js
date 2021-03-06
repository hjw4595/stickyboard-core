// src/Sticker.js

import React from 'react';
import styled, { keyframes } from 'styled-components';

const showAnim = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const hideAnim = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const Wrapper = styled.div``;

const Shadow = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px 0 rgba(187, 187, 187, 1);
    background-color: #ffffff;
    visibility: ${(props) => (props.isEditingMode ? 'visible' : 'hidden')};
    animation: ${(props) => (props.isEditingMode ? showAnim : hideAnim)} 0.5s
        ease-in-out;
    -webkit-transition: -webkit-visibility 0.5s ease-in-out;
    transition: visibility 0.5s ease-in-out;
`;

const Content = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`;

const MenuContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`;

const MenuButton = styled.button`
    width: 100%;
    padding: 4px 8px;
    &:not(:last-child) {
        margin-bottom: 8px;
    }
    font-size: 16px;
    color: #333333;
`;

class Sticker extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {
            children,
            className,
            onChange,
            onDelete,
            ...other
        } = this.props;

        const isEditingMode =
            className && className.includes('react-resizable');

        return (
            <Wrapper {...other} className={className}>
                <Shadow isEditingMode={isEditingMode} />
                <Content>{children}</Content>

                {isEditingMode && (
                    <MenuContainer>
                        <MenuButton onClick={onChange}>Change</MenuButton>
                        <MenuButton onClick={onDelete}>Delete</MenuButton>
                    </MenuContainer>
                )}
            </Wrapper>
        );
    }
}

export default Sticker;

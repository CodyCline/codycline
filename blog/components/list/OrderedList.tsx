import React from "react";
import styled from "styled-components";
import { ListItem, ListBullet } from "./ListItem";


const OrderedListContainer = styled.ol`
    padding: 0;
    list-style: none;
    border-left: 2px solid blue;
    margin-left: 12px;
`




export const OrderedList = ({children}:any) => {
    return (
        <OrderedListContainer>
            {
                React.Children.map(children, (child, index) => {
                    return (
                        <ListItem>
                            <ListBullet>
                                {index + 1}
                            </ListBullet>
                            {child.props.children}
                        </ListItem>
                    );
                })
            }
        </OrderedListContainer>
    )
}
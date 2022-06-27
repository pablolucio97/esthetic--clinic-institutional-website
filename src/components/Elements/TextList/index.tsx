import React from 'react';
import { Container, Item } from './styles';

interface TextListProps {
    list: string[];
}

export function TextList({ list }: TextListProps) {
    return (
        <Container>
            {list.map((text, i) => (
                <Item key={i}>{text}</Item>
            ))}
        </Container>
    )
}
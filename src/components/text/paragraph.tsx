import React, { FC, ReactNode } from 'react';

export enum ParagraphSizes {
    m = 'm',
    l = 'l',
}

export type ParagraphProps = {
    children: ReactNode;
    size: ParagraphSizes;
}

const classMap = {
    m: 'font-poppins font-medium text-current text-base leading-snug',
    l: 'font-poppins font-medium text-current text-2xl leading-normal',
}

export const Paragraph: FC<ParagraphProps> = ({ children, size = ParagraphSizes.m }) => (
    <p className={classMap[size]}>
        {children}
    </p>
)

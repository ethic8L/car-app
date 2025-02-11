"use client";
import React from 'react';
import { useRouter } from 'next/router';
import { ShowMoreProps } from '@/types';

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter();

    const handleNavigation = () => {};

    return (
     <div>ShowMore</div>
 )
}

export default ShowMore
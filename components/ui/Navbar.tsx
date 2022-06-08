import React from "react";
import Image from 'next/image'
import { Text, useTheme } from '@nextui-org/react'
import { Spacer } from '@nextui-org/react';

export const Navbar = () => {
    const {theme} =useTheme()
    return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'start',
        padding: '0x 20px',
        color:'black',
        backgroundColor:theme?.colors.gray200.value
    }}>
        <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
        alt="icono de la app"
        width={70}
        height={70}
        />

        <Text color='white' h2>P</Text>
        <Text color='white' h3>okémon</Text>
       <Spacer css={{ flex: 1 }} />
        <Text color='white' h3>Favoritos</Text>
    </div>
    );
}
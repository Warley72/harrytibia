"use client"

import Link from "next/link"
import Image from "next/image"
import {HeaderContainer, NavegationContainer, NavegationButton} from './style'

export default function Header() {
    return(
        <div>
            <HeaderContainer>
                <nav>
                    <NavegationContainer>
                        <Link href={"#"}>
                            <NavegationButton>Home</NavegationButton>
                        </Link>
                        <Link href={"#"}>
                            <NavegationButton>Phases</NavegationButton>
                        </Link>
                        <Image 
                            priority 
                            src="/header/logoHarry.png"
                            alt="LogoHarry" 
                            width={72} 
                            height={78} />
                        <Link href={"#"}>
                            <NavegationButton>Create</NavegationButton>
                        </Link>
                        <Link href={"#"}>
                            <NavegationButton>Login</NavegationButton>
                        </Link>
                    </NavegationContainer>
                </nav>
            </HeaderContainer>
        </div>
    )
}
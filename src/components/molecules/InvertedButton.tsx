import styled from "@emotion/styled";
 

type Param = {
    children: string,
    ahref: any,
    icon: any
}

export const InvertedButton = ({ahref, icon}: Param) => {
    const Icon = styled.div`
    background-image: url(${icon});
    background-position: center;
    width:100%;
    height:100%;
    :hover{
        filter: invert(3%);
        box-shadow:6px 6px 6px -1px black;
    }
    `

    return(
        <a href={ahref} style={{height:50, width:50}}>
            <Icon></Icon>
        </a>
    )
}

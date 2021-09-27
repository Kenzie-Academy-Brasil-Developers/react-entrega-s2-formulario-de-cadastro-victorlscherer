import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    form{
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 450px;
        justify-content: space-between;
        
    }

    p{
        margin-top: -0px;
        color: red;
        min-height: 20px;
        font-size: 18px;
    }

`

export default Container;
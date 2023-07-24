import { styled } from "styled-components";

export const Father = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalDiv = styled.div`
	border-radius: 20px;
	box-sizing: border-box;
	padding: 20px 10px 24px;
	background-color: white;
	width: 410px;
	height: 550px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	min-height: 400px;
	justify-content: space-between;
`;

export const BtnContainer = styled.div`
	display: flex;
	justify-content: right;
`;

export const LogoImg = styled.img`
	width: 32px;
	height: 32px;
`;

export const BoldSpan = styled.h2`
	font-size: 25px;
	font-weight: bold;
	margin: 10px 0 10px 0;
`;

export const Input = styled.input`
	border: 1.5px solid #9492927f;
	width: 220px;
	height: 34px;
	border-radius: 13px;
	margin-bottom: 10px;
`;

export const Label = styled.label`
	font-size: 12px;
	position: absolute;
	left: 100px;
`;

export const MediumSpan = styled.span`
	font-size: 12px;
	font-weight: bold;
	position: absolute;
	left: 100px;
	padding-bottom: 30px;
`;

export const MediumDiv = styled.div`
	font-size: 12px;
	font-weight: bold;
	padding-top: 6px;
`;

export const Span = styled.span`
	font-size: x-small;
`;

export const Button = styled.button`
	border: 0px;
	height: 35px;
	display: inline-block;
	border-radius: 20px;
	-webkit-font-smoothing: antialiased;
	padding: 0px 18px;
	font-size: 13px;
	font-weight: bold;
	cursor: pointer;
	margin-top: 8px;
	vertical-align: middle;
	background-color: ${(props) => props.backgroundColor};
	color: rgb(255, 255, 255);
	width: 100%;
`;
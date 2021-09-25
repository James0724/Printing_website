import styled from 'styled-components';

export const PrimaryButton = styled.button`
	background-color: #000958;
	border-color: #000958;
	color: #fff;
	border-radius: ${(props) => (props.r === 'none' ? '0' : '')};
	&:hover {
		background-color: #277adc;
		border-color: #277adc;
	}
`;

export const SecondaryButton = styled.button.attrs((props) => ({
	background: props.bg || 'transparent',
}))`
	background: ${(props) => props.bg};
    border-color: #fff;
	color: #fff;
	&:hover {
		background: #fff;
        color: #444;
    }
	}
`;

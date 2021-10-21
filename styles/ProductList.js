import styled from 'styled-components'
import * as include from 'styles/utilities'

export const ProductList = styled.div`
	${include.grid(1)}

	${include.media.md`
	    ${include.grid(2)}
    `};

	${include.media.lg`
	    ${include.grid(3)}
    `};

	${include.media.xl`
	    ${include.grid(4)}
    `};

	${include.media.xxl`
	    ${include.grid(6)}
    `};
`

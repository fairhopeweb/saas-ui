import * as React from 'react'
import {
  chakra,
  HTMLChakraProps,
  keyframes,
  useColorModeValue,
} from '@chakra-ui/react'

const dash = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 220%;
  }
`

interface LogoGlyph extends HTMLChakraProps<'svg'> {
  isAnimating?: boolean
  variant?: 'solid' | 'gradient'
  color?: string
}

const SaasUIGlyph: React.FC<LogoGlyph> = (props) => {
  const {
    isAnimating,
    variant = 'gradient',
    color = '#8952e0',
    ...rest
  } = props

  return (
    <chakra.svg version="1.1" viewBox="0 0 432 520" {...rest}>
      <g fill={color}>
        <path
          d="M185.59,22.26c4.41-0.43,7.58-1,10.76-1.01c64.35-0.05,128.7,0.18,193.04-0.26c10.8-0.07,13.54,3.89,13.39,13.89
		c-0.46,30.3-0.59,60.62,0.03,90.92c0.23,11.53-4.58,14.09-14.99,14.03c-60.62-0.34-121.23-0.19-181.85-0.15
		c-19.86,0.01-28.7,8.87-28.71,28.59c-0.01,41.97-0.29,83.94,0.21,125.9c0.13,10.91-3.23,14.7-14.36,14.55
		c-40.09-0.54-80.21-0.6-120.3,0.03c-11.48,0.18-14.2-4.15-14.1-14.67c0.41-44.76,0.42-89.53-0.01-134.29
		c-0.1-10.25,3.06-13.89,13.54-13.75c37.76,0.49,75.54,0.23,113.31,0.16c18.68-0.03,29.2-10.48,29.23-28.84
		c0.04-26.58-0.03-53.16,0.05-79.74C184.82,32.63,185.3,27.63,185.59,22.26z"
        />
        <path
          d="M137.43,499.73c-31.26,0-62.53-0.5-93.77,0.26c-11.97,0.29-15.24-3.98-15-15.32c0.6-29.38,0.82-58.8-0.07-88.16
		c-0.39-12.83,4.34-15.53,16.17-15.43c59.71,0.52,119.43,0.26,179.15,0.22c21.14-0.01,30.37-9.21,30.37-30.14
		c0.01-41.06,0.31-82.11-0.21-123.16c-0.14-11,2.21-15.8,14.52-15.59c40.11,0.7,80.24,0.52,120.36,0.1
		c10.13-0.11,13.98,2.82,13.87,13.48c-0.48,44.78-0.48,89.58,0.03,134.36c0.13,11.16-3.63,14.43-14.6,14.26
		c-37.78-0.58-75.58-0.28-113.36-0.19c-17.88,0.04-28.11,10.48-28.15,28.45c-0.05,27.53-0.42,55.06,0.16,82.57
		c0.23,10.81-2.99,14.76-14.28,14.52C200.89,499.29,169.16,499.73,137.43,499.73z"
        />
      </g>
    </chakra.svg>
  )
}

export default SaasUIGlyph

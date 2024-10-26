import React from 'react'


export const X: React.FC<{color?: string}> = ({color = '#3374DB'}) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.9996 11.7018L26.5492 0.152344L29.849 3.45217L18.2994 15.0016L29.849 26.5509L26.5492 29.8507L14.9996 18.3014L3.45024 29.8507L0.150391 26.5509L11.6998 15.0016L0.150391 3.45217L3.45024 0.152344L14.9996 11.7018Z" fill={color}/>
    </svg>
  )
}

export const O: React.FC<{color?: string}> = ({color = '#636779'}) => {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.0007 53.6667C12.2731 53.6667 0.333984 41.7275 0.333984 27C0.333984 12.2724 12.2731 0.333374 27.0007 0.333374C41.7281 0.333374 53.6673 12.2724 53.6673 27C53.6673 41.7275 41.7281 53.6667 27.0007 53.6667ZM27.0007 48.3334C38.7828 48.3334 48.334 38.7822 48.334 27C48.334 15.218 38.7828 5.66671 27.0007 5.66671C15.2186 5.66671 5.66732 15.218 5.66732 27C5.66732 38.7822 15.2186 48.3334 27.0007 48.3334Z" fill={color}/>
    </svg>
  )
}